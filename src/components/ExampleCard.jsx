import { Icon } from './common.jsx'
import { Visual } from './Visuals.jsx'
import { pagePath } from '../routes.js'

// One example as a card: drawing, tag, title, summary. The whole card is the link.
export default function ExampleCard({ article, t }) {
  const a = article[t.lang]
  return (
    <a className="ex-card glass" href={pagePath('article', t.lang, article.slug)}>
      <div className="ex-visual">
        <Visual name={article.visual} lang={t.lang} label={a.title} />
      </div>
      <div className="ex-body">
        <span className="ex-tag">{t.examples.tags[article.tag]}</span>
        <h3>{a.title}</h3>
        <p className="ex-summary">{a.summary}</p>
        <span className="ex-read">{t.examples.read} <Icon.arrow /></span>
      </div>
    </a>
  )
}
