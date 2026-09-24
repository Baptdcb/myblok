import { Reveal } from './Reveal.jsx'
import { Icon } from './Icon.jsx'

export function SectionCta({ cta }) {
  return (
    <Reveal className="section-cta" delay={2}>
      <span>{cta.text}</span>
      <a href="#contact" className="btn btn-primary">{cta.button} <Icon.arrow /></a>
    </Reveal>
  )
}
