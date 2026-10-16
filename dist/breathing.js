import { STAGES } from './content/breathing.v0.1.js';
export const newSession=()=>({stage:0,playback:'stopped'});
export function transition(state,action) {
  switch(action) {
    case 'play':return {...state,playback:'playing'};
    case 'pause':return {...state,playback:'paused'};
    case 'stop':return {...state,playback:'stopped'};
    case 'repeat':return {...state,playback:'playing'};
    case 'next':return {...state,stage:Math.min(STAGES.length-1,state.stage+1),playback:'stopped'};
    case 'restart':return newSession();
    default:throw new Error('Control de pausa no disponible.');
  }
}
// Future integration contract: local MP3 per stage, Director's timing marks in
// seconds, shared visual cadence. A null asset means visual/textual mode only.
export function audioContract(stage) {
  if(!stage.audio.asset)return {available:false,mode:'text-visual',timingMarks:[]};
  if(!/^\.\/audio\/[a-zA-Z0-9_-]+\.mp3$/.test(stage.audio.asset))throw new Error('El audio debe ser un MP3 estático local.');
  return {available:true,mode:'local-mp3',asset:stage.audio.asset,timingMarks:stage.audio.timingMarks};
}
