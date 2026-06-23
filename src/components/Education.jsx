import { Award, GraduationCap, MapPin } from 'lucide-react'
import { education, achievements } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

/**
 * Education & Achievements.
 * Left column: education cards. Right column: achievements list.
 * Both use the vanilla `.reveal` scroll pattern.
 */
export default function Education() {
  return (
    <section id="education" className="border-t border-white/10 py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading eyebrow="04 / Education" title="Education & achievements" />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left column: education cards */}
          <div className="reveal space-y-5">
            {education.map((edu, i) => (
              <article
                key={edu.id}
                className="card flex gap-4 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-white/20"
                style={{ '--i': i * 80 }}
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-slate-800/60 text-accent-soft">
                  <GraduationCap size={20} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-300">
                    <MapPin size={13} aria-hidden="true" />
                    {edu.institution}
                  </p>
                  <p className="mt-2 text-xs font-medium uppercase tracking-wider text-accent-soft">
                    {edu.period}
                  </p>
                  {edu.note && (
                    <p className="mt-2 text-sm text-slate-500">{edu.note}</p>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* Right column: achievements list */}
          <div className="card reveal p-6" style={{ '--i': 120 }}>
            <h3 className="mb-5 flex items-center gap-2 text-base font-semibold text-white">
              <Award size={18} className="text-accent-soft" aria-hidden="true" />
              Achievements
            </h3>
            <ul className="space-y-4">
              {achievements.map((a, i) => (
                <li key={a.id} className="flex items-start gap-3" style={{ '--i': i * 60 }}>
                  {/* Bullet marker */}
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <div>
                    <p className="text-sm font-medium text-slate-200">{a.title}</p>
                    <p className="text-sm text-slate-500">{a.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
