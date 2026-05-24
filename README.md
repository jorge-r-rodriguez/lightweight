# Jorge Rodriguez Portfolio

Portfolio profesional de Jorge Rafael Rodriguez, enfocado en desarrollo frontend Angular, UX/UI, automatizacion, proyectos corporativos y trayectoria laboral.

Sitio construido con Vue 3, TypeScript, Vite y Three.js. Incluye experiencia 3D, listado de proyectos reales, seccion de servicios, trayectoria laboral y formulario de contacto con endpoint PHP.

## Stack

- Vue 3 con `<script setup>`
- TypeScript
- Vite
- SCSS
- GSAP y Lenis para animaciones y scroll
- Three.js y GLSL para la escena 3D
- Howler para audio
- PHP para el envio del formulario de contacto

## Scripts

| Comando | Descripcion |
| --- | --- |
| `npm run dev` | Levanta el servidor local de desarrollo |
| `npm run build` | Ejecuta typecheck y genera la build en `dist/` |
| `npm run preview` | Sirve la build de produccion localmente |
| `npm run typecheck` | Ejecuta solo validacion TypeScript |

## Estructura Principal

- `src/features/home/components/` contiene las secciones principales: hero, perfil, servicios, trayectoria, proyectos y contacto.
- `src/content/projects/` contiene los datos de cada proyecto.
- `src/content/projects/previews/` contiene las tarjetas del listado de proyectos.
- `public/projects/` contiene las imagenes usadas por los proyectos.
- `public/enviar-contacto.php` contiene el endpoint de envio del formulario.
- `src/components/tagVariants.ts` define las etiquetas tecnicas disponibles para proyectos.

## Proyectos Incluidos

- Tienda Coca-Cola
- Todo Noticias (TN)
- El Trece TV
- Seguridad GBA
- Poncho Frontend
- Cienradios
- The Rock Store
- Pan con Pan
- Mercado Fitness
- Polotop
- IADPI
- Egraphics

## Formulario de Contacto

El formulario envia datos a `public/enviar-contacto.php` usando `fetch`.

El endpoint PHP incluye:

- Validacion de metodo `POST`
- Validacion de origen
- Honeypot antispam
- Rate limiting por IP
- Validacion de nombre, email y mensaje
- Filtro basico de spam
- Proteccion contra header injection
- Envio de email HTML a `info@jorgerodriguez.es`

Para que el envio funcione en produccion, el hosting debe soportar PHP y tener habilitada la funcion `mail()`.

## Desarrollo Local

Instalar dependencias:

```bash
npm install
```

Levantar entorno local:

```bash
npm run dev
```

Generar build:

```bash
npm run build
```

## Deploy

La build se genera en `dist/`.

Si se despliega en un hosting PHP tradicional, subir el contenido de `dist/` y verificar que `enviar-contacto.php` quede accesible en la raiz del dominio.

## Repositorio

Repositorio GitHub:

https://github.com/jorge-r-rodriguez/lightweight

## Base y Creditos

Este proyecto fue adaptado a partir de una base visual/interactiva creada originalmente por David Heckhoff.

Portfolio original:

https://david-hckh.com

El contenido, proyectos, textos, datos profesionales e imagenes de casos incluidos en esta version pertenecen a Jorge Rafael Rodriguez.
