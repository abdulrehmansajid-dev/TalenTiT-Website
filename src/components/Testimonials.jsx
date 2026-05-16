import React from 'react'

const logos = [
  'https://via.placeholder.com/160x80?text=Client+1',
  'https://via.placeholder.com/160x80?text=Client+2',
  'https://via.placeholder.com/160x80?text=Client+3',
  'https://via.placeholder.com/160x80?text=Client+4'
]

const quotes = [
  { name: 'General Manager, ABC Hotel', quote: 'TalenTiT transformed our training approach — measurable improvements in guest satisfaction.' },
  { name: 'HR Director, Seaside Resort', quote: 'Their recruitment and L&D services are tailored and effective.' }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-primary-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-primary-500">Clients & Testimonials</h2>
          <p className="mt-3 text-gray-600">Trusted by hospitality businesses across the GCC.</p>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="col-span-2 grid gap-4">
            {quotes.map((q, i) => (
              <div key={i} className="p-4 bg-white rounded shadow">
                <div className="text-gray-700">“{q.quote}”</div>
                <div className="mt-2 text-sm text-gray-500">— {q.name}</div>
              </div>
            ))}
          </div>

          <div className="col-span-1 flex flex-col items-center justify-center bg-white rounded shadow p-6">
            <h3 className="font-semibold text-primary-700">Organizations We Transformed</h3>
            <ul className="mt-3 text-gray-600 text-sm list-disc list-inside">
              <li>Hotels & Resorts: UAE, Qatar, Bahrain & Saudi Arabia</li>
              <li>Restaurants & Clubs: UAE, Qatar & Bahrain</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          {logos.map((l, i) => (
            <img key={i} src={l} alt={`logo-${i}`} className="mx-auto" />
          ))}
        </div>
      </div>
    </section>
  )
}
