# spokelopez.com

Sitio personal y blog en [Astro](https://astro.build): portfolio, artículos técnicos y retos **AdventJS** enlazados con vídeos en TikTok. Salida **100% estática** (`output: 'static'`).

Dominio configurado en `astro.config.mjs`: [spokelopez.com](https://spokelopez.com).

## Stack

| Pieza | Uso |
|--------|-----|
| **Astro 5** | Páginas, layouts, generación estática |
| **MDX** | Posts con Markdown y componentes (p. ej. embeds de CodePen) |
| **Shiki** | Resaltado de código (`github-dark`, `wrap`) |
| **@astrojs/sitemap** | `sitemap-index.xml` en el build |
| **@vercel/analytics** / **@vercel/speed-insights** | Métricas en producción (componentes en `BaseLayout.astro`) |

Hay carpetas `components/` y `hooks/` heredadas de plantillas tipo shadcn; el blog público usa sobre todo **Astro + CSS** en `src/`.

## Estructura principal

```
src/
├── components/          # Header, Footer, PostCard, Pagination, CodePen, …
├── layouts/             # BaseLayout.astro, PostLayout.astro
├── pages/
│   ├── index.astro      # Inicio (portfolio + últimos posts)
│   ├── proyectos.astro
│   ├── recursos.astro
│   └── blog/
│       ├── index.astro      # Listado: filtros por tag + paginación (excluye category: adventjs)
│       ├── tutoriales.astro
│       ├── magento.astro
│       ├── shopify.astro
│       ├── mcp.astro
│       ├── adventjs.astro   # Retos + embeds TikTok (layout pensado para vídeo vertical)
│       └── *.mdx            # Entradas individuales
├── styles/
│   ├── global.css
│   └── blog-listings.css    # Listados del blog
└── layouts/ …
```

**Blog principal** (`/blog`): solo entradas cuyo `category` **no** es `adventjs`. Los retos AdventJS se listan en `/blog/adventjs` junto con los MDX de esa categoría.

## Desarrollo local

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # salida en dist/
npm run preview  # sirve dist/
```

Si en tu entorno el CLI intenta escribir telemetría en rutas sin permiso, puedes usar `ASTRO_TELEMETRY_DISABLED=1 npm run build`.

## Despliegue

- **Build**: `npm run build` → carpeta `dist/`.
- **Vercel** (recomendado con las dependencias actuales): proyecto estático, comando de build anterior, directorio de salida `dist`. Tras conectar el repositorio, Analytics y Speed Insights se activan en producción.

## Agregar un post (MDX)

Archivo nuevo en `src/pages/blog/` con frontmatter mínimo:

```mdx
---
layout: '../../layouts/PostLayout.astro'
title: 'Título'
description: 'Resumen para SEO y tarjetas.'
date: 'YYYY-MM-DD'
tags: ['CSS', 'Tutorial']
category: 'tutorial'   # tutorial | magento | adventjs | … (coherente con las secciones)
readingTime: '5 min'
tiktokUrl: 'https://www.tiktok.com/@spokelopez/video/...'  # opcional; enlace “Ver en TikTok” en el post
---

Contenido…
```

**AdventJS**: usa `category: 'adventjs'` y, si aplica, `challengeNumber: N` para ordenar en `/blog/adventjs`. Puedes enlazar el vídeo con `tiktokUrl` y el código en GitHub dentro del artículo.

**Demos CodePen** en MDX:

```mdx
import CodePen from '../../components/CodePen.astro';

<CodePen id="ID_DEL_PEN" user="tu-usuario-codepen" title="Título" height={480} />
```

Los tags se usan en filtros del listado; `PostLayout` aplica clases a tags conocidos (`CSS`, `JavaScript`, `Magento`, `AdventJS`, etc.).

## Licencia

© Eduardo López. Todos los derechos reservados.
