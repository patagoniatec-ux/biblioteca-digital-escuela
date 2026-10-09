# Biblioteca Digital — Maestro Mayor de Obras

Biblioteca escolar organizada en ciclo básico y ciclo superior, con materias y años editables. Permite cargar, consultar, editar y eliminar PDF, imágenes, videos y enlaces, y autorizar docentes por correo.

## Biblioteca publicada

https://biblioteca-mmo.sleekshore.chatgpt.site

La biblioteca publicada conserva sus controles de acceso. Este repositorio contiene el código; publicar el repositorio no hace pública la biblioteca ni sus documentos.

## Código original

Esta es una copia del código de la biblioteca creada en ChatGPT Sites. El diseño, los colores, la estructura y la lógica de la aplicación se conservan. Utiliza React y TypeScript sobre Vinext; no es una página HTML estática. Convertirla a un único HTML perdería las funciones de almacenamiento y autorización.

- `app/library.tsx`: interfaz y formularios.
- `app/globals.css`: colores, estilos y diseño adaptable.
- `app/page.tsx` y `app/layout.tsx`: página principal y estructura HTML.
- `app/api/library/route.ts`: carga, edición y autorización de docentes.
- `app/api/files/[id]/route.ts`: lectura de los archivos subidos.
- `lib/catalog.ts`: materias iniciales orientativas.
- `lib/storage.ts`, `db/schema.ts` y `drizzle/`: acceso a datos, esquema y migraciones.
- `components/ui/`: componentes de interfaz.
- `public/`: recursos estáticos.
- `build/`, `scripts/` y archivos de configuración: ejecución y compilación.

## Requisitos

Node.js 22.13.0 o superior, pnpm y un entorno compatible con Cloudflare Workers. El alojamiento original utiliza ChatGPT Sites, base de datos D1 (`DB`) y almacenamiento R2 (`BUCKET`).

```sh
pnpm install --frozen-lockfile
pnpm run dev
pnpm run build
```

El funcionamiento completo requiere configurar las vinculaciones D1 y R2, aplicar las migraciones y disponer de la autenticación de ChatGPT Sites. Un repositorio GitHub o GitHub Pages por sí solo no proporciona estos servicios. Para probar fuera de Sites, la configuración de autenticación y almacenamiento debe adaptarse antes de habilitar cargas.

## Uso

1. Abrir la biblioteca publicada con la cuenta propietaria.
2. Pulsar “Activar mi panel” la primera vez.
3. Seleccionar ciclo y materia y pulsar “Cargar material”.
4. Elegir PDF, imagen, video o enlace; completar título y descripción y guardar.
5. En “Docentes”, autorizar los correos correspondientes. El acceso al sitio debe compartirse por separado.

Los archivos admiten hasta 50 MB por carga. Para videos grandes puede utilizarse un enlace. Los docentes autorizados pueden editar material de cualquier materia; esta versión no restringe la edición a una materia por docente.

## Qué contiene esta copia

Código fuente, dependencias declaradas, configuración y migraciones. Los documentos cargados, los registros de la base de datos, las claves y las sesiones no forman parte del repositorio y permanecen en el alojamiento original. La conexión con GitHub no crea sincronización automática con el sitio publicado.
