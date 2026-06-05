import React from 'react'
import managerPhoto from '../assets/Support Team/Manager (International Recruitment & Contracts).jpeg'
import itSpecialistPhoto from '../assets/Support Team/IT & E-Commerce Specialist.jpeg'

const teamMembers = [
  {
    name: 'Ahsan Abbasi',
    role: 'Manager',
    subtitle: 'International Recruitment & Contracts',
    image: managerPhoto,
  },
  {
    name: 'Abdul Rehman Sajid',
    role: 'IT & E-Commerce Specialist',
    subtitle: 'Digital Operations',
    image: itSpecialistPhoto,
  },
]

export default function SupportTeam() {
  return (
    <section
      id="support-team"
      className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-slate-100"
    >
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-orange-200/40 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-slate-300/30 blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 py-14 md:py-16">
        <div className="max-w-3xl mx-auto text-center mb-9">
          <p className="text-xs uppercase tracking-[0.3em] text-orange-700 font-semibold">
            Support Team
          </p>

          <h2 className="mt-3 section-title font-semibold">
            Meet Our Support Team
          </h2>

          <p className="mt-4 section-text text-base md:text-lg mx-auto max-w-2xl">
            Supporting recruitment, contracts, digital operations and technology-driven service delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 sm:gap-6 max-w-3xl mx-auto">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="group rounded-[1.75rem] bg-white/90 backdrop-blur border border-orange-100 px-6 py-7 text-center shadow-lg shadow-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-2xl hover:shadow-orange-500/10"
            >
              <div className="mx-auto h-28 w-28 sm:h-32 sm:w-32 overflow-hidden rounded-full border-4 border-orange-100 bg-slate-100 shadow-md">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="mx-auto mt-5 h-1 w-10 rounded-full bg-orange-600" />

              <h3 className="mt-4 text-xl font-semibold leading-tight text-slate-950">
                {member.name}
              </h3>

              <p className="mt-2 text-sm font-semibold text-slate-700">
                {member.role}
              </p>

              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-700 leading-5">
                {member.subtitle}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}