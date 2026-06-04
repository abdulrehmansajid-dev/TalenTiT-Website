import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import SectionHeader from './SectionHeader'

export default function Contact() {
  const form = useRef()
  const [status, setStatus] = useState(null)

  const sendEmail = (e) => {
    e.preventDefault()

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'your_service_id'
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'your_template_id'
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'your_public_key'

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then(() => {
        setStatus('SENT')
        form.current.reset()
      })
      .catch(() => setStatus('ERROR'))
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-4xl">
          <p className="uppercase tracking-[0.25em] text-orange-600 font-semibold text-sm mb-4">
            Contact TalenTiT
          </p>

          <SectionHeader
            title="Contact Us"
            description="Reach out for training, recruitment, HR outsourcing, or tailored hospitality support. You can expect our reply within 24 to 48 hours."
            className="max-w-3xl"
          />
        </div>

        <div className="mt-12 grid lg:grid-cols-5 gap-6 items-stretch">
          <aside className="lg:col-span-2 rounded-3xl p-7 md:p-8 bg-slate-950 text-white border border-slate-800 shadow-xl shadow-slate-900/20">
            <div className="h-1 w-16 bg-orange-600 rounded-full mb-6"></div>

            <h3 className="text-2xl font-semibold text-white">
              Contact Information
            </h3>

            <div className="mt-7 space-y-5 text-white/90 text-sm leading-7">
              <div className="flex gap-3">
                <span className="mt-1 text-orange-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884l3.172-.793a1 1 0 011.11.417l1.516 2.274a1 1 0 01-.217 1.316l-1.2.96a11.042 11.042 0 005.292 5.292l.96-1.2a1 1 0 011.316-.217l2.274 1.516a1 1 0 01.417 1.11l-.793 3.172a1 1 0 01-.97.757C6.716 20.488-.488 13.284-.488 4.854a1 1 0 01.757-.97H2.003z" />
                  </svg>
                </span>
                <div>
                  <strong>Phone / WhatsApp:</strong>
                  <br />
                  +971-552244365
                </div>
              </div>

              <div className="flex gap-3">
                <span className="mt-1 text-orange-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.94 6.34A2 2 0 014.72 5h10.56a2 2 0 011.78 1.34L10 11.25 2.94 6.34z" />
                    <path d="M18 8.12l-7.46 5.32a1 1 0 01-1.08 0L2 8.12V14a2 2 0 002 2h12a2 2 0 002-2V8.12z" />
                  </svg>
                </span>
                <div>
                  <strong>Email:</strong>
                  <br />
                  info@talentitconsultants.com
                </div>
              </div>

              <div className="flex gap-3">
                <span className="mt-1 text-orange-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 8.464A7 7 0 1114.95 8.464L10 14.414l-4.95-5.95zM10 11a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                </span>
                <div>
                  <strong>Address:</strong>
                  <br />
                  Business Centre, Sharjah Publishing City Free Zone, Sharjah, UAE
                </div>
              </div>

              <div className="flex gap-3">
                <span className="mt-1 text-orange-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 4a1 1 0 011-1h2.586a1 1 0 01.707.293l.414.414a1 1 0 00.707.293H15a1 1 0 011 1v1H4V4zm0 4h12v7a1 1 0 01-1 1H5a1 1 0 01-1-1V8z" clipRule="evenodd" />
                  </svg>
                </span>
                <div>
                  <strong>Website:</strong>
                  <br />
                  www.talentithospitality.com
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-white/10 border border-white/15 p-5">
              <h4 className="font-semibold text-white">
                Our Focus
              </h4>

              <p className="text-white/85 mt-3 text-sm leading-7">
                L&D, talent acquisition, service & quality audits, HR outsourcing, training functions and HR consultancy for hospitality businesses.
              </p>
            </div>
          </aside>

          <div className="lg:col-span-3 rounded-3xl p-7 md:p-8 bg-white border border-slate-200 shadow-xl shadow-slate-900/5">
            <div className="h-1 w-16 bg-orange-600 rounded-full mb-6"></div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-slate-950">
                Get In Touch
              </h3>

              <p className="mt-2 text-sm text-slate-600">
                Fill out the form below and our team will get back to you shortly.
              </p>
            </div>

            <form ref={form} onSubmit={sendEmail} className="grid gap-5">
              <div>
                <label className="text-sm font-medium text-slate-700 flex items-center gap-2 mb-2">
                  Full name
                </label>

                <input
                  name="user_name"
                  required
                  className="w-full p-4 border border-slate-300 rounded-xl bg-white focus:outline-none focus-visible:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 active:border-orange-500 transition-colors duration-150"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700 flex items-center gap-2 mb-2">
                  Email address
                </label>

                <input
                  name="user_email"
                  type="email"
                  required
                  className="w-full p-4 border border-slate-300 rounded-xl bg-white focus:outline-none focus-visible:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 active:border-orange-500 transition-colors duration-150"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700 flex items-center gap-2 mb-2">
                  Message
                </label>

                <textarea
                  name="message"
                  required
                  className="w-full p-4 border border-slate-300 rounded-xl bg-white h-44 focus:outline-none focus-visible:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 active:border-orange-500 transition-colors duration-150"
                  placeholder="How can we help?"
                ></textarea>
              </div>

              <div className="flex items-center gap-4 flex-wrap pt-2">
                <button
                  type="submit"
                  className="px-8 py-3 bg-orange-600 text-white font-semibold rounded-full shadow-lg shadow-orange-500/20 hover:bg-orange-700 hover:-translate-y-0.5 transition-all duration-200"
                >
                  Send Message
                </button>

                {status === 'SENT' && (
                  <span className="text-green-700 font-medium">
                    Message sent. Thank you!
                  </span>
                )}

                {status === 'ERROR' && (
                  <span className="text-red-700 font-medium">
                    Error sending message.
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}