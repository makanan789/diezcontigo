# Arquitectura de DIEZ 0.15.6

Cliente web estático servido desde `dist/`, con módulos JavaScript y navegación mediante fragmentos de URL. `app.js` compone las vistas principales. Cada mundo separa datos, modelo de decisiones, interfaz y notas.

## Flujos

- Narrativa: elección → estado temporal → texto preparado → vista.
- Escritura: borrador temporal → guardado expreso → IndexedDB → consulta, edición o eliminación.
- Voz: permiso expreso → MediaRecorder → decodificación local → conversión mono con lamejs → MP3 → escucha, descarga o descarte.
- Respiración: etapa elegida → reproducción de audio y animación visual independiente, sin micrófono.
- Historias: selección de lectura → texto y escenas preparados → frase original o personal en la Caja de las emociones.
- Copia local: lectura de ideas, notas y frases → JSON descargado por decisión de la persona → validación y recuperación desde Ajustes. Las grabaciones no se incluyen. `local-backup.js` conserva las entradas existentes y añade las que falten.

Nova y Nexo utilizan modelos de decisión diferenciados de los de Alma y Luz; no se atribuye el mismo árbol a todos los mundos. `world-notes.js` reúne el editor de notas; `next-step.js` presenta continuaciones voluntarias; `draft-guard.js` avisa si hay un borrador pendiente. `presentation.js` coordina el audio de personajes. `breathing-player.js` controla solicitudes, cambios de etapa, errores y tiempos de espera.

## Inicio y comportamiento visual

La página de inicio agrupa las cuatro fichas de personajes en el área principal y deja Respira conmigo, Suelta tu voz y Diez pequeñas luces en una columna derecha en escritorio. Tu refugio y Aquí contigo aparecen debajo. En tablet, los tres accesos se disponen en una fila; en móvil se apilan. El título, el subtítulo y la frase descriptiva de portada se mantienen alineados a la izquierda.

Los orbes usan dimensiones uniformes en cada breakpoint. El halo se activa al pasar el puntero o al centrar la tarjeta durante el desplazamiento; no se mantiene en reposo. El comportamiento respeta la preferencia de movimiento reducido. La interfaz de Luz centra el nombre, el rótulo y el adorno solar. Se retiró el enlace redundante a las presentaciones desde los selectores porque el audio ya se puede escuchar al entrar.

## Almacenamiento y conectividad

El Service Worker precarga código, estilos y medios principales. Las imágenes y audios restantes se almacenan al solicitarlos. La primera visita y las actualizaciones requieren conexión; los recursos no descargados no se garantizan sin conexión. El navegador puede eliminar los datos y la caché.

El paquete no incluye servidor propio, autenticación de visitantes ni una API generativa en tiempo de uso. Los recursos del codificador se sirven localmente.

## Procedencia y límites

La revisión de Sites 16 corresponde al commit de la fuente `c2eb928fdc02fcbf12cdac4b0d82d9eac8fbe0a8`. `dist/release.json` identifica la versión 0.15.6; `MANIFEST.sha256` verifica el contenido de esta copia. La actualización documental no equivale a una batería completa de pruebas funcionales, una revisión en móvil físico, mediciones de rendimiento ni una auditoría integral de accesibilidad.
