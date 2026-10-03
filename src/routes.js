import { content, realisations } from './content/index.js'

// Every page is a real, prerendered HTML file (see scripts/prerender.js): links
// between pages are plain <a href>, no client-side router needed.
// URLs are /<lang>/<translated slug>; "/" redirects to /fr (vercel.json).

export const LANGS = ['fr', 'en']
export const DEFAULT_LANG = 'fr'

const SLUGS = {
  legal: { fr: 'mentions-legales', en: 'legal-notice' },
  privacy: { fr: 'confidentialite', en: 'privacy-policy' },
  realisation: { fr: 'realisations', en: 'projects' },
}

// URL of a page in a given language. `slug` is only used by realisation pages.
export function pagePath(name, lang, slug) {
  if (name === 'home' || name === 'notFound') return `/${lang}`
  if (name === 'realisation') return `/${lang}/${SLUGS.realisation[lang]}/${slug}`
  return `/${lang}/${SLUGS[name][lang]}`
}

// Link to a section of the home page (key from `anchors` in the content files), valid from any page.
export const homeSection = (lang, key) => `/${lang}#${content[lang].anchors[key]}`

// Maps a URL path to the page to render. Unknown paths render the 404 page.
export function matchRoute(pathname) {
  const [lang, ...rest] = pathname.split('/').filter(Boolean)
  if (!LANGS.includes(lang)) return { name: 'notFound', lang: DEFAULT_LANG }
  const sub = rest.join('/')
  if (sub === '') return { name: 'home', lang }
  if (sub === SLUGS.legal[lang]) return { name: 'legal', lang }
  if (sub === SLUGS.privacy[lang]) return { name: 'privacy', lang }
  if (rest.length === 2 && rest[0] === SLUGS.realisation[lang]) {
    const realisation = realisations.find((r) => r.slug === rest[1])
    if (realisation) return { name: 'realisation', lang, slug: realisation.slug, realisation }
  }
  return { name: 'notFound', lang }
}

// The same page in another language (language switch, hreflang).
export const translatedPath = (route, lang) => pagePath(route.name, lang, route.slug)

// Pages to prerender and list in the sitemap (the 404 page is generated apart).
export function allPaths() {
  return LANGS.flatMap((lang) => [
    pagePath('home', lang),
    pagePath('legal', lang),
    pagePath('privacy', lang),
    ...realisations.map((r) => pagePath('realisation', lang, r.slug)),
  ])
}
