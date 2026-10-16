export const DATABASE_NAME='diez-v01-refugio';
export const DATABASE_VERSION=1;
const STORE='items';let opening;
const message='No se pudo abrir el refugio local. El navegador puede estar limitando el almacenamiento. Puedes continuar con las demás opciones.';
function openDatabase() {
  if(!globalThis.indexedDB)return Promise.reject(new Error(message));
  if(!opening)opening=new Promise((resolve,reject)=>{
    let settled=false;let request;try{request=indexedDB.open(DATABASE_NAME,DATABASE_VERSION);}catch{reject(new Error(message));return;}
    const fail=()=>{if(!settled){settled=true;opening=undefined;reject(new Error(message));}};
    const timeout=setTimeout(fail,4000);
    request.onupgradeneeded=()=>{if(!request.result.objectStoreNames.contains(STORE))request.result.createObjectStore(STORE,{keyPath:'id'});};
    request.onsuccess=()=>{clearTimeout(timeout);if(settled){request.result.close();return;}settled=true;const db=request.result;db.onversionchange=()=>{db.close();opening=undefined;};resolve(db);};
    request.onerror=()=>{clearTimeout(timeout);fail();};request.onblocked=()=>{clearTimeout(timeout);fail();};
  });
  return opening;
}
export function checkedText(text) {
  if(typeof text!=='string'||!text.trim())throw new Error('Escribe una idea breve antes de guardar.');
  if(text.trim().length>300)throw new Error('La idea debe tener como máximo 300 caracteres.');
  // Partial minimization guard, not a classifier of identities or sensitive data.
  if(/[\w.+-]+@[\w.-]+\.[a-z]{2,}/i.test(text)||/(?:\d[\s()+.-]*){7,}/.test(text))throw new Error('No guardes correos ni teléfonos. Usa una idea sin datos identificativos.');
  return text.trim();
}
async function transaction(mode,action) {
  const db=await openDatabase();return new Promise((resolve,reject)=>{
    const tx=db.transaction(STORE,mode);let value;let error;
    const set=v=>{value=v;};
    try {action(tx.objectStore(STORE),set,reason=>{error=reason;tx.abort();});}catch{error=new Error('No se pudo guardar el cambio. Tu texto sigue disponible para intentarlo de nuevo.');tx.abort();}
    tx.oncomplete=()=>resolve(value);
    tx.onerror=()=>reject(error||new Error('No se pudo guardar el cambio. Tu texto sigue disponible para intentarlo de nuevo.'));
    tx.onabort=()=>reject(error||new Error('La operación se interrumpió. Puedes intentarlo de nuevo.'));
  });
}
export const listItems=()=>transaction('readonly',(store,set)=>{const r=store.getAll();r.onsuccess=()=>set(r.result);});
export const getItem=id=>transaction('readonly',(store,set)=>{const r=store.get(id);r.onsuccess=()=>set(r.result);});
export const createItem=text=>{const item={id:crypto.randomUUID(),text:checkedText(text)};return transaction('readwrite',(store,set)=>{store.add(item);set(item);});};
export const updateItem=(id,text)=>{const value=checkedText(text);return transaction('readwrite',(store,set,abort)=>{const r=store.get(id);r.onsuccess=()=>{if(!r.result){abort(new Error('La idea ya no está guardada. Puedes crear una nueva.'));return;}const item={id,text:value};store.put(item);set(item);};});};
export const deleteItem=id=>transaction('readwrite',store=>store.delete(id));
