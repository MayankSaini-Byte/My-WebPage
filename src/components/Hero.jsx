import { ArrowRight, FolderGit2, Mail } from 'lucide-react'
import { profile } from '../data/portfolioData'
import CodeWindow from './CodeWindow'
import { useReveal } from '../hooks/useReveal'

/**
 * Hero
 * Two-column intro: text + CTAs on the left, VS Code mockup on the right.
 *
 * ANIMATION: the headline + subheadline do a staggered character-by-character
 * reveal — each letter slides up from below "like tokens being decoded one by
 * one". Implemented purely in CSS via the `.reveal-char` pattern (see
 * index.css). Each <span class="reveal-char"> sets an inline `--i` delay and
 * the parent toggles `.reveal-in` on mount (via useReveal).
 */
function CharStream({ text, base = 0, className = '' }) {
  // Wrap every character in its own reveal wrapper, preserving spaces.
  return (
    <span className={className}>
      {text.split('').map((ch, i) => (
        <span
          key={i}
          className="reveal-char"
          style={{ '--i': base + i }}
          aria-hidden="true"
        >
          <span>{ch === ' ' ? '\u00A0' : ch}</span>
        </span>
      ))}
    </span>
  )
}

export default function Hero() {
  // Wrap the hero text block; on mount the reveal ref adds `.reveal-in` to
  // each `.hero-reveal` element so the char-by-char reveal plays on load.
  const revealRef = useReveal()

  // Build the full headline once so char indexing stays continuous across
  // "Hello, I'm " (neutral) + name (accent).
  const lead = "Hello, I'm "
  const name = profile.name

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-28"
    >
      {/* Subtle radial backdrop — one faint indigo glow, nothing neon */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(60% 50% at 70% 0%, rgba(108,71,255,0.14), transparent 70%)',
        }}
      />

      <div className="container-px grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: copy + CTAs --------------------------------------------- */}
        <div ref={revealRef}>
          <span className="reveal inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
            Available for collaborations
          </span>

          {/* Headline: char-by-char reveal across the whole line */}
          <h1
            className="hero-reveal reveal-in mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          // `.reveal-in` is applied at mount (see useReveal) so the headline
          // plays on first paint rather than waiting for a scroll trigger.
          >
            <CharStream text={lead} base={0} />
            <CharStream
              text={name}
              base={lead.length}
              className="text-accent-soft"
            />
          </h1>

          {/* Subheadline: same token-reveal, starting after the headline */}
          <p className="hero-reveal reveal-in mt-4 text-xl font-semibold text-slate-200 sm:text-2xl">
            <CharStream
              text={profile.role}
              base={lead.length + name.length}
            />
          </p>

          <p className="reveal mt-5 max-w-xl text-base leading-relaxed text-slate-400">
            {profile.tagline}
          </p>

          {/* CTAs — primary solid, secondary outline */}
          <div className="reveal mt-8 flex flex-wrap items-center gap-4">
            <a href="#contact" className="btn-primary" data-cursor="link">
              <Mail size={16} aria-hidden="true" />
              Get in Touch
            </a>
            <a href="#projects" className="btn-outline" data-cursor="link">
              <FolderGit2 size={16} aria-hidden="true" />
              View Projects
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Right: VS Code window mockup --------------------------------- */}
        <div className="reveal">
          <CodeWindow />
        </div>
      </div>
    </section>
  )
}
