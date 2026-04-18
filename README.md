# spokelopez.com

Blog personal construido con [Astro](https://astro.build). Migración del blog anterior en WordPress ([comsoft-mexico.com](https://www.comsoft-mexico.com)) a un sitio estático moderno.

## Stack

- **Astro 5** — framework principal, generación estática
- **MDX** — formato de los posts (Markdown + componentes)
- **Shiki** — resaltado de sintaxis con tema `github-dark`
- **@astrojs/sitemap** — generación automática de sitemap

## Estructura

```
src/
├── components/       # Header, Footer, PostCard, Pagination, CodePen, etc.
├── layouts/          # BaseLayout.astro, PostLayout.astro
├── pages/
│   ├── index.astro
│   ├── blog/
│   │   ├── index.astro       # Listado general con filtros por tag
│   │   ├── tutoriales.astro  # Categoría: tutoriales
│   │   ├── adventjs.astro    # Categoría: AdventJS (con embeds de TikTok)
│   │   ├── magento.astro     # Categoría: Magento
│   │   └── *.mdx             # Posts individuales
│   ├── proyectos.astro
│   └── recursos.astro
└── styles/
    └── global.css
```

## Desarrollo local

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

## Agregar un post

Crea un archivo `.mdx` en `src/pages/blog/` con el siguiente frontmatter:

```mdx
---
layout: '../../layouts/PostLayout.astro'
title: 'Título del post'
description: 'Descripción breve.'
date: 'YYYY-MM-DD'
tags: ['CSS']           # CSS | JavaScript | Magento | Ecommerce | Tutorial | AdventJS
category: 'tutorial'   # tutorial | magento | adventjs
readingTime: '5 min'
tiktokUrl: 'https://www.tiktok.com/@spokelopez/video/...'  # opcional
---

Contenido en Markdown...
```

Los tags disponibles con estilos predefinidos son: `CSS`, `JavaScript`, `HTML`, `React`, `Astro`, `Tutorial`, `Magento`, `Ecommerce`, `AdventJS`.

## Licencia

© Eduardo López. Todos los derechos reservados.
