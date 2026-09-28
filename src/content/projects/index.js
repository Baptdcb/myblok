// Pages projet : une par exemple de la section « Exemples concrets ».
// Même règle que site.js : ce sont des démonstrations, pas des cas clients.
// Les données affichées (entreprises, factures, montants) sont fictives.
//
// Ajouter un projet : créer <slug>.js sur le modèle des autres, l'enregistrer
// ci-dessous, puis référencer le même slug dans examples.items de site.js.
import relanceFactures from './relance-factures.js'
import alertesStock from './alertes-stock.js'
import generationContrats from './generation-contrats.js'

// L'ordre des clés fixe l'ordre de prérendu.
export const projects = {
  'relance-factures': relanceFactures,
  'alertes-stock': alertesStock,
  'generation-contrats': generationContrats,
}
