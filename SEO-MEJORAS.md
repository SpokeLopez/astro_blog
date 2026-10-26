# SEO Mejoras — spokelopez.com

Checklist de mejoras identificadas en el audit SEO. Hazlas en orden: las críticas primero.

---

## 🔴 Críticas (esta semana)

- [x] **1. Crear `public/robots.txt`**
  - ✅ Creado con `User-agent: *`, `Allow: /` y referencia al sitemap

- [x] **2. Añadir `<link rel="canonical">` en `BaseLayout.astro`**
  - ✅ URL canónica dinámica con `new URL(Astro.url.pathname, Astro.site)`

- [x] **3. Añadir Open Graph y Twitter Cards en `BaseLayout.astro`**
  - ✅ `og:type`, `og:url`, `og:title`, `og:description`, `og:image`, `og:locale`, `og:site_name`, `twitter:card`

- [x] **4. Pasar `image` y `type="article"` desde `PostLayout.astro` a `BaseLayout`**
  - ✅ Los posts usan su cover como imagen OG; fallback a foto de perfil si no hay cover

- [x] **5. Corregir el sufijo `| DevTips` en `PostLayout.astro`**
  - ✅ Cambiado a `| SpokeLopez`

- [x] **6. Subir el sitemap a Google Search Console**
  - ✅ Search Console verificado vía TXT en Vercel DNS
  - ⚠️ Sitemap `sitemap-index.xml` pendiente de enviar tras el próximo deploy en Vercel

---

## 🟠 Alta prioridad (este mes)

- [x] **7. Añadir JSON-LD `BlogPosting` en `PostLayout.astro`**
  - ✅ Schema con `headline`, `description`, `datePublished`, `author`, `publisher`, `url`, `image`

- [x] **8. Crear página `/sobre-mi` y enlazarla desde el Header**
  - ✅ Página con hero, foto, bio, timeline de experiencia, stack técnico y CTA
  - ✅ Enlazada desde `Header.astro`

- [x] **9. Añadir bloque de autor al final de cada post**
  - ✅ Foto + "Escrito por Eduardo López" + cargo + enlace a `/sobre-mi`

- [x] **10. Añadir sección "Artículos relacionados" al final de cada post**
  - ✅ 2 posts relacionados por tags en común; completa con los más recientes si no hay suficientes

---

## 🟡 Mejoras incrementales

- [x] **11. Corregir meta descriptions y títulos con errores ortográficos en MDX**
  - ✅ `js-array-methods.mdx` — título y description con acentos
  - ✅ `css-grid-layout.mdx` — título orientado a keyword + description corregida
  - ✅ `js-como-declarar-funciones.mdx` — description ampliada (~140 chars, incluye hoisting y this)
  - ✅ `aprendiendo-composer-proyectos.mdx` — título → "Qué es Composer y cómo usarlo en proyectos PHP"
  - ✅ `guia-less-archivos-less.mdx` — título → "Cómo compilar y usar Less CSS en proyectos frontend y Magento"
  - ✅ `css-sass.mdx` — título → "Qué es SASS y las 5 funcionalidades que más uso en CSS"
  - ✅ `php-introduccion-poo.mdx` — título → "Introducción a la POO en PHP: clases, objetos, herencia y encapsulación"

- [ ] **12. Añadir covers WebP a posts sin imagen** ⏳ *Pendiente: crear imágenes*
  - Posts sin `image` en frontmatter: `css-grid-layout`, `js-array-methods`, `js-como-declarar-funciones`, `css-sass`, `css-glassmorphism`, `aprendiendo-composer-proyectos`, `magento-tema-hijo`, `magento-media-queries`, `guia-less-archivos-less`, `adventjs-2021-reto-*`
  - Tamaño: 1200×630 px, formato WebP — colocar en `public/images/blog/covers/`
  - Para AdventJS, un cover genérico de la serie vale para todos los retos
  - Una vez creadas las imágenes, añadir `image` e `imageAlt` en el frontmatter de cada post

- [ ] **13. Distinguir cover entre los dos posts de Liquid** ⏳ *Pendiente: crear imágenes*
  - `introduccion-plantillas-liquid.mdx` y `objetos-propiedades-liquid.mdx` comparten la misma imagen
  - Crear un cover diferente para cada uno y actualizar `image` e `imageAlt` en su frontmatter

- [ ] **14. Ampliar contenido de posts thin** ⏳ *Pendiente: redacción*
  - `css-grid-layout.mdx` (~300 palabras) — añadir casos de uso reales, errores comunes, demo propia
  - `js-array-methods.mdx` (~350 palabras) — ampliar con ejemplos más complejos y encadenamiento avanzado

- [x] **15. Añadir breadcrumbs con schema `BreadcrumbList` en `PostLayout.astro`**
  - ✅ Estructura: Inicio › Blog › Título del post con `nav aria-label` + `aria-current`
  - ✅ JSON-LD `BreadcrumbList` con 3 posiciones inyectado en el `<head>` via slot

---

## 🔵 Rendimiento

- [x] **16. Optimizar carga de Google Fonts (render-blocking) en `BaseLayout.astro`**
  - ✅ Cambiado de `<link rel="stylesheet">` síncrono a `rel="preload" as="style"` + `onload` + `<noscript>` fallback

- [ ] **17. Verificar Core Web Vitals en producción**
  - Revisar LCP, INP y CLS en Google Search Console → Experiencia de página
  - Foco especial en móvil — hacerlo tras el próximo deploy

---

## Notas

- El sitemap lo genera Astro automáticamente en `/sitemap-index.xml` — enviar en Search Console tras el próximo deploy.
- El schema markup **no** se puede verificar con `curl` ni `web_fetch`. Usar [Rich Results Test](https://search.google.com/test/rich-results) tras el deploy.
- No hay configuración internacional (hreflang) porque el sitio es monolingüe en español — no aplica.
- Las tasks 12, 13 y 14 dependen de trabajo de diseño/redacción externo al código.
