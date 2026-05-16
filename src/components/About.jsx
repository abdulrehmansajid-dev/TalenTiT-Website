import React from 'react'
import ceo from '../assets/ceo.jpeg'

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,9,25,0.03),rgba(211,84,0,0.06))]" />
      <div className="absolute inset-y-0 right-0 w-1/3 bg-[url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=80&auto=format&fit=crop')] bg-cover bg-center opacity-10 hidden xl:block" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <span className="inline-flex px-3 py-1 rounded-full bg-primary-950 text-white text-xs tracking-[0.2em] uppercase">About TalenTiT</span>
          <h2 className="mt-4 text-4xl font-semibold text-primary-950 leading-tight">Who We Are</h2>
          <p className="mt-4 text-gray-700 text-lg leading-8">We are Training & HR Consultants specialized in providing hospitality industry training, talent acquisition and talent management solutions. Our team brings decades of experience working with top hospitality brands across the GCC.</p>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-primary-950 text-white shadow-xl shadow-primary-950/10">
            <h3 className="font-semibold">Training & L&D</h3>
            <p className="mt-2 text-sm">Bespoke training programs including soft skills, leadership development, and operational upskilling delivered on-site or as open workshops.</p>
          </div>
          <div className="p-6 rounded-3xl bg-primary-900 text-white shadow-xl shadow-primary-950/10">
            <h3 className="font-semibold">HR Outsourcing</h3>
            <p className="mt-2 text-sm">Outsourcing of HR and L&D functions, recruitment, and performance management solutions tailored for hospitality operations.</p>
          </div>
          <div className="p-6 rounded-3xl bg-accent-500 text-white shadow-xl shadow-accent-500/10">
            <h3 className="font-semibold">Quality & Audit</h3>
            <p className="mt-2 text-sm">Service audits, mystery shopping and QA programs designed to measure and elevate guest satisfaction.</p>
          </div>
        </div>

        <div className="mt-10 grid lg:grid-cols-[280px_1fr] gap-6 items-center rounded-[2rem] p-6 md:p-8 bg-white/80 border border-white/70 shadow-2xl shadow-primary-950/5 backdrop-blur">
          <div className="rounded-[1.5rem] overflow-hidden bg-primary-950">
            <img src={ceo} alt="CEO Zamir A. Abbasi" className="w-full h-[320px] object-cover object-center" />
          </div>
          <div>
            <span className="inline-flex px-3 py-1 rounded-full bg-accent-500/10 text-accent-500 text-xs tracking-[0.2em] uppercase">Leadership</span>
            <h3 className="mt-3 text-2xl md:text-3xl font-semibold text-primary-950">Zamir A. Abbasi — CEO & Founder</h3>
            <p className="text-gray-700 mt-3 leading-7">A Master Degree holder in HRM with two decades of experience heading HR & Training Departments for top hospitality brands including Hyatt, Ritz Carlton, IHG, Radisson Blu and Millennium Hotels across the GCC. Certified hospitality trainer and award winner in HR & Training.</p>
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-white/80 border border-white/80 shadow-lg shadow-primary-950/5">
            <h4 className="font-semibold text-primary-950 text-xl">Human Insight</h4>
            <p className="text-sm text-gray-600 mt-2 leading-6">We combine hospitality expertise with people-first assessment and behavioral insights.</p>
          </div>
          <div className="p-6 rounded-3xl bg-white/80 border border-white/80 shadow-lg shadow-primary-950/5">
            <h4 className="font-semibold text-primary-950 text-xl">AI & Innovation</h4>
            <p className="text-sm text-gray-600 mt-2 leading-6">Lightweight analytics and modern assessment tools to streamline recruitment and training outcomes.</p>
          </div>
          <div className="p-6 rounded-3xl bg-white/80 border border-white/80 shadow-lg shadow-primary-950/5">
            <h4 className="font-semibold text-primary-950 text-xl">Operational Excellence</h4>
            <p className="text-sm text-gray-600 mt-2 leading-6">Practical training and QA processes that improve guest satisfaction and operational KPIs.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
