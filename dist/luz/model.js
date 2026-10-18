import {DATA} from './data.js?v=0.15.4';
export const SCENES=new Map(DATA.scenes.map(s=>[s.id,s]));
export const ROUTES=new Map(DATA.routes.map(r=>[r.id,r]));
const PHASES=['entry','q1','a1','transition','q2','end'];
export function start(id){if(!ROUTES.has(id))throw Error('Camino no disponible.');return{id,phase:'entry',first:null,second:null};}
export function content(s){const route=ROUTES.get(s.id);if(!route||!PHASES.includes(s.phase))throw Error('Camino no disponible.');return{route,answer:route.answers.find(a=>a.id===s.first),ending:route.endings.find(a=>a.id===s.second)};}
export function advance(s){content(s);const next={entry:'q1',a1:'transition',transition:'q2'}[s.phase];if(!next)throw Error('Elige una opción para continuar.');return{...s,phase:next};}
export function choose(s,id){const {route}=content(s);if(s.phase==='q1'&&route.options1.some(o=>o.id===id))return{...s,phase:'a1',first:id,second:null};if(s.phase==='q2'&&route.options2.some(o=>o.id===id))return{...s,phase:'end',second:id};throw Error('Opción no disponible.');}
export function back(s){content(s);const phase=PHASES[Math.max(0,PHASES.indexOf(s.phase)-1)];return{...s,phase,first:['entry','q1'].includes(phase)?null:s.first,second:null};}
export function validate(){if(SCENES.size!==5||ROUTES.size!==20)throw Error('Contenido de Luz incompleto.');for(const s of SCENES.values()){if(!s.intro.length||s.options.length!==4||!s.access)throw Error('Escenario incompleto.');for(const o of s.options){const id=o.id.replace('LUZ ','');if(!ROUTES.has(id)||ROUTES.get(id).scene!==s.id)throw Error('Acceso incorrecto.');}}for(const r of ROUTES.values()){if(!SCENES.has(r.scene)||!r.entry.length||!r.q1.length||!r.transition.length||!r.q2.length)throw Error('Camino incompleto.');for(const [options,answers,expected]of[[r.options1,r.answers,'ABCD'],[r.options2,r.endings,'1234']]){if(options.map(o=>o.id).join('')!==expected||answers.map(o=>o.id).join('')!==expected||answers.some(a=>!a.paragraphs.length))throw Error('Opciones incompletas.');}}return true;}
validate();
