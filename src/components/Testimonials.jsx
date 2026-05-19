import React from 'react'

const hotelLogos = import.meta.glob('../assets/Hotels&Resorts/*.{png,jpg,jpeg,svg}', {
  eager: true,
  import: 'default'
})

const restaurantLogos = import.meta.glob('../assets/Restaurants, Clubs & Real Estate/*.{png,jpg,jpeg,svg}', {
  eager: true,
  import: 'default'
})

const logosMap = { ...hotelLogos, ...restaurantLogos }

const orderedPaths = [
  '../assets/Hotels&Resorts/Hyatt Regency.jpeg',
  '../assets/Hotels&Resorts/The Ritz-Carlton.jpeg',
  '../assets/Hotels&Resorts/IHG Hotels & Resorts.jpeg',
  '../assets/Hotels&Resorts/Millennium Hotels & Resorts.jpeg',
  '../assets/Hotels&Resorts/Central Hotels & Resorts.png',
  '../assets/Hotels&Resorts/Oceanic Khorfakkan Resort & Spa.png',
  '../assets/Hotels&Resorts/Donatello Hotel Dubai.png',
  '../assets/Hotels&Resorts/Radisson Hotel Group.jpeg',
  '../assets/Hotels&Resorts/Elite Hospitality Group.png',
  '../assets/Restaurants, Clubs & Real Estate/Capital Club.jpeg',
  '../assets/Restaurants, Clubs & Real Estate/Apres Restaurant.jpeg',
  '../assets/Restaurants, Clubs & Real Estate/Em Sherif Restaurant.png',
  '../assets/Restaurants, Clubs & Real Estate/Open Home Properties.png'
]

const logos = orderedPaths.map(p => logosMap[p]).filter(Boolean)

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mt-10 grid lg:grid-cols-5 gap-6 items-start">
          <aside className="lg:col-span-2 rounded-2xl bg-primary-900 text-white p-6 border border-primary-800">
            <h3 className="font-semibold text-xl text-white">Organizations We Transformed</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/80 list-disc list-inside">
              <li>Hotels & Resorts: UAE, Qatar, Bahrain & Saudi Arabia</li>
              <li>Restaurants & Clubs: UAE, Qatar & Bahrain</li>
              <li>Real Estate, Educational and Lifestyle Group</li>
            </ul>
            <div className="mt-5 h-px bg-white/15" />
            <p className="mt-4 text-sm text-white/70">
              Each engagement is tailored to the operational culture, service standards and hiring needs of the business.
            </p>
          </aside>
        </div>

        <div className="mt-10 rounded-2xl bg-slate-200 p-6 md:p-8 border border-slate-200">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <div>
              <h3 className="text-xl font-semibold text-primary-950">Organizations, We Transformed!</h3>
            </div>
            <div className="text-xs uppercase tracking-[0.2em] text-accent-600">Hotels, Restaurants, Clubs, Real Estate</div>
          </div>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {logos.map((src, index) => (
              <div key={`${index}-${src}`} className="bg-white rounded-2xl p-6 h-32 flex items-center justify-center shadow-sm hover:-translate-y-1 transition-transform duration-300 border border-slate-200">
                <img src={src} alt={`Client logo ${index + 1}`} className="max-h-20 max-w-full object-contain" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
