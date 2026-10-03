import { LEGAL } from './legal.js'

export default {
  nav: {
    links: [
      { id: 'offre', label: "Ce qu'on fait" },
        { id: 'process', label: 'Comment ça marche' },
      { id: 'apropos', label: 'Qui on est' },
    ],
    cta: 'Nous contacter',
  },
  hero: {
    pre: 'Des outils IA',
    grad: 'sur mesure',
    post: 'pour les PME',
    sub: "On conçoit et on met en place l'IA, les automatisations et les logiciels sur mesure qui font gagner du temps à votre entreprise. En direct depuis Lyon, sans agence.",
    ctaPrimary: 'Parlons-en',
    ctaSecondary: 'Comment ça se passe',
    tag: '+ votre besoin',
  },
  problem: {
    title: 'Des blocages qu’on voit tout le temps',
    intro: 'Trois frictions qui reviennent, presque quel que soit le métier.',
    items: [
      { icon: 'repeat', title: 'Ressaisie sans fin', desc: 'Vous ressaisissez les mêmes données entre deux logiciels, tous les jours.' },
      { icon: 'spark', title: 'Trop de bruit autour de l’IA', desc: "On vous en parle partout, mais vous ne savez pas quoi en faire concrètement." },
      { icon: 'puzzle', title: 'Rien qui vous correspond', desc: "Aucun logiciel du marché ne colle vraiment à votre façon de travailler." },
    ],
    foot: "Une seule de ces situations vous parle ? C’est exactement ce qu’on résout.",
  },
  offer: {
    title: "Ce qu'on fait",
    intro: "Du conseil à la livraison, on s'occupe de tout — l'IA, l'automatisation et le sur-mesure.",
    blocks: [
      {
        tag: 'Conseil & audit',
        title: "Y voir clair sur l'IA",
        desc: "On audite votre activité et on vous dit franchement où l'IA vous ferait gagner du temps et où elle ne sert à rien.",
        example: 'Ex : un audit clair avant de dépenser le moindre euro.',
      },
      {
        tag: 'Outils IA',
        title: "Mettre l'IA au travail",
        desc: "On installe et on connecte les outils d'IA les mieux adaptés à votre métier, directement dans vos process.",
        example: 'Ex : un assistant qui rédige vos devis à partir d’un simple message.',
      },
      {
        tag: 'Automatisation',
        title: 'Des agents qui bossent pour vous',
        desc: 'On crée des automatisations et des agents qui prennent en charge vos tâches répétitives, 24h/24.',
        example: 'Ex : vos rapports générés tout seuls, chaque mois.',
      },
      {
        tag: 'Sur mesure',
        title: 'Le logiciel qui vous manque',
        desc: "Quand rien du marché ne convient, on développe l'outil ou l'application taillé pour vous.",
        example: 'Ex : l’outil que vous cherchez depuis des mois et qui n’existe pas.',
      },
    ],
    cta: { text: 'Un de ces besoins vous parle ?', button: 'Parlons-en' },
  },
  process: {
    title: 'Comment ça se passe',
    intro: 'Un chemin simple, sans piège, du premier échange à la livraison.',
    steps: [
      { n: '01', name: 'Échange gratuit', desc: "On parle de votre besoin, 30 minutes, sans engagement. On vous dit franchement si on peut aider." },
      { n: '02', name: 'Cadrage', badge: 'étape payante', desc: "On analyse en profondeur, on définit précisément quoi construire et on vous livre un cahier des charges clair. C'est ce qui évite les mauvaises surprises." },
      { n: '03', name: 'Devis', desc: "Un chiffrage clair issu du cadrage. Vous savez exactement ce que vous payez, et pour quoi." },
      { n: '04', name: 'Développement', desc: "On construit, avec des points réguliers pour que vous suiviez l'avancement." },
      { n: '05', name: 'Livraison', desc: "Outil livré, expliqué, et on reste dispo si ça doit évoluer." },
    ],
    cta: { text: 'Prêt à démarrer ?', button: 'Réserver un échange gratuit' },
  },
  about: {
    title: 'Qui on est',
    lead: "myblok, du dev et de l'IA en direct.",
    paragraphs: [
      "Pas d'agence, pas d'intermédiaire, pas de commercial : vous parlez directement à la personne qui construit votre outil.",
      "On connaît les environnements exigeants — au quotidien, on développe en alternance au Crédit Agricole T&S, sur des systèmes qui ne tolèrent pas l'à-peu-près.",
      "On démarre, et on le dit franchement : pas encore une longue liste de clients à afficher. En échange, vous avez quelqu'un de disponible, direct et impliqué — et un tarif sans la marge d'une grosse structure.",
    ],
    points: [
      { k: 'Contact direct', v: 'Vous parlez à la personne qui code, pas à un commercial.' },
      { k: 'Sans intermédiaire', v: 'Moins de coûts, moins de délais, rien qui se perd en route.' },
      { k: 'Impliqué', v: "Votre projet compte — il ne finit pas au fond d'une file d'attente." },
    ],
    location: 'Basé à Lyon, on peut intervenir sur site si besoin, ou gérer le projet à distance selon ce qui vous convient le mieux.',
  },
  contact: {
    title: 'Une idée, un besoin, ou juste une question ?',
    subtitle: 'Écrivez-nous en deux lignes. On répond vite.',
    name: 'Votre nom',
    email: 'Votre email',
    message: 'Votre besoin en quelques mots',
    submit: 'Envoyer',
    sending: 'Envoi…',
    success: 'Message envoyé. On revient vers vous très vite.',
    error: "L'envoi a échoué. Écrivez-nous directement à l'adresse ci-dessous.",
    or: 'ou directement',
    privacy: 'Votre nom, votre email et votre message servent uniquement à vous répondre. Ni revendus, ni utilisés pour de la prospection.',
    privacyLink: 'Vos droits et le détail',
  },
  footer: {
    tagline: 'Outils sur mesure & IA pour PME.',
    legalLink: 'Mentions légales',
    privacyLink: 'Politique de confidentialité',
    madeIn: 'Conçu et développé en direct, depuis Lyon.',
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
        ['Données collectées', 'Votre nom, votre adresse email et le contenu de votre message. Rien d’autre : aucun champ caché, aucune donnée récupérée à votre insu.'],
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
      title: 'myblok — Automatisation & IA sur mesure pour PME | Lyon',
      description: 'Développeur freelance à Lyon : automatisation, IA et outils sur mesure pour PME. Audit, développement et mise en place en direct, sans agence.',
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
