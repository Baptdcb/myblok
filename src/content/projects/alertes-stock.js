// Page projet « alertes-stock ». Démonstration : données fictives (voir index.js).

export default {
  meta: {
    title: 'Alertes de rupture de stock automatiques — myblok',
    description:
      "Démonstration : les stocks surveillés en continu, une alerte dès qu'un produit passe sous son seuil, une seule fois. Fonctionnement, schémas et technos.",
  },
  fr: {
    back: 'Tous les exemples',
    tag: 'Stocks',
    title: 'Alertes de rupture de stock',
    lead: "Les niveaux de stock sont surveillés en continu. Dès qu'un produit passe sous son seuil, la bonne personne est prévenue, une seule fois.",
    facts: [
      { value: '3', label: 'tâches sans valeur ajoutée en moins' },
      { value: '≈ 5 h', label: 'gagnées par mois, pour un contrôle de 15 minutes par jour ouvré' },
      { value: '1', label: 'alerte par rupture, pas un email à chaque vérification' },
    ],

    problem: {
      title: 'Le problème',
      paragraphs: [
        "Un produit manque, et on le découvre le jour où un client le commande. Pour l'éviter, il faudrait vérifier les niveaux tous les jours, produit par produit, et prévenir la personne qui passe les commandes.",
        "Personne n'a le temps de le faire sérieusement. Alors les ruptures arrivent par surprise : commandes en attente, clients déçus, réassort passé en urgence.",
      ],
    },

    flows: {
      title: 'Avant, maintenant',
      intro: "D'un côté, un contrôle manuel qui dépend de la mémoire de chacun. De l'autre, une surveillance qui ne dort jamais.",
      before: {
        label: 'Avant : à la main, tous les jours',
        nodes: [
          { title: 'Vérifier les niveaux', sub: 'Rayon par rayon, ou ligne par ligne dans le tableur' },
          { title: 'Comparer au seuil', sub: 'Pour chaque produit, de tête ou avec une liste' },
          { title: 'Prévenir', sub: 'Retrouver qui commande, lui écrire, espérer ne rien oublier' },
        ],
      },
      after: {
        label: 'Maintenant : tout seul, toutes les heures',
        nodes: [
          { title: 'Stocks vérifiés', sub: 'Toutes les heures, jour et nuit' },
          { title: 'Seuil franchi ?', sub: 'Chaque produit a son propre seuil critique' },
          { title: 'Alerte envoyée', sub: 'À la bonne personne, une seule fois' },
          { title: 'Réarmement', sub: 'Quand le stock remonte, la surveillance repart' },
        ],
      },
    },

    tiers: {
      title: 'Une alerte utile, pas du bruit',
      intro: "Chaque produit suit le même cycle en quatre temps. L'objectif : prévenir une fois, au bon moment, et se taire ensuite.",
      items: [
        { when: 'OK', name: 'Stock normal', desc: 'Au-dessus du seuil : rien ne se passe, la vérification continue en silence.' },
        { when: 'Alerte', name: 'Passage sous le seuil', desc: 'Dès que la quantité atteint le seuil, un email part vers la personne qui gère les commandes.' },
        { when: 'Silence', name: 'Stock toujours bas', desc: 'Le produit est marqué « déjà alerté » : pas un email de plus à chaque vérification.' },
        { when: 'Réarmé', name: 'Retour à la normale', desc: 'Le stock remonte au-dessus du seuil : le marqueur s\'efface, une future rupture redéclenchera une alerte.' },
      ],
      note: "La fréquence se règle : toutes les heures par défaut, plus souvent si votre activité l'exige.",
    },

    preview: {
      title: 'À quoi ça ressemble',
      intro: "Ce que le service voit à chaque vérification, et l'alerte qu'il envoie. Sur les quatre produits de la démo, deux sont sous leur seuil : deux alertes, une par produit.",
      caption: 'Produits, quantités et adresses fictifs.',
      gauges: {
        title: 'Niveaux de stock',
        qtyLabel: 'en stock',
        thresholdLabel: 'seuil',
        ok: 'OK',
        low: 'Alerte envoyée',
        items: [
          { name: 'Câble USB-C 1 m', qty: 120, threshold: 50 },
          { name: 'Écran 24 pouces', qty: 8, threshold: 10 },
          { name: 'Souris sans fil', qty: 3, threshold: 15 },
          { name: 'Clavier mécanique', qty: 45, threshold: 20 },
        ],
      },
      plain: {
        fromLabel: 'De',
        toLabel: 'À',
        subjectLabel: 'Objet',
        from: 'alertes-stock@exemple.fr',
        to: 'achats@exemple.fr',
        subject: '[Alerte stock] Souris sans fil',
        lines: ['Stock bas : Souris sans fil', 'Quantité actuelle : 3', 'Seuil critique : 15'],
      },
    },

    guarantees: {
      title: "Ce que l'outil garantit",
      items: [
        { title: 'Une seule alerte par rupture', desc: "Un produit déjà signalé n'est pas signalé à nouveau tant qu'il reste sous son seuil. Pas de boîte mail noyée sous les rappels." },
        { title: 'Réarmement automatique', desc: 'Quand le stock remonte, le produit redevient surveillé normalement. Personne n\'a à « remettre l\'alerte ».' },
        { title: 'Un seuil par produit', desc: "Un câble qui se vend par centaines et un écran qui se vend à l'unité n'ont pas le même seuil critique. Chacun a le sien." },
        { title: 'Tourne jour et nuit', desc: "Le service vérifie en continu, week-end compris. Une erreur ponctuelle est consignée, et la vérification suivante repart normalement." },
        { title: 'Rien à installer sur vos postes', desc: 'Le service tourne sur un serveur, dans un conteneur Docker. Il suffit de recevoir les emails.' },
      ],
    },

    tech: {
      title: 'Sous le capot',
      intro: "Pour les curieux : un petit service volontairement simple. Trois briques, chacune avec un rôle précis.",
      diagramLabel: 'Architecture',
      nodes: [
        { title: 'Base SQLite', role: 'Se souvient', items: ['Chaque produit : quantité et seuil', 'Le marqueur « déjà alerté »', 'Reconstruite au démarrage depuis un fichier éditable'] },
        { title: 'Service Python', role: 'Surveille', items: ['Se réveille toutes les heures', 'Compare chaque produit à son seuil', 'Envoie les alertes et pose le marqueur', 'Réarme les produits revenus à la normale'] },
        { title: 'Messagerie', role: 'Prévient', items: ['Envoi par SMTP : Brevo, Gmail ou votre serveur', 'Un email par produit en rupture', "Vers l'adresse de votre choix"] },
      ],
      arrows: ['SQL', 'SMTP'],
      passTitle: 'Une vérification, étape par étape',
      pass: [
        { title: 'Réveil', desc: 'Toutes les heures, le service se réveille. L\'intervalle se règle dans la configuration.' },
        { title: 'Lecture', desc: "Il lit les produits dont la quantité est au seuil ou en dessous, et qui n'ont pas encore été signalés." },
        { title: 'Alerte', desc: 'Pour chacun, un email part avec le nom du produit, la quantité actuelle et le seuil.' },
        { title: 'Marquage', desc: 'Le produit est marqué « déjà alerté » : la vérification suivante ne le renverra pas.' },
        { title: 'Réarmement', desc: 'Les produits revenus au-dessus de leur seuil perdent leur marqueur.' },
        { title: 'Pause', desc: "Le service se rendort jusqu'à la prochaine vérification. Une erreur est consignée sans l'arrêter." },
      ],
      stackTitle: 'Les technos',
      stack: ['Python', 'SQLite', 'Docker', 'SMTP'],
      whyTitle: 'Pourquoi ces choix',
      why: [
        { title: 'Le plus simple qui marche', desc: "Un seul petit service et une base de données intégrée à Python. Pas de serveur de base de données à maintenir, rien de superflu." },
        { title: 'Un état, pas un historique', desc: 'Un simple marqueur par produit suffit à éviter le bruit. Rien à purger, rien qui grossit avec le temps.' },
        { title: 'Réglable sans toucher au code', desc: 'Fréquence de vérification, serveur d\'envoi, destinataires : tout passe par un fichier de configuration.' },
      ],
    },

    adapt: {
      title: 'Et chez vous ?',
      intro: "La démo lit ses quantités dans un fichier modifié à la main. Chez vous, on l'adapte à votre façon de travailler :",
      items: [
        'Les quantités viennent de votre logiciel de stock, de votre caisse ou d\'un tableur partagé.',
        'Les seuils sont fixés avec vous, produit par produit.',
        "Les alertes partent vers la bonne personne : acheteur, responsable d'entrepôt, ou un canal d'équipe.",
        "L'alerte peut aller plus loin : suggérer la quantité à commander, ou préparer le bon de commande.",
      ],
    },

    cta: { text: 'Vos ruptures vous surprennent encore ?', button: 'Parlons-en' },
  },

  en: {
    back: 'All examples',
    tag: 'Inventory',
    title: 'Low-stock alerts',
    lead: 'Stock levels are monitored continuously. As soon as a product drops below its threshold, the right person is told, just once.',
    facts: [
      { value: '3', label: 'low-value tasks gone' },
      { value: '≈ 5 h', label: 'saved a month, for a 15-minute check every working day' },
      { value: '1', label: 'alert per shortage, not an email at every check' },
    ],

    problem: {
      title: 'The problem',
      paragraphs: [
        'A product runs out, and you find out the day a customer orders it. To avoid that, someone would have to check levels every day, product by product, and warn whoever places the orders.',
        'Nobody has time to do it properly. So shortages come as a surprise: orders on hold, disappointed customers, rush restocking.',
      ],
    },

    flows: {
      title: 'Before, now',
      intro: "On one side, a manual check that relies on everyone's memory. On the other, monitoring that never sleeps.",
      before: {
        label: 'Before: by hand, every day',
        nodes: [
          { title: 'Check levels', sub: 'Shelf by shelf, or row by row in the spreadsheet' },
          { title: 'Compare to threshold', sub: 'For each product, from memory or with a list' },
          { title: 'Warn someone', sub: 'Find who orders, write to them, hope nothing slips' },
        ],
      },
      after: {
        label: 'Now: on its own, every hour',
        nodes: [
          { title: 'Stock checked', sub: 'Every hour, day and night' },
          { title: 'Threshold crossed?', sub: 'Each product has its own critical threshold' },
          { title: 'Alert sent', sub: 'To the right person, just once' },
          { title: 'Reset', sub: 'When stock is back up, monitoring starts again' },
        ],
      },
    },

    tiers: {
      title: 'A useful alert, not noise',
      intro: 'Every product follows the same four-step cycle. The goal: warn once, at the right time, then stay quiet.',
      items: [
        { when: 'OK', name: 'Normal stock', desc: 'Above the threshold: nothing happens, checking carries on quietly.' },
        { when: 'Alert', name: 'Drops below threshold', desc: 'As soon as the quantity hits the threshold, an email goes to whoever handles orders.' },
        { when: 'Quiet', name: 'Still low', desc: 'The product is flagged "already alerted": no extra email at every check.' },
        { when: 'Reset', name: 'Back to normal', desc: 'Stock rises above the threshold: the flag clears, and a future shortage will trigger a new alert.' },
      ],
      note: 'The frequency is adjustable: every hour by default, more often if your business needs it.',
    },

    preview: {
      title: 'What it looks like',
      intro: 'What the service sees at each check, and the alert it sends. Of the four demo products, two are below their threshold: two alerts, one per product.',
      caption: 'Products, quantities and addresses are fictitious. The demo sends its alerts in French.',
      gauges: {
        title: 'Stock levels',
        qtyLabel: 'in stock',
        thresholdLabel: 'threshold',
        ok: 'OK',
        low: 'Alert sent',
        items: [
          { name: 'USB-C cable 1 m', qty: 120, threshold: 50 },
          { name: '24-inch monitor', qty: 8, threshold: 10 },
          { name: 'Wireless mouse', qty: 3, threshold: 15 },
          { name: 'Mechanical keyboard', qty: 45, threshold: 20 },
        ],
      },
      plain: {
        fromLabel: 'From',
        toLabel: 'To',
        subjectLabel: 'Subject',
        from: 'alertes-stock@exemple.fr',
        to: 'achats@exemple.fr',
        subject: '[Alerte stock] Souris sans fil',
        lines: ['Stock bas : Souris sans fil', 'Quantité actuelle : 3', 'Seuil critique : 15'],
      },
    },

    guarantees: {
      title: 'What the tool guarantees',
      items: [
        { title: 'One alert per shortage', desc: "A product already reported isn't reported again while it stays below its threshold. No inbox drowning in reminders." },
        { title: 'Automatic reset', desc: 'When stock goes back up, the product is monitored normally again. Nobody has to "re-arm" the alert.' },
        { title: 'A threshold per product', desc: 'A cable that sells by the hundred and a monitor that sells one at a time do not share a critical level. Each has its own.' },
        { title: 'Runs day and night', desc: 'The service checks continuously, weekends included. A one-off error is logged, and the next check carries on normally.' },
        { title: 'Nothing to install on your computers', desc: 'The service runs on a server, in a Docker container. All you do is receive the emails.' },
      ],
    },

    tech: {
      title: 'Under the hood',
      intro: 'For the curious: a deliberately simple little service. Three building blocks, each with a clear job.',
      diagramLabel: 'Architecture',
      nodes: [
        { title: 'SQLite database', role: 'Remembers', items: ['Each product: quantity and threshold', 'The "already alerted" flag', 'Rebuilt at startup from an editable file'] },
        { title: 'Python service', role: 'Watches', items: ['Wakes up every hour', 'Compares each product to its threshold', 'Sends alerts and sets the flag', 'Resets products back to normal'] },
        { title: 'Mail server', role: 'Warns', items: ['Sends over SMTP: Brevo, Gmail or your own server', 'One email per product running low', 'To the address of your choice'] },
      ],
      arrows: ['SQL', 'SMTP'],
      passTitle: 'One check, step by step',
      pass: [
        { title: 'Wake up', desc: 'Every hour, the service wakes up. The interval is set in the configuration.' },
        { title: 'Read', desc: "It reads the products at or below their threshold that haven't been reported yet." },
        { title: 'Alert', desc: 'For each one, an email goes out with the product name, current quantity and threshold.' },
        { title: 'Flag', desc: 'The product is flagged "already alerted": the next check will not send it again.' },
        { title: 'Reset', desc: 'Products back above their threshold lose their flag.' },
        { title: 'Sleep', desc: 'The service goes back to sleep until the next check. An error is logged without stopping it.' },
      ],
      stackTitle: 'The stack',
      stack: ['Python', 'SQLite', 'Docker', 'SMTP'],
      whyTitle: 'Why these choices',
      why: [
        { title: 'The simplest thing that works', desc: 'A single small service and a database built into Python. No database server to maintain, nothing superfluous.' },
        { title: 'A state, not a history', desc: 'A simple flag per product is enough to prevent noise. Nothing to purge, nothing that grows over time.' },
        { title: 'Adjustable without touching code', desc: 'Check frequency, mail server, recipients: everything lives in a configuration file.' },
      ],
    },

    adapt: {
      title: 'And for you?',
      intro: 'The demo reads its quantities from a file edited by hand. For you, we adapt it to the way you work:',
      items: [
        'Quantities come from your inventory software, your till, or a shared spreadsheet.',
        'Thresholds are set with you, product by product.',
        'Alerts go to the right person: buyer, warehouse manager, or a team channel.',
        'The alert can go further: suggest the quantity to reorder, or prepare the purchase order.',
      ],
    },

    cta: { text: 'Do shortages still catch you off guard?', button: "Let's talk" },
  },
}
