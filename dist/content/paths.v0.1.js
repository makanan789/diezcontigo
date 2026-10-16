// Draft, non-clinical content. Director review required before publication.
export const CONTENT_VERSION = 'paths-0.1.1';
const result = (title,body,suggestion) => ({type:'result',title,body,suggestion});
const question = (title,options,skip='cierre') => ({type:'question',title,options,skip});
const option = (id,label,next) => ({id,label,next});
const close = result('Puedes dejarlo aquí','No hace falta completar un recorrido. Puedes volver a Inicio o consultar el apoyo disponible.',null);
export const PATHS = {
  nova:{name:'Nova',context:'Relaciones',intro:'Un espacio para elegir cómo dar tu siguiente paso en una relación.',start:'inicio',nodes:{
    inicio:question('¿Qué te gustaría preparar?', [option('hablar','Una conversación','conversacion'),option('limite','Un límite','limite'),option('terminar','Dejarlo por ahora','cierre')]),
    conversacion:question('¿Por dónde prefieres empezar?',[option('momento','Elegir un momento tranquilo','momento'),option('frase','Preparar una frase breve','frase')]),
    limite:question('¿Qué te resulta más útil ahora?',[option('tiempo','Pedir tiempo antes de responder','tiempo'),option('decir','Preparar lo que quieres decir','limite-frase')]),
    momento:result('Elegir el momento','Si hablar es seguro para ti, puedes proponer un momento sin tener que resolverlo todo en esa conversación.','Elegir un momento para conversar.'),
    frase:result('Una frase para empezar','Puedes adaptar esta idea: «Me gustaría hablar de esto cuando podamos escucharnos». No tienes que enviarla ahora.','Preparar una frase breve antes de conversar.'),
    tiempo:result('Pedir un poco de tiempo','Puedes decidir responder más tarde. No hace falta explicar todo para pedir tiempo.','Dar tiempo antes de responder.'),
    'limite-frase':result('Un límite breve','Puedes preparar una frase sencilla sobre lo que puedes hacer y lo que necesitas dejar para otro momento. Si no es seguro hablar, consulta Aquí contigo.','Preparar un límite breve.'),cierre:close}},
  nexo:{name:'Nexo',context:'Trabajo',intro:'Un espacio para ordenar una tarea o preparar una conversación de trabajo.',start:'inicio',nodes:{
    inicio:question('¿Qué te sería útil preparar?',[option('tarea','Una tarea concreta','tarea'),option('pedir','Una petición de ayuda','ayuda'),option('terminar','Dejarlo por ahora','cierre')]),
    tarea:question('¿Qué paso prefieres elegir?',[option('primero','Una primera acción pequeña','accion'),option('aclarar','Aclarar qué se espera','aclarar')]),
    ayuda:question('¿Qué quieres preparar?',[option('prioridad','Una pregunta sobre prioridades','prioridad'),option('apoyo','Una petición concreta','peticion')]),
    accion:result('Una acción pequeña','Puedes elegir una acción que tenga un comienzo claro. El resto puede esperar mientras decides cómo continuar.','Elegir una primera acción concreta.'),
    aclarar:result('Aclarar la tarea','Puedes preparar una pregunta sobre el resultado que se espera o el plazo disponible.','Preguntar qué resultado se espera.'),
    prioridad:result('Preguntar por la prioridad','Puedes preguntar qué tarea conviene abordar primero cuando varias coinciden.','Aclarar una prioridad de trabajo.'),
    peticion:result('Pedir ayuda concreta','Puedes pensar qué parte de una tarea necesitas aclarar y preparar una petición breve.','Preparar una petición concreta de ayuda.'),cierre:close}},
  alma:{name:'Alma',context:'Familia',intro:'Un espacio para preparar una conversación o repartir una responsabilidad.',start:'inicio',nodes:{
    inicio:question('¿Qué prefieres preparar?',[option('conversar','Una conversación familiar','conversacion'),option('repartir','Repartir una responsabilidad','responsabilidad'),option('terminar','Dejarlo por ahora','cierre')]),
    conversacion:question('¿Por dónde quieres empezar?',[option('tema','Elegir un solo tema','tema'),option('momento','Buscar un momento adecuado','momento')]),
    responsabilidad:question('¿Qué te ayudaría a concretarlo?',[option('tarea','Nombrar una tarea','tarea'),option('peticion','Preparar una petición','peticion')]),
    tema:result('Un tema cada vez','Puedes elegir un solo asunto para la conversación. Si hablar no es seguro, puedes consultar Aquí contigo.','Elegir un tema para una conversación.'),
    momento:result('Buscar un momento','Puedes proponer hablar cuando haya espacio para hacerlo, sin obligación de resolverlo todo entonces.','Proponer un momento para conversar.'),
    tarea:result('Nombrar una tarea','Puedes escoger una tarea cotidiana y decidir qué necesitas aclarar sobre ella.','Concretar una tarea cotidiana.'),
    peticion:result('Preparar una petición','Puedes escribir para ti una petición breve sobre una tarea compartida, sin guardar nombres ni datos privados aquí.','Preparar una petición sobre una tarea compartida.'),cierre:close}},
  luz:{name:'Luz',context:'Vida personal',intro:'Un espacio para elegir una pausa o un siguiente paso cotidiano.',start:'inicio',nodes:{
    inicio:question('¿Qué prefieres elegir ahora?',[option('pausa','Una pausa','pausa'),option('paso','Un paso cotidiano','paso'),option('terminar','Dejarlo por ahora','cierre')]),
    pausa:question('¿Qué opción quieres considerar?',[option('entorno','Cambiar de espacio un momento','espacio'),option('dejar','Dejar una tarea para después','despues')]),
    paso:question('¿Qué te resulta más concreto?',[option('preparar','Preparar lo necesario','preparar'),option('elegir','Elegir una sola acción','accion')]),
    espacio:result('Una pausa en otro espacio','Si te viene bien, puedes cambiar de espacio un momento. También puedes quedarte donde estás.','Considerar una pausa breve.'),
    despues:result('Dejarlo para después','Puedes decidir qué tarea puede esperar. Esta decisión no necesita una puntuación ni una explicación.','Elegir qué puede esperar.'),
    preparar:result('Preparar lo necesario','Puedes elegir una cosa que necesites para una tarea cotidiana y dejarla preparada.','Preparar lo necesario para una tarea.'),
    accion:result('Una sola acción','Puedes escoger una acción pequeña y decidir después si quieres continuar.','Elegir una sola acción cotidiana.'),cierre:close}}
};
