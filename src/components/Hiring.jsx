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
      <div className="site-container site-section">
        <SectionHeader
          title="Hiring & Selection"
          description="Recruitment services tailored for hospitality organisations that need the right people, the right mindset and the right service culture."
        />

        <div className="section-content overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-md shadow-[#04172f]/5">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative overflow-hidden bg-[#04172f] p-8 md:p-10 text-white">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#ea580c]/20 blur-3xl" />
              <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-white/5 blur-3xl" />

              <div className="relative">
                <span className="inline-flex rounded-full bg-[#ea580c]/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#ea580c] ring-1 ring-[#ea580c]/20">
                  Recruitment Services
                </span>

                <h2 className="section-title section-title-on-dark">
                  Talent Hunt & Selection
                </h2>

                <p className="mt-4 text-sm md:text-base text-white/80 leading-[1.7]">
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
                  className="btn-primary mt-8"
                >
                  Discuss Hiring Needs
                </Link>
              </div>
            </div>

            <div className="p-8 md:p-10">
              <p className="eyebrow">
                How We Support Your Recruitment
              </p>

              <div className="mt-7 grid gap-5">
                {recruitmentPoints.map((item, index) => (
                  <div key={item.title} className="group flex h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-[#04172f]/5 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-[#ea580c]/35 hover:shadow-md hover:shadow-[#04172f]/8">
                    <div className="flex gap-4">
                      <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-700">
                        {String(index + 1).padStart(2, '0')}
                      </div>

                      <div>
                        <h3 className="card-title text-[1.05rem]">
                          {item.title}
                        </h3>

                        <p className="card-copy mt-2">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-orange-100 bg-orange-50 p-5">
                <p className="eyebrow">
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
          <p className="eyebrow">
            Talent Development Partner
          </p>

          <h3 className="section-title">
            Your partner in building world-class teams
          </h3>

          <p className="section-text mx-auto">
            From executive search to culture-fit hiring, we help organisations attract,
            select and retain exceptional hospitality talent.
          </p>
        </div>
      </div>
    </section>
  )
}
