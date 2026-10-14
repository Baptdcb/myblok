// Tailwind class sets shared by several components (buttons, labels, titles).
// One place to change the look of every button of the site.

export const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-red'

const btn = `inline-flex items-center gap-[9px] rounded-full px-6 py-3.5 text-[15px] font-bold tracking-[-0.01em] transition-[translate,scale,box-shadow,filter,background-color,color] duration-350 ease-out-expo active:translate-y-px active:scale-99 motion-reduce:transition-none ${focusRing}`

export const btnPrimary = `${btn} bg-grad text-white shadow-[0_12px_28px_var(--grad-glow)] hover:-translate-y-0.5 hover:shadow-[0_18px_40px_var(--grad-glow)] hover:brightness-105`

export const btnGhost = `${btn} border-[1.5px] border-ink text-ink hover:-translate-y-0.5 hover:bg-ink hover:text-pap`

export const iconBtnBase = `grid place-items-center rounded-full border border-line-2 text-ink transition-[background-color,color] duration-200 hover:bg-ink hover:text-pap disabled:cursor-default disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-ink motion-reduce:transition-none ${focusRing}`

// Round icon button; the language switch and the carousel arrows change the size.
export const iconBtn = `${iconBtnBase} size-[38px]`

// Category of a card (offer, examples): plain red text, the gradient stays for buttons.
export const tag = 'text-[11px] font-extrabold tracking-widest text-red uppercase'

// Small uppercase label in plain color (form fields, sectors, flow).
export const kicker = 'text-[11px] font-extrabold tracking-widest uppercase'

export const sectionTitle = 'text-[clamp(28px,4.2vw,44px)] tracking-[-0.035em]'
export const sectionIntro = 'mt-4 max-w-[46ch] text-[clamp(15px,1.5vw,18px)] text-ink-2'
export const sectionHead = 'mb-[clamp(34px,5vw,56px)]'

// Back link at the top of the inner pages.
export const backLink = 'mb-7 inline-block text-sm font-semibold text-ink-2 transition-colors hover:text-red'

// Hover lift of the cards.
export const lift = 'hover:-translate-y-0.5 hover:shadow-card-sm'
