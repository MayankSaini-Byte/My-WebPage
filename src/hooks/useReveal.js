import { useEffect, useRef } from 'react'

/**
 * useReveal
 * Returns a ref. On mount, every `.hero-reveal` element under it gets
 * `.reveal-in` added so the char-by-char reveal plays immediately (rather
 * than waiting to scroll into view — the hero is already in view on load).
 *
 * @param {number} delay ms before the reveal class is applied (lets fonts settle)
 */
export function useReveal(delay = 60) {
  const ref = useRef(null)
  useEffect(() => {
    const node = ref.current
    if (!node) return
    const t = setTimeout(() => {
      node.querySelectorAll('.hero-reveal').forEach((el) =>
        el.classList.add('reveal-in')
      )
    }, delay)
    return () => clearTimeout(t)
  }, [delay])
  return ref
}
