# Arquitectura de DIEZ 0.8.5

Cliente web estático con módulos JavaScript y navegación mediante fragmentos de URL. `app.js` compone las vistas y coordina la navegación. Cada mundo separa datos, modelo de decisiones, interfaz y notas.

## Flujos

- Narrativa: elección → estado en memoria → texto preparado → vista.
- Escritura: borrador temporal → guardado expreso → IndexedDB → consulta, edición o eliminación.
- Voz: permiso → MediaRecorder → decodificación local → mezcla mono → trabajador lamejs → MP3 → escucha y descarga o descarte.
- Respiración: estado de etapa → reproductor de MP3 y animación visual independiente, sin micrófono.

Nova y Nexo utilizan dos decisiones de dos opciones; la segunda pregunta depende de la primera elección. Alma y Luz utilizan dos decisiones de cuatro opciones; los cierres de sus modelos se seleccionan por la segunda elección. No se atribuye el mismo árbol de ramificación a todos los mundos.

`world-notes.js` reúne el editor; `next-step.js` ofrece continuaciones voluntarias; `draft-guard.js` interviene ante borradores pendientes. `presentation.js` coordina los audios. `breathing-player.js` controla solicitudes, cambios de etapa, errores y tiempos de espera.

El Service Worker precarga código, estilos y medios principales. Las imágenes y audios restantes se almacenan al solicitarse. La primera visita y las actualizaciones requieren conexión; los recursos no descargados no se garantizan sin conexión. El navegador puede eliminar datos y caché.

El paquete no incluye servidor propio, autenticación de visitantes ni una API generativa en tiempo de uso. Los recursos del codificador se sirven localmente.

## Alcance de la evidencia

La copia de `dist` se coteja por tamaño y SHA-256 con la fuente identificada. La descripción técnica no equivale a una nueva batería completa de pruebas. Siguen pendientes el cierre de auditoría en móvil físico, las mediciones de rendimiento móvil y la revisión integral de accesibilidad.

