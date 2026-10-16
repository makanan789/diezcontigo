import {COLLECTION} from './data.js';
import * as phrases from './phrases-db.js';
import {trackDraft} from '../draft-guard.js';
import {registerAudio} from '../presentation.js';
const el=(tag,text,attrs={})=>{const e=document.createElement(tag);if(text!=null)e.textContent=text;for(const[k,v]of Object.entries(attrs))e.setAttribute(k,v);return e;};
const append=(e,...c)=>{e.append(...c);return e;};
const link=(label,view,path,attrs={})=>el('a',label,{href:'#'+view+(path?'/'+path:''),'data-view':view,...(path?{'data-path':path}:{}),...attrs});
export function renderLights(main,path,{onDirty=()=>{}}={}){
 const id=path?.startsWith('frase/')?path.split('/')[1]:null,selected=COLLECTION.lights.find(f=>f.id===id);
 let opened=false,busy=false,revision=0,audioTicket=0,disposed=false;
 const sound=new Audio();sound.preload='none';const unregister=registerAudio(sound),soundStatus=el('p','',{class:'dl-sound-status',role:'status'});
 function stopSound(){audioTicket++;sound.pause();sound.removeAttribute('src');sound.load();}
 function playSound(){const ticket=++audioTicket;soundStatus.textContent='';sound.src=new URL('./lights/assets/BAUL_APERTURA.mp3',document.baseURI).href;sound.play().catch(error=>{if(disposed||!opened||ticket!==audioTicket||error.name==='AbortError')return;soundStatus.textContent='No se ha podido reproducir el sonido del baúl. Puedes seguir leyendo tus frases.';});}
 const hideSound=()=>{if(document.hidden)stopSound();};window.addEventListener('pagehide',stopSound);document.addEventListener('visibilitychange',hideSound);
 const top=append(el('nav',null,{class:'dl-top','aria-label':'Navegación de Diez pequeñas luces'}),link('← Volver','inicio',null,{class:'dl-button'}),link('Aquí contigo','apoyo',null,{class:'dl-button'}),link('Inicio','inicio',null,{class:'dl-button'}));
 main.append(top,el('h1','Diez pequeñas luces',{id:'view-title',tabindex:-1}));
 const box=el('section',null,{class:'dl-box','aria-labelledby':'dl-box-title'});box.append(el('h2','Caja de las emociones',{id:'dl-box-title'}));
 const toggle=el('button',null,{type:'button',class:'dl-chest','aria-label':'Abrir la Caja de las emociones','aria-expanded':false,'aria-controls':'dl-box-content'});
 const closed=el('img',null,{src:'./media/alma/BAUL_3D_CERRADO.webp',alt:'Baúl cerrado',width:1536,height:1024,class:'dl-chest-closed'}),open=el('img',null,{src:'./media/alma/BAUL_3D_ABIERTO.webp',alt:'Baúl abierto',width:1536,height:1024,class:'dl-chest-open','aria-hidden':true});append(toggle,closed,open);box.append(toggle,soundStatus);
 const panel=el('div',null,{id:'dl-box-content'});panel.hidden=true;
 for(const [i,f]of COLLECTION.box.entries())panel.append(append(el('article',null,{class:'dl-emotion','data-emotion':f.id,'data-tone':i}),el('h3',f.title),el('p',f.text)));
 panel.append(el('p',COLLECTION.credit,{class:'dl-credit'}));
 const personal=el('section',null,{class:'dl-personal','aria-labelledby':'dl-personal-title'}),list=el('div',null,{class:'dl-personal-list'}),listStatus=el('p','Tus frases aparecerán aquí.',{class:'dl-local-status'}),form=el('form',null,{class:'dl-phrase-form'}),draft=el('textarea',null,{id:'dl-my-phrase',rows:3,maxlength:phrases.MAX_LENGTH,'aria-describedby':'dl-phrase-help dl-phrase-count'}),count=el('p','0 / 500',{id:'dl-phrase-count',class:'dl-phrase-count'}),status=el('p','',{class:'dl-save-status',role:'status'}),save=el('button','Guardar mi frase',{type:'submit',class:'dl-button'});
 append(form,el('label','Escribe tu frase',{for:'dl-my-phrase'}),draft,count,save,status);
 append(personal,el('h3','Tus frases',{id:'dl-personal-title'}),el('p','Se guardan solo en este navegador y dispositivo. No necesitas una cuenta. Si borras los datos del navegador, puedes perderlas.',{id:'dl-phrase-help',class:'dl-local-help'}),listStatus,list,form);panel.append(personal);
 const dirty=()=>busy||draft.value.trim().length>0;onDirty(dirty);trackDraft(dirty);
 draft.addEventListener('input',()=>{count.textContent=draft.value.length+' / 500';status.textContent='';});
 async function refresh(){const ticket=++revision;try{
  const records=await phrases.readAll();if(!panel.isConnected||ticket!==revision)return;
  list.replaceChildren();listStatus.textContent=records.length?'':'Todavía no has guardado ninguna frase.';
  for(const [i,r]of records.entries()){
   const item=append(el('article',null,{class:'dl-emotion dl-personal-phrase','data-tone':(i+3)%5}),el('h4','Mi frase'),el('p',r.text)),erase=el('button','Borrar',{type:'button',class:'dl-button dl-erase','aria-label':'Borrar esta frase'});
   erase.addEventListener('click',async()=>{if(busy||!confirm('¿Quieres borrar esta frase de este dispositivo?'))return;busy=true;erase.disabled=true;
    try{await phrases.remove(r.id);if(panel.isConnected){status.textContent='La frase se ha borrado.';await refresh();}}
    catch(error){if(panel.isConnected)status.textContent=error.message;}
    finally{busy=false;erase.disabled=false;}
   });item.append(erase);list.append(item);
  }
 }catch(error){if(panel.isConnected&&ticket===revision)listStatus.textContent=error.message;}}
 form.addEventListener('submit',async event=>{event.preventDefault();if(busy)return;if(!draft.value.trim()){status.textContent='Escribe una frase antes de guardarla.';draft.focus();return;}busy=true;save.disabled=true;draft.disabled=true;
  try{await phrases.save(draft.value);if(!panel.isConnected)return;draft.value='';count.textContent='0 / 500';status.textContent='Tu frase se ha guardado en este dispositivo.';await refresh();}
  catch(error){if(panel.isConnected)status.textContent=error.message;}
  finally{busy=false;save.disabled=false;draft.disabled=false;}
 });
 const close=el('button','Cerrar la Caja',{type:'button',class:'dl-button'});panel.append(close);
 function paint(){toggle.dataset.open=String(opened);toggle.setAttribute('aria-expanded',String(opened));toggle.setAttribute('aria-label',opened?'Cerrar la Caja de las emociones':'Abrir la Caja de las emociones');closed.setAttribute('aria-hidden',String(opened));open.setAttribute('aria-hidden',String(!opened));panel.hidden=!opened;}
 toggle.addEventListener('click',()=>{opened=!opened;paint();if(opened){playSound();void refresh();}else stopSound();});close.addEventListener('click',()=>{opened=false;stopSound();paint();toggle.focus();});append(box,panel);main.append(box);
 if(selected)main.append(append(el('article',null,{class:'dl-reading','data-light':selected.id}),el('h2',selected.title),el('p',selected.text,{class:'dl-quote'}),link('Volver a las diez luces','luces',null,{class:'dl-button'})));
 const grid=el('nav',null,{class:'dl-lights','aria-label':'Las diez frases, disponibles libremente'});for(const f of COLLECTION.lights){const a=link('','luces','frase/'+f.id,{class:'dl-light','data-light-id':f.id,...(selected?.id===f.id?{'aria-current':'page'}:{})});append(a,el('span',null,{class:'dl-spark','aria-hidden':true}),el('span',f.title),el('span','→',{'aria-hidden':true}));grid.append(a);}main.append(grid,append(el('div',null,{class:'dl-actions'}),link('Volver a Inicio','inicio',null,{class:'dl-button'}),link('Aquí contigo','apoyo',null,{class:'dl-button'})));paint();
 return()=>{disposed=true;revision++;stopSound();unregister();window.removeEventListener('pagehide',stopSound);document.removeEventListener('visibilitychange',hideSound);};
}
export function lightsEntry(){return append(link('','luces',null,{class:'card dl-entry','aria-label':'Explorar Diez pequeñas luces'}),el('span','✦',{'aria-hidden':true,class:'dl-entry-icon'}),append(el('div'),el('h2','Diez pequeñas luces'),el('p','Un espacio de lectura y contemplación voluntaria.')),el('span','→',{'aria-hidden':true}));}
