// Bilingual content for myblok. FR default; EN for international prospecting.
// Voice: "on / nous" (first person plural), address the client as "vous",
// never third person about ourselves. Honest — no fake clients, team, or metrics.
import fr, { type Content } from './fr'
import en from './en'

export { LEGAL, CONTACT_EMAIL } from './legal'
export { realisations, type Realisation } from './realisations'
export { articles, type Article, type ArticleTag, type VisualName } from './articles'

export const LANGS = ['fr', 'en'] as const
export const DEFAULT_LANG: Lang = 'fr'
export type Lang = (typeof LANGS)[number]

// `t.lang` lets any component build links to the current language.
export type T = Content & { lang: Lang }
export const content: Record<Lang, T> = { fr: { ...fr, lang: 'fr' }, en: { ...en, lang: 'en' } }
