import { SKILL_GROUPS } from '../../data/portfolio'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { Card } from '../ui/Card'
import { Chip } from '../ui/Chip'

export function Skills() {
  return (
    <Section id="skills" className="bg-platinum-100/60">
      <SectionHeading
        index="02"
        title="Skills"
        description="The tools and concepts I use to ship production-ready frontends."
      />

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((group, i) => (
          <Reveal key={group.title} delay={(i % 3) * 0.08}>
            <Card className="h-full p-6">
              <div className="flex items-center gap-3">
                <span className="grid size-8 place-items-center rounded-lg bg-violet-600 font-mono text-xs font-semibold text-white">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-base font-semibold text-ink">{group.title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Chip key={skill}>{skill}</Chip>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
