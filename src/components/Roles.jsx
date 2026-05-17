import React from 'react'

const sampleRoles = [
  { title: 'Front Desk Associate', location: 'City Center', desc: 'Guest-facing role with check-in/out responsibilities.', salary: 'AED 2,500 - 3,500 (approx)' },
  { title: 'Housekeeping Supervisor', location: 'Resort Area', desc: 'Manage housekeeping staff and quality checks.', salary: 'AED 3,000 - 4,500 (approx)' },
  { title: 'Banquet Server', location: 'Convention Hall', desc: 'Serve events and banquets with professionalism.', salary: 'AED 2,200 - 3,200 (approx)' },
  { title: 'Chef de Partie', location: 'Hotel Kitchen', desc: 'Responsible for a section of kitchen operations.', salary: 'AED 3,500 - 5,500 (approx)' },
  { title: 'Restaurant Manager', location: 'Downtown', desc: 'Oversee F&B operations, team and P&L.', salary: 'AED 6,000 - 10,000 (approx)' },
  { title: 'Sales Executive', location: 'Regional', desc: 'Drive corporate and group sales for properties.', salary: 'AED 4,000 - 7,000 (approx)' }
]

export default function Roles() {
  return (
    <section id="roles" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <span className="inline-flex px-3 py-1 rounded-full bg-accent-500/10 text-accent-500 text-xs tracking-[0.2em] uppercase">Open Roles</span>
          <h2 className="mt-4 section-title font-semibold">Opportunities built for hospitality professionals.</h2>
          <p className="mt-4 section-text text-lg">Browse current opportunities and reach out to apply. Salary ranges shown are approximate placeholders; exact figures available on enquiry.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {sampleRoles.map(r => (
            <div key={r.title} className="group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-xl text-primary-950">{r.title}</h3>
                  <div className="text-sm text-slate-500 mt-1">{r.location}</div>
                </div>
                <span className="text-xs uppercase tracking-[0.18em] text-accent-500 bg-accent-500/10 rounded-full px-3 py-1">Hiring</span>
              </div>
              <p className="mt-4 text-slate-700 text-sm leading-7">{r.desc}</p>
              <div className="mt-4 rounded-xl bg-primary-900 p-4 text-white">
                <div className="text-[11px] uppercase tracking-[0.2em] text-accent-200">Salary Range</div>
                <div className="mt-1 text-sm font-medium">{r.salary}</div>
              </div>
              <div className="mt-4">
                <a href="#contact" className="inline-flex items-center text-accent-500 font-medium hover:text-accent-600 transition-colors">Apply / Enquire</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
