import React from 'react'

const logos = [
  'https://via.placeholder.com/120x60?text=Logo+1',
  'https://via.placeholder.com/120x60?text=Logo+2',
  'https://via.placeholder.com/120x60?text=Logo+3',
  'https://via.placeholder.com/120x60?text=Logo+4'
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-semibold text-primary-700">Clients & Testimonials</h2>
        <p className="mt-3 text-gray-600">Trusted by hospitality businesses and event organisers.</p>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          {logos.map((l, i) => (
            <img key={i} src={l} alt={`logo-${i}`} className="mx-auto" />
          ))}
        </div>
      </div>
    </section>
  )
}
