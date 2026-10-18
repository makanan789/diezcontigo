const MAX_RECORDS=10000;
const MAX_TEXT=25_000_000;
const SPECS=[
 {key:'ideas',database:'diez-v01-refugio',store:'items',kind:'idea',maxLength:300},
 {key:'nova',database:'diez-nova-notas-v1',store:'notes',kind:'note',world:'nova',maxLength:2000},
 {key:'nexo',database:'diez-nexo-notas-v1',store:'notes',kind:'note',world:'nexo',maxLength:2000},
 {key:'alma',database:'diez-alma-notas-v1',store:'notes',kind:'note',world:'alma',maxLength:2000},
 {key:'luz',database:'diez-luz-notas-v1',store:'notes',kind:'note',world:'luz',maxLength:2000},
 {key:'phrases',database:'diez-emotions-v1',store:'phrases',kind:'phrase',maxLength:500}
];

function openDatabase(spec,createStore=false){
 return new Promise((resolve,reject)=>{
  if(!globalThis.indexedDB){reject(new Error('Este navegador no permite acceder a tus datos guardados.'));return;}
  let request;try{request=indexedDB.open(spec.database,1);}catch{reject(new Error('No se pudo abrir el almacenamiento local.'));return;}
  request.onupgradeneeded=event=>{if((createStore||event.oldVersion===0)&&!request.result.objectStoreNames.contains(spec.store))request.result.createObjectStore(spec.store,{keyPath:'id'});};
  request.onerror=()=>reject(new Error('No se pudo abrir uno de los espacios de datos de DIEZ.'));
  request.onblocked=()=>reject(new Error('Cierra otras pestañas de DIEZ y vuelve a intentarlo.'));
  request.onsuccess=()=>{
   const db=request.result;db.onversionchange=()=>db.close();
   if(!db.objectStoreNames.contains(spec.store)){db.close();resolve(null);return;}
   resolve(db);
  };
 });
}

async function readRecords(spec){
 if(typeof globalThis.indexedDB?.databases==='function'){
  const known=await globalThis.indexedDB.databases();
  if(!known.some(entry=>entry.name===spec.database))return [];
 }
 const db=await openDatabase(spec,false);if(!db)return [];
 return new Promise((resolve,reject)=>{
  let records=[];let settled=false;
  const fail=()=>{if(settled)return;settled=true;db.close();reject(new Error('No se pudieron leer todos tus datos guardados.'));};
  try{
   const tx=db.transaction(spec.store,'readonly'),request=tx.objectStore(spec.store).getAll();
   request.onsuccess=()=>{records=request.result;};
   tx.oncomplete=()=>{if(settled)return;settled=true;db.close();resolve(records);};
   tx.onerror=fail;tx.onabort=fail;
  }catch{fail();}
 });
}

export async function createBackup(){
 const data={};
 for(const spec of SPECS)data[spec.key]=await readRecords(spec);
 return {format:'diez-local-backup',version:1,createdAt:new Date().toISOString(),data};
}

function requireObject(value,label){
 if(!value||typeof value!=='object'||Array.isArray(value))throw new Error('El archivo no tiene un formato de copia de DIEZ válido ('+label+').');
}
function textField(record,label,maxLength){
 if(typeof record.text!=='string'||!record.text.trim()||record.text.length>maxLength)throw new Error('El archivo contiene un texto vacío o demasiado largo ('+label+').');
}
function validId(record,label){
 if(typeof record.id!=='string'||!record.id.trim()||record.id.length>200)throw new Error('El archivo contiene una entrada sin identificador válido ('+label+').');
}
function cleanRecord(record,spec){
 requireObject(record,spec.key);validId(record,spec.key);textField(record,spec.key,spec.maxLength);
 if(spec.kind==='idea')return {id:record.id,text:record.text};
 if(spec.kind==='note'){
  if(record.world!==spec.world||typeof record.scene!=='string'||!record.scene||record.scene.length>100||typeof record.createdAt!=='string'||typeof record.updatedAt!=='string')throw new Error('El archivo contiene una nota incompleta de '+spec.world+'.');
  return {id:record.id,world:spec.world,scene:record.scene,text:record.text,createdAt:record.createdAt,updatedAt:record.updatedAt};
 }
 if(record.createdAt!==undefined&&(!Number.isFinite(record.createdAt)||typeof record.createdAt!=='number'))throw new Error('El archivo contiene una frase con fecha no válida.');
 if(record.title!==undefined&&(typeof record.title!=='string'||record.title.length>200))throw new Error('El archivo contiene un título de frase no válido.');
 if(record.lightId!==undefined&&(typeof record.lightId!=='string'||!/^\d{2}$/.test(record.lightId)))throw new Error('El archivo contiene una referencia de historia no válida.');
 return {id:record.id,text:record.text,...(record.title!==undefined?{title:record.title}:{}),...(record.lightId!==undefined?{lightId:record.lightId}:{}),...(record.createdAt!==undefined?{createdAt:record.createdAt}:{})};
}

export function parseBackup(text){
 if(typeof text!=='string'||new TextEncoder().encode(text).byteLength>MAX_TEXT)throw new Error('El archivo supera el tamaño permitido para una copia de DIEZ.');
 let value;try{value=JSON.parse(text);}catch{throw new Error('No se ha podido leer el archivo. Elige una copia JSON de DIEZ.');}
 requireObject(value,'datos principales');
 if(value.format!=='diez-local-backup'||value.version!==1)throw new Error('Este archivo no es una copia compatible de DIEZ.');
 requireObject(value.data,'datos guardados');
 const data={};
 for(const spec of SPECS){
  const records=value.data[spec.key];if(!Array.isArray(records)||records.length>MAX_RECORDS)throw new Error('La lista de '+spec.key+' no es válida en esta copia.');
  const seen=new Set();data[spec.key]=records.map(record=>{const clean=cleanRecord(record,spec);if(seen.has(clean.id))throw new Error('La copia repite un identificador en '+spec.key+'.');seen.add(clean.id);return clean;});
 }
 return {format:'diez-local-backup',version:1,createdAt:typeof value.createdAt==='string'?value.createdAt:'',data};
}

export function backupCounts(backup){
 const d=backup.data;
 return {ideas:d.ideas.length,notes:d.nova.length+d.nexo.length+d.alma.length+d.luz.length,phrases:d.phrases.length};
}

export function backupFile(backup){return new Blob([JSON.stringify(backup,null,2)],{type:'application/json;charset=utf-8'});}

async function addMissing(spec,records){
 if(!records.length)return {imported:0,skipped:0};
 const db=await openDatabase(spec,true);
 if(!db)throw new Error('No se encontró el espacio para recuperar '+spec.key+'.');
 return new Promise((resolve,reject)=>{
  let imported=0,skipped=0,settled=false;
  const fail=()=>{if(settled)return;settled=true;db.close();reject(new Error('No se pudo recuperar '+spec.key+'.'));};
  try{
   const tx=db.transaction(spec.store,'readwrite'),store=tx.objectStore(spec.store),request=store.getAll();
   request.onsuccess=()=>{
    const existing=new Set(request.result.map(record=>record.id));
    for(const record of records){
     if(existing.has(record.id)){skipped++;continue;}
     store.add(record);existing.add(record.id);imported++;
    }
   };
   tx.oncomplete=()=>{if(settled)return;settled=true;db.close();resolve({imported,skipped});};
   tx.onerror=fail;tx.onabort=fail;
  }catch{fail();}
 });
}

export async function restoreBackup(backup){
 const total={imported:0,skipped:0};
 for(const spec of SPECS){
  try{const result=await addMissing(spec,backup.data[spec.key]);total.imported+=result.imported;total.skipped+=result.skipped;}
  catch(error){error.backupProgress={...total};throw error;}
 }
 return total;
}
