import { useEffect, useRef, useState } from 'react'
import { Reveal, Icon, SectionCta } from '../components/common.jsx'
import ExampleCard from '../components/ExampleCard.jsx'
import { articles } from '../content/index.js'

const TAGS = ['auto', 'ia', 'script', 'outil']

// Carousel of concrete examples: native horizontal scroll with snap points,
// arrows for mouse users, and a filter by kind of automation.
export default function Examples({ t }) {
  const { examples } = t
  const track = useRef(null)
  const [tag, setTag] = useState(null)
  const [index, setIndex] = useState(0)
  const [atEnd, setAtEnd] = useState(false)
  const list = tag ? articles.filter((a) => a.tag === tag) : articles
  const tags = TAGS.filter((k) => articles.some((a) => a.tag === k))

  const sync = () => {
    const el = track.current
    if (!el) return
    const card = el.firstElementChild
    const step = card ? card.getBoundingClientRect().width + 18 : 1
    setIndex(Math.round(el.scrollLeft / step))
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4)
  }

  useEffect(() => {
    const el = track.current
    if (!el) return
    el.scrollTo({ left: 0 })
    sync()
    el.addEventListener('scroll', sync, { passive: true })
    window.addEventListener('resize', sync)
    return () => {
      el.removeEventListener('scroll', sync)
      window.removeEventListener('resize', sync)
    }
  }, [tag])

  const move = (dir) => {
    const el = track.current
    const card = el?.firstElementChild
    if (!card) return
    el.scrollBy({ left: dir * (card.getBoundingClientRect().width + 18), behavior: 'smooth' })
  }

  if (articles.length === 0) return null
  const pad = (n) => String(n).padStart(2, '0')

  return (
    <section id={t.anchors.examples} className="section examples" aria-labelledby="examples-title">
      <div className="container">
        <Reveal className="section-head ex-head">
          <div>
            <h2 id="examples-title" className="section-title">{examples.title}</h2>
            <p className="section-intro">{examples.intro}</p>
          </div>
          <div className="ex-controls">
            <span className="ex-count" aria-hidden="true">
              <strong>{pad(Math.min(index + 1, list.length))}</strong> / {pad(list.length)}
            </span>
            <button type="button" className="icon-btn ex-arrow" onClick={() => move(-1)} disabled={index === 0} aria-label={examples.prev}>
              <Icon.arrow style={{ transform: 'scaleX(-1)' }} />
            </button>
            <button type="button" className="icon-btn ex-arrow" onClick={() => move(1)} disabled={atEnd} aria-label={examples.next}>
              <Icon.arrow />
            </button>
          </div>
        </Reveal>
        <div className="ex-filters" role="group" aria-label={examples.filterLabel}>
          <button type="button" className="ex-filter" aria-pressed={tag === null} onClick={() => setTag(null)}>{examples.all}</button>
          {tags.map((k) => (
            <button key={k} type="button" className="ex-filter" aria-pressed={tag === k} onClick={() => setTag(k)}>
              {examples.tags[k]}
            </button>
          ))}
        </div>
      </div>
      <ul className="ex-track" ref={track} tabIndex={0} aria-label={examples.title}>
        {list.map((a) => (
          <li key={a.slug} className="ex-slide">
            <ExampleCard article={a} t={t} />
          </li>
        ))}
      </ul>
      <div className="container">
        <SectionCta cta={examples.cta} lang={t.lang} />
      </div>
    </section>
  )
}
