import React from 'react'
import heroBg from '../assets/new-hero-bg.webp'

const gold = '#D4AF37'

function LineIcon({ children }) {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke={gold}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0"
    >
      {children}
    </svg>
  )
}

const icons = {
  curriculum: (
    <LineIcon>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h8" />
      <path d="M8 17h5" />
    </LineIcon>
  ),
  onsite: (
    <LineIcon>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </LineIcon>
  ),
  growth: (
    <LineIcon>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="3" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </LineIcon>
  ),
  standards: (
    <LineIcon>
      <path d="M12 19V5" />
      <path d="M5 12l7-7 7 7" />
    </LineIcon>
  ),
  specialists: (
    <LineIcon>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 12l3-5" />
      <path d="M12 12h5" />
      <circle cx="12" cy="12" r="1.5" fill={gold} stroke="none" />
    </LineIcon>
  ),
  retention: (
    <LineIcon>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </LineIcon>
  ),
  expertise: (
    <LineIcon>
      <path d="M12 3l2.4 4.9L20 9l-4 3.9.9 5.6L12 16.3 7.1 18.5 8 12.9 4 9l5.6-1.1L12 3z" />
    </LineIcon>
  ),
}

const trainingOfferings = [
  {
    title: 'Tailor-made Curriculum:',
    text: 'Every program is fully customizable to meet the specific operational needs and culture of your hotel.',
    icon: icons.curriculum,
  },
  {
    title: 'On-Site Excellence:',
    text: 'We deliver industry-specific, in-company training sessions directly at your property for maximum convenience and impact.',
    icon: icons.onsite,
  },
  {
    title: 'Comprehensive Growth:',
    text: 'We offer a diverse range of Soft Skills and Leadership Development programs, available as both exclusive in-house workshops and open-enrollment sessions.',
    icon: icons.growth,
  },
  {
    title: 'Elevate Your Standards:',
    text: 'From frontline service to executive leadership, we provide the tools to transform your guest experience and empower your team.',
    icon: icons.standards,
  },
]

const talentBenefits = [
  {
    title: 'Hospitality Specialists:',
    text: 'Our team brings more than 25 years of experience hiring hospitality professionals at all levels. We ensure that international standards and global norms are strictly upheld throughout the pre-screening and selection process.',
    icon: icons.specialists,
  },
  {
    title: 'Strategic Retention:',
    text: 'We guarantee our clients that talent retention is our #1 priority, starting from the very first point of contact.',
    icon: icons.retention,
  },
  {
    title: 'Proven Expertise:',
    text: 'Our approach combines deep industry knowledge with a commitment to finding the right fit for your unique corporate culture.',
    icon: icons.expertise,
  },
]

const cardStyle = {
  background:
    'linear-gradient(145deg, rgba(30, 40, 67, 0.82), rgba(15, 23, 42, 0.72))',
  borderRadius: '8px',
  backdropFilter: 'blur(8px)',
  WebkitBackdropFilter: 'blur(8px)',
  transition:
    'transform 0.25s ease, border-color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease',
}

const cardHoverClass =
  'min-w-0 border border-[rgba(197,160,89,0.40)] motion-reduce:transition-none [@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-[3px] [@media(hover:hover)_and_(pointer:fine)]:hover:border-[rgba(212,175,55,0.65)] [@media(hover:hover)_and_(pointer:fine)]:hover:shadow-[0_8px_22px_rgba(0,0,0,0.18)] motion-reduce:hover:translate-y-0'

const panelStyle = {
  background: 'rgba(15, 23, 42, 0.76)',
  backdropFilter: 'blur(8px)',
  WebkitBackdropFilter: 'blur(8px)',
  border: '1px solid rgba(197, 160, 89, 0.40)',
  borderRadius: '2px',
}

function SectionLabel({ children }) {
  return (
    <div className="mt-5 flex items-center gap-3">
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C5A059]">
        {children}
      </p>
      <span className="h-px w-9 bg-[#C5A059]" />
    </div>
  )
}

function TrainingCard({ icon, title, text }) {
  return (
    <div className={`px-4 py-4 ${cardHoverClass}`} style={cardStyle}>
      <div className="mb-2.5">{icon}</div>
      <h3 className="font-sans text-[15px] font-bold leading-[1.25] tracking-normal text-white">
        {title}
      </h3>
      <p className="mt-1 text-[13px] leading-[1.5] text-[#94A3B8]">
        {text}
      </p>
    </div>
  )
}

function TalentCard({ icon, title, text }) {
  return (
    <div
      className={`flex items-start gap-3 px-5 py-4 ${cardHoverClass}`}
      style={cardStyle}
    >
      {icon}
      <div className="min-w-0">
        <h3 className="font-sans text-[15px] font-bold leading-snug tracking-normal text-white">
          {title}
        </h3>
        <p className="mt-1 text-[12.5px] leading-[1.55] text-[#94A3B8]">
          {text}
        </p>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-x-hidden text-white"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(15, 20, 35, 0.48) 0%, rgba(15, 20, 35, 0.16) 14%, rgba(0, 0, 0, 0) 32%), linear-gradient(180deg, rgba(76, 68, 120, 0.32) 0%, rgba(38, 48, 86, 0.22) 42%, rgba(12, 17, 30, 0.58) 100%), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center, center, center 35%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 hidden xl:block"
        style={{
          background:
            'linear-gradient(90deg, rgba(18,25,43,0.28) 0%, rgba(18,25,43,0.08) 22%, rgba(18,25,43,0) 38%, rgba(18,25,43,0) 62%, rgba(18,25,43,0.08) 78%, rgba(18,25,43,0.28) 100%)',
        }}
      />
      <div className="relative z-10 mx-auto w-full max-w-[1760px] px-5 pb-8 pt-[60px] sm:px-8 xl:px-10">
        <div className="mb-8 flex items-center justify-center gap-4">
          <span className="hidden h-px w-[88px] bg-[#C5A059] sm:block" />
          <h1 className="text-center text-[17px] font-semibold uppercase leading-[1.2] tracking-[0.24em] text-[#C5A059]">
            Building High-Performance Teams
          </h1>
          <span className="hidden h-px w-[88px] bg-[#C5A059] sm:block" />
        </div>

        <div className="grid grid-cols-1 items-start gap-8 xl:grid-cols-[minmax(0,1.15fr)_minmax(180px,0.7fr)_minmax(0,1.15fr)] xl:gap-0 2xl:grid-cols-[minmax(0,1fr)_minmax(320px,0.72fr)_minmax(0,1fr)]">
          <article
            id="hospitality-training"
            className="relative min-w-0 px-6 pb-7 pt-7 sm:px-7 sm:pb-8 sm:pt-9"
            style={panelStyle}
          >
            <span className="pointer-events-none absolute inset-y-0 left-0 w-[3px] bg-[#C5A059]/75" />
            <div>
              <p className="text-[25px] font-normal text-[#D4AF37] [font-family:'Cormorant_Garamond',Georgia,serif]">
                01
              </p>
              <span className="mt-1.5 block h-px w-9 bg-[#C5A059]" />
            </div>
            <h2 className="mt-3 text-[1.7rem] font-semibold uppercase leading-[1.22] tracking-[0.035em] text-white min-[1440px]:text-[33px]">
              World-Class Hospitality
              <br />
              Training Programs
            </h2>
            <p className="mt-5 text-[13.5px] font-normal leading-[1.65] tracking-[0.01em] text-[#CBD5E1]">
              Our team of training experts brings a wealth of experience from the world’s leading hotel chains. Having set the highest standards of service and quality for top global organizations, we are passionate about extending that same excellence to partners who believe that exceptional service is the backbone of hospitality.
            </p>

            <SectionLabel>Our Specialized Offerings</SectionLabel>
            <div className="mt-3.5 grid grid-cols-1 gap-x-3 gap-y-3.5 sm:grid-cols-2">
              {trainingOfferings.map((item) => (
                <TrainingCard key={item.title} {...item} />
              ))}
            </div>
          </article>

          <div className="relative hidden min-w-0 xl:flex justify-center">
            <div
              className="mt-2 h-[400px] w-px"
              style={{
                background:
                  'linear-gradient(to bottom, rgba(197,160,89,.75), rgba(197,160,89,.05))',
              }}
            />
          </div>

          <article
            id="talent-hunt"
            className="relative min-w-0 px-6 pb-7 pt-7 sm:px-8 sm:pb-8 sm:pt-9"
            style={panelStyle}
          >
            <span className="pointer-events-none absolute inset-y-0 right-0 w-[3px] bg-[#C5A059]/75" />
            <div>
              <p className="text-[25px] font-normal text-[#D4AF37] [font-family:'Cormorant_Garamond',Georgia,serif]">
                02
              </p>
              <span className="mt-1.5 block h-px w-9 bg-[#C5A059]" />
            </div>
            <h2 className="mt-3 text-[1.7rem] font-semibold uppercase leading-[1.22] tracking-[0.035em] text-white min-[1440px]:text-[33px]">
              Talent Hunt /
              <br />
              Search & Selection
            </h2>
            <p className="mt-5 text-[13.5px] font-normal leading-[1.65] tracking-[0.01em] text-[#CBD5E1]">
              We understand the value of a precise Talent Hunt. As passionate recruiters with over two decades of hospitality recruitment expertise, we apply rigorous due diligence to identify candidates whose skills and behavioral traits align perfectly with your organizational needs, culture and customer service philosophy.
            </p>
            <p className="mt-3 text-[13.5px] font-normal leading-[1.65] tracking-[0.01em] text-[#CBD5E1]">
              Aligning our targets for KSA Vision 2030, we are fully prepared to engage Saudi talent as our No.1 priority.
            </p>

            <SectionLabel>Why Choose Us?</SectionLabel>
            <div className="mt-3.5 flex flex-col gap-3">
              {talentBenefits.map((item) => (
                <TalentCard key={item.title} {...item} />
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
