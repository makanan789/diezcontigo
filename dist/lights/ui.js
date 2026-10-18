import {imageAttributes,backgroundAsset} from '../responsive-media.js?v=0.15.4';
import {COLLECTION} from './data.js?v=0.15.4';
import {STORIES} from './stories.js?v=0.15.4';
import * as phrases from './phrases-db.js?v=0.15.4';
import {trackDraft} from '../draft-guard.js?v=0.15.4';
import {registerAudio} from '../presentation.js?v=0.15.4';
const el=(tag,text,attrs={})=>{if(tag==='img')attrs=imageAttributes(attrs);const e=document.createElement(tag);if(text!=null)e.textContent=text;for(const[k,v]of Object.entries(attrs))e.setAttribute(k,v);return e;};
const append=(e,...c)=>{e.append(...c);return e;};
const link=(label,view,path,attrs={})=>el('a',label,{href:'#'+view+(path?'/'+path:''),'data-view':view,...(path?{'data-path':path}:{}),...attrs});
function illustration(story,{cover=false}={}){
 const art=el('div',null,{class:'dl-illustration'+(cover?' dl-cover-art':''),'aria-hidden':'true','data-cast-size':story.characters.length});
 art.append(el('img',null,{src:story.background,alt:'',class:'dl-landscape',loading:cover?'lazy':'eager',decoding:'async'}));
 for(const character of story.characters)art.append(el('img',null,{src:character.src,alt:'',class:'dl-story-character','data-character':character.name,loading:cover?'lazy':'eager',decoding:'async'}));
 return art;
}
function reading(main,light,{onDirty}){
 const story=STORIES[light.id];let disposed=false,saving=false;
 const page=el('article',null,{class:'dl-book','data-light':light.id});
 page.style.setProperty('--book-landscape',`url('${new URL(story.background,document.baseURI).href}')`);
 const header=append(el('header',null,{class:'dl-book-heading'}),el('p','Diez pequeñas luces · '+light.id,{class:'dl-overline'}),el('h1',story.title,{id:'view-title',tabindex:-1}),el('p','Con '+story.cast,{class:'dl-cast'}));
 const paper=el('div',null,{class:'dl-paper'});
 const prose=el('div',null,{class:'dl-prose'});for(const text of story.paragraphs)prose.append(el('p',text));
 const quote=append(el('figure',null,{class:'dl-original'}),el('figcaption','Una luz para llevar contigo'),append(el('blockquote'),el('p',light.text,{class:'dl-quote'})));
 const save=el('button','Guardar esta frase en mi baúl',{type:'button',class:'dl-button dl-save-original'}),status=el('p','',{class:'dl-reading-status',role:'status'});
 const visit=link('Ver mi baúl','luces','baul',{class:'dl-button'});visit.hidden=true;
 const controls=append(el('div',null,{class:'dl-reading-controls'}),save,visit);
 paper.append(prose,quote,controls,el('p','La frase se guarda solo en este navegador y dispositivo.',{class:'dl-storage-note'}),status,link('← Volver a las diez historias','luces',null,{class:'dl-button','data-returning':'true'}));
 page.append(header,illustration(story),paper);main.append(page);
 const dirty=()=>saving;onDirty(dirty);trackDraft(dirty);
 function saved(message){save.textContent='Frase guardada en mi baúl';save.disabled=true;visit.hidden=false;status.textContent=message;}
 phrases.readAll().then(records=>{if(disposed||saving)return;if(records.some(r=>r.lightId===light.id||r.text===light.text))saved('Esta frase ya está en tu baúl.');}).catch(()=>{});
 save.addEventListener('click',async()=>{
  if(saving)return;saving=true;save.disabled=true;status.textContent='Guardando…';
  try{const result=await phrases.saveOriginal(light);if(!disposed)saved(result.saved?'Tu frase se ha guardado en el baúl.':'Esta frase ya estaba guardada en tu baúl.');}
  catch(error){if(!disposed){status.textContent=error.message;save.disabled=false;}}
  finally{saving=false;}
 });
 return()=>{disposed=true;};
}
export function renderLights(main,path,{onDirty=()=>{}}={}){
 main.dataset.lights='true';
 const id=path?.startsWith('frase/')?path.split('/')[1]:null,selected=COLLECTION.lights.find(f=>f.id===id);
 const top=append(el('nav',null,{class:'dl-top','aria-label':'Navegación de Diez pequeñas luces'}),link(selected?'← Las diez historias':'← Volver',selected?'luces':'inicio',null,{class:'dl-button',...(selected?{'data-returning':'true'}:{})}));main.append(top);
 if(selected)return reading(main,selected,{onDirty});
 const intro=append(el('header',null,{class:'dl-library-intro'}),el('p','Lecturas para acompañarte',{class:'dl-overline'}),el('h1','Diez pequeñas luces',{id:'view-title',tabindex:-1}),el('p','Diez historias con Nova, Nexo, Alma y Luz. Abre la que te apetezca y quédate el tiempo que quieras.',{class:'dl-library-description'}));intro.append(link('Abrir mi baúl','luces','baul',{class:'dl-button dl-top-chest'}));main.append(intro);
 const grid=el('nav',null,{class:'dl-story-grid','aria-label':'Las diez historias, disponibles libremente'});
 for(const light of COLLECTION.lights){
  const story=STORIES[light.id],a=link('','luces','frase/'+light.id,{class:'dl-story-cover','data-light-id':light.id,'aria-labelledby':'dl-title-'+light.id});
  const body=append(el('div',null,{class:'dl-cover-copy'}),el('span',light.id,{class:'dl-story-number','aria-hidden':true}),el('p','Con '+story.cast,{class:'dl-cast'}),el('h2',story.title,{id:'dl-title-'+light.id}),append(el('span',null,{class:'dl-read-link'}),'Leer la historia ',el('span','→',{'aria-hidden':true})));
  a.append(illustration(story,{cover:true}),body);grid.append(a);
 }main.append(grid);
 let opened=path==='baul',busy=false,revision=0,audioTicket=0,disposed=false;
 const sound=new Audio();sound.preload='none';const unregister=registerAudio(sound),soundStatus=el('p','',{class:'dl-sound-status',role:'status'});
 function stopSound(){audioTicket++;sound.pause();sound.removeAttribute('src');sound.load();}
 function playSound(){const ticket=++audioTicket;soundStatus.textContent='';sound.src=new URL('./lights/assets/BAUL_APERTURA.mp3',document.baseURI).href;sound.play().catch(error=>{if(disposed||!opened||ticket!==audioTicket||error.name==='AbortError')return;soundStatus.textContent='No se ha podido reproducir el sonido del baúl. Puedes seguir leyendo tus frases.';});}
 const hideSound=()=>{if(document.hidden)stopSound();};window.addEventListener('pagehide',stopSound);document.addEventListener('visibilitychange',hideSound);
 const box=el('section',null,{class:'dl-box dl-garden-box',id:'mi-baul','aria-labelledby':'dl-box-title'});
 const garden=el('div',null,{class:'dl-garden'});garden.append(el('img',null,{class:'dl-garden-background',src:'./media/alma/ALMA_01_FONDO_RAICES.webp',alt:'',loading:'lazy',decoding:'async'}));
 const copy=append(el('div',null,{class:'dl-chest-copy'}),el('h2','Caja de las emociones',{id:'dl-box-title'}),el('p','Guarda aquí las frases que quieras volver a encontrar.'));
 const toggle=el('button',null,{type:'button',class:'dl-chest','aria-label':'Abrir la Caja de las emociones','aria-expanded':false,'aria-controls':'dl-box-content'});
 const closed=el('img',null,{src:'./media/alma/BAUL_3D_CERRADO.webp',alt:'Baúl cerrado',width:1536,height:1024,class:'dl-chest-closed',loading:'lazy'}),open=el('img',null,{src:'./media/alma/BAUL_3D_ABIERTO.webp',alt:'Baúl abierto',width:1536,height:1024,class:'dl-chest-open',loading:'lazy','aria-hidden':true});append(toggle,closed,open);
 const openLabel=el('span',opened?'Cerrar mi baúl':'Abrir mi baúl',{class:'dl-chest-label'});toggle.append(openLabel);garden.append(copy,toggle);box.append(garden,soundStatus);
 const panel=el('div',null,{id:'dl-box-content'});panel.hidden=!opened;
 for(const [i,f]of COLLECTION.box.entries())panel.append(append(el('article',null,{class:'dl-emotion','data-emotion':f.id,'data-tone':i}),el('h3',f.title),el('p',f.text)));
 const personal=el('section',null,{class:'dl-personal','aria-labelledby':'dl-personal-title'}),list=el('div',null,{class:'dl-personal-list'}),listStatus=el('p','Tus frases aparecerán aquí.',{class:'dl-local-status'}),form=el('form',null,{class:'dl-phrase-form'}),draft=el('textarea',null,{id:'dl-my-phrase',rows:3,maxlength:phrases.MAX_LENGTH,'aria-describedby':'dl-phrase-help dl-phrase-count'}),count=el('p','0 / 500',{id:'dl-phrase-count',class:'dl-phrase-count'}),status=el('p','',{class:'dl-save-status',role:'status'}),save=el('button','Guardar mi frase',{type:'submit',class:'dl-button'});
 append(form,el('label','Escribe tu frase',{for:'dl-my-phrase'}),draft,count,save,status);
 append(personal,el('h3','Tus frases',{id:'dl-personal-title'}),el('p','Se guardan solo en este navegador y dispositivo. No necesitas una cuenta. Si borras los datos del navegador, puedes perderlas.',{id:'dl-phrase-help',class:'dl-local-help'}),listStatus,list,form);panel.append(personal);
 const dirty=()=>busy||draft.value.trim().length>0;onDirty(dirty);trackDraft(dirty);
 draft.addEventListener('input',()=>{count.textContent=draft.value.length+' / 500';status.textContent='';});
 async function refresh(){const ticket=++revision;try{
  const records=await phrases.readAll();if(!panel.isConnected||ticket!==revision)return;
  list.replaceChildren();listStatus.textContent=records.length?'':'Todavía no has guardado ninguna frase.';
  for(const [i,r]of records.entries()){
   const original=COLLECTION.lights.find(f=>r.lightId===f.id&&r.text===f.text);
   const item=append(el('article',null,{class:'dl-emotion dl-personal-phrase','data-tone':(i+3)%5}),el('h4',original?STORIES[original.id].title:'Mi frase'),el('p',r.text)),erase=el('button','Borrar',{type:'button',class:'dl-button dl-erase','aria-label':'Borrar esta frase'});
   if(original)item.append(link('Volver a leer la historia','luces','frase/'+original.id,{class:'dl-saved-story'}));
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
 function paint(){toggle.dataset.open=String(opened);toggle.setAttribute('aria-expanded',String(opened));toggle.setAttribute('aria-label',opened?'Cerrar la Caja de las emociones':'Abrir la Caja de las emociones');closed.setAttribute('aria-hidden',String(opened));open.setAttribute('aria-hidden',String(!opened));openLabel.textContent=opened?'Cerrar mi baúl':'Abrir mi baúl';panel.hidden=!opened;}
 toggle.addEventListener('click',()=>{opened=!opened;paint();if(opened){playSound();void refresh();}else stopSound();});close.addEventListener('click',()=>{opened=false;stopSound();paint();toggle.focus();});append(box,panel);main.append(box,append(el('div',null,{class:'dl-actions'}),link('Volver a Inicio','inicio',null,{class:'dl-button'}),link('Aquí contigo','apoyo',null,{class:'dl-button'})));paint();
 const syncPhrases=()=>{if(opened&&!document.hidden)void refresh();};document.addEventListener('visibilitychange',syncPhrases);
 if(opened){void refresh();requestAnimationFrame(()=>{if(!disposed)box.scrollIntoView({block:'start'});});}
 return()=>{disposed=true;revision++;stopSound();unregister();window.removeEventListener('pagehide',stopSound);document.removeEventListener('visibilitychange',hideSound);document.removeEventListener('visibilitychange',syncPhrases);};
}
export function lightsEntry(){return append(link('','luces',null,{class:'card dl-entry','aria-label':'Explorar Diez pequeñas luces'}),el('span','✦',{'aria-hidden':true,class:'dl-entry-icon'}),append(el('div'),el('h2','Diez pequeñas luces'),el('p','Un espacio de lectura y contemplación voluntaria.')),el('span','→',{'aria-hidden':true}));}
