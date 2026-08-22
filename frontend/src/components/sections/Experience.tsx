import { EXPERIENCE } from '../../data/portfolio'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { Card } from '../ui/Card'
import { Chip } from '../ui/Chip'

export function Experience() {
  return (
    <Section id="experience" className="bg-platinum">
      <SectionHeading
        index="03"
        title="Experience"
        description="Where I've built, shipped, and grown as a frontend developer."
      />

      <div className="mt-10">
        <div className="relative border-l border-ink/[0.09] pl-8 sm:pl-10">
          {EXPERIENCE.map((job, i) => (
            <Reveal key={`${job.company}-${i}`} delay={i * 0.08}>
              <div className={`relative ${i < EXPERIENCE.length - 1 ? 'pb-12' : ''}`}>
                <span
                  className="absolute -left-[41px] top-1.5 grid size-4 place-items-center rounded-full border-2 border-platinum bg-violet-600 shadow-[0_0_0_4px_rgba(124,58,237,0.14)] sm:-left-[49px]"
                  aria-hidden="true"
                />

                <Card className="p-6 sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                    <div>
                      <h3 className="text-lg font-semibold text-ink">{job.role}</h3>
                      <p className="mt-1 font-medium text-violet-600">{job.company}</p>
                    </div>
                    <div className="text-left sm:text-right">
                      <p className="font-mono text-xs font-medium text-ink-soft">{job.period}</p>
                      <p className="mt-1 text-xs text-ink-muted">{job.location}</p>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-2.5">
                    {job.points.map((point, j) => (
                      <li key={j} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                        <span
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-violet-400"
                          aria-hidden="true"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>

                  {job.projects && job.projects.length > 0 && (
                    <div className="mt-6 border-t border-ink/[0.07] pt-5">
                      <p className="font-mono text-[11px] font-medium uppercase tracking-wide text-ink-muted">
                        Key projects
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {job.projects.map((project) => (
                          <Chip key={project} variant="muted">
                            {project}
                          </Chip>
                        ))}
                      </div>
                    </div>
                  )}
                </Card>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
