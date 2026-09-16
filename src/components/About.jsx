import React from 'react'
import ceo from '../assets/ceo.jpeg'
import SectionHeader from './SectionHeader'
import coo from '../assets/coo.jpeg'

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
        <div className="mt-12 rounded-[2rem] bg-gradient-to-br from-white to-slate-50 border border-slate-200 shadow-md shadow-[#04172f]/5 p-5 sm:p-6 md:p-10">
          <div className="grid lg:grid-cols-[360px_1fr] gap-8 lg:gap-10 items-start">
            <div className="space-y-6">
              <div className="rounded-full overflow-hidden bg-[#04172f] shadow-xl">
                <img
                  src={ceo}
                  alt="Zamir A. Abbasi"
                  className="aspect-square w-full rounded-full object-cover object-top"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="rounded-[1.75rem] bg-[#04172f] text-white p-7">
                <div className="h-1 w-16 bg-[#ea580c] rounded-full mb-5"></div>

                <h3 className="text-2xl font-semibold">
                  Leadership Impact
                </h3>

                <div className="mt-8 grid grid-cols-2 gap-y-7 gap-x-5">
                  <Stat value="25+" label="Years Experience" />
                  <Stat value="4" label="GCC Countries" />
                  <Stat value="5" label="Global Brands" />
                  <Stat value="HR" label="Leadership Coach" />
                  <Stat value="L&D" label="Corporate Trainer" />
                </div>

                <div className="mt-6 h-px bg-white/10"></div>

                <p className="mt-6 italic text-slate-300 leading-8 text-[15px]">
                  “The Mission of hiring, developing and engaging world-class leaders and high-performing team continues”
                </p>
              </div>
            </div>

            <div>
              <p className="eyebrow">
                Leadership Profile
              </p>

              <h2 className="profile-name">
                Zamir A. Abbasi
              </h2>

              <div className="mt-4 h-1 w-20 bg-orange-600 rounded-full"></div>

              <p className="mt-3 text-sm uppercase tracking-[0.2em] text-slate-500">
                CEO & Founder · People, Leadership & Organizational Excellence
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <ProfileTag color="orange">Certified Trainer</ProfileTag>
                <ProfileTag color="blue">Leadership Coach</ProfileTag>
                <ProfileTag color="slate">OD Specialist</ProfileTag>
              </div>

              <div className="mt-10">
                <SectionDivider title="Executive Summary" />

                <p className="body-copy">
                  With more than 25 years of progressive experience leading Human Resources and Learning & Development functions across global hospitality brands and corporate organizations, he brings a unique combination of strategic leadership, operational excellence, and people development expertise.
                </p>

                <p className="body-copy mt-4">
                  As a Certified Trainer and Leadership Coach, his professional journey reflects a strong commitment to innovation, talent development, and organizational growth.
                </p>

                <p className="body-copy mt-4">
                  Throughout his career, he has successfully led HR and L&D initiatives for renowned international hospitality brands across the Middle East, helping organizations build world-class leaders and high-performing teams.
                </p>

                <p className="body-copy mt-4">
                  His expertise spans leadership development, organizational development, soft skills training, talent acquisition, talent management, and workforce transformation.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14">
            <SectionDivider title="Core Competencies" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <Competency title="Leadership Development" text="Frameworks, pipelines & succession planning" />
              <Competency title="Talent Acquisition" text="Executive search across all organizational levels" />
              <Competency title="Culture Transformation" text="High-performance culture design & embedding" />
              <Competency title="Executive Coaching" text="C-suite & senior leadership development" />
              <Competency title="Organizational Design" text="Capability building & structural transformation" />
              <Competency title="Performance Management" text="Engagement, experience & measurable outcomes" />
            </div>
          </div>

          <div className="mt-14">
            <SectionDivider title="Awards & Recognition" />

            <div className="rounded-[1.75rem] bg-white border border-slate-200 shadow-md shadow-[#04172f]/5 p-8">
              <span className="inline-flex px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium">
                Excellence Award
              </span>

              <div className="mt-5 border-l-4 border-[#ea580c] bg-slate-50 rounded-r-2xl p-6 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md hover:shadow-[#04172f]/8">
                <h4 className="text-2xl font-semibold text-[#04172f]">
                  Middle East Hospitality Excellence Award
                </h4>

                <p className="text-orange-600 font-medium mt-2">
                  Silver Winner – Human Resources & Training
                </p>

                <p className="text-slate-600 mt-4 leading-7">
                  Recognized for contributions in hospitality leadership, HR excellence and transformational learning initiatives across the Middle East region.
                </p>

                <a
                  href="https://youtu.be/TCcpZgmTGmk?si=c-Z8bPWU2svgC_-B"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 px-5 py-3 rounded-full bg-orange-100 text-[#c2410c] font-medium hover:bg-[#ea580c] hover:text-white transition-all duration-200 ease-out"
                >
                  ▶ Click to Watch ↗
                </a>
              </div>

              <div className="mt-8 grid md:grid-cols-2 gap-6">
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
        <div className="mt-12 rounded-[1.25rem] bg-white border border-slate-200 shadow-lg p-5 sm:p-6 md:p-8">
          <div className="grid lg:grid-cols-[280px_1fr] gap-6 lg:gap-8 items-start">
            <div className="space-y-4">
              <div className="rounded-full overflow-hidden bg-[#04172f] shadow">
                <img
                  src={coo}
                  alt="Zeeshan Abbasi"
                  className="aspect-square w-full rounded-full object-cover object-top"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
  <QuickFact icon="🏆" title="23+ Years" text="Experience" />

  <QuickFact icon="🎓" title="MBA (UK)" text="International Management" />

  <QuickFact icon="📚" title="MS" text="Management Sciences" />

  <QuickFact
    icon="✅"
    title="Certified Trainer"
    text="NLP · Hypnosis · Life Coaching (USA)"
  />

  <QuickFact
    icon="🧠"
    title="Neuro Sales"
    text="Mastery"
  />

  <QuickFact
    icon="✨"
    title="Charisma"
    text="Persuasion & Influence"
  />
</div>

              <a
                href="https://www.linkedin.com/in/zeeshan-abbasi-ba959921?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-2 w-full"
              >
                View LinkedIn Profile ↗
              </a>
            </div>

            <div>
              <p className="eyebrow">
                Leadership Profile
              </p>

              <h2 className="profile-name">
                Zeeshan Abbasi
              </h2>

              <div className="mt-3 h-1 w-16 bg-orange-600 rounded-full"></div>

              <p className="mt-3 text-sm uppercase tracking-[0.2em] text-slate-500">
                Chief Operating Officer
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <ProfileTag color="orange">NLP & Behavioural Change</ProfileTag>
                <ProfileTag color="blue">Leadership Coaching</ProfileTag>
                <ProfileTag color="orange">Performance Management</ProfileTag>
                <ProfileTag color="blue">Hypnosis & Life Coaching</ProfileTag>
                <ProfileTag color="orange">Organizational Development</ProfileTag>
                <ProfileTag color="blue">Sales Mastery</ProfileTag>
              </div>

              <div className="mt-6">
                <SectionDivider title="Executive Summary" />

                <p className="body-copy">
                  Zeeshan Abbasi is the Chief Operating Officer at Talentit Consultants FZE UAE, bringing over 23 years of expertise in behavioural change, human performance, and organisational development. His work sits at the intersection of people science and business outcomes, making him a driving force behind Talentit's talent strategy and operational excellence.
                </p>

                <p className="body-copy mt-4">
                  A certified Trainer of Neuro-Linguistic Programming (NLP), Hypnosis, Life Coaching, and Creating Your Future Techniques, credentialed by the American Board of Hypnotherapy and NLP (USA). Zeeshan applies mind science to real-world consulting challenges.
                </p>

                <p className="body-copy mt-4">
                  At Talentit, Zeeshan oversees operations while embedding a performance-first culture across client engagements. His proprietary frameworks, including Neuro Sales Mastery and Meta Behavioural Programming, have delivered measurable results including up to 40% increase in client sales performance and measurable workforce mindset transformation.
                </p>

                <p className="body-copy mt-4">
                  His core expertise includes NLP & Behavioural Change, Sales Mastery, Learning & Development, Leadership Coaching, Organisational Development and Performance Management.
                </p>
              </div>
            </div>
          </div>
{/* HIGH POWER LEADERSHIP */}
<div className="mt-10 rounded-[1.5rem] bg-gradient-to-br from-slate-50 to-white border border-slate-200 p-5 sm:p-6 md:p-8 shadow-md shadow-[#04172f]/5">
  <div className="max-w-3xl">
    <p className="eyebrow">
      Programs & Certifications
    </p>

    <h3 className="section-title">
      High Power Leadership
    </h3>

    <p className="section-text">
      Expertise developed through 23+ years of leadership, behavioural transformation,
      executive coaching and organisational development.
    </p>

    <div className="mt-5 h-1 w-16 rounded-full bg-orange-600" />
  </div>

  <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-5">
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
        className="group h-full rounded-2xl bg-white border border-slate-200 p-5 shadow-sm shadow-[#04172f]/5 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-[#ea580c]/35 hover:shadow-md hover:shadow-[#04172f]/8"
      >
        <div className="flex items-start gap-4">
          <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-700 font-bold">
            ✓
          </div>

          <div>
            <h4 className="font-semibold text-[#04172f] leading-6">
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
    orange: 'bg-orange-100 text-orange-700',
    blue: 'bg-blue-100 text-blue-700',
    slate: 'bg-slate-100 text-slate-700',
  }

  return (
    <span className={`px-4 py-2 rounded-full text-sm font-medium ${colors[color]}`}>
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
    <div className="px-3 py-3 rounded-lg bg-slate-50 border border-slate-100 text-center leading-tight">
      <div className="text-sm font-semibold text-slate-900">
        {icon} {title}
      </div>
      <div className="text-xs text-slate-500 mt-1">
        {text}
      </div>
    </div>
  )
}