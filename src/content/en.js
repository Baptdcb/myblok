import { LEGAL } from './legal.js'

export default {
  nav: {
    links: [
      { id: 'offre', label: 'What we do' },
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
    legalLink: 'Legal notice',
    privacyLink: 'Privacy policy',
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
      title: 'Privacy policy',
      intro:
        'The contact form is the only place on this site where we ask you for personal information. Here is exactly what happens to it.',
      lines: [
        ['Data collected', 'Your name, your email address and the content of your message. Nothing else: no hidden fields, no data gathered without your knowledge.'],
        ['Purpose', 'Answering your enquiry and, if it turns into a project, preparing a proposal. No unsolicited marketing, no resale, no list shared with anyone.'],
        ['Legal basis', 'Your own request: steps taken at your request prior to entering into a contract (Article 6(1)(b) GDPR).'],
        ['Recipients', `Baptiste, and no one else. The email is delivered through our sending provider ${LEGAL.mailProvider}, covered by a data processing agreement and the European Commission’s standard contractual clauses.`],
        ['Hosting', 'The site and the form are hosted by Vercel Inc. (USA), under the same contractual framework.'],
        ['Retention', 'Three years from our last exchange, then deletion. If an engagement starts, the related data is kept for the duration of the work and the accounting and legal obligations that follow.'],
        ['Cookies and analytics', 'No cookies. We measure site traffic with Vercel Web Analytics, anonymously and in aggregate: no cookies, no personal identification, no tracking across sites. No advertising, no social widgets. Only your theme choice is stored in your browser: it never leaves your device and requires no consent.'],
        ['Your rights', `Access, rectification, erasure, restriction, objection and portability. An email to ${LEGAL.email} is enough, we answer within one month.`],
      ],
    },
  },
  theme: { toDark: 'Switch to dark mode', toLight: 'Switch to light mode' },
  meta: {
    home: {
      title: 'myblok — Custom automation & AI for SMEs | Lyon',
      description: 'Freelance developer in Lyon: automation, AI and custom tools for SMEs. Audit, development and set-up, direct, no agency.',
    },
    legal: { title: 'Legal notice — myblok', description: 'Legal notice for myblok.fr.' },
    privacy: {
      title: 'Privacy policy — myblok',
      description: 'What myblok does with the information sent through the contact form, and your rights.',
    },
    notFound: { title: 'Page not found — myblok', description: 'This page does not exist.' },
  },
  notFound: {
    title: 'This page does not exist.',
    text: 'The link may be old or mistyped.',
    back: 'Back to the home page',
  },
  realisation: {
    back: 'All our projects',
    context: 'The context',
    problem: 'The problem',
    solution: 'What we did',
    result: 'The result',
    duration: 'Project length',
    cta: { text: 'A need that looks like this one?', button: "Let's talk" },
  },
}
