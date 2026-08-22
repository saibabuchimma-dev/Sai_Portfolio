import { SKILL_GROUPS } from '../data/portfolio'
import { Section } from '../components/ui/Section'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Reveal } from '../components/ui/Reveal'

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        index="02"
        title="Skills & Toolbox"
        description="Tools and technologies I use to design, build, and ship web applications."
      />
      <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {SKILL_GROUPS.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.06} className="h-full">
            <div className="surface-card group h-full p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-white">{group.title}</h3>
                <span className="font-mono text-xs text-slate-600 transition-colors group-hover:text-indigo-300">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="tech-chip cursor-default">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
