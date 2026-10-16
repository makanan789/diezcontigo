const DB='diez-emotions-v1',STORE='phrases';
export const MAX_LENGTH=500;
function open(){return new Promise((resolve,reject)=>{
 if(!globalThis.indexedDB)return reject(new Error('Este navegador no permite guardar frases.'));
 const request=indexedDB.open(DB,1);let blocked=false;
 request.onupgradeneeded=()=>request.result.createObjectStore(STORE,{keyPath:'id'});
 request.onerror=()=>reject(new Error('No se ha podido abrir el espacio de tus frases.'));
 request.onblocked=()=>{blocked=true;reject(new Error('Cierra otras pestañas de DIEZ y vuelve a intentarlo.'));};
 request.onsuccess=()=>{const db=request.result;if(blocked){db.close();return;}db.onversionchange=()=>db.close();resolve(db);};
});}
async function transaction(mode,action){const db=await open();return new Promise((resolve,reject)=>{
 try{const tx=db.transaction(STORE,mode),request=action(tx.objectStore(STORE));
 tx.oncomplete=()=>{db.close();resolve(request.result);};
 tx.onabort=()=>{db.close();reject(new Error('No se ha podido completar el cambio. Vuelve a intentarlo.'));};
 tx.onerror=()=>{};
 }catch{db.close();reject(new Error('No se ha podido acceder a tus frases en este navegador.'));}
});}
export async function readAll(){return(await transaction('readonly',s=>s.getAll())).filter(r=>typeof r.text==='string'&&r.text.length<=MAX_LENGTH).sort((a,b)=>b.createdAt-a.createdAt);}
export function save(text){const value=text.trim();if(!value||value.length>MAX_LENGTH)throw new Error('Escribe una frase de hasta 500 caracteres.');const id=globalThis.crypto?.randomUUID?.()||Date.now().toString(36)+'-'+Math.random().toString(36).slice(2);return transaction('readwrite',s=>s.add({id,text:value,createdAt:Date.now()}));}
export function remove(id){return transaction('readwrite',s=>s.delete(id));}
