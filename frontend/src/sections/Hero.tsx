import { motion } from 'framer-motion'
import type { ComponentType, SVGProps } from 'react'
import type { Variants } from 'framer-motion'
import { profile } from '../data/portfolio'
import { EASE } from '../lib/motion'
import { IconArrowUpRight, IconChevronDown, IconGithub, IconLinkedin } from '../components/icons'

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
}

interface SocialLink {
  label: string
  href: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

const SOCIALS: SocialLink[] = [
  { label: 'LinkedIn', href: profile.linkedin, icon: IconLinkedin },
  { label: 'GitHub', href: profile.github, icon: IconGithub },
]

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pb-24 pt-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-faint [mask-image:radial-gradient(ellipse_65%_60%_at_50%_40%,black_30%,transparent_75%)]" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.p variants={item} className="font-mono text-sm text-indigo-300">
            Hi, my name is
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-[4.25rem] lg:leading-[1.05]"
          >
            Sai Babu <span className="text-gradient">Chimma</span>
          </motion.h1>

          <motion.p variants={item} className="mt-5 text-lg font-semibold text-slate-200 sm:text-2xl">
            Frontend Developer<span className="text-slate-500"> — </span>
            <span className="text-gradient">React.js | Next.js | TypeScript | Tailwind CSS</span>
          </motion.p>

          <motion.p variants={item} className="mt-6 max-w-xl leading-relaxed text-slate-400">
            {profile.summary}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn-primary">
              View Projects
              <IconArrowUpRight className="size-4" />
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex items-center gap-4">
            {SOCIALS.map((s) => {
              const Icon = s.icon
              return (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={`${s.label} profile`} className="social-btn">
                  <Icon className="size-[18px]" />
                </a>
              )
            })}
            <span aria-hidden="true" className="h-px w-16 bg-gradient-to-r from-slate-600/60 to-transparent" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
          className="relative mx-auto w-60 sm:w-72 lg:w-full lg:max-w-sm"
        >
          <div
            aria-hidden="true"
            className="animate-spin-slower absolute -inset-5 rounded-full bg-[conic-gradient(from_120deg,transparent_0%,rgba(99,102,241,0.5)_25%,transparent_50%,rgba(168,85,247,0.4)_75%,transparent_100%)]"
          />
          <div aria-hidden="true" className="absolute -inset-5 rounded-full bg-indigo-500/20 blur-2xl" />

          <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-full border border-white/10 bg-night-800/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
            {profile.photo ? (
              <img src={profile.photo} alt={`Portrait of ${profile.name}`} className="h-full w-full object-cover" />
            ) : (
              <div className="flex flex-col items-center gap-3">
                <span className="text-gradient font-mono text-7xl font-bold">{profile.initials}</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-slate-500">{profile.name}</span>
              </div>
            )}
          </div>

          <motion.div
            aria-hidden="true"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -right-3 top-6 rounded-xl border border-white/10 bg-night-900/80 px-3.5 py-2 font-mono text-xs text-sky-300 shadow-lg backdrop-blur sm:-right-6"
          >
            React.js
          </motion.div>
          <motion.div
            aria-hidden="true"
            animate={{ y: [0, 9, 0] }}
            transition={{ duration: 6.5, delay: 0.8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-3 bottom-10 rounded-xl border border-white/10 bg-night-900/80 px-3.5 py-2 font-mono text-xs text-purple-300 shadow-lg backdrop-blur sm:-left-8"
          >
            Next.js
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-slate-500 transition-colors hover:text-indigo-300 sm:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">scroll</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}>
          <IconChevronDown className="size-4" />
        </motion.span>
      </motion.a>
    </section>
  )
}
