export const DATA={
  "version": "1.0",
  "source": "DIEZ_ALMA_CONSOLIDACION_MAESTRA_2026-10-14.docx",
  "scenes": [
    {
      "id": "00",
      "title": "Alma",
      "description": "Un espacio para acompañar, comprender y fortalecer los vínculos que nos importan.",
      "icon": "leaf",
      "character": "ALMA_00_PERSONAJE_PORTADA.png",
      "background": "ALMA_00_FONDO_PORTADA.png",
      "audio": "ALMA_00_PRESENTACION.mp3"
    },
    {
      "id": "01",
      "title": "El Árbol de las Raíces",
      "description": "Relaciones y vínculos familiares",
      "icon": "leaf",
      "character": "ALMA_01_PERSONAJE_RAICES.png",
      "background": "ALMA_01_FONDO_RAICES.png",
      "audio": "ALMA_01_RAICES.mp3",
      "intro": "Puedes sentarte junto a estas raíces y mirar los vínculos que forman parte de tu vida. Tal vez quieras acercarte, expresar algo o encontrar espacio para ti. Elige lo que se parezca a tu momento."
    },
    {
      "id": "02",
      "title": "El Sendero de las Generaciones",
      "description": "Padres, hijos y nuevas miradas",
      "icon": "people",
      "character": "ALMA_02_PERSONAJE_GENERACIONES.png",
      "background": "ALMA_02_FONDO_GENERACIONES.png",
      "audio": "ALMA_02_GENERACIONES.mp3",
      "intro": "Cada generación trae una manera de mirar la vida. En este sendero puedes explorar cómo escuchar, expresar tus decisiones o acompañar los cambios sin dejar de ser tú."
    },
    {
      "id": "03",
      "title": "El Banco de los Recuerdos",
      "description": "Momentos que nos acompañan",
      "icon": "photo",
      "character": "ALMA_03_PERSONAJE_RECUERDOS.png",
      "background": "ALMA_03_FONDO_RECUERDOS.png",
      "audio": "ALMA_03_RECUERDOS.mp3",
      "intro": "En este banco hay sitio para lo que te hace sonreír y para lo que todavía duele. Puedes elegir qué recuerdo mirar y hasta dónde quieres acercarte."
    },
    {
      "id": "04",
      "title": "El Puente de las Distancias",
      "description": "Conflictos, límites y reencuentros",
      "icon": "bridge",
      "character": "ALMA_04_PERSONAJE_DISTANCIAS.png",
      "background": "ALMA_04_FONDO_DISTANCIAS.png",
      "audio": "ALMA_04_DISTANCIAS.mp3",
      "intro": "Un puente puede ofrecer cercanía y también mostrar dónde necesitamos espacio. Aquí puedes mirar palabras pendientes, silencios o límites, sin obligación de retomar una relación."
    },
    {
      "id": "05",
      "title": "El Jardín de las Nuevas Ramas",
      "description": "Cambios, nuevas etapas y nuevas formas de familia",
      "icon": "sprout",
      "character": "ALMA_05_PERSONAJE_NUEVAS_RAMAS.png",
      "background": "ALMA_05_FONDO_NUEVAS_RAMAS.png",
      "audio": "ALMA_05_NUEVAS_RAMAS.mp3",
      "intro": "Las familias cambian: llegan personas, cambian los cuidados y aparecen necesidades nuevas. Puedes explorar qué lugar quieres ocupar y qué necesitas cuidar en esta etapa."
    }
  ],
  "routes": [
    {
      "id": "01-N01",
      "scene": "01",
      "title": "Echo de menos a alguien de mi familia",
      "sceneDescription": "Alma se acomoda junto a una raíz antigua. Su farolillo ilumina suavemente el suelo.",
      "entry": "«Ay, cariño… Hay ausencias que se notan incluso cuando la casa está llena de gente.\nA veces echamos de menos una conversación. Otras, una costumbre. O simplemente saber que alguien está ahí.\nY hay algo que quiero decirte: echar de menos a alguien no significa que tengas que hacer nada inmediatamente.\nPodemos empezar por comprender qué es lo que más te pesa».",
      "question": "¿Qué se parece más a lo que estás sintiendo?",
      "responses": [
        {
          "id": "A",
          "option": "Echo de menos cómo éramos antes.",
          "text": "«A veces no echamos de menos solamente a una persona, sino también la forma en que nos sentíamos a su lado. Y reconocer esa diferencia puede ayudarnos a comprender lo que necesitamos hoy»."
        },
        {
          "id": "B",
          "option": "Hace tiempo que no hablamos.",
          "text": "«El silencio puede hacerse muy largo, cariño. Pero no tienes que decidir hoy si quieres romperlo. Primero podemos escuchar qué te gustaría que cambiara»."
        },
        {
          "id": "C",
          "option": "Esa persona ya no está en mi vida.",
          "text": "«Hay ausencias que no podemos cambiar y otras cuyas circunstancias todavía no comprendemos del todo. No voy a pedirte que olvides ni que sigas adelante antes de estar preparado»."
        },
        {
          "id": "D",
          "option": "No sé explicar por qué la echo tanto de menos.",
          "text": "«No todos los sentimientos llegan acompañados de una explicación. A veces el corazón reconoce una ausencia mucho antes de que encontremos palabras para describirla»."
        }
      ],
      "transition": "Alma deja unos segundos de silencio antes de continuar. «Ahora que hemos mirado un poquito esa ausencia, podemos elegir qué hacer con ella. Y recuerda: ninguna de estas opciones es una obligación».\n¿Qué te gustaría hacer ahora con lo que estás sintiendo?",
      "secondQuestion": "¿Qué te gustaría hacer ahora con lo que estás sintiendo?",
      "outcomes": [
        {
          "id": "1",
          "option": "Quiero recordar algo bonito.",
          "title": "El recuerdo que acompaña",
          "text": "«Entonces guarda un momento que te haga sonreír, cariño. No tiene que ser extraordinario. A veces los recuerdos más pequeños son los que más calor nos dan. Puedes volver a él cuando quieras, sin exigirle que cambie lo que sientes»."
        },
        {
          "id": "2",
          "option": "Me gustaría expresar lo que siento.",
          "title": "Las palabras que esperan",
          "text": "«Podrías escribir unas palabras, aunque nadie llegue a leerlas. No para encontrar una respuesta perfecta, sino para darte permiso de expresar lo que llevas dentro. Y si algún día decides compartirlas, será una elección tuya»."
        },
        {
          "id": "3",
          "option": "Quiero pensar si puedo acercarme.",
          "title": "La puerta entreabierta",
          "text": "«Si acercarte es seguro y verdaderamente lo deseas, quizá puedas imaginar un gesto pequeño, sin esperar una respuesta determinada. Y si todavía no es el momento, también puedes dejar esa puerta como está. Tu tranquilidad importa»."
        },
        {
          "id": "4",
          "option": "Hoy solo necesito descansar.",
          "title": "Bajo las ramas",
          "text": "«Entonces descansemos, cariño. No tienes que transformar esta tristeza en una decisión ni encontrarle una enseñanza. Podemos quedarnos aquí, bajo las ramas, hasta que te apetezca continuar»."
        }
      ],
      "sourceParagraph": 27,
      "approved": true
    },
    {
      "id": "01-N02",
      "scene": "01",
      "title": "Quiero a mi familia, pero a veces necesito distancia",
      "sceneDescription": "Alma observa dos raíces que crecieron juntas durante años y ahora avanzan en direcciones diferentes.",
      "entry": "«Ay, cariño… Hay algo que aprendí mirando este árbol durante muchos años.\nLas raíces no necesitan crecer todas en la misma dirección para pertenecer al mismo bosque.\nCon las familias pasa algo parecido.\nPodemos querer muchísimo a alguien y, aun así, necesitar nuestro propio espacio. Podemos agradecer lo que nos han dado y reconocer que algunas cosas nos hacen daño.\nY eso no convierte nuestro cariño en algo menos verdadero.\nVen, vamos a mirar qué significa para ti esa distancia».",
      "question": "¿Qué es lo que más te cuesta de necesitar distancia?",
      "responses": [
        {
          "id": "A",
          "option": "Me siento culpable cuando digo que no.",
          "text": "«Ay, esa palabrita… culpa. A veces aparece incluso cuando estamos intentando cuidarnos. Que alguien se entristezca por un límite no significa necesariamente que hayas hecho algo malo»."
        },
        {
          "id": "B",
          "option": "Mi familia no comprende que necesite espacio.",
          "text": "«No siempre conseguimos que los demás comprendan nuestras necesidades. Y eso puede doler. Pero necesitar que respeten tu espacio no es lo mismo que pedirles que estén de acuerdo contigo»."
        },
        {
          "id": "C",
          "option": "Tengo miedo de que se alejen si pongo límites.",
          "text": "«Cuando queremos a alguien, imaginar que podemos perder su cariño asusta. Podemos reconocer ese miedo sin dejar que decida por nosotros. Tus necesidades también merecen un lugar»."
        },
        {
          "id": "D",
          "option": "No sé cuánta distancia necesito.",
          "text": "«Pues no hace falta medirla hoy, cariño. A veces descubrimos lo que necesitamos poco a poco. Puedes empezar observando qué situaciones te hacen sentir tranquilo y cuáles te dejan agotado»."
        }
      ],
      "transition": "Alma acaricia suavemente la corteza del árbol. «Mira estas ramas. Algunas necesitan más luz, otras un poquito de sombra. Ninguna tiene que justificarse por crecer a su manera. ¿Y tú? ¿Qué te gustaría permitirte ahora?».",
      "secondQuestion": "¿Qué te gustaría permitirte ahora?",
      "outcomes": [
        {
          "id": "1",
          "option": "Quiero aprender a decir que no.",
          "title": "Una palabra pequeña",
          "text": "«Podemos empezar con algo sencillo: “Hoy no puedo” o “Necesito pensarlo”. No tienes que preparar un discurso para justificar cada límite. Y si alguien se enfada, podemos recordar que su reacción no determina por sí sola si tu decisión era adecuada»."
        },
        {
          "id": "2",
          "option": "Quiero expresar lo que necesito.",
          "title": "Un espacio entre las ramas",
          "text": "«Quizá puedas decir: “Os quiero, pero necesito un poco de tiempo para mí”. No podemos controlar cómo recibirán esas palabras. Pero sí podemos intentar expresarlas con claridad, cuando hacerlo sea seguro y tú quieras»."
        },
        {
          "id": "3",
          "option": "Quiero dejar de sentirme responsable de todo.",
          "title": "El peso de las raíces",
          "text": "«Hay responsabilidades que nos corresponden y otras que hemos cargado durante tanto tiempo que parecen nuestras. Podemos empezar a distinguirlas. Cuidar a los demás es valioso, cariño, pero tú también formas parte de las personas que merecen cuidado»."
        },
        {
          "id": "4",
          "option": "Hoy prefiero no tomar ninguna decisión.",
          "title": "La sombra amable",
          "text": "«Entonces no decidamos nada hoy. Puedes querer a tu familia y necesitar silencio al mismo tiempo. Quédate aquí un ratito, bajo este árbol. No tienes que resolver todos tus vínculos antes de permitirte descansar»."
        }
      ],
      "sourceParagraph": 30,
      "approved": true
    },
    {
      "id": "01-N03",
      "scene": "01",
      "title": "Hay algo que nunca me atreví a decir",
      "sceneDescription": "Alma se detiene junto a una pequeña cavidad del árbol. Dentro hay hojas antiguas, algunas dobladas, otras todavía intactas.",
      "entry": "«Mira, cariño… Este árbol guarda hojas de muchas estaciones.\nAlgunas cayeron cuando les tocaba. Otras se quedaron prendidas a sus ramas mucho más tiempo.\nCon las palabras pasa algo parecido.\nHay cosas que nunca dijimos porque teníamos miedo. O porque no encontramos el momento. Y otras que callamos porque, entonces, guardar silencio era la mejor manera que conocíamos de protegernos.\nNo voy a decirte que tengas que sacarlas todas.\nPero, si te apetece, podemos mirar alguna de ellas juntos.\nSin prisas. Y sin que nadie tenga que escucharla, salvo tú».",
      "question": "¿Qué clase de palabras llevas guardadas?",
      "responses": [
        {
          "id": "A",
          "option": "Nunca dije cuánto quería a esa persona.",
          "text": "«Ay, cariño… A veces damos por hecho que las personas saben lo que sentimos. Y otras veces nos cuesta encontrar la manera de decirlo. Que no lo hayas expresado con palabras no significa que ese cariño no haya existido»."
        },
        {
          "id": "B",
          "option": "Hay algo que me dolió y nunca pude explicar.",
          "text": "«Hay heridas que tardamos mucho en comprender, y todavía más en saber nombrar. No necesitas convencer a nadie de que aquello te dolió para reconocer lo que sentiste»."
        },
        {
          "id": "C",
          "option": "Quise pedir perdón, pero no me atreví.",
          "text": "«Reconocer algo que lamentamos puede ser difícil. Podemos mirar lo ocurrido con responsabilidad y también con comprensión hacia quien eras entonces. Y recuerda: pedir perdón no garantiza una respuesta, ni obliga a nadie a reconciliarse»."
        },
        {
          "id": "D",
          "option": "Ni siquiera sé cómo empezar a decirlo.",
          "text": "«Pues podemos empezar sin palabras perfectas. A veces basta con reconocer: “Hay algo que llevo tiempo guardando”. No hace falta ordenar toda una vida para comprender un sentimiento»."
        }
      ],
      "transition": "Alma recoge una hoja caída y la sostiene entre sus manos.\n«¿Sabes una cosa? Una palabra no pierde su valor porque todavía no haya encontrado a quién llegar.\nY tampoco todas las palabras necesitan salir de aquí.\n¿Qué te gustaría hacer con las tuyas?».",
      "secondQuestion": "¿Qué te gustaría hacer con las tuyas?",
      "outcomes": [
        {
          "id": "1",
          "option": "Quiero escribirlo, aunque nadie lo lea.",
          "title": "La carta que no necesita destino",
          "text": "«Entonces escribe para ti, cariño. Puedes empezar con “Nunca te dije…” y dejar que aparezca lo que tenga que aparecer. No necesitas enviarlo ni conservarlo. Tú decides qué hacer con esas palabras»."
        },
        {
          "id": "2",
          "option": "Quiero encontrar una forma de expresarlo.",
          "title": "La primera palabra",
          "text": "«Quizá puedas comenzar con una frase sencilla: “Hay algo que me gustaría contarte, si podemos hablar con calma”. Antes de compartirla, piensa si hacerlo es seguro y si realmente lo deseas. La otra persona puede responder de muchas maneras, y ninguna de ellas borra el valor de lo que has intentado expresar»."
        },
        {
          "id": "3",
          "option": "Quiero comprender por qué lo callé.",
          "title": "El silencio de entonces",
          "text": "«A veces callamos por miedo, por lealtad, por no hacer daño o porque no teníamos recursos para afrontar lo que ocurría. Puedes mirar aquel silencio con curiosidad, sin castigarte por no haber sabido actuar de otra manera. Quizá entonces estabas haciendo lo que podías»."
        },
        {
          "id": "4",
          "option": "Prefiero guardar esas palabras por ahora.",
          "title": "La hoja que permanece",
          "text": "«Entonces dejémoslas descansar, cariño. No todo lo que sentimos necesita convertirse en una conversación. Puedes volver a esas palabras cuando quieras, o decidir no hacerlo. Tu historia también te pertenece cuando eliges guardarla»."
        }
      ],
      "sourceParagraph": 32,
      "approved": true
    },
    {
      "id": "01-N04",
      "scene": "01",
      "title": "Me gustaría recuperar un vínculo, pero no sé cómo",
      "sceneDescription": "Alma se acerca a dos ramas que crecieron separadas. Entre ellas, un pequeño rayo de sol ilumina el tronco.",
      "entry": "«Mira esas dos ramas, cariño…\nHubo un tiempo en que crecían muy cerquita. Ahora cada una mira hacia un lado diferente.\nY, sin embargo, las dos siguen teniendo su propia historia.\nA veces nos gustaría volver a acercarnos a alguien, pero no sabemos cómo hacerlo.\nQuizá tememos que las cosas hayan cambiado demasiado. Quizá no sabemos qué decir. O quizá una parte de nosotros desea acercarse mientras otra todavía necesita protegerse.\nNo vamos a decidir por nadie ni a buscar culpables.\nVamos a escuchar qué significa para ti ese deseo de recuperar el vínculo.\nPorque querer acercarse es una posibilidad, cariño. Nunca una obligación».",
      "question": "¿Qué es lo que más te preocupa al pensar en recuperar esa relación?",
      "responses": [
        {
          "id": "A",
          "option": "Tengo miedo de que esa persona me rechace.",
          "text": "«Ay, cariño… Cuando alguien nos importa, imaginar que quizá no quiera acercarse puede doler mucho. No podemos elegir su respuesta, pero sí podemos cuidar cómo nos preparamos para cualquiera de las posibilidades»."
        },
        {
          "id": "B",
          "option": "Ha pasado tanto tiempo que no sé por dónde empezar.",
          "text": "«El tiempo puede hacernos sentir que necesitamos encontrar palabras extraordinarias. Pero no siempre es así. A veces basta una frase sencilla. Y otras veces necesitamos seguir pensando antes de dar ese paso»."
        },
        {
          "id": "C",
          "option": "Tengo miedo de que volvamos a hacernos daño.",
          "text": "«Ese miedo merece que lo escuchemos, cariño. Echar de menos a alguien no significa que debamos volver a una situación que nos hizo daño. Podemos pensar en tu bienestar y tu seguridad antes de considerar cualquier acercamiento»."
        },
        {
          "id": "D",
          "option": "No sé si realmente quiero recuperar la relación.",
          "text": "«Pues no necesitas tenerlo claro ahora. A veces echamos de menos lo que una relación fue, pero no sabemos si queremos que vuelva a ser parte de nuestra vida. Podemos explorar esa diferencia sin apresurarnos»."
        }
      ],
      "transition": "Alma se sienta bajo el árbol y deja su farolillo junto a ella.\n«¿Sabes qué he aprendido de los árboles?\nQue no podemos tirar de una rama para obligarla a crecer hacia nosotros.\nCon las personas ocurre algo parecido.\nPodemos ofrecer una posibilidad, pero no decidir qué hará la otra persona con ella.\n¿Qué te gustaría hacer ahora?».",
      "secondQuestion": "¿Qué te gustaría hacer ahora?",
      "outcomes": [
        {
          "id": "1",
          "option": "Quiero imaginar un primer acercamiento.",
          "title": "Una pequeña señal",
          "text": "«Si acercarte es seguro y tú lo deseas, podrías pensar en un mensaje sencillo: “Hola, me he acordado de ti y quería saber cómo estás”.\nNo necesitas enviarlo hoy. Ni mañana.\nY recuerda, cariño: ofrecer una oportunidad no significa exigir una respuesta»."
        },
        {
          "id": "2",
          "option": "Quiero comprender qué tendría que cambiar.",
          "title": "Las raíces que necesitan espacio",
          "text": "«Quizá puedas preguntarte qué necesitarías para sentirte tranquilo en esa relación.\n¿Más respeto? ¿Límites claros? ¿Una manera diferente de hablaros?\nRecuperar un vínculo no tiene por qué significar volver exactamente a lo que había antes. Y si no existen condiciones seguras, también puedes elegir no retomarlo»."
        },
        {
          "id": "3",
          "option": "Quiero aceptar que quizá no vuelva a ser como antes.",
          "title": "Las ramas que cambiaron",
          "text": "«Ay, cariño… Las personas cambiamos, incluso cuando nos queremos.\nQuizá esa relación encuentre una forma nueva. Quizá no vuelva a existir como la recuerdas.\nPuedes sentir tristeza por lo que cambió y, al mismo tiempo, dejar espacio para lo que venga.\nNo tienes que llamar fracaso a una historia porque haya tomado otro rumbo»."
        },
        {
          "id": "4",
          "option": "Prefiero cuidar de mí antes de decidir.",
          "title": "El árbol que espera",
          "text": "«Entonces hagamos precisamente eso.\nNo tienes que resolver hoy una historia que quizá lleva años creciendo dentro de ti.\nPuedes descansar, hablar con alguien de confianza o simplemente dedicarte un poquito de tiempo.\nY si algún día decides volver a mirar ese vínculo, aquí seguirá este árbol.\nSin prisas, cariño. Sin prisas»."
        }
      ],
      "sourceParagraph": 34,
      "approved": true
    },
    {
      "id": "02-N01",
      "scene": "02",
      "title": "Parece que hablamos idiomas diferentes",
      "sceneDescription": "Alma camina por un sendero donde crecen árboles jóvenes junto a otros centenarios. Se detiene ante dos ramas que se cruzan sin llegar a tocarse. Su farolillo ilumina suavemente el camino.",
      "entry": "«Ay, cariño… ¿Ves esos dos árboles?\nUno lleva aquí tantos años que ha visto pasar innumerables estaciones. El otro acaba de empezar a descubrir el mundo.\nY, sin embargo, los dos necesitan luz, agua y un lugar donde crecer.\nCon las generaciones ocurre algo parecido.\nA veces hablamos con nuestros padres, nuestros hijos o nuestros abuelos y parece que utilizamos idiomas distintos.\nCada uno mira la vida desde lo que ha aprendido, desde lo que ha vivido y también desde lo que le ha tocado superar.\nPero comprender a alguien no significa que tengamos que pensar igual.\nVen, vamos a descubrir qué es lo que más te cuesta de esas diferencias».",
      "question": "¿En qué momentos sientes que habláis idiomas diferentes?",
      "responses": [
        {
          "id": "A",
          "option": "Cuando hablamos de cómo deberían hacerse las cosas.",
          "text": "«Ay, cariño… Hay costumbres que aprendemos tan profundamente que terminamos creyendo que son la única manera de hacer algo. Podemos escuchar por qué alguien piensa así sin renunciar a nuestras propias ideas»."
        },
        {
          "id": "B",
          "option": "Cuando intento explicar cómo me siento.",
          "text": "«A veces las personas que queremos no han aprendido a hablar de sus emociones de la misma manera que nosotros. Eso puede hacernos sentir muy solos. Tus sentimientos merecen ser escuchados, aunque alguien todavía no sepa comprenderlos»."
        },
        {
          "id": "C",
          "option": "Cuando juzgan decisiones que para mí son importantes.",
          "text": "«Duele sentir que alguien querido no comprende nuestras elecciones. Podemos intentar explicar lo que significan para nosotros, cariño, pero recuerda que no necesitas conseguir su aprobación para reconocer el valor de tus decisiones»."
        },
        {
          "id": "D",
          "option": "Cuando siento que nadie escucha realmente al otro.",
          "text": "«Ay, cariño… A veces estamos tan ocupados preparando nuestra respuesta que olvidamos escuchar. Podemos intentar cambiar nuestra manera de conversar, aunque escuchar de verdad es una responsabilidad que también corresponde a los demás»."
        }
      ],
      "transition": "Alma recoge dos hojas del suelo. Una es grande y oscura; la otra, pequeña y de un verde luminoso.\nAlma:\n«Mira estas hojas, cariño.\nSon diferentes, pero las dos pertenecen al mismo bosque.\nNo necesitamos convertir una en la otra.\nA veces basta con encontrar una forma de escucharnos sin intentar ganar una discusión.\n¿Qué te gustaría probar ahora?».",
      "secondQuestion": "¿Qué te gustaría probar ahora?",
      "outcomes": [
        {
          "id": "1",
          "option": "Quiero comprender mejor su manera de pensar.",
          "title": "La historia detrás de las palabras",
          "text": "«Quizá puedas preguntar qué experiencias le llevaron a pensar de esa manera. No para darle la razón automáticamente, sino para conocer un poquito mejor su historia. A veces comprender de dónde viene una idea nos ayuda a conversar con menos distancia»."
        },
        {
          "id": "2",
          "option": "Quiero explicar mi punto de vista sin discutir.",
          "title": "Mi voz también tiene un lugar",
          "text": "«Puedes intentar hablar desde tu experiencia: “Yo lo veo de otra manera porque para mí significa esto”. No necesitas convencer a nadie en una sola conversación. Y si aparecen los reproches, también puedes detenerte y continuar otro día»."
        },
        {
          "id": "3",
          "option": "Quiero aceptar que podemos pensar diferente.",
          "title": "Dos árboles, un mismo bosque",
          "text": "«Ay, cariño… No todas las diferencias necesitan resolverse. Podemos respetar algunas opiniones distintas y mantener nuestros propios valores. Eso sí, aceptar una diferencia no significa tolerar faltas de respeto ni situaciones que nos hagan daño»."
        },
        {
          "id": "4",
          "option": "Hoy prefiero descansar de estas conversaciones.",
          "title": "Un silencio entre generaciones",
          "text": "«Entonces descansemos. No tienes que explicar una vez más lo que piensas ni intentar que todos se comprendan hoy. A veces necesitamos alejarnos un poquito del ruido para volver a escuchar nuestra propia voz»."
        }
      ],
      "sourceParagraph": 36,
      "approved": true
    },
    {
      "id": "02-N02",
      "scene": "02",
      "title": "Quiero que comprendan mis decisiones",
      "sceneDescription": "Alma se detiene junto a una bifurcación del sendero. Un camino sigue entre árboles antiguos; el otro atraviesa un bosque más joven. La abuelita apoya su farolillo sobre una piedra y contempla ambos.",
      "entry": "«Ay, cariño… ¿Ves estos dos caminos?\nDurante muchos años, algunas personas han recorrido siempre el mismo. Conocen sus curvas, sus piedras y hasta dónde da la sombra.\nY cuando alguien querido decide tomar otro, pueden preocuparse, sorprenderse o intentar convencerlo de que regrese.\nCon nuestras familias pasa algo parecido.\nA veces elegimos una profesión, una pareja, una forma de vivir o un futuro diferente del que otros imaginaron para nosotros.\nY duele cuando las personas que queremos no consiguen comprenderlo.\nPero escucha una cosita, cariño: puedes valorar sus experiencias sin entregarles todas tus decisiones.\nVen, vamos a mirar qué es lo que más te está pesando».",
      "question": "¿Qué te duele más cuando tu familia no comprende tus decisiones?",
      "responses": [
        {
          "id": "A",
          "option": "Siento que no confían en mi capacidad para decidir.",
          "text": "«Ay, cariño… Cuando alguien cuestiona constantemente nuestras elecciones, podemos empezar a dudar de nosotros mismos. Escuchar consejos puede ser útil, pero también necesitas espacio para aprender, equivocarte y construir tu propio criterio»."
        },
        {
          "id": "B",
          "option": "Tengo miedo de decepcionar a las personas que quiero.",
          "text": "«A veces llevamos dentro las expectativas de nuestra familia como si fueran una mochila. Y algunas pesan mucho. Puedes quererlos profundamente y, aun así, elegir una vida diferente de la que imaginaron para ti»."
        },
        {
          "id": "C",
          "option": "Me comparan con otras personas o con cómo se hacían las cosas antes.",
          "text": "«Ay, las comparaciones… A veces olvidamos que cada persona vive circunstancias distintas. Tu camino no tiene que parecerse al de tus hermanos, tus padres o quienes vinieron antes para tener valor»."
        },
        {
          "id": "D",
          "option": "Estoy cansado de tener que justificar cada elección.",
          "text": "«Explicarnos una y otra vez puede agotarnos, cariño. No todas las decisiones necesitan convertirse en un debate familiar. Podemos pensar cuáles deseas compartir, cuáles requieren acuerdos y cuáles pertenecen a tu espacio personal»."
        }
      ],
      "transition": "Alma recoge una pequeña piedra del sendero y la coloca cuidadosamente junto a otras que señalan una dirección.\n«Mira, cariño…\nEstas piedras pueden ayudarnos a encontrar un camino, pero no pueden recorrerlo por nosotros.\nLas experiencias de nuestra familia también pueden orientarnos.\nY aun así, habrá decisiones que tendremos que tomar desde nuestra propia vida.\n¿Qué te gustaría intentar ahora?».",
      "secondQuestion": "¿Qué te gustaría intentar ahora?",
      "outcomes": [
        {
          "id": "1",
          "option": "Quiero explicar mejor por qué he tomado esta decisión.",
          "title": "Las razones de mi camino",
          "text": "«Si te apetece y es seguro hacerlo, quizá puedas compartir qué es importante para ti y qué esperas de tu elección. No necesitas preparar una defensa perfecta. Puedes explicar tus razones sin prometer que cambiarás de opinión para tranquilizar a los demás»."
        },
        {
          "id": "2",
          "option": "Quiero aprender a escuchar consejos sin sentirme obligado a seguirlos.",
          "title": "Escuchar sin entregar el timón",
          "text": "«Puedes agradecer una preocupación sincera y después preguntarte qué parte de ese consejo te resulta útil. Escuchar no significa obedecer, cariño. También puedes reconocer que alguien tiene buenas intenciones y decidir de otra manera»."
        },
        {
          "id": "3",
          "option": "Quiero dejar de buscar aprobación para cada paso.",
          "title": "Mis propios pasos",
          "text": "«Quizá puedas empezar con una decisión pequeña que te corresponda tomar. Escucha tus necesidades, valora las consecuencias y date permiso para elegir. La confianza en nuestro criterio también se construye practicando, cariño»."
        },
        {
          "id": "4",
          "option": "Hoy necesito descansar de las expectativas familiares.",
          "title": "Una pausa en el sendero",
          "text": "«Entonces dejemos las decisiones a un lado un ratito. No tienes que convencer a nadie hoy ni resolver todas las diferencias. Puedes descansar, respirar y recordar que tu vida también merece un espacio propio»."
        }
      ],
      "sourceParagraph": 38,
      "approved": true
    },
    {
      "id": "02-N03",
      "scene": "02",
      "title": "Me cuesta aceptar que estamos cambiando",
      "sceneDescription": "Alma camina despacio junto a un árbol centenario. Algunas de sus ramas han perdido hojas y otras muestran pequeños brotes nuevos. La abuelita acaricia la corteza y observa el sendero que se extiende ante ella.",
      "entry": "«Ay, cariño… Mira este árbol.\nLleva tantos años aquí que el bosque ha cambiado a su alrededor.\nHubo un tiempo en que sus ramas eran pequeñas. Después crecieron, dieron sombra y acogieron a otros árboles.\nY ahora algunas se mueven de otra manera cuando sopla el viento.\nCon nuestras familias también pasa.\nLos hijos crecen, los padres envejecen, nuestras fuerzas cambian y los papeles que conocíamos dejan de ser exactamente los mismos.\nA veces esos cambios nos alegran. Otras veces nos producen una tristeza difícil de explicar.\nNo tenemos que acostumbrarnos a todo inmediatamente.\nVen, vamos a descubrir qué cambio te está costando aceptar».",
      "question": "¿Qué cambio familiar te está resultando más difícil de vivir?",
      "responses": [
        {
          "id": "A",
          "option": "Me cuesta ver cómo mis padres o familiares mayores envejecen.",
          "text": "«Ay, cariño… Ver que alguien que siempre nos pareció fuerte empieza a necesitar ayuda puede despertar muchas emociones. Podemos sentir ternura, preocupación o miedo. Y no tienes que esconder esos sentimientos para demostrar cuánto le quieres»."
        },
        {
          "id": "B",
          "option": "Mis hijos o familiares jóvenes ya no me necesitan como antes.",
          "text": "«Cuando alguien a quien hemos cuidado empieza a caminar por su cuenta, podemos alegrarnos por su independencia y echar de menos nuestra antigua cercanía. Ambas cosas pueden convivir, cariño. Tu lugar en su vida quizá esté cambiando, pero eso no borra lo compartido»."
        },
        {
          "id": "C",
          "option": "Siento que ya no soy la misma persona dentro de mi familia.",
          "text": "«Ay, cariño… Nosotros también cambiamos. A veces tenemos menos energía, nuevas responsabilidades o deseos que antes no conocíamos. No necesitas seguir interpretando exactamente el mismo papel para continuar siendo una parte valiosa de tu familia»."
        },
        {
          "id": "D",
          "option": "Echo de menos cómo era nuestra familia hace unos años.",
          "text": "«Hay etapas que recordamos con muchísimo cariño. Podemos echarlas de menos sin negar el presente. Y tampoco tienes que obligarte a encontrar algo positivo en cada cambio. Algunas despedidas, incluso las pequeñas, necesitan tiempo»."
        }
      ],
      "transition": "Alma recoge una hoja caída y la sostiene junto a un pequeño brote verde.\n«Mira, cariño…\nEsta hoja formó parte del árbol durante una estación.\nY ese brotecito está comenzando la suya.\nNinguno necesita quitarle valor al otro.\nPodemos querer lo que fuimos y, al mismo tiempo, aprender a vivir lo que somos ahora.\n¿Qué te gustaría cuidar en este momento?».",
      "secondQuestion": "¿Qué te gustaría cuidar en este momento?",
      "outcomes": [
        {
          "id": "1",
          "option": "Quiero recordar con cariño lo que hemos vivido.",
          "title": "Las estaciones compartidas",
          "text": "«Quizá puedas recuperar una fotografía, una conversación o una costumbre que te haga sonreír. No para quedarte atrapado en el pasado, sino para reconocer lo que esa etapa significó para ti. Los recuerdos también pueden acompañarnos mientras la vida cambia»."
        },
        {
          "id": "2",
          "option": "Quiero encontrar una manera nueva de estar cerca.",
          "title": "Otra forma de acompañarnos",
          "text": "«Tal vez podáis descubrir pequeños momentos que encajen con vuestra situación actual: una llamada, un paseo tranquilo o una conversación sin expectativas. No tiene que ser como antes para que pueda tener valor, cariño»."
        },
        {
          "id": "3",
          "option": "Quiero aceptar mis propios cambios con más amabilidad.",
          "title": "Mi estación también importa",
          "text": "«Puedes observar qué necesitas hoy sin compararte constantemente con quien eras hace años. Cambiar no significa necesariamente perder lo que te hace ser tú. Y si algunas cosas te duelen, merecen atención, no reproches»."
        },
        {
          "id": "4",
          "option": "Hoy solo necesito tiempo para asimilarlo.",
          "title": "El árbol que espera",
          "text": "«Entonces date ese tiempo, cariño. No tienes que celebrar cada cambio ni comprenderlo todo esta tarde. Podemos quedarnos aquí un ratito, escuchando las hojas. Algunas cosas necesitan espacio antes de encontrar sus palabras»."
        }
      ],
      "sourceParagraph": 40,
      "approved": true
    },
    {
      "id": "02-N04",
      "scene": "02",
      "title": "Quiero aprender de ellos sin dejar de ser yo",
      "sceneDescription": "Alma se detiene donde dos senderos se encuentran. Uno está rodeado de árboles antiguos; el otro, de brotes jóvenes. Entre ambos crecen flores de distintos colores. La abuelita levanta suavemente su farolillo.",
      "entry": "«Ay, cariño… Mira este rincón del bosque.\nHay árboles que llevan aquí muchísimos años y otros que apenas están descubriendo cómo crecer.\nLos más antiguos han resistido tormentas que los pequeños todavía no conocen.\nPero los jóvenes también encuentran maneras nuevas de buscar la luz.\nCon las generaciones pasa algo parecido.\nPodemos aprender de quienes vivieron antes que nosotros y también de quienes están llegando después.\nEscuchar sus experiencias no significa que tengamos que vivir exactamente como ellos.\nY compartir lo que sabemos tampoco significa que los demás tengan que seguir nuestros pasos.\nVen, cariño. Vamos a descubrir qué te gustaría aprender sin dejar de ser tú».",
      "question": "¿Qué te cuesta más cuando intentas aprender de otras generaciones?",
      "responses": [
        {
          "id": "A",
          "option": "A veces siento que sus consejos no encajan con mi vida.",
          "text": "«Ay, cariño… Un consejo puede nacer del cariño y, aun así, no servirnos en nuestras circunstancias. Puedes agradecer la intención, escuchar lo que te resulte útil y dejar a un lado lo que no encaje contigo»."
        },
        {
          "id": "B",
          "option": "Me cuesta escuchar cuando siento que me están juzgando.",
          "text": "«Cuando una conversación viene acompañada de reproches, es difícil abrir el corazón. No tienes que aceptar palabras que te hagan daño para demostrar respeto. Podemos buscar momentos y maneras de hablar que cuiden también tu dignidad»."
        },
        {
          "id": "C",
          "option": "Tengo miedo de perder mis propias ideas si cedo demasiado.",
          "text": "«Ay, cariño… Escuchar no significa desaparecer. Puedes cambiar de opinión cuando algo te convenza y mantenerte firme cuando no. Aprender también consiste en decidir qué deseas conservar de ti mismo»."
        },
        {
          "id": "D",
          "option": "Me gustaría que también valoraran lo que yo puedo enseñarles.",
          "text": "«Claro que sí, cariño. La experiencia no pertenece solamente a quienes tienen más años. Cada generación descubre cosas distintas. Puedes ofrecer tu mirada sin convertir la conversación en una competición por demostrar quién sabe más»."
        }
      ],
      "transition": "Alma observa cómo una flor pequeña crece protegida por la sombra de un árbol antiguo, mientras un rayo de sol ilumina sus pétalos.\n«¿Ves esa florecita, cariño?\nEl árbol le ofrece sombra cuando el sol aprieta.\nY ella, con sus colores, hace que este rincón del bosque sea diferente.\nNinguno necesita convertirse en el otro.\nQuizá las generaciones podamos acompañarnos de una manera parecida.\n¿Qué te gustaría intentar ahora?».",
      "secondQuestion": "¿Qué te gustaría intentar ahora?",
      "outcomes": [
        {
          "id": "1",
          "option": "Quiero escuchar sus experiencias con más curiosidad.",
          "title": "Historias que nos enseñan",
          "text": "«Quizá puedas preguntar cómo vivieron alguna situación parecida a la tuya. No necesitas repetir sus decisiones, cariño. A veces conocer otra historia nos ayuda a descubrir posibilidades que todavía no habíamos considerado»."
        },
        {
          "id": "2",
          "option": "Quiero compartir mi manera de ver el mundo.",
          "title": "Mi voz entre las generaciones",
          "text": "«Puedes contar qué has aprendido, qué te ilusiona o por qué algunas cosas son importantes para ti. No necesitas convertirlo en una lección. Compartir tu mirada también puede ser una invitación a conoceros mejor»."
        },
        {
          "id": "3",
          "option": "Quiero conservar lo valioso de mi familia y elegir mi propio camino.",
          "title": "Raíces y alas",
          "text": "«Ay, cariño… Puedes guardar las enseñanzas que te han ayudado y dejar atrás aquellas que ya no deseas repetir. Honrar una historia familiar no significa vivirla exactamente igual. También puedes escribir tus propias páginas»."
        },
        {
          "id": "4",
          "option": "Hoy prefiero disfrutar de nuestras diferencias sin resolverlas.",
          "title": "Un bosque de muchas edades",
          "text": "«Entonces disfrutemos de este bosque, cariño. No todas las conversaciones tienen que terminar en un acuerdo. A veces basta con compartir un momento, una sonrisa o una historia, respetando que cada persona tiene su propia manera de mirar la vida»."
        }
      ],
      "sourceParagraph": 42,
      "approved": true
    },
    {
      "id": "03-N01",
      "scene": "03",
      "title": "Hay un recuerdo que todavía me hace sonreír",
      "sceneDescription": "Alma se acomoda en el banco de madera. La luz de su farolillo ilumina unas fotografías antiguas que descansan a su lado. Una brisa suave mueve las hojas del bosque.",
      "entry": "«Ay, cariño… Hay recuerdos que llegan sin avisar y nos dibujan una sonrisa.\nA veces es una tarde de verano, una comida familiar, una voz que todavía recordamos con claridad o alguna travesura que nos hizo reír muchísimo.\nY qué curioso, ¿verdad? Puede que hayan pasado muchos años, pero durante un instante sentimos que estamos allí otra vez.\nNo hace falta que ese recuerdo sea perfecto. Ni siquiera que toda aquella época fuera feliz.\nPodemos guardar un momento bonito sin tener que convertirlo en algo más.\nVen, cariño. Vamos a descubrir qué tiene de especial ese recuerdo para ti».",
      "question": "¿Qué es lo que más te hace sonreír cuando recuerdas aquel momento?",
      "responses": [
        {
          "id": "A",
          "option": "Recordar a una persona con la que compartí algo bonito.",
          "text": "«Ay, cariño… Hay personas que dejan pequeños regalos en nuestra memoria: una forma de reír, una mirada, una frase que repetían siempre. Aunque nuestra relación haya cambiado o esa persona ya no esté, podemos conservar lo bonito que compartimos»."
        },
        {
          "id": "B",
          "option": "Recordar una época en la que me sentía especialmente feliz.",
          "text": "«Hay etapas que recordamos con mucho cariño. Quizá entonces teníamos otras preocupaciones, otros sueños o una manera diferente de mirar el mundo. Podemos disfrutar de ese recuerdo sin exigirle al presente que se parezca a él»."
        },
        {
          "id": "C",
          "option": "Recordar algo divertido que vivimos juntos.",
          "text": "«¡Ay, esas historias! Algunas se vuelven más divertidas cada vez que las contamos. Una pequeña travesura, un despiste o una situación inesperada… A veces una sonrisa aparece simplemente porque recordamos lo bien que lo pasamos»."
        },
        {
          "id": "D",
          "option": "No sé exactamente por qué me hace sonreír.",
          "text": "«Pues no hace falta descubrirlo, cariño. A veces un olor, una canción o una imagen despiertan algo agradable que no sabemos explicar. Podemos disfrutarlo sin buscarle una razón»."
        }
      ],
      "transition": "Alma toma una fotografía, la contempla con una sonrisa y vuelve a dejarla cuidadosamente sobre el banco.\nAlma:\n«¿Sabes una cosa, cariño?\nLos recuerdos bonitos no tienen que convertirse en una lección ni en una tarea.\nA veces basta con permitirnos disfrutarlos.\nY otras veces nos apetece compartirlos, escribirlos o descubrir qué significan para nosotros.\n¿Qué te gustaría hacer con ese recuerdo?».",
      "secondQuestion": "¿Qué te gustaría hacer con ese recuerdo?",
      "outcomes": [
        {
          "id": "1",
          "option": "Quiero quedarme un ratito disfrutándolo.",
          "title": "Una sonrisa que acompaña",
          "text": "«Entonces quedémonos aquí, cariño. Puedes recordar aquella voz, aquella risa o aquel pequeño instante todo el tiempo que quieras. No tenemos que hacer nada más. Hay momentos que merecen simplemente ser recordados»."
        },
        {
          "id": "2",
          "option": "Me gustaría compartirlo con alguien.",
          "title": "Una historia que vuelve a vivir",
          "text": "«Quizá puedas contarle esa anécdota a alguien que también la recuerde o a una persona con quien te apetezca compartirla. Y si prefieres guardarla para ti, también está bien. Algunos recuerdos encuentran compañía al contarse; otros la encuentran en nuestro silencio»."
        },
        {
          "id": "3",
          "option": "Quiero escribirlo para no olvidarlo.",
          "title": "Un recuerdo entre palabras",
          "text": "«Puedes escribir unas líneas en tus notas personales. No necesitas recordar todos los detalles ni encontrar palabras especiales. A veces basta con escribir: “Aquel día me sentí feliz”. Y dejar que esa pequeña frase conserve lo que significa para ti»."
        },
        {
          "id": "4",
          "option": "Quiero recordar algo bonito y después continuar.",
          "title": "La luz que llevamos con nosotros",
          "text": "«Ay, cariño… Podemos levantarnos de este banco llevando una sonrisa en la memoria. No hace falta quedarnos en el pasado para querer lo que vivimos. Ese recuerdo puede acompañarte mientras descubres lo que trae este nuevo día»."
        }
      ],
      "sourceParagraph": 44,
      "approved": true
    },
    {
      "id": "03-N02",
      "scene": "03",
      "title": "Echo de menos una época de mi vida",
      "sceneDescription": "Alma permanece sentada en el banco. A su alrededor, el bosque parece guardar recuerdos de distintas estaciones: hojas doradas, flores pequeñas y ramas que empiezan a despertar. La abuelita contempla el sendero con una sonrisa serena.",
      "entry": "«Ay, cariño… A veces creemos que echamos de menos un lugar o a una persona, pero cuando miramos un poquito más adentro descubrimos que también echamos de menos una época de nuestra vida.\nQuizá aquellos veranos en los que toda la familia se reunía. O cuando la casa estaba llena de voces. O esos años en los que teníamos otras preocupaciones y el mundo parecía diferente.\nY qué curioso… A veces no queremos regresar exactamente a aquellos días. Lo que echamos de menos es cómo nos sentíamos entonces.\nNo voy a decirte que cualquier tiempo pasado fue mejor. Ni tampoco que debas dejar de mirar atrás.\nPodemos escuchar esa nostalgia sin permitir que decida por nosotros cómo tiene que ser nuestro presente.\nVen, cariño. Vamos a descubrir qué es lo que más echas de menos».",
      "question": "¿Qué es lo que más echas de menos de aquella etapa?",
      "responses": [
        {
          "id": "A",
          "option": "Cómo nos reuníamos y compartíamos tiempo en familia.",
          "text": "«Ay, cariño… Hay mesas que recordamos llenas de conversaciones y casas donde siempre parecía haber alguien esperando. Cuando esas costumbres cambian, podemos sentir que falta algo importante. Y no hace falta restarle valor a esa ausencia»."
        },
        {
          "id": "B",
          "option": "La persona que yo era en aquellos años.",
          "text": "«A veces echamos de menos nuestra propia manera de vivir: la energía que teníamos, nuestros sueños o la sensación de que todo estaba por descubrir. Podemos recordar a aquella persona con cariño sin exigirnos volver a ser exactamente iguales»."
        },
        {
          "id": "C",
          "option": "La tranquilidad o la seguridad que sentía entonces.",
          "text": "«Hay etapas que recordamos como un refugio, cariño. Quizá no todo fuera sencillo, pero había algo que nos hacía sentir protegidos. Podemos preguntarnos qué significaba aquella tranquilidad para ti, sin compararla injustamente con tu vida de hoy»."
        },
        {
          "id": "D",
          "option": "No sé qué echo de menos; solo sé que las cosas ya no son iguales.",
          "text": "«Ay, cariño… A veces los cambios llegan poco a poco y un día descubrimos que nuestra vida es distinta. No tienes que ponerle nombre a todo lo que sientes. Podemos reconocer esa nostalgia sin obligarte a encontrar una explicación»."
        }
      ],
      "transition": "Alma recoge una hoja dorada del banco y la coloca junto a una flor que acaba de caer de una rama.\nAlma:\n«Mira estas dos pequeñas cosas, cariño.\nUna pertenece a una estación que ya pasó. La otra acaba de llegar.\nNinguna necesita borrar a la otra.\nCon nuestras etapas ocurre algo parecido.\nPodemos querer profundamente lo que vivimos sin decidir que todo lo bueno quedó atrás.\n¿Qué te gustaría hacer con esa nostalgia?».",
      "secondQuestion": "¿Qué te gustaría hacer con esa nostalgia?",
      "outcomes": [
        {
          "id": "1",
          "option": "Quiero recordar lo que aquella etapa significó para mí.",
          "title": "La estación que guardamos",
          "text": "«Quizá puedas pensar en una costumbre, un lugar o una persona que hizo especial aquel tiempo. No necesitas reconstruirlo entero. A veces reconocer lo que significó para nosotros ya es una forma de darle un lugar en nuestra historia»."
        },
        {
          "id": "2",
          "option": "Quiero recuperar algo pequeño de aquella época, si es posible.",
          "title": "Un gesto que vuelve",
          "text": "«Tal vez haya una canción que puedas escuchar, una receta que te apetezca preparar o una tradición que quieras compartir de otra manera. No será exactamente como antes, cariño, y tampoco tiene que serlo. Puedes recuperar un gesto sin exigirle que devuelva toda una época»."
        },
        {
          "id": "3",
          "option": "Quiero descubrir qué necesito en mi vida de ahora.",
          "title": "Lo que aquella nostalgia me cuenta",
          "text": "«A veces echar de menos una etapa nos ayuda a reconocer algo que valorábamos: compañía, tranquilidad, tiempo compartido o libertad. Si te apetece, puedes preguntarte si alguna de esas necesidades merece más espacio en tu presente. No tienes que resolverlo hoy»."
        },
        {
          "id": "4",
          "option": "Hoy prefiero quedarme un ratito con esa nostalgia.",
          "title": "Un banco entre estaciones",
          "text": "«Entonces quedémonos aquí, cariño. No tenemos que convertir cada recuerdo en una decisión. Puedes echar de menos lo que fue y descansar un momento. El bosque seguirá aquí cuando te apetezca levantarte»."
        }
      ],
      "sourceParagraph": 46,
      "approved": true
    },
    {
      "id": "03-N03",
      "scene": "03",
      "title": "Hay recuerdos que todavía me duelen",
      "sceneDescription": "Alma se sienta en un banco de madera junto a un pequeño estanque. Su farolillo descansa a su lado. Sobre el agua flotan algunas hojas, mientras el bosque permanece tranquilo.",
      "entry": "«Ay, cariño… Hay recuerdos que llegan como una caricia.\nY otros que, aunque hayan pasado muchos años, todavía nos aprietan un poquito el corazón.\nA veces recordamos unas palabras que nos hicieron daño. O un momento que desearíamos haber vivido de otra manera.\nY hay recuerdos que simplemente duelen, sin que sepamos muy bien por qué.\nNo voy a pedirte que los olvides, ni que encuentres algo bueno en lo que ocurrió.\nTampoco necesitas contarme nada que no quieras.\nPodemos sentarnos aquí y mirar qué necesitas cuando esos recuerdos aparecen».",
      "question": "¿Qué es lo que más te cuesta cuando vuelve ese recuerdo?",
      "responses": [
        {
          "id": "A",
          "option": "Siento que vuelvo a experimentar lo que ocurrió.",
          "text": "«Ay, cariño… Algunos recuerdos despiertan emociones muy intensas. No tenemos que acercarnos a ellos más de lo que te resulte soportable. Podemos volver la atención a este momento, a lo que ves y escuchas a tu alrededor, si eso te ayuda a sentirte más presente»."
        },
        {
          "id": "B",
          "option": "Me duele pensar en lo que alguien me hizo o me dijo.",
          "text": "«Hay palabras y acciones que dejan huella. No tienes que justificar lo que te hizo daño ni perdonar a nadie para que tu experiencia merezca cuidado. Podemos reconocer lo que ocurrió sin decidir hoy qué hacer con esa relación»."
        },
        {
          "id": "C",
          "option": "Me reprocho algo que hice o que no pude hacer.",
          "text": "«Ay, cariño… A veces miramos nuestras decisiones pasadas con todo lo que sabemos hoy. Podemos intentar comprender las circunstancias de aquel momento sin negar nuestras responsabilidades ni convertir cada recuerdo en un castigo»."
        },
        {
          "id": "D",
          "option": "No sé por qué sigue doliéndome después de tanto tiempo.",
          "text": "«No existe un calendario que determine cuándo debería dejar de doler algo. Cada persona vive sus recuerdos de manera diferente. No tienes que explicarlo perfectamente para reconocer que todavía necesitas cuidado»."
        }
      ],
      "transition": "Alma observa cómo una hoja se posa sobre el agua y comienza a alejarse lentamente.\n«Mira esa hojita, cariño.\nEl agua no le exige que llegue deprisa a ninguna parte.\nNosotros tampoco tenemos que resolver hoy todo lo que nos duele.\nPodemos elegir qué nos ayudaría en este momento.\n¿Qué te gustaría hacer?».",
      "secondQuestion": "¿Qué te gustaría hacer?",
      "outcomes": [
        {
          "id": "1",
          "option": "Quiero encontrar una forma de sentirme más tranquilo ahora.",
          "title": "Volver a este momento",
          "text": "«Podemos mirar a nuestro alrededor, notar dónde descansan nuestros pies o escuchar los sonidos del bosque. No necesitas hacerlo de una manera perfecta. Y si prefieres otra cosa, también está bien. Lo importante es que puedas elegir lo que te resulte más amable ahora»."
        },
        {
          "id": "2",
          "option": "Quiero expresar lo que ese recuerdo significa para mí.",
          "title": "Las palabras que encuentran lugar",
          "text": "«Quizá puedas escribir unas líneas en tus notas personales, aunque nadie llegue a leerlas. No necesitas ordenar toda tu historia ni encontrar las palabras exactas. Puedes detenerte cuando quieras y decidir qué deseas conservar»."
        },
        {
          "id": "3",
          "option": "Quiero pensar si necesito hablarlo con alguien de confianza.",
          "title": "Una compañía posible",
          "text": "«Si hay alguien con quien te sientas seguro, quizá puedas compartir una pequeña parte de lo que llevas dentro. También puedes buscar apoyo profesional si lo necesitas. No tienes que afrontar un recuerdo doloroso en soledad, pero tampoco estás obligado a contarlo antes de sentirte preparado»."
        },
        {
          "id": "4",
          "option": "Hoy prefiero dejar ese recuerdo en paz.",
          "title": "El banco que espera",
          "text": "«Entonces quedémonos aquí un ratito, cariño. No tenemos que abrir todas las puertas del pasado. Puedes descansar, escuchar el viento y regresar a lo que te haga sentir acompañado. Este banco seguirá aquí si algún día deseas volver»."
        }
      ],
      "sourceParagraph": 48,
      "approved": true
    },
    {
      "id": "03-N04",
      "scene": "03",
      "title": "Quiero conservar mis recuerdos sin quedarme atrapado en ellos",
      "sceneDescription": "Alma está sentada en el banco de madera, junto al estanque. Sobre sus rodillas descansa un pequeño álbum de fotografías. Lo abre con cuidado, contempla una imagen y después levanta la mirada hacia el sendero que continúa entre los árboles.",
      "entry": "«Ay, cariño… ¿Sabes qué me ocurre a veces cuando miro fotografías antiguas?\nHay algunas que me hacen sonreír como si aquel momento hubiera sucedido ayer.\nOtras me recuerdan personas, lugares y etapas que ya no están en mi vida de la misma manera.\nY entonces me doy cuenta de algo.\nLos recuerdos forman parte de nuestra historia, pero nuestra historia no termina donde acaba una fotografía.\nPodemos querer muchísimo lo que vivimos y, al mismo tiempo, sentir curiosidad por lo que todavía nos espera.\nNo tenemos que olvidar el pasado para seguir viviendo el presente.\nVen, cariño. Vamos a descubrir qué lugar te gustaría darles a tus recuerdos».",
      "question": "¿Qué te cuesta más cuando piensas en tus recuerdos familiares?",
      "responses": [
        {
          "id": "A",
          "option": "Me gustaría volver a una época en la que éramos felices.",
          "text": "«Ay, cariño… Hay momentos que guardaríamos en un frasquito si pudiéramos. Echarlos de menos no significa que estés viviendo mal el presente. Podemos agradecer lo que significaron sin exigirte encontrar ahora una felicidad idéntica»."
        },
        {
          "id": "B",
          "option": "Tengo miedo de olvidar a personas o momentos importantes.",
          "text": "«Cuando alguien o algo ha sido importante para nosotros, podemos temer que el tiempo borre sus detalles. Pero no necesitas recordar cada palabra o cada fecha para que aquella relación haya tenido valor. Podemos encontrar maneras amables de conservar lo que deseas»."
        },
        {
          "id": "C",
          "option": "A veces comparo mi vida actual con cómo era antes.",
          "text": "«Ay, cariño… El pasado suele llegarnos en pequeñas escenas, mientras que el presente lo vivimos con todas sus dificultades. Compararlos no siempre es justo. Podemos mirar lo que echas de menos sin concluir que lo mejor de tu vida ya pasó»."
        },
        {
          "id": "D",
          "option": "Siento que avanzar significa dejar atrás a alguien o algo que quiero.",
          "text": "«Seguir viviendo no tiene por qué significar abandonar lo que amas. Hay recuerdos y vínculos que pueden acompañarnos de maneras nuevas. Y si todavía no sabes cómo hacerlo, cariño, no necesitas encontrar esa respuesta hoy»."
        }
      ],
      "transition": "Alma cierra suavemente el álbum y lo deja a su lado. Una brisa mueve las hojas de los árboles.\n«Mira, cariño…\nEste álbum guarda algunos momentos de mi vida.\nPero cuando lo cierro, esos momentos no desaparecen.\nSiguen formando parte de mí.\nY mientras tanto, el bosque continúa cambiando, ofreciéndonos caminos que todavía no conocemos.\nNo tienes que elegir entre recordar y vivir.\n¿Qué te gustaría permitirte ahora?».",
      "secondQuestion": "¿Qué te gustaría permitirte ahora?",
      "outcomes": [
        {
          "id": "1",
          "option": "Quiero guardar un recuerdo de una manera especial.",
          "title": "Un pequeño tesoro",
          "text": "«Quizá puedas elegir una fotografía, escribir una anécdota o conservar alguna palabra que te gustaría recordar. No hace falta construir un gran homenaje. A veces un gesto pequeño basta para darle un lugar a algo importante»."
        },
        {
          "id": "2",
          "option": "Quiero disfrutar de lo que tengo hoy sin sentirme culpable.",
          "title": "La alegría también tiene permiso",
          "text": "«Ay, cariño… Sonreír hoy no borra lo que viviste ayer. Puedes disfrutar de una conversación, una comida o un paseo sin que eso disminuya el cariño que sientes por quienes ya no están cerca. El presente también merece momentos agradables»."
        },
        {
          "id": "3",
          "option": "Quiero compartir mis recuerdos con alguien.",
          "title": "Historias que encuentran compañía",
          "text": "«Si te apetece, quizá puedas contar una anécdota a alguien de confianza. Puede ser algo divertido, emocionante o simplemente cotidiano. Compartir un recuerdo no obliga a sentirlo de una manera determinada. También puedes conservarlo solo para ti»."
        },
        {
          "id": "4",
          "option": "Hoy quiero quedarme un rato entre mis recuerdos.",
          "title": "El álbum abierto",
          "text": "«Entonces quedémonos aquí, cariño. Podemos mirar las fotografías imaginarias de nuestra memoria sin apresurarnos a cerrar ninguna página. No tienes que convertir este momento en una decisión. Cuando quieras levantarte del banco, el sendero seguirá esperándote»."
        }
      ],
      "sourceParagraph": 50,
      "approved": true
    },
    {
      "id": "04-N01",
      "scene": "04",
      "title": "Hay palabras que quedaron pendientes",
      "sceneDescription": "Alma se detiene junto a un puente de madera que atraviesa un pequeño río. Al otro lado, el sendero desaparece entre los árboles. Su farolillo ilumina suavemente unas hojas que descansan sobre la barandilla.",
      "entry": "«Ay, cariño… Hay palabras que se quedan dentro de nosotros durante mucho tiempo.\nA veces son cosas bonitas que nunca llegamos a decir. Otras veces son preguntas, disculpas o sentimientos que no encontramos el momento de expresar.\nY también hay palabras que guardamos porque hablar no era seguro, porque no estábamos preparados o porque simplemente no sabíamos cómo hacerlo.\nNo todas esas palabras necesitan llegar a otra persona.\nAlgunas pueden encontrar su lugar en una carta que nunca enviamos, en una conversación imaginada o en un pequeño momento de silencio.\nVen, cariño. Vamos a descubrir qué significan para ti esas palabras pendientes».",
      "question": "¿Qué tipo de palabras sientes que quedaron pendientes?",
      "responses": [
        {
          "id": "A",
          "option": "Algo bonito que nunca llegué a decir.",
          "text": "«Ay, cariño… A veces damos por hecho que las personas saben cuánto las queremos o lo importantes que fueron para nosotros. Si todavía puedes y deseas compartirlo, quizá encuentres un momento. Y si no es posible, ese cariño no pierde su valor por haberse quedado sin palabras»."
        },
        {
          "id": "B",
          "option": "Algo que me dolió y nunca pude expresar.",
          "text": "«Hay heridas que permanecen en silencio porque no encontramos un lugar seguro donde hablar de ellas. No tienes que enfrentarte a quien te hizo daño para reconocer lo que sentiste. Tu experiencia merece respeto, aunque nadie más llegue a escucharla»."
        },
        {
          "id": "C",
          "option": "Una disculpa que me habría gustado ofrecer.",
          "text": "«Reconocer que quizá hicimos daño puede ser difícil, cariño. Podemos mirar nuestra responsabilidad con honestidad sin convertirla en un castigo interminable. Y recuerda que ofrecer una disculpa, cuando sea posible y apropiado, no nos da derecho a exigir que la otra persona la acepte»."
        },
        {
          "id": "D",
          "option": "No sé exactamente qué querría decir.",
          "text": "«Pues no tenemos que encontrar las palabras ahora. A veces sentimos que quedó algo pendiente, pero todavía no sabemos darle forma. Podemos escuchar esa sensación sin apresurarnos a convertirla en una conversación»."
        }
      ],
      "transition": "Alma observa una hoja que cae sobre el río y se aleja lentamente bajo el puente.\nAlma:\n«Mira esa hojita, cariño.\nEl agua la lleva consigo sin preguntarle adónde tiene que llegar.\nCon nuestras palabras podemos hacer algo parecido: darles un espacio sin obligarlas a encontrar destinatario.\n¿Qué te gustaría hacer ahora?».",
      "secondQuestion": "¿Qué te gustaría hacer ahora?",
      "outcomes": [
        {
          "id": "1",
          "option": "Quiero escribir lo que nunca dije.",
          "title": "La carta que no necesita viajar",
          "text": "«Quizá puedas escribir unas líneas en tus notas personales, cariño. No necesitas enviarlas ni enseñárselas a nadie. Puedes guardarlas, cambiarlas o dejarlas descansar. A veces escribir nos permite escuchar algo que llevábamos mucho tiempo intentando expresar»."
        },
        {
          "id": "2",
          "option": "Quiero pensar si algún día me gustaría hablarlo.",
          "title": "Una conversación posible",
          "text": "«Si esa conversación es segura y verdaderamente la deseas, puedes imaginar qué necesitarías para sentirte preparado. No tienes que fijar una fecha ni esperar una respuesta determinada. Y si decides que no quieres tenerla, también puedes respetar esa elección»."
        },
        {
          "id": "3",
          "option": "Quiero comprender por qué esas palabras siguen conmigo.",
          "title": "Lo que todavía pesa",
          "text": "«A veces unas palabras pendientes hablan de cariño, otras de tristeza, de culpa o de una necesidad que no fue escuchada. Podemos intentar comprender qué representan para ti sin decidir todavía qué hacer con ellas. Comprender también puede ser suficiente por hoy»."
        },
        {
          "id": "4",
          "option": "Hoy prefiero no abrir esa conversación.",
          "title": "El puente en silencio",
          "text": "«Entonces no la abramos, cariño. Podemos quedarnos aquí, escuchando el río. No tienes que decir nada, escribir nada ni cruzar ningún puente. Tu silencio también puede ser una manera de cuidarte»."
        }
      ],
      "sourceParagraph": 53,
      "approved": true
    },
    {
      "id": "04-N02",
      "scene": "04",
      "title": "El silencio entre nosotros me pesa",
      "sceneDescription": "Alma se sienta sobre una piedra junto al puente. El río continúa su camino bajo las tablas de madera. Al otro lado, los árboles permanecen inmóviles. La abuelita sostiene su farolillo entre las manos.",
      "entry": "«Ay, cariño… Hay silencios que nos ofrecen descanso.\nY otros que se hacen tan largos que parece que ocupan toda una habitación.\nA veces dejamos de hablar con alguien después de una discusión. Otras veces la vida nos va separando poquito a poco, sin que sepamos exactamente cuándo ocurrió.\nY hay silencios que elegimos porque necesitábamos protegernos.\nNo todos significan lo mismo.\nPodemos echar de menos una voz y, al mismo tiempo, saber que todavía no queremos volver a escucharla.\nVen, cariño. Vamos a mirar qué significa ese silencio para ti».",
      "question": "¿Qué es lo que más te pesa de ese silencio?",
      "responses": [
        {
          "id": "A",
          "option": "No entiendo por qué dejamos de hablar.",
          "text": "«Ay, cariño… Cuando no sabemos qué ocurrió, nuestra imaginación intenta llenar los huecos. Pero no siempre tenemos todas las respuestas. Podemos reconocer esa incertidumbre sin convertir cada posibilidad en una verdad»."
        },
        {
          "id": "B",
          "option": "Echo de menos hablar con esa persona.",
          "text": "«Echar de menos una conversación no significa que tengas que recuperarla inmediatamente. A veces extrañamos la cercanía que existía antes, incluso cuando sabemos que las circunstancias han cambiado»."
        },
        {
          "id": "C",
          "option": "Me duele que esa persona no haya intentado acercarse.",
          "text": "«Es doloroso sentir que una relación importante parece depender solo de nosotros. No podemos saber siempre qué ocurre al otro lado del silencio. Pero tus necesidades también cuentan, cariño, y no tienes que sostener tú solo todos los puentes»."
        },
        {
          "id": "D",
          "option": "Fui yo quien dejó de hablar y ahora tengo sentimientos encontrados.",
          "text": "«Ay, cariño… A veces una decisión necesaria también nos entristece. Puedes reconocer que necesitabas distancia y, al mismo tiempo, echar de menos algunas cosas. Una emoción no invalida automáticamente la otra»."
        }
      ],
      "transition": "Alma observa cómo el reflejo del puente tiembla suavemente sobre el agua.\nAlma:\n«Mira el río, cariño.\nAunque el puente permanezca en silencio, el agua sigue moviéndose.\nNosotros también podemos seguir comprendiendo lo que sentimos, aunque una conversación no se haya producido.\nNo tenemos que decidir hoy qué ocurrirá con esa relación.\n¿Qué te gustaría hacer ahora?».",
      "secondQuestion": "¿Qué te gustaría hacer ahora?",
      "outcomes": [
        {
          "id": "1",
          "option": "Quiero comprender mejor lo que echo de menos.",
          "title": "Lo que había al otro lado",
          "text": "«Quizá puedas preguntarte si echas de menos a esa persona, cómo os relacionabais o algo que sentías cuando estabais juntos. No necesitas encontrar una respuesta definitiva. A veces distinguir esas cosas nos ayuda a comprender un poquito mejor nuestra nostalgia»."
        },
        {
          "id": "2",
          "option": "Quiero pensar si me gustaría recuperar el contacto.",
          "title": "Una posibilidad, no una obligación",
          "text": "«Si acercarte es seguro, puedes imaginar qué necesitarías para sentirte tranquilo con esa decisión. No tienes que escribir hoy ni esperar una respuesta concreta. Y si descubres que prefieres mantener la distancia, esa posibilidad también merece respeto»."
        },
        {
          "id": "3",
          "option": "Quiero aceptar que quizá no obtenga una explicación.",
          "title": "Las preguntas sin respuesta",
          "text": "«Ay, cariño… Algunas preguntas permanecen abiertas mucho tiempo. No siempre conseguimos comprender las decisiones de otras personas. Podemos reconocer lo que nos duele sin convertir la búsqueda de una explicación en una obligación interminable»."
        },
        {
          "id": "4",
          "option": "Hoy necesito descansar de este silencio.",
          "title": "El río sigue su curso",
          "text": "«Entonces descansemos, cariño. No tienes que revisar cada conversación pasada ni imaginar lo que podría suceder mañana. Podemos escuchar el agua y dejar que este momento sea solamente un momento de calma»."
        }
      ],
      "sourceParagraph": 55,
      "approved": true
    },
    {
      "id": "04-N03",
      "scene": "04",
      "title": "Necesito distancia para estar bien",
      "sceneDescription": "Alma se detiene a mitad del sendero, antes de llegar al puente. Desde allí contempla las dos orillas del río. Su farolillo proyecta una luz cálida sobre las piedras del camino.",
      "entry": "«Ay, cariño… ¿Ves ese puente?\nEstá ahí para quien quiera cruzarlo. Pero nadie tiene que hacerlo.\nA veces necesitamos alejarnos un poquito de alguien a quien queremos.\nOtras veces necesitamos una distancia mayor, porque una relación nos hace daño o porque ya no encontramos tranquilidad en ella.\nY eso puede despertar sentimientos difíciles: culpa, tristeza, miedo o incluso alivio.\nNo voy a decirte cuánto debes alejarte ni cuánto tiempo debería durar esa distancia.\nPodemos escuchar lo que necesitas sin convertirlo en una obligación de dar explicaciones.\nVen, cariño. Vamos a descubrir qué significa para ti cuidar ese espacio».",
      "question": "¿Qué es lo que más te cuesta de necesitar distancia?",
      "responses": [
        {
          "id": "A",
          "option": "Me siento culpable por alejarme de alguien a quien quiero.",
          "text": "«Ay, cariño… El cariño y la necesidad de distancia pueden existir al mismo tiempo. Sentir culpa no demuestra por sí solo que estés haciendo algo malo. Podemos mirar qué necesitas para cuidarte sin negar lo que sientes por esa persona»."
        },
        {
          "id": "B",
          "option": "Tengo miedo de que no comprendan mi decisión.",
          "text": "«No siempre conseguimos que los demás comprendan nuestros límites. Puedes intentar explicarlos si es seguro y lo deseas, pero tu bienestar no tiene que depender de que todo el mundo esté de acuerdo contigo»."
        },
        {
          "id": "C",
          "option": "No sé si necesito una pausa o alejarme definitivamente.",
          "text": "«Pues no tenemos que decidirlo hoy, cariño. A veces necesitamos tiempo para comprender qué nos hace bien y qué nos hace daño. Puedes observar cómo te sientes sin comprometerte ahora con una decisión para siempre»."
        },
        {
          "id": "D",
          "option": "Me cuesta mantener la distancia cuando la otra persona insiste.",
          "text": "«Ay, cariño… Cuando alguien no respeta nuestro espacio, sostener un límite puede resultar agotador. No tienes que afrontar esa presión a solas. Si te sientes inseguro, buscar apoyo de alguien de confianza puede ayudarte a protegerte»."
        }
      ],
      "transition": "Alma deja su farolillo sobre una piedra y observa cómo la luz alcanza el comienzo del puente, sin llegar a la otra orilla.\nAlma:\n«Mira, cariño…\nMi farolillo ilumina este lado del camino.\nNo necesita alcanzar la otra orilla para ser útil.\nA veces cuidar nuestra tranquilidad empieza por reconocer dónde queremos estar ahora.\nY recuerda: un límite no tiene que convertirse en una discusión interminable.\n¿Qué te gustaría permitirte?».",
      "secondQuestion": "¿Qué te gustaría permitirte?",
      "outcomes": [
        {
          "id": "1",
          "option": "Quiero aprender a expresar que necesito espacio.",
          "title": "Un límite con palabras sencillas",
          "text": "«Si deseas comunicarlo y hacerlo es seguro, puedes utilizar palabras sencillas: “Ahora necesito un poco de espacio” o “Prefiero no hablar de esto por el momento”. No tienes que justificar cada detalle de tu decisión, cariño»."
        },
        {
          "id": "2",
          "option": "Quiero dejar de sentirme responsable de cómo reaccionen los demás.",
          "title": "Lo que no puedo controlar",
          "text": "«Podemos intentar tratar a los demás con respeto, pero no podemos decidir cómo van a sentirse ante nuestros límites. Sus emociones importan, cariño, pero eso no significa que debas renunciar automáticamente a lo que necesitas»."
        },
        {
          "id": "3",
          "option": "Quiero pensar qué distancia me ayudaría a sentirme seguro.",
          "title": "Mi lugar en esta orilla",
          "text": "«Quizá puedas observar qué situaciones te producen tranquilidad y cuáles te hacen sentir presionado o inseguro. No tienes que resolverlo todo ahora. Y si existe miedo, amenaza o daño, buscar apoyo humano puede ser un primer paso importante»."
        },
        {
          "id": "4",
          "option": "Hoy necesito descansar sin explicar nada.",
          "title": "La orilla tranquila",
          "text": "«Entonces descansemos aquí, cariño. No tenemos que cruzar el puente, enviar mensajes ni tomar decisiones. Puedes quedarte en esta orilla el tiempo que necesites. Tu tranquilidad también merece un lugar»."
        }
      ],
      "sourceParagraph": 57,
      "approved": true
    },
    {
      "id": "04-N04",
      "scene": "04",
      "title": "No sé si quiero volver a acercarme",
      "sceneDescription": "Alma se detiene frente al puente de madera. La luz del atardecer acaricia las dos orillas del río. La abuelita apoya su farolillo sobre la barandilla y contempla el camino que desaparece entre los árboles.",
      "entry": "«Ay, cariño… ¿Ves ese puente?\nLleva aquí muchos años. Algunas personas lo cruzan a menudo. Otras se quedan mirando desde esta orilla.\nY hay quienes un día lo cruzaron y después descubrieron que necesitaban regresar.\nCon nuestras relaciones ocurre algo parecido.\nA veces nos preguntamos si deberíamos volver a hablar con alguien, recuperar una cercanía o intentar comprender lo que ocurrió.\nPero también podemos sentir miedo, desconfianza o simplemente no saber qué queremos.\nNo voy a decirte que cruces.\nTampoco voy a pedirte que cierres ese camino para siempre.\nPodemos mirar lo que sientes sin convertirlo en una decisión inmediata.\nVen, cariño. Vamos a descubrir qué significa para ti esa posibilidad».",
      "question": "¿Qué es lo que más te hace dudar sobre volver a acercarte?",
      "responses": [
        {
          "id": "A",
          "option": "Echo de menos a esa persona, pero temo que todo vuelva a ser igual.",
          "text": "«Ay, cariño… Echar de menos a alguien no significa que hayan desaparecido las razones por las que os alejasteis. Podemos recordar lo bonito y también lo que te hizo daño. Ambas partes de la historia merecen ser escuchadas»."
        },
        {
          "id": "B",
          "option": "No sé si esa persona ha cambiado.",
          "text": "«Las personas pueden cambiar, cariño, pero no siempre sabemos si lo han hecho ni de qué manera. No tienes que confiar solamente en promesas o deseos. Puedes observar los hechos y decidir qué necesitas para sentirte seguro»."
        },
        {
          "id": "C",
          "option": "Tengo miedo de que me rechacen si intento acercarme.",
          "text": "«El rechazo puede doler mucho, especialmente cuando alguien nos importa. Podemos reconocer ese miedo sin dejar que te obligue a actuar ni a esconder lo que sientes. Acercarte, si algún día lo deseas, no garantiza una respuesta determinada»."
        },
        {
          "id": "D",
          "option": "Una parte de mí quiere acercarse y otra prefiere mantener la distancia.",
          "text": "«Ay, cariño… A veces sentimos cosas aparentemente contrarias al mismo tiempo. Podemos querer recuperar algo y también necesitar protegernos. No tienes que elegir una de esas emociones para demostrar que la otra es verdadera»."
        }
      ],
      "transition": "Alma observa cómo el último rayo de sol ilumina algunas tablas del puente. Después se vuelve hacia ti con una sonrisa tranquila.\nAlma:\n«Mira, cariño…\nEl puente seguirá aquí cuando caiga la noche.\nNo tenemos que cruzarlo antes de que desaparezca la luz.\nHay decisiones que necesitan tiempo, información y, sobre todo, tranquilidad.\nY también hay caminos que podemos elegir no recorrer.\n¿Qué te gustaría hacer con esta duda?».",
      "secondQuestion": "¿Qué te gustaría hacer con esta duda?",
      "outcomes": [
        {
          "id": "1",
          "option": "Quiero comprender qué necesitaría para sentirme seguro.",
          "title": "Antes de cruzar",
          "text": "«Quizá puedas pensar qué tendría que ser diferente para que un acercamiento resultara adecuado para ti: respeto, límites claros, cambios demostrados o apoyo de alguien de confianza. No necesitas poner a prueba esa posibilidad ahora, cariño. Comprender tus necesidades ya puede ser un paso valioso»."
        },
        {
          "id": "2",
          "option": "Quiero imaginar cómo sería un acercamiento pequeño.",
          "title": "Un paso que todavía no damos",
          "text": "«Si el contacto es seguro y verdaderamente lo deseas, puedes imaginar un gesto sencillo, sin comprometerte a realizarlo. Quizá una conversación breve o un mensaje. Pero recuerda que imaginar una posibilidad no significa que tengas que llevarla a cabo»."
        },
        {
          "id": "3",
          "option": "Quiero aceptar que quizá prefiera no volver.",
          "title": "La orilla que elijo",
          "text": "«Ay, cariño… No todas las relaciones tienen que recuperarse para que nuestra historia continúe. Puedes reconocer lo que significó esa persona y decidir que hoy tu bienestar necesita distancia. No tienes que convertir esa elección en una condena ni justificarla ante todo el mundo»."
        },
        {
          "id": "4",
          "option": "Hoy no quiero decidir nada.",
          "title": "El puente que espera",
          "text": "«Entonces no decidamos, cariño. Podemos quedarnos aquí mirando el río, sin enviar mensajes ni imaginar respuestas. A veces lo más amable que podemos hacer es permitirnos no saber todavía. Y eso también está bien»."
        }
      ],
      "sourceParagraph": 59,
      "approved": true
    },
    {
      "id": "05-N01",
      "scene": "05",
      "title": "Mi familia está cambiando y necesito encontrar mi lugar",
      "sceneDescription": "Alma camina por un jardín donde conviven árboles antiguos, pequeños brotes y flores recién abiertas. Se detiene junto a un árbol cuyas ramas crecen en direcciones diferentes. Su farolillo ilumina suavemente las raíces.",
      "entry": "«Ay, cariño… Mira este árbol.\nDurante mucho tiempo sus ramas crecieron de una manera que parecía que nunca iba a cambiar.\nPero llegaron nuevas estaciones, algunas se hicieron más fuertes, otras buscaron otra dirección y aparecieron pequeños brotes donde antes no había nada.\nCon las familias ocurre algo parecido.\nLos hijos crecen, los padres envejecen, nuestras responsabilidades cambian y, a veces, descubrimos que el lugar que ocupábamos ya no es exactamente el mismo.\nEso puede alegrarnos y también hacernos sentir un poquito perdidos.\nNo significa que hayamos dejado de ser importantes.\nQuizá simplemente estamos aprendiendo a encontrar nuestro lugar en una etapa diferente.\nVen, cariño. Vamos a descubrir qué está cambiando para ti».",
      "question": "¿Qué cambio familiar te está haciendo sentir que necesitas encontrar tu lugar?",
      "responses": [
        {
          "id": "A",
          "option": "Mis hijos o familiares jóvenes están construyendo su propia vida.",
          "text": "«Ay, cariño… Ver crecer a alguien a quien hemos cuidado puede llenarnos de orgullo y, al mismo tiempo, dejarnos un pequeño vacío. Quizá ya no nos necesiten de la misma manera, pero eso no borra todo lo que hemos compartido»."
        },
        {
          "id": "B",
          "option": "Mis padres o familiares mayores necesitan ahora más apoyo.",
          "text": "«Cuando cambian las necesidades de quienes antes nos cuidaban, podemos sentir cariño, preocupación y también cansancio. No tienes que hacerlo todo tú solo, cariño. Cuidar a alguien también requiere reconocer nuestros propios límites»."
        },
        {
          "id": "C",
          "option": "Las relaciones dentro de mi familia ya no son como antes.",
          "text": "«A veces cambian las conversaciones, las costumbres o la cercanía que teníamos. Podemos echar de menos lo conocido sin decidir que lo nuevo tiene que ser peor. Y tampoco necesitamos fingir que todos los cambios nos resultan fáciles»."
        },
        {
          "id": "D",
          "option": "Siento que ya no sé qué esperan de mí.",
          "text": "«Ay, cariño… Durante años podemos acostumbrarnos a ser quien organiza, quien ayuda, quien escucha o quien siempre está disponible. Cuando esas expectativas cambian, es natural preguntarnos qué lugar queremos ocupar ahora. Tus propias necesidades también cuentan»."
        }
      ],
      "transition": "Alma observa un pequeño brote que crece entre dos raíces antiguas. Se agacha para mirarlo más de cerca.\nAlma:\n«Mira este brotecito, cariño.\nNo está creciendo exactamente donde crecieron las otras ramas.\nY, sin embargo, también forma parte del jardín.\nA veces nuestro lugar cambia sin que desaparezca lo que somos.\nPodemos descubrir nuevas maneras de acompañarnos, sin exigir que todo vuelva a ser como antes.\n¿Qué te gustaría cuidar ahora?».",
      "secondQuestion": "¿Qué te gustaría cuidar ahora?",
      "outcomes": [
        {
          "id": "1",
          "option": "Quiero comprender qué necesito en esta nueva etapa.",
          "title": "Un lugar para mí",
          "text": "«Quizá puedas preguntarte qué te gustaría conservar, qué responsabilidades necesitas compartir y qué espacio deseas recuperar para ti. No hace falta responderlo todo hoy. Encontrar nuestro lugar también puede comenzar por escucharnos»."
        },
        {
          "id": "2",
          "option": "Quiero hablar con mi familia sobre cómo estamos cambiando.",
          "title": "Nuevas conversaciones",
          "text": "«Si te apetece y es seguro hacerlo, quizá puedas compartir cómo estás viviendo estos cambios y escuchar cómo los sienten los demás. No tiene que ser una conversación perfecta ni terminar en un acuerdo inmediato. A veces comprendernos un poquito mejor ya es valioso»."
        },
        {
          "id": "3",
          "option": "Quiero aprender a acompañar sin hacerlo todo por los demás.",
          "title": "Raíces que sostienen sin sujetar",
          "text": "«Ay, cariño… Acompañar no siempre significa resolverlo todo. A veces podemos ofrecer ayuda, escuchar o estar presentes, dejando también espacio para que los demás tomen sus propias decisiones. Y recuerda que tú también mereces descanso y apoyo»."
        },
        {
          "id": "4",
          "option": "Hoy necesito tiempo para acostumbrarme a estos cambios.",
          "title": "El jardín que crece despacio",
          "text": "«Entonces caminemos sin prisa, cariño. No tienes que encontrar inmediatamente tu lugar ni demostrar que te adaptas a todo. Puedes observar cómo cambia este jardín y darte tiempo para descubrir qué necesitas»."
        }
      ],
      "sourceParagraph": 61,
      "approved": true
    },
    {
      "id": "05-N02",
      "scene": "05",
      "title": "Han llegado nuevas personas a nuestra familia",
      "sceneDescription": "Alma camina entre árboles antiguos y flores recién abiertas. Se detiene ante una pequeña planta que ha comenzado a crecer junto a las raíces de un árbol centenario. Su farolillo ilumina las hojas nuevas.",
      "entry": "«Ay, cariño… Mira esta plantita.\nHace algún tiempo no estaba aquí. El jardín tenía otras formas, otros colores y otros rincones.\nY ahora ha llegado, buscando también un lugar donde crecer.\nCon nuestras familias sucede algo parecido.\nA veces llega una nueva pareja, nace un bebé, alguien se incorpora a nuestra casa o aparecen personas que empiezan a formar parte de nuestra historia.\nEsos cambios pueden llenarnos de ilusión. Pero también pueden despertar dudas, incomodidad o miedo a perder algo que antes sentíamos nuestro.\nNo tenemos que querer a todo el mundo de la misma manera ni sentirnos cómodos inmediatamente.\nPodemos conocer lo nuevo sin negar lo que ya existía.\nVen, cariño. Vamos a descubrir cómo estás viviendo esas nuevas llegadas».",
      "question": "¿Qué es lo que más te cuesta cuando alguien nuevo llega a tu familia?",
      "responses": [
        {
          "id": "A",
          "option": "Tengo miedo de perder la cercanía que tenía con alguien.",
          "text": "«Ay, cariño… Cuando una relación importante cambia porque aparece otra persona, podemos sentir inseguridad o tristeza. Eso no significa que quieras impedir la felicidad de nadie. Podemos reconocer lo que echas de menos sin convertir a la persona recién llegada en una rival»."
        },
        {
          "id": "B",
          "option": "No sé cómo relacionarme con esa nueva persona.",
          "text": "«Pues no hace falta encontrar una confianza inmediata, cariño. Las relaciones se construyen de maneras distintas y a ritmos diferentes. Puedes empezar por observar cómo te sientes y qué tipo de trato te resulta cómodo»."
        },
        {
          "id": "C",
          "option": "Siento que están cambiando nuestras costumbres familiares.",
          "text": "«Hay tradiciones que nos hacen sentir parte de algo. Cuando cambian, podemos experimentar nostalgia, aunque también existan motivos para celebrar. Quizá podamos descubrir cuáles deseas conservar y cuáles pueden transformarse sin perder su significado»."
        },
        {
          "id": "D",
          "option": "Tengo sentimientos encontrados: ilusión y preocupación al mismo tiempo.",
          "text": "«Ay, cariño… Podemos alegrarnos por una nueva etapa y sentir incertidumbre a la vez. No necesitas elegir una sola emoción para demostrar que recibes bien a alguien. Podemos dar espacio a ambas»."
        }
      ],
      "transition": "Alma observa cómo las ramas del árbol antiguo dejan pasar un pequeño rayo de sol hasta la planta nueva.\nAlma:\n«Mira, cariño…\nEl jardín no tiene que olvidar sus raíces para dejar crecer nuevas flores.\nY las plantas nuevas tampoco necesitan ocupar el lugar de las que ya estaban.\nQuizá podamos encontrar maneras de convivir sin pedirnos que todo sea igual que antes.\n¿Qué te gustaría intentar ahora?».",
      "secondQuestion": "¿Qué te gustaría intentar ahora?",
      "outcomes": [
        {
          "id": "1",
          "option": "Quiero conocer a esa persona poco a poco.",
          "title": "Una nueva rama",
          "text": "«Si te apetece y te sientes seguro, quizá puedas empezar con una conversación sencilla o un momento compartido. No tienes que construir una relación cercana inmediatamente. El respeto también puede crecer sin prisas»."
        },
        {
          "id": "2",
          "option": "Quiero cuidar mis vínculos anteriores sin rechazar los nuevos.",
          "title": "Las raíces que permanecen",
          "text": "«Puedes buscar momentos para mantener las relaciones que son importantes para ti y, al mismo tiempo, dejar espacio a otras nuevas. No siempre será sencillo encontrar ese equilibrio, cariño, pero no necesitas elegir automáticamente entre unas personas y otras»."
        },
        {
          "id": "3",
          "option": "Quiero expresar cómo me estoy sintiendo con estos cambios.",
          "title": "Hacer sitio a mis emociones",
          "text": "«Quizá puedas compartir tus inquietudes con alguien de confianza, sin acusar ni culpar a la persona recién llegada. También puedes escribirlas para ti. Tus sentimientos merecen un lugar, aunque todavía no sepas qué hacer con ellos»."
        },
        {
          "id": "4",
          "option": "Hoy prefiero observar y darme tiempo.",
          "title": "El jardín que espera",
          "text": "«Entonces observemos este jardín, cariño. No tienes que adaptarte a todas las novedades de golpe ni demostrar entusiasmo si todavía no lo sientes. Puedes darte tiempo para conocer esta nueva etapa a tu manera»."
        }
      ],
      "sourceParagraph": 63,
      "approved": true
    },
    {
      "id": "05-N03",
      "scene": "05",
      "title": "Quiero construir una relación diferente con mi familia",
      "sceneDescription": "Alma se detiene ante dos árboles que durante años crecieron muy cerca. Sus ramas se entrelazan en algunos lugares y en otros se separan, dejando pasar la luz. La abuelita observa el espacio entre ambos y sonríe.",
      "entry": "«Ay, cariño… Mira estos dos árboles.\nDurante mucho tiempo crecieron tan cerca que sus ramas parecían formar una sola copa.\nPero con los años, cada uno fue encontrando su propia manera de crecer.\nAlgunas ramas siguen juntas. Otras han buscado un poquito más de espacio.\nY el jardín continúa siendo hermoso.\nCon nuestras familias también ocurre algo parecido.\nA veces descubrimos que queremos relacionarnos de otra manera: hablar con más sinceridad, compartir responsabilidades, respetar nuestros espacios o dejar atrás costumbres que ya no nos hacen bien.\nEso no significa que todo lo anterior fuera malo.\nSignifica que nuestras necesidades pueden cambiar.\nVen, cariño. Vamos a descubrir qué te gustaría que fuera diferente».",
      "question": "¿Qué te gustaría cambiar en la manera de relacionarte con tu familia?",
      "responses": [
        {
          "id": "A",
          "option": "Quiero que podamos hablar con más sinceridad.",
          "text": "«Ay, cariño… A veces guardamos lo que sentimos para evitar discusiones o preocupaciones. Podemos buscar maneras de expresarnos con respeto, pero recuerda que una conversación sincera necesita también disposición para escuchar. No tienes que cargar tú solo con esa responsabilidad»."
        },
        {
          "id": "B",
          "option": "Me gustaría que respetáramos mejor nuestros espacios.",
          "text": "«Cada persona necesita un poquito de espacio propio, incluso dentro de una familia muy unida. Podemos querernos y tener necesidades diferentes. Aprender a respetarlas puede llevar tiempo, y no todas requieren largas explicaciones»."
        },
        {
          "id": "C",
          "option": "Quiero que las responsabilidades estén mejor repartidas.",
          "text": "«Ay, cariño… A veces alguien termina haciendo tantas cosas que los demás dejan de darse cuenta. Podemos reconocer lo que aportas y pensar qué tareas podrían compartirse. Pedir ayuda no significa querer menos a tu familia»."
        },
        {
          "id": "D",
          "option": "Quiero dejar atrás una costumbre familiar que ya no me hace bien.",
          "text": "«Hay maneras de relacionarnos que aprendimos hace mucho tiempo y seguimos repitiendo casi sin darnos cuenta. Puedes preguntarte cuáles deseas conservar y cuáles preferirías cambiar. Y si una costumbre te hace daño, no tienes que mantenerla solamente porque siempre haya existido»."
        }
      ],
      "transition": "Alma recoge una pequeña rama caída y la coloca sobre la tierra, junto a un brote nuevo.\nAlma:\n«Mira, cariño…\nEste jardín no crece exactamente igual cada primavera.\nAlgunas ramas necesitan apoyo. Otras, más espacio. Y algunas dejan paso a formas nuevas.\nCon las relaciones familiares podemos intentar algo parecido.\nNo siempre podremos cambiar lo que hacen los demás.\nPero sí podemos escuchar qué necesitamos y elegir cómo queremos participar, cuando tengamos esa posibilidad.\n¿Qué te gustaría intentar ahora?».",
      "secondQuestion": "¿Qué te gustaría intentar ahora?",
      "outcomes": [
        {
          "id": "1",
          "option": "Quiero iniciar una conversación diferente.",
          "title": "Una manera nueva de hablar",
          "text": "«Si te apetece y hacerlo es seguro, quizá puedas elegir un momento tranquilo para compartir una necesidad concreta. Puedes empezar con algo sencillo: “Me gustaría que pudiéramos hablar de esto de otra manera”. No necesitas resolver años de costumbres en una sola conversación»."
        },
        {
          "id": "2",
          "option": "Quiero empezar por cambiar algo pequeño en mí.",
          "title": "Una rama que encuentra su dirección",
          "text": "«Tal vez puedas observar una costumbre tuya que quieras transformar: decir que sí cuando necesitas descansar, callar algo importante o asumir tareas que podrías compartir. No se trata de culparte, cariño. Se trata de descubrir qué pequeña elección está en tus manos»."
        },
        {
          "id": "3",
          "option": "Quiero establecer acuerdos más claros.",
          "title": "Un jardín que compartimos",
          "text": "«Quizá podáis hablar de responsabilidades, tiempos o espacios personales y buscar acuerdos que respeten las necesidades de cada uno. Y si no todos están dispuestos, recuerda que un acuerdo no puede sostenerlo una sola persona»."
        },
        {
          "id": "4",
          "option": "Hoy prefiero pensar qué relación deseo construir.",
          "title": "Las ramas que todavía crecen",
          "text": "«Entonces no hagamos cambios todavía, cariño. Puedes imaginar cómo te gustaría sentirte en tus relaciones familiares sin convertir ese deseo en una tarea inmediata. Algunas transformaciones comienzan simplemente al reconocer lo que necesitamos»."
        }
      ],
      "sourceParagraph": 65,
      "approved": true
    },
    {
      "id": "05-N04",
      "scene": "05",
      "title": "Quiero mirar esta nueva etapa con más tranquilidad",
      "sceneDescription": "Alma camina lentamente por el jardín mientras el sol comienza a descender. Algunas ramas se inclinan hacia la luz; otras descansan bajo la sombra de árboles antiguos. La abuelita encuentra un pequeño banco, se sienta y deja su farolillo a su lado.",
      "entry": "«Ay, cariño… Mira este jardín.\nAlgunas plantas han crecido muchísimo desde la última primavera. Otras apenas están empezando a descubrir su lugar.\nY hay ramas que han cambiado de dirección sin que nadie se lo pidiera.\nCon nuestras familias ocurre algo parecido.\nA veces llegan nuevas personas, cambian nuestras responsabilidades o descubrimos que la vida que conocíamos está dando paso a otra etapa.\nPodemos sentir ilusión por lo que viene y, al mismo tiempo, incertidumbre por lo que dejamos atrás.\nNo tenemos que comprender todos esos cambios inmediatamente.\nTampoco necesitamos recibirlos con una sonrisa si todavía nos cuesta.\nVen, cariño. Vamos a descubrir qué te ayudaría a mirar esta nueva etapa con un poquito más de tranquilidad».",
      "question": "¿Qué es lo que más te inquieta de esta nueva etapa familiar?",
      "responses": [
        {
          "id": "A",
          "option": "No sé cómo serán nuestras relaciones a partir de ahora.",
          "text": "«Ay, cariño… Cuando las cosas cambian, a veces intentamos imaginar todas las posibilidades para sentirnos preparados. Pero no podemos conocer cada conversación ni cada decisión futura. Podemos mirar lo que necesitas hoy sin exigirnos tener resuelto el mañana»."
        },
        {
          "id": "B",
          "option": "Tengo miedo de perder algo importante de nuestra familia.",
          "text": "«Hay costumbres, cercanías y momentos que significan mucho para nosotros. Es natural sentir preocupación cuando parecen cambiar. Podemos reconocer lo que deseas conservar y aceptar que quizá algunas cosas encuentren una forma diferente de permanecer»."
        },
        {
          "id": "C",
          "option": "Me preocupa no saber adaptarme a los cambios.",
          "text": "«Ay, cariño… Adaptarse no es una carrera. Algunas personas necesitan más tiempo, otras encuentran dificultades que los demás no ven. No tienes que demostrar que puedes con todo. También puedes pedir apoyo y avanzar a tu propio ritmo»."
        },
        {
          "id": "D",
          "option": "Tengo sentimientos mezclados y no sé cómo ordenarlos.",
          "text": "«Pues no tenemos que ordenarlos todos ahora. Puedes sentir alegría, tristeza, miedo o curiosidad al mismo tiempo. Las emociones no siempre llegan una detrás de otra, cariño. A veces necesitan convivir un ratito antes de que comprendamos qué nos están contando»."
        }
      ],
      "transition": "Alma contempla un pequeño brote que crece junto a una rama antigua. La luz del atardecer ilumina ambos con la misma suavidad.\nAlma:\n«Mira, cariño…\nEste jardín no sabe exactamente cómo será la próxima primavera.\nAlgunas flores volverán, otras crecerán en lugares inesperados.\nY aun así, hoy podemos sentarnos aquí y disfrutar de este pequeño rincón.\nNo necesitas conocer todo tu futuro para cuidar tu presente.\n¿Qué te gustaría permitirte ahora?».",
      "secondQuestion": "¿Qué te gustaría permitirte ahora?",
      "outcomes": [
        {
          "id": "1",
          "option": "Quiero centrarme en lo que puedo cuidar hoy.",
          "title": "El jardín de este momento",
          "text": "«Quizá puedas pensar en algo pequeño que esté a tu alcance: descansar, compartir un rato con alguien querido o atender una necesidad propia. No tienes que resolver toda la nueva etapa, cariño. A veces basta con cuidar este día»."
        },
        {
          "id": "2",
          "option": "Quiero aceptar que algunas cosas todavía son inciertas.",
          "title": "Las ramas que aún no conocemos",
          "text": "«Ay, cariño… No saber qué ocurrirá puede inquietarnos. Podemos reconocer esa incertidumbre sin intentar llenarla de respuestas apresuradas. Quizá algunas cosas se aclaren con el tiempo y otras necesiten decisiones futuras. Hoy no tienes que conocerlas todas»."
        },
        {
          "id": "3",
          "option": "Quiero encontrar pequeños motivos para ilusionarme.",
          "title": "Un brote de posibilidad",
          "text": "«Si te apetece, quizá puedas mirar qué posibilidades nuevas aparecen en esta etapa: una conversación diferente, más tiempo para ti o una costumbre que todavía está por nacer. No tienes que sentir ilusión obligatoriamente. Podemos dejarle un pequeño espacio por si llega»."
        },
        {
          "id": "4",
          "option": "Hoy prefiero descansar y dejar que las cosas sigan su curso.",
          "title": "Bajo las nuevas ramas",
          "text": "«Entonces descansemos, cariño. No necesitamos anticipar todas las estaciones ni decidir cómo debe crecer cada rama. Podemos quedarnos aquí un ratito, escuchando el jardín. Cuando te apetezca continuar, encontrarás tu propio camino»."
        }
      ],
      "sourceParagraph": 67,
      "approved": true
    }
  ],
  "selectorIntro": "Las familias se parecen un poco a los árboles: crecen, cambian y a veces sus ramas toman caminos diferentes.\n\nSi quieres, nos sentamos un ratito y me cuentas qué te trae por aquí."
};
