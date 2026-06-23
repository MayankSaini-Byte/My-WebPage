/**
 * SectionHeading
 * Consistent eyebrow + title block for every section. Small accent eyebrow on
 * top, large bold title below — establishes hierarchy through weight/tracking,
 * not color, per the design system.
 *
 * Uses the vanilla `.reveal` pattern (IntersectionObserver) for fade-in-up.
 *
 * Props:
 *  - eyebrow: short label above the title (e.g. "01 / About")
 *  - title:   the section's main heading
 */
export default function SectionHeading({ eyebrow, title }) {
  return (
    <div className="reveal mb-12 max-w-2xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-soft">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
    </div>
  )
}
