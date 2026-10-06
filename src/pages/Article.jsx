import { SectionCta } from '../components/common.jsx'
import { Visual } from '../components/Visuals.jsx'
import ExampleCard from '../components/ExampleCard.jsx'
import { articles } from '../content/index.js'
import { homeSection } from '../routes.js'

// Detail page of an example, filled from src/content/articles.js.
export default function Article({ t, route }) {
  const article = route.article
  const a = article[t.lang]
  const labels = t.article
  const others = articles.filter((o) => o.slug !== article.slug).slice(0, 3)

  return (
    <article className="section page article" aria-labelledby="page-title">
      <div className="container">
        <a href={homeSection(t.lang, 'examples')} className="page-back">← {labels.back}</a>
        <header className="art-head">
          <span className="ex-tag">{t.examples.tags[article.tag]}</span>
          <h1 id="page-title" className="art-title">{a.title}</h1>
          <p className="art-lead">{a.summary}</p>
        </header>

        <figure className="art-visual glass">
          <Visual name={article.visual} lang={t.lang} label={a.title} />
        </figure>
        <p className="art-note">{labels.note}</p>

        <div className="art-grid">
          <div className="art-main">
            <section className="art-block">
              <h2>{labels.before}</h2>
              <p>{a.before}</p>
            </section>

            <section className="art-block">
              <h2>{labels.steps}</h2>
              <ol className="art-steps">
                {a.steps.map((s, i) => (
                  <li key={i}>
                    <span className="art-step-n" aria-hidden="true">{i + 1}</span>
                    <div>
                      <h3>{s.t}</h3>
                      <p>{s.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            {article.code && (
              <section className="art-block">
                <h2>{labels.code}</h2>
                <div className="art-code">
                  <div className="art-code-bar"><span /><span /><span /><code>{article.code.file}</code></div>
                  <pre><code>{article.code.src}</code></pre>
                </div>
              </section>
            )}

            <section className="art-block">
              <h2>{labels.after}</h2>
              <ul className="art-after">
                {a.after.map((line, i) => <li key={i}>{line}</li>)}
              </ul>
            </section>

            {article.images?.length > 0 && (
              <div className="page-gallery">
                {article.images.map((img) => (
                  <figure key={img.src}>
                    <img src={img.src} alt={img.alt[t.lang]} loading="lazy" />
                  </figure>
                ))}
              </div>
            )}
          </div>

          <aside className="art-side">
            <div className="glass art-panel">
              <h2>{labels.stack}</h2>
              <ul>
                {a.stack.map((line, i) => <li key={i}>{line}</li>)}
              </ul>
            </div>
            <div className="art-panel art-watch">
              <h2>{labels.watch}</h2>
              <p>{a.watch}</p>
            </div>
          </aside>
        </div>

        <SectionCta cta={labels.cta} lang={t.lang} />

        <section className="art-more" aria-labelledby="more-title">
          <h2 id="more-title" className="section-title">{labels.more}</h2>
          <div className="art-more-grid">
            {others.map((o) => <ExampleCard key={o.slug} article={o} t={t} />)}
          </div>
        </section>
      </div>
    </article>
  )
}
