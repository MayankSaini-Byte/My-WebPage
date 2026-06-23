/**
 * neuralCanvas.js
 * ----------------------------------------------------------------------------
 * Passive canvas background: faint floating nodes connected by thin lines —
 * like a neural-net graph drifting behind the About section. Pure vanilla JS
 * + canvas2d. Kept deliberately subtle (low opacity, slow drift) so it never
 * distracts from the content.
 *
 * Optimisations:
 *  - Capped node count based on canvas area (no runaway on big screens).
 *  - Only redraws nodes within a max linking distance (keeps line count sane).
 *  - Pauses when the tab is hidden.
 *  - Respects prefers-reduced-motion (renders a static frame, no rAF loop).
 * ----------------------------------------------------------------------------
 */

const NODE_COLOR = '108, 71, 255' // indigo #6C47FF as rgb (for alpha tricks)
const MAX_LINK_DIST = 130 // px — only draw lines between nodes closer than this

export function initNeuralCanvas(canvas) {
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const reduceMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches

  let width = 0
  let height = 0
  let nodes = []
  let rafId = null
  let running = false

  const dpr = Math.min(window.devicePixelRatio || 1, 2)

  // Build node set sized to the canvas area — bigger area → more nodes, capped.
  const buildNodes = () => {
    const area = width * height
    const count = Math.min(42, Math.max(18, Math.round(area / 22000)))
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      // slow drift velocity
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.6 + 0.8, // node radius
    }))
  }

  // Size the canvas to its CSS box, accounting for device pixel ratio.
  const resize = () => {
    const rect = canvas.getBoundingClientRect()
    width = rect.width
    height = rect.height
    canvas.width = Math.floor(width * dpr)
    canvas.height = Math.floor(height * dpr)
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    buildNodes()
  }

  const draw = () => {
    ctx.clearRect(0, 0, width, height)

    // Move nodes, bounce off edges.
    for (const n of nodes) {
      n.x += n.vx
      n.y += n.vy
      if (n.x < 0 || n.x > width) n.vx *= -1
      if (n.y < 0 || n.y > height) n.vy *= -1
    }

    // Draw connecting lines between nearby nodes (the "neural" links).
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i]
        const b = nodes[j]
        const dx = a.x - b.x
        const dy = a.y - b.y
        const dist = Math.hypot(dx, dy)
        if (dist < MAX_LINK_DIST) {
          // alpha falls off with distance — links fade toward the edge.
          const alpha = (1 - dist / MAX_LINK_DIST) * 0.35
          ctx.strokeStyle = `rgba(${NODE_COLOR}, ${alpha})`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.stroke()
        }
      }
    }

    // Draw the nodes themselves on top.
    for (const n of nodes) {
      ctx.fillStyle = `rgba(${NODE_COLOR}, 0.55)`
      ctx.beginPath()
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
      ctx.fill()
    }
  }

  const loop = () => {
    draw()
    rafId = requestAnimationFrame(loop)
  }

  const start = () => {
    if (running) return
    running = true
    if (!reduceMotion) rafId = requestAnimationFrame(loop)
  }
  const stop = () => {
    running = false
    if (rafId) cancelAnimationFrame(rafId)
  }

  resize()
  draw() // always render one frame so something shows even when static
  start()

  // Responsive + lifecycle hooks.
  let resizeTimer = null
  const onResize = () => {
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(() => {
      resize()
      draw()
    }, 150)
  }
  const onVisibility = () => {
    if (document.hidden) stop()
    else start()
  }
  window.addEventListener('resize', onResize)
  document.addEventListener('visibilitychange', onVisibility)

  // Cleanup for React unmount.
  return () => {
    stop()
    window.removeEventListener('resize', onResize)
    document.removeEventListener('visibilitychange', onVisibility)
  }
}
