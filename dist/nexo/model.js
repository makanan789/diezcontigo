import {DATA} from './data.js';
const NARRATIVE={escenarios:Object.fromEntries(DATA.scenes.filter(s=>s.id!=='00').map(s=>[s.id,s])),recorridos:DATA.routes.map(r=>({...r,escenario:r.scene,entrada:r.entry,primera_pregunta:r.question,cierre:r.close,primeras_opciones:r.branches.map(b=>({texto:b.text,respuesta:b.answer,segunda_pregunta:b.question,segundas_opciones:b.options.map(o=>({texto:o.text,respuesta:o.answer}))}))}))};
export const SCENES=Object.keys(NARRATIVE.escenarios);
export const ROUTES=new Map(NARRATIVE.recorridos.map(r=>[r.id,r]));
const PHASES=['entry','q1','a1','q2','a2','close'];
export function start(id){if(!ROUTES.has(id))throw new Error('Recorrido no disponible.');return {id,phase:'entry',first:null,second:null};}
export function content(state){const r=ROUTES.get(state.id);if(!r)throw new Error('Recorrido no disponible.');return {route:r,first:state.first===null?null:r.primeras_opciones[state.first],second:state.second===null?null:r.primeras_opciones[state.first].segundas_opciones[state.second]};}
export function advance(state){if(!['entry','a1','a2'].includes(state.phase))throw new Error('Elige una opción para continuar.');return {...state,phase:PHASES[PHASES.indexOf(state.phase)+1]};}
export function choose(state,index){if(![0,1].includes(index)||!['q1','q2'].includes(state.phase))throw new Error('Opción no disponible.');return state.phase==='q1'?{...state,first:index,second:null,phase:'a1'}:{...state,second:index,phase:'a2'};}
export function back(state){const i=PHASES.indexOf(state.phase);return i>0?{...state,phase:PHASES[i-1]}:{...state};}
export function validate(){if(ROUTES.size!==20||SCENES.length!==5)throw new Error('Contenido Nexo incompleto.');for(const r of ROUTES.values()){if(!SCENES.includes(r.escenario)||r.primeras_opciones.length!==2||!r.entrada||!r.primera_pregunta||!r.cierre)throw new Error('Contenido Nexo no válido.');for(const o of r.primeras_opciones)if(!o.respuesta||!o.segunda_pregunta||o.segundas_opciones.length!==2||o.segundas_opciones.some(x=>!x.texto||!x.respuesta))throw new Error('Rama Nexo no válida.');}return true;}
validate();
