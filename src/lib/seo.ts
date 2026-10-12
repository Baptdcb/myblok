// Data for the <head> of each page (rendered by src/components/Seo.astro):
// title, description, canonical, hreflang, social previews, structured data.
// Everything comes from the content files, so it follows the page and language.
import { content, LEGAL, LANGS, DEFAULT_LANG, type Lang, type T } from '../content'
import { translatedPath, type PageRef } from './routes'

export const SITE_URL = 'https://www.myblok.fr'

export const OG_LOCALE: Record<Lang, string> = { fr: 'fr_FR', en: 'en_GB' }
const PRICE_RANGE: Record<Lang, string> = { fr: 'Sur devis', en: 'Quote-based' }
// Share image per language (public/), showing the hero title.
export const OG_IMAGE: Record<Lang, string> = { fr: '/og-image.png', en: '/og-image-en.png' }

export interface SeoData {
  title: string
  description: string
  // Share image (path from the site root): its own for an example, else the one of the language.
  image: string
  imageAlt: string
  // Missing on the 404 page, which is not indexed.
  canonical?: string
  alternates?: { hreflang: string; href: string }[]
  jsonLd?: object
}

// Business card for Google, on the home pages. The services follow the offer blocks.
function structuredData(t: T, url: string) {
  return {
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
        // Two independent developers working together, on an equal footing.
        founder: [
          { '@type': 'Person', name: 'Baptiste' },
          { '@type': 'Person', name: 'Nathan' },
        ],
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
}

// `title` and `description` default to the page's entry in `meta` (content files).
export function seoData(page: PageRef, lang: Lang, meta?: { title: string; description: string }): SeoData {
  const t = content[lang]
  const { title, description } =
    meta ?? t.meta[page.name as 'home' | 'legal' | 'privacy' | 'notFound']
  // Examples have their own share image (src/pages/og), showing their title. The other
  // pages share the one of their language: describe the image, not the page.
  const ownImage = page.name === 'article' && page.slug
  const image = ownImage ? `/og/${lang}/${page.slug}.png` : OG_IMAGE[lang]
  const imageAlt = ownImage ? title : `myblok — ${t.hero.pre} ${t.hero.grad} ${t.hero.post}`
  if (page.name === 'notFound') return { title, description, image, imageAlt }

  const canonical = SITE_URL + translatedPath(page, lang)
  return {
    title,
    description,
    image,
    imageAlt,
    canonical,
    alternates: [
      ...LANGS.map((l) => ({ hreflang: l, href: SITE_URL + translatedPath(page, l) })),
      { hreflang: 'x-default', href: SITE_URL + translatedPath(page, DEFAULT_LANG) },
    ],
    jsonLd: page.name === 'home' ? structuredData(t, canonical) : undefined,
  }
}
