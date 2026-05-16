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
    <section id="roles" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-primary-500">Open Roles</h2>
        <p className="mt-3 text-gray-600">Browse current opportunities and reach out to apply. Salary ranges shown are approximate placeholders; exact figures available on enquiry.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {sampleRoles.map(r => (
            <div key={r.title} className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg text-primary-700">{r.title}</h3>
              <div className="text-sm text-gray-500">{r.location}</div>
              <p className="mt-3 text-gray-600 text-sm">{r.desc}</p>
              <div className="mt-3 text-sm text-gray-700"><strong>Salary:</strong> {r.salary}</div>
              <div className="mt-4">
                <a href="#contact" className="text-accent-500 hover:underline">Apply / Enquire</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
