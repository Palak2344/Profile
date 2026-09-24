import { useState } from 'react'
import { skills } from '../data'
import { useReveal } from '../hooks'
import { skillIcons } from './Icons'

const levelLabel = (lvl) =>
  lvl >= 90 ? 'Expert' : lvl >= 80 ? 'Advanced' : lvl >= 70 ? 'Proficient' : lvl >= 60 ? 'Intermediate' : 'Familiar'

export default function Skills() {
  const ref = useReveal()
  const [active, setActive] = useState(0)
  const group = skills[active]
  const Icon = skillIcons[group.icon]

  return (
    <section id="skills">
      <div className="wrap reveal" ref={ref}>
        <div className="sec-head">
          <span className="eyebrow">Toolbox</span>
          <h2>Skills &amp; Technologies</h2>
          <p className="sub">Pick a category to see my proficiency in each skill.</p>
        </div>

        <div className="skill-tabs" role="tablist">
          {skills.map((g, i) => {
            const TabIcon = skillIcons[g.icon]
            return (
              <button
                key={g.title}
                role="tab"
                aria-selected={i === active}
                className={`skill-tab${i === active ? ' on' : ''}`}
                onClick={() => setActive(i)}
              >
                {TabIcon && <TabIcon />} {g.title}
              </button>
            )
          })}
        </div>

        <div className="skill-panel">
          <div className="sp-head">
            <span className="sp-ico">{Icon && <Icon />}</span>
            <div>
              <h3>{group.title}</h3>
              <span className="sp-count">{group.items.length} skills</span>
            </div>
          </div>
          <div className="sp-list" key={active}>
            {group.items.map((s) => (
              <div className="sp-row" key={s.name}>
                <div className="sp-row-top">
                  <span className="sp-name">{s.name}</span>
                  <span className="sp-lvl">
                    <em>{levelLabel(s.level)}</em>
                    {s.level}%
                  </span>
                </div>
                <div className="sp-bar">
                  <span className="sp-fill" style={{ '--lvl': `${s.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
