import { Reveal } from './Reveal.jsx'

export function SectionHead({ id, title, intro }) {
  return (
    <Reveal className="section-head">
      <h2 id={id} className="section-title">{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </Reveal>
  )
}
