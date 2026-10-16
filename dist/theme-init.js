// Read the manual theme before CSS/first paint. Only appearance preferences.
try {
  const settings=JSON.parse(localStorage.getItem('diez-v01-settings')||'{}');
  document.documentElement.dataset.theme=settings.theme==='refugio'?'refugio':'amanecer';
  document.documentElement.style.setProperty('--text-scale',['1','1.15','1.3'].includes(settings.size)?settings.size:'1.15');
  const reduced=settings.reduce===true||matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.documentElement.dataset.reducedMotion=String(reduced);
  document.documentElement.dataset.orbMotion=settings.orbMotion==='enabled'||(settings.orbMotion!=='disabled'&&!reduced)?'enabled':'disabled';
}catch {document.documentElement.dataset.theme='amanecer';document.documentElement.style.setProperty('--text-scale','1.15');}
