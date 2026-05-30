import React from 'react'
import SectionHeader from './SectionHeader'

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
  '../assets/Hotels&Resorts/The Ritz-Carlton.png',
  '../assets/Hotels&Resorts/IHG Hotels & Resorts.png',
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

const logos = orderedPaths.map((p) => logosMap[p]).filter(Boolean)

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-3">
            <SectionHeader
              title="Organizations We Transformed"
              description="Selected hospitality, dining, and lifestyle partners that have benefited from our recruitment, training, and HR support."
              className="max-w-3xl"
            />
          </div>

          <aside className="lg:col-span-2 rounded-2xl bg-black text-white p-6 shadow-lg border border-slate-800">
  <h3 className="text-xl font-semibold text-white">
    Global Reach
  </h3>

  <ul className="mt-4 space-y-3 text-sm text-slate-200">
    <li>• Hotels & Resorts: UAE, Qatar, Bahrain & Saudi Arabia</li>
    <li>• Restaurants & Clubs: UAE, Qatar & Bahrain</li>
    <li>• Real Estate, Educational and Lifestyle Group</li>
  </ul>

  <div className="mt-5 h-px bg-white/20" />

  <p className="mt-4 text-sm leading-6 text-slate-300">
    Each engagement is tailored to the operational culture, service standards
    and hiring needs of the business.
  </p>
</aside>
        </div>

        <div className="mt-12 rounded-3xl bg-slate-50 p-6 md:p-8 border border-slate-200 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-orange-700 font-semibold">
                Client Network
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-primary-950">
                Brands and organizations we have supported
              </h3>
            </div>

            <div className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Hotels • Restaurants • Clubs • Real Estate
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {logos.map((src, index) => (
              <LogoCard key={`${index}-${src}`} src={src} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function LogoCard({ src, index }) {
  return (
    <div className="h-36 md:h-40 rounded-2xl bg-white border border-slate-200 p-5 flex items-center justify-center shadow-sm hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/80 transition-all duration-300">
      <img
        src={src}
        alt={`Client logo ${index + 1}`}
        className="max-h-24 md:max-h-32 max-w-[90%] object-contain"
        loading="lazy"
      />
    </div>
  )
}