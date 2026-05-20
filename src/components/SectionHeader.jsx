import React from 'react'

export default function SectionHeader({ title, description, className = '', centered = false }) {
  return (
    <div className={`${centered ? 'mx-auto text-center' : ''} ${className}`.trim()}>
      <h2 className="section-title font-semibold">{title}</h2>
      {description ? <p className="mt-4 section-text text-base md:text-lg max-w-3xl">{description}</p> : null}
    </div>
  )
}