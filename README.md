# Jorge Rodriguez Portfolio

Portfolio profesional de Jorge Rafael Rodriguez, enfocado en desarrollo frontend Angular, UX/UI, automatización, proyectos corporativos y trayectoria laboral.

Sitio construido con Vue 3, TypeScript, Vite y Three.js. Incluye experiencia 3D, listado de proyectos reales, sección de servicios, trayectoria laboral y formulario de contacto con endpoint PHP.

## Stack

- Vue 3 con `<script setup>`
- TypeScript
- Vite
- SCSS
- GSAP y Lenis para animaciónes y scroll
- Three.js y GLSL para la escena 3D
- Howler para audio
- PHP para el envío del formulario de contacto

## Scripts

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Levanta el servidor local de desarrollo |
| `npm run build` | Ejecuta typecheck y genera la build en `dist/` |
| `npm run preview` | Sirve la build de producción localmente |
| `npm run typecheck` | Ejecuta solo validación TypeScript |

## Estructura Principal

- `src/features/home/components/` contiene las secciones principales: hero, perfil, servicios, trayectoria, proyectos y contacto.
- `src/content/projects/` contiene los datos de cada proyecto.
- `src/content/projects/previews/` contiene las tarjetas del listado de proyectos.
- `public/projects/` contiene las imágenes usadas por los proyectos.
- `public/enviar-contacto.php` contiene el endpoint de envío del formulario.
- `src/components/tagVariants.ts` define las etiquetas técnicas disponibles para proyectos.

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

- Validación de metodo `POST`
- Validación de origen
- Honeypot antispam
- Rate limiting por IP
- Validación de nombre, email y mensaje
- Filtro básico de spam
- Protección contra header injection
- Envío de email HTML a `info@jorgerodriguez.es`

Para que el envío funcione en producción, el hosting debe soportar PHP y tener habilitada la función `mail()`.

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

Si se despliega en un hosting PHP tradicional, subir el contenido de `dist/` y verificar que `enviar-contacto.php` quede accesible en la raíz del dominio.

## Repositorio

Repositorio GitHub:

https://github.com/jorge-r-rodriguez/lightweight

## Base y Creditos

Este proyecto fue adaptado a partir de una base visual/interactiva creada originalmente por David Heckhoff.

Portfolio original:

https://david-hckh.com

El contenido, proyectos, textos, datos profesionales e imágenes de casos incluidos en esta versión pertenecen a Jorge Rafael Rodriguez.
