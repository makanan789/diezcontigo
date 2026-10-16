// Presentation preferences only: no audio starts when a card enters the viewport.
const preferenceKey='diez-character-audio-known-v1';
const known=new Set();
try{const saved=JSON.parse(localStorage.getItem(preferenceKey)||'[]');if(Array.isArray(saved))for(const id of saved)if(['nova','nexo','alma','luz'].includes(id))known.add(id);}catch{}
const characters=[
 {id:'nova',name:'Nova',card:'.nova-home,.nova-cover-full',art:'.nova-cover-art',figure:'.nova-figure'},
 {id:'nexo',name:'Nexo',card:'.nx-cover',art:'.nx-cover-art',figure:'.nx-cover-character'},
 {id:'alma',name:'Alma',card:'.am-home,.am-cover',art:'.am-cover-art',figure:'.am-character'},
 {id:'luz',name:'Luz',card:'.lz-home,.lz-cover',art:'.lz-cover-art',figure:'.lz-character'}
];
function remember(id){known.add(id);try{localStorage.setItem(preferenceKey,JSON.stringify([...known]));}catch{}}
function speaker(){const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');for(const[k,v]of Object.entries({viewBox:'0 0 24 24',width:22,height:22,fill:'none',stroke:'currentColor','stroke-width':1.7,'stroke-linecap':'round','stroke-linejoin':'round','aria-hidden':'true'}))svg.setAttribute(k,v);const p=document.createElementNS(svg.namespaceURI,'path');p.setAttribute('d','M11 4L6 8H3v8h3l5 4z M15 8a6 6 0 0 1 0 8 M18 5a10 10 0 0 1 0 14');svg.append(p);return svg;}
export function mountHomeInteractions(main){
 const cleanups=[];
 for(const character of characters)for(const card of main.querySelectorAll(character.card)){
  const art=card.querySelector(character.art),figure=card.querySelector(character.figure);if(!art||!figure)continue;
  const panel=document.createElement('div');panel.className='character-audio-hint';panel.dataset.world=character.id;
  const play=document.createElement('button');play.type='button';play.className='character-audio-invite';
  const text=document.createElement('span');play.append(speaker(),text);
  panel.append(play);art.after(panel);
  let visible=false;
  function paint(){
   const active=figure.dataset.playing==='true';if(active&&!known.has(character.id))remember(character.id);
   const intro=visible&&!known.has(character.id)&&!active;panel.dataset.intro=String(intro);panel.dataset.playing=String(active);
   text.textContent='Escuchar a '+character.name;
   play.setAttribute('aria-label',active?'Pausar a '+character.name:'Escuchar a '+character.name);play.setAttribute('aria-pressed',String(active));
  }
  function learn(){remember(character.id);paint();}
  function focus(){visible=true;paint();}
  play.addEventListener('click',()=>figure.click());figure.addEventListener('click',learn);
  figure.addEventListener('focus',focus);panel.addEventListener('focusin',focus);
  const stateObserver=new MutationObserver(paint);stateObserver.observe(figure,{attributes:true,attributeFilter:['data-playing']});
  let viewportObserver;
  if('IntersectionObserver' in window){viewportObserver=new IntersectionObserver(entries=>{for(const entry of entries){visible=entry.isIntersecting;paint();}},{threshold:.5});viewportObserver.observe(panel);}else visible=true;
  paint();
  cleanups.push(()=>{stateObserver.disconnect();viewportObserver?.disconnect();figure.removeEventListener('click',learn);figure.removeEventListener('focus',focus);});
 }
 // Coarse-pointer screens highlight these entrances as the person scrolls.
 const entrances=[...main.querySelectorAll('.home-extras>.card,.dl-entry')];
 if(main.dataset.home==='true'&&'IntersectionObserver' in window){
  const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting&&entry.intersectionRatio>=.7)entry.target.dataset.inView='true';else if(!entry.isIntersecting||entry.intersectionRatio<.5)entry.target.dataset.inView='false';}},{threshold:[0,.5,.7],rootMargin:'-120px 0px -18px 0px'});
  for(const entry of entrances)observer.observe(entry);cleanups.push(()=>observer.disconnect());
 }
 return()=>{for(const cleanup of cleanups)cleanup();};
}
