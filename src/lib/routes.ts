import { content, LANGS, type Lang } from '../content'

// URLs are /<lang>/<translated slug>; "/" redirects to /fr (vercel.json).
// The page files in src/pages/[lang]/ build their paths from these slugs.

export const SLUGS = {
  legal: { fr: 'mentions-legales', en: 'legal-notice' },
  privacy: { fr: 'confidentialite', en: 'privacy-policy' },
  realisation: { fr: 'realisations', en: 'projects' },
  article: { fr: 'exemples', en: 'examples' },
} as const

export type PageName = 'home' | 'legal' | 'privacy' | 'realisation' | 'article' | 'notFound'

// Identifies a page independently of its language, to link to its translation.
export interface PageRef {
  name: PageName
  slug?: string
}

// URL of a page in a given language. `slug` is only used by realisation and article pages.
export function pagePath(name: PageName, lang: Lang, slug?: string): string {
  if (name === 'home' || name === 'notFound') return `/${lang}`
  if (name === 'realisation' || name === 'article') return `/${lang}/${SLUGS[name][lang]}/${slug}`
  return `/${lang}/${SLUGS[name][lang]}`
}

export const translatedPath = (page: PageRef, lang: Lang) => pagePath(page.name, lang, page.slug)

// Link to a section of the home page (key from `anchors` in the content files), valid from any page.
export const homeSection = (lang: Lang, key: keyof (typeof content)['fr']['anchors']) =>
  `/${lang}#${content[lang].anchors[key]}`

export const otherLang = (lang: Lang): Lang => (lang === 'fr' ? 'en' : 'fr')

export { LANGS }
