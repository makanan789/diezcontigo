// Local worker. The unmodified encoder and its license are distributed separately.
importScripts('./vendor/lame.min.js');

self.onmessage = ({data}) => {
  try {
    const {samples, sampleRate} = data;
    if (!(samples instanceof Float32Array) || !samples.length || sampleRate !== 32000) {
      throw new Error('Invalid PCM input');
    }
    const encoder = new lamejs.Mp3Encoder(1, sampleRate, 64);
    const output = [];
    const blockSize = 1152;
    const pcm = new Int16Array(blockSize);
    let lastProgress = -1;
    for (let offset = 0; offset < samples.length; offset += blockSize) {
      const count = Math.min(blockSize, samples.length - offset);
      for (let i = 0; i < count; i++) {
        const sample = Math.max(-1, Math.min(1, samples[offset + i]));
        pcm[i] = Math.round(sample * (sample < 0 ? 32768 : 32767));
      }
      const encoded = encoder.encodeBuffer(count === blockSize ? pcm : pcm.subarray(0, count));
      if (encoded.length) output.push(new Uint8Array(encoded).buffer);
      const progress = Math.floor((offset + count) / samples.length * 100);
      if (progress >= lastProgress + 5) {
        lastProgress = progress;
        self.postMessage({kind:'progress', value:progress});
      }
    }
    const tail = encoder.flush();
    if (tail.length) output.push(new Uint8Array(tail).buffer);
    if (!output.length) throw new Error('Empty MP3');
    self.postMessage({kind:'complete', chunks:output, channels:1, sampleRate, bitsPerSecond:64000}, output);
    self.close();
  } catch {
    self.postMessage({kind:'error'});
    self.close();
  }
};
