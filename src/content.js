// Bilingual content for myblok. FR default; EN for Lombok / international prospecting.
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
      pre: 'Des outils',
      grad: 'sur mesure',
      post: 'pour les PME',
      sub: "On conçoit et on met en place l'IA, les automatisations et les logiciels sur mesure qui font gagner du temps à votre entreprise. En direct, sans agence.",
      ctaPrimary: 'Parlons-en',
      ctaSecondary: 'Comment ça se passe',
      tag: '+ votre besoin',
    },
    problem: {
      title: 'Ça vous parle ?',
      items: [
        'Vous ressaisissez les mêmes données entre deux logiciels, tous les jours.',
        "On vous parle d'IA partout, mais vous ne savez pas quoi en faire concrètement.",
        "Aucun logiciel du marché ne colle vraiment à votre façon de travailler.",
      ],
      foot: "Si l'un de ces cas vous parle, c'est exactement ce qu'on résout.",
    },
    offer: {
      title: "Ce qu'on fait",
      intro: "Du conseil à la livraison, on s'occupe de tout — l'IA, l'automatisation et le sur-mesure.",
      blocks: [
        {
          tag: 'Conseil & audit',
          title: "Y voir clair sur l'IA",
          desc: "On audite votre activité et on vous dit franchement où l'IA vous ferait gagner du temps — et où elle ne sert à rien.",
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
    },
    ai: {
      title: 'La bonne IA, pas la plus à la mode.',
      text: "On met en place l'IA la plus adaptée à votre secteur et à vos besoins — après un audit clair de ce qui vous fera vraiment gagner du temps. On choisit et on installe le bon outil, pas le plus tendance.",
      tools: ['Claude', 'ChatGPT', 'Gemini', 'Codex', 'Copilot', 'Mistral', 'Perplexity', 'Llama', 'Cursor', 'n8n', 'Zapier', 'Make'],
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
      location: "On travaille entre la France et l'Indonésie (Lombok) jusqu'à fin août 2026, à distance — le décalage horaire est géré.",
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
      madeIn: 'Conçu et développé en direct, entre la France et Lombok.',
    },
    legal: {
      title: 'Mentions légales',
      lines: [
        ['Éditeur', 'Baptiste [NOM] — Entrepreneur individuel (auto-entrepreneur)'],
        ['SIREN', '[à compléter]'],
        ['Contact', 'contact@myblok.fr'],
        ['Directeur de publication', 'Baptiste [NOM]'],
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
      sub: "We design and set up the AI, automations and custom software that save your business time. Direct, no agency.",
      ctaPrimary: 'Let’s talk',
      ctaSecondary: 'See how it works',
      tag: '+ your need',
    },
    problem: {
      title: 'Sound familiar?',
      items: [
        'You re-enter the same data between two apps, every single day.',
        "Everyone talks about AI, but you don't know what to actually do with it.",
        "No off-the-shelf software really fits the way you work.",
      ],
      foot: "If any of these is you, that's exactly what we solve.",
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
    },
    ai: {
      title: 'The right AI, not the trendiest.',
      text: 'We set up the AI best suited to your sector and needs — after a clear audit of what would actually save you time. We pick and install the right tool, not the buzziest one.',
      tools: ['Claude', 'ChatGPT', 'Gemini', 'Codex', 'Copilot', 'Mistral', 'Perplexity', 'Llama', 'Cursor', 'n8n', 'Zapier', 'Make'],
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
      location: 'We work between France and Indonesia (Lombok) until end of August 2026, remotely — the time difference is handled.',
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
      madeIn: 'Designed and built direct, between France and Lombok.',
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

// Formspree endpoint — replace with your real form id from formspree.io
export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/your-form-id'
export const CONTACT_EMAIL = 'contact@myblok.fr'
