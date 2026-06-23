/**
 * cursor.js
 * ----------------------------------------------------------------------------
 * Vanilla custom cursor — no library.
 *
 * Behaviour (ML-themed):
 *  - Main cursor: small glowing indigo "neural-node" dot (#6C47FF, 10px),
 *    follows the pointer 1:1.
 *  - Trailing cursor: larger hollow ring (24px) that lags behind via lerp —
 *    mimics how a neural net propagates signals with delay.
 *  - Hovering links/buttons (.cursor-target-link): node expands + ring
 *    tightens, like a model converging on a prediction.
 *  - Hovering project cards (.cursor-target-code): node morphs into a tiny
 *    {{ }} brace glyph, suggesting code/ML notation.
 *
 * The dot/ring elements are injected once into <body>; hover states are toggled
 * by adding/removing classes on <html>, driven by CSS for performance.
 *
 * Touch devices are skipped entirely (no hover/pointer:fine).
 * ----------------------------------------------------------------------------
 */

const INDIGO = '#6C47FF'

// Lerp factor — lower = more lag. 0.18 gives a gentle "signal delay" feel.
const RING_LERP = 0.18

export function initCursor() {
  // Only enable on devices with a precise pointer + hover capability.
  const fineHover =
    window.matchMedia('(hover: hover) and (pointer: fine)').matches
  if (!fineHover) return

  // Create the two cursor elements.
  const node = document.createElement('div')
  node.className = 'cursor-node'
  const ring = document.createElement('div')
  ring.className = 'cursor-ring'
  document.body.appendChild(node)
  document.body.appendChild(ring)
  document.documentElement.classList.add('cursor-active')

  // Track raw pointer position for the node (1:1) and a smoothed position for
  // the ring (lagging).
  let mouseX = window.innerWidth / 2
  let mouseY = window.innerHeight / 2
  let ringX = mouseX
  let ringY = mouseY
  let rafId = null

  const onMove = (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
    // Node follows instantly.
    node.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`
    if (rafId === null) {
      rafId = requestAnimationFrame(tick)
    }
  }

  // Animation loop: ease the ring toward the pointer each frame.
  const tick = () => {
    ringX += (mouseX - ringX) * RING_LERP
    ringY += (mouseY - ringY) * RING_LERP
    ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`
    // Keep animating until the ring is effectively at the pointer, then pause.
    if (Math.abs(mouseX - ringX) > 0.5 || Math.abs(mouseY - ringY) > 0.5) {
      rafId = requestAnimationFrame(tick)
    } else {
      rafId = null
    }
  }

  // Hover delegation — detect what's under the pointer and toggle states.
  const onOver = (e) => {
    const target = e.target.closest('[data-cursor]')
    if (!target) return
    const mode = target.dataset.cursor
    // Remove previous, then set the active mode on <html>.
    document.documentElement.classList.remove('cursor-link', 'cursor-code')
    if (mode === 'link') document.documentElement.classList.add('cursor-link')
    else if (mode === 'code') document.documentElement.classList.add('cursor-code')
  }
  const onOut = (e) => {
    const target = e.target.closest('[data-cursor]')
    if (!target) return
    // Only clear if we're truly leaving (not entering a child of the same type).
    const to = e.relatedTarget
    if (to && to.closest && to.closest('[data-cursor]')) return
    document.documentElement.classList.remove('cursor-link', 'cursor-code')
  }

  window.addEventListener('mousemove', onMove, { passive: true })
  // mouseover/mouseout bubble, so delegation works across dynamically added nodes.
  document.addEventListener('mouseover', onOver)
  document.addEventListener('mouseout', onOut)

  // Hide cursor when the window loses focus (e.g. alt-tab).
  const hide = () => {
    node.style.opacity = '0'
    ring.style.opacity = '0'
  }
  const show = () => {
    node.style.opacity = ''
    ring.style.opacity = ''
  }
  window.addEventListener('blur', hide)
  window.addEventListener('focus', show)

  // Expose INDIGO for potential reuse; not strictly required.
  return { INDIGO, cleanup: () => {
    window.removeEventListener('mousemove', onMove)
    document.removeEventListener('mouseover', onOver)
    document.removeEventListener('mouseout', onOut)
    window.removeEventListener('blur', hide)
    window.removeEventListener('focus', show)
    if (rafId) cancelAnimationFrame(rafId)
    node.remove()
    ring.remove()
    document.documentElement.classList.remove('cursor-active', 'cursor-link', 'cursor-code')
  }}
}
