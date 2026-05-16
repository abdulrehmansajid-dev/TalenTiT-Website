import React from 'react'

const hotelLogos = import.meta.glob('../assets/Hotels&Resorts/*.{png,jpg,jpeg,svg}', {
  eager: true,
  import: 'default'
})

const restaurantLogos = import.meta.glob('../assets/Restaurants, Clubs & Real Estate/*.{png,jpg,jpeg,svg}', {
  eager: true,
  import: 'default'
})

const logos = [
  ...Object.values(hotelLogos),
  ...Object.values(restaurantLogos)
]

const quotes = [
  {
    name: 'General Manager, ABC Hotel',
    quote: 'TalenTiT transformed our training approach, helping us improve service quality and guest satisfaction.'
  },
  {
    name: 'HR Director, Seaside Resort',
    quote: 'Their recruitment and L&D support is practical, professional, and tailored to hospitality operations.'
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-primary-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&q=80&auto=format&fit=crop')] bg-cover bg-center opacity-[0.04]" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 text-xs tracking-widest uppercase rounded-full bg-primary-950 text-white">
            Recruitment Expertise
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold leading-tight text-primary-950">
            Companies Transformed with Our Recruitment Expertise
          </h2>
          <p className="mt-4 text-gray-700 leading-7">
            Trusted by hotels, restaurants, clubs and real estate groups across the GCC.
          </p>
        </div>

        <div className="mt-10 grid lg:grid-cols-5 gap-6 items-start">
          <div className="lg:col-span-3 grid gap-4">
            {quotes.map((q) => (
              <div key={q.name} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-lg shadow-primary-950/5">
                <p className="text-slate-700 text-base leading-7">“{q.quote}”</p>
                <p className="mt-3 text-sm text-accent-600 font-medium">— {q.name}</p>
              </div>
            ))}
          </div>

          <aside className="lg:col-span-2 rounded-[2rem] bg-primary-950 text-white p-6 shadow-2xl shadow-black/20 border border-primary-900/40">
            <h3 className="font-semibold text-xl text-white">Organizations We Transformed</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/80 list-disc list-inside">
              <li>Hotels & Resorts: UAE, Qatar, Bahrain & Saudi Arabia</li>
              <li>Restaurants & Clubs: UAE, Qatar & Bahrain</li>
              <li>Real Estate and Lifestyle Groups</li>
            </ul>
            <div className="mt-5 h-px bg-white/15" />
            <p className="mt-4 text-sm text-white/70">
              Each engagement is tailored to the operational culture, service standards and hiring needs of the business.
            </p>
          </aside>
        </div>

        <div className="mt-10 rounded-[2rem] bg-white p-6 md:p-8 border border-slate-200 shadow-2xl shadow-primary-950/5">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <div>
              <h3 className="text-xl font-semibold text-primary-950">Client Portfolio</h3>
              <p className="text-sm text-gray-600">Selected hospitality logos from the companies we transformed.</p>
            </div>
            <div className="text-xs uppercase tracking-[0.2em] text-accent-600">Hotels, Restaurants, Clubs, Real Estate</div>
          </div>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {logos.map((src, index) => (
              <div key={`${index}-${src}`} className="bg-slate-50 rounded-2xl p-4 h-24 flex items-center justify-center shadow-md hover:-translate-y-1 transition-transform duration-300 border border-slate-200">
                <img src={src} alt={`Client logo ${index + 1}`} className="max-h-14 max-w-full object-contain" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
