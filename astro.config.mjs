import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://spokelopez.com',
  trailingSlash: 'always',
  integrations: [mdx(), sitemap()],
  output: 'static'
});
