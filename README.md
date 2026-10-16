# DIEZ · Un lugar para volver a ti

Aplicación web de **David Salgado**, preparada para el Hackathon de Vibe Coding E7 de BIG School.

[Abrir la aplicación](https://diezcontigo.makanan-music.chatgpt.site/)

## Qué ofrece

DIEZ reúne relatos interactivos, personajes con voz, escritura, grabación personal y pausas visuales. Está dirigida a personas adultas y permite avanzar o detenerse sin registrarse.

- **Nova · Relaciones:** cinco escenarios y 19 recorridos.
- **Nexo · Trabajo:** cinco escenarios y 20 recorridos.
- **Alma · Familia:** cinco escenarios y 20 recorridos.
- **Luz · Vida personal:** cinco escenarios y 20 recorridos, más **Suelta tu voz**.
- **Respira conmigo:** tres etapas con audio, pausa, repetición y reinicio de la experiencia.
- **Tu refugio y notas personales:** escritura y guardado local.
- **Diez pequeñas luces y Caja de las emociones:** lecturas y frases propias guardadas en el navegador.
- **Aquí contigo:** orientación y acceso a apoyo humano o recursos externos.

DIEZ es acompañamiento general. No diagnostica, no presta atención de emergencia ni ofrece atención humana en directo. No se afirma eficacia clínica demostrada.

## Probarla

La versión pública se abre sin cuenta ni contraseña. Para grabar se necesita una conexión segura y permiso del micrófono. Se pueden explorar los demás apartados sin concederlo.

Para la evaluación, utiliza frases y grabaciones ficticias, sin información personal. No es necesario llamar a los servicios externos para demostrar los enlaces.

## Ejecutar una copia local

El proyecto es estático: HTML, CSS y módulos JavaScript. No necesita instalar paquetes ni configurar claves de API.

Con Python 3 disponible, desde la carpeta del repositorio:

```sh
python3 -m http.server 8000 --bind 127.0.0.1 --directory dist
```

Abre `http://127.0.0.1:8000/`. No abras `index.html` directamente como archivo: los módulos y ciertas API requieren un servidor. El uso del micrófono depende de la compatibilidad y los permisos del navegador.

## Estructura

```text
dist/                  Aplicación y recursos publicados
  app.js               Navegación y vistas principales
  nova/ nexo/ alma/ luz/ Contenido, modelos e interfaces de los personajes
  lights/              Lecturas, baúl y frases locales
  media/               Imágenes WebP
  audio/               Tres audios de respiración
  sw.js                Caché versionada de recursos estáticos
docs/                  Arquitectura, privacidad, entrega y procedencia
records/               Paquete original de la dependencia lamejs
MANIFEST.sha256        Huellas de los archivos de esta entrega
```

## Datos y audio

Las notas y las frases se guardan en IndexedDB del navegador. Los ajustes usan localStorage. No hay cuenta de usuario, sincronización ni copia remota de las notas.

Suelta tu voz captura temporalmente y convierte la grabación a **MP3 mono, 32 kHz y 64 kb/s**, en el propio dispositivo. La visualización usa la amplitud del micrófono; no reconoce palabras ni interpreta emociones. La descarga es voluntaria y el código no envía el audio a un servidor.

El acceso a la aplicación sí requiere recursos del alojamiento web. No se presenta el almacenamiento local como cifrado o confidencialidad garantizados. Consulta [privacidad y límites](docs/PRIVACIDAD.md).

## Versión y proceso

Este repositorio contiene una copia íntegra de los 160 archivos de `dist` de la versión **0.8.5**, identificada en la publicación del 16 de octubre de 2026. La procedencia y el commit de la fuente se registran en [RELEASE.json](docs/RELEASE.json).

La importación a GitHub se realiza después de la construcción de la aplicación. El historial de este repositorio no se presenta como el historial completo de desarrollo: el proceso de Vibe Coding se documenta en un Google Doc independiente.

Los textos de los personajes están preparados de antemano. Codex se utilizó durante la construcción; DIEZ no consulta un modelo generativo para producir las respuestas de sus recorridos en tiempo de uso.

## Documentación del concurso

- [Documento técnico en Google Docs](https://docs.google.com/document/d/1Sd7_2q1nnrWWoOicaX4cgcKnKp_MYEbDzkCoe-4Nm04/edit)
- [Historial técnico de prompts en Google Docs](https://docs.google.com/document/d/106YUuX_3Fu7leLoYc07gve_xoPJ4BCv3HVjDHP1KzMw/edit)
- [Estado y pendientes de entrega](docs/ENTREGA_CONCURSO.md)

Los documentos se preparan de forma privada hasta verificar los permisos para el jurado.

## Recursos de terceros

La conversión a MP3 utiliza **lamejs 1.2.1**, distribuido con sus avisos, licencias y fuente original. Consulta [recursos y derechos](docs/RECURSOS_Y_DERECHOS.md). No se concede en esta entrega una licencia general de código abierto a DIEZ.

