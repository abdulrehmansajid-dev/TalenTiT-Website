import React from 'react'

export default function Hero() {
  const bg = 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1800&q=80&auto=format&fit=crop'
  return (
    <section id="home" className="pt-20 pb-14 min-h-[82vh] flex items-center text-white bg-hero relative overflow-hidden" style={{ backgroundImage: `linear-gradient(120deg, rgba(2, 9, 25, 0.82) 0%, rgba(7, 37, 75, 0.78) 50%, rgba(211, 84, 0, 0.28) 100%), url(${bg})` }}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_36%)] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl fade-in-up">
          <span className="inline-flex px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs tracking-[0.2em] uppercase text-white/90">
            TalenTiT Training & HR consultants
          </span>
          <h1 className="mt-6 text-5xl md:text-6xl font-semibold leading-[0.95] text-white">Building high-performing hospitality teams.</h1>
          <p className="mt-5 text-white/90 text-lg leading-8 max-w-2xl">We provide recruitment, training, and HR outsourcing solutions designed for hotels, restaurants, and hospitality groups that expect service excellence.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#about" className="inline-flex items-center px-6 py-3 bg-white text-primary-900 rounded-full font-semibold hover:bg-slate-100 transition">Explore Services</a>
            <a href="#roles" className="inline-flex items-center px-6 py-3 bg-accent-600 text-white rounded-full font-semibold hover:bg-accent-700 transition">Open Roles</a>
            <a href="#contact" className="inline-flex items-center px-6 py-3 border border-white/30 text-white rounded-full hover:bg-white/10 transition">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  )
}
