export const el=(tag,text,attrs={})=>{const e=document.createElement(tag);if(text!=null)e.textContent=text;for(const[k,v]of Object.entries(attrs))e.setAttribute(k,String(v));return e;};
export const append=(e,...children)=>{e.append(...children.filter(Boolean));return e;};
export const button=(label,fn,attrs={})=>{const b=el('button',label,{type:'button',...attrs});b.addEventListener('click',()=>Promise.resolve().then(fn).catch(e=>console.error(e)));return b;};
export const link=(label,path,attrs={})=>el('a',label,{href:'#luz/'+path,'data-view':'luz','data-path':path,...attrs});
export const paragraphs=(parent,texts,attrs={})=>{for(const t of texts)parent.append(el('p',t,{'data-lz-literal':'true',...attrs}));return parent;};
