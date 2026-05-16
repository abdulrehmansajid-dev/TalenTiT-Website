import React from 'react'

const sampleRoles = [
  { title: 'Front Desk Associate', location: 'City Center', desc: 'Guest-facing role with check-in/out responsibilities.' },
  { title: 'Housekeeping Supervisor', location: 'Resort Area', desc: 'Manage housekeeping staff and quality checks.' },
  { title: 'Banquet Server', location: 'Convention Hall', desc: 'Serve events and banquets with professionalism.' }
]

export default function Roles() {
  return (
    <section id="roles" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-primary-500">Open Roles</h2>
        <p className="mt-3 text-gray-600">Browse current opportunities and reach out to apply.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {sampleRoles.map(r => (
            <div key={r.title} className="p-6 bg-white rounded-lg shadow">
              <h3 className="font-semibold text-lg text-primary-700">{r.title}</h3>
              <div className="text-sm text-gray-500">{r.location}</div>
              <p className="mt-3 text-gray-600 text-sm">{r.desc}</p>
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
