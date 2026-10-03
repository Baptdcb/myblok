// Bilingual content for myblok. FR default; EN for international prospecting.
// Voice: "on / nous" (first person plural), address the client as "vous",
// never third person about ourselves. Honest — no fake clients, team, or metrics.
import fr from './fr.js'
import en from './en.js'

export { LEGAL, CONTACT_EMAIL } from './legal.js'
export { realisations } from './realisations.js'

// `t.lang` lets any component build links to the current language.
export const content = { fr: { ...fr, lang: 'fr' }, en: { ...en, lang: 'en' } }
