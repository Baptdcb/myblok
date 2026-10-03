import { Icon } from '../components/common.jsx'
import { pagePath } from '../routes.js'

export default function NotFound({ t }) {
  const { notFound } = t
  return (
    <section className="section page" aria-labelledby="page-title">
      <div className="container">
        <h1 id="page-title" className="section-title">{notFound.title}</h1>
        <p className="section-intro">{notFound.text}</p>
        <p className="page-actions">
          <a href={pagePath('home', t.lang)} className="btn btn-primary">{notFound.back} <Icon.arrow /></a>
        </p>
      </div>
    </section>
  )
}
