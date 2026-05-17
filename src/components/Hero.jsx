import React from 'react'

export default function Hero() {
  const bg = 'https://images.unsplash.com/photo-1501117716987-c8e3c5b9f6c6?w=1600&q=80&auto=format&fit=crop'
  return (
    <>
    <section id="home" className="pt-24 pb-16 min-h-[86vh] flex items-center text-white bg-hero relative overflow-hidden" style={{ backgroundImage: `linear-gradient(120deg, rgba(2, 9, 25, 0.94) 0%, rgba(7, 37, 75, 0.82) 56%, rgba(211, 84, 0, 0.24) 100%), url(${bg})` }}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.10),transparent_34%)] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center relative z-10">
        <div className="fade-in-up max-w-2xl">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/8 border border-white/10 backdrop-blur text-xs tracking-[0.24em] uppercase text-white/80">
            TalenTiT Training & HR consultants
          </div>
          <h1 className="mt-6 text-5xl md:text-6xl font-semibold leading-[0.92] text-white">Training & HR consultants for hospitality excellence.</h1>
          <p className="mt-5 text-white/84 max-w-xl text-lg leading-8">Recruitment, training and HR outsourcing for hotels, restaurants and lifestyle brands that want clear service standards and measurable guest impact.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#roles" className="inline-flex items-center px-6 py-3 bg-accent-500 text-white rounded-full shadow-lg shadow-accent-500/20 hover:bg-accent-600 transition">Open Roles</a>
            <a href="#contact" className="inline-flex items-center px-6 py-3 border border-white/25 bg-white/7 text-white rounded-full hover:bg-white/12 transition">Contact Us</a>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="glass-card rounded-[2rem] p-4 shadow-2xl shadow-black/20">
            <img loading="lazy" src="https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=1200&q=80&auto=format&fit=crop" alt="hotel interior" className="w-full h-[26rem] object-cover rounded-[1.5rem] brightness-[0.97]" />
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-primary-950/96 p-4 border border-white/10">
                <div className="text-accent-300 text-sm uppercase tracking-[0.18em]">Human Insight</div>
                <div className="mt-1 text-sm text-white/84">People-first recruitment and hospitality training.</div>
              </div>
              <div className="rounded-2xl bg-accent-600 p-4">
                <div className="text-white text-sm uppercase tracking-[0.18em]">AI Innovation</div>
                <div className="mt-1 text-sm text-white/92">Practical tools for sharper hiring and learning.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
