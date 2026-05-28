import React from 'react'
import ceo from '../assets/ceo.jpeg'
import SectionHeader from './SectionHeader'
import ceo2 from '../assets/ceo2.jpg'

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

  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-4xl">
          <p className="uppercase tracking-[0.25em] text-orange-600 font-semibold text-sm mb-4">
            About TalenTiT
          </p>

          <SectionHeader
            title="Who We Are"
            description="We offer a comprehensive suite of services including Leadership Development, Customer Service Training Series, Service Audits, HR & Training Outsourcing  and tailored Recruitment Solutions."
            className="max-w-3xl"
          />
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {mainServices.map((service) => (
            <div
              key={service.title}
              className="group p-5 rounded-3xl bg-slate-900 border border-slate-800 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-900/20"
            >
              <div className="h-1 w-16 bg-orange-600 rounded-full mb-6 transition-all duration-300 group-hover:w-24"></div>

              <h3 className="font-semibold text-white text-xl">
                {service.title}
              </h3>

              <p className="mt-3 text-sm text-slate-300 leading-6">
                {service.description}
              </p>
            </div>
          ))}
        </div>



      <div className="mt-12 rounded-[2rem] bg-gradient-to-br from-white to-slate-50 border border-slate-200 shadow-xl shadow-slate-900/5 p-6 md:p-10">

  <div className="grid lg:grid-cols-[420px_1fr] gap-10 items-start">

    {/* LEFT SIDE */}

    <div className="space-y-6">

      <div className="rounded-[1.75rem] overflow-hidden bg-slate-900 shadow-xl">
        <img
          src={ceo}
          alt="Zamir A. Abbasi"
          className="w-full h-[560px] object-cover object-top"
        />
      </div>

      <div className="rounded-[1.75rem] bg-slate-950 text-white p-7">

        <div className="h-1 w-16 bg-orange-600 rounded-full mb-5"></div>

        <h3 className="text-2xl font-semibold">
          Leadership Impact
        </h3>

        <div className="mt-8 grid grid-cols-2 gap-y-7 gap-x-5">

          <div>
            <div className="text-3xl font-semibold text-orange-400">
              25+
            </div>

            <div className="text-sm text-slate-300 mt-1">
              Years Experience
            </div>
          </div>

          <div>
            <div className="text-3xl font-semibold text-orange-400">
              4
            </div>

            <div className="text-sm text-slate-300 mt-1">
              GCC Countries
            </div>
          </div>


          <div>
            <div className="text-3xl font-semibold text-orange-400">
              5
            </div>

            <div className="text-sm text-slate-300 mt-1">
              Global Brands
            </div>
          </div>

          <div>
            <div className="text-3xl font-semibold text-orange-400">
              HR
            </div>

            <div className="text-sm text-slate-300 mt-1">
              Leadership Coach
            </div>
          </div>

          <div>
            <div className="text-3xl font-semibold text-orange-400">
              L&D
            </div>

            <div className="text-sm text-slate-300 mt-1">
              Corporate Trainer
            </div>
          </div>

        </div>

        <div className="mt-6 h-px bg-white/10"></div>

        <p className="mt-6 italic text-slate-300 leading-8 text-[15px]">
          “The Mission of hiring, developing and engaging world-class leaders and high-performing team continues”
        </p>

      </div>

    </div>

    {/* RIGHT SIDE */}

    <div>

      <p className="uppercase tracking-[0.25em] text-orange-600 font-semibold text-sm mb-4">
        Leadership Profile
      </p>

      <h2 className="text-4xl md:text-5xl font-semibold text-slate-950">
        Zamir A. Abbasi
      </h2>

      <div className="mt-4 h-1 w-20 bg-orange-600 rounded-full"></div>

      <p className="mt-3 text-sm uppercase tracking-[0.2em] text-slate-500">
        CEO & Founder · People, Leadership & Organizational Excellence
      </p>

      <div className="mt-6 flex flex-wrap gap-3">

        <span className="px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium">
          Certified Trainer
        </span>

        <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
          Leadership Coach
        </span>

        <span className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
          OD Specialist
        </span>

      </div>

      

      {/* EXECUTIVE SUMMARY */}

      <div className="mt-10">

        <div className="flex items-center gap-4 mb-5">

          <p className="text-xs uppercase tracking-[0.25em] text-orange-600 font-semibold">
            Executive Summary
          </p>

          <div className="h-px flex-1 bg-slate-200"></div>

        </div>

        <p className="text-slate-700 leading-8 text-[17px]">
          With more than 20 years of progressive experience leading Human Resources and Learning & Development functions across global hospitality brands and corporate organizations, he brings a unique combination of strategic leadership, operational excellence, and people development expertise.
        </p>

        <p className="text-slate-700 leading-8 text-[17px] mt-4">
          As a Certified Trainer and Leadership Coach, his professional journey reflects a strong commitment to innovation, talent development, and organizational growth.
        </p>

        <p className="text-slate-700 leading-8 text-[17px] mt-4">
          Throughout his career, he has successfully led HR and L&D initiatives for renowned international hospitality brands across the Middle East (KSA, Bahrain, Qatar and UAE, helping organizations build world-class leaders and high-performing teams. His expertise spans leadership development, organizational development, soft skills training, talent acquisition, talent management, and workforce transformation.
        </p>

        <p className="text-slate-700 leading-8 text-[17px] mt-4">
          Whether serving as a Leadership Coach, Soft Skills Trainer, or Organizational Development Specialist, he consistently delivers impactful solutions backed by extensive regional knowledge and a passion for developing people.
        </p>

        <p className="text-slate-700 leading-8 text-[17px] mt-4">
          His achievements have also been recognized through distinguished accolades from the Toastmasters Leadership Institute, including the Advanced Leader Bronze and Advanced Communicator Bronze awards, reflecting his dedication to leadership excellence and effective communication. He is also Certified Hospitality Trainer and Certified HR Executive from Educational Institute of American Hotels and Lodging Association.
        </p>

        <p className="text-slate-700 leading-8 text-[17px] mt-4">
          One of his core strengths lies in talent acquisition and strategic recruitment. Over the course of his career, he has successfully recruited and hired professionals at all organizational levels, from frontline and operational teams to senior leadership and executive positions, ensuring the right talent is aligned with organizational vision and business objectives.
        </p>

        <p className="text-slate-700 leading-8 text-[17px] mt-4">
          He developed and transformed hundreds of professionals on various levels and function areas and passion of Human Capital development continues....
        </p>

      </div>

    </div>

  </div>
  

  {/* FULL WIDTH CORE COMPETENCIES */}

  <div className="mt-14">

    <div className="flex items-center gap-4 mb-8">

      <p className="text-xs uppercase tracking-[0.25em] text-orange-600 font-semibold">
        Core Competencies
      </p>

      <div className="h-px flex-1 bg-slate-200"></div>

    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

      <div>
        <h4 className="font-semibold text-2xl text-slate-950">
          Leadership Development
        </h4>

        <p className="text-slate-600 mt-3 leading-7 text-[15px]">
          Frameworks, pipelines & succession planning
        </p>
      </div>

      <div>
        <h4 className="font-semibold text-2xl text-slate-950">
          Talent Acquisition
        </h4>

        <p className="text-slate-600 mt-3 leading-7 text-[15px]">
          Executive search across all organizational levels
        </p>
      </div>

      <div>
        <h4 className="font-semibold text-2xl text-slate-950">
          Culture Transformation
        </h4>

        <p className="text-slate-600 mt-3 leading-7 text-[15px]">
          High-performance culture design & embedding
        </p>
      </div>

      <div>
        <h4 className="font-semibold text-2xl text-slate-950">
          Executive Coaching
        </h4>

        <p className="text-slate-600 mt-3 leading-7 text-[15px]">
          C-suite & senior leadership development
        </p>
      </div>

      <div>
        <h4 className="font-semibold text-2xl text-slate-950">
          Organizational Design
        </h4>

        <p className="text-slate-600 mt-3 leading-7 text-[15px]">
          Capability building & structural transformation
        </p>
      </div>

      <div>
        <h4 className="font-semibold text-2xl text-slate-950">
          Performance Management
        </h4>

        <p className="text-slate-600 mt-3 leading-7 text-[15px]">
          Engagement, experience & measurable outcomes
        </p>
      </div>

    </div>

  </div>

  {/* FULL WIDTH AWARDS */}

  <div className="mt-14">

    <div className="flex items-center gap-4 mb-6">

      <p className="text-xs uppercase tracking-[0.25em] text-orange-600 font-semibold">
        Awards & Recognition
      </p>

      <div className="h-px flex-1 bg-slate-200"></div>

    </div>

    <div className="rounded-[1.75rem] bg-white border border-slate-200 shadow-lg shadow-slate-900/5 p-8">

      <div className="mb-8">

  <span className="inline-flex px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium">
    Excellence Award
  </span>

  <div className="mt-5 border-l-4 border-orange-600 bg-slate-50 rounded-r-2xl p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">

    <h4 className="text-2xl font-semibold text-slate-950">
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
      className="inline-flex items-center gap-2 mt-6 px-5 py-3 rounded-full bg-orange-100 text-orange-700 font-medium hover:bg-orange-600 hover:text-white transition-all duration-300"
    >
      ▶ Click to Watch ↗
    </a>

  </div>

</div>

      <div className="grid md:grid-cols-2 gap-6">

  <div className="border-l-4 border-orange-600 bg-slate-50 rounded-r-2xl p-5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">

    <h4 className="font-semibold text-slate-950">
      Advanced Leader Bronze
    </h4>

    <p className="text-sm text-slate-600 mt-2">
      Toastmasters Leadership Institute
    </p>

    <p className="text-sm text-slate-500 mt-3 leading-6">
      Awarded for distinguished leadership excellence and influential communication.
    </p>

  </div>

  <div className="border-l-4 border-orange-600 bg-slate-50 rounded-r-2xl p-5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">

    <h4 className="font-semibold text-slate-950">
      Advanced Communicator Bronze
    </h4>

    <p className="text-sm text-slate-600 mt-2">
      Toastmasters Leadership Institute
    </p>

    <p className="text-sm text-slate-500 mt-3 leading-6">
      Recognizing public speaking, facilitation and executive communication proficiency.
    </p>

  </div>

</div>

    </div>

  </div>

</div>


        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {strengths.map((item) => (
    <div
      key={item.title}
      className="group p-6 rounded-3xl bg-white border border-slate-200 shadow-md shadow-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/10"
    >
      <div className="h-1 w-12 bg-orange-600 rounded-full mb-5 transition-all duration-300 group-hover:w-16"></div>

      <h4 className="font-semibold text-slate-950 text-xl">
        {item.title}
      </h4>

      <p className="text-sm text-slate-700 mt-3 leading-6">
        {item.description}
      </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}