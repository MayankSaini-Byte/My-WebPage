/**
 * CodeWindow
 * A realistic VS Code editor mockup showing a clean Python class that defines
 * the developer's profile. Purely decorative/marketing — built with spans and
 * semantic color tokens so it reads like real syntax highlighting without any
 * external dependency.
 *
 * The layout: title bar (traffic lights + tab) → editor (line numbers + code).
 */

// One code line = number + segments. Each segment is { t: text, c: colorClass }.
// Keeping it data-driven makes the snippet easy to tweak without JSX surgery.
const lines = [
  [
    { t: 'class ', c: 'text-rose-400' },
    { t: 'Developer', c: 'text-yellow-300' },
    { t: ':', c: 'text-slate-500' },
  ],
  [{ t: '    """Profile of an aspiring engineer."""', c: 'text-slate-500 italic' }],
  [
    { t: '    name ', c: 'text-sky-300' },
    { t: '= ', c: 'text-slate-500' },
    { t: '"Mayank Saini"', c: 'text-emerald-300' },
  ],
  [
    { t: '    role ', c: 'text-sky-300' },
    { t: '= ', c: 'text-slate-500' },
    { t: '"Python Developer & ML"', c: 'text-emerald-300' },
  ],
  [{ t: '', c: '' }],
  [
    { t: '    def ', c: 'text-rose-400' },
    { t: '__init__', c: 'text-yellow-300' },
    { t: '(self):', c: 'text-slate-300' },
  ],
  [
    { t: '        self.', c: 'text-slate-300' },
    { t: 'stack ', c: 'text-sky-300' },
    { t: '= [', c: 'text-slate-500' },
    { t: '"Python"', c: 'text-emerald-300' },
    { t: ', ', c: 'text-slate-500' },
    { t: '"AI/ML"', c: 'text-emerald-300' },
    { t: ']', c: 'text-slate-500' },
  ],
  [
    { t: '        self.', c: 'text-slate-300' },
    { t: 'focus ', c: 'text-sky-300' },
    { t: '= ', c: 'text-slate-500' },
    { t: '"Machine Learning"', c: 'text-emerald-300' },
  ],
  [
    { t: '        self.', c: 'text-slate-300' },
    { t: 'skills ', c: 'text-sky-300' },
    { t: '= [', c: 'text-slate-500' },
  ],
  [
    { t: '            "Python"', c: 'text-emerald-300' },
    { t: ', ', c: 'text-slate-500' },
    { t: '"NumPy"', c: 'text-emerald-300' },
    { t: ', ', c: 'text-slate-500' },
    { t: '"Pandas"', c: 'text-emerald-300' },
    { t: ',', c: 'text-slate-500' },
  ],
  [
    { t: '            "Matplotlib"', c: 'text-emerald-300' },
    { t: ', ', c: 'text-slate-500' },
    { t: '"Scikit-learn"', c: 'text-emerald-300' },
    { t: ', ', c: 'text-slate-500' },
    { t: '"Docker"', c: 'text-emerald-300' },
  ],
  [
    { t: '        ]', c: 'text-slate-500' },
  ],
  [{ t: '', c: '' }],
  [
    { t: '    def ', c: 'text-rose-400' },
    { t: 'greet', c: 'text-yellow-300' },
    { t: '(self):', c: 'text-slate-300' },
  ],
  [
    { t: '        return ', c: 'text-rose-400' },
    { t: 'f"Hello, I\'m {self.name} 👋"', c: 'text-emerald-300' },
  ],
]

export default function CodeWindow() {
  return (
    <div className="card overflow-hidden shadow-2xl shadow-black/40">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-slate-900/80 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
        <span className="h-3 w-3 rounded-full bg-green-400/80" />
        {/* Active file tab */}
        <div className="ml-3 flex items-center gap-2 rounded-t-md border border-white/10 border-b-transparent bg-slate-950/60 px-3 py-1 text-xs text-slate-300">
          <span className="text-accent-soft">⌬</span>
          <span>developer.py</span>
        </div>
      </div>

      {/* Editor body */}
      <div className="bg-slate-950/80 p-4 font-mono text-[13px] leading-relaxed">
        <pre className="overflow-x-auto" aria-hidden="true">
          <code>
            {lines.map((segments, i) => (
              <div key={i} className="flex">
                {/* Gutter line numbers */}
                <span className="mr-4 inline-block w-5 select-none text-right text-slate-600">
                  {i + 1}
                </span>
                <span className="flex-1 whitespace-pre">
                  {segments.length === 0 ? (
                    // Empty line — keep height consistent.
                    <span>&nbsp;</span>
                  ) : (
                    segments.map((seg, j) => (
                      <span key={j} className={seg.c}>
                        {seg.t}
                      </span>
                    ))
                  )}
                  {/* Blinking caret on the last line */}
                  {i === lines.length - 1 && (
                    <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-blink bg-accent-soft" />
                  )}
                </span>
              </div>
            ))}
          </code>
        </pre>
      </div>

      {/* Status bar — the thin strip at the bottom of VS Code */}
      <div className="flex items-center justify-between border-t border-white/10 bg-accent/90 px-4 py-1.5 text-[11px] font-medium text-white">
        <span>main</span>
        <span>UTF-8 · Python</span>
      </div>
    </div>
  )
}
