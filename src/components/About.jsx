import { useEffect, useRef } from 'react'
import { Mail, MapPin, Phone, User, Calendar, Building2 } from 'lucide-react'
import { about } from '../data/portfolioData'
import SectionHeading from './SectionHeading'
import { initNeuralCanvas } from '../lib/neuralCanvas'

// Map a fact label to its lucide icon for the quick-facts table.
const factIcons = {
  Name: User,
  Email: Mail,
  Phone: Phone,
  Institute: Building2,
  Year: Calendar,
  Location: MapPin,
}

/**
 * About
 * Two-column layout: narrative on the left, quick-facts table on the right.
 *
 * BACKGROUND: a passive neural-net graph animates faintly behind the section
 * (canvas2d, vanilla) — floating nodes connected by thin lines. Init in a
 * useEffect, cleaned up on unmount.
 */
export default function About() {
  const canvasRef = useRef(null)

  useEffect(() => {
    // Start the passive neural-net animation behind the About section.
    const cleanup = initNeuralCanvas(canvasRef.current)
    return cleanup
  }, [])

  return (
    <section id="about" className="relative overflow-hidden border-t border-white/10 py-20 sm:py-28">
      {/* Passive neural-net background canvas (faint, pointer-events none) */}
      <canvas ref={canvasRef} className="neural-canvas" aria-hidden="true" />

      {/* Content sits above the canvas */}
      <div className="container-px relative z-10">
        <SectionHeading eyebrow="01 / About" title="A bit about me" />

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
          {/* Left: narrative — spans 3 of 5 columns on large screens */}
          <div className="reveal lg:col-span-3">
            <div className="space-y-5 text-base leading-relaxed text-slate-400">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          {/* Right: quick-facts table — spans 2 of 5 columns */}
          <div className="reveal lg:col-span-2" style={{ '--i': 120 }}>
            <div className="card divide-y divide-white/10 p-2">
              {about.facts.map(({ label, value, href }, i) => {
                const Icon = factIcons[label] ?? User
                const content = (
                  <div className="flex items-center gap-4 px-4 py-3.5">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/10 bg-slate-800/60 text-accent-soft">
                      <Icon size={16} aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wider text-slate-500">
                        {label}
                      </p>
                      <p className="truncate text-sm font-medium text-slate-200">
                        {value}
                      </p>
                    </div>
                  </div>
                )
                return href ? (
                  <a
                    key={label}
                    href={href}
                    data-cursor="link"
                    className="block rounded-xl transition-colors hover:bg-white/5"
                    style={{ '--i': i * 50 }}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={label} className="rounded-xl">
                    {content}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
