// Bilingual content for myblok. FR default; EN for international prospecting.
// Voice: "on / nous" (first person plural), address the client as "vous",
// never third person about ourselves. Honest — no fake clients, team, or metrics.

// À COMPLÉTER AVANT MISE EN LIGNE : nom de famille, SIREN, adresse.
// Mentions obligatoires (LCEN art. 6-III, art. R123-237 du code de commerce).
// Source unique : FR et EN lisent cet objet, elles ne peuvent donc plus diverger.
export const LEGAL = {
  name: 'Baptiste Do CABO',
  siren: '940 162 290',
  address: 'Lyon, France',
  email: 'contact@myblok.fr',
  // Prestataire d'acheminement du formulaire. Une seule ligne à changer si tu en changes.
  mailProvider: 'Resend (Resend Inc., États-Unis)',
}

export const content = {
  fr: {
    nav: {
      links: [
        { id: 'offre', label: "Ce qu'on fait" },
        { id: 'exemples', label: 'Exemples' },
        { id: 'ia', label: 'IA' },
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
    examples: {
      title: 'Exemples concrets',
      intro: "Des démonstrations qu'on a construites sur des tâches que presque toutes les PME connaissent. Chacune peut être adaptée à vos outils et mise en place chez vous, pour faire disparaître ces corvées de vos journées.",
      removed: '{n} tâches sans valeur ajoutée en moins',
      after: 'Maintenant',
      gain: 'Temps gagné, estimé',
      items: [
        {
          tag: 'Comptabilité',
          title: 'Relance des factures impayées',
          problem: "Relancer les retards de paiement, c'est la tâche que tout le monde repousse. Résultat : des oublis, et une trésorerie qui attend.",
          tasks: ['Éplucher les échéances une par une', 'Chercher le bon contact dans vos emails', 'Rédiger et copier-coller chaque relance', 'Tenir à jour qui a été relancé, et quand'],
          now: "Chaque jour, les retards sont repérés. Le client reçoit le bon message au bon moment : un rappel avant l'échéance, puis de plus en plus ferme. Ses factures sont regroupées dans un seul email, jamais relancées deux fois au même stade. Et vous gardez la main : un client peut être mis en pause à tout moment.",
          gain: '≈ 3 h / mois',
          basis: 'pour 40 relances par mois, à 5 minutes chacune',
        },
        {
          tag: 'Stocks',
          title: 'Alertes de rupture de stock',
          problem: "On découvre qu'un produit manque le jour où un client le commande. Trop tard.",
          tasks: ['Vérifier les niveaux à la main', 'Comparer chaque produit à son seuil', 'Prévenir la bonne personne au cas par cas'],
          now: "Les stocks sont surveillés en continu. Dès qu'un produit passe sous son seuil, la bonne personne reçoit une alerte, une seule fois, pas un email toutes les heures. Quand le stock remonte, la surveillance repart d'elle-même.",
          gain: '≈ 5 h / mois',
          basis: 'pour un contrôle de 15 minutes par jour ouvré',
        },
        {
          tag: 'Administratif',
          title: 'Contrats générés par lot',
          problem: "Chaque contrat, c'est un modèle Word à dupliquer, des champs à remplacer, des montants à recalculer. Et toujours les mêmes erreurs.",
          tasks: ['Dupliquer le modèle Word', 'Recopier les infos client une à une', 'Recalculer HT, TVA et TTC à la main', 'Relire pour traquer les erreurs de copier-coller', 'Exporter en PDF, renommer, classer'],
          now: "Vous remplissez un tableau, une ligne par contrat. Les PDF sortent prêts à envoyer, numérotés et classés. Les montants sont calculés, le SIRET est vérifié, et une ligne incomplète est signalée sans bloquer les autres.",
          gain: '≈ 7 h / mois',
          basis: 'pour 30 contrats par mois, à 15 minutes chacun',
        },
      ],
      cta: { text: 'Une tâche du même genre vous prend du temps ?', button: 'Parlons-en' },
    },
    ai: {
      title: 'La bonne IA, pas la plus à la mode.',
      text: "On met en place l'IA la plus adaptée à votre secteur et à vos besoins — après un audit clair de ce qui vous fera vraiment gagner du temps. On choisit et on installe le bon outil, pas le plus tendance.",
      tools: ['Claude', 'ChatGPT', 'Gemini', 'Codex', 'Copilot', 'Mistral', 'Perplexity', 'Llama', 'Cursor', 'n8n', 'Zapier', 'Make'],
      cta: { text: 'Envie d’un audit clair de votre activité ?', button: 'Demander un audit' },
    },
    pricing: {
      title: 'Tarif sur devis',
      intro: 'On ne vend pas un package générique. On propose plusieurs blocs selon votre besoin, votre niveau de maturité et l’impact attendu.',
      note: 'On vous recommande le bon format après un premier échange clair.',
      blocks: [
        { title: 'Automatisation agentique', points: ['Agents qui prennent en charge des tâches répétitives', 'Déclenchements automatisés entre vos outils', 'Gain de temps rapide sur les processus clés'] },
        { title: 'Développement d’un outil', points: ['Application ou interface adaptée à votre façon de travailler', 'Remplacement d’un process manuel ou fragile', 'Solution simple, robuste et pensée pour durer'] },
        { title: 'Solution complète', points: ['Analyse du besoin', 'Mise en place d’outils et automatisations', 'Formation et accompagnement sur la prise en main'] },
      ],
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
      legalToggle: 'Mentions légales',
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
        title: 'Données personnelles',
        intro:
          "Le formulaire de contact est le seul endroit du site où on vous demande des informations personnelles. Voilà exactement ce qu’on en fait.",
        lines: [
          ['Données collectées', 'Votre nom, votre adresse email et le contenu de votre message. Rien d’autre : aucun champ caché, aucune donnée récupérée à votre insu.'],
          ['Finalité', 'Répondre à votre demande et, si ça débouche sur un projet, préparer une proposition. Pas de prospection non sollicitée, pas de revente, pas de fichier partagé avec qui que ce soit.'],
          ['Base légale', 'Votre demande elle-même : l’exécution de mesures précontractuelles prises à votre initiative (article 6.1.b du RGPD).'],
          ['Destinataires', `Baptiste, et personne d’autre. L’acheminement de l’email passe par notre prestataire d’envoi ${LEGAL.mailProvider}, encadré par un accord de sous-traitance et les clauses contractuelles types de la Commission européenne.`],
          ['Hébergement', 'Le site et le formulaire sont hébergés par Vercel Inc. (États-Unis), sous le même encadrement contractuel.'],
          ['Conservation', 'Trois ans à compter de notre dernier échange, puis suppression. Si une prestation démarre, les données liées sont gardées le temps de la mission et des obligations comptables et légales qui en découlent.'],
          ['Cookies et traceurs', 'Aucun. Pas de mesure d’audience, pas de publicité, pas de bouton de réseau social. Seuls votre choix de thème et de langue sont mémorisés dans votre navigateur : cette information ne quitte jamais votre appareil et ne nécessite pas de consentement.'],
          ['Vos droits', `Accès, rectification, effacement, limitation, opposition et portabilité. Un email à ${LEGAL.email} suffit, on répond sous un mois.`],
        ],
      },
    },
    theme: { toDark: 'Passer en mode sombre', toLight: 'Passer en mode clair' },
  },

  en: {
    nav: {
      links: [
        { id: 'offre', label: 'What we do' },
        { id: 'exemples', label: 'Examples' },
        { id: 'ia', label: 'AI' },
        { id: 'process', label: 'How it works' },
        { id: 'apropos', label: 'Who we are' },
      ],
      cta: 'Contact us',
    },
    hero: {
      pre: 'Custom tools',
      grad: 'made to measure',
      post: 'for your SME.',
      sub: "We design and set up the AI, automations and custom software that save your business time. Direct from Lyon, no agency.",
      ctaPrimary: 'Let’s talk',
      ctaSecondary: 'See how it works',
      tag: '+ your need',
    },
    problem: {
      title: 'Roadblocks we see all the time',
      intro: 'Three frictions that show up no matter the industry.',
      items: [
        { icon: 'repeat', title: 'Endless re-entry', desc: 'You re-enter the same data between two apps, every single day.' },
        { icon: 'spark', title: 'Too much AI noise', desc: "Everyone talks about it, but you don't know what to actually do with it." },
        { icon: 'puzzle', title: 'Nothing quite fits', desc: 'No off-the-shelf software really fits the way you work.' },
      ],
      foot: "If even one of these sounds familiar, that's exactly what we solve.",
    },
    offer: {
      title: 'What we do',
      intro: 'From advice to delivery, we handle it all — AI, automation and bespoke software.',
      blocks: [
        { tag: 'Advice & audit', title: 'See AI clearly', desc: "We audit your business and tell you honestly where AI would save you time — and where it wouldn't.", example: 'E.g. a clear audit before you spend a single euro.' },
        { tag: 'AI tools', title: 'Put AI to work', desc: 'We install and connect the AI tools best suited to your work, right inside your existing processes.', example: 'E.g. an assistant that drafts your quotes from a simple message.' },
        { tag: 'Automation', title: 'Agents that work for you', desc: 'We build automations and agents that take over your repetitive tasks, 24/7.', example: 'E.g. your reports generated on their own, every month.' },
        { tag: 'Bespoke', title: 'The software you’re missing', desc: "When nothing on the market fits, we build the tool or app made for you.", example: "E.g. the tool you've been after for months that just doesn't exist." },
      ],
      cta: { text: 'Does one of these sound like you?', button: "Let's talk" },
    },
    examples: {
      title: 'Real examples',
      intro: "Demos we built around tasks almost every SME knows. Each one can be adapted to your tools and set up for you, so these chores drop off your day.",
      removed: '{n} low-value tasks, gone',
      after: 'Now',
      gain: 'Time saved, estimated',
      items: [
        {
          tag: 'Accounting',
          title: 'Chasing unpaid invoices',
          problem: 'Chasing late payments is the task everyone puts off. The result: things slip, and your cash flow waits.',
          tasks: ['Comb through due dates one by one', 'Dig through emails for the right contact', 'Write and copy-paste each reminder', 'Keep track of who was chased, and when'],
          now: "Every day, late invoices are picked up. The client gets the right message at the right time: a heads-up before the due date, then firmer and firmer. Their invoices are grouped into a single email, never chased twice at the same stage. And you stay in control: any client can be paused at any time.",
          gain: '≈ 3 h / month',
          basis: 'for 40 reminders a month, at 5 minutes each',
        },
        {
          tag: 'Inventory',
          title: 'Low-stock alerts',
          problem: "You find out a product is missing the day a customer orders it. Too late.",
          tasks: ['Check stock levels by hand', 'Compare each product to its threshold', 'Warn the right person case by case'],
          now: "Stock is monitored continuously. As soon as a product drops below its threshold, the right person gets an alert, just once, not an email every hour. When stock is back up, monitoring resets on its own.",
          gain: '≈ 5 h / month',
          basis: 'for a 15-minute check every working day',
        },
        {
          tag: 'Admin',
          title: 'Contracts generated in bulk',
          problem: 'Every contract means copying a Word template, replacing fields, recalculating amounts. And the same mistakes every time.',
          tasks: ['Copy the Word template', 'Retype client details one by one', 'Recalculate net, VAT and gross by hand', 'Proofread for copy-paste mistakes', 'Export to PDF, rename, file it'],
          now: "You fill in a spreadsheet, one row per contract. The PDFs come out ready to send, numbered and filed. Amounts are calculated, company IDs are checked, and an incomplete row is flagged without holding up the rest.",
          gain: '≈ 7 h / month',
          basis: 'for 30 contracts a month, at 15 minutes each',
        },
      ],
      cta: { text: 'Does a task like this eat up your time?', button: "Let's talk" },
    },
    ai: {
      title: 'The right AI, not the trendiest.',
      text: 'We set up the AI best suited to your sector and needs — after a clear audit of what would actually save you time. We pick and install the right tool, not the buzziest one.',
      tools: ['Claude', 'ChatGPT', 'Gemini', 'Codex', 'Copilot', 'Mistral', 'Perplexity', 'Llama', 'Cursor', 'n8n', 'Zapier', 'Make'],
      cta: { text: 'Want a clear audit of your business?', button: 'Request an audit' },
    },
    pricing: {
      title: 'Quote-based pricing',
      intro: 'We do not sell a generic package. We propose several blocks depending on your need, maturity and expected impact.',
      note: 'We recommend the right format after a clear first conversation.',
      blocks: [
        { title: 'Agentic automation', points: ['Agents that take over repetitive tasks', 'Automated triggers across your tools', 'Fast time savings on key processes'] },
        { title: 'Custom tool development', points: ['An app or interface adapted to your way of working', 'Replacement for a manual or fragile process', 'A simple, robust solution built to last'] },
        { title: 'Complete solution', points: ['Needs analysis', 'Implementation of tools and automations', 'Training and support for adoption'] },
      ],
    },
    process: {
      title: 'How it works',
      intro: 'A simple path, no traps, from the first chat to delivery.',
      steps: [
        { n: '01', name: 'Free chat', desc: "We talk through your need, 30 minutes, no commitment. We'll tell you honestly if we can help." },
        { n: '02', name: 'Scoping', badge: 'paid step', desc: 'We analyse in depth, define exactly what to build and hand you a clear spec. This is what prevents nasty surprises.' },
        { n: '03', name: 'Quote', desc: 'A clear price based on the scoping. You know exactly what you pay for, and why.' },
        { n: '04', name: 'Development', desc: 'We build, with regular check-ins so you follow the progress.' },
        { n: '05', name: 'Delivery', desc: 'Tool delivered, explained, and we stay available as it evolves.' },
      ],
      cta: { text: 'Ready to get started?', button: 'Book a free call' },
    },
    about: {
      title: 'Who we are',
      lead: 'myblok — dev and AI, direct.',
      paragraphs: [
        'No agency, no middleman, no sales rep: you talk directly to the person building your tool.',
        "We know demanding environments — day to day we develop as a work-study engineer at Crédit Agricole T&S, on systems that leave no room for sloppiness.",
        "We're starting out, and we'll say it plainly: no long client list to show yet. In exchange, you get someone available, direct and invested — at a price without a big firm's markup.",
      ],
      points: [
        { k: 'Direct contact', v: 'You talk to the person who codes, not a salesperson.' },
        { k: 'No middleman', v: 'Lower cost, shorter delays, nothing lost along the way.' },
        { k: 'Invested', v: "Your project matters — it won't sit at the bottom of a queue." },
      ],
      location: 'Based in Lyon, we can work on site when needed or manage the project remotely depending on what suits you best.',
    },
    contact: {
      title: 'An idea, a need, or just a question?',
      subtitle: 'Drop us two lines. We reply fast.',
      name: 'Your name',
      email: 'Your email',
      message: 'Your need in a few words',
      submit: 'Send',
      sending: 'Sending…',
      success: "Message sent. We'll get back to you very soon.",
      error: 'Sending failed. Just email us directly at the address below.',
      or: 'or directly',
      privacy: 'Your name, email and message are used only to reply to you. Never sold, never used for marketing.',
      privacyLink: 'Your rights and the details',
    },
    footer: {
      tagline: 'Custom tools & AI for SMEs.',
      legalToggle: 'Legal notice',
      madeIn: 'Designed and built directly from Lyon.',
    },
    legal: {
      title: 'Legal notice',
      lines: [
        ['Publisher', `myblok — ${LEGAL.name}, sole trader (auto-entrepreneur, France)`],
        ['SIREN', LEGAL.siren],
        ['Registered address', LEGAL.address],
        ['Publication director', LEGAL.name],
        ['Contact', LEGAL.email],
        ['Host', 'Vercel Inc. — 340 S Lemon Ave #4133, Walnut, CA 91789, USA — vercel.com'],
      ],
      privacy: {
        title: 'Personal data',
        intro:
          'The contact form is the only place on this site where we ask you for personal information. Here is exactly what happens to it.',
        lines: [
          ['Data collected', 'Your name, your email address and the content of your message. Nothing else: no hidden fields, no data gathered without your knowledge.'],
          ['Purpose', 'Answering your enquiry and, if it turns into a project, preparing a proposal. No unsolicited marketing, no resale, no list shared with anyone.'],
          ['Legal basis', 'Your own request: steps taken at your request prior to entering into a contract (Article 6(1)(b) GDPR).'],
          ['Recipients', `Baptiste, and no one else. The email is delivered through our sending provider ${LEGAL.mailProvider}, covered by a data processing agreement and the European Commission’s standard contractual clauses.`],
          ['Hosting', 'The site and the form are hosted by Vercel Inc. (USA), under the same contractual framework.'],
          ['Retention', 'Three years from our last exchange, then deletion. If an engagement starts, the related data is kept for the duration of the work and the accounting and legal obligations that follow.'],
          ['Cookies and trackers', 'None. No analytics, no advertising, no social widgets. Only your theme and language choice are stored in your browser: that never leaves your device and requires no consent.'],
          ['Your rights', `Access, rectification, erasure, restriction, objection and portability. An email to ${LEGAL.email} is enough, we answer within one month.`],
        ],
      },
    },
    theme: { toDark: 'Switch to dark mode', toLight: 'Switch to light mode' },
  },
}

export const CONTACT_EMAIL = 'contact@myblok.fr'
