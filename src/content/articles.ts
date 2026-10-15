import type { Lang } from './index'

export type ArticleTag = 'auto' | 'script' | 'ia' | 'outil'
export type VisualName = 'orders' | 'inbox' | 'reminders' | 'report' | 'invoice' | 'app'

export interface ArticleText {
  title: string
  summary: string
  proof: string
  before: string
  steps: { t: string; d: string }[]
  stack: string[]
  after: string[]
  watch: string
}

export interface Article {
  slug: string
  tag: ArticleTag
  visual: VisualName
  images?: { src: string; alt: Record<Lang, string> }[]
  fr: ArticleText
  en: ArticleText
}

// Exemples concrets : une entrée = une carte dans le carrousel de l'accueil + une page
// /fr/exemples/<slug> (/en/examples/<slug>), ajoutée automatiquement au prérendu et au sitemap.
//
// Ce sont des cas types, tels qu'on les met en place : pas de nom de client, pas de chiffre
// de gain inventé. Pour raconter un vrai projet client, utiliser realisations.ts.
//
// {
//   slug: '…',
//   tag: 'auto' | 'script' | 'ia' | 'outil',   // catégorie affichée sur la carte (libellés : examples.tags dans fr.ts / en.ts)
//   visual: '…',                               // illustration dessinée (src/components/Visual.astro)
//   images: [{ src, alt: { fr, en } }],        // facultatif : vraies captures dans public/exemples/<slug>/
//   fr: {
//     title, summary,                          // carte + description Google
//     before,                                  // la situation de départ
//     steps: [{ t, d }],                       // comment ça marche, étape par étape
//     stack: ['…'],                            // outils utilisés, une ligne chacun
//     after: ['…'],                            // ce qui change au quotidien
//     watch,                                   // garde-fous / limites, dit honnêtement
//   },
//   en: { … mêmes clés … },
// }
export const articles: Article[] = [
  {
    slug: 'commandes-mail-facturation',
    tag: 'auto',
    visual: 'orders',
    fr: {
      title: 'Les commandes reçues par mail créées toutes seules dans la facturation',
      summary: "Une commande arrive par mail : le client, les articles et les quantités sont repris automatiquement, la facture est préparée et le tableau de suivi mis à jour.",
      proof: 'Ordre de grandeur : une facture prête en 30 secondes au lieu de 15 minutes.',
      before: "Chaque matin, quelqu'un ouvre la boîte mail, recopie chaque commande dans le logiciel de facturation, puis une deuxième fois dans le tableau Excel de suivi. Une faute de frappe sur une quantité, et c'est une facture à refaire et un client à rappeler.",
      steps: [
        { t: 'La commande arrive', d: "Le mail est repéré dès sa réception, qu'il vienne d'un formulaire du site, d'un client habituel ou d'une plateforme." },
        { t: 'Les informations sont lues', d: "Client, adresse, articles, quantités, date de livraison souhaitée : tout est repris, y compris depuis un bon de commande en pièce jointe." },
        { t: 'Le client est retrouvé', d: "S'il existe déjà dans votre logiciel, on le rattache. Sinon, la fiche est créée et vous êtes prévenu." },
        { t: 'La facture est préparée', d: 'Elle est créée en brouillon dans votre logiciel de facturation, avec les bons tarifs. Vous n’avez plus qu’à valider.' },
        { t: 'Le suivi est à jour', d: 'La ligne correspondante apparaît dans le tableau de suivi, et l’équipe reçoit une notification.' },
      ],
      stack: [
        'Un enchaînement automatique (n8n ou Make) qui surveille la boîte mail',
        'Le logiciel de facturation que vous utilisez déjà (Pennylane, Axonaut, Sellsy…), relié par sa connexion officielle',
        'Google Sheets ou Excel en ligne pour le tableau de suivi',
      ],
      after: [
        'Plus aucune commande recopiée à la main.',
        'Les erreurs de saisie disparaissent : les données viennent directement du mail.',
        'Le matin, les factures sont prêtes à valider plutôt qu’à taper.',
      ],
      watch: "Les factures restent en brouillon : rien n'est envoyé à un client sans validation humaine. Si une commande est illisible ou incomplète, elle est mise de côté et signalée au lieu d'être devinée.",
    },
    en: {
      title: 'Orders received by email created automatically in your invoicing tool',
      summary: 'An order arrives by email: customer, items and quantities are picked up automatically, the invoice is drafted and the tracking sheet updated.',
      proof: 'Typical guidepost: an invoice ready in 30 seconds instead of 15 minutes.',
      before: 'Every morning, someone opens the inbox, copies each order into the invoicing software, then a second time into the Excel tracking sheet. One typo on a quantity, and it is an invoice to redo and a customer to call back.',
      steps: [
        { t: 'The order arrives', d: 'The email is picked up as soon as it lands, whether it comes from the website form, a regular customer or a marketplace.' },
        { t: 'The details are read', d: 'Customer, address, items, quantities, requested delivery date: everything is captured, including from a PDF purchase order.' },
        { t: 'The customer is matched', d: 'If they already exist in your software, the order is linked to them. If not, the record is created and you are notified.' },
        { t: 'The invoice is drafted', d: 'It is created as a draft in your invoicing software, with the right prices. All you have to do is approve it.' },
        { t: 'Tracking is up to date', d: 'The matching row appears in the tracking sheet and the team gets a notification.' },
      ],
      stack: [
        'An automated sequence (n8n or Make) watching the inbox',
        'The invoicing software you already use (Pennylane, Axonaut, Sellsy…), connected through its official integration',
        'Google Sheets or Excel online for the tracking sheet',
      ],
      after: [
        'No more orders copied by hand.',
        'Typing errors disappear: the data comes straight from the email.',
        'In the morning, invoices are ready to approve instead of ready to type.',
      ],
      watch: 'Invoices stay as drafts: nothing is sent to a customer without a human approving it. If an order is unreadable or incomplete, it is set aside and flagged instead of guessed.',
    },
  },
  {
    slug: 'tri-demandes-ia',
    tag: 'ia',
    visual: 'inbox',
    fr: {
      title: "Les demandes entrantes triées par l'IA et transmises à la bonne personne",
      summary: "Demandes de devis, SAV, questions de facturation : chaque mail reçu sur l'adresse générale est lu, classé, résumé et transmis à la bonne personne.",
      proof: 'Ordre de grandeur : environ 4 heures par semaine récupérées sur le tri des demandes.',
      before: "Tout arrive sur contact@. Quelqu'un doit tout lire, comprendre de quoi il s'agit et faire suivre. Quand cette personne est absente, les demandes de devis attendent trois jours et les clients mécontents attendent aussi.",
      steps: [
        { t: 'Le mail arrive sur l’adresse générale', d: 'Rien ne change pour vos clients : ils écrivent toujours au même endroit.' },
        { t: "L'IA lit et classe la demande", d: 'Devis, SAV, facturation ou autre, avec un résumé en une phrase et le niveau d’urgence.' },
        { t: 'La demande part chez la bonne personne', d: 'Le commercial reçoit les devis, l’atelier le SAV, la comptabilité les factures. Le résumé est en tête du mail.' },
        { t: 'Un brouillon de réponse est préparé', d: 'Pour les questions simples, une réponse est proposée. Elle n’est jamais envoyée sans relecture.' },
        { t: 'Les cas douteux restent pour un humain', d: "Quand l'IA n'est pas sûre d'elle, la demande est mise à part au lieu d'être mal aiguillée." },
      ],
      stack: [
        'Un modèle de langue (Claude, GPT ou Mistral si vous tenez à un hébergement européen), appelé uniquement pour lire et classer',
        'Un enchaînement automatique (n8n) relié à votre messagerie Gmail ou Outlook',
        'Un petit tableau de suivi des demandes traitées, pour vérifier le tri dans le temps',
      ],
      after: [
        "Chaque demande est chez la bonne personne quelques minutes après son arrivée, même quand l'accueil est absent.",
        'Chacun lit un résumé avant d’ouvrir le mail complet.',
        'Plus de demande de devis oubliée au fond de la boîte de réception.',
      ],
      watch: "L'IA trie, elle ne répond pas à votre place : aucun mail ne part chez un client sans relecture. Les demandes qu'elle n'est pas sûre de classer vont dans une file « à vérifier ». On contrôle le tri ensemble les premières semaines avant de lui faire confiance.",
    },
    en: {
      title: 'Incoming requests sorted by AI and forwarded to the right person',
      summary: 'Quote requests, after-sales, billing questions: every email sent to the general address is read, sorted, summarised and forwarded to the right person.',
      proof: 'Typical guidepost: around 4 hours a week recovered from sorting requests.',
      before: 'Everything lands in contact@. Someone has to read it all, work out what it is about and forward it. When that person is away, quote requests wait three days, and so do unhappy customers.',
      steps: [
        { t: 'The email reaches the general address', d: 'Nothing changes for your customers: they still write to the same place.' },
        { t: 'AI reads and sorts the request', d: 'Quote, after-sales, billing or other, with a one-sentence summary and an urgency level.' },
        { t: 'The request goes to the right person', d: 'Sales gets the quotes, the workshop gets after-sales, accounting gets the invoices. The summary sits at the top of the email.' },
        { t: 'A reply draft is prepared', d: 'For simple questions, a reply is suggested. It is never sent without being read first.' },
        { t: 'Unclear cases stay with a human', d: 'When the AI is not sure, the request is set aside instead of being sent to the wrong desk.' },
      ],
      stack: [
        'A language model (Claude, GPT, or Mistral if you want European hosting), used only to read and sort',
        'An automated sequence (n8n) connected to your Gmail or Outlook mailbox',
        'A small log of processed requests, to check the sorting over time',
      ],
      after: [
        'Every request reaches the right person minutes after it arrives, even when reception is away.',
        'Everyone reads a summary before opening the full email.',
        'No more quote requests forgotten at the bottom of the inbox.',
      ],
      watch: 'The AI sorts, it does not answer for you: no email goes to a customer without being read. Requests it is unsure about go to a "to check" queue. We review the sorting together for the first few weeks before relying on it.',
    },
  },
  {
    slug: 'relances-devis',
    tag: 'auto',
    visual: 'reminders',
    fr: {
      title: 'Les relances de devis qui partent toutes seules',
      summary: "Un devis sans réponse depuis une semaine ? Une relance polie part automatiquement, signée par vous, et s'arrête dès que le client répond.",
      proof: 'Ordre de grandeur : 100 % des relances prévues partent au bon moment, sans suivi manuel.',
      before: "Les devis partent, puis plus rien. On se dit qu'on relancera, on oublie, et le client a signé ailleurs. Les relances dépendent de la mémoire de chacun et d'un post-it sur l'écran.",
      steps: [
        { t: 'Chaque matin, les devis sont passés en revue', d: 'La liste des devis envoyés est lue dans votre logiciel, avec leur date et leur statut.' },
        { t: 'J+7 : première relance', d: 'Un mail court et personnalisé (prénom, objet du devis, montant) part depuis votre propre adresse.' },
        { t: 'J+14 : seconde relance', d: 'Un ton différent, avec une question simple pour faciliter la réponse.' },
        { t: 'J+21 : un humain reprend la main', d: 'Plus de relance automatique : le commercial reçoit la liste des devis à appeler.' },
        { t: 'Tout s’arrête dès que le client répond', d: 'Une réponse, une signature ou un refus, et le devis sort du circuit.' },
      ],
      stack: [
        'Votre logiciel de devis et facturation, lu chaque matin',
        'Un enchaînement automatique planifié (n8n ou Make)',
        'Votre messagerie, pour que les relances partent de votre adresse et que les réponses vous arrivent normalement',
      ],
      after: [
        'Plus aucun devis oublié.',
        'Les relances sont régulières, polies, et toujours au bon moment.',
        'Le commercial passe ses appels sur une liste prête, pas sur sa mémoire.',
      ],
      watch: "Le texte des relances est écrit avec vous et validé avant la mise en route. On peut exclure un client ou un devis en un clic, et le nombre de relances est volontairement limité.",
    },
    en: {
      title: 'Quote follow-ups that go out on their own',
      summary: 'A quote with no answer for a week? A polite follow-up goes out automatically, signed by you, and stops as soon as the customer replies.',
      proof: 'Typical guidepost: 100% of planned follow-ups go out on time, without manual tracking.',
      before: 'Quotes go out, then nothing. You plan to follow up, you forget, and the customer signs elsewhere. Follow-ups depend on everyone’s memory and a sticky note on the screen.',
      steps: [
        { t: 'Every morning, quotes are reviewed', d: 'The list of sent quotes is read from your software, with their date and status.' },
        { t: 'Day 7: first follow-up', d: 'A short, personal email (first name, quote subject, amount) goes out from your own address.' },
        { t: 'Day 14: second follow-up', d: 'A different tone, with one simple question to make answering easy.' },
        { t: 'Day 21: a human takes over', d: 'No more automatic follow-ups: the salesperson gets the list of quotes to call.' },
        { t: 'Everything stops when the customer replies', d: 'A reply, a signature or a refusal, and the quote leaves the loop.' },
      ],
      stack: [
        'Your quoting and invoicing software, read every morning',
        'A scheduled automated sequence (n8n or Make)',
        'Your mailbox, so follow-ups come from your address and replies reach you as usual',
      ],
      after: [
        'No more forgotten quotes.',
        'Follow-ups are regular, polite and always on time.',
        'Sales calls are made from a ready list, not from memory.',
      ],
      watch: 'The follow-up wording is written with you and approved before going live. A customer or a quote can be excluded in one click, and the number of follow-ups is deliberately capped.',
    },
  },
  {
    slug: 'rapport-mensuel',
    tag: 'script',
    visual: 'report',
    fr: {
      title: 'Le rapport mensuel prêt le 1er du mois, sans y toucher',
      summary: "Chiffre d'affaires, marge, devis en attente, meilleurs clients : le tableau de bord du mois arrive en PDF dans votre boîte mail le 1er à 7 h.",
      proof: 'Ordre de grandeur : un rapport mensuel prêt en 2 minutes au lieu d’une demi-journée.',
      before: "Le dernier jour du mois, quelqu'un exporte les ventes, puis les achats, colle le tout dans un fichier Excel, refait les graphiques et envoie le résultat. Une demi-journée, et des chiffres qui ne correspondent jamais tout à fait à ceux du mois dernier.",
      steps: [
        { t: 'Le 1er du mois, à 7 h', d: 'Un petit programme se lance tout seul sur un serveur, sans que personne ait à y penser.' },
        { t: 'Les chiffres sont récupérés à la source', d: 'Ventes dans la facturation, dépenses dans la comptabilité, devis dans le CRM. Pas d’export manuel.' },
        { t: 'Les calculs sont toujours les mêmes', d: 'Marge, évolution sur le mois précédent, top clients : les règles sont écrites une fois et ne changent plus.' },
        { t: 'Le rapport est mis en page', d: 'Un PDF propre, avec graphiques et tableaux, lisible sur téléphone.' },
        { t: 'Il arrive dans votre boîte mail', d: 'Envoyé à la direction et, si vous le souhaitez, une version simplifiée à chaque responsable.' },
      ],
      stack: [
        'Un programme en Python, hébergé sur un petit serveur (quelques euros par mois)',
        'Les connexions officielles de vos logiciels de facturation, comptabilité et CRM',
        'Un modèle de rapport défini avec vous lors du cadrage',
      ],
      after: [
        'Le rapport est prêt avant même que vous arriviez au bureau.',
        'Les chiffres sont calculés de la même façon chaque mois : on peut enfin les comparer.',
        'La demi-journée d’exports et de copier-coller disparaît.',
      ],
      watch: "Si une source ne répond pas (logiciel en maintenance, accès expiré), le rapport n'est pas envoyé à moitié faux : vous recevez un message qui dit ce qui manque.",
    },
    en: {
      title: 'The monthly report ready on the 1st, without touching it',
      summary: 'Revenue, margin, pending quotes, top customers: the month’s dashboard lands in your inbox as a PDF on the 1st at 7am.',
      proof: 'Typical guidepost: a monthly report ready in 2 minutes instead of half a day.',
      before: 'On the last day of the month, someone exports sales, then purchases, pastes it all into Excel, rebuilds the charts and sends the result. Half a day, and figures that never quite match last month’s.',
      steps: [
        { t: 'On the 1st of the month, at 7am', d: 'A small program starts on its own on a server, without anyone having to think about it.' },
        { t: 'Figures are pulled at the source', d: 'Sales from invoicing, expenses from accounting, quotes from the CRM. No manual export.' },
        { t: 'The maths is always the same', d: 'Margin, change from last month, top customers: the rules are written once and stop drifting.' },
        { t: 'The report is laid out', d: 'A clean PDF with charts and tables, readable on a phone.' },
        { t: 'It lands in your inbox', d: 'Sent to management and, if you want, a simplified version to each manager.' },
      ],
      stack: [
        'A Python program, hosted on a small server (a few euros a month)',
        'The official integrations of your invoicing, accounting and CRM software',
        'A report template defined with you during scoping',
      ],
      after: [
        'The report is ready before you even get to the office.',
        'Figures are calculated the same way every month: you can finally compare them.',
        'The half-day of exports and copy-paste is gone.',
      ],
      watch: 'If a source does not respond (software under maintenance, expired access), no half-wrong report goes out: you get a message saying what is missing.',
    },
  },
  {
    slug: 'factures-fournisseurs-ia',
    tag: 'ia',
    visual: 'invoice',
    fr: {
      title: 'Les factures fournisseurs lues, vérifiées et rangées',
      summary: "Les factures PDF reçues par mail sont lues automatiquement : fournisseur, montant, TVA et échéance sont extraits, vérifiés, puis classés au bon endroit.",
      proof: 'Ordre de grandeur : une facture classée en 20 secondes au lieu de 3 minutes.',
      before: "Les factures fournisseurs arrivent par mail, en PDF, chacune avec sa mise en page. Il faut les ouvrir une par une, recopier les montants dans le tableau des échéances, les renommer, les ranger dans le bon dossier pour le comptable.",
      steps: [
        { t: 'La facture arrive en pièce jointe', d: 'Sur une adresse dédiée, ou directement depuis votre boîte habituelle.' },
        { t: "L'IA lit le document", d: 'Fournisseur, numéro, date, montant HT, TVA, TTC et échéance, quelle que soit la mise en page.' },
        { t: 'Les montants sont vérifiés', d: 'HT + TVA = TTC ? Le fournisseur est-il connu ? La facture n’a-t-elle pas déjà été reçue ?' },
        { t: 'Le fichier est renommé et rangé', d: '« 2026-09_Fournisseur_F1234.pdf », dans le dossier du mois, prêt pour le comptable.' },
        { t: 'Le tableau des échéances est complété', d: 'Une ligne par facture, avec la date de paiement, pour ne plus rien laisser passer.' },
      ],
      stack: [
        'Un modèle de langue capable de lire des documents (Claude ou Mistral), utilisé uniquement pour l’extraction',
        'Des vérifications classiques écrites en code : calculs, doublons, fournisseurs connus',
        'Votre stockage actuel (Google Drive, OneDrive, SharePoint) et votre tableau des échéances',
      ],
      after: [
        'Les factures sont rangées et nommées de la même façon, sans effort.',
        'Le comptable reçoit un dossier complet à la fin du mois.',
        'Les échéances sont visibles d’un coup d’œil.',
      ],
      watch: "L'IA extrait, le code vérifie. Une facture dont les montants ne tombent pas juste, ou qui ressemble à un doublon, n'est pas intégrée : elle part dans un dossier « à vérifier ». Rien n'est jamais payé automatiquement.",
    },
    en: {
      title: 'Supplier invoices read, checked and filed',
      summary: 'PDF invoices received by email are read automatically: supplier, amount, VAT and due date are extracted, checked, then filed in the right place.',
      proof: 'Typical guidepost: an invoice filed in 20 seconds instead of 3 minutes.',
      before: 'Supplier invoices arrive by email as PDFs, each with its own layout. They have to be opened one by one, amounts copied into the due-dates sheet, files renamed and stored in the right folder for the accountant.',
      steps: [
        { t: 'The invoice arrives as an attachment', d: 'At a dedicated address, or straight from your usual inbox.' },
        { t: 'AI reads the document', d: 'Supplier, number, date, net amount, VAT, total and due date, whatever the layout.' },
        { t: 'Amounts are checked', d: 'Does net + VAT = total? Is the supplier known? Has this invoice already been received?' },
        { t: 'The file is renamed and filed', d: '“2026-09_Supplier_F1234.pdf”, in the month’s folder, ready for the accountant.' },
        { t: 'The due-dates sheet is filled in', d: 'One row per invoice, with its payment date, so nothing slips through.' },
      ],
      stack: [
        'A language model that can read documents (Claude or Mistral), used only for extraction',
        'Plain checks written in code: totals, duplicates, known suppliers',
        'Your current storage (Google Drive, OneDrive, SharePoint) and your due-dates sheet',
      ],
      after: [
        'Invoices are filed and named consistently, with no effort.',
        'The accountant gets a complete folder at the end of the month.',
        'Due dates are visible at a glance.',
      ],
      watch: 'AI extracts, code checks. An invoice whose amounts do not add up, or that looks like a duplicate, is not imported: it goes to a “to check” folder. Nothing is ever paid automatically.',
    },
  },
  {
    slug: 'suivi-de-chantier',
    tag: 'outil',
    visual: 'app',
    fr: {
      title: 'Un outil de suivi de chantier qui remplace trois fichiers Excel',
      summary: "Planning, avancement par lot, photos et réserves : une application simple, sur ordinateur et sur téléphone, à la place des fichiers qui circulent par mail.",
      proof: 'Ordre de grandeur : environ 5 heures par semaine récupérées sur la mise à jour du suivi.',
      before: "Un fichier pour le planning, un pour l'avancement, un pour les réserves. Chacun a sa version, envoyée par mail. Sur le chantier, impossible de mettre à jour depuis le téléphone : on note sur papier et on ressaisit le soir.",
      steps: [
        { t: 'Un chantier, une fiche', d: 'Adresse, client, équipe, dates clés : tout au même endroit, consultable par chacun selon ses droits.' },
        { t: "L'avancement par lot", d: 'Gros œuvre, électricité, plomberie… chaque lot avance en pourcentage, mis à jour en deux touches depuis le téléphone.' },
        { t: 'Photos et réserves sur place', d: 'Une photo prise sur le chantier est rattachée au bon lot, avec la date et un commentaire.' },
        { t: 'Le planning se met à jour tout seul', d: 'Un lot en retard décale la suite et prévient les personnes concernées.' },
        { t: 'Un point hebdo prêt à envoyer', d: "Le résumé de la semaine est généré pour le client, à relire avant l'envoi." },
      ],
      stack: [
        'Une application web, utilisable sur ordinateur et téléphone sans rien installer',
        'Une base de données hébergée en Europe, sauvegardée chaque nuit',
        'Une reprise de vos fichiers Excel existants au démarrage, pour ne rien perdre',
      ],
      after: [
        'Une seule version de la vérité, à jour, pour toute l’équipe.',
        'Plus de ressaisie le soir : tout se fait sur place.',
        'Le client reçoit un point clair chaque semaine.',
      ],
      watch: "On construit l'outil par étapes, en partant de vos fichiers actuels : la première version ne fait que ce que faisaient vos trois Excel, en mieux. Le reste s'ajoute quand l'équipe l'a adopté.",
    },
    en: {
      title: 'A site-tracking tool that replaces three Excel files',
      summary: 'Schedule, progress per trade, photos and snag lists: one simple app, on desktop and phone, instead of files passed around by email.',
      proof: 'Typical guidepost: around 5 hours a week recovered from updating project tracking.',
      before: 'One file for the schedule, one for progress, one for snags. Everyone has their own version, sent by email. On site, nothing can be updated from a phone: notes go on paper and get typed in at night.',
      steps: [
        { t: 'One site, one record', d: 'Address, client, team, key dates: all in one place, visible to each person according to their access.' },
        { t: 'Progress per trade', d: 'Structure, electrics, plumbing… each trade moves forward as a percentage, updated in two taps from a phone.' },
        { t: 'Photos and snags on site', d: 'A photo taken on site is attached to the right trade, with the date and a comment.' },
        { t: 'The schedule updates itself', d: 'A late trade shifts what follows and notifies the people concerned.' },
        { t: 'A weekly update ready to send', d: 'The week’s summary is generated for the client, to review before sending.' },
      ],
      stack: [
        'A web app, usable on desktop and phone with nothing to install',
        'A database hosted in Europe, backed up every night',
        'Your existing Excel files imported at launch, so nothing is lost',
      ],
      after: [
        'One up-to-date version of the truth for the whole team.',
        'No more typing in the evening: everything is done on site.',
        'The client gets a clear update every week.',
      ],
      watch: 'We build the tool in stages, starting from your current files: the first version only does what your three Excel files did, but better. The rest is added once the team has adopted it.',
    },
  },
]
