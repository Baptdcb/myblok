// Page projet « relance-factures ». Démonstration : données fictives (voir index.js).

export default {
  // Sert au prérendu : <title>, description et partages sociaux de la page.
  meta: {
    title: 'Relance automatique des factures impayées — myblok',
    description:
      "Démonstration : les factures en retard repérées chaque matin, le bon message au bon moment, jamais deux relances au même stade. Fonctionnement, schémas et technos.",
  },
  fr: {
    back: 'Tous les exemples',
    tag: 'Comptabilité',
    title: 'Relance des factures impayées',
    lead: "Chaque matin, les factures en retard sont repérées et le client reçoit le bon message, au bon moment. Personne n'a plus à y penser.",
    facts: [
      { value: '4', label: 'tâches sans valeur ajoutée en moins' },
      { value: '≈ 3 h', label: 'gagnées par mois, pour 40 relances à 5 minutes chacune' },
      { value: '0', label: 'relance en double : la base de données la refuse' },
    ],

    problem: {
      title: 'Le problème',
      paragraphs: [
        "Relancer un client qui paie en retard, personne n'aime le faire. Il faut repérer les échéances dépassées, retrouver le bon contact, choisir le ton, rédiger, puis se souvenir de qui a déjà été relancé.",
        "Alors la tâche glisse. Les relances partent trop tard, ou pas du tout, et la trésorerie attend. Ce n'est pas une question de volonté : c'est une tâche répétitive, sans valeur ajoutée, qui passe toujours après le reste.",
      ],
    },

    flows: {
      title: 'Avant, maintenant',
      intro: "La même chaîne de tâches. D'un côté, quelqu'un la fait à la main pour chaque facture. De l'autre, elle tourne toute seule.",
      before: {
        label: 'Avant : à la main, facture par facture',
        nodes: [
          { title: 'Éplucher les échéances', sub: 'Une par une, dans le logiciel ou le tableur' },
          { title: 'Chercher le contact', sub: 'Dans les emails, les devis, les fiches client' },
          { title: 'Rédiger la relance', sub: 'Copier-coller, adapter, relire' },
          { title: 'Noter le suivi', sub: 'Qui a été relancé, quand, à quel stade' },
        ],
      },
      after: {
        label: 'Maintenant : tout seul, chaque matin à 8 h',
        nodes: [
          { title: 'Retards repérés', sub: 'Toutes les factures sont vérifiées' },
          { title: 'Regroupées par client', sub: 'Trois factures en retard, un seul email' },
          { title: 'Le bon ton', sub: 'Choisi selon le retard de chaque facture' },
          { title: 'Envoyées et tracées', sub: 'Avec un récapitulatif pour la compta' },
        ],
      },
    },

    tiers: {
      title: 'Le bon message au bon moment',
      intro: "Plus le retard dure, plus le ton se durcit. Quatre paliers, chacun avec son propre modèle d'email.",
      items: [
        { when: 'J-3', name: 'Rappel préventif', desc: "Trois jours avant l'échéance. Si le paiement est déjà programmé, le client n'a rien à faire." },
        { when: 'J+7', name: 'Rappel courtois', desc: "« Il s'agit sans doute d'un simple oubli. » Les coordonnées bancaires sont jointes." },
        { when: 'J+15', name: 'Relance ferme', desc: 'Demande de règlement sous huit jours, ou d\'une date de paiement ferme.' },
        { when: 'J+30', name: 'Mise en demeure', desc: 'Avec les mentions légales : pénalités de retard et indemnité forfaitaire de recouvrement.' },
      ],
      note: "Entre l'échéance et J+7, rien ne part : on laisse au virement le temps d'arriver.",
    },

    preview: {
      title: 'À quoi ça ressemble',
      intro: "Le rappel courtois tel que la démo l'envoie. Le Cabinet Lartigue a deux factures au même palier : il reçoit un seul email, pas deux.",
      caption: 'Entreprises, factures et coordonnées fictives.',
      email: {
        fromLabel: 'De',
        toLabel: 'À',
        subjectLabel: 'Objet',
        from: 'Anvela Services <comptabilite@anvela-services.fr>',
        to: 'secretariat@cabinet-lartigue.fr',
        subject: 'Anvela Services — rappel de règlement (1 130,00 €)',
        company: 'Anvela Services',
        greeting: 'Bonjour,',
        intro: "Sauf erreur de notre part, nous n'avons pas encore enregistré le règlement des factures ci-dessous, dont l'échéance est dépassée :",
        columns: ['Facture', 'Échéance', 'Retard', 'Montant'],
        rows: [
          ['FA-2026-0044', '11/09/2026', '12 jours', '720,00 €'],
          ['FA-2026-0045', '14/09/2026', '9 jours', '410,00 €'],
        ],
        totalLabel: 'Total dû',
        total: '1 130,00 €',
        outro: "Il s'agit sans doute d'un simple oubli. Si le paiement a été effectué entre-temps, merci de nous le signaler afin que nous mettions notre suivi à jour.",
        bankLabel: 'Coordonnées de règlement',
        iban: 'FR76 3000 6000 0112 3456 7890 189',
        bic: 'AGRIFRPP844',
        closing: 'Bien cordialement,',
        signName: 'Hélène Marchand',
        signRole: 'Responsable administratif et financier',
      },
    },

    guarantees: {
      title: "Ce que l'outil garantit",
      items: [
        { title: 'Jamais deux fois la même relance', desc: "Chaque envoi est enregistré par facture et par palier. Une deuxième relance identique est refusée par la base de données elle-même, pas par une vérification qu'on pourrait oublier." },
        { title: 'Un seul email par client', desc: 'Toutes les factures d\'un client au même stade sont regroupées dans un seul message, avec le total dû.' },
        { title: 'Un client peut être mis en pause', desc: 'Litige en cours, arrangement de paiement : on suspend les relances de ce client, les autres continuent.' },
        { title: 'Un email manqué se rattrape, un doublon non', desc: "L'envoi est réservé avant de partir. Si quelque chose tombe en panne entre les deux, la relance repart le lendemain. Le client ne reçoit jamais le même email deux fois." },
        { title: 'La compta reste informée', desc: "Après chaque passage, un récapitulatif liste les relances parties, avec un lien vers le détail des factures et des retards." },
      ],
    },

    tech: {
      title: 'Sous le capot',
      intro: "Pour les curieux : comment c'est construit, et pourquoi. Trois briques, chacune avec un rôle précis.",
      diagramLabel: 'Architecture',
      nodes: [
        { title: 'n8n', role: 'Décide comment', items: ['Se déclenche chaque matin à 8 h', 'Regroupe les factures par client et par palier', 'Rédige les emails à partir des modèles', 'Envoie par SMTP et consigne le résultat'] },
        { title: 'API de suivi', role: 'Décide qui', items: ['Calcule le retard de chaque facture', 'Attribue le palier : J-3, J+7, J+15, J+30', 'Écarte les clients en pause', 'Écarte ce qui est déjà parti'] },
        { title: 'Base SQLite', role: 'Se souvient', items: ['Clients et factures', "L'historique de chaque envoi", 'Refuse tout doublon (facture, palier)'] },
      ],
      arrows: ['HTTP + jeton', 'SQL'],
      passTitle: 'Le passage de chaque matin',
      pass: [
        { title: 'Déclenchement', desc: 'Un déclencheur planifié n8n lance le passage à 8 h.' },
        { title: 'Qui relancer ?', desc: "n8n interroge l'API, qui répond avec les factures à relancer aujourd'hui et leur palier, déjà filtrées." },
        { title: 'Composer', desc: 'Un nœud de code regroupe par client et par palier, puis remplit le modèle HTML correspondant.' },
        { title: 'Réserver', desc: "Avant l'envoi, la relance est enregistrée comme « en cours » : elle ne peut plus partir deux fois." },
        { title: 'Envoyer', desc: "L'email part par SMTP. En cas d'échec, l'erreur est consignée et la relance repart au prochain passage." },
        { title: 'Confirmer', desc: "L'envoi est marqué comme parti, puis le récapitulatif part à la comptabilité." },
      ],
      stackTitle: 'Les technos',
      stack: ['n8n', 'Node.js 24', 'TypeScript', 'Express 5', 'SQLite', 'Docker', 'SMTP'],
      whyTitle: 'Pourquoi ces choix',
      why: [
        { title: 'Chaque brique fait un seul métier', desc: "L'API décide qui relancer, n8n décide comment. On change un modèle d'email sans toucher aux règles, et inversement." },
        { title: 'La sécurité est dans la base', desc: "L'interdiction du doublon est une contrainte de la base de données. Même un workflow relancé deux fois par erreur ne peut pas envoyer deux relances." },
        { title: 'Léger, gratuit, chez vous', desc: "n8n en version auto-hébergée, SQLite intégré à Node.js, le tout dans Docker. Aucun abonnement, et vos données de facturation restent sur votre serveur." },
      ],
    },

    adapt: {
      title: 'Et chez vous ?',
      intro: 'La démo part d\'un fichier de factures fictives. Chez vous, on l\'adapte à votre façon de travailler :',
      items: [
        "Les factures viennent de votre outil de facturation, ou d'un simple export tableur.",
        'Les modèles d\'email sont réécrits avec votre ton et votre identité.',
        'Les paliers et les délais sont ajustés à vos conditions de paiement.',
        "L'envoi passe par votre propre messagerie : les clients voient votre adresse, pas la nôtre.",
      ],
    },

    cta: { text: 'Vos relances vous prennent du temps ?', button: 'Parlons-en' },
  },

  en: {
    back: 'All examples',
    tag: 'Accounting',
    title: 'Chasing unpaid invoices',
    lead: 'Every morning, late invoices are picked up and the client gets the right message at the right time. Nobody has to think about it anymore.',
    facts: [
      { value: '4', label: 'low-value tasks gone' },
      { value: '≈ 3 h', label: 'saved a month, for 40 reminders at 5 minutes each' },
      { value: '0', label: 'duplicate reminders: the database refuses them' },
    ],

    problem: {
      title: 'The problem',
      paragraphs: [
        'Nobody likes chasing a client who pays late. You have to spot the overdue invoices, find the right contact, pick the tone, write, then remember who was already chased.',
        "So the task slips. Reminders go out too late, or not at all, and cash flow waits. It isn't about willpower: it's a repetitive, low-value task that always comes after everything else.",
      ],
    },

    flows: {
      title: 'Before, now',
      intro: 'The same chain of tasks. On one side, someone does it by hand for each invoice. On the other, it runs on its own.',
      before: {
        label: 'Before: by hand, invoice by invoice',
        nodes: [
          { title: 'Comb through due dates', sub: 'One by one, in the software or spreadsheet' },
          { title: 'Find the contact', sub: 'In emails, quotes, client records' },
          { title: 'Write the reminder', sub: 'Copy-paste, adapt, proofread' },
          { title: 'Track follow-up', sub: 'Who was chased, when, at which stage' },
        ],
      },
      after: {
        label: 'Now: on its own, every morning at 8 am',
        nodes: [
          { title: 'Late invoices found', sub: 'Every invoice is checked' },
          { title: 'Grouped by client', sub: 'Three late invoices, one email' },
          { title: 'The right tone', sub: 'Picked from how late each invoice is' },
          { title: 'Sent and logged', sub: 'With a summary for accounting' },
        ],
      },
    },

    tiers: {
      title: 'The right message at the right time',
      intro: 'The longer the delay, the firmer the tone. Four stages, each with its own email template.',
      items: [
        { when: 'D-3', name: 'Heads-up', desc: 'Three days before the due date. If payment is already scheduled, the client has nothing to do.' },
        { when: 'D+7', name: 'Friendly reminder', desc: '"This is probably just an oversight." Bank details included.' },
        { when: 'D+15', name: 'Firm reminder', desc: 'Asks for payment within eight days, or a firm payment date.' },
        { when: 'D+30', name: 'Formal notice', desc: 'With the legal wording: late-payment penalties and the fixed recovery fee.' },
      ],
      note: 'Between the due date and D+7, nothing goes out: the bank transfer gets time to arrive.',
    },

    preview: {
      title: 'What it looks like',
      intro: 'The friendly reminder as the demo sends it. Cabinet Lartigue has two invoices at the same stage: it gets one email, not two.',
      caption: 'Companies, invoices and details are fictitious. The demo sends its emails in French.',
      email: {
        fromLabel: 'From',
        toLabel: 'To',
        subjectLabel: 'Subject',
        from: 'Anvela Services <comptabilite@anvela-services.fr>',
        to: 'secretariat@cabinet-lartigue.fr',
        subject: 'Anvela Services — payment reminder (€1,130.00)',
        company: 'Anvela Services',
        greeting: 'Hello,',
        intro: 'Unless we are mistaken, we have not yet received payment for the invoices below, which are now past due:',
        columns: ['Invoice', 'Due date', 'Overdue', 'Amount'],
        rows: [
          ['FA-2026-0044', '11/09/2026', '12 days', '€720.00'],
          ['FA-2026-0045', '14/09/2026', '9 days', '€410.00'],
        ],
        totalLabel: 'Total due',
        total: '€1,130.00',
        outro: 'This is probably just an oversight. If payment has been made in the meantime, please let us know so we can update our records.',
        bankLabel: 'Payment details',
        iban: 'FR76 3000 6000 0112 3456 7890 189',
        bic: 'AGRIFRPP844',
        closing: 'Kind regards,',
        signName: 'Hélène Marchand',
        signRole: 'Head of administration and finance',
      },
    },

    guarantees: {
      title: 'What the tool guarantees',
      items: [
        { title: 'Never the same reminder twice', desc: 'Every send is recorded per invoice and per stage. A second identical reminder is refused by the database itself, not by a check someone could forget.' },
        { title: 'One email per client', desc: "All of a client's invoices at the same stage are grouped into one message, with the total due." },
        { title: 'Any client can be paused', desc: 'Ongoing dispute, payment arrangement: reminders for that client stop, the others carry on.' },
        { title: 'A missed email is caught up, a duplicate never happens', desc: 'The send is reserved before it goes out. If something fails in between, the reminder goes out the next day. The client never gets the same email twice.' },
        { title: 'Accounting stays informed', desc: 'After each run, a summary lists the reminders sent, with a link to the invoice and delay details.' },
      ],
    },

    tech: {
      title: 'Under the hood',
      intro: "For the curious: how it's built, and why. Three building blocks, each with a clear job.",
      diagramLabel: 'Architecture',
      nodes: [
        { title: 'n8n', role: 'Decides how', items: ['Triggers every morning at 8 am', 'Groups invoices by client and stage', 'Writes emails from the templates', 'Sends over SMTP and logs the result'] },
        { title: 'Tracking API', role: 'Decides who', items: ['Computes how late each invoice is', 'Assigns the stage: D-3, D+7, D+15, D+30', 'Skips paused clients', 'Skips what already went out'] },
        { title: 'SQLite database', role: 'Remembers', items: ['Clients and invoices', 'The history of every send', 'Refuses any (invoice, stage) duplicate'] },
      ],
      arrows: ['HTTP + token', 'SQL'],
      passTitle: 'The morning run',
      pass: [
        { title: 'Trigger', desc: 'An n8n schedule trigger starts the run at 8 am.' },
        { title: 'Who to chase?', desc: "n8n calls the API, which answers with today's invoices to chase and their stage, already filtered." },
        { title: 'Compose', desc: 'A code node groups by client and stage, then fills in the matching HTML template.' },
        { title: 'Reserve', desc: 'Before sending, the reminder is recorded as "in progress": it can no longer go out twice.' },
        { title: 'Send', desc: 'The email goes out over SMTP. If it fails, the error is logged and the reminder is retried on the next run.' },
        { title: 'Confirm', desc: 'The send is marked as done, then the summary goes to accounting.' },
      ],
      stackTitle: 'The stack',
      stack: ['n8n', 'Node.js 24', 'TypeScript', 'Express 5', 'SQLite', 'Docker', 'SMTP'],
      whyTitle: 'Why these choices',
      why: [
        { title: 'Each block does one job', desc: 'The API decides who to chase, n8n decides how. You can change an email template without touching the rules, and vice versa.' },
        { title: 'Safety lives in the database', desc: 'The no-duplicate rule is a database constraint. Even a workflow accidentally run twice cannot send two reminders.' },
        { title: 'Light, free, on your side', desc: 'Self-hosted n8n, SQLite built into Node.js, all in Docker. No subscription, and your billing data stays on your server.' },
      ],
    },

    adapt: {
      title: 'And for you?',
      intro: 'The demo runs on a file of fictitious invoices. For you, we adapt it to the way you work:',
      items: [
        'Invoices come from your billing tool, or a simple spreadsheet export.',
        'Email templates are rewritten in your tone and branding.',
        'Stages and delays are adjusted to your payment terms.',
        'Emails go out through your own mailbox: clients see your address, not ours.',
      ],
    },

    cta: { text: 'Do reminders eat up your time?', button: "Let's talk" },
  },
}
