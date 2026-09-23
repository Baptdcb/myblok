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

// Previews and local dev use Cloudflare's always-pass test keys (the real site
// key only works on myblok.fr), so they must verify with the matching test secret.
const TURNSTILE_TEST_SECRET = '1x0000000000000000000000000000000AA'
const turnstileSecretKey = () =>
  process.env.VERCEL_ENV === 'production' ? process.env.TURNSTILE_SECRET_KEY : TURNSTILE_TEST_SECRET

async function verifyTurnstile(token, ip) {
  const secret = turnstileSecretKey()
  const form = new URLSearchParams()
  form.append('secret', secret)
  form.append('response', token)
  if (ip) form.append('remoteip', ip)

  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: form.toString(),
  })
  if (!res.ok) return false
  const data = await res.json()
  return data.success === true
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return json(res, 405, { ok: false, error: 'method_not_allowed' })
  }

  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.CONTACT_FROM_EMAIL
  const to = process.env.CONTACT_TO_EMAIL
  const turnstileSecret = turnstileSecretKey()

  if (!apiKey || !from || !to || !turnstileSecret) {
    const missing = Object.entries({
      RESEND_API_KEY: apiKey,
      CONTACT_FROM_EMAIL: from,
      CONTACT_TO_EMAIL: to,
      TURNSTILE_SECRET_KEY: turnstileSecret,
    }).filter(([, v]) => !v).map(([k]) => k)
    console.error('Contact API missing env vars:', missing.join(', '))
    return json(res, 500, { ok: false, error: 'server_not_configured' })
  }

  let body
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {})
  } catch {
    return json(res, 400, { ok: false, error: 'invalid_json' })
  }
  const name = String(body.name || '').trim()
  const email = String(body.email || '').trim()
  const message = String(body.message || '').trim()
  const company = String(body.company || '').trim() // honeypot
  const turnstileToken = String(body.turnstileToken || '').trim()

  if (company) {
    return json(res, 200, { ok: true })
  }

  if (!name || !email || !message || !turnstileToken) {
    return json(res, 400, { ok: false, error: 'missing_fields' })
  }

  if (!EMAIL_RE.test(email)) {
    return json(res, 400, { ok: false, error: 'invalid_email' })
  }

  if (message.length > 4000 || name.length > 120) {
    return json(res, 400, { ok: false, error: 'payload_too_large' })
  }

  const ip = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim()
  let humanVerified = false
  try {
    humanVerified = await verifyTurnstile(turnstileToken, ip)
  } catch (error) {
    console.error('Turnstile verification error:', error)
  }
  if (!humanVerified) {
    return json(res, 400, { ok: false, error: 'captcha_failed' })
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
