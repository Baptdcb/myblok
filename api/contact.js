const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function json(res, status, body) {
  res.status(status).setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify(body))
}

function esc(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return json(res, 405, { ok: false, error: 'method_not_allowed' })
  }

  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.CONTACT_FROM_EMAIL
  const to = process.env.CONTACT_TO_EMAIL

  if (!apiKey || !from || !to) {
    return json(res, 500, { ok: false, error: 'server_not_configured' })
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {})
  const name = String(body.name || '').trim()
  const email = String(body.email || '').trim()
  const message = String(body.message || '').trim()
  const company = String(body.company || '').trim() // honeypot

  if (company) {
    return json(res, 200, { ok: true })
  }

  if (!name || !email || !message) {
    return json(res, 400, { ok: false, error: 'missing_fields' })
  }

  if (!EMAIL_RE.test(email)) {
    return json(res, 400, { ok: false, error: 'invalid_email' })
  }

  if (message.length > 4000 || name.length > 120) {
    return json(res, 400, { ok: false, error: 'payload_too_large' })
  }

  try {
    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Nouveau message myblok - ${name}`,
        text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `<p><strong>Nom:</strong> ${esc(name)}</p><p><strong>Email:</strong> ${esc(email)}</p><p><strong>Message:</strong></p><p>${esc(message).replaceAll('\n', '<br/>')}</p>`,
      }),
    })

    if (!resendRes.ok) {
      const details = await resendRes.text()
      console.error('Resend error:', resendRes.status, details)
      return json(res, 502, { ok: false, error: 'email_provider_error' })
    }

    return json(res, 200, { ok: true })
  } catch (error) {
    console.error('Contact API error:', error)
    return json(res, 500, { ok: false, error: 'internal_error' })
  }
}
