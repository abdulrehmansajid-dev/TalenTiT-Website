import React from 'react'
import ceo from '../assets/ceo.jpeg'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-primary-700">Who We Are</h2>
        <p className="mt-4 text-gray-600">We are Training & HR Consultants specialized in providing Hospitality Industry's Training, Talent Acquisition and Talent Management Solutions. Our team brings decades of experience working with top hospitality brands across the GCC.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg bg-primary-700 text-white">
            <h3 className="font-semibold">Training & L&D</h3>
            <p className="mt-2 text-sm">Bespoke training programs including soft skills, leadership development, and operational upskilling delivered on-site or as open workshops.</p>
          </div>
          <div className="p-6 rounded-lg bg-primary-700 text-white">
            <h3 className="font-semibold">HR Outsourcing</h3>
            <p className="mt-2 text-sm">Outsourcing of HR and L&D functions, recruitment, and performance management solutions tailored for hospitality operations.</p>
          </div>
          <div className="p-6 rounded-lg bg-primary-700 text-white">
            <h3 className="font-semibold">Quality & Audit</h3>
            <p className="mt-2 text-sm">Service audits, mystery shopping and QA programs designed to measure and elevate guest satisfaction.</p>
          </div>
        </div>

        <div className="mt-10 bg-primary-50 rounded-lg p-6 flex flex-col md:flex-row items-center gap-6">
          <img src={ceo} alt="CEO Zamir A. Abbasi" className="w-32 h-32 object-cover rounded-full shadow-md" />
          <div>
            <h3 className="text-lg font-semibold text-primary-700">Zamir A. Abbasi — CEO & Founder</h3>
            <p className="text-gray-700 mt-2">A Master Degree holder in HRM with two decades of experience heading HR & Training Departments for top hospitality brands including Hyatt, Ritz Carlton, IHG, Radisson Blu and Millennium Hotels across the GCC. Certified hospitality trainer and award winner in HR & Training.</p>
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg bg-white/60">
            <h4 className="font-semibold">Human Insight</h4>
            <p className="text-sm text-gray-600 mt-2">We combine hospitality expertise with people-first assessment and behavioral insights.</p>
          </div>
          <div className="p-6 rounded-lg bg-white/60">
            <h4 className="font-semibold">AI & Innovation</h4>
            <p className="text-sm text-gray-600 mt-2">Lightweight analytics and modern assessment tools to streamline recruitment and training outcomes.</p>
          </div>
          <div className="p-6 rounded-lg bg-white/60">
            <h4 className="font-semibold">Operational Excellence</h4>
            <p className="text-sm text-gray-600 mt-2">Practical training and QA processes that improve guest satisfaction and operational KPIs.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
