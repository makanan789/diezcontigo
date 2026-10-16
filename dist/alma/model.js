import {DATA} from './data.js';
export const SCENES=new Map(DATA.scenes.map(s=>[s.id,s]));
export const ROUTES=new Map(DATA.routes.map(r=>[r.id,r]));
export function start(id){if(!ROUTES.has(id))throw new Error('Camino no disponible.');return{id,phase:'entry',first:null,second:null};}
export function content(s){const route=ROUTES.get(s.id);return{route,response:route.responses.find(r=>r.id===s.first)||null,outcome:route.outcomes.find(r=>r.id===s.second)||null};}
export function advance(s){if(s.phase==='entry')return{...s,phase:'q1'};if(s.phase==='a1')return{...s,phase:'q2'};throw new Error('Elige una opción para continuar.');}
export function choose(s,id){if(s.phase==='q1'&&['A','B','C','D'].includes(id))return{...s,phase:'a1',first:id,second:null};if(s.phase==='q2'&&['1','2','3','4'].includes(id))return{...s,phase:'end',second:id};throw new Error('Opción no disponible.');}
export function back(s){const phases=['entry','q1','a1','q2','end'],i=phases.indexOf(s.phase);return i>0?{...s,phase:phases[i-1]}:{...s};}
export function validate(){if(SCENES.size!==6||ROUTES.size!==20)throw new Error('Contenido de Alma incompleto.');for(const r of ROUTES.values()){if(!SCENES.has(r.scene)||r.responses.length!==4||r.outcomes.length!==4||!r.entry||!r.question||!r.transition||!r.secondQuestion)throw new Error('Camino incompleto.');if(r.responses.map(x=>x.id).join('')!=='ABCD'||r.outcomes.map(x=>x.id).join('')!=='1234')throw new Error('Opciones no válidas.');for(const o of [...r.responses,...r.outcomes])if(!o.option||!o.text)throw new Error('Texto incompleto.');}return true;}
validate();
