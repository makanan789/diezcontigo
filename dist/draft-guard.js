let current=()=>false;
export function trackDraft(check){current=check;}
export function clearDraft(){current=()=>false;}
export function allowDraftChange(){return !current()||confirm('Hay un texto sin guardar. ¿Quieres descartarlo y continuar?');}
window.addEventListener('beforeunload',event=>{if(current()){event.preventDefault();event.returnValue='';}});
