import {freeResponse} from '../free-response.js';
import {allowDraftChange} from '../draft-guard.js';
import {mediaAsset} from '../media-map.js';
import {nextStep} from '../next-step.js';
import {renderWorldNotes} from '../world-notes.js';
import {composeSelector} from '../selector-layout.js';
import {registerAudio,icon as sharedIcon} from '../presentation.js';
import {NARRATIVE} from './narrativa.v1.js';
import {AUDIO_TRACKS} from './audio.v1.js';
import * as model from './model.js';
import * as notes from './notes-db.js';
const asset=name=>mediaAsset('nova',name);
const sceneTitle=id=>NARRATIVE.escenarios[id]?.titulo||'Nova';
function el(tag,text,attrs={}){const e=document.createElement(tag);if(text!==null&&text!==undefined)e.textContent=text;for(const [k,v] of Object.entries(attrs))e.setAttribute(k,String(v));return e;}
function append(e,...children){e.append(...children.filter(Boolean));return e;}
const group=(...e)=>append(el('div',null,{class:'actions'}),...e);
function link(label,context,attrs={}){return el('a',label,{href:'#nova/'+context,'data-view':'nova','data-path':context,...attrs});}
function baseLink(label,view){return el('a',label,{href:'#'+view,'data-view':view,class:'button secondary'});}
function button(label,action,attrs={}){const e=el('button',label,{type:'button',...attrs});e.addEventListener('click',()=>{try{const result=action();if(result?.catch)result.catch(error=>console.error(error));}catch(error){console.error(error);}});return e;}
const heading=(container,text,sub)=>append(container,sub?el('p',sub,{class:'eyebrow'}):null,el('h1',text,{id:'view-title',tabindex:'-1'}));
function ornament(){const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');for(const [k,v] of Object.entries({viewBox:'0 0 40 22',width:'40',height:'22',class:'nova-ornament','aria-hidden':'true'}))svg.setAttribute(k,v);for(const y of [6,14]){const p=document.createElementNS(svg.namespaceURI,'path');p.setAttribute('d',`M2 ${y} C8 ${y-6},12 ${y-6},20 ${y} S32 ${y+6},38 ${y}`);p.setAttribute('fill','none');p.setAttribute('stroke','#315d65');p.setAttribute('stroke-width','1.8');p.setAttribute('stroke-linecap','round');svg.append(p);}return svg;}
export function createNova({navigate,announce,rerender}){
 let pendingDraft='';const states=new Map();let state=null,context='portada',generation=0,dirty=()=>false,noteReturn='selector';
 const media=new Audio();media.preload='none';media.dataset.world='nova';registerAudio(media);let track=null,bindings=null,everPlayed=false;
 function status(text){if(bindings){bindings.status.textContent=text;const failed=text.startsWith('No se pudo');bindings.status.classList.toggle('sr-only',!failed);bindings.status.classList.toggle('audio-error',failed);}}
 function paintAudio(){if(!bindings)return;bindings.figure.dataset.playing=String(!media.paused&&!media.ended);bindings.figure.setAttribute('aria-label',media.paused?'Escuchar a Nova':'Pausar a Nova');bindings.pause.disabled=media.paused;bindings.play.setAttribute('aria-pressed',String(!media.paused&&!media.ended));bindings.play.textContent=media.paused?'▶':'Ⅱ';bindings.play.setAttribute('aria-label',media.paused?'Escuchar a Nova':'Pausar a Nova');bindings.figure.setAttribute('aria-pressed',String(!media.paused&&!media.ended));}
 media.addEventListener('play',()=>{everPlayed=true;if(bindings)bindings.details.open=true;paintAudio();status('Nova está hablando.');});
 media.addEventListener('pause',()=>{paintAudio();if(!media.ended&&!media.error)status('Audio pausado.');});
 media.addEventListener('ended',()=>{paintAudio();status('El audio ha terminado. Puedes leer el texto o repetirlo.');});
 media.addEventListener('error',()=>{paintAudio();status('No se pudo reproducir este audio. El texto de referencia sigue disponible.');});
 function stopAudio(){media.pause();if(media.readyState)media.currentTime=0;bindings=null;track=null;media.removeAttribute('src');media.load();everPlayed=false;}
 function discard(){return !dirty()||confirm('Hay una nota sin guardar. ¿Quieres descartarla y salir?');}
 function beforeNavigate(next,path,{restore=false}={}){if(!discard())return false;if(!restore&&next==='nova'&&path?.startsWith('ruta/')&&(context.startsWith('escena/')||context==='selector'||context==='portada')){state=null;states.delete(path.slice(5));}if(next==='nova'&&path?.startsWith('notas/')&&!context.startsWith('notas/'))noteReturn=context;if(next==='inicio'){state=null;states.clear();}generation++;stopAudio();dirty=()=>false;return true;}
 function audioPanel(id,figure,{captionOpen=false,home=false,scene=false,cover=false}={}){
  const source=AUDIO_TRACKS.find(t=>t.id===id);track=source;everPlayed=false;
  const details=el('details',null,{class:'nova-caption'});details.open=captionOpen;
  append(details,el('summary',cover?'Leer la presentación':'Leer lo que dice Nova'),el('p',source.reference,{class:'nova-transcript',tabindex:0,role:'region','aria-label':'Texto de Nova'}),el('small','Texto pendiente de revisión con el audio.',{class:'nova-cotejo'}));
  const info=el('p','El audio empieza solo si eliges escucharlo.',{class:'nova-audio-status sr-only',role:'status'});
  function play(repeat=false){if(!source)return;try{const url=new URL(asset(source.file),location.href).href;if(media.src!==url||media.error){media.src=url;media.load();}if(repeat)media.currentTime=0;if(!cover)details.open=true;const p=media.play();if(p)p.catch(()=>{paintAudio();status('No se pudo iniciar el audio. Puedes leer el texto y volver a intentarlo.');});}catch{status('No se pudo iniciar el audio. El texto sigue disponible.');}}
  const playButton=button('▶',()=>media.paused?play():media.pause(),{class:'nova-audio-play','data-track':id,'aria-label':'Escuchar a Nova','aria-pressed':false});
  const pause=button('Ⅱ',()=>media.pause(),{class:'secondary nova-audio-pause','aria-label':'Pausar audio'});pause.disabled=true;
  const repeat=button('↻',()=>play(true),{class:'secondary nova-audio-repeat','aria-label':'Repetir audio'});
  bindings={details,status:info,figure,play:playButton,pause};figure.addEventListener('click',()=>media.paused?play():media.pause());
  if(scene){details.open=true;details.classList.add('nova-scene-caption');}if(cover){details.classList.add('presentation-reading');details.open=false;}const panel=home?append(el('div',null,{class:'nova-audio nova-audio-home'}),info,media):append(el('div',null,{class:'nova-audio'+(cover?' nova-cover-controls':'')}),...(cover?[group(playButton,repeat),details,info,media]:[details,group(playButton,repeat),info,media]));
  media.hidden=true;media.setAttribute('aria-hidden','true');return panel;
 }
 function figure(scene,{cover=false}={}){const file='NOVA_PERSONAJE_'+(cover?'PORTADA':scene)+'.png';const e=button('',()=>{}, {class:'nova-figure','aria-label':'Escuchar a Nova','aria-pressed':false});append(e,el('img',null,{src:asset(file),alt:'',class:scene==='03_RINCON'?'pose-rincon':scene==='01_JARDIN'?'pose-jardin':''}));e.querySelector('img').addEventListener('error',()=>announce('La ilustración de Nova no está disponible. Los textos y controles siguen funcionando.'));return e;}
 function cover(full=false){const card=el('section',null,{class:'nova-cover'+(full?' nova-cover-full':' nova-home card door nova'),...(full?{}:{'data-door':'nova'})});const art=el('div',null,{class:'nova-cover-art'});const f=figure('PORTADA',{cover:true});art.append(f);
  const body=el('div',null,{class:'nova-cover-body'});append(body,el(full?'h1':'h2','NOVA',full?{id:'view-title',tabindex:'-1'}:{}),el('p','RELACIONES',{class:'nova-kicker'}),ornament(),el('p','Un espacio para conversar, sentir y elegir un límite.',{class:'nova-cover-description'}),link('→',full?'selector':'portada',{class:'nova-enter','aria-label':'Entrar en los escenarios de Nova'}));
  append(card,art,body,audioPanel('00_PRESENTACION',f,{home:!full,cover:full}));return card;
 }
 function top(target='inicio'){
 const back=target==='inicio'?baseLink('← Volver','inicio'):link('← Volver',target);
 back.className='nova-top-back';return append(el('nav',null,{class:'nova-top','aria-label':'Navegación de Nova'}),back,append(baseLink('Aquí contigo','apoyo'),sharedIcon('people')),baseLink('Inicio','inicio'));
 }
 function nav(scene){return append(el('nav',null,{class:'nova-local-nav','aria-label':'Navegación de Nova'}),link('Portada','portada'),link('Explorar otro lugar','selector'),link('Mis notas personales','notas/'+(scene||'todas')),baseLink('Aquí contigo','apoyo'),baseLink('Inicio','inicio'));}
 function renderSelector(main){
 const f=figure('PORTADA',{cover:true});const bubble=append(el('div'),audioPanel('00_PRESENTACION',f,{captionOpen:true,scene:true}));
 main.append(composeSelector({world:'nova',name:'Nova',category:'RELACIONES',description:'Un espacio para conversar, sentir y elegir un límite.',background:asset('NOVA_FONDO_PORTADA.png'),character:f,ornament:ornament(),bubble,places:model.SCENES.map((id,i)=>({id,title:sceneTitle(id),image:asset(NARRATIVE.escenarios[id].fondo),icon:sharedIcon(['heart','people','cup','compass','sun'][i]),hook:'nova-place'})),notes:{title:'Mis notas personales',description:'Escribe y guarda algo que quieras recordar.'}}));
 }
 function sceneCard(r,index){const a=r.tipo==='navegacion'?link('', 'escena/'+r.destino,{class:'nova-story-card','data-story':'R04'}):link('', 'ruta/'+r.id,{class:'nova-story-card','data-story':r.id});const thumb=el('img',null,{src:asset(NARRATIVE.escenarios[r.escenario].fondo),alt:'',loading:'lazy'});thumb.style.objectPosition=['30% 65%','60% 45%','75% 30%','20% 80%'][index];return append(a,thumb,append(el('span',null,{class:'nova-card-icon'}),sharedIcon(['heart','people','compass','cup'][index])),append(el('div',null,{class:'nova-story-copy'}),el('h2',r.titulo),el('p',r.descripcion),el('span','→',{'aria-hidden':'true'})));}
 function renderScene(main,scene){const world=el('section',null,{class:'nova-world','data-scene':scene});world.style.setProperty('--nova-background',`url('${new URL(asset(NARRATIVE.escenarios[scene].fondo),document.baseURI).href}')`);
 const label=append(el('div',null,{class:'nova-scene-label'}),el('div','NOVA',{class:'world-brand'}),el('p','RELACIONES',{class:'world-category'}),ornament(),el('h1',sceneTitle(scene),{id:'view-title',tabindex:-1}));
 const hero=el('div',null,{class:'nova-scene-hero'});const f=figure(scene);append(hero,f,audioPanel(scene,f,{captionOpen:true,scene:true}));const grid=el('div',null,{class:'nova-stories'});const stories=NARRATIVE.recorridos.filter(r=>r.escenario===scene);if(scene==='03_RINCON')stories.push(NARRATIVE.tarjeta_navegacion);stories.forEach((r,i)=>grid.append(sceneCard(r,i)));
 const noteCard=link('', 'notas/'+scene,{class:'nova-notes-card'});append(noteCard,append(el('span',null,{class:'nova-notebook','aria-hidden':'true'}),sharedIcon('note')),append(el('div'),el('h2','Mis notas personales'),el('p','Escribe y guarda algo que quieras recordar.')),el('span','→',{'aria-hidden':'true'}));append(world,top('selector'),label,hero,grid,noteCard);main.append(world);}
 function renderStory(main,id){if(!state||state.id!==id)state=states.get(id)||model.start(id);states.set(id,state);const c=model.content(state),r=c.route;main.dataset.novaRoute=id;main.dataset.novaPhase=state.phase;heading(main,r.titulo,sceneTitle(r.escenario));const panel=el('section',null,{class:'nova-dialogue','aria-label':'Recorrido de Nova'});
  let text;if(state.phase==='entry')text=r.entrada;if(state.phase==='q1')text=r.primera_pregunta;if(state.phase==='a1')text=c.first.respuesta;if(state.phase==='q2')text=c.first.segunda_pregunta;if(state.phase==='a2')text=c.second.respuesta;if(state.phase==='close')text=r.cierre;
  panel.append(el(state.phase.startsWith('q')?'h2':'p',text,{class:'nova-words',id:'nova-words'}));
  if(state.phase==='q1'||state.phase==='q2'){const options=state.phase==='q1'?r.primeras_opciones:c.first.segundas_opciones;const choices=el('div',null,{class:'nova-choices'});options.forEach((o,i)=>choices.append(button(o.texto,()=>{if(!allowDraftChange())return;state=model.choose(state,i);states.set(id,state);rerender();},{class:'nova-choice','data-choice':i})));panel.append(choices);}
 if(state.phase==='q1'||state.phase==='q2')panel.append(freeResponse({world:'nova',scene:r.escenario,question:text,store:notes,onDirty:fn=>dirty=fn,announce}));
 if(state.phase==='q1'||state.phase==='q2')panel.append(button('Ninguna encaja: volver al lugar',()=>navigate('nova','escena/'+r.escenario),{class:'choice-skip secondary','data-choice-skip':'true'}));
  if(['entry','a1','a2'].includes(state.phase))panel.append(button(state.phase==='entry'?'Comenzar':state.phase==='a2'?'Ver el cierre':'Continuar',()=>{if(!allowDraftChange())return;state=model.advance(state);states.set(id,state);rerender();},{id:'nova-continue'}));
  const optional=model.contextualAction(state);if(optional)panel.append(link(optional.label,optional.target,{class:'button secondary nova-contextual'}));
  if(state.phase==='close')panel.append(group(link('Explorar otro lugar','selector',{class:'button secondary'})));
  if(['a2','close'].includes(state.phase))panel.append(nextStep({world:'nova',route:r.id,title:r.titulo,scene:r.escenario,first:c.first.texto,second:c.second.texto,navigate,onNote:text=>{pendingDraft=text;navigate('nova','notas/'+r.escenario);}}));
  const previous=button('← Volver',()=>{if(!allowDraftChange())return;if(state.phase==='entry'){navigate('nova','escena/'+r.escenario);return;}state=model.back(state);states.set(id,state);rerender();},{class:'secondary',id:'nova-back'});previous.disabled=false;append(main,panel,group(previous,link('Volver al lugar','escena/'+r.escenario,{class:'button secondary'}),baseLink('Aquí contigo','apoyo'),baseLink('Inicio','inicio')));}
 function renderNotes(main,id){main.append(top(noteReturn));const draft=pendingDraft;pendingDraft='';renderWorldNotes({main,world:'nova',name:'Nova',scene:model.SCENES.includes(id)?id:model.SCENES[0],scenes:model.SCENES.map(id=>({id,title:sceneTitle(id)})),store:notes,navigate,announce,draft,onDirty:fn=>dirty=fn});}

 function render(main,path){generation++;dirty=()=>false;context=path||'portada';main.dataset.nova='true';const [kind,key]=context.split('/');if(kind==='portada'){append(main,top(),cover(true));main.classList.add('nova-cover-view');return;}main.classList.remove('nova-cover-view');if(kind==='selector'){renderSelector(main);return;}if(kind==='escena'&&model.SCENES.includes(key)){renderScene(main,key);return;}if(kind==='ruta'&&model.ROUTES.has(key)){renderStory(main,key);return;}if(kind==='notas'){renderNotes(main,key);return;}heading(main,'Este lugar de Nova no está disponible',null);main.append(link('Volver a Nova','portada',{class:'button'}));}
 return {render,homeCard:()=>cover(false),beforeNavigate,stopAudio};
}
