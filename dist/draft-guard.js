let current=()=>false;
export function trackDraft(check){current=check;}
export function clearDraft(){current=()=>false;}
window.addEventListener('beforeunload',event=>{if(current()){event.preventDefault();event.returnValue='';}});
