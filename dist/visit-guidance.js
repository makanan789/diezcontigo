// Shared orientation and endings. No interpretation or automatic saving of user text.
const el=(tag,text,attrs={})=>{const node=document.createElement(tag);if(text!=null)node.textContent=text;for(const [key,value] of Object.entries(attrs))node.setAttribute(key,value);return node;};
export function journeyOrientation(){return el('p','Encontrarás una historia y algunas opciones. Puedes cambiar de camino, volver al lugar o salir cuando quieras.',{class:'journey-orientation'});}
export function journeyEnding({world,scene,onNote}){
 const section=el('section',null,{class:'journey-ending','aria-label':'Cómo quieres terminar'});
 section.append(el('h2','Puedes dejarlo aquí'),el('p','No necesitas sacar una conclusión. Si quieres, puedes escribir una idea para ti o volver al lugar.'));
 const actions=el('div',null,{class:'actions'});
 const note=el('button','Escribir una idea para mí',{type:'button',class:'secondary'});note.addEventListener('click',onNote);
 actions.append(note,el('a','Volver al lugar',{href:'#'+world+'/escena/'+scene,'data-view':world,'data-path':'escena/'+scene,class:'button secondary'}));
 section.append(actions);return section;
}
