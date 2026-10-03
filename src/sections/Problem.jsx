import { Reveal, Icon } from '../components/common.jsx'

export default function Problem({ t }) {
  const { problem } = t
  return (
    <section className="section" aria-labelledby="problem-title">
      <div className="container">
        <Reveal className="section-head">
          <h2 id="problem-title" className="section-title">{problem.title}</h2>
          <p className="section-intro">{problem.intro}</p>
        </Reveal>
        <div className="problem-list">
          {problem.items.map((item, i) => {
            const ItemIcon = Icon[item.icon]
            return (
              <Reveal key={i} className="glass problem-item" delay={i + 1}>
                <span className="p-icon" aria-hidden="true"><ItemIcon /></span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </Reveal>
            )
          })}
        </div>
        <Reveal className="problem-foot" delay={2}>
          <span>{problem.foot}</span>
        </Reveal>
      </div>
    </section>
  )
}
