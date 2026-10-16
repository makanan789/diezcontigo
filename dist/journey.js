import { PATHS } from './content/paths.v0.1.js';
// This stack exists only in memory. It is not a history/progress product feature.
export function startJourney(id) {
  if(!Object.hasOwn(PATHS,id))throw new Error('Este recorrido no está disponible.');
  return {pathId:id,stack:[PATHS[id].start]};
}
export const currentNode = state => PATHS[state.pathId].nodes[state.stack.at(-1)];
export function choose(state,choiceId) {
  const next=currentNode(state).options?.find(o=>o.id===choiceId)?.next;
  if(!next||!Object.hasOwn(PATHS[state.pathId].nodes,next))throw new Error('La opción no está disponible.');
  return {...state,stack:[...state.stack,next]};
}
export function skip(state) {
  const next=currentNode(state).skip;if(!next)throw new Error('Esta pantalla no se puede omitir.');
  return {...state,stack:[...state.stack,next]};
}
export const back = state => state.stack.length>1?{...state,stack:state.stack.slice(0,-1)}:state;
export function validateContent() {
  for(const p of Object.values(PATHS)) {
    if(!p.nodes[p.start])throw new Error('Inicio inválido.');
    for(const n of Object.values(p.nodes))for(const next of [...(n.options||[]).map(o=>o.next),...(n.skip?[n.skip]:[])])if(!p.nodes[next])throw new Error('Rama inválida.');
  }
  return true;
}
