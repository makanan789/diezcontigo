export function isMobileMessagesAvailable(userAgent=navigator.userAgent) {
  return /iPhone|iPad|iPod|Android/i.test(userAgent)||(/Macintosh/i.test(userAgent)&&navigator.maxTouchPoints>1);
}
export function messagesLink(){return 'sms:';}
export async function copyDraft(text,clipboard=navigator.clipboard) {
  if(!text.trim())throw new Error('Escribe un mensaje antes de copiar.');
  if(!clipboard?.writeText)throw new Error('No se pudo copiar. Selecciona el texto y cópialo desde tu dispositivo.');
  await clipboard.writeText(text);
  return 'Mensaje copiado. Puedes pegarlo en tu aplicación y revisarlo antes de enviar.';
}
export async function shareDraft(text,share=navigator.share?.bind(navigator)) {
  if(!text.trim())throw new Error('Escribe un mensaje antes de preparar el envío.');
  if(!share)throw new Error('Este navegador no ofrece el menú de compartir. Puedes copiar el mensaje.');
  await share({text});
  return 'El menú del dispositivo se ha cerrado. DIEZ no verifica si el mensaje se envió o recibió.';
}
