import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data/portfolioData'

/**
 * Navbar
 * Sticky, glassmorphism header. On scroll past 60px the bar compresses its
 * height and adds a frosted-glass backdrop (`.nav-compact`, driven by CSS).
 * Active link is derived from the section currently in view via
 * IntersectionObserver, so it stays accurate as the user scrolls.
 */
const COMPACT_THRESHOLD = 60 // px scrolled before the navbar compresses

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  // Toggle the "scrolled" visual state past the 60px threshold.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > COMPACT_THRESHOLD)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the nav link for whichever section is in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' } // triggers near the viewport centre
    )
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* The inner bar carries the height + backdrop transitions (see .nav-bar). */}
      <nav
        className={`nav-bar container-px mx-auto flex items-center justify-between border-b ${
          scrolled
            ? 'nav-compact'
            : 'h-16 border-transparent bg-transparent'
        }`}
      >
        {/* Brand / monogram */}
        <a
          href="#home"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight text-white"
          data-cursor="link"
          aria-label={`${profile.name} — home`}
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-slate-900 text-accent-soft">
            MS
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                data-cursor="link"
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  active === id
                    ? 'text-white'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                aria-current={active === id ? 'page' : undefined}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-slate-900/60 text-slate-200 md:hidden"
          data-cursor="link"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile dropdown — slides in under the bar */}
      {open && (
        <div className="border-t border-white/10 bg-slate-950/95 backdrop-blur-xl md:hidden">
          <ul className="container-px flex flex-col py-2">
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  data-cursor="link"
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-3 py-3 text-sm font-medium transition-colors ${
                    active === id ? 'text-white' : 'text-slate-400'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
