# myblok — site vitrine

Site de myblok (myblok.fr) : Baptiste et Nathan, deux développeurs indépendants à Lyon, qui créent des outils sur mesure pour les PME (relier les logiciels, automatiser, outils métier, IA quand elle est utile). Le site appuie une prospection directe : il doit être crédible, clair et non technique.

- Produit, cible, ton, règles de contenu : [docs/PRODUCT.md](docs/PRODUCT.md)
- Identité visuelle et règles de design : [docs/DESIGN.md](docs/DESIGN.md)

## Stack

- Astro 7, sortie 100 % statique (`build.format: 'file'`), TypeScript, Tailwind CSS v4 (via `@tailwindcss/vite`).
- Aucun framework client : quelques scripts TypeScript dans les composants (menu, thème, carrousel, animations, formulaire).
- Hébergé sur Vercel, sans adaptateur Astro. `api/contact.js` est une Vercel Function classique.
- Vercel Web Analytics (sans cookie). Polices auto-hébergées via `@fontsource` (aucune requête vers Google).

## Développement

Lancer le serveur de dev en arrière-plan :

```
astro dev --background
```

Le gérer avec `astro dev stop`, `astro dev status` et `astro dev logs`. Vérifier les types avec `npm run check`, construire avec `npm run build`.

`astro dev` ne sert pas `api/contact.js` ni les en-têtes de `vercel.json` : il faut `vercel dev` ou une preview Vercel pour les tester.

Documentation Astro : https://docs.astro.build

## Structure

```
src/
  content/       Tout le texte du site (voir « Contenu »)
  pages/         Routes : [lang]/index, [lang]/[page] (mentions légales, confidentialité),
                 [lang]/[section]/[slug] (réalisations, exemples), og/ (images de partage), sitemap
  sections/      Sections de l'accueil, dans l'ordre : Hero, Problem, Offer, Examples,
                 Realisations, Process, About, Faq, Contact
  views/         Pages détaillées : ArticlePage (exemple), RealisationPage
  components/    Briques partagées (Nav, Footer, Seo, Reveal, Visual, Icon…)
  layouts/       Layout.astro : <head>, thème, nav, footer, analytics
  lib/           routes.ts (URLs traduites), seo.ts (balises head, JSON-LD), ui.ts (classes Tailwind partagées)
  styles/        global.css : tokens de design (clair + sombre) et utilitaires sur mesure
api/contact.js   Formulaire de contact → email via Resend
vercel.json      Redirections, cleanUrls, en-têtes de sécurité HTTP
```

## Contenu et langues

- Bilingue FR (par défaut) / EN, langue dans l'URL : `/fr/...`, `/en/...`. `/` redirige vers `/fr`.
- Les slugs traduits sont définis dans `src/lib/routes.ts` (`SLUGS`). Toujours construire les liens avec `pagePath()`, `translatedPath()` ou `homeSection()`, jamais en dur.
- Textes de l'accueil et des pages : `src/content/fr.ts` et `src/content/en.ts`. Les deux doivent garder exactement la même structure (le type vient de `fr.ts`).
- Mentions légales (nom, SIREN, adresse, email, prestataire d'envoi) : `src/content/legal.ts`, source unique pour les deux langues.
- **Exemples** (cas types, sans client ni chiffre inventé) : ajouter une entrée dans `src/content/articles.ts`. Cela crée la carte du carrousel, la page `/fr/exemples/<slug>` et `/en/examples/<slug>`, l'image de partage `/og/<lang>/<slug>.png` et l'entrée du sitemap.
- **Réalisations** (vrais projets clients, nom du client uniquement avec son accord) : ajouter une entrée dans `src/content/realisations.ts`. La section reste masquée tant que la liste est vide.
- Le modèle de chaque entrée est en commentaire en tête du fichier.

## Formulaire de contact

`api/contact.js` (POST uniquement) valide les champs, ignore les envois qui remplissent le honeypot `website`, puis envoie l'email via l'API Resend. Variables d'environnement (voir `.env.example`), à définir dans Vercel :

- `RESEND_API_KEY`
- `CONTACT_FROM_EMAIL`
- `CONTACT_TO_EMAIL`

Pas encore de limite de requêtes : prévue sous forme de règle du pare-feu Vercel (WAF) sur `POST /api/contact`.

## Règles à toujours respecter

- **Aucune fausse preuve sociale** : pas de témoignage, logo client, chiffre, nombre de projets ou d'équipe inventés.
- **Ton** : direct, concret, sans jargon technique ni langue de bois. On écrit « on / nous » et on vouvoie le lecteur.
- **Toute modification de texte se fait en FR et en EN.**
- **Design** : un seul accent (le dégradé rouge → orange, utilisé avec parcimonie). Tout doit fonctionner en mode clair et en mode sombre. Les animations sont désactivées avec `prefers-reduced-motion`.
- **Styles** : utilitaires Tailwind dans les composants. Les couleurs passent par les tokens de `global.css` (`text-ink`, `bg-pap`, `text-red`…), jamais de couleur en dur. Les combinaisons répétées vont dans `src/lib/ui.ts`.
