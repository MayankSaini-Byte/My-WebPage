import { ArrowUpRight, Film, ShieldCheck, TrendingDown, Wallet, Github, Gauge, ExternalLink } from 'lucide-react'
import { projects } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

// Maps the `icon` string in the data to a Lucide component, keeping the data
// file free of JSX/imports.
const projectIcons = {
  wallet: Wallet,
  film: Film,
  shield: ShieldCheck,
  'trending-down': TrendingDown,
  'gauge': Gauge,
}

/**
 * ProjectCardTrace
 * The SVG overlay that traces a clockwise border on hover.
 * pathLength="1" normalises the perimeter so stroke-dashoffset 1→0 draws the
 * full rect clockwise (see .card-trace__rect in index.css).
 *
 * NOTE: rect uses rx for rounded corners; the inset (1px) keeps the stroke
 * inside the card's border radius.
 */
function ProjectCardTrace() {
  return (
    <svg
      className="card-trace__svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* preserveAspectRatio none + viewBox 0..100 stretches the rect to the
          card's actual pixel size. stroke-width is scaled in user units, so we
          keep it small; visual thickness comes from vector-effect below. */}
      <rect
        className="card-trace__rect"
        x="0.75"
        y="0.75"
        width="98.5"
        height="98.5"
        rx="2"
        ry="2"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="border-t border-white/10 py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading eyebrow="03 / Projects" title="Things I've built" />

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => {
            const Icon = projectIcons[project.icon] ?? Github
            return (
              <article
                key={project.id}
                // .reveal for scroll fade-in; --i staggers children.
                className="card-trace card reveal group flex flex-col p-6 transition-transform duration-200 hover:-translate-y-1"
                style={{ '--i': i * 80 }}
                // Cursor morphs to {{ }} braces over project cards.
                data-cursor="code"
              >
                <ProjectCardTrace />

                {/* Header: icon + external link hint */}
                <div className="relative z-10 mb-4 flex items-start justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-slate-800/60 text-accent-soft">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-slate-600 transition-colors group-hover:text-slate-300"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="relative z-10 text-lg font-semibold text-white">
                  {project.title}
                </h3>
                <p className="relative z-10 mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>

                {/* Tech stack pills */}
                <div className="relative z-10 mt-5 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="pill">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer buttons */}
                <div className="relative z-10 mt-5 flex flex-wrap items-center gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="link"
                      className="live-btn inline-flex items-center gap-1.5 rounded-lg border border-accent/40 bg-accent/10 px-3.5 py-2 text-xs font-semibold text-accent transition-all duration-300 hover:border-accent hover:bg-accent/20 hover:shadow-[0_0_16px_rgba(108,71,255,0.35)]"
                    >
                      <span className="live-btn__dot" aria-hidden="true" />
                      Live Demo
                      <ExternalLink size={13} aria-hidden="true" />
                    </a>
                  )}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="link"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-soft transition-colors hover:text-accent"
                  >
                    <Github size={15} aria-hidden="true" />
                    View on GitHub
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
