import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const form = useRef()
  const [status, setStatus] = useState(null)

  const sendEmail = (e) => {
    e.preventDefault()
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'your_service_id'
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'your_template_id'
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'your_public_key'

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then(() => setStatus('SENT'))
      .catch(() => setStatus('ERROR'))
  }

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold text-primary-500">Contact / Feedback</h2>
          <p className="mt-2 text-gray-600">Use the form to send feedback or enquiries — we typically respond within 48 hours.</p>

          <div className="mt-6 space-y-3 text-gray-700">
            <div><strong>Phone / WhatsApp:</strong> +971-552244365</div>
            <div><strong>Email:</strong> info@talentitconsultants.com</div>
            <div><strong>Address:</strong> Business Centre, Sharjah Publishing City Free Zone, Sharjah, United Arab Emirates</div>
            <div><strong>Website:</strong> www.talentithospitality.com</div>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold text-primary-700">Our Focus</h3>
            <p className="text-gray-600 mt-2">Training, HR Outsourcing, Talent Acquisition, Quality Assurance, and bespoke L&D solutions for hospitality.</p>
          </div>
        </div>

        <div>
          <form ref={form} onSubmit={sendEmail} className="mt-0 grid gap-4">
            <input name="user_name" required className="p-3 border rounded" placeholder="Your name" />
            <input name="user_email" type="email" required className="p-3 border rounded" placeholder="Your email" />
            <textarea name="message" required className="p-3 border rounded h-40" placeholder="Message"></textarea>
            <div className="flex items-center gap-4">
              <button type="submit" className="px-5 py-3 bg-accent-500 text-white rounded">Send</button>
              {status === 'SENT' && <span className="text-accent-600">Message sent. Thank you!</span>}
              {status === 'ERROR' && <span className="text-red-600">Error sending message.</span>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
