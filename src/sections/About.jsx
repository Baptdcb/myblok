import { Reveal } from '../components/common.jsx'

export default function About({ t }) {
  const { about } = t
  return (
    <section id={t.anchors.about} className="section" aria-labelledby="about-title">
      <div className="container about-grid">
        <Reveal>
          <h2 id="about-title" className="section-title" style={{ marginBottom: 18 }}>{about.title}</h2>
          <p className="about-lead"><span className="accent">{about.lead}</span></p>
          <div className="about-body">
            {about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </Reveal>
        <Reveal className="glass about-side" delay={1}>
          <figure className="about-portrait">
            <img src="/image%20copy.png" alt={about.photoAlt} />
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
