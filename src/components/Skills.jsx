import { useState, useEffect } from 'react'
import { skills } from '../data'
import { skillIcons } from './Icons'

const levelLabel = (lvl) =>
  lvl >= 90 ? 'Expert' : lvl >= 80 ? 'Advanced' : lvl >= 70 ? 'Proficient' : lvl >= 60 ? 'Intermediate' : 'Familiar'

export default function Skills() {
  const n = skills.length
  const [active, setActive] = useState(0)
  const [modal, setModal] = useState(null) // { group, skill }

  // circular signed distance from the focused card
  const offsetOf = (i) => {
    let d = i - active
    if (d > n / 2) d -= n
    if (d < -n / 2) d += n
    return d
  }

  const go = (dir) => setActive((a) => (a + dir + n) % n)

  // close modal on Escape
  useEffect(() => {
    if (!modal) return
    const onKey = (e) => e.key === 'Escape' && setModal(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [modal])

  return (
    <section id="skills">
      <div className="wrap">
        <div className="sec-head deck-head">
          <span className="eyebrow">Toolbox</span>
          <h2>Skills &amp; Technologies</h2>
          <p className="sub">Click a card to bring it to front · tap any skill to see my proficiency.</p>
        </div>

        <div
          className="deck"
          tabIndex={0}
          role="group"
          aria-label="Skill categories carousel — use left and right arrow keys"
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') {
              e.preventDefault()
              go(-1)
            } else if (e.key === 'ArrowRight') {
              e.preventDefault()
              go(1)
            }
          }}
        >
          <button className="deck-arrow left" onClick={() => go(-1)} aria-label="Previous category">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <button className="deck-arrow right" onClick={() => go(1)} aria-label="Next category">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
          </button>
          {skills.map((group, i) => {
            const off = offsetOf(i)
            const abs = Math.abs(off)
            const Icon = skillIcons[group.icon]
            const isFront = off === 0
            return (
              <div
                key={group.title}
                className={`deck-card${isFront ? ' front' : ''}`}
                style={{
                  transform: `translateX(calc(-50% + ${off * 56}%)) scale(${1 - abs * 0.08})`,
                  opacity: abs > 2 ? 0 : 1 - abs * 0.34,
                  zIndex: n - abs,
                  pointerEvents: abs > 2 ? 'none' : 'auto',
                }}
                onClick={() => !isFront && setActive(i)}
                aria-hidden={abs > 2}
              >
                <div className="dc-head">
                  <span className="dc-ico">{Icon && <Icon />}</span>
                  <div className="dc-titles">
                    <span className="dc-count">
                      {i + 1} / {n}
                    </span>
                    <h3>{group.title}</h3>
                  </div>
                </div>
                <div className="dc-tags">
                  {group.items.map((s) => (
                    <button
                      className="dc-tag"
                      key={s.name}
                      onClick={(e) => {
                        e.stopPropagation()
                        if (isFront) setModal({ group, skill: s })
                        else setActive(i)
                      }}
                    >
                      <span className="dc-dot">•</span> {s.name}
                    </button>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="deck-dots">
          {skills.map((g, i) => (
            <button
              key={g.title}
              className={`dot-btn${i === active ? ' on' : ''}`}
              aria-label={`Show ${g.title}`}
              aria-current={i === active}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>

      {modal && (
        <div className="skill-modal-overlay" onClick={() => setModal(null)}>
          <div
            className="skill-modal"
            role="dialog"
            aria-modal="true"
            aria-label={`${modal.skill.name} proficiency`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="sm-close" onClick={() => setModal(null)} aria-label="Close">
              ×
            </button>
            <span className="sm-cat">{modal.group.title}</span>
            <h3 className="sm-name">{modal.skill.name}</h3>
            <div className="sm-bar">
              <span className="sm-fill" style={{ '--lvl': `${modal.skill.level}%` }} />
            </div>
            <div className="sm-foot">
              <span className="sm-label">{levelLabel(modal.skill.level)}</span>
              <span className="sm-pct">{modal.skill.level}%</span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
