import React from 'react'
import SectionHeader from './SectionHeader'

const recruitmentPoints = [
  {
    title: 'Hospitality Specialists',
    text: 'More than 25 years of experience hiring hospitality professionals at all levels with international screening standards.'
  },
  {
    title: 'Strategic Retention',
    text: 'We focus on long-term fit from the first point of contact, helping clients attract talent that stays.'
  },
  {
    title: 'Proven Expertise',
    text: 'We combine industry knowledge with culture-fit hiring to match candidates with your service philosophy.'
  }
]

const trainingPoints = [
  {
    title: 'Bespoke Curriculum',
    text: 'Fully customizable programs based on your hotel’s operational needs and culture.'
  },
  {
    title: 'On-Site Excellence',
    text: 'Industry-specific training delivered directly at your property for convenience and impact.'
  },
  {
    title: 'Comprehensive Growth',
    text: 'Programs available as exclusive in-house workshops and open-enrollment sessions.'
  },
  {
    title: 'Elevate Your Standards',
    text: 'From frontline service to leadership, we help improve guest experience and team confidence.'
  },
  {
    title: 'Our Philosophy',
    text: 'Excellence is not an act, but a habit. We help your team build that habit every day.'
  }
]

export default function Hiring() {
  return (
    <section id="hiring" className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <SectionHeader
          title="Hiring & Selection"
          description="Recruitment services and world-class training — tailored for hospitality organisations."
          className="max-w-3xl"
        />

        <div className="mt-12 grid lg:grid-cols-2 gap-8">
          <ServiceCard
            label="Recruitment Services"
            title="Talent Hunt & Selection"
            description="We understand the value of a precise talent hunt. With over two decades of recruitment expertise, we identify candidates whose skills, behavior and service mindset align with your organization."
            points={recruitmentPoints}
          />

          <ServiceCard
            label="Hospitality Training"
            title="World-Class Hospitality Training Programs"
            description="Our training experts bring experience from leading hotel chains and deliver practical programs designed to raise service standards and team performance."
            points={trainingPoints}
          />
        </div>

        <div className="mt-14 rounded-3xl bg-orange-50 px-6 py-10 md:p-12 text-center shadow-xl shadow-orange-100/80 border border-orange-200">
          <p className="text-xs uppercase tracking-[0.3em] text-orange-700 font-semibold">
            Talent Development Partner
          </p>

          <h3 className="mt-4 text-3xl md:text-4xl font-semibold text-primary-950">
            Your partner in building world-class teams
          </h3>

          <p className="mt-4 max-w-2xl mx-auto text-slate-600 leading-7">
            From executive search to hospitality training, we help organizations attract,
            develop and retain exceptional talent.
          </p>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ label, title, description, points }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8 shadow-sm hover:shadow-xl hover:shadow-slate-200/80 transition-all duration-300">
      <span className="inline-flex rounded-full bg-orange-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-orange-700">
        {label}
      </span>

      <h2 className="mt-5 text-2xl md:text-3xl font-semibold text-primary-950">
        {title}
      </h2>

      <p className="mt-4 text-slate-600 leading-7">
        {description}
      </p>

      <div className="mt-7 space-y-5">
        {points.map((item, index) => (
          <div key={index} className="flex gap-4">
            <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-700">
              ✓
            </div>

            <div>
              <h3 className="font-semibold text-primary-950">
                {item.title}
              </h3>

              <p className="mt-1 text-sm leading-6 text-slate-600">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </article>
  )
}