# Portal CET Nº33 · Aprender haciendo

Portal institucional desarrollado para ChatGPT Sites, siguiendo el boceto aprobado: blanco, azul oscuro, amarillo, fotografías de talleres y quince accesos principales. Incluye una sección de novedades y calendario.

## Funciones

- Biblioteca enlazada a la Biblioteca Digital MMO existente, sin trasladar ni duplicar sus cargas.
- Staff público, Classroom y webs docentes, Secretaría con dos enlaces de licencias, cuaderno y boletines.
- Planificaciones públicas y acompañamiento/trayectorias con acceso autorizado, filtros por ciclo, materia, año lectivo, curso y división.
- Proyectos, viajes y Expo ENET con cargas de imágenes y galerías horizontales.
- Formularios para familias, propuestas comunitarias y colaboraciones; las consultas se guardan en el panel.
- Empresas, Cooperadora, Centro de estudiantes e inscripción con PDF y correo editable.
- Administración central: contenidos, contactos, enlaces, responsables por sección y consultas recibidas.

## Configuración inicial

1. Abrir el sitio privado y entrar a **Administración central**.
2. Pulsar **Activar mi panel**: la cuenta del propietario de este sitio privado queda como administradora.
3. Completar correos y enlaces en **Configuración** y cargar contenidos en cada sección.
4. Autorizar docentes y responsables por su correo de ChatGPT. El rol administrador gestiona todo; el rol responsable solo las secciones asignadas.
5. Configurar propietario **antes** de habilitar acceso público. El endpoint de inicialización debe desactivarse o permanecer inaccesible una vez registrado el propietario.

## Correos y formularios

Los formularios guardan consultas en D1, visibles solamente a administradores. El visitante puede enviar una copia con su aplicación de correo al destinatario configurado. **No hay envío automático de emails en esta versión**: falta elegir y configurar un proveedor de correo con credenciales del remitente. Las direcciones pendientes no están inventadas.

El botón de inscripción abre el correo configurado; el usuario debe adjuntar la planilla PDF completada en su aplicación de correo.

## Archivos y privacidad

D1 conserva contenidos y configuración; R2 almacena archivos. Máximo 25 MB por archivo, 12 archivos y 60 MB por envío. Los PDF de trayectorias y sus metadatos se verifican en el servidor antes de consultar o descargar. Los docentes autorizados sobre una sección pueden editar los registros de esa sección; todavía no hay permisos por materia individual.

Las fotografías iniciales provienen del boceto y son ilustrativas. El reemplazo de los archivos de `public/media/` cambia estas fotografías; el panel administra las imágenes de publicaciones y galerías.

## Desarrollo

Requiere Node compatible con el starter y pnpm.

```sh
node scripts/install-ci.mjs
pnpm db:generate
pnpm build
```

El esquema está en `db/schema.ts` y las migraciones en `drizzle/`. No se crean tablas durante solicitudes. La configuración de alojamiento está en `.openai/hosting.json`; Sites conecta D1 (`DB`) y R2 (`BUCKET`) y aplica las migraciones al publicar. La autenticación de ChatGPT Sites es una dependencia de plataforma que requiere adaptación para mudanzas.

## Estructura

- `app/portal.tsx`: interfaz y panel central.
- `app/globals.css`: diseño responsive.
- `app/api/portal/`: configuración, permisos y contenidos.
- `app/api/contacto/`: recepción de consultas.
- `app/api/files/`: descargas con permisos.
- `lib/sections.ts`: accesos y configuración inicial.
- `lib/catalog.ts`: materias validadas de MMO.
- `public/media/`: recursos visuales.

GitHub conserva código y migraciones; **no** incluye las consultas, datos personales o archivos cargados en funcionamiento. No subir tokens ni bases de datos reales al repositorio.

## La escuela

En Administración central → Contenidos → La escuela se agregan textos y fotografías como publicaciones editables. La presentación y el enlace opcional de la imagen principal se modifican en Configuración. Si el enlace está vacío se conserva la imagen original. Esta sección también admite responsables autorizados y no agrega un acceso extra a la grilla de quince tarjetas.
