---
name: myblok
description: Swiss-editorial paper-and-ink world with a single red-to-orange signal gradient, for a solo custom-software developer serving SMEs.
colors:
  paper: "#f4f2ec"
  paper-card: "#ffffff"
  ink: "#141210"
  ink-2: "#4a463d"
  ink-3: "#8a857a"
  signal-red: "#ff3b23"
  signal-orange: "#ff8a34"
  signal-gradient: "linear-gradient(100deg, #ff3b23, #ff8a34)"
  signal-gradient-deep: "linear-gradient(100deg, #c22a15, #e06c1e)"
  line: "#ddd8cd"
  line-strong: "#c7c1b3"
  grid: "rgba(20, 16, 10, 0.06)"
  paper-dark: "#15140e"
  paper-card-dark: "#1e1c15"
  ink-dark: "#f4f1e6"
  signal-red-dark: "#ff5a43"
  signal-orange-dark: "#ff9d52"
typography:
  display:
    fontFamily: "'Archivo', 'Hanken Grotesk', system-ui, sans-serif"
    fontSize: "clamp(44px, 7.2vw, 92px)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.05em"
  headline:
    fontFamily: "'Archivo', 'Hanken Grotesk', system-ui, sans-serif"
    fontSize: "clamp(30px, 5vw, 52px)"
    fontWeight: 800
    lineHeight: 1.0
    letterSpacing: "-0.04em"
  title:
    fontFamily: "'Archivo', 'Hanken Grotesk', system-ui, sans-serif"
    fontSize: "23px"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.03em"
  body:
    fontFamily: "'Hanken Grotesk', -apple-system, BlinkMacSystemFont, system-ui, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "'Hanken Grotesk', -apple-system, BlinkMacSystemFont, system-ui, Arial, sans-serif"
    fontSize: "11px"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "0.1em"
rounded:
  micro: "2px"
  chip: "16px"
  sm: "12px"
  md: "18px"
  pill: "100px"
spacing:
  gap-sm: "14px"
  gap-md: "18px"
  container-pad: "26px"
  section: "clamp(72px, 11vw, 130px)"
components:
  button-primary:
    backgroundColor: "{colors.signal-gradient}"
    textColor: "#ffffff"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "{colors.signal-gradient}"
    textColor: "#ffffff"
  button-ghost:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  button-ghost-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  nav-cta:
    backgroundColor: "{colors.signal-gradient}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "10px 18px"
  card:
    backgroundColor: "{colors.paper-card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "26px 24px"
  chip:
    backgroundColor: "{colors.paper-card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "13px 24px"
  chip-hover:
    backgroundColor: "{colors.signal-gradient}"
    textColor: "#ffffff"
  tag-pill:
    backgroundColor: "{colors.signal-gradient}"
    textColor: "#ffffff"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "6px 12px"
  input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "13px 15px"
  input-focus:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
---

# Design System: myblok

## Overview

**Creative North Star: "The Modular Broadsheet"**

myblok reads like a well-set Swiss editorial page that a builder has assembled out of parts. The ground is warm paper (#f4f2ec) printed with a faint 46px graph-paper grid; the text is near-black ink; and every piece of energy in the layout comes from a single warm signal — a red-to-orange gradient — used sparingly and always for the same reason: to mark the thing that matters. The personality is sober, confident, and typographically loud where it counts, with tight-tracked Archivo headlines running large against generous whitespace. Nothing floats, nothing frosts, nothing glows for decoration.

Depth is drawn, not blurred. Cards are solid white panels bounded by a crisp 1.5px ink hairline — the same weight that underlines the nav and tops the footer — so the whole system feels ruled and printed rather than layered in glass. Motion is disciplined: content rises into place on scroll, the hero headline lifts on load, and the signature 3x3 grid of "blok" tiles pops in one after another and shimmers, dramatizing the product idea (modular blocks assembling into the exact tool a client needs) without ever becoming ambient noise.

This world explicitly rejects the two looks its own brief named off-limits: cream-plus-serif-plus-terracotta, and near-black-plus-neon. It also rejects the generic frosted-glass/dark-gradient SaaS hero and the flat freelance-dev card grid. The warmth here is paper warmth, not sepia; the accent is a printed-ink signal, not a glow.

**Key Characteristics:**
- Light-first warm-paper ground with a faint graph-paper grid; a full warm near-black dark editorial variant.
- One signal only: a red-to-orange gradient, rationed to headlines' hero word, CTAs, numbers, tags, and the blok tiles.
- Tight-tracked Archivo display against Hanken Grotesk body; headlines run very large.
- Solid panels with 1.5px ink hairlines — ruled, not glassy.
- A signature 3x3 grid of modular gradient "blok" tiles that assemble on load.

## Colors

A warm monochrome paper-and-ink base carrying exactly one chromatic voice: the red-to-orange signal gradient.

### Primary
- **Signal Gradient** (`linear-gradient(100deg, #ff3b23, #ff8a34)`): the brand's one voice. Fills primary and nav CTAs (pills), the `.grad` hero headline word (clipped to text), section/step numbers and markers, offer and step tag pills, the filled hero blok tiles, and the small square accent dots (brand mark, list bullets). Rendered as a gradient every time it appears as a fill or clipped-text accent.
- **Signal Red** (#ff3b23): the gradient's hot end, used on its own for hairline accents — link text in contact/footer, the dashed blok slot border, the step connector bar, the map pin, focus-ring border, and error text. Also the `::selection` highlight (with white text).
- **Signal Orange** (#ff8a34): the gradient's warm end; not used standalone, only as the gradient terminus.
- **Signal Gradient Deep** (`linear-gradient(100deg, #c22a15, #e06c1e)`): a darker gradient variant tinting the `dk` hero blok tiles (positions 2, 5, 6) for tonal variation within the 3x3 grid.

### Neutral
- **Paper** (#f4f2ec): the page ground; also the fill of ghost buttons and input fields.
- **Paper Card** (#ffffff): the fill of every solid editorial card and chip; pure white against the warm paper reads as a clean printed panel.
- **Ink** (#141210): primary text, the 1.5px hairline border on cards / nav / footer / ghost buttons, and headline color.
- **Ink 2** (#4a463d): secondary text — sub-copy, intros, card descriptions, nav links.
- **Ink 3** (#8a857a): tertiary / muted text — captions, example lines, placeholders, fine print.
- **Line** (#ddd8cd): soft internal dividers (card top-borders, about separators).
- **Line Strong** (#c7c1b3): the resting border on input fields (before focus).
- **Grid** (rgba(20,16,10,0.06)): the fixed 46px graph-paper background lines.

### Dark Editorial Variant
Activated by `[data-theme='dark']`: paper becomes warm near-black (#15140e), card fill #1e1c15, ink inverts to cream (#f4f1e6), and the signal warms and brightens (#ff5a43 to #ff9d52). It is a full parallel palette, not a filter — the system ships light AND dark.

### Named Rules
**The One Signal Rule.** There is exactly one accent voice — the red-to-orange gradient — and it never competes with a second hue. If something needs to draw the eye, it wears the gradient; if it doesn't, it stays ink on paper.

**The Ration Rule.** The signal marks only what matters: the hero word, CTAs, numbers, tags, and blok tiles. A screen that turns mostly warm has spent the signal; pull it back to ink-on-paper.

## Typography

**Display Font:** Archivo (with Hanken Grotesk, system-ui fallback), weights to 900
**Body Font:** Hanken Grotesk (with -apple-system / system-ui fallback), weights 400-700

**Character:** A confident editorial pairing — Archivo set very tight and heavy for oversized, ruled headlines, against Hanken Grotesk's calm, legible body. All headings use weight 800 with negative tracking; the contrast is scale and weight, not decoration.

### Hierarchy
- **Display** (Archivo 800, clamp(44px, 7.2vw, 92px), line-height 0.9, tracking -0.05em): the hero headline only; rises on load, max ~13ch, one word clipped to the signal gradient.
- **Headline** (Archivo 800, clamp(30px, 5vw, 52px), line-height 1.0, tracking -0.04em): section titles (`.section-title`) and the contact heading.
- **Title** (Archivo 800, 23px, tracking -0.03em): offer-card and marquee-chip headings; the about-lead runs a larger clamp(24-34px) variant of the same register.
- **Body** (Hanken Grotesk 400-550, 16px, line-height 1.5): paragraph copy and form fields; measures held at 42-62ch (`max-width` on subs, about body, intros ~46ch).
- **Label** (Hanken Grotesk 800, 11px, tracking 0.1em, UPPERCASE): eyebrow tags, module/step badges, field labels, and nav links (11.5px, tracking 0.13em) — the only positive-tracked, uppercase register.

Numerals — step numbers (40px), problem marks (26px) — are set in Archivo 800 and clipped to the signal gradient, functioning as display-weight signal markers.

### Named Rules
**The Tight-Heavy Rule.** Display and headline type is always Archivo 800 with negative tracking (-0.035em to -0.05em) and line-height at or below 1.0. Headlines earn presence from size, weight, and tightness — never from a lighter weight or looser setting.

**The Uppercase-Label Rule.** Positive letter-spacing and uppercase belong to labels only (tags, badges, nav, field labels). Body and headline text never uses tracked uppercase.

## Layout

A centered single column, max-width 1160px, with 26px gutters (18px below 460px). Sections breathe on a `clamp(72px, 11vw, 130px)` vertical rhythm; section heads clear `clamp(34px, 5vw, 56px)` below.

The page is built from explicit grids that collapse cleanly: the hero splits 1.05fr / 0.95fr (copy / bloks) and stacks below 940px with the blok cluster moving above the copy; the problem list is a 3-up grid; the offer grid 2-up; the process track a 5-up strip that steps to 2-up at 940px and 1-up at 720px; about is 1.2fr / 0.8fr; contact 0.9fr / 1.1fr. Nav collapses its links into a burger drawer at 720px and drops the CTA at 460px.

Internal spacing rhythm runs on a small set of steps — 14px and 18px grid gaps, 10-16px stacked spacing inside cards, 20-28px card padding. A fixed background layer paints the warm paper plus a 46px graph-paper grid behind everything.

## Elevation & Depth

Hybrid, but hairline-first. At rest, depth comes entirely from the 1.5px solid ink borders and the printed grid — surfaces are flat and ruled, like a broadsheet. Shadows are reserved for two jobs: the warm glow that sits under signal-gradient elements (CTAs, filled blok tiles), and the lift that appears on hover.

### Shadow Vocabulary
- **Signal Glow** (`box-shadow: 0 12px 28px rgba(255,90,30,0.32)`; buttons deepen to `0 18px 40px` on hover): warm cast under gradient CTAs, nav CTA, and filled blok tiles. It is a colored glow, not a neutral drop shadow.
- **Card Lift** (`box-shadow: 0 16px 34px rgba(30,20,10,0.10)`, small variant `0 8px 18px rgba(30,20,10,0.08)`): appears only on hover over cards, steps, and side panels, paired with a `translateY(-4px)` rise.
- **Focus Ring** (`box-shadow: 0 0 0 3px rgba(255,90,30,0.32)` plus red border): input focus state.

### Named Rules
**The Ruled-At-Rest Rule.** Resting surfaces carry no neutral drop shadow — they are defined by the 1.5px ink hairline. Neutral shadow is a hover response (lift); colored glow belongs only to signal-gradient elements.

## Shapes

Two corner registers. Panels and inputs use a soft editorial radius — 18px on cards (`--radius`), 12px on inputs (`--radius-sm`), 16px on blok tiles. Everything interactive-as-a-marker is a full pill: buttons, chips, tag pills, and icon buttons all use a 100px radius. Tiny square accents (the 9px brand dot, 10px list bullets) use a 2px radius, echoing the modular block motif in miniature.

Borders are the defining silhouette: a consistent 1.5px solid ink hairline draws cards, nav, footer, ghost buttons, and chips; softer dividers use 1.5px in the muted line tones; the hero's empty blok slot is a 1.6px dashed red outline.

## Components

### Buttons
- **Shape:** full pill (100px radius), inline-flex with a 9px gap for a trailing arrow icon, label-weight type (15px, 700).
- **Primary:** signal-gradient fill, white text, warm signal glow (`0 12px 28px` glow). Hover lifts `-2px`, deepens the glow to `0 18px 40px`, and brightens 5%. Active nudges `+1px` / scale 0.99.
- **Ghost:** paper fill, ink text, 1.5px ink outline, no shadow. Hover inverts — fills ink, text goes paper — and lifts `-2px`.
- **Nav CTA:** a compact gradient pill (13px, 10px/18px padding) with the signal glow; hidden below 460px.

### Chips
- **Style (AI marquee):** white fill, 1.5px ink border, full pill, Archivo 800 display type at clamp(17-25px) with a red currentColor icon.
- **State:** hover fills the signal gradient, flips text and icon to white, and drops the border to transparent.
- **Tag pills:** small uppercase label pills (11px) with signal-gradient fill and white text — used as offer tags, process badges.

### Cards / Containers
- **Corner Style:** 18px radius (`--radius`).
- **Background:** paper-card white (dark: #1e1c15).
- **Shadow Strategy:** none at rest; Card Lift on hover (see Elevation).
- **Border:** 1.5px solid ink (`.glass` recipe) — the shared editorial hairline.
- **Internal Padding:** 24-28px; internal dividers use 1.5px soft line with 16-20px offset.

### Inputs / Fields
- **Style:** paper fill, 1.5px `line-strong` border, 12px radius, 15px body text; uppercase 11px label above.
- **Focus:** border shifts to signal red plus a 3px warm focus ring (`rgba(255,90,30,0.32)`); no outline.
- **Error:** message in signal red, 700 weight; success message in #17915a.

### Navigation
- **Style:** sticky top bar, 62px tall, translucent paper (`color-mix` 88%) with an 8px backdrop blur, closed by a 1.5px ink border-bottom. Brand is Archivo 800 wordmark with a 9px gradient square dot.
- **States:** links are 11.5px uppercase tracked ink-2, hovering to signal red; icon buttons (lang, theme) are pill outlines that invert to ink-fill on hover.
- **Mobile:** links collapse into a burger-triggered drawer at 720px (full-width, ink border-bottom); CTA drops at 460px.

### The Blok Cluster (signature)
A 3x3 grid of square tiles (`.hero-blocks` / `.blk`, 16px radius, 380px max) in the hero. Eight tiles are gradient-filled — three in the deep-gradient variant for tonal rhythm — and the top-right slot is an empty 1.6px dashed-red "+ votre besoin" placeholder waiting to clip in. On load each tile pops in on a staggered 0.05-0.61s delay (scale/translate settle); filled tiles run a slow diagonal shimmer sweep; every tile lifts `-5px` / scales 1.03 on hover. This motif is the literal expression of the product idea (modular blocks assembling into the exact tool) and is the system's one permitted piece of ambient animation.

## Do's and Don'ts

### Do:
- **Do** keep the accent as the one red-to-orange signal gradient (`linear-gradient(100deg, #ff3b23, #ff8a34)`), and ration it to headlines' hero word, CTAs, numbers, tags, and blok tiles.
- **Do** bound solid panels with the 1.5px solid ink hairline (`.glass` recipe) — the same weight on nav, footer, cards, and chips.
- **Do** set headlines in Archivo 800 with negative tracking (-0.035em to -0.05em) and line-height at or below 1.0.
- **Do** reserve neutral shadow for hover lift and colored glow for signal-gradient elements; keep resting surfaces flat and ruled.
- **Do** ship every screen in both the light paper and dark editorial (`[data-theme='dark']`) palettes.
- **Do** keep the graph-paper grid (46px, `--grid`) as the page ground behind content.

### Don't:
- **Don't** introduce a second accent hue or replace the gradient with a flat brand color — the single signal is the identity.
- **Don't** reach for frosted glass, blur-as-material, neon glow, or a dark-gradient SaaS hero; depth is drawn with hairlines, not blur. (The nav's 8px backdrop-blur is a legibility scrim on a translucent bar, not a glass surface — don't generalize it into a glass material.)
- **Don't** use tracked uppercase on body or headline text; positive tracking and uppercase belong to labels only.
- **Don't** fabricate social proof — no testimonials, client logos, team, project counts, or metrics; credibility comes from clarity, not invented proof.
- **Don't** loosen or lighten display type toward a delicate setting, and don't drop the negative tracking — the headlines are meant to feel heavy and printed.
