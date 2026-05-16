import React from 'react'

export default function Hero() {
  return (
    <section id="home" className="pt-24 min-h-[72vh] flex items-center bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-700">Welcome to TalenTiT Hospitality</h1>
          <p className="mt-4 text-gray-600 max-w-xl">Providing best-in-class hospitality staffing, training and HR solutions. Explore our services or send feedback using the form below.</p>
          <div className="mt-6 flex gap-4">
            <a href="#roles" className="inline-block px-6 py-3 bg-accent-500 text-white rounded-md shadow hover:bg-accent-600">Open Roles</a>
            <a href="#contact" className="inline-block px-6 py-3 border border-primary-500 text-primary-500 rounded-md hover:bg-primary-50">Contact Us</a>
          </div>
        </div>
        <div className="flex-1">
          <img loading="lazy" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80" alt="hotel" className="w-full rounded-lg shadow-lg object-cover max-h-80" />
        </div>
      </div>
    </section>
  )
}
