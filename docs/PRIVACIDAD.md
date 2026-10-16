# Datos y límites de privacidad

## Persistencia

- Ideas del refugio: IndexedDB, hasta 300 caracteres.
- Notas de cada mundo: bases IndexedDB independientes, hasta 2000 caracteres; incluyen identificador, mundo, escenario, texto y fechas.
- Frases del baúl: IndexedDB, hasta 500 caracteres; incluyen identificador, texto y fecha.
- Ajustes y conocimiento de pistas de audio: localStorage.
- Elecciones y borradores: memoria, sin guardado automático como historial emocional.

## Grabación

El permiso del micrófono solo se solicita al comenzar a grabar. La señal se usa para capturar audio y mostrar su amplitud; no se transcribe ni se interpreta su contenido. El MP3 se prepara localmente y se descarga por decisión de la persona. La grabación no se guarda en las bases de notas.

El código detiene las pistas del micrófono y libera los recursos al terminar o abandonar la vista. Pasar a segundo plano durante captura o preparación provoca el descarte previsto en el módulo. No se debe confiar en esta herramienta como única copia de un archivo importante.

## Límites

El código revisado no implementa la subida de notas, frases o grabaciones. El alojamiento puede mantener registros técnicos de acceso; no se ha auditado su retención. Los enlaces externos abren servicios ajenos a DIEZ.

Los datos locales no se sincronizan ni tienen copia remota. No se declara cifrado de las notas. Otras personas con acceso al mismo perfil podrían leerlas. Borrar los datos del sitio puede eliminarlas.

La evaluación se realiza con datos ficticios. Este repositorio no incluye conversaciones privadas, bases de datos de visitantes ni grabaciones personales.

