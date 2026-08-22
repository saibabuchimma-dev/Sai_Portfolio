import { PROJECTS } from '../../data/portfolio'
import type { Project } from '../../data/portfolio'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { StatusBadge } from '../ui/StatusBadge'
import { Card } from '../ui/Card'
import { Chip } from '../ui/Chip'
import { IconExternal, IconArrowUpRight } from '../icons'

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card as="article" className="flex h-full flex-col p-6 sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-ink">{project.name}</h3>
          <p className="mt-1 text-sm text-violet-600">{project.subtitle}</p>
        </div>
        <StatusBadge status={project.status} />
      </div>

      <p className="mt-4 text-sm leading-relaxed text-ink-soft">{project.description}</p>
      {project.scopeNote && (
        <p className="mt-2 text-xs italic leading-relaxed text-ink-muted">{project.scopeNote}</p>
      )}

      <ul className="mt-5 space-y-2">
        {project.highlights.map((highlight, i) => (
          <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft">
            <IconArrowUpRight className="mt-0.5 size-4 shrink-0 text-violet-500" />
            {highlight}
          </li>
        ))}
      </ul>

      <div className="mt-auto border-t border-ink/[0.07] pt-5">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Chip key={tech}>{tech}</Chip>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-1">
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-violet-600 transition-colors hover:text-violet-700 dark:hover:text-violet-300"
          >
            <IconExternal className="size-4" />
            {project.linkLabel ?? 'View live project'}
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted">
            <span className="size-1.5 rounded-full bg-amber-500" aria-hidden="true" />
            {project.unavailableNote ?? 'Currently in development'}
          </span>
        )}
      </div>
    </Card>
  )
}

export function Projects() {
  return (
    <Section id="projects" className="bg-platinum-100/60">
      <SectionHeading
        index="04"
        title="Projects"
        description="Selected work — from AI workspaces to logistics platforms and job portals."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.name} delay={(i % 2) * 0.08}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
