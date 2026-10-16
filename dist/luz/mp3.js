const abortError = () => new DOMException('Conversion cancelled', 'AbortError');
const checkActive = signal => { if (signal?.aborted) throw abortError(); };

// Offline decoding normalizes every supported capture container to 32 kHz PCM.
// Averaging channels here also guarantees mono if the input device ignored it.
export async function prepareMP3(recording, {signal, onProgress} = {}) {
  checkActive(signal);
  const OfflineContext = window.OfflineAudioContext || window.webkitOfflineAudioContext;
  if (!OfflineContext || !window.Worker) throw new Error('Local MP3 conversion unavailable');
  const decoder = new OfflineContext(1, 1, 32000);
  let decoded = await decoder.decodeAudioData(await recording.arrayBuffer());
  checkActive(signal);
  const samples = new Float32Array(decoded.length);
  const channels = Array.from({length:decoded.numberOfChannels}, (_, i) => decoded.getChannelData(i));
  const portion = 65536;
  for (let offset = 0; offset < samples.length; offset += portion) {
    checkActive(signal);
    const end = Math.min(samples.length, offset + portion);
    for (const channel of channels) {
      for (let i = offset; i < end; i++) samples[i] += channel[i] / channels.length;
    }
    // Long recordings yield while mixing so that Back and Borrar remain responsive.
    if (offset && offset % (portion * 8) === 0) await new Promise(resolve => setTimeout(resolve, 0));
  }
  decoded = null;
  channels.length = 0;
  checkActive(signal);
  return new Promise((resolve, reject) => {
    let worker;
    let settled = false;
    const finish = (error, result) => {
      if (settled) return;
      settled = true;
      signal?.removeEventListener('abort', cancel);
      worker?.terminate();
      if (error) reject(error); else resolve(result);
    };
    const cancel = () => finish(abortError());
    signal?.addEventListener('abort', cancel, {once:true});
    try {
      checkActive(signal);
      worker = new Worker(new URL('./mp3-worker.js', import.meta.url));
      worker.onmessage = ({data}) => {
        if (data.kind === 'progress') onProgress?.(data.value);
        else if (data.kind === 'complete') {
          const blob = new Blob(data.chunks, {type:'audio/mpeg'});
          if (!blob.size || data.channels !== 1) finish(new Error('Invalid MP3 output'));
          else finish(null, {blob, channels:1, sampleRate:data.sampleRate, bitsPerSecond:data.bitsPerSecond});
        } else if (data.kind === 'error') finish(new Error('MP3 encoding failed'));
      };
      worker.onerror = () => finish(new Error('Local MP3 encoder unavailable'));
      worker.onmessageerror = () => finish(new Error('MP3 transfer failed'));
      worker.postMessage({samples, sampleRate:32000}, [samples.buffer]);
    } catch (error) { finish(error); }
  });
}
