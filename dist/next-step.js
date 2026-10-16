// Optional practical continuation. Selection context stays in memory and is never saved automatically.
const PLANS={
nova:{
J01:['Ponerle palabras','¿Te ayudaría guardar una palabra o prefieres dejarla abierta?','Hoy la palabra más cercana es…\nTambién podría estar sintiendo…\nPor ahora necesito…'],
J02:['Preparar lo que quiero decir','Antes de hablar, ¿qué te gustaría tener claro para ti?','Lo que me gustaría expresar es…\nLo que quiero cuidar al hacerlo es…\nPuedo esperar o decidir no enviarlo.'],
J03:['Elegir un gesto pequeño','¿Qué gesto cabría en tu día sin convertirse en otra obligación?','Un gesto que podría probar es…\nLo haría cuando…\nSi no me apetece, puedo dejarlo para después.'],
J04:['Quedarme en el paisaje','¿Cómo prefieres pasar este momento?','No necesito resolver nada en este momento.'],
P01:['Aclarar una duda','¿Qué sabes de lo ocurrido y qué sigue siendo una pregunta?','Lo que vi o escuché fue…\nLo que todavía no sé es…\nLo que me gustaría aclarar, si decido hablar, es…'],
P02:['Pensar las condiciones','¿Qué tendría que ser diferente para que un acercamiento encajara contigo?','Para considerar un acercamiento necesitaría…\nAlgo que no quiero repetir es…\nPuedo observar antes de decidir.'],
P03:['Preparar un límite','¿Qué espacio necesitas y cómo te gustaría expresarlo, si decides hacerlo?','Ahora necesito…\nUna frase que podría usar es: «Prefiero…»\nSi no es seguro hablar, puedo buscar apoyo.'],
P04:['Dar espacio a la duda','¿Qué quieres conservar de tus razones para acercarte o tomar distancia?','Lo que me acerca es…\nLo que me invita a proteger mi espacio es…\nLo que aún no tengo claro es…'],
R01:['Elegir una pausa','¿Te apetece quedarte en este lugar o abrir el orbe?','Puedo descansar sin tener que seguir un ritmo.'],
R02:['Guardar una pregunta','¿Hay una pregunta que quieras dejar aquí, sin tener que contestarla?','Una pregunta que puedo dejar abierta es…\nNo necesito contestarla hoy.'],
R03:['Volver a algo sencillo','¿Qué cosa cotidiana podría acompañarte sin pedirte esfuerzo?','Algo sencillo que suele resultarme agradable es…\nHoy puedo probarlo o dejarlo para otro momento.'],
E01:['Empezar una nota','¿Qué primera frase te gustaría conservar para ti?','Hoy me pesa…\nTambién noto…\nNo necesito explicarlo perfectamente.'],
E02:['Dar lugar a lo que convive','¿Qué dos sentimientos quieres reconocer sin tener que elegir uno?','Una parte de mí siente…\nOtra parte siente…\nHoy puedo darles espacio de esta manera…'],
E03:['Dar un lugar al recuerdo','¿Qué te gustaría conservar de lo que echas de menos?','Lo que echo de menos es…\nLo que significó para mí es…\nHoy quiero darle este lugar…'],
E04:['Quedarme en calma','¿Te apetece volver al paisaje o abrir una pausa con el orbe?','Este momento puede quedarse sin conclusión.'],
H01:['Concretar un próximo paso','¿Qué sería suficientemente pequeño para poder cambiar de idea después?','Un paso que podría considerar es…\nLo que necesito antes es…\nTambién puedo posponerlo.'],
H02:['Probar una costumbre','¿Qué versión sencilla de esa costumbre encajaría contigo hoy?','Una costumbre que me gustaría probar o recuperar es…\nSu versión más sencilla sería…\nDespués decidiré si quiero repetirla.'],
H03:['Distinguir mi margen','¿Qué parte está en tus manos y cuál necesita quedarse abierta?','Algo que puedo decidir yo es…\nAlgo que no puedo garantizar es…\nDónde quiero poner mi atención ahora…'],
H04:['Guardar una posibilidad','¿Qué detalle de esa posibilidad te gustaría conservar sin convertirlo en un plan?','Una posibilidad que me da curiosidad es…\nLo que me atrae de ella es…\nNo necesita fecha.']},
nexo:{
T01:['Preparar una petición de colaboración','¿Qué parte necesita repartirse o qué prioridad necesitas aclarar?','Ahora tengo entre manos…\nPara poder atenderlo necesito aclarar…\nPodría pedir: «¿Podemos decidir qué va primero o qué parte podemos repartir?»'],
T02:['Aclarar una prioridad','¿Qué pregunta te ayudaría a distinguir lo urgente de lo que puede esperar?','Las tareas que coinciden son…\nLo que necesito aclarar es…\nPodría preguntar: «Si solo puedo avanzar una ahora, ¿cuál tiene prioridad?»'],
T03:['Reconocer un límite','¿Qué señal de cansancio quieres tomar en serio y qué apoyo podrías necesitar?','Estoy notando…\nAlgo que necesito dejar de sostener hoy es…\nUna ayuda que podría pedir es…'],
T04:['Elegir una primera pieza','¿Qué acción pequeña podrías probar sin comprometerte con todo lo demás?','Lo que tengo en la cabeza es…\nUna sola pieza que puedo mirar es…\nPuedo probar… y revisar después.'],
C01:['Preparar una conversación','¿Qué hecho quieres explicar y qué necesitas pedir, si decides hablar?','Lo que ocurrió, sin interpretar la intención de la otra persona, fue…\nLo que necesito explicar es…\nLo que me gustaría pedir es…'],
C02:['Preparar una reparación','¿Qué puedes reconocer sin justificarte ni exigir que acepten tus palabras?','Lo que reconozco de mi reacción es…\nLo que lamento es…\nAlgo que puedo intentar hacer de otra manera es…'],
C03:['Preparar una respuesta prudente','¿Qué margen tienes para responder y qué necesitas proteger?','La petición que he recibido es…\nLo que puedo asumir ahora es…\nLo que necesito aclarar o consultar antes de responder es…'],
C04:['Pensar un acercamiento','¿Qué gesto sería respetuoso contigo y con la respuesta de la otra persona?','Algo pequeño que podría proponer es…\nLo que necesitaría observar antes de confiar de nuevo es…\nTambién puedo mantener una relación cordial y distante.'],
R01:['Reservar un espacio propio','¿Qué momento querrías recuperar sin convertirlo en otra tarea?','Algo que echo de menos fuera del trabajo es…\nUna versión pequeña que podría caber es…\nQué necesitaría para disponer de ese espacio…'],
R02:['Cuidar un momento compartido','¿Qué encuentro o costumbre te gustaría cuidar dentro del margen que tienes?','Un momento que me gustaría compartir es…\nQué puedo proponer sin prometer más tiempo del que tengo…\nAlgo que me gustaría expresar a quienes quiero…'],
R03:['Dejar lo pendiente para después','¿Qué te gustaría dejar por escrito para no seguir repasándolo ahora?','Queda pendiente…\nEl próximo momento en que podré revisarlo es…\nHasta entonces puedo dejar abierta esta pregunta…'],
R04:['Mirar lo que sigue abierto','¿Qué deseo sigue teniendo sentido y cuál ya no necesitas exigirte?','Un deseo que todavía me importa es…\nAlgo que puedo dejar de reprocharme es…\nUna posibilidad que sigue abierta…'],
E01:['Explorar sin decidir todavía','¿Qué necesitas conocer antes de considerar un cambio?','Algo que me gustaría que cambiara es…\nAlgo que necesito proteger es…\nLa información que podría buscar antes de decidir…'],
E02:['Separar hechos y posibilidades','¿Qué información está confirmada y qué convendría preguntar?','Lo que sé con certeza es…\nLo que todavía es una posibilidad es…\nA quién o dónde podría consultar información fiable…'],
E03:['Delimitar una prueba','¿Qué podrías aprender con una prueba pequeña antes de comprometer más recursos?','La idea que quiero explorar es…\nUna prueba limitada podría ser…\nAntes de comprometer recursos necesito saber…'],
E04:['Reconocer lo que te llevas','¿Qué aprendizaje puede acompañarte y qué posibilidad quieres mirar ahora?','Algo que aprendí en mi camino anterior es…\nAlgo que ya no quiero repetir es…\nUna alternativa que podría explorar sin decidir todavía…'],
P01:['Elegir una pausa','¿Te apetece quedarte en el jardín o abrir el orbe?','Puedo reconocer que necesito descansar sin tener que justificarlo.'],
P02:['Dar permiso al descanso','¿Qué exigencia podrías dejar a un lado por este momento?','Cuando intento descansar me digo…\nPor este momento puedo dejar pendiente…\nNo necesito convertir el descanso en una tarea.'],
P03:['Recuperar algo que disfruto','¿Qué versión sencilla de eso que disfrutas podría apetecerte hoy?','Algo que me gustaría recuperar o descubrir es…\nPuedo acercarme de esta manera…\nNo necesito hacerlo bien ni continuar si no quiero.'],
P04:['Quedarme en el jardín','¿Cómo prefieres pasar este momento?','No necesito resolver nada hoy.']},
alma:{
'01-N01':['Dar lugar a una ausencia','¿Qué recuerdo, palabra o necesidad te gustaría conservar para ti?','Lo que echo de menos es…\nAlgo que quiero conservar es…\nLo que necesito hoy, sin tener que recuperar el contacto, es…'],
'01-N02':['Preparar un espacio propio','¿Qué necesidad querrías expresar, si hacerlo encaja contigo?','A mi familia la quiero y ahora necesito…\nUna frase que podría usar, si es seguro, es…\nLo que puedo dejar sin decidir hoy…'],
'01-N03':['Escribir palabras pendientes','¿Qué te gustaría escribir sin obligación de compartirlo?','Hay algo que llevo tiempo guardando…\nSi pudiera empezar una frase, sería…\nPuedo decidir no enviarla ni conservarla.'],
'01-N04':['Mirar las condiciones de un vínculo','¿Qué necesitarías antes de plantearte un acercamiento?','Antes de pensar en acercarme necesito…\nAlgo que no quiero repetir es…\nUna condición que para mí sería importante…'],
'02-N01':['Preparar mi manera de explicarlo','¿Qué te gustaría que comprendieran de tu experiencia?','Para mí esto significa…\nMe gustaría que pudiéramos escuchar…\nSi la conversación se convierte en reproches, puedo detenerla.'],
'02-N02':['Dar lugar a mi decisión','¿Qué razones quieres tener claras sin preparar una defensa perfecta?','He elegido esto porque para mí importa…\nPuedo escuchar consejos sin prometer cambiar de opinión.\nLo que me corresponde decidir es…'],
'02-N03':['Cuidar un vínculo que cambia','¿Qué cercanía podrías cuidar de otra manera?','Algo que echo de menos de antes es…\nAlgo que necesito hoy es…\nUna manera diferente de acompañarnos podría ser…'],
'02-N04':['Conservar mi voz','¿Qué enseñanza quieres conservar y qué espacio necesitan tus propias ideas?','Algo que valoro de su experiencia es…\nAlgo que veo de otra manera es…\nLo que me gustaría compartir desde mi vida…'],
'03-N01':['Guardar un recuerdo','¿Qué detalle de ese recuerdo te gustaría conservar?','Un recuerdo que me hace sonreír…\nEl detalle que quiero guardar es…\nLo que significa para mí…'],
'03-N02':['Escuchar lo que echo de menos','¿Qué necesidad de aquella etapa te gustaría reconocer hoy?','De aquella etapa echo de menos…\nQuizá lo que valoraba era…\nAlgo pequeño que podría cuidar hoy…'],
'03-N03':['Elegir cómo acompañarme ahora','Sin contar lo ocurrido, ¿qué necesitas en este momento?','No necesito describir el recuerdo para reconocer que hoy necesito…\nAlgo o alguien que podría acompañarme es…\nPuedo dejarlo aquí.'],
'03-N04':['Dar lugar al recuerdo y al presente','¿Qué quieres conservar y qué permiso quieres darte hoy?','Algo de mi historia que quiero conservar…\nAlgo de mi presente que también merece espacio…\nPuedo recordar y seguir viviendo a mi manera.'],
'04-N01':['Escribir sin tener que enviar','¿Qué primera frase querrías dejar para ti?','Algo que quedó pendiente es…\nHoy me gustaría decir para mí…\nEscribirlo no me obliga a compartirlo.'],
'04-N02':['Comprender lo que extraño','¿Qué parte de esa relación echas de menos, sin suponer qué ocurre al otro lado?','Echo de menos…\nAlgo que no sé y no necesito convertir en certeza es…\nLo que necesito para cuidar mi tranquilidad…'],
'04-N03':['Preparar un límite','¿Qué espacio necesitas y qué apoyo te ayudaría a sostenerlo?','Ahora necesito este espacio…\nSi decido comunicarlo y es seguro, podría decir…\nSi siento presión o miedo, puedo buscar apoyo de…'],
'04-N04':['Mirar antes de cruzar','¿Qué necesitarías observar para sentirte cómodo con tu decisión?','Lo que me hace dudar es…\nLo que necesitaría observar es…\nHoy puedo decidir no decidir.'],
'05-N01':['Encontrar mi lugar','¿Qué responsabilidad quieres conservar, compartir o dejar de asumir?','Algo que aporto y quiero reconocer es…\nAlgo para lo que necesito ayuda es…\nEl espacio que necesito para mí…'],
'05-N02':['Hacer sitio sin borrarme','¿Qué vínculo quieres cuidar y qué cambio necesitas expresar?','Algo que quiero conservar de mis vínculos es…\nAlgo nuevo que puedo conocer poco a poco…\nUna necesidad que me gustaría expresar…'],
'05-N03':['Preparar un acuerdo','¿Qué necesidad concreta te gustaría llevar a una conversación, si decides tenerla?','Me gustaría que pudiéramos…\nUna responsabilidad o espacio que necesito aclarar es…\nUn acuerdo necesita la participación de…'],
'05-N04':['Cuidar este momento','¿Qué está en tus manos hoy sin tener que resolver toda la etapa?','Algo que puedo cuidar hoy es…\nAlgo que todavía no sé es…\nUn pequeño motivo de curiosidad o descanso…']}
};
const el=(tag,text,attrs={})=>{const e=document.createElement(tag);if(text!=null)e.textContent=text;for(const[k,v]of Object.entries(attrs))e.setAttribute(k,v);return e;};
const button=(text,fn,attrs={})=>{const b=el('button',text,{type:'button',...attrs});b.addEventListener('click',fn);return b;};
export function nextStep({world,route,title,scene,first,second,onNote,navigate,plan:customPlan}){
 const plan=customPlan||PLANS[world]?.[route];if(!plan)return document.createDocumentFragment();const section=el('section',null,{class:'next-step','aria-label':'Una posibilidad a tu ritmo'});
 const memory=el('details',null,{class:'selection-memory'});memory.append(el('summary','Lo que has elegido'));for(const value of [first,second].filter(Boolean))memory.append(el('p',value));section.append(memory);
 const options=el('div',null,{class:'practice-options choices'});options.hidden=true;
 const isRest=/descans|quedarme|paisaje|calma|tranquilidad|cerrar|silencio|no decidir|no tomar|no resolver|no quiero|prefiero guardar|dejarlo reposar|posponer|darme tiempo|sin conclusión|no hacer nada|dejarla abierta|no explicármelo|quitarme presión/i.test(second||'');
 const launch=button(isRest?'Elegir cómo acompañar este momento':plan[0],()=>{options.hidden=!options.hidden;launch.setAttribute('aria-expanded',String(!options.hidden));if(!options.hidden)options.querySelector('h3').focus({preventScroll:true});},{class:'practice-open', 'aria-expanded':false});
 options.append(el('h3',isRest?'Puedes conservar esta elección sin convertirla en una tarea. ¿Cómo prefieres continuar?':plan[1],{tabindex:-1}));
 const concern=/miedo|culpa|decepcionar|no ser capaz/i.test(second||'');const draftText=concern?'Lo que me preocupa es…\nAlgo que sé y algo que todavía no puedo saber…\nLo que necesitaría para cuidar mi siguiente decisión…':plan[2];const write=()=>onNote('Mi momento · '+title+'\n\nHe elegido: '+first+'\n'+second+'\n\n'+draftText);
 if(!isRest)options.append(button('Preparar una nota para mí',write,{'data-practice':'write'}));options.append(button('Abrir una pausa con el orbe',()=>navigate('respira'),{'data-practice':'pause'}),button('Volver al paisaje',()=>navigate(world,'escena/'+scene),{'data-practice':'landscape'}),button('Dejarlo aquí',()=>{options.hidden=true;launch.setAttribute('aria-expanded','false');launch.focus();},{'data-practice':'stay'}));
 section.append(launch,options);
 if(/escrib|notas|anotar|carta/i.test(second||''))section.insertBefore(button('Abrir una nota',write,{'data-practice':'direct-note'}),launch);
 if(/alguien de confianza|hablarlo con alguien|pedir compañía|buscar apoyo humano/i.test(second||''))section.insertBefore(button('Preparar un mensaje a alguien de confianza',()=>navigate('confianza'),{'data-practice':'contact'}),launch);
 return section;
}
