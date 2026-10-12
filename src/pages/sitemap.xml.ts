// sitemap.xml, generated at build time from the same list of pages as the site.
import { articles, realisations, LANGS } from '../content'
import { pagePath } from '../lib/routes'
import { SITE_URL } from '../lib/seo'

export function GET() {
  const paths = LANGS.flatMap((lang) => [
    pagePath('home', lang),
    pagePath('legal', lang),
    pagePath('privacy', lang),
    ...realisations.map((r) => pagePath('realisation', lang, r.slug)),
    ...articles.map((a) => pagePath('article', lang, a.slug)),
  ])
  const today = new Date().toISOString().slice(0, 10)
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((p) => `  <url>\n    <loc>${SITE_URL}${p}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`).join('\n')}
</urlset>
`
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } })
}
