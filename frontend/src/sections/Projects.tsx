import { PROJECTS } from '../data/portfolio'
import { ProjectCard } from '../components/ProjectCard'
import { Section } from '../components/ui/Section'
import { SectionHeading } from '../components/ui/SectionHeading'

export function Projects() {
  const featured = PROJECTS.filter((p) => p.featured)
  const rest = PROJECTS.filter((p) => !p.featured)
  return (
    <Section id="projects">
      <SectionHeading
        index="04"
        title="Projects"
        description="A selection of products and platforms I've built — from production applications to work in active development."
      />
      <div className="mt-14 space-y-6">
        {featured.map((p) => (
          <ProjectCard key={p.name} project={p} featured />
        ))}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {rest.map((p, i) => (
            <ProjectCard key={p.name} project={p} delay={i * 0.07} />
          ))}
        </div>
      </div>
    </Section>
  )
}
