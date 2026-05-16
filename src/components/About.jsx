import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-primary-700">Who We Are</h2>
        <p className="mt-4 text-gray-600">We are Training & HR Consultants specialized in providing Hospitality Industry's Training, Talent Acquisition and Talent Management Solutions. Our team brings decades of experience working with top hospitality brands across the GCC.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold">Training & L&D</h3>
            <p className="mt-2 text-sm text-gray-600">Bespoke training programs including soft skills, leadership development, and operational upskilling delivered on-site or as open workshops.</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold">HR Outsourcing</h3>
            <p className="mt-2 text-sm text-gray-600">Outsourcing of HR and L&D functions, recruitment, and performance management solutions tailored for hospitality operations.</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold">Quality & Audit</h3>
            <p className="mt-2 text-sm text-gray-600">Service audits, mystery shopping and QA programs designed to measure and elevate guest satisfaction.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
