// Bilingual content for myblok. FR default; EN for international prospecting.
// Voice: "on / nous" (first person plural), address the client as "vous",
// never third person about ourselves. Honest — no fake clients, team, or metrics.

export const content = {
  fr: {
    nav: {
      links: [
        { id: 'offre', label: "Ce qu'on fait" },
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
    },
    footer: {
      tagline: 'Outils sur mesure & IA pour PME.',
      legalToggle: 'Mentions légales',
      madeIn: 'Conçu et développé en direct, depuis Lyon.',
    },
    legal: {
      title: 'Mentions légales',
      lines: [
        ['Éditeur', 'myblok — Entrepreneur individuel (auto-entreprise)'],
        ['Contact', 'contact@myblok.fr'],
        ['Directeur de publication', 'Baptiste '],
        ['Hébergeur', 'Vercel Inc. — 340 S Lemon Ave #4133, Walnut, CA 91789, USA — vercel.com'],
      ],
    },
    theme: { toDark: 'Passer en mode sombre', toLight: 'Passer en mode clair' },
  },

  en: {
    nav: {
      links: [
        { id: 'offre', label: 'What we do' },
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
    },
    footer: {
      tagline: 'Custom tools & AI for SMEs.',
      legalToggle: 'Legal notice',
      madeIn: 'Designed and built directly from Lyon.',
    },
    legal: {
      title: 'Legal notice',
      lines: [
        ['Publisher', 'Baptiste [LAST NAME] — Sole trader (auto-entrepreneur, France)'],
        ['SIREN', '[to complete]'],
        ['Contact', 'contact@myblok.fr'],
        ['Publication director', 'Baptiste [LAST NAME]'],
        ['Host', 'Vercel Inc. — 340 S Lemon Ave #4133, Walnut, CA 91789, USA — vercel.com'],
      ],
    },
    theme: { toDark: 'Switch to dark mode', toLight: 'Switch to light mode' },
  },
}

export const CONTACT_EMAIL = 'contact@myblok.fr'
