import {imageAttributes,backgroundAsset} from './responsive-media.js?v=0.15.4';
import {icon} from './presentation.js?v=0.15.4';
const el=(tag,text,attrs={})=>{if(tag==='img')attrs=imageAttributes(attrs);const e=document.createElement(tag);if(text!=null)e.textContent=text;for(const[k,v]of Object.entries(attrs))e.setAttribute(k,v);return e;};
const append=(e,...children)=>{e.append(...children);return e;};
const link=(label,view,path,attrs={})=>el('a',label,{href:'#'+view+(path?'/'+path:''),'data-view':view,...(path?{'data-path':path}:{}),...attrs});
// Reuse the exact Alma layout classes; keep each world's resources and controller.
export function composeSelector({world,name,category,description,background,character,ornament,bubble,places,notes}){
 const section=el('section',null,{class:'am-world ds-selector ds-'+world,'aria-label':'Los lugares de '+name});section.style.setProperty('--am-background',`url('${new URL(backgroundAsset(background),document.baseURI).href}')`);
 const top=append(el('nav',null,{class:'am-top','aria-label':'Navegación de '+name}),link('← Volver',world,'portada',{class:'am-button am-secondary'}),link('Inicio','inicio',null,{class:'am-button am-secondary'}));section.append(top);
 const label=append(el('div',null,{class:'am-world-label'}),el('h1',name,{id:'view-title',tabindex:-1}),el('p',category,{class:'am-kicker'}),append(el('div',null,{class:'am-ornament'}),ornament),el('p',description,{class:'am-world-description'}));character.classList.add('am-character');bubble.classList.add('am-bubble');section.append(append(el('div',null,{class:'am-hero'}),label,character,bubble));
 const grid=el('div',null,{class:'am-grid'});places.forEach((p,index)=>{const a=link('',world,'escena/'+p.id,{class:'am-place ds-place '+p.hook,'data-scene':p.id,'data-place':String(index+1).padStart(2,'0')});const image=el('img',null,{src:p.image,alt:'',loading:'lazy',decoding:'async'});append(a,image,append(el('span',null,{class:'am-card-icon','aria-hidden':true}),p.icon),append(el('div',null,{class:'am-card-copy'}),el('h2',p.title),el('span','›',{'aria-hidden':true})));grid.append(a);});section.append(grid);
 section.append(append(link('',world,'notas/todas',{class:'am-notes-card'}),append(el('span',null,{class:'am-card-icon','aria-hidden':true}),icon('note')),append(el('div'),el('h2',notes.title),el('p',notes.description)),el('span','→',{'aria-hidden':true})));return section;
}
