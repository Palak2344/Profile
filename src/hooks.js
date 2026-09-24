import { useEffect, useRef, useState } from 'react'

// Reveals children on scroll by toggling the `in` class (styled in index.css).
export function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      el.classList.add('in')
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('in')
            io.unobserve(en.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return ref
}

// Cycles through `words` with a typewriter effect. Respects reduced-motion.
export function useTypewriter(words, { typeSpeed = 70, deleteSpeed = 38, holdTime = 1500 } = {}) {
  const [text, setText] = useState('')
  useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setText(words[0] || '')
      return
    }
    let w = 0
    let c = 0
    let deleting = false
    let timer
    const tick = () => {
      const word = words[w]
      setText(word.slice(0, c))
      if (!deleting) {
        if (c < word.length) {
          c++
          timer = setTimeout(tick, typeSpeed)
        } else {
          deleting = true
          timer = setTimeout(tick, holdTime)
        }
      } else {
        if (c > 0) {
          c--
          timer = setTimeout(tick, deleteSpeed)
        } else {
          deleting = false
          w = (w + 1) % words.length
          timer = setTimeout(tick, 260)
        }
      }
    }
    tick()
    return () => clearTimeout(timer)
  }, [words, typeSpeed, deleteSpeed, holdTime])
  return text
}

// Counts up from 0 to `end` once the returned ref scrolls into view.
export function useCountUp(end, duration = 1400) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) {
      setValue(end)
      return
    }
    let raf
    let started = false
    const run = (t0) => {
      const step = (now) => {
        const p = Math.min((now - t0) / duration, 1)
        const eased = 1 - Math.pow(1 - p, 3)
        setValue(end * eased)
        if (p < 1) raf = requestAnimationFrame(step)
      }
      raf = requestAnimationFrame(step)
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting && !started) {
            started = true
            run(performance.now())
            io.unobserve(en.target)
          }
        })
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [end, duration])
  return [ref, value]
}

// Tracks the OS-level color scheme, updating if the user changes it.
export function usePrefersDark() {
  const [dark, setDark] = useState(
    () => typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
      : true
  )
  useEffect(() => {
    if (!window.matchMedia) return
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (e) => setDark(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return dark
}

// Returns a unit vector {x, y} pointing from the element toward the cursor,
// for eyes/head that track the mouse. Stays neutral under reduced-motion.
export function useEyeTracking(ref) {
  const [dir, setDir] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    let last = 0
    const onMove = (e) => {
      const now = e.timeStamp || Date.now()
      if (now - last < 24) return // throttle to ~40fps
      last = now
      const el = ref.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const cx = r.left + r.width / 2
      const cy = r.top + r.height * 0.42
      const dx = e.clientX - cx
      const dy = e.clientY - cy
      const dist = Math.hypot(dx, dy) || 1
      setDir({ x: dx / dist, y: dy / dist })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [ref])
  return dir
}

// Theme toggle: 'light' | 'dark' | null (follow system). Persists per-browser.
export function useTheme() {
  const [theme, setTheme] = useState(null)
  useEffect(() => {
    try {
      const saved = localStorage.getItem('pc-theme')
      if (saved === 'dark' || saved === 'light') setTheme(saved)
    } catch (e) {
      /* ignore */
    }
  }, [])
  useEffect(() => {
    const root = document.documentElement
    if (theme) root.setAttribute('data-theme', theme)
    else root.removeAttribute('data-theme')
  }, [theme])
  const toggle = () => {
    setTheme((cur) => {
      let effective = cur
      if (!effective) {
        effective = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      }
      const next = effective === 'dark' ? 'light' : 'dark'
      try {
        localStorage.setItem('pc-theme', next)
      } catch (e) {
        /* ignore */
      }
      return next
    })
  }
  return { theme, toggle }
}
