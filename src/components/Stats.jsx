import { stats } from '../data'
import { useCountUp } from '../hooks'

function StatItem({ value, suffix, label }) {
  const [ref, current] = useCountUp(value)
  return (
    <div className="stat-tile" ref={ref}>
      <div className="stat-num">
        {Math.round(current)}
        <span className="stat-suffix">{suffix}</span>
      </div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

export default function Stats() {
  return (
    <section id="stats" className="stats-section">
      <div className="wrap">
        <div className="stat-band">
          {stats.map((s) => (
            <StatItem key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  )
}
