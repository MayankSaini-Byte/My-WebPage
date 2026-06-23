import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/portfolioData'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container-px flex flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-slate-500">
          © {year} {profile.name}.
        </p>

        {/* Social row */}
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-slate-900/60 text-slate-400 transition-colors hover:text-white"
          >
            <Mail size={16} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-slate-900/60 text-slate-400 transition-colors hover:text-white"
          >
            <Github size={16} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-slate-900/60 text-slate-400 transition-colors hover:text-white"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
