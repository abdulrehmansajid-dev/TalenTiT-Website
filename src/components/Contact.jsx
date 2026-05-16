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
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&q=80&auto=format&fit=crop')] bg-cover bg-center opacity-5" />
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-8 relative z-10">
        <div className="rounded-[2rem] p-7 md:p-8 bg-primary-950 text-white shadow-2xl shadow-primary-950/10">
          <span className="inline-flex px-3 py-1 rounded-full bg-accent-500/15 text-accent-300 text-xs tracking-[0.2em] uppercase">Get in touch</span>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-white">Contact / Feedback</h2>
          <p className="mt-3 text-white/75 leading-7">Use the form to send feedback or enquiries — we typically respond within 48 hours.</p>

          <div className="mt-6 space-y-3 text-white/85">
            <div><strong>Phone / WhatsApp:</strong> +971-552244365</div>
            <div><strong>Email:</strong> info@talentitconsultants.com</div>
            <div><strong>Address:</strong> Business Centre, Sharjah Publishing City Free Zone, Sharjah, United Arab Emirates</div>
            <div><strong>Website:</strong> www.talentithospitality.com</div>
          </div>

          <div className="mt-6 rounded-2xl bg-white/8 border border-white/10 p-5">
            <h3 className="font-semibold text-white text-xl">Our Focus</h3>
            <p className="text-white/75 mt-2 leading-7">Training, HR Outsourcing, Talent Acquisition, Quality Assurance, and bespoke L&D solutions for hospitality.</p>
          </div>
        </div>

        <div className="rounded-[2rem] p-7 md:p-8 bg-white border border-slate-200 shadow-2xl shadow-primary-950/5">
          <form ref={form} onSubmit={sendEmail} className="grid gap-4">
            <input name="user_name" required className="p-4 border border-slate-200 rounded-2xl bg-white/95 focus:outline-none focus:ring-2 focus:ring-accent-500/30" placeholder="Your name" />
            <input name="user_email" type="email" required className="p-4 border border-slate-200 rounded-2xl bg-white/95 focus:outline-none focus:ring-2 focus:ring-accent-500/30" placeholder="Your email" />
            <textarea name="message" required className="p-4 border border-slate-200 rounded-2xl bg-white/95 h-44 focus:outline-none focus:ring-2 focus:ring-accent-500/30" placeholder="Message"></textarea>
            <div className="flex items-center gap-4 flex-wrap">
              <button type="submit" className="px-6 py-3 bg-accent-500 text-white rounded-full shadow-lg shadow-accent-500/20 hover:bg-accent-600 transition">Send</button>
              {status === 'SENT' && <span className="text-accent-600 font-medium">Message sent. Thank you!</span>}
              {status === 'ERROR' && <span className="text-red-600 font-medium">Error sending message.</span>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
