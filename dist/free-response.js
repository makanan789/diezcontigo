import {trackDraft} from './draft-guard.js';

const element=(tag,text,attrs={})=>{
 const node=document.createElement(tag);
 if(text!=null)node.textContent=text;
 for(const [key,value] of Object.entries(attrs))node.setAttribute(key,String(value));
 return node;
};

// An optional local note; free text never selects or generates a narrative branch.
export function freeResponse({world,scene,question,store,onDirty,announce}){
 const prefix=world+'-free-response';
 const section=element('section',null,{class:'free-response','aria-label':'Escribir con tus palabras'});
 const launch=element('button','Quiero expresarlo con mis palabras',{
  type:'button',class:'secondary free-response-open','aria-expanded':'false','aria-controls':prefix+'-form'
 });
 const form=element('form',null,{id:prefix+'-form',class:'free-response-form',novalidate:''});
 form.hidden=true;
 const editor=element('textarea',null,{
  id:prefix+'-text',rows:5,maxlength:2000,required:'','aria-describedby':prefix+'-hint '+prefix+'-status'
 });
 const status=element('p','',{id:prefix+'-status',role:'status',class:'message'});
 const save=element('button','Guardar en mis notas',{type:'submit'});
 const close=element('button','Volver a las opciones',{type:'button',class:'secondary'});
 const notes=element('a','Ver mis notas',{
  href:'#'+world+'/notas/'+scene,'data-view':world,'data-path':'notas/'+scene,class:'button secondary'
 });
 notes.hidden=true;
 const controls=element('div',null,{class:'actions'});
 controls.append(save,close,notes);
 form.append(
  element('p',question,{class:'free-response-context'}),
  element('label','Tu respuesta',{for:editor.id}),editor,
  element('p','Hasta 2000 caracteres. Solo se guarda si lo eliges, en las notas de este personaje y en este navegador. Tu texto no se interpreta ni cambia el recorrido.',{id:prefix+'-hint',class:'note'}),
  controls,status
 );
 section.append(launch,form);
 let saved='',busy=false;
 const dirty=()=>editor.value!==saved;
 onDirty(dirty);
 trackDraft(dirty);
 editor.addEventListener('input',()=>{
  editor.removeAttribute('aria-invalid');
  save.disabled=busy||!editor.value.trim()||!dirty();
  status.textContent='';
 });
 launch.addEventListener('click',()=>{
  form.hidden=false;
  launch.setAttribute('aria-expanded','true');
  save.disabled=!editor.value.trim()||!dirty();
  editor.focus();
 });
 close.addEventListener('click',()=>{
  if(busy)return;
  if(dirty()&&!confirm('¿Descartar lo escrito sin guardar y volver a las opciones?'))return;
  editor.value=saved;
  form.hidden=true;
  launch.setAttribute('aria-expanded','false');
  launch.focus();
 });
 form.addEventListener('submit',async event=>{
  event.preventDefault();
  if(busy)return;
  if(!editor.value.trim()){
   status.textContent='Escribe algo antes de guardar.';
   editor.setAttribute('aria-invalid','true');editor.focus();return;
  }
  if(!dirty()){status.textContent='Este texto ya está guardado en tus notas.';return;}
  busy=true;save.disabled=true;close.disabled=true;editor.readOnly=true;
  try{
   const text=editor.value;
   await store.create(text,scene);
   if(!form.isConnected)return;
   saved=text;notes.hidden=false;
   status.textContent='Respuesta guardada en las notas de este personaje. Puedes volver a las opciones o consultar tus notas.';
   announce?.(status.textContent);
  }catch(error){
   if(form.isConnected){status.textContent=error.message||'No se pudo guardar. Tu texto sigue aquí.';editor.setAttribute('aria-invalid','true');}
  }finally{
   busy=false;
   if(form.isConnected){close.disabled=false;editor.readOnly=false;save.disabled=!dirty()||!editor.value.trim();}
  }
 });
 return section;
}
