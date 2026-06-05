import React from 'react'
import heroBg from '../assets/hero-bg.avif'

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-20 pb-14 sm:pb-16 min-h-[78vh] flex items-center text-white bg-hero relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(120deg, rgba(2, 9, 25, 0.82) 0%, rgba(7, 37, 75, 0.78) 50%, rgba(211, 84, 0, 0.28) 100%), url(${heroBg})`,
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_36%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-6 relative z-10 w-full">
        <div className="max-w-3xl fade-in-up">
          <span className="inline-flex px-4 py-2 rounded-full bg-white/10 border border-white/20 text-[11px] sm:text-xs tracking-[0.2em] uppercase text-white/90">
            TalenTiT Training & HR consultants
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold leading-[0.98] text-white max-w-[11ch] sm:max-w-none">
            Building High-Performance Team.
          </h1>

          <p className="mt-5 text-white/90 text-base sm:text-lg leading-8 max-w-2xl">
            We provide recruitment, training, and HR outsourcing solutions designed for hotels, restaurants, and hospitality groups in the Middle East.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-5">
            <a
              href="#services"
              className="inline-flex w-full sm:w-auto justify-center items-center px-6 py-3 bg-white text-primary-900 rounded-full font-semibold hover:bg-slate-100 transition"
            >
              Other Services
            </a>

            <a
              href="#roles"
              className="inline-flex w-full sm:w-auto justify-center items-center px-6 py-3 bg-accent-600 text-white rounded-full font-semibold hover:bg-accent-700 transition"
            >
              Open Roles
            </a>

            <a
              href="#contact"
              className="inline-flex w-full sm:w-auto justify-center items-center px-6 py-3 border border-white/30 text-white rounded-full hover:bg-white/10 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}