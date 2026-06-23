import { skills } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

/**
 * Skills
 * Bento-style grid of category cards. Languages & ML categories render subtle
 * progress bars; Coursework renders tag chips.
 *
 * ANIMATION: the coursework chips pop in one-by-one with a 40ms stagger "like a
 * model loading its feature list" (see .chip-pop in index.css). Bars and cards
 * themselves use the standard scroll-reveal (.reveal).
 */
function SkillBar({ name, level }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="font-medium text-slate-200">{name}</span>
        <span className="text-xs text-slate-500">{level}%</span>
      </div>
      {/* Track */}
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
        {/* Width fills via a CSS transition when the card reveals.
            Using a keyframe-free width transition triggered by .reveal-in. */}
        <BarFill level={level} />
      </div>
    </div>
  )
}

/**
 * BarFill — width animates from 0 → level% when its card reveals. Done with
 * vanilla CSS transition + the .reveal-in class toggle (no library).
 */
function BarFill({ level }) {
  return (
    <span
      className="skill-bar-fill block h-full rounded-full bg-gradient-to-r from-accent to-accent-soft"
      style={{ '--w': `${level}%` }}
      aria-hidden="true"
    />
  )
}

export default function Skills() {
  // Global chip counter so the 40ms stagger continues across categories.
  let chipIndex = 0

  return (
    <section id="skills" className="border-t border-white/10 py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading eyebrow="02 / Skills" title="Tools & technologies" />

        {/* Bento grid: 3 columns on desktop, scales down gracefully */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((category, catIdx) => (
            <div
              key={category.id}
              className="card reveal flex flex-col p-6 transition-all duration-200 hover:-translate-y-1 hover:border-white/20"
              style={{ '--i': catIdx * 90 }}
            >
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-slate-300">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.items.map((item) =>
                  item.level ? (
                    <SkillBar key={item.name} name={item.name} level={item.level} />
                  ) : (
                    // Coursework chip — pops in with 40ms stagger on load.
                    <span
                      key={item.name}
                      className="pill chip-pop mr-2"
                      style={{ '--i': chipIndex++ }}
                    >
                      {item.name}
                    </span>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
