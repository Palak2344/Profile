import { useState } from 'react'
import { skills } from '../data'
import { useReveal } from '../hooks'
import { skillIcons } from './Icons'

export default function Skills() {
  const ref = useReveal()
  const [active, setActive] = useState(null)

  const toggle = (i) => setActive((cur) => (cur === i ? null : i))

  return (
    <section id="skills">
      <div className="wrap reveal" ref={ref}>
        <div className="sec-head">
          <span className="eyebrow">Toolbox</span>
          <h2>Skills &amp; Technologies</h2>
          <p className="sub">Tap a card to focus it and see my proficiency in each skill.</p>
        </div>
        <div className="skill-grid">
          {skills.map((group, i) => {
            const Icon = skillIcons[group.icon]
            const isActive = active === i
            return (
              <div
                className={`skill-card${isActive ? ' active' : ''}`}
                key={group.title}
                role="button"
                tabIndex={0}
                aria-pressed={isActive}
                onClick={() => toggle(i)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    toggle(i)
                  }
                }}
              >
                <div className="sc-top">
                  <span className="sc-ico">{Icon && <Icon />}</span>
                  <h3>{group.title}</h3>
                  <span className="sc-toggle" aria-hidden="true">
                    {isActive ? '−' : '+'}
                  </span>
                </div>
                <div className="skill-bars">
                  {group.items.map((s) => (
                    <div className="skill-row" key={s.name}>
                      <div className="skill-row-top">
                        <span>{s.name}</span>
                        <span className="pct">{s.level}%</span>
                      </div>
                      <div className="bar">
                        <span className="bar-fill" style={{ '--lvl': `${s.level}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
