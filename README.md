# DIEZ · Un lugar para volver a ti

Aplicación web de David Salgado, preparada para el Hackathon de Vibe Coding E7 de BIG School.

**Versión pública documentada:** 0.15.6 · 17 de octubre de 2026  
**Sincronización del repositorio:** 18 de octubre de 2026  
**Aplicación:** https://diezcontigo.makanan-music.chatgpt.site/  
**Revisión de Sites:** 16  
**Commit de la fuente publicada:** `c2eb928fdc02fcbf12cdac4b0d82d9eac8fbe0a8`

## Qué ofrece

DIEZ reúne relatos interactivos con Nova, Nexo, Alma y Luz, herramientas para hacer una pausa, escribir y grabar una nota de voz propia. Está dirigida a personas adultas y permite explorar o salir sin completar un itinerario.

- **Nova · Relaciones**, **Nexo · Trabajo**, **Alma · Familia** y **Luz · Vida personal:** recorridos escritos con elecciones y continuaciones preparadas.
- **Respira conmigo:** tres etapas con audio y controles de pausa, avance y reinicio; no usa el micrófono.
- **Suelta tu voz:** grabación iniciada por la persona, reacción visual al nivel de voz y descarga opcional en MP3.
- **Diez pequeñas luces:** historias que se pueden leer a ritmo propio y frases para guardar en la Caja de las emociones.
- **Tu refugio y notas personales:** escritura y guardado en el navegador.
- **Aquí contigo:** orientación y acceso a recursos externos de apoyo.
- **Copia de notas y frases:** exportación JSON y recuperación local desde Ajustes; las grabaciones se descargan por separado.

En Inicio, las cuatro fichas de personajes ocupan el área principal y los tres accesos a herramientas se presentan en una columna lateral en escritorio. Tu refugio y Aquí contigo quedan debajo. En tablet y móvil el diseño se reorganiza para mantener el contenido legible.

La portada conserva su título y subtítulo alineados a la izquierda, sin la etiqueta «Demostración V0.2», y recupera la frase descriptiva. Los orbes mantienen su tamaño uniforme por breakpoint y margen interior en móvil; el halo aparece con la interacción o al desplazarse, no en reposo. La guía «¿Qué es DIEZ?» explica las herramientas y las diez historias. El título de la pestaña de Inicio es «Un lugar para volver a ti».

DIEZ ofrece acompañamiento general. No diagnostica, no presta atención de emergencia ni cuenta con una persona atendiendo en directo. No se afirma eficacia clínica demostrada.

## Probar la aplicación

La versión pública se abre sin cuenta ni contraseña. Para grabar se necesita conexión segura y permiso del micrófono. Los demás apartados se pueden explorar sin concederlo. La evaluación debe utilizar textos y grabaciones ficticios, sin información personal.

## Ejecutar una copia local

El proyecto es estático: HTML, CSS, JavaScript y recursos del directorio `dist`. No necesita paquetes ni claves de API.

```sh
python3 -m http.server 8000 --bind 127.0.0.1 --directory dist
```

Abre `http://127.0.0.1:8000/`. No abras `index.html` directamente: los módulos y algunas API requieren un servidor. La grabación depende de las funciones y permisos del navegador.

## Estructura

```text
dist/                  Aplicación y recursos de la versión 0.15.6
  app.js               Navegación y vistas principales
  nova/ nexo/ alma/ luz/ Contenido, modelos e interfaces
  lights/              Historias, baúl y frases locales
  media/               Imágenes publicadas y variantes responsivas
  audio/               Audios de los personajes y herramientas
  sw.js                Caché versionada de recursos estáticos
docs/                  Arquitectura, privacidad, entrega y procedencia
records/               Fuente y licencias de lamejs 1.2.1
MANIFEST.sha256        Huellas SHA-256 de los archivos de esta entrega
```

## Datos y audio

Las notas y frases se guardan en IndexedDB; los ajustes se guardan en localStorage. No hay cuenta, sincronización ni copia remota de las notas. En Ajustes se puede descargar una copia JSON de ideas, notas y frases e importarla después. El archivo contiene los textos y debe guardarse en privado; las grabaciones se descargan por separado. Suelta tu voz graba solo cuando se pulsa el control; su procesamiento visual y el MP3 se preparan localmente. No se transcriben ni interpretan las palabras.

El código no incorpora servidor de aplicación, inicio de sesión ni generación de respuestas mediante IA durante el uso. Codex se utilizó durante la construcción. Consulta [privacidad y límites](docs/PRIVACIDAD.md).

## Documentación del concurso

- [Documento técnico en Google Docs](https://docs.google.com/document/d/1qq_A_ga-EE0u2kx868mt9oB__UROqHxhHvIuTBoaoGo/edit)
- [Historial de prompts en Google Docs](https://docs.google.com/document/d/1VDb5_oycVW9fQyUt6phJkW2PVbfdvNx3hxsuANubhNA/edit)
- [Carpeta de entrega en Google Drive](https://drive.google.com/drive/folders/17juXZiqdN_yypJcf5dQqyfJwEZVezOjP)
- [Vídeo demostrativo](https://drive.google.com/file/d/1rN1gQGylptkfvUFcG4NXYD64nZLi4uMQ/view)
- [Estado de los entregables](docs/ENTREGA_CONCURSO.md)
- [Arquitectura](docs/ARQUITECTURA.md)
- [Recursos y derechos](docs/RECURSOS_Y_DERECHOS.md)

El historial de GitHub registra la preparación de esta copia del proyecto; no se presenta como el historial completo de desarrollo. El documento de prompts conserva ese proceso por separado. El repositorio es público desde el 18 de octubre de 2026; se comprobó su consulta sin iniciar sesión.

## Recursos de terceros

La conversión a MP3 utiliza lamejs 1.2.1, con sus avisos y licencias. Consulta [recursos y derechos](docs/RECURSOS_Y_DERECHOS.md). Esta entrega no concede una licencia general de código abierto a DIEZ.
