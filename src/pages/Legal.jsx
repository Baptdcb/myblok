import { LegalList } from '../components/common.jsx'

export default function Legal({ t }) {
  const { legal } = t
  return (
    <section className="section page" aria-labelledby="page-title">
      <div className="container">
        <h1 id="page-title" className="section-title">{legal.title}</h1>
        <div className="glass legal">
          <LegalList lines={legal.lines} />
        </div>
      </div>
    </section>
  )
}
