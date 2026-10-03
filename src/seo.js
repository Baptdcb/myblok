// Builds the <head> tags of each page at build time (scripts/prerender.js):
// title, description, canonical, hreflang, social previews, structured data.
// Everything comes from the content files, so it follows the page and language.
import { content, LEGAL } from './content/index.js'
import { LANGS, DEFAULT_LANG, translatedPath } from './routes.js'

export const SITE_URL = 'https://www.myblok.fr'

const OG_LOCALE = { fr: 'fr_FR', en: 'en_GB' }
const PRICE_RANGE = { fr: 'Sur devis', en: 'Quote-based' }
// Share image per language (public/), showing the hero title.
const OG_IMAGE = { fr: '/og-image.png', en: '/og-image-en.png' }

const escapeAttr = (value) =>
  String(value).replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')

const meta = (attr, key, value) => `<meta ${attr}="${key}" content="${escapeAttr(value)}" />`

function pageMeta(route, t) {
  if (route.name === 'realisation') {
    const r = route.realisation[t.lang]
    return { title: `${r.title} — myblok`, description: `${r.card.problem} ${r.card.result}` }
  }
  return t.meta[route.name]
}

// Business card for Google, on the home pages. The services follow the offer blocks.
function structuredData(t, url) {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url,
        name: 'myblok',
        inLanguage: t.lang,
        publisher: { '@id': `${SITE_URL}/#business` },
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${SITE_URL}/#business`,
        name: 'myblok',
        description: t.meta.home.description,
        url,
        logo: `${SITE_URL}/icon-512.png`,
        image: SITE_URL + OG_IMAGE[t.lang],
        email: LEGAL.email,
        priceRange: PRICE_RANGE[t.lang],
        address: { '@type': 'PostalAddress', addressLocality: 'Lyon', addressRegion: 'Auvergne-Rhône-Alpes', addressCountry: 'FR' },
        areaServed: [{ '@type': 'City', name: 'Lyon' }, { '@type': 'Country', name: 'France' }],
        founder: { '@type': 'Person', name: 'Baptiste' },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: t.offer.title,
          itemListElement: t.offer.blocks.map((b) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: b.title, description: b.desc },
          })),
        },
      },
    ],
  }
  // "<" escaped so the JSON can never close the <script> tag.
  return `<script type="application/ld+json">${JSON.stringify(data).replaceAll('<', '\\u003c')}</script>`
}

export function headTags(route) {
  const t = content[route.lang]
  const { title, description } = pageMeta(route, t)
  const imageAlt = `myblok — ${t.hero.pre} ${t.hero.grad} ${t.hero.post}`
  const tags = [
    `<title>${escapeAttr(title)}</title>`,
    meta('name', 'description', description),
    meta('property', 'og:title', title),
    meta('property', 'og:description', description),
    meta('property', 'og:image', SITE_URL + OG_IMAGE[route.lang]),
    // Same share image on every page of a language: describe the image, not the page.
    meta('property', 'og:image:alt', imageAlt),
    meta('property', 'og:locale', OG_LOCALE[route.lang]),
    meta('name', 'twitter:title', title),
    meta('name', 'twitter:description', description),
    meta('name', 'twitter:image', SITE_URL + OG_IMAGE[route.lang]),
    meta('name', 'twitter:image:alt', imageAlt),
  ]

  if (route.name === 'notFound') {
    tags.push(meta('name', 'robots', 'noindex'))
    return tags.join('\n    ')
  }

  const url = SITE_URL + translatedPath(route, route.lang)
  tags.push(
    meta('name', 'robots', 'index, follow, max-image-preview:large'),
    `<link rel="canonical" href="${url}" />`,
    meta('property', 'og:url', url),
    ...LANGS.filter((l) => l !== route.lang).map((l) => meta('property', 'og:locale:alternate', OG_LOCALE[l])),
    ...LANGS.map((l) => `<link rel="alternate" hreflang="${l}" href="${SITE_URL + translatedPath(route, l)}" />`),
    `<link rel="alternate" hreflang="x-default" href="${SITE_URL + translatedPath(route, DEFAULT_LANG)}" />`,
  )
  if (route.name === 'home') tags.push(structuredData(t, url))
  return tags.join('\n    ')
}
