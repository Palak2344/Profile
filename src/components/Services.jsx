import { services } from '../data'
import { useReveal } from '../hooks'
import { skillIcons } from './Icons'

export default function Services() {
  const ref = useReveal()
  return (
    <section id="services">
      <div className="wrap reveal" ref={ref}>
        <div className="sec-head">
          <span className="eyebrow">What I do</span>
          <h2>Services</h2>
          <p className="sub">How I can help bring a product from idea to production.</p>
        </div>
        <div className="svc-grid">
          {services.map((s, i) => {
            const Icon = skillIcons[s.icon]
            return (
              <div className="svc-card" key={s.title}>
                <span className="svc-num">0{i + 1}</span>
                <div className="svc-ico">{Icon && <Icon />}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
