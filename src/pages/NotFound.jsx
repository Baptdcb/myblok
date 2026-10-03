import { Icon } from '../components/common.jsx'
import { content } from '../content/index.js'
import { LANGS, pagePath } from '../routes.js'

// Vercel serves one 404 page for the whole site, whatever the language of the
// URL: the message is shown in every language, the current one first.
export default function NotFound({ t }) {
  const langs = [t.lang, ...LANGS.filter((l) => l !== t.lang)]
  return (
    <section className="section page" aria-labelledby="page-title">
      <div className="container">
        {langs.map((lang, i) => {
          const { notFound } = content[lang]
          const Title = i === 0 ? 'h1' : 'h2'
          return (
            <div key={lang} lang={lang} className={i === 0 ? '' : 'page-alt-lang'}>
              <Title id={i === 0 ? 'page-title' : undefined} className="section-title">{notFound.title}</Title>
              <p className="section-intro">{notFound.text}</p>
              <p className="page-actions">
                <a href={pagePath('home', lang)} className={i === 0 ? 'btn btn-primary' : 'btn btn-ghost'}>
                  {notFound.back} <Icon.arrow />
                </a>
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
