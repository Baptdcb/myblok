import { useState } from 'react'
import { Icon, Reveal } from '../components/common.jsx'
import { CONTACT_EMAIL } from '../content/index.js'
import { pagePath } from '../routes.js'

export default function Contact({ t }) {
  const { contact } = t
  const [status, setStatus] = useState('idle') // idle | sending | ok | err

  async function onSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)

    const payload = {
      name: String(data.get('name') || '').trim(),
      company: String(data.get('company') || '').trim(),
      email: String(data.get('email') || '').trim(),
      message: String(data.get('message') || '').trim(),
      website: String(data.get('website') || '').trim(), // honeypot
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
      if (res.ok) {
        setStatus('ok')
        form.reset()
      } else {
        setStatus('err')
      }
    } catch {
      setStatus('err')
    }
  }

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container contact-wrap">
        <Reveal className="contact-left">
          <h2 id="contact-title">{contact.title}</h2>
          <p className="contact-sub">{contact.subtitle}</p>
          <p className="contact-direct">
            {contact.or} <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>
        </Reveal>

        <Reveal as="form" className="glass contact-form" delay={1} onSubmit={onSubmit}>
          <div className="field">
            <label htmlFor="cf-name">{contact.name}</label>
            <input id="cf-name" name="name" type="text" autoComplete="name" required placeholder={contact.name} />
          </div>
          <div className="field">
            <label htmlFor="cf-company">
              {contact.company} <span className="field-optional">({contact.optional})</span>
            </label>
            <input id="cf-company" name="company" type="text" autoComplete="organization" placeholder={contact.company} />
          </div>
          <div className="field">
            <label htmlFor="cf-email">{contact.email}</label>
            <input id="cf-email" name="email" type="email" autoComplete="email" required placeholder={contact.emailPlaceholder} />
          </div>
          <div className="field">
            <label htmlFor="cf-msg">{contact.message}</label>
            <textarea id="cf-msg" name="message" required placeholder={contact.messagePlaceholder} />
          </div>
          <input
            type="text"
            name="website"
            autoComplete="off"
            tabIndex={-1}
            aria-hidden="true"
            style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }}
          />
          <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
            {status === 'sending' ? contact.sending : contact.submit}
            {status !== 'sending' && <Icon.arrow />}
          </button>
          <p className="form-note">
            {contact.privacy} <a href={pagePath('privacy', t.lang)}>{contact.privacyLink}</a>
          </p>
          {status === 'ok' && <p className="form-msg ok" role="status">{contact.success}</p>}
          {status === 'err' && (
            <p className="form-msg err" role="alert">
              {contact.error} <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: 'inherit', fontWeight: 700 }}>{CONTACT_EMAIL}</a>
            </p>
          )}
        </Reveal>
      </div>
    </section>
  )
}
