import { useId } from 'react'

// Drawn illustrations of each example (src/content/articles.js → `visual`).
// Colours come from the CSS tokens (classes .v-*), so they follow light and dark mode.
// Labels are short and translated here; the article text carries the real content.

const L = {
  fr: {
    order: 'Nouvelle commande', invoice: 'Facture', draft: 'Brouillon', total: 'Total TTC',
    inbox: 'contact@votre-pme.fr', quote: 'Devis', sav: 'SAV', billing: 'Facturation', check: 'À vérifier',
    sent: 'Devis envoyé', r1: 'Relance 1', r2: 'Relance 2', human: 'Appel', every: 'Chaque matin · 8 h',
    d0: 'J0', d7: 'J+7', d14: 'J+14', d21: 'J+21',
    report: 'Activité du mois', first: '1er · 7 h 00',
    supplier: 'Fournisseur', amount: 'Montant TTC', due: 'Échéance', sum: 'HT + TVA = TTC',
    site: 'Chantier rue Garibaldi', lots: ['Gros œuvre', 'Électricité', 'Plomberie', 'Finitions'], photo: 'Photo du jour',
  },
  en: {
    order: 'New order', invoice: 'Invoice', draft: 'Draft', total: 'Total',
    inbox: 'contact@your-company.com', quote: 'Quote', sav: 'After-sales', billing: 'Billing', check: 'To check',
    sent: 'Quote sent', r1: 'Follow-up 1', r2: 'Follow-up 2', human: 'Call', every: 'Every morning · 8am',
    d0: 'Day 0', d7: 'Day 7', d14: 'Day 14', d21: 'Day 21',
    report: 'Monthly activity', first: '1st · 7:00am',
    supplier: 'Supplier', amount: 'Total', due: 'Due date', sum: 'Net + VAT = Total',
    site: 'Garibaldi St. site', lots: ['Structure', 'Electrics', 'Plumbing', 'Finishing'], photo: "Today's photo",
  },
}

function Grad({ id }) {
  return (
    <defs>
      <linearGradient id={id} x1="0" y1="0" x2="1" y2="0.35">
        <stop offset="0" style={{ stopColor: 'var(--red)' }} />
        <stop offset="1" style={{ stopColor: 'var(--org)' }} />
      </linearGradient>
    </defs>
  )
}

// Soft text placeholder line.
const Bar = ({ x, y, w, h = 7 }) => <rect className="v-soft" x={x} y={y} width={w} height={h} rx={h / 2} />
const Check = ({ x, y, s = 1, cls = 'v-on-grad' }) => (
  <path className={cls} d={`M${x - 6 * s} ${y}l${4 * s} ${4 * s} ${8 * s}-${9 * s}`} fill="none" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" />
)

function Orders({ l, g }) {
  return (
    <>
      <rect className="v-panel" x="24" y="52" width="160" height="196" rx="14" />
      <path className="v-stroke" d="M40 74h22v15H40zM40 74l11 8 11-8" fill="none" />
      <text className="v-t v-strong" x="72" y="86">{l.order}</text>
      <Bar x={40} y={106} w={110} />
      <Bar x={40} y={120} w={80} />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="36" y={142 + i * 30} width="136" height="22" rx="6" fill="none" stroke={`url(#${g})`} strokeWidth="1.6" />
          <Bar x={46} y={150 + i * 30} w={14} />
          <Bar x={68} y={150 + i * 30} w={70 - i * 12} />
        </g>
      ))}
      <path className="v-red" d="M184 150h28" strokeWidth="1.8" strokeDasharray="4 4" />
      <rect x="212" y="114" width="72" height="72" rx="16" fill={`url(#${g})`} className="v-glow" />
      <path className="v-on-grad" d="M251 130l-12 22h12l-4 18 14-24h-12z" fill="none" strokeWidth="2.2" strokeLinejoin="round" />
      <path className="v-red" d="M284 150h28" strokeWidth="1.8" strokeDasharray="4 4" />
      <rect className="v-panel" x="312" y="40" width="148" height="220" rx="14" />
      <text className="v-t v-strong" x="328" y="70">{l.invoice}</text>
      <text className="v-t v-muted" x="328" y="86">F-0142 · {l.draft}</text>
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <Bar x={328} y={110 + i * 22} w={64} />
          <Bar x={412} y={110 + i * 22} w={32} />
        </g>
      ))}
      <path className="v-line" d="M328 184h116" />
      <text className="v-t v-strong" x="328" y="206">{l.total}</text>
      <rect x="400" y="196" width="44" height="12" rx="6" fill={`url(#${g})`} />
      <circle cx="456" cy="44" r="17" fill={`url(#${g})`} className="v-glow" />
      <Check x={456} y={44} />
    </>
  )
}

function Inbox({ l, g }) {
  const rows = [
    { label: l.quote, kind: 'grad', w: 120 },
    { label: l.sav, kind: 'ink', w: 96 },
    { label: l.billing, kind: 'ink', w: 132 },
    { label: l.check, kind: 'dash', w: 104 },
  ]
  return (
    <>
      <rect className="v-panel" x="24" y="34" width="408" height="236" rx="14" />
      <text className="v-t v-strong" x="44" y="62">{l.inbox}</text>
      <path className="v-line" d="M24 76h408" />
      {rows.map((r, i) => {
        const y = 96 + i * 42
        const pw = r.label.length * 6.6 + 22
        return (
          <g key={i}>
            <rect className="v-soft" x="44" y={y - 2} width="26" height="26" rx="7" />
            <rect className="v-ink" x="82" y={y} width={r.w} height="8" rx="4" opacity="0.85" />
            <Bar x={82} y={y + 14} w={r.w + 50} h={6} />
            <rect
              x={412 - pw} y={y - 1} width={pw} height="24" rx="12"
              fill={r.kind === 'grad' ? `url(#${g})` : 'none'}
              className={r.kind === 'grad' ? '' : r.kind === 'dash' ? 'v-red' : 'v-stroke'}
              strokeDasharray={r.kind === 'dash' ? '4 3' : undefined}
              strokeWidth="1.5"
            />
            <text className={`v-t v-small ${r.kind === 'grad' ? 'v-on-grad-t' : r.kind === 'dash' ? 'v-red-t' : ''}`} x={412 - pw / 2} y={y + 15} textAnchor="middle">{r.label}</text>
          </g>
        )
      })}
      <rect x="396" y="10" width="64" height="64" rx="16" fill={`url(#${g})`} className="v-glow" />
      <text className="v-t v-on-grad-t v-big" x="428" y="49" textAnchor="middle">IA</text>
    </>
  )
}

function Reminders({ l, g }) {
  const nodes = [
    { x: 64, day: l.d0, label: l.sent, kind: 'out' },
    { x: 180, day: l.d7, label: l.r1, kind: 'grad' },
    { x: 296, day: l.d14, label: l.r2, kind: 'grad' },
    { x: 412, day: l.d21, label: l.human, kind: 'ink' },
  ]
  return (
    <>
      <rect className="v-panel" x="24" y="24" width="150" height="30" rx="15" />
      <circle cx="44" cy="39" r="6" className="v-stroke" fill="none" />
      <path className="v-stroke" d="M44 36v3l2 2" fill="none" />
      <text className="v-t v-small" x="58" y="43">{l.every}</text>
      <path className="v-line" d="M40 170h400" strokeWidth="1.5" />
      <path d="M64 170H296" stroke={`url(#${g})`} strokeWidth="3" />
      {nodes.map((n, i) => (
        <g key={i}>
          <rect className="v-panel" x={n.x - 40} y="86" width="80" height="54" rx="10" />
          <path className="v-stroke" d={`M${n.x - 26} 100h20v13h-20zM${n.x - 26} 100l10 7 10-7`} fill="none" />
          <Bar x={n.x - 26} y={122} w={52} h={6} />
          <path className="v-line" d={`M${n.x} 140v18`} />
          <rect
            x={n.x - 12} y="158" width="24" height="24" rx="6"
            fill={n.kind === 'grad' ? `url(#${g})` : n.kind === 'ink' ? 'var(--ink)' : 'var(--pap-2)'}
            className={n.kind === 'out' ? 'v-stroke' : n.kind === 'grad' ? 'v-glow' : ''}
            strokeWidth="1.5"
          />
          {n.kind === 'grad' && <Check x={n.x} y={170} s={0.75} />}
          <text className="v-t v-strong" x={n.x} y="206" textAnchor="middle">{n.day}</text>
          <text className="v-t v-muted v-small" x={n.x} y="224" textAnchor="middle">{n.label}</text>
        </g>
      ))}
    </>
  )
}

function Report({ l, g }) {
  const bars = [52, 74, 60, 92, 80, 118]
  return (
    <>
      <rect className="v-panel" x="24" y="30" width="300" height="236" rx="14" />
      <text className="v-t v-strong" x="44" y="60">{l.report}</text>
      <Bar x={44} y={72} w={90} h={6} />
      <path className="v-line" d="M44 236h260" />
      {bars.map((h, i) => (
        <rect key={i} x={52 + i * 42} y={236 - h} width="26" height={h} rx="5" fill={i === bars.length - 1 ? `url(#${g})` : 'var(--line-2)'} />
      ))}
      <g transform="rotate(5 380 190)">
        <rect className="v-panel" x="318" y="104" width="130" height="164" rx="12" />
        <path className="v-line" d="M418 104v26h30" />
        <rect x="334" y="122" width="44" height="20" rx="5" fill={`url(#${g})`} />
        <text className="v-t v-on-grad-t v-small" x="356" y="136" textAnchor="middle">PDF</text>
        <Bar x={334} y={156} w={98} h={6} />
        <Bar x={334} y={170} w={70} h={6} />
        {[0, 1, 2].map((i) => <rect key={i} x={336 + i * 30} y={230 - (i + 2) * 10} width="18" height={(i + 2) * 10} rx="3" className="v-soft" />)}
      </g>
      <rect x="338" y="30" width="118" height="34" rx="17" fill={`url(#${g})`} className="v-glow" />
      <text className="v-t v-on-grad-t" x="397" y="52" textAnchor="middle">{l.first}</text>
    </>
  )
}

function Invoice({ l, g }) {
  const fields = [
    { y: 72, label: l.supplier },
    { y: 132, label: l.amount },
    { y: 192, label: l.due },
  ]
  return (
    <>
      <rect className="v-panel" x="24" y="28" width="176" height="244" rx="12" />
      <rect className="v-ink" x="40" y="46" width="60" height="12" rx="3" opacity="0.85" />
      <Bar x={40} y={66} w={90} h={6} />
      <rect x="36" y="80" width="110" height="24" rx="6" fill="none" stroke={`url(#${g})`} strokeWidth="1.8" />
      <Bar x={44} y={89} w={74} h={6} />
      {[0, 1, 2].map((i) => <Bar key={i} x={40} y={118 + i * 14} w={140 - i * 20} h={6} />)}
      <rect x="96" y="168" width="94" height="24" rx="6" fill="none" stroke={`url(#${g})`} strokeWidth="1.8" />
      <Bar x={104} y={177} w={60} h={6} />
      <rect x="36" y="226" width="96" height="24" rx="6" fill="none" stroke={`url(#${g})`} strokeWidth="1.8" />
      <Bar x={44} y={235} w={56} h={6} />
      <path className="v-red" d="M146 92C210 92 220 82 262 82" strokeDasharray="4 4" strokeWidth="1.4" fill="none" />
      <path className="v-red" d="M190 180C228 180 230 142 262 142" strokeDasharray="4 4" strokeWidth="1.4" fill="none" />
      <path className="v-red" d="M132 238C210 238 220 202 262 202" strokeDasharray="4 4" strokeWidth="1.4" fill="none" />
      {fields.map((f, i) => (
        <g key={i}>
          <rect className="v-panel" x="262" y={f.y - 8} width="196" height="36" rx="10" />
          <text className="v-t v-muted v-small" x="276" y={f.y + 14}>{f.label}</text>
          <rect className="v-ink" x="372" y={f.y + 6} width={60 - i * 8} height="8" rx="4" opacity="0.85" />
        </g>
      ))}
      <rect x="262" y="236" width="196" height="30" rx="15" fill={`url(#${g})`} className="v-glow" />
      <Check x={282} y={250} s={0.7} />
      <text className="v-t v-on-grad-t v-small" x="296" y="255">{l.sum}</text>
    </>
  )
}

function App({ l, g }) {
  const pct = [100, 72, 40, 8]
  return (
    <>
      <rect className="v-panel" x="20" y="26" width="400" height="244" rx="14" />
      <path className="v-line" d="M20 54h400M104 54v216" />
      {[0, 1, 2].map((i) => <circle key={i} cx={38 + i * 14} cy="40" r="4" className="v-soft" />)}
      {[0, 1, 2, 3].map((i) => <Bar key={i} x={34} y={74 + i * 22} w={54 - (i % 2) * 14} h={6} />)}
      <rect x="30" y="66" width="64" height="22" rx="6" fill="none" stroke={`url(#${g})`} strokeWidth="1.5" />
      <text className="v-t v-strong" x="122" y="82">{l.site}</text>
      {l.lots.map((name, i) => {
        const y = 110 + i * 38
        return (
          <g key={i}>
            <text className="v-t v-small" x="122" y={y}>{name}</text>
            <rect className="v-soft" x="122" y={y + 8} width="200" height="10" rx="5" />
            <rect x="122" y={y + 8} width={Math.max(10, 2 * pct[i])} height="10" rx="5" fill={`url(#${g})`} />
          </g>
        )
      })}
      <rect className="v-panel" x="350" y="104" width="104" height="180" rx="18" />
      <rect className="v-soft" x="362" y="128" width="80" height="80" rx="8" />
      <path className="v-stroke" d="M368 196l20-26 14 16 10-10 24 20" fill="none" strokeLinejoin="round" />
      <circle cx="424" cy="146" r="7" fill={`url(#${g})`} />
      <text className="v-t v-small" x="362" y="226">{l.photo}</text>
      <rect x="362" y="240" width="80" height="26" rx="13" fill={`url(#${g})`} className="v-glow" />
      <Check x={402} y={252} s={0.7} />
    </>
  )
}

const VISUALS = { orders: Orders, inbox: Inbox, reminders: Reminders, report: Report, invoice: Invoice, app: App }

// `label` is the accessible description of the picture (the article title).
export function Visual({ name, lang, label }) {
  const g = useId().replace(/:/g, '') + 'g'
  const Draw = VISUALS[name]
  if (!Draw) return null
  return (
    <svg className="visual" viewBox="0 0 480 300" role="img" aria-label={label} preserveAspectRatio="xMidYMid meet">
      <Grad id={g} />
      <Draw l={L[lang]} g={g} />
    </svg>
  )
}
