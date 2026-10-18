import {trackDraft,clearDraft} from './draft-guard.js?v=0.15.4';
import {mountHomeInteractions} from './character-audio-hints.js?v=0.15.4';
import {orbMotionEnabled,orbMotionNotice} from './orb-motion.js?v=0.15.4';
import {icon as presentationIcon,registerAudio} from './presentation.js?v=0.15.4';
import {createAlma} from './alma/ui.js?v=0.15.4';
import {createLuz} from './luz/ui.js?v=0.15.4';
import {renderLights} from './lights/ui.js?v=0.15.4';
import { PATHS,CONTENT_VERSION } from './content/paths.v0.1.js?v=0.15.4';
import { SUPPORT } from './content/support.v0.1.js?v=0.15.4';
import { STAGES } from './content/breathing.v0.1.js?v=0.15.4';
import { ORIENTATION,CALM,TRUSTED_MESSAGE } from './content/here.v0.2.js?v=0.15.4';
import { isMobileMessagesAvailable,messagesLink,copyDraft,shareDraft } from './trusted-person.js?v=0.15.4';
import { startJourney,currentNode,choose,skip,back,validateContent } from './journey.js?v=0.15.4';
import { newSession,transition,audioContract } from './breathing.js?v=0.15.4';
import {createBreathingPlayer} from './breathing-player.js?v=0.15.4';
import * as refuge from './refuge-db.js?v=0.15.4';
import {createNova} from './nova/nova-ui.js?v=0.15.4';
import {createNexo} from './nexo/ui.js?v=0.15.4';
import {createBackup,parseBackup,restoreBackup,backupCounts,backupFile} from './local-backup.js?v=0.15.4';
document.documentElement.dataset.diezRelease='0.15.4';
const main=document.querySelector('#main');const live=document.querySelector('#announcement');
const views=new Set(['inicio','diez','recorrido','apoyo','refugio','ajustes','respira','orientacion','calma','externa','confianza','nova','nexo','alma','luz','luces']);
let view='inicio',pathId=null,journey=null,breathing=newSession(),orbTime=0,breathingStarted=false,helpReturn={view:'inicio'};
let breathingAudioMessage='',breathingAudioLoading=false,breathingAudioFailed=false,breathingControlChanging=false;
const breathingPlayer=createBreathingPlayer({assets:STAGES.map(s=>audioContract(s).asset),register:registerAudio,onChange:s=>{
 breathingAudioLoading=s.state==='loading';breathingAudioFailed=s.state==='error';breathingAudioMessage=s.message;
 if(s.stage!==breathing.stage)return;
 breathing={...breathing,playback:['loading','playing'].includes(s.state)?'playing':s.state==='paused'?'paused':'stopped'};
 if(view==='respira'&&!breathingControlChanging){render();if(s.message)announce(s.message);}
}});
function haltBreathingAudio(reset=true){breathingControlChanging=true;try{reset?breathingPlayer.stop():breathingPlayer.pause();}finally{breathingControlChanging=false;}}
function startBreathingAudio(repeat=false){breathingPlayer.play(breathing.stage,{restart:repeat});}
window.addEventListener('pagehide',()=>haltBreathingAudio(false));
window.addEventListener('pageshow',()=>{if(view==='respira'||(view==='luz'&&pathId==='voz'))render();});
let homeInteractionsCleanup=null;
// Session-only navigation. It contains routes, never notes or user text.
let routeReady=false;const routeTrail=[];
let lightsCleanup=null;let refugeDirty=()=>false;let renderId=0,editId=null,busy=false,orientationChoice=null,calmStep=0;
const nova=createNova({navigate,announce,rerender:()=>render()});
const nexo=createNexo({navigate,announce,rerender:()=>render()});
const alma=createAlma({navigate,announce,rerender:()=>render(),renderNotes:()=>renderRefuge(renderId)});
const luz=createLuz({navigate,announce,rerender:()=>render()});
const systemMotion=matchMedia('(prefers-reduced-motion: reduce)');
let settings={size:'1.15',reduce:false,orbMotion:'system',theme:document.documentElement.dataset.theme||'amanecer'};let settingsPersist=true;
try {const stored=JSON.parse(localStorage.getItem('diez-v01-settings')||'null');if(stored){settings.size=['1','1.15','1.3'].includes(stored.size)?stored.size:'1.15';settings.reduce=stored.reduce===true;settings.orbMotion=['enabled','disabled'].includes(stored.orbMotion)?stored.orbMotion:'system';settings.theme=stored.theme==='refugio'?'refugio':'amanecer';}}catch {settingsPersist=false;}
function el(tag,text,attrs={}) {
  const node=document.createElement(tag);if(text!==null&&text!==undefined)node.textContent=text;
  for(const [key,value] of Object.entries(attrs))node.setAttribute(key,String(value));return node;
}
function append(parent,...nodes){parent.append(...nodes.filter(Boolean));return parent;}
function announce(text){live.textContent='';requestAnimationFrame(()=>{live.textContent=text;});}
function button(label,action,{secondary=false,id,disabled=false}={}) {
  const node=el('button',label,{type:'button',...(secondary?{class:'secondary'}:{}),...(id?{id}:{} )});
  node.disabled=disabled;node.addEventListener('click',()=>{Promise.resolve().then(action).catch(error=>announce(error.message));});return node;
}
function link(label,next,context,attrs={}) {return el('a',label,{href:'#'+next+(context?'/'+context:''),'data-view':next,...(context?{'data-path':context}:{}),...attrs});}
function title(text,eyebrow) {append(main,eyebrow?el('p',eyebrow,{class:'eyebrow'}):null,el('h1',text,{tabindex:'-1',id:'view-title'}));}
function actions(...nodes){return append(el('div',null,{class:'actions'}),...nodes);}
function applySettings(){document.documentElement.dataset.theme=settings.theme;document.documentElement.style.setProperty('--text-scale',settings.size);document.documentElement.dataset.reducedMotion=String(settings.reduce||systemMotion.matches);document.documentElement.dataset.orbMotion=orbMotionEnabled(settings,systemMotion.matches)?'enabled':'disabled';for(const b of document.querySelectorAll('[data-theme-shortcut]'))b.setAttribute('aria-pressed',String(b.dataset.themeShortcut===settings.theme));}
function persistSettings(){applySettings();try{localStorage.setItem('diez-v01-settings',JSON.stringify(settings));settingsPersist=true;}catch{settingsPersist=false;announce('El ajuste funciona durante esta sesión; el navegador no permite guardarlo.');}}
systemMotion.addEventListener('change',()=>{applySettings();if(view==='ajustes')document.querySelector('#system-motion').textContent=systemMotion.matches?'Tu sistema solicita reducir el movimiento. Puedes elegir el movimiento de los orbes por separado.':'Tu sistema no solicita reducir el movimiento.';});
window.addEventListener('diez-enable-orb-motion',()=>{settings.orbMotion='enabled';persistSettings();announce('Movimiento de los orbes activado en este navegador.');});
for(const b of document.querySelectorAll('[data-theme-shortcut]')){b.append(presentationIcon(b.dataset.themeShortcut==='amanecer'?'sun':'moon'));b.addEventListener('click',()=>{settings.theme=b.dataset.themeShortcut;persistSettings();if(view==='ajustes'){for(const theme of ['amanecer','refugio']){const control=document.querySelector('#theme-'+theme);if(control){control.classList.toggle('secondary',theme!==settings.theme);control.setAttribute('aria-pressed',String(theme===settings.theme));}}}announce('Tema '+(settings.theme==='amanecer'?'Amanecer':'Refugio')+' activado.');});}
applySettings();
function navigate(next,context=null,{restore=false,writeUrl=true,returning=false}={}) {
  if(!luz.allowNavigation(()=>{if(!writeUrl)history.replaceState(null,'','#'+next+(context?'/'+context:''));navigate(next,context,{restore,writeUrl,returning});})){if(!writeUrl)history.replaceState(null,'','#'+view+(pathId?'/'+pathId:''));return;}
  if(refugeDirty()&&!confirm('Hay una idea sin guardar. ¿Quieres descartarla y salir?')){if(!writeUrl)history.replaceState(null,'','#'+view+(pathId?'/'+pathId:''));return;}
  if(!nexo.beforeNavigate(next,context,{restore})){if(!writeUrl)history.replaceState(null,'','#'+view+(pathId?'/'+pathId:''));return;}
  if(!nova.beforeNavigate(next,context,{restore})){if(!writeUrl)history.replaceState(null,'','#'+view+(pathId?'/'+pathId:''));return;}
  if(!alma.beforeNavigate(next,context,{restore})){if(!writeUrl)history.replaceState(null,'','#'+view+(pathId?'/'+pathId:''));return;}
  if(!luz.beforeNavigate(next,context,{restore})){if(!writeUrl)history.replaceState(null,'','#'+view+(pathId?'/'+pathId:''));return;}
  if(next==='recorrido'&&context==='luz'){next='luz';context='portada';if(!writeUrl)history.replaceState(null,'','#luz/portada');}
  if(next==='recorrido'&&context==='alma'){next='alma';context='portada';if(!writeUrl)history.replaceState(null,'','#alma/portada');}
  if(next==='recorrido'&&context==='nexo'){next='nexo';context='portada';if(!writeUrl)history.replaceState(null,'','#nexo/portada');}
  if(next==='recorrido'&&context==='nova'){next='nova';context='selector';if(!writeUrl)history.replaceState(null,'','#nova/selector');}
  if(!views.has(next))next='inicio';
  if(next==='apoyo'&&view!=='apoyo'&&!returning)helpReturn={view,pathId};
  if(view==='respira'&&next!=='respira'){haltBreathingAudio();breathingAudioMessage='';breathing=transition(breathing,'stop');orbTime=0;}
  if(next==='inicio')journey=null;
  if(next==='recorrido') {
    if(!Object.hasOwn(PATHS,context)){next='inicio';context=null;}
    else if(!restore||!journey||journey.pathId!==context)journey=startJourney(context);
  }
  if(next==='respira'&&view!=='respira'){haltBreathingAudio();breathingPlayer.reset();breathingAudioMessage='';breathing=newSession();orbTime=0;breathingStarted=false;}
  if(next==='orientacion'&&view!=='orientacion'&&!restore)orientationChoice=null;
  if(next==='calma'&&view!=='calma'&&!restore)calmStep=0;
  if(routeReady&&(view!==next||pathId!==context)){
    const previous=routeTrail.findLastIndex(r=>r.view===next&&r.pathId===context);
    if((returning||!writeUrl)&&previous>=0)routeTrail.splice(previous);
    else if(!returning){routeTrail.push({view,pathId});if(routeTrail.length>80)routeTrail.shift();}
  }
  view=next;pathId=context;routeReady=true;
  if(writeUrl)history.pushState(null,'','#'+view+((view==='recorrido'||view==='nova'||view==='nexo'||view==='alma'||view==='luz'||view==='luces')&&pathId?'/'+pathId:''));
  render();
}
function goBack(){
  if(view==='calma'&&calmStep>0){calmStep--;render();return;}
  if(view==='orientacion'&&orientationChoice){orientationChoice=null;render();return;}
  if(view==='recorrido'&&journey?.stack.length>1){journey=back(journey);render();return;}
  if(view==='respira'&&breathing.stage>0){haltBreathingAudio();breathingAudioMessage='';breathing={stage:breathing.stage-1,playback:'stopped'};orbTime=0;render();return;}
  const phase=main.dataset[view+'Phase'],internal=document.getElementById(view+'-back');
  if(phase&&phase!=='entry'&&internal){internal.click();return;}
  const parent=[...main.querySelectorAll('nav a[data-view]')].find(a=>a.textContent.trim()==='← Volver');
  const fallback={view:'inicio',pathId:null};
  if(parent&&(parent.dataset.view!==view||(parent.dataset.path||null)!==pathId)){fallback.view=parent.dataset.view;fallback.pathId=parent.dataset.path||null;}
  else if(['calma','orientacion','externa'].includes(view))fallback.view='apoyo';
  else if(view==='confianza')fallback.view='externa';
  else if(view==='luces'&&pathId){fallback.view='luces';}
  else if(['nova','nexo','alma','luz'].includes(view)&&pathId!=='portada'){fallback.view=view;fallback.pathId='selector';}
  const target=routeTrail.at(-1)||fallback;
  navigate(target.view,target.pathId,{restore:true,returning:true});
}
function exitApplication(){
  if(refugeDirty()&&!confirm('Hay una idea sin guardar. ¿Quieres descartarla y salir?'))return;
  if(!nexo.beforeNavigate('salir',null))return;
  if(!nova.beforeNavigate('salir',null))return;
  if(!alma.beforeNavigate('salir',null))return;
  if(!luz.beforeNavigate('salir',null))return;
  window.close();
  if(!window.closed)window.location.assign('about:blank');
}
function readRoute(){if(location.hash==='#main'){main.focus();return;}const parts=location.hash.slice(1).split('/');const candidate=parts.shift();const context=parts.join('/')||null;navigate(views.has(candidate)?candidate:'inicio',context,{restore:true,writeUrl:false});}
window.addEventListener('popstate',readRoute);
document.addEventListener('click',event=>{
  if(event.target.closest('.skip-link')){event.preventDefault();main.focus();return;}
  const exit=event.target.closest('a[data-exit]');
  if(exit){if(event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;event.preventDefault();if(luz.allowNavigation(exitApplication))exitApplication();return;}
  const a=event.target.closest('a[data-view]');if(!a||event.defaultPrevented||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
  event.preventDefault();if(a.dataset.back==='true')goBack();else navigate(a.dataset.view,a.dataset.path||null,{returning:a.dataset.returning==='true'});
});
function render(){
  homeInteractionsCleanup?.();homeInteractionsCleanup=null;
  const token=++renderId;lightsCleanup?.();lightsCleanup=null;clearDraft();refugeDirty=()=>false;main.replaceChildren();main.dataset.home=String(view==='inicio');delete main.dataset.node;delete main.dataset.contentVersion;delete main.dataset.simpleWorld;delete main.dataset.luz;delete main.dataset.luzRoute;delete main.dataset.luzPhase;delete main.dataset.alma;delete main.dataset.almaPhase;delete main.dataset.almaRoute;delete main.dataset.nexo;delete main.dataset.nexoPhase;delete main.dataset.nexoRoute;delete main.dataset.nova;delete main.dataset.novaRoute;delete main.dataset.novaPhase;main.classList.remove('nova-cover-view');editId=null;busy=false;
  main.dataset.view=view;delete main.dataset.lights;
  if(view==='inicio')renderHome();
  if(view==='diez')renderAbout();
  if(view==='recorrido')renderJourney();
  if(view==='apoyo')renderSupport();
  if(view==='refugio')renderRefuge(token);
  if(view==='ajustes')renderSettings();
  if(view==='respira')renderBreathing();
  if(view==='orientacion')renderOrientation();
  if(view==='calma')renderCalm();
  if(view==='externa')renderExternal();
  if(view==='confianza')renderTrusted();
  if(view==='nova')nova.render(main,pathId);
  if(view==='nexo')nexo.render(main,pathId);
  if(view==='alma')alma.render(main,pathId);
  if(view==='luz')luz.render(main,pathId);
  if(view==='luces')lightsCleanup=renderLights(main,pathId,{onDirty:check=>refugeDirty=check,announce});
  if(!['inicio','nova','nexo','alma','luz','luces'].includes(view))main.prepend(append(el('nav',null,{class:'page-back','aria-label':'Volver a la pantalla anterior'}),button('← Volver',goBack,{secondary:true})));
  for(const a of main.querySelectorAll('nav a[data-view]'))if(a.textContent.trim()==='← Volver')a.dataset.back='true';
  homeInteractionsCleanup=mountHomeInteractions(main);
  document.title=view==='inicio'?'Un lugar para volver a ti':document.querySelector('#view-title').textContent+' · DIEZ';
  document.querySelector('#view-title')?.focus({preventScroll:true});
  window.scrollTo(0,0);
  for(const a of document.querySelectorAll('header [data-view]')){if(a.dataset.view===view)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');}
}
function renderHome(){
  const hero=el('section',null,{class:'hero'});
  append(hero,el('h1','Un lugar para volver a ti.',{tabindex:'-1',id:'view-title'}),el('p','Cuatro puertas. Un mismo lugar. Tú.',{class:'home-purpose'}),el('p','Un espacio para personas adultas donde explorar lo que te ocurre, escribir para ti o hacer una pausa.',{class:'home-description'}));
  const grid=el('div',null,{class:'grid','aria-label':'Cuatro puertas'});
  const descriptions={nova:'Un espacio para conversar y elegir un límite.',nexo:'Un paso concreto, a tu ritmo.',alma:'Un espacio para lo que compartes.',luz:"Un espacio para mirarte con cariño, escuchar tu interior y volver a encontrarte."};
  for(const [id,path] of Object.entries(PATHS)){
    if(id==='nova'){grid.append(nova.homeCard());continue;}
    if(id==='nexo'){grid.append(nexo.homeCard());continue;}
    if(id==='alma'){grid.append(alma.homeCard());continue;}
    if(id==='luz'){grid.append(luz.homeCard());continue;}
    const card=link('', 'recorrido',id,{class:'card door '+id,'data-door':id});
    const portrait=el('div',null,{class:'portrait','aria-hidden':'true'});
    append(card,portrait,append(el('div',null,{class:'door-body'}),el('h2',path.name),el('span',path.context,{class:'context'}),el('p',descriptions[id],{class:'door-description'}),el('span','→',{class:'door-arrow','aria-hidden':'true'})));grid.append(card);
  }
  const extras=el('div',null,{class:'home-extras'});
  const breathingCard=link('','respira',null,{class:'card home-tool home-breathing','aria-label':'Abrir Respira conmigo'});
  append(breathingCard,el('h2','Respira conmigo'),el('span',null,{class:'mini-orb','aria-hidden':'true'}));extras.append(breathingCard);
  const voiceCard=link('','luz','voz',{class:'card home-tool home-voice','aria-label':'Abrir Suelta tu voz'});append(voiceCard,el('h2','Suelta tu voz'),el('span',null,{class:'lz-mini-orb','aria-hidden':'true'}));extras.append(voiceCard);
  const lightsCard=link('','luces',null,{class:'card home-tool home-lights','aria-label':'Abrir Diez pequeñas luces'});append(lightsCard,el('h2','Diez pequeñas luces'),el('span',null,{class:'lights-mini-orb','aria-hidden':'true'}));extras.append(lightsCard);
  const secondary=el('div',null,{class:'home-secondary','aria-label':'Más espacios de DIEZ'});
  for(const [next,heading,description,icon,orbClass] of [['refugio','Tu refugio','Guarda y vuelve a tus ideas.','note','refuge-orb'],['apoyo','Aquí contigo','Un espacio para encontrar apoyo.','people','support-orb']]){
    const card=link('',next,null,{class:'card home-link'+(next==='apoyo'?' support-link':'')});const orb=append(el('span',null,{class:'utility-orb '+orbClass,'aria-hidden':'true'}),presentationIcon(icon));append(card,orb,append(el('div'),el('h2',heading),el('p',description)));secondary.append(card);
  }
  const guide=append(el('section',null,{class:'home-guide','aria-label':'Conoce DIEZ'}),append(el('div'),el('h2','¿Es tu primera visita?'),el('p','Conoce los personajes, las herramientas y cómo usar este espacio.')),link('¿Qué es DIEZ?','diez',null,{class:'button secondary'}));
  append(main,hero,guide,append(el('div',null,{class:'home-layout'}),grid,extras),secondary,el('p','Elige a tu ritmo. Puedes salir o acudir directamente a ayuda externa cuando lo necesites.',{class:'note'}));
}
function renderAbout(){
  title('¿Qué es DIEZ?','Conoce este espacio');
  main.append(el('p','DIEZ es un espacio de acompañamiento general para personas adultas. Puedes explorar lo que te ocurre mediante historias, escuchar a sus personajes, escribir para ti, guardar frases o hacer una pausa. Elige por dónde empezar y utiliza solo lo que te sirva.',{class:'lead'}));
  const section=(heading,text)=>append(el('section',null,{class:'panel diez-guide-section'}),el('h2',heading),el('p',text));
  main.append(section('Cuatro personajes, cuatro puertas','Nova acompaña situaciones de relaciones; Nexo, del trabajo; Alma, de la familia; y Luz, de la vida personal. Cada uno tiene su forma de hablar y su mundo. Puedes entrar por cualquiera, explorar sus lugares y cambiar de personaje cuando quieras.'));
  const how=section('Cómo empezar','Toca la imagen de un personaje o el icono de altavoz para oír su presentación. La flecha de su tarjeta permite entrar directamente en sus lugares.');
  const steps=el('ol');
  for(const text of ['Dentro de cada personaje puedes elegir un lugar y seguir una conversación escrita y preparada de antemano.','Lee las opciones y elige solo si alguna encaja contigo. También puedes escribir con tus palabras y guardar tu reflexión en las notas de ese personaje.','Puedes volver, cambiar de lugar o salir en cualquier momento. No hay respuestas correctas ni obligación de terminar.'])steps.append(el('li',text));
  how.append(steps);main.append(how);
  const tools=section('Herramientas para cuando te apetezca','Respira conmigo ofrece tres etapas de audio. Puedes empezar, parar o cambiar de etapa; no utiliza el micrófono. Suelta tu voz te permite grabarte, escuchar la grabación y descargarla si quieres. La grabación empieza cuando pulsas Comenzar a grabar. Las dos herramientas tienen acceso directo en Inicio.');
  tools.append(actions(link('Respira conmigo','respira',null,{class:'button secondary'}),link('Suelta tu voz','luz','voz',{class:'button secondary'})));
  main.append(tools);
  const readings=section('Diez pequeñas luces','Diez pequeñas luces reúne diez historias protagonizadas por Nova, Nexo, Alma y Luz. Muestran otros momentos de sus vidas, sus dudas y sus formas de acompañarse. Puedes abrir cualquiera, leerla a tu ritmo y guardar su frase original en la Caja de las emociones. En el baúl también puedes escribir tus propias frases.');
  readings.append(link('Elegir una historia','luces',null,{class:'button secondary'}));main.append(readings);
  main.append(section('Tu refugio y tus cosas guardadas','Tu refugio reúne las ideas breves que escribas, el acceso a las notas de cada personaje y las frases del baúl. Aquí contigo está disponible en la navegación principal para consultar opciones de apoyo y ayuda externa.'));
  main.append(section('Ajustes','Puedes elegir el tema visual, cambiar el tamaño del texto y ajustar el movimiento general y de los orbes.'));
  main.append(section('Qué puedes esperar','Los relatos y sus continuaciones están preparados de antemano. Las opciones muestran distintos caminos; DIEZ no interpreta lo que escribes ni genera respuestas personalizadas. El orbe de voz reacciona al volumen del sonido, sin interpretar las palabras ni evaluar emociones.'));
  const limits=section('Qué no ofrece DIEZ','DIEZ no diagnostica, no ofrece terapia ni sustituye la atención profesional. Tampoco hay una persona atendiendo en directo ni se reciben avisos. En Aquí contigo puedes encontrar opciones de apoyo y acceso a ayuda externa.');
  limits.append(link('Ir a Aquí contigo','apoyo',null,{class:'button secondary'}));main.append(limits);
  main.append(section('Esta demostración y tus datos','Esta es una versión de demostración para el concurso. Las ideas, las notas de los personajes y las frases que guardas se conservan en este navegador y dispositivo, sin cuenta ni copia remota. En Ajustes puedes preparar un archivo de copia y recuperarlo después; el archivo incluye tus textos y debes guardarlo en un lugar privado. Las grabaciones de Suelta tu voz se descargan por separado. Para probar la aplicación, utiliza ejemplos ficticios sin información sensible.'));
  main.append(actions(link('Elegir un personaje','inicio',null,{class:'button'})));
}
function renderJourney(){
  const path=PATHS[journey.pathId];const node=currentNode(journey);
  title(node.title,path.name+' · '+path.context);
  main.dataset.contentVersion=CONTENT_VERSION;main.dataset.node=journey.stack.at(-1);
  if(node.type==='question'){
    const choices=el('div',null,{class:'choices','aria-label':'Opciones'});
    for(const o of node.options)choices.append(button(o.label,()=>{journey=choose(journey,o.id);render();},{id:'choice-'+o.id}));main.append(choices);
  }else{
    main.append(el('p',node.body,{class:'lead'}));
    if(node.suggestion)main.append(button('Guardar esta idea en el refugio',async()=>{
      const b=document.querySelector('#save-suggestion');b.disabled=true;
      try{await refuge.createItem(node.suggestion);announce('Idea guardada en este navegador.');b.textContent='Idea guardada';}
      catch(error){b.disabled=false;announce(error.message);}
    },{id:'save-suggestion'}));
  }
  main.append(actions(button('Atrás',goBack,{secondary:true,id:'journey-back'}),node.skip?button('Omitir esta pregunta',()=>{journey=skip(journey);render();},{secondary:true,id:'journey-skip'}):null,button('Salir y volver a Inicio',()=>navigate('inicio'),{secondary:true,id:'journey-exit'})));
  main.append(el('p','Las elecciones se usan solo para mostrar este recorrido. No se guardan como historial ni se evalúa cómo te sientes.',{class:'note'}));
}
function pathCard(next,heading,description,icon,kind){
  return append(link('',next,null,{class:'card path-card '+kind}),el('span',icon,{class:'soft-icon','aria-hidden':'true'}),append(el('div'),el('h2',heading),el('p',description)),el('span','›',{class:'chevron','aria-hidden':'true'}));
}
function renderSupport(){
  title('Aquí contigo','Un espacio para orientarte');
  main.append(el('p','¿Qué necesitas en este momento?',{class:'lead'}));
  append(main,pathCard('orientacion','Estoy aquí','Puedes elegir qué necesitas, sin tener que explicarlo todo.','⌁','orientation'),pathCard('calma','Necesito recuperar la calma','Una pausa breve, voluntaria y a tu ritmo.','❋','calm'),pathCard('externa','Necesito ayuda externa','Una persona de confianza o un servicio de ayuda.','♡','external'),el('p','DIEZ no atiende en vivo ni recibe avisos. Los contactos y servicios están en «Necesito ayuda externa»; puedes acceder sin completar ningún recorrido.',{class:'note'}),actions(button('Volver a la pantalla anterior',()=>navigate(helpReturn.view,helpReturn.pathId,{restore:true}),{secondary:true,id:'support-return'}),link('Inicio','inicio',null,{class:'button secondary'})));
}
function renderOrientation(){
  if(!orientationChoice){
    title('Estoy aquí','Una elección, a tu ritmo');main.append(el('p','¿Qué podría ayudarte ahora?',{class:'lead'}));
    const choices=el('div',null,{class:'choices'});
    for(const option of ORIENTATION)choices.append(button(option.label,()=>{orientationChoice=option.id;render();},{id:'orientation-'+option.id}));
    append(main,choices,actions(button('Omitir y volver a Aquí contigo',()=>navigate('apoyo'),{secondary:true}),button('Salir a Inicio',()=>navigate('inicio'),{secondary:true})));
  }else{
    const option=ORIENTATION.find(x=>x.id===orientationChoice);title(option.title,'Estoy aquí');main.append(el('p',option.text,{class:'lead'}));
    main.append(actions(link(option.actionLabel,option.action,null,{class:'button'}),button('Atrás',()=>{orientationChoice=null;render();},{secondary:true}),link('Volver a Aquí contigo','apoyo',null,{class:'button secondary'}),link('Salir a Inicio','inicio',null,{class:'button secondary'})));
  }
}
function renderCalm(){
  const step=CALM[calmStep];title('Necesito recuperar la calma','Una pausa breve y voluntaria');
  main.append(append(el('section',null,{class:'panel calm-panel'}),el('h2',step.title,{id:'calm-stage'}),el('p',step.text,{class:'lead'})));
  const change=next=>{calmStep=Math.max(0,Math.min(CALM.length-1,next));render();};
  append(main,actions(button('Atrás',goBack,{secondary:true,id:'calm-back'}),calmStep<CALM.length-1?button('Continuar',()=>change(calmStep+1),{id:'calm-next'}):button('Repetir la pausa',()=>change(0),{id:'calm-repeat'}),calmStep<CALM.length-1?button('Omitir este momento',()=>change(calmStep+1),{secondary:true,id:'calm-skip'}):null),actions(link('Hablar con mi persona de confianza','confianza',null,{class:'button secondary'}),button('Detener y volver a Aquí contigo',()=>navigate('apoyo'),{secondary:true,id:'calm-stop'}),link('Salir a Inicio','inicio',null,{class:'button secondary'})),el('p','No se evalúa cómo te sientes ni se exige completar una cantidad de pasos.',{class:'note'}));
}
function renderExternal(){
  title('Necesito ayuda externa','Contacto externo · España');
  main.append(pathCard('confianza','Mi persona de confianza','Preparar un mensaje para pedir que me llamen.','♡','orientation'));
  main.append(el('h2','Servicios de ayuda'));
  for(const r of SUPPORT){
    const card=el('section',null,{class:'card resource','data-resource':r.id});
    const phone=el('a','Llamar al '+r.phone,{href:r.href,class:'button phone','aria-label':'Llamar al '+r.phone+', '+r.title});
    const source=el('a',r.sourceName,{href:r.source,rel:'noopener noreferrer',target:'_blank'});
    append(card,append(el('div',null,{class:'resource-heading'}),el('span',r.phone,{class:'phone-number','aria-hidden':'true'}),el('h2',r.title)),el('p',r.body),phone,append(el('p',null,{class:'note'}),'Fuente oficial: ',source));main.append(card);
  }
  append(main,el('p','Ante peligro inmediato, llama al 112. El 016 no lo sustituye. Las llamadas requieren servicios del teléfono; los enlaces necesitan conexión. DIEZ no transmite tu ubicación ni verifica disponibilidad.',{class:'notice'}),el('p','Una llamada o visita puede dejar rastros en el dispositivo. DIEZ no borra el historial ni garantiza que el 016 no quede registrado.',{class:'note'}),actions(link('Volver a Aquí contigo','apoyo',null,{class:'button secondary'}),link('Inicio','inicio',null,{class:'button secondary'})));
}
function renderTrusted(){
  title('Pedir que me llamen','Mi persona de confianza');
  append(main,el('p','Puedes preparar un mensaje y elegir a la persona en tu aplicación. Tú revisas y decides si enviarlo. DIEZ no lo envía ni puede confirmar que alguien responda.',{class:'lead'}),el('p','Demostración: usa texto ficticio, sin nombres, teléfonos ni datos sensibles. El borrador es temporal y desaparece al salir de esta pantalla.',{class:'notice'}));
  const draft=el('textarea',null,{id:'trusted-draft',rows:'5',maxlength:'500','aria-describedby':'trusted-limit trusted-status'});draft.value=TRUSTED_MESSAGE;
  const status=el('p','', {id:'trusted-status',role:'status',class:'message'});
  const copy=button('Copiar mensaje',async()=>{try{status.textContent=await copyDraft(draft.value);}catch(e){status.textContent=e.message;draft.focus();draft.select();}},{id:'trusted-copy'});
  const controls=actions(copy);
  if(typeof navigator.share==='function')controls.append(button('Abrir menú del dispositivo',async()=>{try{status.textContent=await shareDraft(draft.value);}catch(e){status.textContent=e.name==='AbortError'?'Has cerrado el menú. No se confirma ningún envío.':e.message;}},{secondary:true,id:'trusted-share'}));
  if(isMobileMessagesAvailable())controls.append(el('a','Abrir Mensajes',{href:messagesLink(),class:'button secondary',id:'trusted-sms'}));
  append(main,append(el('section',null,{class:'panel'}),el('label','Mensaje de ejemplo editable',{for:'trusted-draft'}),draft,el('p','Elige destinatario en tu aplicación. Si usas Abrir Mensajes, copia y pega este texto allí: la precarga del mensaje varía según el dispositivo.',{id:'trusted-limit',class:'note'}),status,controls),el('p',isMobileMessagesAvailable()?'Abrir Mensajes depende de que exista una aplicación compatible. Si no se abre, utiliza Copiar mensaje.':'En este navegador puedes copiar el mensaje y abrir después la aplicación que prefieras.',{class:'draft-help note'}),actions(link('Volver a ayuda externa','externa',null,{class:'button secondary'}),link('Salir a Inicio','inicio',null,{class:'button secondary'})));
}
function renderRefuge(token){
  title('Tu refugio','Tus ideas y el acceso a tus notas');
  main.append(el('p','Aquí puedes guardar una idea breve y encontrar el acceso a lo que has elegido conservar en DIEZ.',{class:'lead'}));
  const guide=append(el('section',null,{class:'panel refuge-guide','aria-labelledby':'refuge-guide-title'}),el('h2','Cómo usar Tu refugio',{id:'refuge-guide-title'}));
  const steps=el('ol');for(const text of ['Escribe una idea y pulsa Guardar idea.','Vuelve a Tu refugio desde la barra principal: tus ideas aparecerán debajo del formulario.','Para recuperar una reflexión de un recorrido, abre Notas de Nova, Nexo, Alma o Luz al final de esta página.'])steps.append(el('li',text));guide.append(steps,el('p','Tus notas están en el cuaderno de cada personaje; tus frases, en el baúl. Las grabaciones que descargas se encuentran en tu dispositivo, fuera de DIEZ.'));main.append(guide,append(el('section',null,{class:'panel refuge-chest-access'}),el('h2','Mis frases del baúl'),el('p','Vuelve a las frases de las lecturas y a las que has escrito en la Caja de las emociones.'),link('Abrir mis frases del baúl','luces','baul',{class:'button secondary'})));
  main.append(el('p','Todo se guarda solo en este navegador y dispositivo. No hay cuenta, sincronización ni copia remota; borrar sus datos o usar una sesión privada puede hacer que pierdas lo guardado.',{class:'note'}));
  const privacy=el('details',null,{class:'notes-info'});privacy.append(el('summary','Sobre esta versión de prueba y tus datos'),el('p','Utiliza ejemplos ficticios. No incluyas nombres reales, teléfonos, direcciones, diagnósticos ni información sensible. Si compartes el dispositivo, otras personas con acceso al navegador podrían leer lo guardado.',{class:'note'}));main.append(privacy);
  main.append(el('h2','Tus ideas breves'));
  const form=el('form',null,{id:'refuge-form',class:'panel',novalidate:''});
  const input=el('textarea',null,{id:'refuge-text',maxlength:'300',rows:'3','aria-describedby':'refuge-hint refuge-message',required:''});
  refugeDirty=()=>Boolean(input.value.trim());trackDraft(refugeDirty);
  const status=el('p','', {id:'refuge-message',role:'status','aria-live':'polite',class:'message'});
  const save=el('button','Guardar idea',{type:'submit',id:'refuge-save'});
  const cancel=button('Cancelar edición',()=>{editId=null;input.value='';save.textContent='Guardar idea';cancel.hidden=true;input.focus();},{secondary:true,id:'refuge-cancel'});cancel.hidden=true;
  append(form,el('label','Idea breve',{for:'refuge-text'}),input,el('p','Hasta 300 caracteres. Escribe una acción general sin datos identificativos.',{id:'refuge-hint',class:'note'}),status,actions(save,cancel));
  const list=el('ul',null,{id:'refuge-items',class:'items','aria-label':'Ideas guardadas'});
  const empty=el('p','Consultando tus ideas…',{id:'refuge-empty',class:'refuge-empty-state'});
  const reload=button('Consultar ideas',()=>refresh(),{secondary:true,id:'refuge-query'});
  const reloadActions=actions(reload);reloadActions.classList.add('refuge-query-actions');
  append(main,form,reloadActions,empty,list,el('h2','Notas de tus personajes'),el('p','Las reflexiones que guardas dentro de un personaje están en su cuaderno. Elige uno para consultarlas, editarlas o eliminarlas.',{class:'note'}),actions(link('Notas de Nova','nova','notas/todas',{class:'button secondary'}),link('Notas de Nexo','nexo','notas/todas',{class:'button secondary'}),link('Notas de Alma','alma','notas/todas',{class:'button secondary'}),link('Notas de Luz','luz','notas/todas',{class:'button secondary'})),actions(link('Volver a Inicio','inicio',null,{class:'button secondary'})));
  function message(text,error=false){status.textContent=text;status.className=error?'message error':'message';input.setAttribute('aria-invalid',String(error));}
  function locked(value){busy=value;for(const b of main.querySelectorAll('button'))b.disabled=value;}
  async function refresh(){
    try{
      const items=await refuge.listItems();if(token!==renderId)return;
      list.replaceChildren();empty.textContent=items.length?'':'Todavía no hay ideas guardadas. Puedes añadir una cuando quieras.';
      for(const item of items){
        const li=el('li',null,{'data-item-id':item.id});const text=el('p',item.text,{class:'item-text'});
        append(li,text,actions(button('Editar',()=>{editId=item.id;input.value=item.text;save.textContent='Guardar cambios';cancel.hidden=false;message('Editando la idea. Puedes cancelar sin cambiarla.');input.focus();},{secondary:true}),button('Eliminar',async()=>{
          if(!confirm('¿Eliminar esta idea? Esta acción no se puede deshacer.'))return;locked(true);try{await refuge.deleteItem(item.id);if(token!==renderId)return;if(editId===item.id){editId=null;input.value='';save.textContent='Guardar idea';cancel.hidden=true;}await refresh();message('Idea eliminada.');reload.focus();}catch(e){message(e.message,true);}finally{if(token===renderId)locked(false);}
        },{secondary:true})));list.append(li);
      }
    }catch(error){if(token!==renderId)return;empty.textContent='El refugio no está disponible ahora.';message(error.message,true);}
  }
  form.addEventListener('submit',async event=>{
    event.preventDefault();if(busy)return;locked(true);
    try{if(editId)await refuge.updateItem(editId,input.value);else await refuge.createItem(input.value);if(token!==renderId)return;editId=null;input.value='';save.textContent='Guardar idea';cancel.hidden=true;await refresh();message('Idea guardada en este navegador.');input.focus();}
    catch(error){if(token===renderId)message(error.message,true);}
    finally{if(token===renderId)locked(false);}
  });
  refresh();
}
function renderSettings(){
  title('Ajustes','Tu espacio, a tu manera');
  const section=(name)=>append(el('section',null,{class:'panel settings-section'}),el('h2',name));
  const appearance=section('Apariencia'),themes=el('div',null,{class:'theme-select',role:'group','aria-label':'Tema visual','aria-describedby':'theme-help'});
  for(const theme of ['amanecer','refugio'])themes.append(button(theme==='amanecer'?'Amanecer':'Refugio',()=>{settings.theme=theme;persistSettings();render();announce('Tema '+theme+' activado.');},{secondary:settings.theme!==theme,id:'theme-'+theme}));
  for(const b of themes.children)b.setAttribute('aria-pressed',String(b.id==='theme-'+settings.theme));
  appearance.append(themes,el('p','Los temas solo cambian la apariencia.',{id:'theme-help',class:'note'}));
  const text=section('Texto'),size=el('select',null,{id:'text-size'});for(const [value,label] of [['1','Normal'],['1.15','Grande'],['1.3','Muy grande']])size.append(el('option',label,{value}));size.value=settings.size;
  size.addEventListener('change',()=>{settings.size=size.value;persistSettings();announce('Tamaño de texto actualizado.');});
  text.append(append(el('div',null,{class:'form-group'}),el('label','Tamaño del texto',{for:'text-size'}),size));
  const movement=section('Movimiento'),reduce=el('input',null,{type:'checkbox',id:'reduce-motion','aria-describedby':'system-motion'});reduce.checked=settings.reduce;
  const orbMotion=el('select',null,{id:'orb-motion','aria-describedby':'orb-motion-help'});for(const[value,label]of [['system','Seguir los ajustes de movimiento'],['enabled','Activar movimiento de los orbes'],['disabled','Mantener los orbes quietos']])orbMotion.append(el('option',label,{value}));orbMotion.value=settings.orbMotion;
  orbMotion.addEventListener('change',()=>{settings.orbMotion=orbMotion.value;persistSettings();announce('Movimiento de los orbes actualizado.');});
  reduce.addEventListener('change',()=>{settings.reduce=reduce.checked;persistSettings();announce(settings.reduce?'Movimiento reducido activado.':'Se respeta la preferencia de movimiento del sistema.');});
  movement.append(append(el('div',null,{class:'form-group'}),append(el('label',null,{for:'reduce-motion',class:'check-label'}),reduce,'Reducir movimiento'),el('p',systemMotion.matches?'Tu sistema solicita reducir el movimiento. Puedes elegir el movimiento de los orbes por separado.':'Tu sistema no solicita reducir el movimiento.',{id:'system-motion',class:'note'})),append(el('div',null,{class:'form-group'}),el('label','Movimiento de los orbes',{for:'orb-motion'}),orbMotion,el('p','Puedes activar solo los orbes sin cambiar los ajustes de tu dispositivo. El resto de animaciones sigue la preferencia general.',{id:'orb-motion-help',class:'note'})));
  const backup=section('Copia de tus notas y frases');
  backup.append(el('p','La copia incluye tus ideas breves, las notas de Nova, Nexo, Alma y Luz, y las frases del baúl. Se descarga como un archivo JSON que puedes recuperar en otro navegador o dispositivo. Tus grabaciones se descargan por separado desde Suelta tu voz.',{class:'note'}));
  backup.append(el('p','Al recuperar una copia, DIEZ añade las entradas que falten y conserva las que ya tienes. No reemplaza ni borra tus datos. El archivo contiene tus textos: guárdalo en un lugar privado.',{class:'note'}));
  let currentBackup=null,downloadUrl=null;
  const backupStatus=el('p','',{id:'backup-status',role:'status','aria-live':'polite',class:'message backup-status'});
  const prepare=button('Preparar una copia',async()=>{
    prepare.disabled=true;backupStatus.textContent='Preparando el archivo…';
    try{
      const data=await createBackup();const blob=backupFile(data);
      if(downloadUrl)URL.revokeObjectURL(downloadUrl);
      downloadUrl=URL.createObjectURL(blob);
      const day=new Date().toISOString().slice(0,10);
      download.href=downloadUrl;download.download='diez-copia-'+day+'.json';download.hidden=false;
      backupStatus.textContent='La copia está preparada. Pulsa Descargar copia para guardarla en tu dispositivo.';download.focus();
    }catch(error){backupStatus.textContent=error.message;}
    finally{prepare.disabled=false;}
  },{id:'backup-prepare'});
  const download=el('a','Descargar copia',{class:'button secondary backup-download',hidden:true});
  const picker=el('input',null,{type:'file',id:'backup-file',accept:'.json,application/json','aria-describedby':'backup-file-help backup-status'});
  const pickerLabel=el('label','Elige una copia de DIEZ para recuperar',{for:'backup-file'});
  const fileHelp=el('p','Antes de importar verás cuántas ideas, notas y frases contiene el archivo.',{id:'backup-file-help',class:'note'});
  const restore=button('Recuperar esta copia',async()=>{
    if(!currentBackup)return;
    restore.disabled=true;backupStatus.textContent='Recuperando la copia…';
    try{
      const result=await restoreBackup(currentBackup);
      backupStatus.textContent='Copia recuperada: '+result.imported+' entradas añadidas y '+result.skipped+' ya existentes conservadas.';
      currentBackup=null;restore.hidden=true;preview.hidden=true;picker.value='';
    }catch(error){
      const partial=error.backupProgress;
      backupStatus.textContent=partial?'La recuperación se interrumpió después de añadir '+partial.imported+' entradas. Puedes intentarlo de nuevo; las ya recuperadas se omitirán. '+error.message:error.message;
    }finally{restore.disabled=false;}
  },{secondary:true,id:'backup-restore'});restore.hidden=true;
  const preview=el('p','',{id:'backup-preview',class:'note backup-preview',hidden:true});
  picker.addEventListener('change',async()=>{
    currentBackup=null;restore.hidden=true;preview.hidden=true;
    const file=picker.files?.[0];if(!file)return;
    try{
      if(file.size>25_000_000)throw new Error('El archivo supera el tamaño permitido para una copia de DIEZ.');
      currentBackup=parseBackup(await file.text());
      const counts=backupCounts(currentBackup);
      preview.textContent='Esta copia contiene '+counts.ideas+' ideas breves, '+counts.notes+' notas de personajes y '+counts.phrases+' frases del baúl.';
      preview.hidden=false;restore.hidden=false;backupStatus.textContent='Revisa el contenido y pulsa Recuperar esta copia cuando quieras.';
    }catch(error){backupStatus.textContent=error.message;}
  });
  backup.append(append(el('div',null,{class:'backup-actions'}),prepare,download),pickerLabel,picker,fileHelp,preview,restore,backupStatus);
  main.append(appearance,text,movement,backup,el('p',settingsPersist?'Estos ajustes se guardan localmente. No guardan tus recorridos.':'El navegador no permite guardar ajustes. Funcionan durante esta sesión.',{class:'note settings-storage'}),actions(link('Volver a Inicio','inicio',null,{class:'button secondary'})));
}
function renderBreathing(){
  const stage=STAGES[breathing.stage];const audio=audioContract(stage);
  const active=breathingStarted||breathing.stage>0;
  title(active?'No tienes que resolverlo todo ahora':'Respira conmigo',active?null:'Una pausa a tu ritmo');
  const panel=el('section',null,{class:'panel breathing','data-session':active?'active':'intro','aria-labelledby':active?'view-title':'breathing-message'});
  const orb=el('div',null,{class:'orb','aria-hidden':'true','data-state':breathing.playback});
  if(!active)panel.append(el('h2','No tienes que resolverlo todo ahora',{id:'breathing-message'}));
  append(panel,append(el('div',null,{class:'orb-space'}),orb),el('p','Etapa '+(breathing.stage+1)+' · '+stage.title,{id:'breathing-stage',class:'eyebrow'}));
  panel.append(orbMotionNotice());
  if(!active){
    append(panel,el('p',stage.text,{class:'lead'}),el('p','El movimiento es solo visual. Puedes repetir libremente o parar.',{class:'note'}));
    if(audio.available)panel.append(el('p','El audio comienza cuando pulsas Comenzar. El movimiento del orbe no está sincronizado con la voz.',{class:'note'}));
  }
  const control=action=>{
    const focused=document.activeElement?.id,wasPlaying=breathing.playback==='playing';
    orbTime=orb.getAnimations()[0]?.currentTime||orbTime;
    breathingControlChanging=true;
    try{
      if(action==='pause')breathingPlayer.pause();
      if(['stop','repeat','next','restart'].includes(action))breathingPlayer.stop();
      if(['stop','repeat','next','restart'].includes(action))orbTime=0;
      if(action==='play'||action==='repeat')breathingStarted=true;
      breathing=transition(breathing,action);
      if(action==='play'||action==='repeat')startBreathingAudio(action==='repeat');
      if(action==='next'&&wasPlaying){breathing=transition(breathing,'play');startBreathingAudio(true);}
    }finally{breathingControlChanging=false;}
    render();
    const target=document.getElementById(focused);
    (target&&!target.disabled?target:document.getElementById('breathing-play'))?.focus({preventScroll:true});
    announce('Etapa '+(breathing.stage+1)+' de 3. '+stageStatus());
  };
  const primary=actions(button(breathingAudioLoading?'Cargando…':breathing.playback==='playing'?'Pausar':breathing.playback==='paused'?'Continuar':'Comenzar',()=>control(breathing.playback==='playing'?'pause':'play'),{id:'breathing-play',disabled:breathingAudioLoading}));primary.classList.add('breathing-primary');
  const stateMessage=el('p',stageStatus(),{role:'status',id:'breathing-state',...(active&&!breathingAudioFailed?{class:'sr-only'}:{})});
  if(!active)panel.querySelector('#breathing-message').after(el('p','Pulsa Comenzar para escuchar el audio. El micrófono no se utiliza.',{class:'note'}),primary,stateMessage);else panel.prepend(primary,stateMessage);
  const secondary=el('details',null,{class:'breathing-options'});secondary.open=active;secondary.append(el('summary','Elegir etapa y otras opciones'));
  const stages=el('div',null,{class:'actions','aria-label':'Etapas disponibles libremente'});for(const [index,item] of STAGES.entries())stages.append(button(String(index+1)+' · '+item.title,()=>{haltBreathingAudio();breathingAudioMessage='';breathing={stage:index,playback:'stopped'};orbTime=0;breathingStarted=true;render();},{secondary:true,id:'breathing-stage-'+index}));secondary.append(stages);
  if(active)secondary.append(actions(button('Repetir esta etapa',()=>control('repeat'),{secondary:true,id:'breathing-repeat'}),button('Reiniciar respiración',()=>control('restart'),{secondary:true,id:'breathing-reset'}),breathing.stage<2?button('Siguiente etapa',()=>control('next'),{secondary:true,id:'breathing-next'}):null));
  panel.append(secondary);
  main.append(panel);
  const animation=orb.getAnimations()[0];if(animation)animation.currentTime=orbTime;
}
function stageStatus(){return breathingAudioMessage||(breathingAudioLoading?'Cargando audio…':breathing.playback==='playing'?'Audio y pausa visual en marcha.':breathing.playback==='paused'?'Audio y pausa visual pausados.':'Puedes comenzar cuando quieras.');}
function connection(){document.querySelector('#connection-status').textContent=navigator.onLine?'La primera carga y las actualizaciones necesitan conexión.':'Sin conexión: solo contenido precargado y datos locales; las llamadas y los enlaces dependen de servicios externos.';}
window.addEventListener('online',connection);window.addEventListener('offline',connection);connection();
function keepEditorVisible(){
  const editor=document.activeElement;
  const visibleHeight=window.visualViewport?.height||innerHeight;
  if(!editor?.matches('textarea,select'))return;
  if(visibleHeight>=500){editor.style.maxHeight='';return;}
  const top=document.querySelector('.site-header').getBoundingClientRect().bottom+12;
  if(editor.matches('textarea'))editor.style.maxHeight=Math.max(110,visibleHeight-top-24)+'px';
  const box=editor.getBoundingClientRect();
  if(box.top<top)scrollBy(0,box.top-top);
  else if(box.bottom>visibleHeight-12)scrollBy(0,box.bottom-visibleHeight+12);
}
document.addEventListener('focusin',()=>requestAnimationFrame(keepEditorVisible));
window.visualViewport?.addEventListener('resize',()=>requestAnimationFrame(keepEditorVisible));
window.addEventListener('resize',()=>requestAnimationFrame(keepEditorVisible));
validateContent();readRoute();
if('serviceWorker' in navigator&&isSecureContext)navigator.serviceWorker.register('./sw.js',{scope:'./'}).catch(()=>{announce('No se ha podido preparar el uso sin conexión. Puedes seguir usando el motor con conexión.');});
