// Local recordings only. Each immutable source has its own player; late events
// and rejected play promises cannot change a newer stage or cancelled request.
export function createBreathingPlayer({assets,onChange=()=>{},createMedia=()=>new Audio(),register=()=>{},timeoutMs=15000}){
 const players=new Map();let media=null,stage=-1,state='stopped',intent='stopped',message='',request=0,timer=null;
 const clear=()=>{if(timer!==null)clearTimeout(timer);timer=null;};
 const seekStart=m=>{if(m?.readyState){try{m.currentTime=0;}catch{}}};
 const snapshot=()=>({stage,state,message,src:media?.currentSrc||media?.src||null,paused:media?.paused??true,time:media?.currentTime||0});
 const notify=()=>onChange(snapshot());
 const relevant=m=>media===m&&intent==='playing';
 function fail(m,t,text){if(t!==request||!relevant(m))return;clear();request++;intent='stopped';m.pause();state='error';message=text;notify();}
 function get(index){
  if(!assets[index])throw new Error('Audio de etapa no disponible.');
  if(players.has(index))return players.get(index);
  const m=createMedia();m.preload='metadata';m.src=assets[index];register(m);
  m.addEventListener('error',()=>{if(relevant(m))fail(m,request,'No se pudo cargar el audio. Pulsa Comenzar para intentarlo de nuevo.');});
  m.addEventListener('ended',()=>{if(!relevant(m))return;clear();request++;intent='stopped';state='ended';message='Etapa finalizada. Puedes repetir o pasar a la siguiente.';notify();});
  m.addEventListener('pause',()=>{if(relevant(m)&&m.paused&&!m.ended&&state==='playing'){clear();request++;intent='paused';state='paused';message='';notify();}});
  players.set(index,m);return m;
 }
 function play(index,{restart=false}={}){
  const previousState=state;clear();const t=++request;intent='stopped';
  if(media&&stage!==index){media.pause();seekStart(media);}
  media=get(index);stage=index;const current=media;
  if(current.error||previousState==='error')current.load();
  if(restart)seekStart(current);
  intent='playing';state='loading';message='';notify();
  timer=setTimeout(()=>fail(current,t,'El audio está tardando demasiado. Pulsa Comenzar para volver a intentarlo.'),timeoutMs);
  let pending;try{pending=current.play();}catch{fail(current,t,'No se pudo iniciar el audio. Pulsa Comenzar para intentarlo de nuevo.');return;}
  Promise.resolve(pending).then(()=>{if(t!==request||!relevant(current))return;clear();state='playing';message='';notify();}).catch(error=>{
   if(t!==request||!relevant(current))return;
   if(error?.name==='AbortError'){clear();intent='paused';state='paused';message='';notify();return;}
   fail(current,t,'No se pudo iniciar el audio. Pulsa Comenzar para intentarlo de nuevo.');
  });
 }
 function pause(){clear();request++;intent='paused';media?.pause();state=media?'paused':'stopped';message='';notify();}
 function stop(){clear();request++;intent='stopped';media?.pause();seekStart(media);state='stopped';message='';notify();}
 function reset(){stop();stage=-1;media=null;notify();}
 return {play,pause,stop,reset,snapshot};
}
