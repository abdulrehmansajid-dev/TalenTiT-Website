import React from 'react'
import SectionHeader from './SectionHeader'

const services = [
  {
    number: '01',
    title: 'Service Standards & Quality Audit',
    subtitle: 'Through Mystery Shopping',
    description:
      'Our Mystery Shopping and Quality Audit services provide an objective assessment of your customer experience, service delivery, and brand standards. Trained evaluators anonymously visit your property or business to measure performance against predefined service benchmarks.',
    points: [
      'Guest experience evaluation',
      'Brand standard assessment',
      'Gap analysis and reporting',
      'Actionable improvement recommendations'
    ]
  },
  {
    number: '02',
    title: 'L&D Department Outsourcing',
    subtitle: 'Learning & Development Support',
    description:
      'We offer complete Learning & Development outsourcing solutions for organizations seeking to strengthen employee performance without maintaining an in-house training team. Our experts manage training needs analysis, annual plans, content development, facilitation and performance tracking.',
    points: [
      'Training needs analysis',
      'Annual training planning',
      'Leadership development',
      'Performance tracking'
    ]
  },
  {
    number: '03',
    title: 'Pre-opening / Onboarding Project',
    subtitle: 'Launch & Team Readiness',
    description:
      'Our Pre-opening and Onboarding Project solutions support organizations during business launches, expansions and new property openings. We assist with recruitment coordination, induction programs, operational training, SOP implementation and service culture development.',
    points: [
      'Recruitment coordination',
      'Induction programs',
      'Operational training',
      'SOP implementation'
    ]
  }
]

export default function Services() {
  return (
    <section id="services" className="bg-slate-50">
      <div className="site-container site-section">
        <SectionHeader
          title="Other Services"
          description="Consulting, HR audits, policy design, employee engagement programs and bespoke service offerings."
        />

        <div className="section-content grid lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <article
              key={service.number}
              className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 md:p-7 shadow-sm shadow-[#04172f]/5 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-[#ea580c]/35 hover:shadow-md hover:shadow-[#04172f]/8"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#04172f] text-sm font-semibold text-white">
                  {service.number}
                </span>

                <span className="rounded-full bg-orange-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-orange-700">
                  Service
                </span>
              </div>

              <div className="mt-7">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-700">
                  {service.subtitle}
                </p>

                <h3 className="mt-3 section-title text-[1.65rem] md:text-[1.75rem]">
                  {service.title}
                </h3>

                <p className="mt-4 card-copy">
                  {service.description}
                </p>
              </div>

              <div className="mt-auto space-y-3 pt-6">
                {service.points.map((point) => (
                  <div key={point} className="flex gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-700">
                      ✓
                    </span>

                    <p className="text-sm text-slate-700">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-orange-200 bg-orange-50 px-6 py-10 md:p-12 text-center shadow-xl shadow-orange-100/80">
          <p className="eyebrow">
            Bespoke Support
          </p>

          <h3 className="section-title">
            Flexible solutions for stronger teams and better service
          </h3>

          <p className="section-text mx-auto">
            Whether you need service audits, outsourced training support or launch preparation,
            we design practical solutions around your business goals.
          </p>
        </div>
      </div>
    </section>
  )
}