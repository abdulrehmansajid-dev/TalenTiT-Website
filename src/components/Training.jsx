import React from 'react'

export default function Training() {
  return (
    <section id="training" className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold mb-4">Training Services</h1>
      <p className="text-slate-600 mb-6">We offer a range of training programs tailored to upskill your teams. Choose from soft-skills, leadership, and customized corporate programs.</p>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="p-4 border rounded-lg">
          <h2 className="font-semibold">Soft Skills Training</h2>
          <p className="text-sm text-slate-600">Communication, teamwork, time management and more.</p>
        </div>
        <div className="p-4 border rounded-lg">
          <h2 className="font-semibold">Leadership Training</h2>
          <p className="text-sm text-slate-600">Programs for new and experienced leaders to drive performance.</p>
        </div>
      </div>
    </section>
  )
}
