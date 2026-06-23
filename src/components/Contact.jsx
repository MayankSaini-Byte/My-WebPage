import { motion } from 'framer-motion'
import { ArrowRight, Download, FileText } from 'lucide-react'
import { profile } from '../data/portfolioData'
import { staggerContainer, fadeInUpItem, viewportOnce } from '../lib/motion'

const contactLinks = [
  { label: 'GitHub', href: profile.github },
  { label: 'HuggingFace', href: profile.huggingface || 'https://huggingface.co/' },
  { label: 'Email', href: `mailto:${profile.email}` },
  { label: 'LinkedIn', href: profile.linkedin },
]

export default function Contact() {
  return (
    <section id="contact" className="border-t border-white/10 py-20 sm:py-28">
      <div className="container-px">
        <div className="grid gap-16 sm:grid-cols-2 sm:items-start">

          {/* LEFT COLUMN: Contact Info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-6"
          >
            {/* Eyebrow & Heading */}
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-indigo-500">
                05 / Contact
              </p>
              <h2 className="text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl">
                Build something together.
              </h2>
            </div>

            {/* Subtext */}
            <motion.p variants={fadeInUpItem} className="max-w-md text-base leading-relaxed text-slate-400">
              I'm always exploring new ideas at the intersection of machine learning. If you want to chat about open source, AI, or collaborate on a project, let's connect.
            </motion.p>

            {/* Contact Links */}
            <ul className="mt-4 flex flex-col gap-2">
              {contactLinks.map((link) => (
                <motion.li key={link.label} variants={fadeInUpItem}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    // "pulse-cursor" is a placeholder class in case there's custom cursor logic
                    className="group relative inline-flex items-center py-2 text-[28px] font-medium text-slate-300 transition-colors hover:text-indigo-400 sm:text-[32px] pulse-cursor"
                  >
                    <span className="relative z-10 flex items-center">
                      <ArrowRight
                        size={24}
                        className="absolute -left-8 opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                      />
                      {link.label}
                    </span>
                    {/* Animated Underline */}
                    <span className="absolute bottom-1 left-0 h-[2px] w-0 bg-indigo-500 transition-all duration-300 ease-out group-hover:w-full"></span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT COLUMN: Resume Card */}
          <motion.div
            variants={fadeInUpItem}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex sm:justify-end sm:pt-12"
          >
            <a
              href="./resume.pdf"
              download="resume.pdf"
              className="group relative flex w-full max-w-sm flex-col overflow-hidden rounded-[16px] border border-indigo-500/20 bg-[#0D0D1A] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400 hover:shadow-[0_0_20px_rgba(79,70,229,0.2)] sm:w-80"
            >
              {/* Card Header */}
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-indigo-500/10 text-indigo-400 transition-colors group-hover:bg-indigo-500/20">
                    <FileText size={20} />
                  </span>
                  {/* Assuming Space Grotesk is loaded, fallback to sans if not */}
                  <span className="font-['Space_Grotesk',sans-serif] text-[18px] font-medium text-white">
                    Resume
                  </span>
                </div>
                {/* Circular Download Button */}
                <div className="grid h-10 w-10 place-items-center rounded-full bg-indigo-600 text-white transition-transform duration-300 group-hover:scale-110">
                  <Download size={18} />
                </div>
              </div>

              {/* Faux Document Preview */}
              <div className="relative flex aspect-[1/1.2] w-full flex-col gap-3 rounded-lg border border-white/5 bg-[#14142B] p-5 shadow-inner transition-colors group-hover:bg-[#1A1A36]">
                {/* 1st bar (shorter, name) */}
                <div className="h-[6px] w-[35%] rounded-[4px] bg-indigo-500/40"></div>

                <div className="mt-2 space-y-3">
                  {/* 2nd, 3rd bars (medium, section headers) */}
                  <div className="h-[6px] w-[55%] rounded-[4px] bg-slate-600/60"></div>
                  <div className="h-[6px] w-[45%] rounded-[4px] bg-slate-600/60"></div>
                </div>

                <div className="mt-4 space-y-3">
                  {/* Rest (varying widths) */}
                  <div className="h-[6px] w-[90%] rounded-[4px] bg-slate-700/50"></div>
                  <div className="h-[6px] w-[85%] rounded-[4px] bg-slate-700/50"></div>
                  <div className="h-[6px] w-[70%] rounded-[4px] bg-slate-700/50"></div>
                  <div className="h-[6px] w-[95%] rounded-[4px] bg-slate-700/50"></div>
                  <div className="h-[6px] w-[60%] rounded-[4px] bg-slate-700/50"></div>
                </div>

                {/* Bottom fading gradient overlay */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 rounded-b-lg bg-gradient-to-t from-[#0D0D1A] to-transparent"></div>
              </div>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
