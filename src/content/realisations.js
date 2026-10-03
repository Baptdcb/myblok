// Une entrée = une carte sur l'accueil + une page /realisations/<slug>,
// ajoutée automatiquement au prérendu et au sitemap.
// Uniquement des projets réels ; le nom du client seulement avec son accord.
//
// {
//   slug: 'suivi-de-chantier',          // URL : /realisations/suivi-de-chantier
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
export const realisations = []
