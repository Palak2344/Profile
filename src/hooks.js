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
