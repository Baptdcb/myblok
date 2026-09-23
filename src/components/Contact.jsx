import { useEffect, useRef, useState } from 'react'
import { Icon, Reveal } from './common.jsx'
import { CONTACT_EMAIL } from '../content.js'

export default function Contact({ t }) {
  const { contact } = t
  const [status, setStatus] = useState('idle') // idle | sending | ok | err
  const turnstileRef = useRef(null)
  const widgetId = useRef(null)

  // Explicit render: the page is prerendered and React replaces that DOM on
  // mount, so Turnstile's implicit scan could draw into a node that gets thrown away.
  useEffect(() => {
    const sitekey = import.meta.env.VITE_TURNSTILE_SITE_KEY
    if (!sitekey) {
      console.error('VITE_TURNSTILE_SITE_KEY is not set for this build: contact form anti-spam disabled.')
      return
    }
    let timer
    const mount = () => {
      if (!window.turnstile || !turnstileRef.current) {
        timer = setTimeout(mount, 200)
        return
      }
      // A Turnstile failure must never take the whole page down with it.
      try {
        widgetId.current = window.turnstile.render(turnstileRef.current, { sitekey, theme: 'auto' })
      } catch (err) {
        console.error(err)
      }
    }
    mount()
    return () => {
      clearTimeout(timer)
      if (widgetId.current != null) window.turnstile?.remove(widgetId.current)
      widgetId.current = null
    }
  }, [])

  async function onSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)

    const payload = {
      name: String(data.get('name') || '').trim(),
      email: String(data.get('email') || '').trim(),
      message: String(data.get('message') || '').trim(),
      company: String(data.get('company') || '').trim(), // honeypot
      turnstileToken: String(data.get('cf-turnstile-response') || ''),
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
    } finally {
      if (widgetId.current != null) window.turnstile?.reset(widgetId.current)
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
            <label htmlFor="cf-email">{contact.email}</label>
            <input id="cf-email" name="email" type="email" autoComplete="email" required placeholder="vous@entreprise.fr" />
          </div>
          <div className="field">
            <label htmlFor="cf-msg">{contact.message}</label>
            <textarea id="cf-msg" name="message" required placeholder={contact.message} />
          </div>
          <input
            type="text"
            name="company"
            autoComplete="off"
            tabIndex={-1}
            aria-hidden="true"
            style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }}
          />
          <div ref={turnstileRef} />
          <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
            {status === 'sending' ? contact.sending : contact.submit}
            {status !== 'sending' && <Icon.arrow />}
          </button>
          <p className="form-note">
            {contact.privacy} <a href="#mentions-legales">{contact.privacyLink}</a>
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
