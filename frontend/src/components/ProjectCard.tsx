import type { Project } from '../data/portfolio'
import { IconExternal } from './icons'
import { Reveal } from './ui/Reveal'
import { StatusBadge } from './ui/StatusBadge'

function AbstractVisual({ name }: { name: string }) {
  const monogram = name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
  return (
    <div aria-hidden="true" className="relative hidden min-h-[280px] overflow-hidden rounded-xl border border-white/[0.08] bg-night-900 lg:block">
      <div className="absolute inset-0 bg-grid-faint opacity-60" />
      <div className="absolute -right-16 -top-16 size-56 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="absolute -bottom-16 -left-16 size-56 rounded-full bg-purple-500/20 blur-3xl" />
      <div className="animate-spin-slower absolute inset-0 m-auto size-44 rounded-full border border-dashed border-white/10" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex size-28 items-center justify-center rounded-3xl border border-white/10 bg-white/[0.04] shadow-[0_0_60px_-10px_rgba(99,102,241,0.5)] backdrop-blur-sm">
          <span className="text-gradient font-mono text-4xl font-bold">{monogram}</span>
        </div>
      </div>
    </div>
  )
}

interface ProjectCardProps {
  project: Project
  featured?: boolean
  delay?: number
}

export function ProjectCard({ project, featured = false, delay = 0 }: ProjectCardProps) {
  return (
    <Reveal delay={delay} className={featured ? '' : 'h-full'}>
      <article
        className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-night-800/40 transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-400/40 hover:bg-night-800/70 hover:shadow-[0_24px_64px_-24px_rgba(99,102,241,0.45)] ${
          featured ? 'lg:grid lg:grid-cols-[1.1fr_0.9fr]' : ''
        }`}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 size-56 rounded-full bg-indigo-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        />

        <div className={`flex h-full flex-col p-6 sm:p-8 ${featured ? 'lg:p-10' : ''}`}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className={`font-bold tracking-tight text-white ${featured ? 'text-2xl sm:text-3xl' : 'text-xl'}`}>
                {project.name}
              </h3>
              <p className="mt-1 text-sm text-slate-500">{project.subtitle}</p>
            </div>
            <StatusBadge status={project.status} />
          </div>

          <p className="mt-4 text-sm leading-relaxed text-slate-400">{project.description}</p>

          {project.scopeNote && <p className="mt-3 font-mono text-xs text-slate-500">{project.scopeNote}</p>}

          <ul className={`mt-6 grid gap-2.5 ${featured ? 'sm:grid-cols-2' : ''}`}>
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-2.5 text-[13.5px] leading-snug text-slate-400">
                <span
                  aria-hidden="true"
                  className="mt-[6px] size-1.5 shrink-0 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 transition-transform duration-300 group-hover:scale-125"
                />
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-1.5">
            {project.technologies.map((t) => (
              <span key={t} className="tech-chip">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-auto pt-7">
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-indigo-400/40 bg-indigo-500/10 px-5 py-2.5 text-sm font-medium text-indigo-200 transition-all duration-300 hover:border-indigo-300/60 hover:bg-indigo-500/20 hover:text-white"
              >
                {project.linkLabel ?? 'View Live Project'}
                <IconExternal className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ) : (
              <span className="inline-flex items-center gap-2.5 font-mono text-sm text-amber-300/90">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-amber-400/50" />
                  <span className="relative inline-flex size-2 rounded-full bg-amber-400" />
                </span>
                {project.unavailableNote}
              </span>
            )}
          </div>
        </div>

        {featured && <AbstractVisual name={project.name} />}
      </article>
    </Reveal>
  )
}
