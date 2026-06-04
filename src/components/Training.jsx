import React, { useEffect, useMemo, useState } from 'react'
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
    title: 'Create Personal Charisma',
    featured: 'Featured',
    duration: '35 Hours',
    description:
      'Master the art of attraction, influence, confidence, first impressions, persuasive communication, body language, and relationship building.',
    outcomes: [
      'Create a powerful first impression',
      'Build trust and likeability',
      'Strengthen persuasion and influence',
      'Develop charismatic communication',
      'Improve confidence, voice and body language',
    ],
  },
  {
    title: 'Executive & Leadership Coaching',
    featured: 'Premium',
    description:
      'Personalized coaching for executives, managers, and high-potential leaders who want to improve decision-making, communication, influence, and performance.',
    outcomes: [
      'Executive presence development',
      'Leadership clarity and focus',
      'Strategic communication',
      'Decision-making confidence',
      'Personalized growth roadmap',
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
      'Delegate effectively, build employee ownership, and create accountability systems that deliver results.',
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
  },
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

const salesCourses = [
  {
    title: 'Neuro Sales Mastery',
    featured: 'Featured',
    duration: '2 Days',
    description:
      'A high-impact sales program focused on ethical influence, client psychology, rapport building, persuasive communication, objection handling, and closing skills.',
    outcomes: [
      'Decode client behaviour quickly',
      'Build advanced rapport',
      'Improve pitch and first impression',
      'Use tonality and influence ethically',
      'Handle objections and ask for the sale',
    ],
  },
  {
    title: 'SMART Selling Techniques',
    description:
      'Enhance sales performance through structured selling methods, customer psychology, body language, and relationship-building strategies.',
    outcomes: [
      'Customer psychology & body language',
      'Closing & cross-selling techniques',
      'Selling on phone',
      'Customer relationship building',
    ],
  },
  {
    title: 'Upselling Skills',
    description:
      'For Sales, Reservation, Front Office & F&B Staff. Generate more revenue while keeping the customer experience at the centre.',
    outcomes: [
      'Understanding customer needs',
      'Suggestive selling',
      'Revenue generation techniques',
      'Guest-focused selling',
    ],
  },
  {
    title: 'Client Relationship Building',
    description:
      'Develop long-term customer relationships through trust, follow-up, communication, and value-based engagement.',
    outcomes: [
      'Building trust with clients',
      'Long-term relationship management',
      'Follow-up techniques',
      'Customer retention mindset',
    ],
  },
]

const certificationCourses = [
  {
    title: 'NLP 4-in-1 Certification Practitioner Training',
    featured: 'Flagship',
    duration: '8 Days',
    description:
      'An intensive practitioner certification program focused on NLP, TimeLine Therapy / Creating Your Future Techniques, Hypnosis, and Life Coaching.',
    outcomes: [
      'NLP Practitioner techniques',
      'TimeLine Therapy / Creating Your Future tools',
      'Hypnosis fundamentals',
      'Life Coaching frameworks',
      'Mindset, language and behaviour mastery',
    ],
  },
]

const coachingCourses = [
  {
    title: 'Life Coaching — One-on-One',
    featured: 'Personalized',
    description:
      'Individual coaching sessions designed to help participants gain clarity, set goals, overcome barriers, and move forward with confidence.',
    outcomes: [
      'Personal goal clarity',
      'Breakthrough limiting beliefs',
      'Action planning',
      'Motivation and accountability',
    ],
  },
  {
    title: 'Behavioural Profiling and Transformation',
    description:
      'Understand behavioural patterns, communication styles, emotional responses, and transformation techniques for personal and professional growth.',
    outcomes: [
      'Behavioural awareness',
      'Communication style understanding',
      'Emotional response management',
      'Transformation techniques',
    ],
  },
  {
    title: 'Confidence Enhancement',
    description:
      'Build inner confidence, communication strength, self-belief, and personal presence for professional and personal situations.',
    outcomes: [
      'Self-belief development',
      'Communication confidence',
      'Personal presence',
      'Handling pressure situations',
    ],
  },
  {
    title: 'Live the Life You Desire',
    description:
      'A personal development program focused on motivation, clarity, happiness, purpose, and meaningful growth.',
    outcomes: [
      'Personal clarity',
      'Motivation building',
      'Goal alignment',
      'Positive mindset development',
    ],
  },
  {
    title: 'Sharpen Your Brain — Creativity & Innovation',
    description:
      'Develop creative thinking, innovation skills, mental flexibility, and practical problem-solving ability.',
    outcomes: [
      'Creative thinking tools',
      'Innovation mindset',
      'Problem-solving techniques',
      'Mental flexibility',
    ],
  },
  {
    title: 'Speed Reading',
    description:
      'Improve reading speed, focus, comprehension, and learning efficiency for academic and professional growth.',
    outcomes: [
      'Reading speed improvement',
      'Better focus',
      'Improved comprehension',
      'Learning efficiency',
    ],
  },
]

const trainingCategories = [
  {
    id: 'leadership',
    label: 'Leadership Development',
    eyebrow: 'Managers · Supervisors · Future Leaders',
    headline: 'Leadership Development Programs',
    description:
      'Develop confident leaders who can inspire teams, improve performance, manage people effectively, and drive organizational success.',
    audience: ['Department Heads', 'Managers', 'Supervisors', 'Team Leaders', 'Future Leaders', 'High-Potential Employees'],
    courses: leadershipCourses,
  },
  {
    id: 'employees',
    label: 'Employee Development',
    eyebrow: 'Frontline · Service · Operations',
    headline: 'Employee Development Programs',
    description:
      'Enhance employee capabilities through practical workplace training designed to improve service quality, customer experience, and operational performance.',
    audience: ['Front Office Staff', 'Guest Service Teams', 'Restaurant Staff', 'Customer Service Teams', 'Housekeeping Teams'],
    courses: employeeCourses,
  },
  {
    id: 'sales',
    label: 'Sales Excellence',
    eyebrow: 'Sales · Persuasion · Conversion',
    headline: 'Sales Excellence Programs',
    description:
      'Develop high-performing sales professionals through ethical influence, customer psychology, rapport building, objection handling, and closing techniques.',
    audience: ['Sales Teams', 'Reservation Teams', 'Business Development Teams', 'Client-Facing Staff', 'Entrepreneurs'],
    courses: salesCourses,
  },
  {
    id: 'certifications',
    label: 'Certification Programs',
    eyebrow: 'NLP · Coaching · Practitioner Training',
    headline: 'Certification Programs',
    description:
      'Professional certification-based programs designed to build advanced skills in communication, behavioural change, coaching, mindset transformation, and personal excellence.',
    audience: ['Coaches', 'Trainers', 'Leaders', 'Consultants', 'Personal Development Learners'],
    courses: certificationCourses,
  },
  {
    id: 'coaching',
    label: 'Coaching & Transformation',
    eyebrow: 'Mindset · Confidence · Personal Growth',
    headline: 'Coaching & Personal Transformation',
    description:
      'Individual and group development programs designed to improve confidence, mindset, creativity, emotional strength, behavioural awareness, and personal growth.',
    audience: ['Individuals', 'Professionals', 'Executives', 'Students', 'Teams'],
    courses: coachingCourses,
  },
]

const featuredPrograms = [
  {
    title: 'NLP 4-in-1 Certification Practitioner Training',
    category: 'Certification Program',
    duration: '8 Days',
    description:
      'A premium practitioner program covering NLP, TimeLine Therapy / Creating Your Future Techniques, Hypnosis, and Life Coaching.',
    points: ['4 certification areas', 'Mindset transformation', 'Coaching tools', 'Behavioural change'],
    link: '/training#certifications',
  },
  {
    title: 'Neuro Sales Mastery',
    category: 'Sales Excellence',
    duration: '2 Days',
    description:
      'Transform sales performance through ethical influence, customer psychology, rapport building, tonality, and advanced closing techniques.',
    points: ['Client decoding', 'Persuasive pitch', 'Objection handling', 'Closing confidence'],
    link: '/training#sales',
  },
  {
    title: 'Create Personal Charisma',
    category: 'Leadership & Influence',
    duration: '35 Hours',
    description:
      'Master attraction, confidence, persuasive communication, first impressions, body language, and relationship building.',
    points: ['First impression', 'Confidence', 'Body language', 'Influence'],
    link: '/training#leadership',
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


const hospitalityTrainingPoints = [
  {
    title: 'Bespoke Curriculum',
    text: "Fully customizable programs based on your hotel’s operational needs, brand standards and service culture.",
  },
  {
    title: 'On-Site Excellence',
    text: 'Industry-specific training delivered directly at your property for convenience, participation and practical impact.',
  },
  {
    title: 'Comprehensive Growth',
    text: 'Programs available as exclusive in-house workshops and open-enrollment sessions for different team levels.',
  },
  {
    title: 'Elevate Your Standards',
    text: 'From frontline service to leadership, we help improve guest experience, communication and team confidence.',
  },
  {
    title: 'Our Philosophy',
    text: 'Excellence is not an act, but a habit. We help your team build that habit every day.',
  },
]


const HospitalityTrainingSpotlight = () => (
  <div className="mb-16 overflow-hidden rounded-[2.25rem] border border-slate-200 bg-white shadow-xl shadow-slate-900/5">
    <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
      <div className="relative overflow-hidden bg-slate-950 p-8 md:p-10 text-white">
        <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-white/5 blur-3xl" />

        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-400">
            Hospitality Training
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-semibold leading-tight">
            World-Class Training Tailored For Hospitality Organizations
          </h2>

          <p className="mt-5 text-slate-300 leading-8">
            Our training experts bring experience from leading hotel chains and deliver practical programs designed to raise service standards, guest satisfaction and team performance.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-3xl font-semibold text-white">In-House</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-slate-400">
                Workshops
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-3xl font-semibold text-white">TNA</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-slate-400">
                Based Design
              </p>
            </div>
          </div>

          <Link
            to="/contact"
            className="mt-8 inline-flex rounded-full bg-orange-600 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-500/20"
          >
            Discuss Training Needs
          </Link>
        </div>
      </div>

      <div className="p-8 md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-600">
          What Makes It Different
        </p>

        <div className="mt-7 grid gap-4">
          {hospitalityTrainingPoints.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:bg-white hover:shadow-xl hover:shadow-orange-500/10"
            >
              <div className="flex gap-4">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-700">
                  ✓
                </div>

                <div>
                  <h3 className="font-semibold text-slate-950">
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
      </div>
    </div>
  </div>
)

const CourseCard = ({ course }) => (
  <article className="group relative h-full rounded-3xl bg-white border border-slate-200 p-7 shadow-md shadow-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/10">
    <div className="flex items-start justify-between gap-4">
      <div className={`h-1 w-12 rounded-full mb-5 ${course.featured ? 'bg-orange-600' : 'bg-slate-900'}`}></div>

      <div className="flex flex-wrap justify-end gap-2">
        {course.duration && (
          <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-slate-600">
            {course.duration}
          </span>
        )}

        {course.featured && (
          <span className="rounded-full bg-orange-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-orange-700">
            {course.featured}
          </span>
        )}
      </div>
    </div>

    <h3 className="text-xl font-semibold text-slate-950">
      {course.title}
    </h3>

    <p className="mt-3 text-sm text-slate-600 leading-7">
      {course.description}
    </p>

    <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-orange-600">
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

    <Link
      to="/contact"
      className="mt-7 inline-flex text-sm font-semibold text-slate-950 group-hover:text-orange-600 transition-colors"
    >
      Discuss this program →
    </Link>
  </article>
)

const FeaturedProgramCard = ({ program }) => (
  <article className="group rounded-[2rem] bg-white border border-slate-200 p-7 shadow-xl shadow-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-orange-500/10">
    <div className="flex items-center justify-between gap-4">
      <span className="rounded-full bg-orange-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-orange-700">
        {program.category}
      </span>

      <span className="text-xs font-semibold text-slate-500">
        {program.duration}
      </span>
    </div>

    <h3 className="mt-6 text-2xl font-semibold text-slate-950 leading-tight">
      {program.title}
    </h3>

    <p className="mt-4 text-sm text-slate-600 leading-7">
      {program.description}
    </p>

    <div className="mt-6 grid grid-cols-2 gap-3">
      {program.points.map((point) => (
        <div key={point} className="rounded-2xl bg-slate-50 border border-slate-100 px-4 py-3 text-xs font-medium text-slate-700">
          {point}
        </div>
      ))}
    </div>

    <Link
      to={program.link}
      className="mt-7 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 group-hover:bg-orange-600"
    >
      View Program
      <span>→</span>
    </Link>
  </article>
)

export default function Training() {
  const location = useLocation()
  const [activeTab, setActiveTab] = useState('leadership')

  useEffect(() => {
    const hash = (location.hash || '').replace('#', '')
    const matchedCategory = trainingCategories.find((category) => category.id === hash)

    if (matchedCategory) {
      setActiveTab(matchedCategory.id)

      setTimeout(() => {
        const element = document.getElementById('programme-categories')
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 80)
    }
  }, [location.hash])

  const activeCategory = useMemo(
    () => trainingCategories.find((category) => category.id === activeTab) || trainingCategories[0],
    [activeTab]
  )

  return (
    <section id="training" className="bg-slate-50">
      <div className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-white/5 blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto px-6 py-24">
          <p className="uppercase tracking-[0.25em] text-orange-400 font-semibold text-sm mb-5">
            Training & Coaching Catalogue
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Empower People.
            <br />
            <span className="text-orange-400">Transform Performance.</span>
          </h1>

          <p className="mt-6 max-w-3xl text-slate-300 leading-8">
            Explore practical, engaging, and results-driven training and coaching programs
            designed for leaders, employees, sales teams, and individuals seeking professional
            or personal transformation.
          </p>

          <div className="mt-10 grid sm:grid-cols-3 gap-5 max-w-3xl">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-4xl font-semibold text-white">5</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-slate-400">
                Programme Streams
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-4xl font-semibold text-white">30+</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-slate-400">
                Courses & Workshops
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-4xl font-semibold text-white">100%</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-slate-400">
                Customizable to Your TNA
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20">
        <HospitalityTrainingSpotlight />

        <div className="mb-16">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[0.22em] text-orange-600 font-semibold text-xs">
              Featured Programs
            </p>

            <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-950">
              Featured Professional Development Programs
            </h2>

            <p className="mt-4 text-slate-600 leading-8">
              High-impact programs designed for certification, sales performance, personal influence,
              leadership presence, and behavioural transformation.
            </p>
          </div>

          <div className="mt-10 grid lg:grid-cols-3 gap-6">
            {featuredPrograms.map((program) => (
              <FeaturedProgramCard key={program.title} program={program} />
            ))}
          </div>
        </div>

        <div id="programme-categories" className="scroll-mt-28">
          <div className="max-w-3xl mb-8">
            <p className="uppercase tracking-[0.22em] text-orange-600 font-semibold text-xs">
              Programme Categories
            </p>

            <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-950">
              Explore Our Training Streams
            </h2>
          </div>

          <div className="flex flex-wrap gap-3 border-b border-slate-200 mb-12">
            {trainingCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveTab(category.id)}
                className={`px-5 py-4 text-sm font-semibold transition-all border-b-2 ${
                  activeTab === category.id
                    ? 'border-orange-600 text-orange-600'
                    : 'border-transparent text-slate-600 hover:text-slate-950'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start border-b border-slate-200 pb-12 mb-12">
            <div>
              <p className="uppercase tracking-[0.22em] text-orange-600 font-semibold text-xs">
                {activeCategory.eyebrow}
              </p>

              <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-950">
                {activeCategory.headline}
              </h2>
            </div>

            <div>
              <p className="text-slate-600 leading-8">
                {activeCategory.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {activeCategory.audience.map((tag) => (
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

          <div id={activeCategory.id} className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 scroll-mt-32">
            {activeCategory.courses.map((course) => (
              <CourseCard key={course.title} course={course} />
            ))}
          </div>
        </div>

        <div className="mt-20 rounded-[2rem] bg-white border border-slate-200 shadow-xl shadow-slate-900/5 overflow-hidden">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-slate-950 text-white p-8 md:p-10">
              <div className="h-1 w-16 bg-orange-600 rounded-full mb-6"></div>

              <h3 className="text-3xl font-semibold">
                Expert-Led Learning Experience
              </h3>

              <p className="mt-4 text-slate-300 leading-8">
                Our programs combine practical workplace application, behavioural transformation,
                interactive exercises, coaching conversations, role plays, and real-world business examples.
              </p>
            </div>

            <div className="p-8 md:p-10">
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  'Practical & Interactive',
                  'Behaviour-Focused',
                  'Business-Aligned',
                  'Coaching-Based',
                  'Role Plays & Activities',
                  'Customizable Delivery',
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-slate-50 border border-slate-100 px-5 py-4 text-sm font-medium text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-[2rem] bg-slate-950 text-white p-8 md:p-10">
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
            Every organization has different challenges and goals. We can customize training
            content based on your specific needs:
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
            Get in touch today to discuss your customized training solutions, certification programs,
            coaching needs, and workforce development goals.
          </p>

          <Link
            to="/contact"
            className="inline-flex mt-8 px-8 py-3 rounded-full bg-orange-600 text-white font-semibold hover:bg-orange-700 hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-orange-500/20"
          >
            Request Training Proposal
          </Link>
        </div>
      </div>
    </section>
  )
}