// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Fully static site. No Vercel adapter: api/contact.js stays a plain Vercel Function.
// URLs without trailing slash (/fr, /en/legal-notice), served from fr.html,
// en/legal-notice.html… thanks to "cleanUrls" in vercel.json.
export default defineConfig({
  site: 'https://www.myblok.fr',
  trailingSlash: 'never',
  build: { format: 'file' },
  // In production Vercel redirects "/" first (vercel.json); this covers `astro dev`.
  redirects: { '/': '/fr' },
  vite: {
    plugins: [tailwindcss()],
  },
});
