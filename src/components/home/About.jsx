import { Reveal } from '../ui/Reveal.jsx'
import { Icon } from '../ui/Icon.jsx'

export default function About({ t }) {
  const { about } = t
  return (
    <section id="apropos" className="section" aria-labelledby="about-title">
      <div className="container about-grid">
        <Reveal>
          <h2 id="about-title" className="section-title" style={{ marginBottom: 18 }}>{about.title}</h2>
          <p className="about-lead"><span className="accent">{about.lead}</span></p>
          <div className="about-body">
            {about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </Reveal>
        <Reveal className="glass about-side" delay={1}>
          <div className="about-points">
            {about.points.map((pt, i) => (
              <div className="about-point" key={i}>
                <div className="ap-k">{pt.k}</div>
                <div className="ap-v">{pt.v}</div>
              </div>
            ))}
          </div>
          <div className="about-loc">
            <span className="pin"><Icon.pin /></span>
            <span>{about.location}</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
