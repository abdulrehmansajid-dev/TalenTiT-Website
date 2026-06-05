import React from 'react'
import SectionHeader from './SectionHeader'

const contactEmail = 'info@talentithospitality.com'
const cvSubject = encodeURIComponent('CV Submission - TalenTiT Open Roles')
const enquirySubject = encodeURIComponent('Open Roles Enquiry')
const cvBody = encodeURIComponent('Hello TalenTiT Team,\n\nI would like to submit my CV for your open hospitality roles.\n\nBest regards,')

const roles = [
  {
    title: 'Director of Sales & Marketing',
    category: 'Sales & Marketing',
    desc: 'Develops strategic marketing campaigns, manages corporate accounts, and leads sales initiatives to improve occupancy, banquet bookings, and overall brand visibility.',
    saudiOnly: true
  },
  {
    title: 'Director of Finance',
    category: 'Finance',
    desc: 'Oversees budgets, revenue forecasting, compliance, financial reporting, and cost-control measures to support strong operational profitability.',
    saudiOnly: true
  },
  {
    title: 'Director of Human Resources',
    category: 'Human Resources',
    desc: 'Leads recruitment, employee relations, workforce training, compliance, and retention strategies while supporting a strong service culture.',
    saudiOnly: true
  },
  {
    title: 'Director of Revenue Management',
    category: 'Revenue Management',
    desc: 'Uses market trends, analytics, demand forecasting, and pricing strategies to maximize revenue across all distribution channels.',
    saudiOnly: true
  },
  {
    title: 'Front Office Manager',
    category: 'Front Office',
    desc: 'Manages check-ins, guest relations, concierge services, guest escalations, and coordination with housekeeping for smooth operations.',
    saudiOnly: true
  },
  {
    title: 'Executive Housekeeping',
    category: 'Housekeeping',
    desc: 'Oversees cleanliness, room standards, public areas, laundry coordination, inventory control, hygiene, and brand presentation standards.'
  },
  {
    title: 'Security Manager',
    category: 'Security',
    desc: 'Leads hotel safety operations, emergency procedures, surveillance systems, guest protection, staff safety, and regulatory compliance.',
    saudiOnly: true
  },
  {
    title: 'Director of Food & Beverage',
    category: 'Food & Beverage',
    desc: 'Oversees restaurants, bars, banquets, room service, budgets, menus, service quality, and profitability across culinary outlets.'
  },
  {
    title: 'Executive Chef',
    category: 'Culinary',
    desc: 'Leads kitchen operations, menu development, food preparation, sourcing, kitchen safety, team management, and culinary presentation standards.'
  }
]

export default function Roles() {
  return (
    <section id="roles" className="relative overflow-hidden bg-white py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.08),transparent_35%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full bg-amber-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
            Career Opportunities
          </span>

          <SectionHeader
            title="Open Roles"
            description="Explore current hospitality openings across front office, operations, sales, finance, human resources, security, and culinary teams."
            className="mt-5"
          />
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {roles.map((role, index) => (
            <article
              key={role.title}
              className="group relative flex min-h-[285px] flex-col rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-xl"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-amber-600">
                    {String(index + 1).padStart(2, '0')} / {role.category}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold leading-snug text-slate-950">
                    {role.title}
                  </h3>
                </div>

                <span className="shrink-0 rounded-full bg-orange-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-orange-600">
                  Hiring
                </span>
              </div>

              <p className="mt-5 flex-1 text-sm leading-7 text-slate-600">
                {role.desc}
              </p>

              {role.saudiOnly && (
                <div className="mt-6">
                  <span className="inline-flex rounded-full bg-amber-100 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-700">
                    Saudi Nationals
                  </span>
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <p className="text-lg font-semibold text-slate-950">
            Interested in joining our hospitality network?
          </p>

          <p className="mt-3 text-sm leading-7 text-slate-600">
            Submit your CV and our team will review your profile for suitable opportunities.
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`mailto:${contactEmail}?subject=${cvSubject}&body=${cvBody}`}
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-amber-600"
            >
              Submit Your CV
            </a>

            <a
              href={`mailto:${contactEmail}?subject=${enquirySubject}`}
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-8 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-amber-500 hover:text-amber-600"
            >
              Email Enquiry
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}