// Page projet « generation-contrats ». Démonstration : données fictives (voir index.js).

export default {
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
}
