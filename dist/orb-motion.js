// A visitor can opt into orb motion without changing their device preference.
export function orbMotionEnabled(settings,systemReduced){return settings.orbMotion==='enabled'||(settings.orbMotion!=='disabled'&&!settings.reduce&&!systemReduced);}
export function orbMotionNotice(){
 const notice=document.createElement('div');notice.className='orb-motion-notice';
 const text=document.createElement('p');text.textContent='Tus ajustes reducen el movimiento. Puedes activar solo los orbes, si te apetece.';
 const button=document.createElement('button');button.type='button';button.className='orb-motion-enable';button.textContent='Activar movimiento del orbe';
 button.addEventListener('click',()=>window.dispatchEvent(new Event('diez-enable-orb-motion')));
 notice.append(text,button);return notice;
}
