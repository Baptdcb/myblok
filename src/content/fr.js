import { LEGAL } from './legal.js'

export default {
  nav: {
    // L'entrée « realisations » n'apparaît que s'il y a au moins un projet dans realisations.js.
    links: [
      { id: 'offre', label: "Ce qu'on fait" },
      { id: 'realisations', label: 'Réalisations' },
      { id: 'process', label: 'Comment ça marche' },
      { id: 'faq', label: 'FAQ' },
    ],
    cta: 'Nous contacter',
  },
  hero: {
    pre: 'Concentrez-vous sur votre métier,',
    grad: 'on automatise',
    post: 'le reste',
    sub: "Ressaisies, relances, tableaux Excel à rallonge : on s'en charge, avec des outils faits pour votre façon de travailler.",
    ctaPrimary: 'Parlons de votre besoin',
    // Le bouton secondaire mène aux réalisations s'il y en a, sinon à la méthode.
    ctaRealisations: 'Voir nos réalisations',
    ctaProcess: 'Comment ça se passe',
    note: 'Premier échange gratuit et sans engagement · Basés à Lyon',
  },
  problem: {
    title: 'Ça vous parle ?',
    intro: "Des situations qu'on retrouve dans presque toutes les PME.",
    items: [
      { icon: 'repeat', title: 'Les mêmes infos tapées deux fois', desc: 'Une commande arrive par mail, vous la recopiez dans le logiciel de facturation, puis dans un tableau Excel.' },
      { icon: 'sheet', title: 'Le fichier Excel qui fait tout tourner', desc: 'Un tableur bricolé au fil des années, que seule une personne sait vraiment utiliser.' },
      { icon: 'bell', title: 'Les relances à la main', desc: 'Devis en attente, factures impayées, rappels de rendez-vous : tout repose sur votre mémoire.' },
      { icon: 'puzzle', title: 'Le logiciel qui ne colle pas', desc: 'Vous payez un abonnement pour un outil qui vous oblige à contourner sa logique tous les jours.' },
    ],
    foot: "Ces heures-là peuvent être récupérées. C'est notre métier.",
  },
  offer: {
    title: "Ce qu'on fait",
    intro: "On part de votre façon de travailler, pas d'une solution toute faite.",
    blocks: [
      {
        tag: 'Relier vos outils',
        title: 'Vos logiciels se parlent enfin',
        desc: "On connecte vos outils entre eux (messagerie, facturation, CRM, tableurs…) pour que l'information circule toute seule.",
        example: 'Ex : une commande reçue par mail apparaît directement dans votre outil de facturation.',
      },
      {
        tag: 'Automatiser',
        title: 'Les tâches répétitives se font toutes seules',
        desc: 'Relances, rapports, exports, classements : on automatise ce qui vous prend du temps chaque semaine sans rien vous apporter.',
        example: 'Ex : votre rapport mensuel prêt le 1er du mois, sans y toucher.',
      },
      {
        tag: 'Sur mesure',
        title: 'Un outil fait pour votre entreprise',
        desc: "Quand rien sur le marché ne convient, on développe l'application ou l'outil interne adapté à votre façon de travailler.",
        example: 'Ex : un outil de suivi de chantier qui remplace trois fichiers Excel.',
      },
      {
        tag: 'IA utile',
        title: "De l'IA, seulement quand c'est utile",
        desc: "Trier des emails, préparer un devis, résumer un document : on l'utilise quand elle fait vraiment gagner du temps, et on vous le dit quand elle ne sert à rien.",
        example: 'Ex : les demandes reçues par mail triées et transmises à la bonne personne.',
      },
    ],
    cta: { text: "Vous vous reconnaissez dans l'un de ces besoins ?", button: 'Parlons-en' },
  },
  realisations: {
    title: "Ce qu'on a déjà mis en place",
    intro: 'Des projets concrets, pour de vraies entreprises.',
    link: 'Voir le projet',
    cta: { text: "Un besoin qui ressemble à l'un de ces projets ?", button: 'Parlons-en' },
  },
  process: {
    title: 'Comment ça se passe',
    intro: 'Pas de surprise, du premier échange à la livraison.',
    steps: [
      { n: '01', name: 'On en parle', desc: '30 minutes, gratuit et sans engagement. On vous dit franchement si on peut vous aider.' },
      { n: '02', name: 'On cadre', badge: 'étape payante', desc: 'On définit précisément quoi construire et pour quel prix. Vous recevez un devis clair.' },
      { n: '03', name: 'On construit', desc: "Avec des points réguliers pour que vous suiviez l'avancement." },
      { n: '04', name: 'On livre et on reste là', desc: 'Outil livré, expliqué à votre équipe, et on reste disponible si ça doit évoluer.' },
    ],
    cta: { text: 'Prêt à démarrer ?', button: 'Réserver un échange gratuit' },
  },
  about: {
    title: 'Qui on est',
    lead: "Pas d'agence. Vous parlez directement à la personne qui construit votre outil.",
    paragraphs: [
      "myblok, c'est Baptiste, développeur basé à Lyon. Au quotidien, il travaille en alternance au Crédit Agricole T&S, sur des systèmes où l'à-peu-près n'existe pas. Il applique la même rigueur à vos projets.",
    ],
    points: [
      { k: 'Contact direct', v: "Pas de commercial, pas d'intermédiaire." },
      { k: 'Prix juste', v: "Sans la marge d'une grosse structure." },
      { k: 'Sur place ou à distance', v: 'On se déplace si besoin, sinon tout se gère à distance.' },
    ],
  },
  faq: {
    title: "Les questions qu'on nous pose souvent",
    items: [
      { q: 'Combien ça coûte ?', a: "Ça dépend du besoin, c'est pour ça qu'on commence par un échange gratuit. Après le cadrage, vous recevez un devis précis : vous savez exactement ce que vous payez avant qu'on commence." },
      { q: 'Combien de temps faut-il ?', a: 'Une automatisation simple peut être en place en quelques jours, un outil sur mesure prend plutôt quelques semaines. Le délai exact est fixé au cadrage.' },
      { q: 'Je ne suis pas du tout technique, est-ce un problème ?', a: "Non, c'est même le cas de la plupart de nos clients. Vous nous expliquez comment vous travaillez, on s'occupe du reste, et on vous explique l'outil avec des mots simples." },
      { q: 'Faut-il changer nos logiciels actuels ?', a: "Le plus souvent, non. On part de ce que vous utilisez déjà et on le fait mieux fonctionner. On ne propose de remplacer un outil que si c'est vraiment plus simple pour vous." },
      { q: 'Que se passe-t-il si quelque chose ne marche plus après la livraison ?', a: "On reste joignable. Les corrections liées à notre travail sont prises en charge, et on peut convenir d'un suivi si votre outil doit évoluer." },
      { q: 'Nos données sont-elles en sécurité ?', a: "On n'accède qu'à ce qui est nécessaire au projet, et vos données restent chez vous ou dans les outils que vous avez choisis. Si vous préférez des solutions hébergées en Europe, on en tient compte dès le cadrage." },
      { q: "Vous utilisez de l'IA ?", a: "Quand elle est utile, oui. Mais la plupart des gains de temps viennent d'automatisations simples, sans IA. On choisit l'outil le plus adapté, pas le plus à la mode." },
    ],
  },
  contact: {
    title: 'Parlons de votre besoin',
    subtitle: 'Décrivez votre situation en deux lignes. On vous répond sous 48 h.',
    name: 'Votre nom',
    company: 'Votre entreprise',
    optional: 'facultatif',
    email: 'Votre email',
    emailPlaceholder: 'vous@entreprise.fr',
    message: 'Votre besoin en quelques mots',
    messagePlaceholder: 'Ex : on ressaisit nos commandes dans deux logiciels différents…',
    submit: 'Envoyer',
    sending: 'Envoi…',
    success: 'Message envoyé. On revient vers vous très vite.',
    error: "L'envoi a échoué. Écrivez-nous directement à l'adresse ci-dessous.",
    or: 'ou directement',
    privacy: 'Vos informations servent uniquement à vous répondre. Ni revendues, ni utilisées pour de la prospection.',
    privacyLink: 'Politique de confidentialité',
  },
  footer: {
    tagline: 'Des outils sur mesure qui font gagner du temps aux PME.',
    location: 'Lyon, France',
    contactLink: 'Contact',
    legalLink: 'Mentions légales',
    privacyLink: 'Politique de confidentialité',
    owner: 'entrepreneur individuel',
  },
  legal: {
    title: 'Mentions légales',
    lines: [
      ['Éditeur', `myblok — ${LEGAL.name}, entrepreneur individuel (auto-entreprise)`],
      ['SIREN', LEGAL.siren],
      ['Siège', LEGAL.address],
      ['Directeur de la publication', LEGAL.name],
      ['Contact', LEGAL.email],
      ['Hébergeur', 'Vercel Inc. — 340 S Lemon Ave #4133, Walnut, CA 91789, USA — vercel.com'],
    ],
    privacy: {
      title: 'Politique de confidentialité',
      intro:
        "Le formulaire de contact est le seul endroit du site où on vous demande des informations personnelles. Voilà exactement ce qu’on en fait.",
      lines: [
        ['Données collectées', 'Votre nom, votre adresse email, le nom de votre entreprise si vous le donnez, et le contenu de votre message. Rien d’autre : aucune donnée récupérée à votre insu.'],
        ['Finalité', 'Répondre à votre demande et, si ça débouche sur un projet, préparer une proposition. Pas de prospection non sollicitée, pas de revente, pas de fichier partagé avec qui que ce soit.'],
        ['Base légale', 'Votre demande elle-même : l’exécution de mesures précontractuelles prises à votre initiative (article 6.1.b du RGPD).'],
        ['Destinataires', `Baptiste, et personne d’autre. L’acheminement de l’email passe par notre prestataire d’envoi ${LEGAL.mailProvider}, encadré par un accord de sous-traitance et les clauses contractuelles types de la Commission européenne.`],
        ['Hébergement', 'Le site et le formulaire sont hébergés par Vercel Inc. (États-Unis), sous le même encadrement contractuel.'],
        ['Conservation', 'Trois ans à compter de notre dernier échange, puis suppression. Si une prestation démarre, les données liées sont gardées le temps de la mission et des obligations comptables et légales qui en découlent.'],
        ['Cookies et mesure d’audience', 'Aucun cookie. On mesure la fréquentation du site avec Vercel Web Analytics, de façon anonyme et agrégée : pas de cookie, pas d’identification personnelle, pas de suivi d’un site à l’autre. Pas de publicité ni de bouton de réseau social. Seul votre choix de thème est mémorisé dans votre navigateur : cette information ne quitte jamais votre appareil et ne nécessite pas de consentement.'],
        ['Vos droits', `Accès, rectification, effacement, limitation, opposition et portabilité. Un email à ${LEGAL.email} suffit, on répond sous un mois.`],
      ],
    },
  },
  theme: { toDark: 'Passer en mode sombre', toLight: 'Passer en mode clair' },
  // <title> et meta description de chaque page (le prérendu les injecte dans le HTML).
  meta: {
    home: {
      title: 'myblok — Automatisation et outils sur mesure pour PME | Lyon',
      description: 'Récupérez des heures chaque semaine : on automatise vos tâches répétitives et on crée les outils qui manquent à votre PME. En direct, depuis Lyon.',
    },
    legal: { title: 'Mentions légales — myblok', description: 'Mentions légales du site myblok.fr.' },
    privacy: {
      title: 'Politique de confidentialité — myblok',
      description: 'Ce que myblok fait des informations envoyées via le formulaire de contact, et vos droits.',
    },
    notFound: { title: 'Page introuvable — myblok', description: 'Cette page n’existe pas.' },
  },
  notFound: {
    title: 'Cette page n’existe pas.',
    text: 'Le lien est peut-être ancien ou mal copié.',
    back: 'Retour à l’accueil',
  },
  realisation: {
    back: 'Toutes nos réalisations',
    context: 'Le contexte',
    problem: 'Le problème',
    solution: "Ce qu'on a fait",
    result: 'Le résultat',
    duration: 'Durée du projet',
    cta: { text: 'Un besoin qui ressemble à celui-ci ?', button: 'Parlons-en' },
  },
}
