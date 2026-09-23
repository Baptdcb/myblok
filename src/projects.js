// Pages projet : une par exemple de la section « Exemples concrets ».
// Même règle que content.js : ce sont des démonstrations, pas des cas clients.
// Les données affichées (entreprises, factures, montants) sont fictives.

export const projects = {
  'relance-factures': {
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
  },

  'alertes-stock': {
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
  },

  'generation-contrats': {
    meta: {
      title: 'Génération automatique de contrats en PDF — myblok',
      description:
        'Démonstration : un tableau en entrée, des contrats PDF prêts à envoyer en sortie. SIRET vérifié, montants calculés, lignes fautives rejetées avec leur motif.',
    },
    fr: {
      back: 'Tous les exemples',
      tag: 'Administratif',
      title: 'Contrats générés par lot',
      lead: 'Un tableau en entrée, des contrats PDF prêts à envoyer en sortie. Chaque ligne est vérifiée avant, et une erreur ne bloque jamais le reste du lot.',
      facts: [
        { value: '5', label: 'tâches sans valeur ajoutée en moins' },
        { value: '≈ 7 h', label: 'gagnées par mois, pour 30 contrats à 15 minutes chacun' },
        { value: '0', label: 'blanc ni champ oublié dans un contrat : la génération s\'arrête avant' },
      ],

      problem: {
        title: 'Le problème',
        paragraphs: [
          "Chaque contrat, c'est la même routine : dupliquer le modèle Word, remplacer les informations du client une par une, recalculer les montants, relire, exporter en PDF, renommer, classer.",
          "Et toujours les mêmes erreurs : une information du contrat précédent restée en place, une TVA qui ne correspond pas au HT, une clause oubliée, un fichier mal nommé. Des erreurs qui partent chez le client, avec votre signature.",
        ],
      },

      flows: {
        title: 'Avant, maintenant',
        intro: "D'un côté, cinq manipulations répétées pour chaque contrat. De l'autre, un tableau à remplir, et tout le lot sort d'un coup.",
        before: {
          label: 'Avant : à la main, contrat par contrat',
          nodes: [
            { title: 'Dupliquer le modèle', sub: 'Et espérer partir de la bonne version' },
            { title: 'Recopier les infos', sub: 'Raison sociale, SIRET, adresse, une par une' },
            { title: 'Recalculer', sub: 'HT, TVA, TTC, à la main ou à la calculatrice' },
            { title: 'Relire', sub: 'Pour traquer les restes du contrat précédent' },
            { title: 'Exporter et classer', sub: 'PDF, renommage, rangement' },
          ],
        },
        after: {
          label: 'Maintenant : un tableau, tout le lot d\'un coup',
          nodes: [
            { title: 'Un tableau rempli', sub: 'Une ligne par contrat, une par prestation' },
            { title: 'Chaque ligne vérifiée', sub: 'SIRET, TVA, délais, clauses' },
            { title: 'Contrats remplis', sub: 'Montants calculés, articles numérotés' },
            { title: 'PDF prêts', sub: 'Numérotés, nommés, inscrits au registre' },
          ],
        },
      },

      preview: {
        title: 'À quoi ça ressemble',
        intro: 'Le compte rendu du lot de démonstration : huit contrats en entrée, dont quatre volontairement fautifs pour montrer les contrôles à l\'œuvre.',
        caption: "Entreprises et contrats fictifs. Une prestation rattachée à un contrat inexistant est aussi signalée dans le fichier des rejets.",
        report: {
          okLabel: 'Généré',
          koLabel: 'Rejeté',
          warnLabel: 'Avertissement',
          summary: [
            { value: '4', label: 'contrats générés en PDF' },
            { value: '4', label: 'rejetés, avec leur motif' },
            { value: '2', label: 'avertissements' },
          ],
          rows: [
            { ref: 'C-2026-001', client: 'Groupe Vallier', ok: true, detail: 'CTR-2026-0001_Groupe-Vallier.pdf' },
            { ref: 'C-2026-002', client: 'Delmas Industries', ok: true, detail: 'CTR-2026-0002_Delmas-Industries.pdf' },
            { ref: 'C-2026-003', client: 'Atelier Noyer', ok: true, detail: 'CTR-2026-0003_Atelier-Noyer.pdf' },
            { ref: 'C-2026-004', client: 'Sorel Distribution', ok: false, detail: 'SIRET : clé de contrôle invalide' },
            { ref: 'C-2026-005', client: 'Havane Logistique', ok: false, detail: 'Délai de paiement de 90 jours : le plafond légal est de 60' },
            { ref: 'C-2026-006', client: 'Pixelor Studio', ok: false, detail: 'Clause de confidentialité activée sans sa durée', warning: 'taux de pénalités renseigné alors que la clause est désactivée' },
            { ref: 'C-2026-007', client: 'Marbrerie Estienne', ok: false, detail: 'Aucune prestation associée au contrat' },
            { ref: 'C-2026-008', client: 'Cabinet Lartigue', ok: true, detail: 'CTR-2026-0004_Cabinet-Lartigue.pdf', warning: 'durée de non-sollicitation renseignée alors que la clause est désactivée, valeur ignorée' },
          ],
        },
      },

      guarantees: {
        title: "Ce que l'outil garantit",
        items: [
          { title: 'Aucun champ oublié', desc: "Si le modèle attend une information absente, la génération s'arrête. Un blanc ou un code de modèle ne peut pas se retrouver dans un contrat envoyé." },
          { title: 'SIRET vérifié', desc: 'Le numéro est contrôlé avec sa clé de calcul : une faute de frappe est attrapée, pas seulement un champ vide.' },
          { title: 'Délai de paiement plafonné', desc: 'Au-delà de 60 jours, la ligne est rejetée, conformément au Code de commerce (art. L. 441-10).' },
          { title: 'Des montants toujours justes', desc: 'Les totaux sont calculés à partir des lignes de prestation, jamais saisis à la main : ils ne peuvent pas diverger.' },
          { title: 'Des articles bien numérotés', desc: 'Les clauses sont à la carte. Une clause désactivée ne laisse pas de trou dans la numérotation des articles.' },
          { title: 'Relancer le lot ne crée pas de doublon', desc: 'Chaque contrat produit est inscrit au registre avec un numéro unique. Ce qui a déjà été généré est ignoré.' },
        ],
      },

      tech: {
        title: 'Sous le capot',
        intro: "Pour les curieux : comment c'est construit, et pourquoi. Trois briques, chacune avec un rôle précis.",
        diagramLabel: 'Architecture',
        nodes: [
          { title: 'Tableaux CSV', role: 'Les données', items: ['contrats.csv : une ligne par contrat', 'prestations.csv : une ligne par prestation', 'Reliés par la référence du contrat'] },
          { title: 'Moteur Python', role: 'Vérifie et remplit', items: ['Contrôle chaque ligne sans s\'arrêter à la première erreur', 'Calcule HT, TVA et TTC', 'Remplit le modèle Word avec docxtpl', 'Numérote et tient le registre'] },
          { title: 'LibreOffice', role: 'Convertit', items: ['Tout le lot en PDF, en une seule passe', 'Mise en page fidèle au modèle Word'] },
        ],
        arrows: ['Lecture', 'DOCX → PDF'],
        passTitle: 'Un lot, étape par étape',
        pass: [
          { title: 'Lecture', desc: "Les deux tableaux sont lus, et les informations de votre entreprise vérifiées. Une erreur à ce niveau arrête tout avant de produire quoi que ce soit." },
          { title: 'Contrôle', desc: 'Chaque ligne passe tous les contrôles. Toutes ses erreurs sont listées d\'un coup, pas seulement la première.' },
          { title: 'Calcul', desc: 'Les montants sont calculés à partir des prestations, et les articles numérotés selon les clauses actives.' },
          { title: 'Remplissage', desc: 'Le modèle Word est rempli, contrat par contrat.' },
          { title: 'Conversion', desc: 'LibreOffice convertit tout le lot en PDF en un seul appel.' },
          { title: 'Registre', desc: 'Chaque PDF est inscrit au registre avec son numéro. Les rejets sont écrits dans un fichier, avec leur motif.' },
        ],
        stackTitle: 'Les technos',
        stack: ['Python', 'docxtpl', 'Word (.docx)', 'LibreOffice', 'CSV', 'Docker'],
        whyTitle: 'Pourquoi ces choix',
        why: [
          { title: 'Le modèle reste un fichier Word', desc: "Logo, polices, marges : il se modifie dans Word comme n'importe quel document, tant que les variables sont conservées." },
          { title: 'Tout contrôler avant de produire', desc: "Une ligne fautive est rejetée avec son motif précis, et le reste du lot continue. On corrige, on relance, rien n'est produit deux fois." },
          { title: 'Pensé pour la suite', desc: 'Le registre donne à chaque contrat un numéro stable et un statut : il est prêt à accueillir une signature électronique.' },
        ],
      },

      adapt: {
        title: 'Et chez vous ?',
        intro: "La démo utilise un contrat de prestation réaliste, mais qui n'a pas été validé par un juriste. Chez vous, on part de vos propres documents :",
        items: [
          'Votre modèle de contrat, avec votre mise en page et vos clauses.',
          'Les données viennent de votre CRM, de vos devis signés ou d\'un simple tableur.',
          'Les contrats peuvent partir directement au client, ou vers un outil de signature électronique.',
          'Le même principe s\'applique à vos devis, attestations ou lettres de mission.',
        ],
      },

      cta: { text: 'Vos documents vous prennent du temps ?', button: 'Parlons-en' },
    },

    en: {
      back: 'All examples',
      tag: 'Admin',
      title: 'Contracts generated in bulk',
      lead: 'A spreadsheet goes in, ready-to-send PDF contracts come out. Every row is checked first, and an error never holds up the rest of the batch.',
      facts: [
        { value: '5', label: 'low-value tasks gone' },
        { value: '≈ 7 h', label: 'saved a month, for 30 contracts at 15 minutes each' },
        { value: '0', label: 'blanks or missing fields in a contract: generation stops first' },
      ],

      problem: {
        title: 'The problem',
        paragraphs: [
          "Every contract means the same routine: copy the Word template, replace the client's details one by one, recalculate the amounts, proofread, export to PDF, rename, file.",
          "And always the same mistakes: a detail left over from the previous contract, VAT that doesn't match the net amount, a forgotten clause, a misnamed file. Mistakes that reach the client, with your signature on them.",
        ],
      },

      flows: {
        title: 'Before, now',
        intro: 'On one side, five manual steps repeated for every contract. On the other, one spreadsheet to fill in, and the whole batch comes out at once.',
        before: {
          label: 'Before: by hand, contract by contract',
          nodes: [
            { title: 'Copy the template', sub: 'And hope it is the right version' },
            { title: 'Retype the details', sub: 'Company name, ID number, address, one by one' },
            { title: 'Recalculate', sub: 'Net, VAT, gross, by hand or calculator' },
            { title: 'Proofread', sub: 'Hunting for leftovers from the last contract' },
            { title: 'Export and file', sub: 'PDF, renaming, filing' },
          ],
        },
        after: {
          label: 'Now: one spreadsheet, the whole batch at once',
          nodes: [
            { title: 'A filled-in sheet', sub: 'One row per contract, one per service line' },
            { title: 'Every row checked', sub: 'Company ID, VAT, payment terms, clauses' },
            { title: 'Contracts filled in', sub: 'Amounts calculated, articles numbered' },
            { title: 'PDFs ready', sub: 'Numbered, named, logged in the register' },
          ],
        },
      },

      preview: {
        title: 'What it looks like',
        intro: 'The report of the demo batch: eight contracts in, four of them deliberately faulty to show the checks at work.',
        caption: 'Companies and contracts are fictitious. A service line attached to a non-existent contract is also flagged in the rejects file.',
        report: {
          okLabel: 'Generated',
          koLabel: 'Rejected',
          warnLabel: 'Warning',
          summary: [
            { value: '4', label: 'contracts generated as PDF' },
            { value: '4', label: 'rejected, with the reason' },
            { value: '2', label: 'warnings' },
          ],
          rows: [
            { ref: 'C-2026-001', client: 'Groupe Vallier', ok: true, detail: 'CTR-2026-0001_Groupe-Vallier.pdf' },
            { ref: 'C-2026-002', client: 'Delmas Industries', ok: true, detail: 'CTR-2026-0002_Delmas-Industries.pdf' },
            { ref: 'C-2026-003', client: 'Atelier Noyer', ok: true, detail: 'CTR-2026-0003_Atelier-Noyer.pdf' },
            { ref: 'C-2026-004', client: 'Sorel Distribution', ok: false, detail: 'Company ID (SIRET): invalid check digit' },
            { ref: 'C-2026-005', client: 'Havane Logistique', ok: false, detail: 'Payment term of 90 days: the legal cap is 60' },
            { ref: 'C-2026-006', client: 'Pixelor Studio', ok: false, detail: 'Confidentiality clause enabled without its duration', warning: 'penalty rate filled in while the clause is disabled' },
            { ref: 'C-2026-007', client: 'Marbrerie Estienne', ok: false, detail: 'No service line attached to the contract' },
            { ref: 'C-2026-008', client: 'Cabinet Lartigue', ok: true, detail: 'CTR-2026-0004_Cabinet-Lartigue.pdf', warning: 'non-solicitation period filled in while the clause is disabled, value ignored' },
          ],
        },
      },

      guarantees: {
        title: 'What the tool guarantees',
        items: [
          { title: 'No missing field', desc: 'If the template expects a detail that is missing, generation stops. A blank or a template code can never end up in a contract you send.' },
          { title: 'Company ID checked', desc: 'The French SIRET number is verified with its check digit: a typo is caught, not just an empty field.' },
          { title: 'Payment terms capped', desc: 'Beyond 60 days, the row is rejected, in line with the French Commercial Code (art. L. 441-10).' },
          { title: 'Amounts always right', desc: 'Totals are calculated from the service lines, never typed by hand: they cannot drift apart.' },
          { title: 'Articles numbered properly', desc: 'Clauses are optional. A disabled clause leaves no gap in the article numbering.' },
          { title: 'Re-running a batch creates no duplicates', desc: 'Every contract produced is logged in the register with a unique number. Anything already generated is skipped.' },
        ],
      },

      tech: {
        title: 'Under the hood',
        intro: "For the curious: how it's built, and why. Three building blocks, each with a clear job.",
        diagramLabel: 'Architecture',
        nodes: [
          { title: 'CSV sheets', role: 'The data', items: ['contrats.csv: one row per contract', 'prestations.csv: one row per service line', 'Linked by the contract reference'] },
          { title: 'Python engine', role: 'Checks and fills', items: ['Checks every row without stopping at the first error', 'Calculates net, VAT and gross', 'Fills the Word template with docxtpl', 'Numbers contracts and keeps the register'] },
          { title: 'LibreOffice', role: 'Converts', items: ['The whole batch to PDF, in one pass', 'Layout faithful to the Word template'] },
        ],
        arrows: ['Read', 'DOCX → PDF'],
        passTitle: 'One batch, step by step',
        pass: [
          { title: 'Read', desc: "Both sheets are read, and your company's details checked. An error at this stage stops everything before anything is produced." },
          { title: 'Check', desc: 'Every row goes through every check. All its errors are listed at once, not just the first.' },
          { title: 'Calculate', desc: 'Amounts are calculated from the service lines, and articles numbered according to the active clauses.' },
          { title: 'Fill', desc: 'The Word template is filled in, contract by contract.' },
          { title: 'Convert', desc: 'LibreOffice converts the whole batch to PDF in a single call.' },
          { title: 'Register', desc: 'Each PDF is logged in the register with its number. Rejects are written to a file, with their reason.' },
        ],
        stackTitle: 'The stack',
        stack: ['Python', 'docxtpl', 'Word (.docx)', 'LibreOffice', 'CSV', 'Docker'],
        whyTitle: 'Why these choices',
        why: [
          { title: 'The template stays a Word file', desc: 'Logo, fonts, margins: it is edited in Word like any other document, as long as the variables are kept.' },
          { title: 'Check everything before producing', desc: 'A faulty row is rejected with its exact reason, and the rest of the batch carries on. Fix, re-run, nothing is produced twice.' },
          { title: 'Built for what comes next', desc: 'The register gives every contract a stable number and a status: it is ready for electronic signature.' },
        ],
      },

      adapt: {
        title: 'And for you?',
        intro: 'The demo uses a realistic service contract, but one that has not been reviewed by a lawyer. For you, we start from your own documents:',
        items: [
          'Your contract template, with your layout and your clauses.',
          'Data comes from your CRM, your signed quotes or a simple spreadsheet.',
          'Contracts can go straight to the client, or to an e-signature tool.',
          'The same approach works for your quotes, certificates or engagement letters.',
        ],
      },

      cta: { text: 'Does paperwork eat up your time?', button: "Let's talk" },
    },
  },
}

export const PROJECT_BASE = '/projets/'

// Chemin → slug du projet, ou null pour la page d'accueil. Tolère le slash
// final et le suffixe .html (URL du fichier prérendu, servie telle quelle en local).
export function projectSlug(path) {
  if (!path || !path.startsWith(PROJECT_BASE)) return null
  const slug = path.slice(PROJECT_BASE.length).replace(/\/+$/, '').replace(/\.html$/, '')
  return projects[slug] ? slug : null
}
