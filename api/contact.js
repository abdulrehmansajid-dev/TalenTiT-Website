const fs = require('fs')
const path = require('path')

let resendClientPromise = null
let localEnvCache = null

function parseEnvFile(filePath) {
  if (!fs.existsSync(filePath)) {
    return {}
  }

  const contents = fs.readFileSync(filePath, 'utf8')
  const env = {}

  contents.split(/\r?\n/).forEach((line) => {
    const trimmed = line.trim()

    if (!trimmed || trimmed.startsWith('#')) {
      return
    }

    const equalsIndex = trimmed.indexOf('=')

    if (equalsIndex === -1) {
      return
    }

    const key = trimmed.slice(0, equalsIndex).trim()
    const value = trimmed.slice(equalsIndex + 1).trim()
    env[key] = value
  })

  return env
}

function getLocalEnvValue(key) {
  if (!localEnvCache) {
    const rootDir = process.cwd()
    const envFiles = [path.join(rootDir, '.env.local'), path.join(rootDir, '.env')]
    localEnvCache = envFiles.reduce((accumulator, filePath) => {
      return { ...accumulator, ...parseEnvFile(filePath) }
    }, {})
  }

  return localEnvCache[key]
}

function getEnvValue(key) {
  return process.env[key] || getLocalEnvValue(key) || ''
}

async function getResendClient() {
  const apiKey = getEnvValue('RESEND_API_KEY')

  if (!apiKey) {
    return null
  }

  if (!resendClientPromise) {
    resendClientPromise = import('resend').then(({ Resend }) => new Resend(apiKey))
  }

  return resendClientPromise
}

function getBody(req) {
  if (!req.body) {
    return {}
  }

  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body)
    } catch {
      return {}
    }
  }

  return req.body
}

function isValidEmail(email) {
  return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

module.exports = async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json')

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed.' })
  }

  const body = getBody(req)
  const honeypot = body.website || body.companyWebsite

  const hasResendApiKey = Boolean(getEnvValue('RESEND_API_KEY'))
  const hasReceiverEmail = Boolean(getEnvValue('CONTACT_RECEIVER_EMAIL'))
  const hasFromEmail = Boolean(getEnvValue('CONTACT_FROM_EMAIL'))

  if (!hasResendApiKey || !hasReceiverEmail || !hasFromEmail) {
    const missingVars = [
      !hasResendApiKey ? 'RESEND_API_KEY' : null,
      !hasReceiverEmail ? 'CONTACT_RECEIVER_EMAIL' : null,
      !hasFromEmail ? 'CONTACT_FROM_EMAIL' : null,
    ].filter(Boolean)

    console.error('Missing contact env vars:', missingVars)

    return res.status(500).json({
      success: false,
      message: 'Server email configuration is missing.',
    })
  }

  console.log('Contact API env presence:', {
    hasResendApiKey,
    hasReceiverEmail,
    hasFromEmail,
  })

  if (honeypot) {
    return res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully.',
    })
  }

  const name = String(body.name || body.user_name || '').trim()
  const email = String(body.email || body.user_email || '').trim()
  const message = String(body.message || '').trim()
  const phone = String(body.phone || '').trim()
  const company = String(body.company || '').trim()
  const service = String(body.service || '').trim()
  const subject = String(body.subject || '').trim()

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Name, email, and message are required.',
    })
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({
      success: false,
      message: 'Please enter a valid email address.',
    })
  }

  const to = getEnvValue('CONTACT_RECEIVER_EMAIL')
  const from = getEnvValue('CONTACT_FROM_EMAIL')
  const submittedAt = new Date().toLocaleString('en-GB', {
    dateStyle: 'medium',
    timeStyle: 'short',
  })
  const resend = await getResendClient()

  if (!resend) {
    console.error('Contact API error: missing Resend client')
    return res.status(500).json({
      success: false,
      message: 'Server email configuration is missing.',
    })
  }

  const emailHtml = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
      <h2 style="margin: 0 0 16px;">New Website Enquiry - TalenTiT</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ''}
      ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ''}
      ${service ? `<p><strong>Service/Inquiry Type:</strong> ${escapeHtml(service)}</p>` : ''}
      ${subject ? `<p><strong>Subject:</strong> ${escapeHtml(subject)}</p>` : ''}
      <p><strong>Message:</strong><br />${escapeHtml(message).replace(/\n/g, '<br />')}</p>
      <p><strong>Submitted:</strong> ${escapeHtml(submittedAt)}</p>
    </div>
  `

  const textParts = [
    'New Website Enquiry - TalenTiT',
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    company ? `Company: ${company}` : null,
    service ? `Service/Inquiry Type: ${service}` : null,
    subject ? `Subject: ${subject}` : null,
    `Message: ${message}`,
    `Submitted: ${submittedAt}`,
  ].filter(Boolean)

  try {
    const result = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: 'New Website Enquiry - TalenTiT',
      text: textParts.join('\n\n'),
      html: emailHtml,
    })

    if (result?.error) {
      console.error('Resend send error:', result.error)

      return res.status(500).json({
        success: false,
        message: result.error?.message || 'Email service rejected the message.',
      })
    }

    return res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully.',
    })
  } catch (error) {
    console.error('Contact API error:', {
      message: error?.message,
      name: error?.name,
      statusCode: error?.statusCode,
      response: error?.response,
    })

    return res.status(500).json({
      success: false,
      message: error?.message || 'Something went wrong. Please try again.',
    })
  }
}
