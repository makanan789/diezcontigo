export const NARRATIVE = {
  "proyecto": "DIEZ",
  "fase": "GAUNTLET 011 — narrativa V1 habilitada para implementación piloto por el Director; validación final tras pruebas.",
  "version": "NOVA-NARRATIVA-V1.0-GAUNTLET-011",
  "modelo": "Narrativa determinista de dos elecciones encadenadas, respuesta específica a cada elección y cierre opcional; sin IA, voz ni escritura obligatoria en ramas.",
  "escenarios": {
    "01_JARDIN": {
      "titulo": "El Jardín de los Encuentros",
      "audio": "NOVA_01_JARDIN.mp3",
      "fondo": "NOVA_FONDO_01_JARDIN.png"
    },
    "02_PUENTE": {
      "titulo": "El Puente de los Caminos",
      "audio": "NOVA_02_PUENTE.mp3",
      "fondo": "NOVA_FONDO_02_PUENTE.png"
    },
    "03_RINCON": {
      "titulo": "El Rincón de la Calma",
      "audio": "NOVA_03_RINCON.mp3",
      "fondo": "NOVA_FONDO_03_RINCON.png"
    },
    "04_ESPEJO": {
      "titulo": "El Espejo del Agua",
      "audio": "NOVA_04_ESPEJO.mp3",
      "fondo": "NOVA_FONDO_04_ESPEJO.png"
    },
    "05_HORIZONTE": {
      "titulo": "El Horizonte Abierto",
      "audio": "NOVA_05_HORIZONTE.mp3",
      "fondo": "NOVA_FONDO_05_HORIZONTE.png"
    }
  },
  "recorridos": [
    {
      "id": "J01",
      "escenario": "01_JARDIN",
      "titulo": "Lo que estoy sintiendo",
      "descripcion": "Explorar mis emociones sin juicios.",
      "entrada": "A veces lo que sentimos se parece a un jardín después de la lluvia: hay cosas claras y otras todavía entre la niebla. Podemos mirar solo una parte.",
      "primera_pregunta": "¿Por dónde te apetece empezar?",
      "primeras_opciones": [
        {
          "texto": "Buscar una palabra",
          "respuesta": "No tiene que ser la palabra perfecta. A veces “raro” ya dice bastante. Puedes probar una palabra y cambiarla después. Si ninguna encaja del todo, también puedes reconocer que hay varias cosas ocurriendo a la vez.",
          "segunda_pregunta": "¿Cómo quieres acercarte a esa palabra?",
          "segundas_opciones": [
            {
              "texto": "Elegir la más cercana",
              "respuesta": "Puedes quedarte con ella sin tener que explicársela a nadie."
            },
            {
              "texto": "Aceptar que son varias",
              "respuesta": "Alegría y tristeza pueden visitar el mismo día. No hace falta echar a ninguna."
            }
          ]
        },
        {
          "texto": "No ponerle nombre todavía",
          "respuesta": "También está bien sentir algo sin saber cómo llamarlo. Puedes quedarte con una sensación sin convertirla en una explicación. No necesitas presentarla de una manera que otra persona entienda para reconocer que está ahí.",
          "segunda_pregunta": "¿Qué te ayudaría más ahora?",
          "segundas_opciones": [
            {
              "texto": "Notar qué cambia",
              "respuesta": "Quizá algo se mueve cuando le prestas atención; quizá no. Ambas cosas están bien."
            },
            {
              "texto": "Dejarlo reposar",
              "respuesta": "No todo necesita traducirse hoy en palabras."
            }
          ]
        }
      ],
      "cierre": "Lo que sientes merece espacio, incluso cuando todavía no tiene forma. Puedes volver cuando te apetezca."
    },
    {
      "id": "J02",
      "escenario": "01_JARDIN",
      "titulo": "No sé si volver a hablar",
      "descripcion": "Aclarar, cerrar o tomar distancia.",
      "entrada": "Cuando hay algo pendiente con alguien, a veces nos apetece hablar y otras cerrar la puerta un rato. Podemos explorar ambas posibilidades sin empujarte a ninguna.",
      "primera_pregunta": "¿Qué pesa más hoy?",
      "primeras_opciones": [
        {
          "texto": "Tengo algo que quisiera decir",
          "respuesta": "Ponerlo en palabras para ti no significa que tengas que enviárselo a nadie. Antes de pensar en la otra persona, puedes aclarar qué quieres expresar y qué prefieres reservarte. Prepararlo para ti te permite decidir después si quieres compartirlo.",
          "segunda_pregunta": "¿Qué necesitarías de ese mensaje?",
          "segundas_opciones": [
            {
              "texto": "Decir cómo me sentí",
              "respuesta": "Tu experiencia importa, aunque la otra persona no la comprenda igual."
            },
            {
              "texto": "Marcar un límite",
              "respuesta": "Puedes expresar lo que necesitas sin justificar cada detalle."
            }
          ]
        },
        {
          "texto": "No sé si hablar sería bueno",
          "respuesta": "La duda también te está contando que quieres cuidarte. Tal vez necesites distinguir el deseo de decir algo de las condiciones para hacerlo. Puedes esperar, buscar compañía o mantener la distancia si eso encaja mejor contigo.",
          "segunda_pregunta": "¿Qué te gustaría proteger?",
          "segundas_opciones": [
            {
              "texto": "Mi tranquilidad",
              "respuesta": "Tomar distancia puede ser una elección válida, aunque otros esperen una respuesta."
            },
            {
              "texto": "Mi capacidad de elegir",
              "respuesta": "No tener que contestar hoy deja espacio para escuchar qué deseas tú."
            }
          ]
        }
      ],
      "cierre": "Hablar, esperar o no hablar son opciones. La decisión sigue siendo tuya."
    },
    {
      "id": "J03",
      "escenario": "01_JARDIN",
      "titulo": "Lo que viene después",
      "descripcion": "Mirar mi futuro paso a paso.",
      "entrada": "Después de una etapa intensa puede costar imaginar el siguiente día. No necesitamos dibujar todo el camino: basta con mirar un pequeño tramo.",
      "primera_pregunta": "¿Qué te serviría explorar?",
      "primeras_opciones": [
        {
          "texto": "Un gesto pequeño para mañana",
          "respuesta": "Podemos pensar en algo posible, no en una lista de obligaciones. Puede ser recuperar algo tuyo, probar una costumbre o tener un rato para ti. Lo importante es que encaje en tus circunstancias y puedas cambiar de idea.",
          "segunda_pregunta": "¿Qué clase de gesto te atrae?",
          "segundas_opciones": [
            {
              "texto": "Algo que me resulte familiar",
              "respuesta": "Volver a una costumbre querida también es una forma de avanzar."
            },
            {
              "texto": "Probar algo diferente",
              "respuesta": "No necesita salir perfecto para abrir un poquito el horizonte."
            }
          ]
        },
        {
          "texto": "Darme permiso para ir despacio",
          "respuesta": "Tu ritmo no tiene que parecerse al de nadie más. No decidir hoy puede darte espacio para comprender qué quieres. Puedes conservar una posibilidad sin convertirla en una promesa ni ponerte una fecha para resolverla.",
          "segunda_pregunta": "¿Qué permiso te gustaría darte?",
          "segundas_opciones": [
            {
              "texto": "No decidir todavía",
              "respuesta": "Dejar una pregunta abierta también puede ser una elección consciente."
            },
            {
              "texto": "Cambiar de idea",
              "respuesta": "No estás obligado a seguir sintiendo lo mismo mañana."
            }
          ]
        }
      ],
      "cierre": "Lo siguiente no tiene por qué ser grande. Incluso una posibilidad pequeña cuenta."
    },
    {
      "id": "J04",
      "escenario": "01_JARDIN",
      "titulo": "Prefiero descansar un momento",
      "descripcion": "Respirar, sin necesidad de decidir nada.",
      "entrada": "Podemos dejar las preguntas a un lado. Este rincón no te pide avanzar ni comprenderlo todo.",
      "primera_pregunta": "¿Qué forma de pausa prefieres?",
      "primeras_opciones": [
        {
          "texto": "Quedarme aquí un instante",
          "respuesta": "Podemos acompañar este instante sin llenarlo de palabras. Puedes mirar un detalle del paisaje o dejar pasar este rato sin hacer nada más. No habrá una tarea esperándote al terminar.",
          "segunda_pregunta": "¿Qué te resultaría más cómodo?",
          "segundas_opciones": [
            {
              "texto": "Mirar el paisaje",
              "respuesta": "Tal vez baste con encontrar un detalle amable en este jardín."
            },
            {
              "texto": "No hacer nada más",
              "respuesta": "Estar aquí ya es suficiente; no hay ninguna tarea pendiente."
            }
          ]
        },
        {
          "texto": "Cambiar a un espacio más tranquilo",
          "respuesta": "Está bien buscar otro lugar cuando el cuerpo o la cabeza piden menos ruido. Podemos volver al Rincón o a las opciones. El cambio de lugar es una posibilidad, no un ejercicio que tengas que completar.",
          "segunda_pregunta": "¿A dónde quieres ir?",
          "segundas_opciones": [
            {
              "texto": "Al Rincón de la Calma",
              "respuesta": "Si lo eliges, iremos al Rincón de la Calma sin reproducir audio automáticamente."
            },
            {
              "texto": "Volver a las opciones",
              "respuesta": "Podemos regresar a las tarjetas. Tú eliges cuándo continuar."
            }
          ]
        }
      ],
      "cierre": "No hace falta ganarse una pausa. Puedes terminar aquí, y volver si te apetece."
    },
    {
      "id": "P01",
      "escenario": "02_PUENTE",
      "titulo": "Quiero aclarar algo pendiente",
      "descripcion": "Entender lo que ocurrió.",
      "entrada": "A veces una conversación queda a medias y la mente intenta escribir el final. Podemos distinguir lo que sabes de lo que todavía es una pregunta.",
      "primera_pregunta": "¿Qué necesitas mirar primero?",
      "primeras_opciones": [
        {
          "texto": "Lo que sé que pasó",
          "respuesta": "Separar los hechos de las suposiciones puede dar un poco de aire. Puede ayudarte separar lo que viste o escuchaste de lo que imaginas que significaba. También puedes reconocer cómo lo viviste sin tener que demostrar la intención de nadie.",
          "segunda_pregunta": "¿Qué parte quieres tener presente?",
          "segundas_opciones": [
            {
              "texto": "Lo que vi o escuché",
              "respuesta": "Eso es un punto de partida; no necesitas completar los huecos ahora."
            },
            {
              "texto": "Lo que sentí entonces",
              "respuesta": "Tu reacción merece atención aunque otra persona recuerde la escena de otra manera."
            }
          ]
        },
        {
          "texto": "Lo que sigo sin entender",
          "respuesta": "Hay preguntas que tardan en encontrar respuesta y algunas quedan abiertas. Puedes escribir una pregunta sin convertirla en un mensaje. Si decides hablar más adelante, tendrás espacio para elegir qué deseas preguntar y qué prefieres dejar abierto.",
          "segunda_pregunta": "¿Qué harías con esa duda?",
          "segundas_opciones": [
            {
              "texto": "Escribirla para mí",
              "respuesta": "Puedes formularla sin tener que convertirla en un mensaje."
            },
            {
              "texto": "Dejarla abierta por ahora",
              "respuesta": "No resolverlo hoy no invalida lo que viviste."
            }
          ]
        }
      ],
      "cierre": "Quizá ahora no tengas una respuesta completa. Tener algo más de claridad también puede ser suficiente."
    },
    {
      "id": "P02",
      "escenario": "02_PUENTE",
      "titulo": "Quisiera intentarlo otra vez",
      "descripcion": "Explorar lo que podría ser diferente.",
      "entrada": "Volver a acercarse a alguien puede despertar esperanza y también cautela. Ambas tienen algo que decirte.",
      "primera_pregunta": "¿Qué te gustaría explorar primero?",
      "primeras_opciones": [
        {
          "texto": "Qué tendría que cambiar",
          "respuesta": "Una segunda oportunidad no tiene que repetir exactamente la primera. Puedes pensar en condiciones observables: cómo os habláis, qué límites se respetan o si ambas personas desean participar. Echar algo de menos no te obliga a recuperarlo.",
          "segunda_pregunta": "¿Qué cambio te importa más?",
          "segundas_opciones": [
            {
              "texto": "Una conversación más clara",
              "respuesta": "Pedir claridad es legítimo, y escuchar una respuesta también puede ayudarte a decidir."
            },
            {
              "texto": "Un límite respetado",
              "respuesta": "Si un límite importante no se respeta, puedes revisar tu decisión."
            }
          ]
        },
        {
          "texto": "Qué espero de ese encuentro",
          "respuesta": "A veces imaginamos respuestas antes de que la conversación exista. Puedes reconocer qué te ilusiona y qué no puedes garantizar. La respuesta de otra persona no depende de que encuentres las palabras perfectas ni de que lo intentes más veces.",
          "segunda_pregunta": "¿Cómo quieres cuidarte ante lo incierto?",
          "segundas_opciones": [
            {
              "texto": "Aceptar distintos resultados",
              "respuesta": "Puedes prepararte para que la otra persona no quiera lo mismo."
            },
            {
              "texto": "Darme tiempo",
              "respuesta": "No hay obligación de acercarte hasta que tú lo desees."
            }
          ]
        }
      ],
      "cierre": "Reencontrarse es una posibilidad, no una obligación. Tu bienestar también cuenta en la decisión."
    },
    {
      "id": "P03",
      "escenario": "02_PUENTE",
      "titulo": "Necesito proteger mi tranquilidad",
      "descripcion": "Pensar en mis límites.",
      "entrada": "Cuidar tu tranquilidad no te convierte en alguien frío. A veces es la manera de escuchar lo que necesitas.",
      "primera_pregunta": "¿En qué tipo de límite piensas?",
      "primeras_opciones": [
        {
          "texto": "Necesito un poco de distancia",
          "respuesta": "La distancia puede servir para recuperar espacio propio. Puede ser tiempo para responder, menos contacto o no entrar en una conversación. No necesitas definir una distancia para siempre antes de reconocer lo que necesitas hoy.",
          "segunda_pregunta": "¿Cómo te gustaría vivirla?",
          "segundas_opciones": [
            {
              "texto": "Sin explicarlo todo",
              "respuesta": "No debes justificar cada momento de intimidad ni responder de inmediato."
            },
            {
              "texto": "Con un mensaje breve",
              "respuesta": "Puedes comunicar una decisión sencilla sin entrar en una discusión larga."
            }
          ]
        },
        {
          "texto": "Necesito que algo cambie",
          "respuesta": "Un límite no es una garantía sobre la conducta ajena, pero sí puede orientarte. Puedes distinguir lo que te gustaría pedir de lo que puedes decidir por ti. Una petición no garantiza un cambio ajeno; tu margen para actuar también merece atención.",
          "segunda_pregunta": "¿Qué te ayudaría a expresarlo?",
          "segundas_opciones": [
            {
              "texto": "Decir qué necesito",
              "respuesta": "Una frase clara puede ser suficiente: lo importante es que te represente."
            },
            {
              "texto": "Reconocer qué haré yo",
              "respuesta": "Puedes decidir cómo actuar si algo vuelve a incomodarte."
            }
          ]
        }
      ],
      "cierre": "Proteger tu espacio no te obliga a demostrar nada. Puedes ajustar tus límites con el tiempo."
    },
    {
      "id": "P04",
      "escenario": "02_PUENTE",
      "titulo": "No lo tengo claro",
      "descripcion": "Explorar sin decidir todavía.",
      "entrada": "La indecisión no siempre es estar perdido. A veces significa que hay varias cosas valiosas tirando en direcciones distintas.",
      "primera_pregunta": "¿Cómo se siente esa duda?",
      "primeras_opciones": [
        {
          "texto": "Tengo razones para acercarme",
          "respuesta": "Podemos reconocer ese deseo sin convertirlo en una decisión inmediata. Puedes dar lugar a esas razones sin convertirlas en una obligación de dar el paso. La esperanza puede convivir con la necesidad de observar y protegerte.",
          "segunda_pregunta": "¿Qué te gustaría conservar?",
          "segundas_opciones": [
            {
              "texto": "La esperanza",
              "respuesta": "La esperanza puede acompañarte sin decidir por ti."
            },
            {
              "texto": "La prudencia",
              "respuesta": "La prudencia puede sentarse al lado de la esperanza, no frente a ella."
            }
          ]
        },
        {
          "texto": "Tengo razones para alejarme",
          "respuesta": "Quizá una parte de ti está pidiendo protección o tiempo. Puedes escuchar esas razones sin tener que probar que son suficientes para otra persona. Tomar distancia, esperar y buscar apoyo siguen siendo posibilidades.",
          "segunda_pregunta": "¿Qué necesitas escuchar?",
          "segundas_opciones": [
            {
              "texto": "Lo que me preocupa",
              "respuesta": "Tomar en serio una preocupación no equivale a predecir lo peor."
            },
            {
              "texto": "Lo que me da paz",
              "respuesta": "También puedes prestar atención a los lugares donde recuperas calma."
            }
          ]
        }
      ],
      "cierre": "No elegir todavía es una opción completa por hoy. Este puente seguirá aquí cuando quieras volver."
    },
    {
      "id": "R01",
      "escenario": "03_RINCON",
      "titulo": "Respirar un momento",
      "descripcion": "Un espacio de calma y presencia.",
      "entrada": "Podemos hacer una pausa pequeña. No hace falta respirar de una forma especial ni seguir un ritmo si no te apetece.",
      "primera_pregunta": "¿Qué prefieres?",
      "primeras_opciones": [
        {
          "texto": "Acompañar mi respiración natural",
          "respuesta": "No necesitamos cambiarla. Puedes notar, si te resulta cómodo, cómo entra y sale el aire. No necesitas hacerla más lenta ni más profunda. Si poner atención en ella no te resulta agradable, puedes elegir mirar el paisaje o terminar.",
          "segunda_pregunta": "¿Cómo quieres continuar?",
          "segundas_opciones": [
            {
              "texto": "Un instante más",
              "respuesta": "Puedes quedarte un poco más, sin contar segundos."
            },
            {
              "texto": "Terminar la pausa",
              "respuesta": "Está bien parar aquí. No hay ningún ejercicio que completar."
            }
          ]
        },
        {
          "texto": "Descansar sin fijarme en la respiración",
          "respuesta": "Perfectamente válido. A veces observar el entorno se siente mejor. Puedes elegir un detalle a tu alrededor o simplemente dejar de pulsar botones un momento. Este espacio también puede acompañarte sin pedirte una decisión más.",
          "segunda_pregunta": "¿Qué te gustaría notar?",
          "segundas_opciones": [
            {
              "texto": "Un color del paisaje",
              "respuesta": "Puedes elegir un color que te resulte agradable y dejar que el resto espere."
            },
            {
              "texto": "El apoyo de mis pies",
              "respuesta": "Si te resulta cómodo, observa dónde estás apoyado; no hay nada que conseguir."
            }
          ]
        }
      ],
      "cierre": "Una pausa no tiene que cambiar cómo te sientes para haber valido la pena."
    },
    {
      "id": "R02",
      "escenario": "03_RINCON",
      "titulo": "Reflexionar en silencio",
      "descripcion": "Pensar con más claridad.",
      "entrada": "Podemos dejar un poquito de silencio alrededor de una sola idea. Ninguna prisa por entenderla.",
      "primera_pregunta": "¿Qué clase de silencio buscas?",
      "primeras_opciones": [
        {
          "texto": "Uno en el que pueda pensar",
          "respuesta": "Quizá hay una pregunta que merece menos ruido alrededor. Podemos quedarnos con una sola pregunta, sin obligarnos a contestarla. A veces basta con reconocer qué asunto está ocupando más espacio ahora.",
          "segunda_pregunta": "¿Qué hacemos con ella?",
          "segundas_opciones": [
            {
              "texto": "Quedarme con una pregunta",
              "respuesta": "No hace falta responderla ahora. Puedes guardarla como compañía."
            },
            {
              "texto": "Dejar que se disuelva",
              "respuesta": "No todas las preguntas necesitan ocupar el centro."
            }
          ]
        },
        {
          "texto": "Uno en el que no tenga que pensar",
          "respuesta": "Puedes soltar la exigencia de sacar una conclusión de este momento. Puedes estar aquí sin ordenar tus ideas ni sacar una conclusión. Cuando quieras, podrás volver al paisaje o cerrar este recorrido.",
          "segunda_pregunta": "¿Cómo te gustaría pasar este rato?",
          "segundas_opciones": [
            {
              "texto": "Mirar algo agradable",
              "respuesta": "Una imagen tranquila puede ser suficiente por hoy."
            },
            {
              "texto": "Cerrar este recorrido",
              "respuesta": "Podemos terminar sin resumen ni lección."
            }
          ]
        }
      ],
      "cierre": "El silencio también puede ser una forma de cuidarte, sin obligación de encontrar respuestas."
    },
    {
      "id": "R03",
      "escenario": "03_RINCON",
      "titulo": "Descansar un rato",
      "descripcion": "Sin necesidad de decidir nada.",
      "entrada": "No todo descanso tiene que ser productivo. Aquí puedes dejar de perseguir la siguiente cosa.",
      "primera_pregunta": "¿Qué te apetece más?",
      "primeras_opciones": [
        {
          "texto": "Soltar las decisiones por ahora",
          "respuesta": "Hay días en que dejar algo pendiente es lo más amable que podemos hacer. No tienes que revisar todas las opciones para merecer una pausa. Puedes dejar lo que siga abierto para otro momento, aunque no sepas cuándo volverás.",
          "segunda_pregunta": "¿Qué quieres recordarte?",
          "segundas_opciones": [
            {
              "texto": "Puedo volver después",
              "respuesta": "Este espacio sigue aquí; no desaparece porque hoy te vayas."
            },
            {
              "texto": "No debo hacerlo perfecto",
              "respuesta": "Descansar no es una prueba que puedas suspender."
            }
          ]
        },
        {
          "texto": "Buscar algo sencillo que me reconforte",
          "respuesta": "A veces basta con una costumbre pequeña y conocida. Puede ser una canción, un objeto cercano o una costumbre que disfrutas. No necesitas buscar algo extraordinario ni comprobar después si ha funcionado.",
          "segunda_pregunta": "¿Qué opción te acompaña más?",
          "segundas_opciones": [
            {
              "texto": "Algo cotidiano",
              "respuesta": "Una bebida, una canción o una mirada a la ventana pueden ser suficientes si te apetecen."
            },
            {
              "texto": "Un ratito de tranquilidad",
              "respuesta": "Puedes reservarte este instante sin explicárselo a nadie."
            }
          ]
        }
      ],
      "cierre": "Descansar también es una elección. No hay nada que demostrar al cerrar esta pantalla."
    },
    {
      "id": "E01",
      "escenario": "04_ESPEJO",
      "titulo": "Poner en palabras lo que siento",
      "descripcion": "Expresar mis emociones para entenderme mejor.",
      "entrada": "Las palabras no siempre salen ordenadas. Podemos empezar con una frase incompleta y dejar que sea suficiente.",
      "primera_pregunta": "¿Cómo prefieres acercarte a lo que sientes?",
      "primeras_opciones": [
        {
          "texto": "Con una frase sencilla",
          "respuesta": "No hace falta que suene bonita ni acertada. Puede empezar por “Hoy me pesa…”. No hace falta reconstruir toda la historia. Puedes reconocer una cosa que pesa hoy y decidir si quieres guardarla, cambiarla después o dejarla sin escribir.",
          "segunda_pregunta": "¿Qué te ayudaría ahora?",
          "segundas_opciones": [
            {
              "texto": "Escribirla en mis notas",
              "respuesta": "Si lo deseas, puedes abrir tus notas y escribirla allí. No se guardará nada automáticamente."
            },
            {
              "texto": "Quedarme solo con la idea",
              "respuesta": "También puedes conservarla en silencio, sin escribir una sola palabra."
            }
          ]
        },
        {
          "texto": "Con algo que todavía no entiendo",
          "respuesta": "A veces lo que sentimos cambia incluso mientras lo miramos. Puedes permitirte una descripción provisional, incluso una que mañana ya no encaje. Comprenderte no necesita convertirse en una explicación definitiva de todo lo que sientes.",
          "segunda_pregunta": "¿Cómo te gustaría tratar esa incertidumbre?",
          "segundas_opciones": [
            {
              "texto": "Permitir que cambie",
              "respuesta": "No tienes que fijar para siempre lo que hoy te atraviesa."
            },
            {
              "texto": "No explicármelo todavía",
              "respuesta": "Puedes darte espacio sin convertir cada emoción en un problema que resolver."
            }
          ]
        }
      ],
      "cierre": "Puedes volver a estas palabras cuando quieras. No necesitan estar completas para ser tuyas."
    },
    {
      "id": "E02",
      "escenario": "04_ESPEJO",
      "titulo": "Sentimientos encontrados",
      "descripcion": "Explorar lo que siento cuando es difícil de entender.",
      "entrada": "Se puede echar de menos a alguien y, al mismo tiempo, necesitar distancia. Lo contradictorio también forma parte de estar vivo.",
      "primera_pregunta": "¿Qué te gustaría reconocer?",
      "primeras_opciones": [
        {
          "texto": "Dos sentimientos a la vez",
          "respuesta": "Quizá ninguno anula al otro. Pueden coexistir sin ponerse de acuerdo. Puedes sentir cariño y enfado, alivio y tristeza, cercanía y necesidad de espacio. Reconocer una parte no borra la otra ni te obliga a resolver esa mezcla hoy.",
          "segunda_pregunta": "¿Cómo prefieres mirarlos?",
          "segundas_opciones": [
            {
              "texto": "Dar espacio a los dos",
              "respuesta": "No hace falta escoger el “correcto”. Ambos pueden tener algo que contar."
            },
            {
              "texto": "Escuchar el que pesa más hoy",
              "respuesta": "Lo que pesa hoy no dicta lo que sentirás mañana."
            }
          ]
        },
        {
          "texto": "Que mis emociones han cambiado",
          "respuesta": "Cambiar de sentir no borra lo que fue importante antes. Puedes reconocer lo que hubo y lo que existe ahora sin acusarte de ser incoherente. Las circunstancias y tus necesidades también pueden haber cambiado.",
          "segunda_pregunta": "¿Qué necesitas recordar?",
          "segundas_opciones": [
            {
              "texto": "Que puedo cambiar",
              "respuesta": "No tienes que defender una emoción antigua para ser coherente."
            },
            {
              "texto": "Que también hubo algo valioso",
              "respuesta": "Reconocer lo bueno no te obliga a volver a algo que ya no deseas."
            }
          ]
        }
      ],
      "cierre": "No tienes que resolver una contradicción para poder seguir adelante a tu ritmo."
    },
    {
      "id": "E03",
      "escenario": "04_ESPEJO",
      "titulo": "Lo que echo de menos",
      "descripcion": "Mirar lo que todavía tiene un lugar en mí.",
      "entrada": "Echar algo de menos no siempre significa querer recuperarlo. A veces es simplemente reconocer que tuvo un lugar en nuestra historia.",
      "primera_pregunta": "¿Qué es lo que más aparece cuando lo recuerdas?",
      "primeras_opciones": [
        {
          "texto": "Un momento bonito",
          "respuesta": "Puedes agradecer un recuerdo sin pedirle que se convierta en presente. Puedes reconocer el valor de aquel momento sin exigirte volver a vivirlo igual. Lo que fue importante puede tener un lugar aunque hoy el vínculo sea distinto.",
          "segunda_pregunta": "¿Qué lugar quieres darle?",
          "segundas_opciones": [
            {
              "texto": "Guardarlo con cariño",
              "respuesta": "Algunas cosas permanecen valiosas aunque una etapa termine."
            },
            {
              "texto": "Dejar que duela un poco",
              "respuesta": "Sentir tristeza por algo importante no exige que tomes una decisión ahora."
            }
          ]
        },
        {
          "texto": "Algo que nunca llegó a ocurrir",
          "respuesta": "También podemos extrañar una posibilidad, una promesa o una versión imaginada del futuro. Puedes dar lugar a lo que esperabas y también mirar qué necesitas ahora. No tienes que convertir una posibilidad que no ocurrió en una prueba contra ti.",
          "segunda_pregunta": "¿Qué te gustaría hacer con esa idea?",
          "segundas_opciones": [
            {
              "texto": "Reconocer la ilusión",
              "respuesta": "Haber esperado algo no fue una tontería; era una posibilidad significativa para ti."
            },
            {
              "texto": "Mirar lo que tengo hoy",
              "respuesta": "El presente no borra lo imaginado, pero puede darte otro lugar desde el que mirar."
            }
          ]
        }
      ],
      "cierre": "Puedes recordar sin quedarte atrapado en una única lectura de lo vivido."
    },
    {
      "id": "E04",
      "escenario": "04_ESPEJO",
      "titulo": "Quiero quedarme en calma",
      "descripcion": "Respirar, sentir y estar un rato aquí, sin hacer nada más.",
      "entrada": "El agua puede reflejar muchas cosas sin intentar arreglarlas. Aquí también podemos limitarnos a estar.",
      "primera_pregunta": "¿Qué compañía te vendría mejor?",
      "primeras_opciones": [
        {
          "texto": "Unas pocas palabras",
          "respuesta": "Me quedaré en algo sencillo: este momento no necesita explicaciones. Pueden ser pocas y dejar espacio al silencio. No voy a pedirte que te marches con una enseñanza ni con una respuesta distinta de la que tenías al llegar.",
          "segunda_pregunta": "¿Cómo quieres cerrar?",
          "segundas_opciones": [
            {
              "texto": "Con una frase amable",
              "respuesta": "Hoy puedes tratarte con un poco más de suavidad, incluso si todo sigue igual."
            },
            {
              "texto": "Sin conclusión",
              "respuesta": "No hace falta extraer un aprendizaje de cada momento."
            }
          ]
        },
        {
          "texto": "Un momento tranquilo",
          "respuesta": "Está bien preferir menos palabras. Podemos volver al paisaje o abrir una pausa. También puedes dejar de hacer clic y quedarte aquí; no hay una secuencia que debas completar.",
          "segunda_pregunta": "¿Qué te gustaría hacer?",
          "segundas_opciones": [
            {
              "texto": "Contemplar el paisaje",
              "respuesta": "Puedes detenerte en un detalle que te guste y quedarte ahí un instante."
            },
            {
              "texto": "Ir al Rincón de la Calma",
              "respuesta": "Podemos ir al Rincón de la Calma cuando decidas, sin reproducir ningún audio solo por entrar."
            }
          ]
        }
      ],
      "cierre": "Si algo permanece revuelto, no hay problema en dejarlo reposar por hoy."
    },
    {
      "id": "H01",
      "escenario": "05_HORIZONTE",
      "titulo": "Mis próximos pasos",
      "descripcion": "Explorar qué me gustaría hacer a partir de ahora.",
      "entrada": "Un próximo paso no tiene que ser una gran decisión. A veces es algo diminuto que te devuelve una sensación de elección.",
      "primera_pregunta": "¿Cómo quieres pensar en él?",
      "primeras_opciones": [
        {
          "texto": "En algo posible esta semana",
          "respuesta": "Podemos imaginar un gesto que quepa en tu vida real. Puedes imaginarlo con tus horarios, tus recursos y tu energía de hoy. Un gesto posible suele decir más que un plan que solo añade presión.",
          "segunda_pregunta": "¿Qué tipo de gesto te apetece?",
          "segundas_opciones": [
            {
              "texto": "Recuperar algo que disfruto",
              "respuesta": "Volver a algo propio puede ser una forma amable de reencontrarte."
            },
            {
              "texto": "Probar algo sencillo",
              "respuesta": "No necesitas convertirlo en un plan de transformación."
            }
          ]
        },
        {
          "texto": "En algo que puedo posponer",
          "respuesta": "Elegir no apresurarte también puede ser parte de tu camino. Puedes reconocer qué hace difícil darlo sin obligarte a resolverlo ahora. Posponer puede ser una elección consciente, y podrás revisarla cuando tengas más margen.",
          "segunda_pregunta": "¿Qué te ayudaría?",
          "segundas_opciones": [
            {
              "texto": "Quitarme presión",
              "respuesta": "No necesitas demostrar progreso todos los días."
            },
            {
              "texto": "Dejar una puerta abierta",
              "respuesta": "Puedes conservar una posibilidad sin ponerle fecha."
            }
          ]
        }
      ],
      "cierre": "El camino sigue siendo tuyo, incluso cuando decides caminar despacio."
    },
    {
      "id": "H02",
      "escenario": "05_HORIZONTE",
      "titulo": "Nuevas rutinas",
      "descripcion": "Encontrar pequeños cambios que me hagan bien.",
      "entrada": "Después de una etapa difícil, las rutinas pueden sentirse distintas. No hace falta rediseñar tu vida entera.",
      "primera_pregunta": "¿Qué clase de cambio te atrae?",
      "primeras_opciones": [
        {
          "texto": "Recuperar algo conocido",
          "respuesta": "A veces lo familiar ofrece un suelo amable. Puedes preguntarte qué parte te gustaba: la compañía, el tiempo propio o la actividad. Recuperarla puede significar adaptarla, no volver exactamente a como era antes.",
          "segunda_pregunta": "¿Qué sería suficiente?",
          "segundas_opciones": [
            {
              "texto": "Un gesto pequeño",
              "respuesta": "Un gesto pequeño también cuenta, aunque mañana no lo repitas."
            },
            {
              "texto": "Hacerlo a mi manera",
              "respuesta": "Puedes adaptar una costumbre a quien eres ahora."
            }
          ]
        },
        {
          "texto": "Explorar algo nuevo",
          "respuesta": "La curiosidad también puede tener un espacio, incluso si es pequeñito. Puedes empezar por curiosidad, sin comprar nada ni comprometerte a mantenerlo. Después tendrás derecho a decidir que no encaja contigo.",
          "segunda_pregunta": "¿Cómo prefieres probar?",
          "segundas_opciones": [
            {
              "texto": "Sin comprometerme",
              "respuesta": "Puedes hacer una prueba y decidir después si quieres repetir."
            },
            {
              "texto": "Con alguien de confianza",
              "respuesta": "Compartir algo agradable es una opción, no una obligación."
            }
          ]
        }
      ],
      "cierre": "No necesitas cumplir una rutina perfecta para que tenga sentido para ti."
    },
    {
      "id": "H03",
      "escenario": "05_HORIZONTE",
      "titulo": "Lo que sí puedo controlar",
      "descripcion": "Centrarme en lo que depende de mí y me da tranquilidad.",
      "entrada": "No podemos controlar todas las respuestas de los demás ni anticipar el futuro. Sí podemos explorar dónde empieza nuestro margen de elección.",
      "primera_pregunta": "¿Qué te gustaría distinguir?",
      "primeras_opciones": [
        {
          "texto": "Lo que puedo decidir yo",
          "respuesta": "Tus decisiones merecen espacio, incluso si otros tienen sus propias opiniones. Puede ser cuándo respondes, qué información buscas o qué límite expresas. Tu margen puede ser pequeño y seguir siendo relevante para lo que necesitas cuidar.",
          "segunda_pregunta": "¿Por dónde empezar?",
          "segundas_opciones": [
            {
              "texto": "Cómo respondo",
              "respuesta": "Puedes elegir si contestar, cuándo y con qué límites."
            },
            {
              "texto": "Dónde pongo mi atención",
              "respuesta": "No siempre será fácil, pero puedes probar a prestar atención a algo que te haga bien."
            }
          ]
        },
        {
          "texto": "Lo que no depende de mí",
          "respuesta": "Reconocerlo no es rendirse; a veces evita gastar fuerzas donde no hay control. Reconocer un límite de control no resta importancia a lo que te preocupa. Puede ayudarte a distinguir cuándo buscar información, pedir compañía o dejar algo en espera.",
          "segunda_pregunta": "¿Qué te ayudaría a soltar?",
          "segundas_opciones": [
            {
              "texto": "La reacción de otra persona",
              "respuesta": "No puedes garantizar cómo interpretará alguien tus palabras."
            },
            {
              "texto": "Tener certeza sobre todo",
              "respuesta": "Es posible avanzar con preguntas abiertas y pequeños márgenes de duda."
            }
          ]
        }
      ],
      "cierre": "No todo está en tus manos, pero tus elecciones siguen importando."
    },
    {
      "id": "H04",
      "escenario": "05_HORIZONTE",
      "titulo": "Imaginando posibilidades",
      "descripcion": "Visualizar un futuro que también puede ser bonito.",
      "entrada": "Mirar al horizonte no exige estar optimista. Podemos imaginar posibilidades sin fingir que todo está resuelto.",
      "primera_pregunta": "¿Qué futuro te apetece asomarte a mirar?",
      "primeras_opciones": [
        {
          "texto": "Uno en el que me sienta más libre",
          "respuesta": "La libertad puede empezar por cosas pequeñas: tiempo, calma o espacio propio. Puedes imaginar una escena cotidiana: cómo usas tu tiempo, con quién quieres compartirlo o qué espacio necesitas. No hace falta que esa imagen se convierta en un compromiso.",
          "segunda_pregunta": "¿Qué detalle te atrae?",
          "segundas_opciones": [
            {
              "texto": "Elegir sin tanta presión",
              "respuesta": "Puedes imaginar decisiones tomadas desde tus necesidades, no desde la prisa."
            },
            {
              "texto": "Tener un rato para mí",
              "respuesta": "Tu tiempo también merece un lugar en el futuro que imaginas."
            }
          ]
        },
        {
          "texto": "Uno que todavía no puedo describir",
          "respuesta": "No necesitas una imagen nítida para dejar abierta una posibilidad. Puedes empezar por lo que no quieres repetir o por algo que te da curiosidad. Todavía no saber describir un futuro no cierra todas tus posibilidades.",
          "segunda_pregunta": "¿Cómo quieres relacionarte con ella?",
          "segundas_opciones": [
            {
              "texto": "Con curiosidad",
              "respuesta": "La curiosidad puede existir sin prometerte un resultado."
            },
            {
              "texto": "Con paciencia",
              "respuesta": "El futuro puede seguir borroso y aun así permitirte descansar hoy."
            }
          ]
        }
      ],
      "cierre": "No hace falta ver el horizonte entero. Basta con saber que aún hay espacio para posibilidades."
    }
  ],
  "tarjeta_navegacion": {
    "id": "R04",
    "escenario": "03_RINCON",
    "titulo": "Volver al Jardín",
    "descripcion": "Explorar otros caminos cuando lo desees.",
    "tipo": "navegacion",
    "destino": "01_JARDIN",
    "comportamiento": "Navegar directamente al Jardín, sin audio automático ni pantalla provisional."
  },
  "notas": "Mis notas personales es acceso funcional separado de la navegación narrativa, en todos los escenarios.",
  "notas_implementacion": {
    "navegacion": "R04 navega directo a 01_JARDIN sin autoplay.",
    "otras_transiciones": "J04 segunda elección 2.1 y E04 segunda elección 2.2: presentar botón opcional Ir al Rincón tras la respuesta, sin navegación automática. J04 segunda elección 2.2: Volver a tarjetas solo tras pulsación.",
    "auditabilidad": "19 recorridos, 76 combinaciones, sin texto inventado; guiones conforme al documento maestro adjunto."
  },
  "revision_editorial": "2026-10-15 · respuestas de recorrido ampliadas con situaciones concretas; no modifica las grabaciones."
};
