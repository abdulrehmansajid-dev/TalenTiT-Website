import React from 'react'
import ceo from '../assets/ceo_new.jpeg'
import SectionHeader from './SectionHeader'
import coo from '../assets/coo_new_2.jpeg'
import cooOrganizations from '../data/cooOrganizations'

export default function About() {
  const mainServices = [
    {
      title: 'Training & Development',
      description:
        'Bespoke training programs including soft skills, leadership development, and operational upskilling delivered by industry experts.',
    },
    {
      title: 'HR Outsourcing & Recruitment',
      description:
        'Outsourcing of HR and L&D functions, recruitment, and executive search and selection.',
    },
    {
      title: 'Quality & Audit',
      description:
        'Service audits, mystery shopping and QA programs designed to measure and elevate guest satisfaction.',
    },
  ]

  const strengths = [
    {
      title: 'Human Insight',
      description:
        'We combine hospitality expertise with people-first assessment and behavioral insights.',
    },
    {
      title: 'AI & Innovation',
      description:
        'Lightweight analytics and modern assessment tools to streamline recruitment and training outcomes.',
    },
    {
      title: 'Operational Excellence',
      description:
        'Practical training and QA processes that improve guest satisfaction and operational KPIs.',
    },
  ]

  const cooPrograms = [
    {
      title: 'Neuro-Linguistic Programming (NLP)',
      description:
        'As a Certified Trainer of NLP, applying mind science to real-world business and consulting challenges.',
    },
    {
      title: 'Behavioral Change & Programming',
      description:
        'Specialized in Meta Behavioural Programming to drive workforce mindset transformation and human performance.',
    },
    {
      title: 'Hypnosis & Life Coaching',
      description:
        'Certified Trainer in Hypnosis, Life Coaching, and Creating Your Future techniques, credentialed by the American Board of Hypnotherapy and NLP, USA.',
    },
    {
      title: 'Organizational Development',
      description:
        'Over 23 years of experience aligning talent strategy with organizational business outcomes.',
    },
    {
      title: 'Executive & Leadership Coaching',
      description:
        'Tailoring evidence-based solutions for high-profile clients including CEOs, senior military officials, entrepreneurs, medical professionals, and sports stars.',
    },
    {
      title: 'Performance Management',
      description:
        'Driving measurable workforce mindset transformation and structural performance improvements.',
    },
    {
      title: 'Sales Mastery',
      description:
        'Developing and implementing strategic sales frameworks such as Neuro Sales Mastery, delivering up to 40% increase in client sales performance.',
    },
  ]

  return (
    <section id="about" className="site-section bg-white">
      <div className="site-container">
        <SectionHeader
          eyebrow="About TalenTiT"
          title="Who We Are"
          description="We offer a comprehensive suite of services including Leadership Development, Customer Service Training Series, Service Audits, HR & Training Outsourcing and tailored Recruitment Solutions."
        />

        <div className="section-content grid md:grid-cols-3 gap-6">
          {mainServices.map((service) => (
            <div
              key={service.title}
              className="group flex h-full flex-col p-6 rounded-3xl bg-[#04172f] border border-white/10 shadow-lg shadow-[#04172f]/30 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-[#ea580c]/40 hover:shadow-xl hover:shadow-[#04172f]/40"
            >
              <div className="h-1 w-16 bg-[#ea580c] rounded-full mb-6 transition-all duration-300 group-hover:w-24"></div>

              <h3 className="card-title text-white">
                {service.title}
              </h3>

              <p className="mt-3 text-sm text-slate-300 leading-6">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CEO PROFILE */}
        <div className="mt-12 rounded-[1.75rem] bg-slate-50 px-5 py-10 sm:mt-14 sm:px-8 sm:py-12 md:px-10 md:py-14">
          <div
            id="ceo-leadership-hero"
            className="mx-auto grid max-w-5xl items-center gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:gap-5 lg:gap-6"
          >
            {/* Left — text */}
            <div className="order-1 min-w-0">
              <div className="flex items-center gap-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#ea580c]">
                  Leadership Profile
                </p>
                <span className="h-px w-10 shrink-0 bg-[#ea580c] sm:w-12" aria-hidden="true" />
              </div>

              <h2 className="profile-name mt-3.5 text-[#04172f] md:mt-4">
                Zamir A. Abbasi
              </h2>

              <p className="mt-3 max-w-md text-[12px] font-medium uppercase leading-[1.65] tracking-[0.1em] text-slate-500 sm:text-[12.5px] sm:tracking-[0.11em]">
                CEO & Founder ·
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                People, Leadership & Organizational{'\u00A0'}Excellence
              </p>

              <p className="mt-4 max-w-lg text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8">
                Driving positive change through people, purpose and practical leadership strategies.
              </p>

              <div className="mt-4 flex flex-wrap gap-2.5">
                <ProfileTag color="orange">Certified Trainer</ProfileTag>
                <ProfileTag color="blue">Leadership Coach</ProfileTag>
                <ProfileTag color="slate">OD Specialist</ProfileTag>
              </div>
            </div>

            {/* Right — portrait */}
            <div className="relative order-2 mx-auto w-full max-w-[360px] sm:max-w-[400px] md:max-w-none">
              <div
                className="pointer-events-none absolute -bottom-2.5 -right-2.5 h-20 w-20 rounded-2xl bg-sky-100/65 sm:-bottom-3.5 sm:-right-3.5 sm:h-24 sm:w-24"
                aria-hidden="true"
              />

              <div className="relative overflow-hidden rounded-2xl bg-white shadow-[0_14px_32px_rgba(4,23,47,0.10)] ring-1 ring-[#ea580c]/15">
                <img
                  src={ceo}
                  alt="Zamir A. Abbasi"
                  className="block h-auto w-full"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-8 border-t border-slate-100 pt-12 lg:mt-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch lg:gap-10 lg:pt-14">
            <div>
              <SectionDivider title="Executive Summary" />

              <div className="space-y-4">
                <p className="body-copy">
                  With more than 25 years of progressive experience leading Human Resources and Learning & Development functions across global hospitality brands and corporate organizations, he brings a unique combination of strategic leadership, operational excellence, and people development expertise.
                </p>

                <p className="body-copy">
                  As a Certified Trainer and Leadership Coach, his professional journey reflects a strong commitment to innovation, talent development, and organizational growth.
                </p>

                <p className="body-copy">
                  Throughout his career, he has successfully led HR and L&D initiatives for renowned international hospitality brands across the Middle East, helping organizations build world-class leaders and high-performing teams.
                </p>

                <p className="body-copy">
                  His expertise spans leadership development, organizational development, soft skills training, talent acquisition, talent management, and workforce transformation.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-[#04172f] p-6 text-white sm:p-7">
              <div className="mb-5 h-[3px] w-14 rounded-full bg-[#ea580c]" />

              <h3 className="text-xl font-semibold tracking-[0.01em] sm:text-2xl">
                Leadership Impact
              </h3>

              <div className="mt-7 grid grid-cols-2 gap-x-5 gap-y-6">
                <Stat value="25+" label="Years Experience" />
                <Stat value="4" label="GCC Countries" />
                <Stat value="5" label="Global Brands" />
                <Stat value="HR" label="Leadership Coach" />
                <Stat value="L&D" label="Corporate Trainer" />
              </div>

              <div className="mt-6 h-px bg-white/10" />

              <p className="mt-5 text-[14px] italic leading-7 text-slate-300 sm:text-[15px] sm:leading-8">
                “The Mission of hiring, developing and engaging world-class leaders and high-performing team continues”
              </p>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-6xl md:mt-14">
            <SectionDivider title="Core Competencies" />

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Competency title="Leadership Development" text="Frameworks, pipelines & succession planning" />
              <Competency title="Talent Acquisition" text="Executive search across all organizational levels" />
              <Competency title="Culture Transformation" text="High-performance culture design & embedding" />
              <Competency title="Executive Coaching" text="C-suite & senior leadership development" />
              <Competency title="Organizational Design" text="Capability building & structural transformation" />
              <Competency title="Performance Management" text="Engagement, experience & measurable outcomes" />
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-6xl md:mt-14">
            <SectionDivider title="Awards & Recognition" />

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-[#04172f]/5 sm:p-8">
              <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700">
                Excellence Award
              </span>

              <div className="mt-5 rounded-r-2xl border-l-4 border-[#ea580c] bg-slate-50 p-5 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md hover:shadow-[#04172f]/8 sm:p-6">
                <h4 className="text-xl font-semibold text-[#04172f] sm:text-2xl">
                  Middle East Hospitality Excellence Award
                </h4>

                <p className="mt-2 font-medium text-orange-600">
                  Silver Winner – Human Resources & Training
                </p>

                <p className="mt-4 leading-7 text-slate-600">
                  Recognized for contributions in hospitality leadership, HR excellence and transformational learning initiatives across the Middle East region.
                </p>

                <a
                  href="https://youtu.be/TCcpZgmTGmk?si=c-Z8bPWU2svgC_-B"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-orange-100 px-5 py-3 font-medium text-[#c2410c] transition-all duration-200 ease-out hover:bg-[#ea580c] hover:text-white"
                >
                  ▶ Click to Watch ↗
                </a>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <Award
                  title="Advanced Leader Bronze"
                  text="Awarded for distinguished leadership excellence and influential communication."
                />

                <Award
                  title="Advanced Communicator Bronze"
                  text="Recognizing public speaking, facilitation and executive communication proficiency."
                />
              </div>
            </div>
          </div>
        </div>

        {/* COO PROFILE */}
        <div className="mt-10 rounded-[1.75rem] bg-slate-50 px-5 py-10 sm:mt-12 sm:px-8 sm:py-12 md:px-10 md:py-14">
          <div
            id="coo-leadership-hero"
            className="mx-auto grid max-w-5xl items-center gap-6 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:gap-4 lg:gap-5"
          >
            {/* Left — text */}
            <div className="order-1 min-w-0">
              <div className="flex items-center gap-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#ea580c]">
                  Leadership Profile
                </p>
                <span className="h-px w-10 shrink-0 bg-[#ea580c] sm:w-12" aria-hidden="true" />
              </div>

              <h2 className="profile-name mt-3.5 text-[#04172f] md:mt-4">
                Zeeshan Abbasi
              </h2>

              <p className="mt-3 text-[12px] font-medium uppercase leading-[1.65] tracking-[0.12em] text-slate-500 sm:text-[12.5px]">
                Chief Operating Officer
              </p>

              <div className="mt-4 flex flex-wrap gap-2.5">
                <ProfileTag color="orange">NLP & Behavioural Change</ProfileTag>
                <ProfileTag color="blue">Leadership Coaching</ProfileTag>
                <ProfileTag color="orange">Performance Management</ProfileTag>
                <ProfileTag color="blue">Hypnosis & Life Coaching</ProfileTag>
                <ProfileTag color="orange">Organizational Development</ProfileTag>
                <ProfileTag color="blue">Sales Mastery</ProfileTag>
              </div>

              <a
                href="https://www.linkedin.com/in/zeeshan-abbasi-ba959921?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-5"
              >
                View LinkedIn Profile ↗
              </a>
            </div>

            {/* Right — portrait */}
            <div className="relative order-2 mx-auto w-full max-w-[320px] sm:max-w-[360px] md:ml-auto md:mr-0 md:max-w-[380px]">
              <div
                className="pointer-events-none absolute -bottom-2.5 -right-2.5 h-20 w-20 rounded-2xl bg-sky-100/65 sm:-bottom-3.5 sm:-right-3.5 sm:h-24 sm:w-24"
                aria-hidden="true"
              />

              <div className="relative aspect-square overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_12px_28px_rgba(4,23,47,0.08)]">
                <img
                  src={coo}
                  alt="Zeeshan Abbasi"
                  className="h-full w-full scale-[1.12] object-cover object-[center_42%]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <QuickFact icon="🏆" title="23+ Years" text="Experience" />
            <QuickFact icon="🎓" title="MBA (UK)" text="International Management" />
            <QuickFact icon="📚" title="MS" text="Management Sciences" />
            <QuickFact
              icon="✅"
              title="Certified Trainer"
              text="NLP · Hypnosis · Life Coaching (USA)"
            />
            <QuickFact icon="🧠" title="Neuro Sales" text="Mastery" />
            <QuickFact icon="✨" title="Charisma" text="Persuasion & Influence" />
          </div>

          <div className="mx-auto mt-10 max-w-5xl border-t border-slate-200/80 pt-10">
            <SectionDivider title="Executive Summary" />

            <div className="space-y-4">
              <p className="body-copy">
                Zeeshan Abbasi is the Chief Operating Officer at Talentit Consultants FZE UAE, bringing over 23 years of expertise in behavioural change, human performance, and organisational development. His work sits at the intersection of people science and business outcomes, making him a driving force behind Talentit's talent strategy and operational excellence.
              </p>

              <p className="body-copy">
                A certified Trainer of Neuro-Linguistic Programming (NLP), Hypnosis, Life Coaching, and Creating Your Future Techniques, credentialed by the American Board of Hypnotherapy and NLP (USA). Zeeshan applies mind science to real-world consulting challenges.
              </p>

              <p className="body-copy">
                At Talentit, Zeeshan oversees operations while embedding a performance-first culture across client engagements. His proprietary frameworks, including Neuro Sales Mastery and Meta Behavioural Programming, have delivered measurable results including up to 40% increase in client sales performance and measurable workforce mindset transformation.
              </p>

              <p className="body-copy">
                His core expertise includes NLP & Behavioural Change, Sales Mastery, Learning & Development, Leadership Coaching, Organisational Development and Performance Management.
              </p>
            </div>
          </div>

          {/* HIGH POWER LEADERSHIP */}
          <div className="mx-auto mt-10 max-w-5xl rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm shadow-[#04172f]/5 sm:p-6 md:p-8">
            <div className="max-w-3xl">
              <p className="eyebrow">Programs & Certifications</p>

              <h3 className="section-title">High Power Leadership</h3>

              <p className="section-text">
                Expertise developed through 23+ years of leadership, behavioural transformation,
                executive coaching and organisational development.
              </p>

              <div className="mt-5 h-1 w-16 rounded-full bg-orange-600" />
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {[
                {
                  title: 'Recode Your Brain',
                  description:
                    'Unlock high performance, creativity, and ultimate productivity through neuro-optimization, flow-state mastery, and cognitive rewiring for peak focus and resilience.',
                },
                {
                  title: 'Neuro-Linguistic Programming (NLP)',
                  description:
                    'Certified Trainer of NLP, applying mind science to real-world business and consulting challenges.',
                },
                {
                  title: 'Behavioural Change & Programming',
                  description:
                    'Specialized in Meta Behavioural Programming to drive workforce mindset transformation and human performance.',
                },
                {
                  title: 'Hypnosis & Life Coaching',
                  description:
                    'Certified Trainer in Hypnosis, Life Coaching and Creating Your Future techniques.',
                },
                {
                  title: 'Organizational Development',
                  description:
                    '23+ years of experience aligning talent strategy with organizational objectives and business outcomes.',
                },
                {
                  title: 'Executive & Leadership Coaching',
                  description:
                    'Evidence-based coaching solutions for CEOs, senior leaders, entrepreneurs and professionals.',
                },
                {
                  title: 'Create Personal Charisma',
                  description:
                    'Develop authentic presence, influence, and attraction to lead with confidence, clarity, and persuasive impact.',
                },
                {
                  title: 'Confidence Enhancement',
                  description:
                    'Build self-belief, executive presence, and resilience to communicate powerfully and lead with conviction.',
                },
                {
                  title: 'Sales Mastery',
                  description:
                    'Developer of strategic sales frameworks including Neuro Sales Mastery, delivering measurable sales growth.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group h-full rounded-2xl border border-slate-200 bg-slate-50/60 p-5 shadow-sm shadow-[#04172f]/5 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-[#ea580c]/35 hover:shadow-md hover:shadow-[#04172f]/8"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 font-bold text-orange-700">
                      ✓
                    </div>

                    <div>
                      <h4 className="font-semibold leading-6 text-[#04172f]">
                        {item.title}
                      </h4>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* REPUTED ORGANIZATIONS */}
          <div className="mx-auto mt-10 max-w-5xl rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm shadow-[#04172f]/5 sm:p-6 md:p-8">
            <div className="max-w-3xl">
              <p className="eyebrow">Career Affiliations</p>

              <h3 className="section-title">
                Reputed Organizations Zeeshan Has Worked With
              </h3>

              <p className="section-text">
                Trusted across academia, industry, healthcare, and professional boards through
                training, consulting, and leadership engagements.
              </p>

              <div className="mt-5 h-1 w-16 rounded-full bg-orange-600" />
            </div>

            <ul className="mt-8 grid list-none grid-cols-2 gap-3 p-0 sm:grid-cols-3 sm:gap-3.5 md:grid-cols-4 lg:grid-cols-6">
              {cooOrganizations.map((org) => (
                <li key={org.name}>
                  <div className="group flex h-full flex-col items-center rounded-2xl border border-slate-200 bg-slate-50/60 px-3 py-4 text-center shadow-sm shadow-[#04172f]/5 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-[#ea580c]/35 hover:shadow-md hover:shadow-[#04172f]/8 sm:px-3.5 sm:py-5">
                    <div className="flex h-[4.5rem] w-full items-center justify-center sm:h-20 md:h-[5.25rem]">
                      <img
                        src={org.logo}
                        alt={`${org.name} logo`}
                        className="max-h-full max-w-[90%] object-contain"
                        loading="lazy"
                        decoding="async"
                        width={96}
                        height={96}
                      />
                    </div>

                    <p className="mt-3 text-[11px] font-medium leading-snug text-slate-600 sm:text-xs">
                      {org.name}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {strengths.map((item) => (
            <div
              key={item.title}
              className="group flex h-full flex-col p-6 rounded-3xl bg-white border border-slate-200 shadow-md shadow-[#04172f]/5 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-[#ea580c]/35 hover:shadow-lg hover:shadow-[#04172f]/8"
            >
              <div className="h-1 w-12 bg-orange-600 rounded-full mb-5 transition-all duration-300 group-hover:w-16"></div>

              <h4 className="card-title">
                {item.title}
              </h4>

              <p className="card-copy mt-3">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Stat({ value, label }) {
  return (
    <div>
      <div className="text-3xl font-semibold text-[#ea580c]">
        {value}
      </div>
      <div className="text-sm text-slate-300 mt-1">
        {label}
      </div>
    </div>
  )
}

function SectionDivider({ title }) {
  return (
    <div className="flex items-center gap-4 mb-5">
      <p className="eyebrow mb-0">
        {title}
      </p>
      <div className="h-px flex-1 bg-slate-200"></div>
    </div>
  )
}

function ProfileTag({ children, color }) {
  const colors = {
    orange: 'bg-orange-100 text-orange-700 hover:bg-orange-200/70',
    blue: 'bg-blue-100 text-blue-700 hover:bg-blue-200/70',
    slate: 'bg-slate-100 text-slate-700 hover:bg-slate-200/70',
  }

  return (
    <span
      className={`inline-flex h-9 items-center rounded-full px-4 text-[13px] font-medium leading-none transition-colors duration-200 ${colors[color]}`}
    >
      {children}
    </span>
  )
}

function Competency({ title, text }) {
  return (
    <div>
      <h4 className="card-title text-2xl">
        {title}
      </h4>
      <p className="card-copy mt-3">
        {text}
      </p>
    </div>
  )
}

function Award({ title, text }) {
  return (
    <div className="border-l-4 border-[#ea580c] bg-slate-50 rounded-r-2xl p-5 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md hover:shadow-[#04172f]/8">
      <h4 className="font-semibold text-[#04172f]">
        {title}
      </h4>
      <p className="text-sm text-slate-600 mt-2">
        Toastmasters Leadership Institute
      </p>
      <p className="text-sm text-slate-500 mt-3 leading-6">
        {text}
      </p>
    </div>
  )
}

function QuickFact({ icon, title, text }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white px-4 py-4 text-center leading-tight shadow-sm shadow-[#04172f]/5 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-[#ea580c]/30 hover:shadow-md hover:shadow-[#04172f]/8">
      <div className="text-sm font-semibold text-[#04172f]">
        {icon} {title}
      </div>
      <div className="mt-1.5 text-xs leading-5 text-slate-500">
        {text}
      </div>
    </div>
  )
}