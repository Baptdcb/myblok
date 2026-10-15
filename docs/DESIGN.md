# Design

Les valeurs exactes (couleurs, polices, rayons, points de rupture, animations) sont dans `src/styles/global.css`, qui fait référence. Les combinaisons de classes réutilisées (boutons, titres de section, tags…) sont dans `src/lib/ui.ts`. Ce document décrit les intentions et les règles, pas les valeurs.

## Direction

**Une page éditoriale suisse, papier et encre, avec un seul signal de couleur.**

- Fond papier chaud, texte presque noir, et toute l'énergie vient d'un unique dégradé rouge → orange.
- Sobre mais dynamique, professionnel mais avec du caractère.
- Explicitement exclus : crème + serif + terracotta ; fond noir + néon ; hero SaaS en verre dépoli sur dégradé sombre ; grille de cartes générique de freelance.

## Couleurs

Tokens dans `global.css`, utilisés via Tailwind (`bg-pap`, `text-ink`, `text-red`, `border-line-2`, `bg-grad`, `text-grad`…). Jamais de couleur en dur dans un composant.

| Token | Rôle |
|---|---|
| `pap` | Fond de page, champs de formulaire |
| `pap-2` | Fond des cartes |
| `ink`, `ink-2`, `ink-3` | Texte principal, secondaire, discret |
| `red`, `org`, `grad` | Le signal : rouge seul pour les liens et petits accents, dégradé pour les éléments forts |
| `line`, `line-2` | Séparateurs, bordures des cartes et des champs |
| `ok` | Message de succès du formulaire |

**Règle du signal unique.** Il n'y a qu'une seule couleur d'accent : le dégradé rouge → orange. Pas de seconde teinte, pas de couleur de marque à plat.

**Règle de rationnement.** Le dégradé est réservé aux boutons d'action, au mot fort du titre principal, à l'animation du hero et aux numéros d'étape. Les tags (blocs de l'offre, catégories d'exemples, badge « étape payante ») sont de simples libellés rouges en majuscules, sans pastille dégradée. Un écran qui devient majoritairement orange a trop dépensé le signal.

### Thèmes

- **Clair** par défaut, **sombre** via `[data-theme='dark']` (choix mémorisé dans `localStorage`, appliqué avant le premier affichage). Le thème sombre est une palette parallèle complète, pas un filtre : tout écran doit fonctionner dans les deux.
- **Bandes encre** (`.band`) : sections pleine largeur imprimées en négatif (fond sombre, texte clair) : « Comment ça se passe », contact et pied de page. Elles redéfinissent les tokens, donc tout ce qu'elles contiennent suit automatiquement.

## Typographie

- **Archivo** (700–800) pour les titres : très gras, approche négative (`-0.035em` à `-0.05em`), interligne ≤ 1. Leur présence vient de la taille, de la graisse et du resserrement, jamais d'une graisse légère.
- **Hanken Grotesk** (400–800) pour le texte : calme et lisible, interligne 1.5, largeur de ligne limitée (~40–60 caractères).
- **Majuscules espacées** réservées aux petits libellés (tags, labels de champs). Jamais sur un titre ni sur du texte courant. Les liens de navigation sont en casse normale.
- Numéros d'étape en Archivo 800, remplis du dégradé.

## Mise en page

- Une colonne centrée (`wrap`, 1160px max), espacement vertical des sections via `section-y`.
- Grilles explicites qui s'empilent proprement aux points de rupture 460px, 720px et 940px (menu burger, passage en une colonne).
- Fond de page uni (pas de grille de fond). La petite grille quadrillée (`bg-grid`) n'apparaît que derrière les illustrations des exemples, comme cadre.

## Surfaces et profondeur

- **Cartes** (`card`) : fond `pap-2`, bordure fine de 1px `line-2`, rayon 18px. Pas d'ombre au repos.
- **Ombres** : seulement au survol (légère élévation de la carte) et sous les éléments en dégradé (lueur chaude).
- Le filet encre épais est réservé aux boutons secondaires. La navigation et le pied de page sont fermés par un filet fin `line`.
- Pas de verre dépoli comme matière. Le flou derrière la barre de navigation translucide sert uniquement à la lisibilité.
- Formes : rayon doux pour les cartes et champs, pilule complète pour les boutons et boutons-icônes.

## Composants

- **Bouton principal** : pilule remplie du dégradé, texte blanc, lueur chaude ; se soulève légèrement au survol.
- **Bouton secondaire** : pilule contour encre, s'inverse (fond encre) au survol.
- **Champs** : fond papier, bordure `line-2`, focus en bordure rouge avec halo chaud.
- **Navigation** : barre collante translucide ; liens repliés dans un menu burger sous 940px. Sur mobile, un bouton de contact fixé en bas de l'écran (`MobileCta`) prend le relais une fois le premier écran dépassé.
- **Carrousel d'exemples** : flèches uniquement, sans compteur ni filtre.
- **FAQ** : accordéon natif `<details>`, ouverture animée là où le navigateur le permet.
- **Un seul appel à l'action en milieu de page** : à la fin de « Comment ça se passe ». Le hero, la navigation et le formulaire couvrent le reste.

## Animation

**L'animation raconte ce que fait l'outil, jamais de décoration d'ambiance.**

- Le hero montre une commande qui traverse une automatisation, étape par étape, en boucle.
- Sur une page d'exemple, l'illustration (`Visual.astro` avec `animate`) s'assemble une fois à l'apparition : panneaux, connecteurs, badges, dans l'ordre où l'automatisation s'exécute.
- Les étapes du déroulé tracent un trait dégradé l'une après l'autre.
- Tout le reste apparaît simplement au défilement (`Reveal`, fondu et légère montée).
- Tout est désactivé avec `prefers-reduced-motion`, et le contenu reste visible sans JavaScript.

## À faire / à ne pas faire

**À faire**
- Garder un seul accent et le rationner.
- Vérifier chaque changement en clair, en sombre et dans une bande encre.
- Passer par les tokens et par `src/lib/ui.ts` plutôt que de dupliquer des classes.

**À ne pas faire**
- Ajouter une seconde couleur d'accent ou remplacer le dégradé par une couleur à plat.
- Utiliser du verre dépoli, des lueurs néon ou un hero sur dégradé sombre.
- Alléger ou espacer les titres.
- Inventer une preuve sociale pour remplir un espace (voir [PRODUCT.md](PRODUCT.md)).
