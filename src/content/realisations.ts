import type { Lang } from './index'

export interface RealisationText {
  title: string
  sector?: string
  card: { problem: string; solution: string; result: string }
  context: string
  problem: string
  solution: string
  result: string
  duration?: string
  quote?: { text: string; author: string }
}

export interface Realisation {
  slug: string
  images?: { src: string; alt: Record<Lang, string> }[]
  fr: RealisationText
  en: RealisationText
}

// Une entrée = une carte sur l'accueil + une page /realisations/<slug>,
// ajoutée automatiquement au prérendu et au sitemap.
// Uniquement des projets réels ; le nom du client seulement avec son accord.
//
// {
//   slug: 'suivi-de-chantier',          // URL : /fr/realisations/suivi-de-chantier, /en/projects/suivi-de-chantier
//   images: [                           // facultatif : captures sans données sensibles,
//     { src: '/realisations/suivi-de-chantier/1.webp', alt: { fr: '…', en: '…' } },  // fichiers dans public/realisations/<slug>/
//   ],
//   fr: {
//     title: '…',                       // titre de la page et de la carte
//     sector: '…',                      // ex. « PME du BTP, 15 salariés »
//     card: {                           // carte de l'accueil, une phrase chacun
//       problem: '…',                   // (problème + résultat = description Google)
//       solution: '…',
//       result: '…',
//     },
//     context: '…',                     // page détaillée
//     problem: '…',
//     solution: '…',
//     result: '…',
//     duration: '…',                    // facultatif
//     quote: { text: '…', author: '…' } // facultatif, uniquement si réelle et validée
//   },
//   en: { … mêmes clés … },
// }
export const realisations: Realisation[] = []
