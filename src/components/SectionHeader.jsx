import React from 'react'

export default function SectionHeader({
  eyebrow,
  title,
  description,
  className = '',
  centered = false,
  onDark = false,
}) {
  return (
    <div className={`section-header ${centered ? 'centered mx-auto text-center' : ''} ${className}`.trim()}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className={`section-title ${onDark ? 'section-title-on-dark' : ''}`.trim()}>{title}</h2>
      {description ? <p className="section-text">{description}</p> : null}
    </div>
  )
}
