import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const leadershipCourses = [
  {
    title: 'Dynamic Leadership Program',
    featured: 'Flagship',
    description:
      'A comprehensive program equipping current and emerging leaders with the mindset, skills, and tools to lead effectively in a rapidly changing business environment.',
    outcomes: [
      'Build leadership confidence & capability',
      'Develop adaptable leadership styles',
      'Strengthen decision-making skills',
      'Enhance communication and influence',
      'Create future-ready leaders',
    ],
  },
  {
    title: 'Team Building: Developing High Performance Teams',
    description:
      'Build collaboration and create teams that work together effectively to achieve common goals.',
    outcomes: [
      'Understand team dynamics & stages',
      'Build trust and accountability',
      'Manage diverse personalities',
      'Team motivation techniques',
      'Cross-functional team management',
    ],
  },
  {
    title: 'Time & Stress Management',
    description:
      'Equip leaders with techniques to manage workload, priorities, and stress while maintaining productivity and work-life balance.',
    outcomes: [
      'Identify time wasters',
      'Prioritization & goal setting',
      'Stress management tools',
      'Work-life balance strategies',
      'Managing pressure situations',
    ],
  },
  {
    title: 'Motivate, Inspire & Lead',
    description:
      'Understand what drives employee motivation and create a culture of engagement, empowerment, and retention.',
    outcomes: [
      'Employee motivation theories',
      'Recognition strategies',
      'Coaching for performance',
      'Building ownership & empowerment',
      'Retention practices',
    ],
  },
  {
    title: 'Train the Trainer',
    description:
      'Develop internal trainers capable of delivering engaging, high-impact learning experiences — 80% practical, 20% theory.',
    outcomes: [
      'Adult learning principles',
      'Training delivery techniques',
      'Handling difficult participants',
      'Training evaluations & plans',
      'Creating learning activities',
    ],
  },
  {
    title: 'Managing Human Capital',
    description:
      'HR for Non-HR Professionals. Practical HR knowledge that enables effective people management for every manager.',
    outcomes: [
      'Recruitment basics',
      'Performance management',
      'Employee engagement',
      'Disciplinary procedures',
      'Workplace ethics',
    ],
  },
  {
    title: 'Anger & Conflict Management',
    description:
      'Techniques to manage emotions, resolve workplace conflicts, and build positive working relationships before issues impact performance.',
    outcomes: [
      'Emotional intelligence',
      'Conflict resolution methods',
      'Mediation & difficult conversations',
      'Root cause analysis',
      'Building positive relationships',
    ],
  },
  {
    title: "Supervisor's Leadership Journey",
    description:
      'Transform supervisors from task managers into true people leaders with accountability, decision-making, and coaching skills.',
    outcomes: [
      'Transitioning into leadership',
      'Delegation & accountability',
      'Team coaching',
      'Leadership mindset development',
    ],
  },
  {
    title: 'Effective Performance Management',
    description:
      'Assess employee performance effectively, set meaningful KPIs, and create development plans that deliver results.',
    outcomes: [
      'KPI & goal setting',
      'Performance reviews',
      'Feedback techniques',
      'Training & development planning',
      'Talent identification',
    ],
  },
  {
    title: 'Effective Communication',
    description:
      'Strengthen communication skills that improve workplace relationships, reduce misunderstandings, and drive effectiveness.',
    outcomes: [
      'Verbal & non-verbal communication',
      'Active listening',
      'Giving feedback',
      'Overcoming communication barriers',
    ],
  },
  {
    title: 'SMART Selling Techniques',
    description:
      'Enhance sales performance through structured selling methods, customer psychology, and relationship-building strategies.',
    outcomes: [
      'Customer psychology & body language',
      'Closing & cross-selling techniques',
      'Selling on phone',
      'Customer relationship building',
    ],
  },
  {
    title: "Leaders' Body Language",
    description:
      'Understand how body language shapes leadership effectiveness, builds trust, and amplifies communication impact.',
    outcomes: [
      'Reading body language signals',
      'Confidence projection',
      'Building trust non-verbally',
      'Communication impact',
    ],
  },
  {
    title: 'Delegation & Empowerment',
    description:
      'A powerful tool for leaders — delegate effectively, build employee ownership, and create accountability systems that deliver results.',
    outcomes: [
      'Effective delegation techniques',
      'Employee ownership',
      'Accountability systems',
      'Monitoring results',
    ],
  },
  {
    title: 'Decision Making & Problem Solving',
    description:
      'Sharpen analytical thinking and equip leaders with frameworks to solve complex problems and make confident decisions.',
    outcomes: [
      'Analytical thinking',
      'Root cause analysis',
      'Creative problem solving',
      'Decision frameworks',
    ],
  },
  {
    title: 'Planning & Goal Setting',
    description:
      'Build structured approaches to planning, priority management, and performance tracking aligned to organizational objectives.',
    outcomes: [
      'SMART objectives',
      'Action planning',
      'Priority management',
      'Performance tracking',
    ],
  },
  {
    title: 'Interviewing & Counselling Skills',
    description:
      'Develop professional interviewing and counselling capabilities for better hiring decisions and coaching conversations.',
    outcomes: [
      'Interview preparation',
      'Behavioural interviewing',
      'Coaching conversations',
      'Counselling techniques',
    ],
  }
]

const employeeCourses = [
  {
    title: 'Three Steps of Service',
    featured: 'Core',
    description:
      'Warm Welcome · Guest Engagement · Fond Farewell. Build the foundation for exceptional guest experiences at every touchpoint.',
    outcomes: [
      'Creating positive first impressions',
      'Guest interaction techniques',
      'Service etiquette',
      'Memorable customer experiences',
    ],
  },
  {
    title: 'Upselling Skills',
    description:
      'For Sales, Reservation, Front Office & F&B Staff. Generate more revenue while keeping the customer experience at the centre.',
    outcomes: [
      'Understanding customer needs',
      'Revenue generation techniques',
      'Suggestive selling',
      'Guest-focused selling',
    ],
  },
  {
    title: 'Complaints Handling',
    description:
      '“When Service Goes Wrong.” Turn complaints into opportunities and recover service relationships with confidence and professionalism.',
    outcomes: [
      'Complaint resolution process',
      'Active listening',
      'Service recovery techniques',
      'Turning complaints into opportunities',
    ],
  },
  {
    title: 'Anticipation of Guest Needs',
    description:
      '“Radar On, Antenna Up.” Train staff to observe, anticipate, and personalize service before guests even ask.',
    outcomes: [
      'Observation techniques',
      'Understanding customer expectations',
      'Personalization skills',
    ],
  },
  {
    title: 'Effective Communication',
    description:
      'Build professional communication skills that improve service language, workplace interaction, and team cohesion.',
    outcomes: [
      'Professional communication',
      'Listening skills',
      'Service language',
      'Workplace interaction',
    ],
  },
  {
    title: 'Service Focused – An Attitude',
    description:
      'Cultivate a genuine service mindset and build a customer-centric culture from the ground up.',
    outcomes: [
      'Service mindset development',
      'Positive attitude cultivation',
      'Customer-centric culture',
    ],
  },
  {
    title: 'Conflict Resolution',
    description:
      'Creating a cordial environment. Resolve workplace issues quickly and maintain a collaborative, respectful team atmosphere.',
    outcomes: [
      'Resolving workplace issues',
      'Team collaboration',
      'Communication techniques',
    ],
  },
  {
    title: 'Exceeding Guest Expectations',
    description:
      'Go beyond satisfaction — deliver exceptional service that creates memorable experiences and drives customer loyalty.',
    outcomes: [
      'Delivering exceptional service',
      'Creating memorable experiences',
      'Customer loyalty techniques',
    ],
  },
  {
    title: 'Reputation Management',
    description:
      'Manage online and offline customer perception. Handle reviews, protect brand image, and respond to guest feedback effectively.',
    outcomes: [
      'Handling customer reviews',
      'Online guest feedback management',
      'Brand image protection',
      'Service reputation building',
    ],
  },
  {
    title: "Remembering Guests' Names",
    description:
      'Build genuine personalization skills and create meaningful relationships through the powerful practice of name recognition.',
    outcomes: [
      'Memory techniques',
      'Personalization skills',
      'Relationship building',
    ],
  },
  {
    title: 'Working Through Teams',
    description:
      'Build collaboration, shared responsibility, and team communication skills that drive consistent operational performance.',
    outcomes: [
      'Collaboration skills',
      'Team communication',
      'Shared responsibilities',
    ],
  },
  {
    title: 'Professional Waitering Skills',
    description:
      'Elevate F&B service standards with professional techniques covering service sequence, etiquette, and guest interaction.',
    outcomes: [
      'Service sequence & table etiquette',
      'Guest interaction',
      'Professional appearance',
      'Upselling opportunities',
    ],
  },
]

const deliveryMethods = [
  'Classroom Training',
  'Interactive Workshops',
  'Virtual Instructor-Led Sessions',
  'On-the-Job Training',
  'Role Plays & Simulations',
  'Group Activities',
  'Case Studies',
  'Coaching Sessions',
]

const customizationItems = [
  'Training Needs Analysis (TNA)',
  'Industry Requirements',
  'Department-Specific Needs',
  'Competency Gaps',
  'Company Culture',
  'Business Objectives',
]

const CourseCard = ({ course }) => (
  <div className="group relative rounded-3xl bg-white border border-slate-200 p-7 shadow-md shadow-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/10">
    {course.featured && (
      <span className="absolute right-5 top-5 rounded-full bg-orange-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-orange-700">
        {course.featured}
      </span>
    )}

    <div className={`h-1 w-12 rounded-full mb-5 ${course.featured ? 'bg-orange-600' : 'bg-slate-900'}`}></div>

    <h3 className="text-xl font-semibold text-slate-950 pr-16">
      {course.title}
    </h3>

    <p className="mt-3 text-sm text-slate-600 leading-7">
      {course.description}
    </p>

    <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-600">
      Key Outcomes
    </p>

    <ul className="mt-3 space-y-2">
      {course.outcomes.map((outcome) => (
        <li key={outcome} className="flex gap-2 text-sm text-slate-600 leading-6">
          <span className="mt-1 text-orange-600">✓</span>
          <span>{outcome}</span>
        </li>
      ))}
    </ul>
  </div>
)

export default function Training() {
  const [activeTab, setActiveTab] = useState('leadership')
  const location = useLocation()

  useEffect(() => {
    // read hash like #leadership or #employees
    const hash = (location.hash || '').replace('#', '')
    if (hash === 'employees' || hash === 'employee' || hash === 'employees') {
      setActiveTab('employees')
    } else if (hash === 'leadership') {
      setActiveTab('leadership')
    }
  }, [location.hash])

  const currentCourses = activeTab === 'leadership' ? leadershipCourses : employeeCourses

  return (
    <section id="training" className="bg-slate-50">
      <div className="bg-slate-950 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <p className="uppercase tracking-[0.25em] text-orange-400 font-semibold text-sm mb-5">
            Training Catalogue
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Empower Your Workforce.
            <br />
            <span className="text-orange-400">Transform Your Culture.</span>
          </h1>

          <p className="mt-6 max-w-3xl text-slate-300 leading-8">
            Practical, engaging, and results-driven training programs designed for leaders,
            supervisors, managers, and frontline teams. Every program combines real-world
            business practices, interactive learning, and workplace application to create
            measurable performance improvement.
          </p>

          <div className="mt-10 grid sm:grid-cols-3 gap-5 max-w-3xl">
            <div>
              <div className="text-4xl font-semibold text-white">2</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-slate-400">
                Programme Streams
              </div>
            </div>

            <div>
              <div className="text-4xl font-semibold text-white">25+</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-slate-400">
                Courses & Workshops
              </div>
            </div>

            <div>
              <div className="text-4xl font-semibold text-white">100%</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-slate-400">
                Customizable to Your TNA
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-wrap gap-3 border-b border-slate-200 mb-12">
          <button
            type="button"
            onClick={() => setActiveTab('leadership')}
            className={`px-5 py-4 text-sm font-semibold transition-all border-b-2 ${
              activeTab === 'leadership'
                ? 'border-orange-600 text-orange-600'
                : 'border-transparent text-slate-600 hover:text-slate-950'
            }`}
          >
            Leadership Development
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('employees')}
            className={`px-5 py-4 text-sm font-semibold transition-all border-b-2 ${
              activeTab === 'employees'
                ? 'border-orange-600 text-orange-600'
                : 'border-transparent text-slate-600 hover:text-slate-950'
            }`}
          >
            Employee Development
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start border-b border-slate-200 pb-12 mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-950">
            {activeTab === 'leadership'
              ? 'Leadership Development Programs'
              : 'Employee Development Programs'}
          </h2>

          <div>
            <p className="text-slate-600 leading-8">
              {activeTab === 'leadership'
                ? 'Develop confident leaders who can inspire teams, improve performance, manage people effectively, and drive organizational success. Strong leadership creates stronger teams, higher productivity, lower turnover, and a healthier workplace culture.'
                : 'Enhance employee capabilities through practical workplace training designed to improve service quality, customer experience, and operational performance across your organization.'}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {(activeTab === 'leadership'
                ? ['Department Heads', 'Managers', 'Supervisors', 'Team Leaders', 'Future Leaders', 'High-Potential Employees', 'Operations Leaders']
                : ['Front Office Staff', 'Guest Service Teams', 'Restaurant Staff', 'Sales Teams', 'Customer Service Teams', 'Housekeeping Teams']
              ).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700 border border-orange-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {currentCourses.map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </div>

        <div className="mt-16 rounded-[2rem] bg-slate-950 text-white p-8 md:p-10">
          <div className="h-1 w-16 bg-orange-600 rounded-full mb-6"></div>

          <h3 className="text-3xl font-semibold">
            Training Delivery Methods
          </h3>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {deliveryMethods.map((method) => (
              <div
                key={method}
                className="rounded-2xl bg-white/10 border border-white/10 px-5 py-4 text-sm text-slate-200"
              >
                {method}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-[2rem] bg-orange-50 border border-orange-200 p-8 md:p-10">
          <div className="h-1 w-16 bg-orange-600 rounded-full mb-6"></div>

          <h3 className="text-3xl font-semibold text-slate-950">
            Customization Available
          </h3>

          <p className="mt-4 text-slate-700 leading-7 max-w-3xl">
            Every organization has different challenges and goals. We can customize
            training content based on your specific needs:
          </p>

          <div className="mt-7 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {customizationItems.map((item) => (
              <div key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                <span className="h-2 w-2 rounded-full bg-orange-600"></span>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-[2rem] bg-white border border-slate-200 shadow-xl shadow-slate-900/5 p-10 text-center">
          <h3 className="text-3xl font-semibold text-slate-950">
            Ready to Transform Your Team?
          </h3>

          <p className="mt-4 max-w-2xl mx-auto text-slate-600 leading-7">
            Get in touch today to discuss your customized training solutions and workforce development needs.
          </p>

          <Link
            to="/contact"
            className="inline-flex mt-8 px-8 py-3 rounded-full bg-orange-600 text-white font-semibold hover:bg-orange-700 hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-orange-500/20"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </section>
  )
}