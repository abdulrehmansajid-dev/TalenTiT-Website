import React from 'react'

export default function Hero() {
  const bg = 'https://images.unsplash.com/photo-1501117716987-c8e3c5b9f6c6?w=1600&q=80&auto=format&fit=crop'
  return (
    <section id="home" className="pt-24 min-h-[72vh] flex items-center text-white bg-hero" style={{ backgroundImage: `linear-gradient(rgba(3,6,23,0.6), rgba(3,6,23,0.6)), url(${bg})` }}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1 fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-white">TalenTiT Hospitality</h1>
          <p className="mt-4 text-gray-200 max-w-xl">World-class hospitality training, HR outsourcing and talent solutions. We help hotels and restaurants build teams that deliver exceptional guest experiences.</p>
          <div className="mt-6 flex gap-4">
            <a href="#roles" className="inline-block px-6 py-3 bg-accent-500 text-white rounded-md shadow hover:bg-accent-600">Open Roles</a>
            <a href="#contact" className="inline-block px-6 py-3 border border-white/30 text-white rounded-md hover:bg-white/5">Contact Us</a>
          </div>
        </div>
        <div className="flex-1 hidden md:block">
          <div className="w-full rounded-lg shadow-lg overflow-hidden">
            <img loading="lazy" src="https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=1200&q=80&auto=format&fit=crop" alt="hotel interior" className="w-full h-64 object-cover" />
          </div>
        </div>
      </div>
    </section>

    {/* Banner image with custom site name (user-provided) */}
    <div className="mx-auto max-w-6xl px-6 mt-8">
      <div className="rounded-lg overflow-hidden shadow-lg">
        <img src="/src/assets/banner.jpeg" alt="Site banner" className="w-full h-40 object-cover" />
      </div>
    </div>
  )
}
