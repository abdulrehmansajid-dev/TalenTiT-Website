import React from 'react'
import { Link } from 'react-router-dom'
import SectionHeader from './SectionHeader'

const recruitmentPoints = [
  {
    title: 'Hospitality Specialists',
    text: 'More than 25 years of experience hiring hospitality professionals at every level with international screening standards.',
  },
  {
    title: 'Strategic Retention',
    text: 'We focus on long-term fit from the first point of contact, helping clients attract talent that stays and grows with the organization.',
  },
  {
    title: 'Proven Expertise',
    text: 'We combine hospitality industry knowledge with culture-fit hiring to match candidates with your service philosophy.',
  },
]

const recruitmentCapabilities = [
  'Executive Search',
  'Front Office Hiring',
  'Food & Beverage Talent',
  'Housekeeping Teams',
  'Sales & Marketing Roles',
  'HR & Finance Positions',
]

export default function Hiring() {
  return (
    <section id="hiring" className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <SectionHeader
          title="Hiring & Selection"
          description="Recruitment services tailored for hospitality organisations that need the right people, the right mindset and the right service culture."
          className="max-w-3xl"
        />

        <div className="mt-12 overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-xl shadow-slate-900/5">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative overflow-hidden bg-slate-950 p-8 md:p-10 text-white">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-orange-500/20 blur-3xl" />
              <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-white/5 blur-3xl" />

              <div className="relative">
                <span className="inline-flex rounded-full bg-orange-500/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-orange-300 ring-1 ring-orange-400/20">
                  Recruitment Services
                </span>

                <h2 className="mt-6 text-3xl md:text-4xl font-semibold leading-tight">
                  Talent Hunt & Selection
                </h2>

                <p className="mt-5 text-slate-300 leading-8">
                  We understand the value of a precise talent hunt. With over two decades of recruitment expertise, we identify candidates whose skills, behaviour and service mindset align with your organisation.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-3xl font-semibold text-white">25+</p>
                    <p className="mt-1 text-xs uppercase tracking-widest text-slate-400">
                      Years Expertise
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-3xl font-semibold text-white">360°</p>
                    <p className="mt-1 text-xs uppercase tracking-widest text-slate-400">
                      Hiring Support
                    </p>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="mt-8 inline-flex rounded-full bg-orange-600 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-500/20"
                >
                  Discuss Hiring Needs
                </Link>
              </div>
            </div>

            <div className="p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-600">
                How We Support Your Recruitment
              </p>

              <div className="mt-7 grid gap-5">
                {recruitmentPoints.map((item, index) => (
                  <div key={item.title} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/10">
                    <div className="flex gap-4">
                      <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-700">
                        {String(index + 1).padStart(2, '0')}
                      </div>

                      <div>
                        <h3 className="font-semibold text-primary-950">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-orange-100 bg-orange-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-700">
                  Recruitment Coverage
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {recruitmentCapabilities.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-orange-200 bg-white px-3 py-1 text-xs font-medium text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 rounded-3xl bg-orange-50 px-6 py-10 md:p-12 text-center shadow-xl shadow-orange-100/80 border border-orange-200">
          <p className="text-xs uppercase tracking-[0.3em] text-orange-700 font-semibold">
            Talent Development Partner
          </p>

          <h3 className="mt-4 text-3xl md:text-4xl font-semibold text-primary-950">
            Your partner in building world-class teams
          </h3>

          <p className="mt-4 max-w-2xl mx-auto text-slate-600 leading-7">
            From executive search to culture-fit hiring, we help organisations attract,
            select and retain exceptional hospitality talent.
          </p>
        </div>
      </div>
    </section>
  )
}
