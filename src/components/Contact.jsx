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
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <span className="inline-flex px-3 py-1 rounded-full bg-primary-900 text-white text-xs tracking-[0.2em] uppercase">Contact</span>
          <h2 className="mt-4 section-title font-semibold">Let’s talk about your hospitality goals.</h2>
          <p className="mt-4 section-text text-lg">Send your enquiry or feedback and we will respond within 48 hours.</p>
        </div>

        <div className="mt-10 grid lg:grid-cols-5 gap-6 items-stretch">
          <aside className="lg:col-span-2 rounded-2xl p-7 md:p-8 bg-primary-900 text-white border border-primary-800 shadow-xl">
            <h3 className="text-2xl font-semibold text-white">Contact Information</h3>
            <div className="mt-6 space-y-4 text-white/90 text-sm leading-7">
              <div className="flex gap-3">
                <span className="mt-1 text-accent-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884l3.172-.793a1 1 0 011.11.417l1.516 2.274a1 1 0 01-.217 1.316l-1.2.96a11.042 11.042 0 005.292 5.292l.96-1.2a1 1 0 011.316-.217l2.274 1.516a1 1 0 01.417 1.11l-.793 3.172a1 1 0 01-.97.757C6.716 20.488-.488 13.284-.488 4.854a1 1 0 01.757-.97H2.003z"/></svg>
                </span>
                <div><strong>Phone / WhatsApp:</strong><br />+971-552244365</div>
              </div>
              <div className="flex gap-3">
                <span className="mt-1 text-accent-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M2.94 6.34A2 2 0 014.72 5h10.56a2 2 0 011.78 1.34L10 11.25 2.94 6.34z"/><path d="M18 8.12l-7.46 5.32a1 1 0 01-1.08 0L2 8.12V14a2 2 0 002 2h12a2 2 0 002-2V8.12z"/></svg>
                </span>
                <div><strong>Email:</strong><br />info@talentitconsultants.com</div>
              </div>
              <div className="flex gap-3">
                <span className="mt-1 text-accent-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 8.464A7 7 0 1114.95 8.464L10 14.414l-4.95-5.95zM10 11a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/></svg>
                </span>
                <div><strong>Address:</strong><br />Business Centre, Sharjah Publishing City Free Zone, Sharjah, UAE</div>
              </div>
              <div className="flex gap-3">
                <span className="mt-1 text-accent-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 4a1 1 0 011-1h2.586a1 1 0 01.707.293l.414.414a1 1 0 00.707.293H15a1 1 0 011 1v1H4V4zm0 4h12v7a1 1 0 01-1 1H5a1 1 0 01-1-1V8z" clipRule="evenodd"/></svg>
                </span>
                <div><strong>Website:</strong><br />www.talentithospitality.com</div>
              </div>
            </div>

            <div className="mt-7 rounded-xl bg-white/10 border border-white/15 p-4">
              <h4 className="font-semibold text-white">Our Focus</h4>
              <p className="text-white/85 mt-2 text-sm leading-7">Training, HR outsourcing, talent acquisition, quality assurance, and bespoke L&D solutions for hospitality teams.</p>
            </div>
          </aside>

          <div className="lg:col-span-3 rounded-2xl p-7 md:p-8 bg-slate-50 border border-slate-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <form ref={form} onSubmit={sendEmail} className="grid gap-4">
              <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-700" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 2a5 5 0 00-3 9v2a1 1 0 001 1h4a1 1 0 001-1V11a5 5 0 00-3-9z" clipRule="evenodd"/></svg>
                Full name
              </label>
              <input name="user_name" required className="p-4 border border-slate-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-accent-500/30 transition-shadow duration-200 focus:shadow" placeholder="Your name" />

              <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-700" viewBox="0 0 20 20" fill="currentColor"><path d="M2.94 6.34A2 2 0 014.72 5h10.56a2 2 0 011.78 1.34L10 11.25 2.94 6.34z"/><path d="M18 8.12l-7.46 5.32a1 1 0 01-1.08 0L2 8.12V14a2 2 0 002 2h12a2 2 0 002-2V8.12z"/></svg>
                Email address
              </label>
              <input name="user_email" type="email" required className="p-4 border border-slate-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-accent-500/30 transition-shadow duration-200 focus:shadow" placeholder="you@example.com" />

              <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-700" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.84 8.84 0 01-4.083-.98L2 17l1.004-3.014A6.96 6.96 0 012 10c0-3.866 3.582-7 8-7s8 3.134 8 7zm-8-3a1 1 0 100 2h.01a1 1 0 000-2H10zm-3 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"/></svg>
                Message
              </label>
              <textarea name="message" required className="p-4 border border-slate-300 rounded-xl bg-white h-44 focus:outline-none focus:ring-2 focus:ring-accent-500/30 transition-shadow duration-200 focus:shadow" placeholder="How can we help?"></textarea>

              <div className="flex items-center gap-4 flex-wrap pt-2">
                <button type="submit" className="px-6 py-3 bg-accent-600 text-white rounded-full shadow hover:bg-accent-700 hover:-translate-y-0.5 transition duration-200">Send message</button>
                {status === 'SENT' && <span className="text-green-700 font-medium">Message sent. Thank you!</span>}
                {status === 'ERROR' && <span className="text-red-700 font-medium">Error sending message.</span>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
