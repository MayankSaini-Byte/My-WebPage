/**
 * reveal.js
 * ----------------------------------------------------------------------------
 * Vanilla scroll-reveal via IntersectionObserver — no library.
 *
 * Any element with the `.reveal` class starts hidden (see index.css) and gets
 * `.reveal-in` when it crosses the viewport threshold. Default threshold 0.15.
 *
 * To stagger children, add `data-reveal-child` to each child and set an inline
 * `--i` custom property (0, 1, 2, …) — the transition-delay is derived from it.
 *
 * Observers fire `once`: after revealing, the element is unobserved so the
 * transition only plays the first time.
 * ----------------------------------------------------------------------------
 */

export function initReveal() {
  const els = Array.from(document.querySelectorAll('.reveal'))
  if (els.length === 0) return

  // Fallback: if IntersectionObserver is unavailable, reveal everything.
  if (!('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('reveal-in'))
    return
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-in')
          obs.unobserve(entry.target) // play once
        }
      })
    },
    { threshold: 0.15 }
  )

  els.forEach((el) => observer.observe(el))
  return observer
}
