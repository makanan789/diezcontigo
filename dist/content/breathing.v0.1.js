// Director-confirmed local recordings, one per stage. No timing marks supplied.
export const BREATHING_VERSION='breathing-audio-0.2.0';
export const STAGES = [
  {id:'llegar',title:'Calma inicial',text:'Puedes quedarte aquí un momento. Mira el orbe si te apetece, o deja la mirada donde te resulte cómodo. Respira a tu ritmo.',audio:{asset:'./audio/ORBE_01_CALMA_INICIAL.mp3',timingMarks:[]}},
  {id:'espacio',title:'Respiramos juntos',text:'No hace falta seguir el movimiento del orbe ni cambiar tu respiración. Puedes continuar, repetir o parar cuando quieras.',audio:{asset:'./audio/ORBE_02_RESPIRAMOS_JUNTOS.mp3',timingMarks:[]}},
  {id:'volver',title:'Calma profunda',text:'Puedes quedarte un poco más o volver a Inicio. Tú decides si quieres dar un siguiente paso.',audio:{asset:'./audio/ORBE_03_CALMA_PROFUNDA.mp3',timingMarks:[]}}
];
