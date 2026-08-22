import { CERTIFICATION, EDUCATION } from '../../data/portfolio'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { Card } from '../ui/Card'
import { IconAward, IconCap } from '../icons'

export function Education() {
  return (
    <Section id="education" className="bg-platinum">
      <SectionHeading
        index="05"
        title="Education & Certification"
        description="Academic background and continued learning in frontend development."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {EDUCATION.map((item, i) => (
          <Reveal key={`${item.institution}-${i}`} delay={(i % 2) * 0.08}>
            <Card className="flex h-full gap-4 p-6">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-violet-50 text-violet-600">
                <IconCap className="size-5" />
              </span>
              <div className="min-w-0">
                <h3 className="text-base font-semibold text-ink">{item.degree}</h3>
                <p className="mt-1 text-sm font-medium text-violet-600">{item.institution}</p>
                {item.affiliation && (
                  <p className="mt-0.5 text-xs text-ink-muted">{item.affiliation}</p>
                )}
                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-ink-soft">
                  <span>{item.period}</span>
                  <span className="text-ink/20" aria-hidden="true">
                    •
                  </span>
                  <span className="font-medium text-ink">Score: {item.score}</span>
                </div>
              </div>
            </Card>
          </Reveal>
        ))}

        <Reveal delay={0.08} className="lg:col-span-2">
          <Card className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:gap-5">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-to-tr from-violet-600 to-violet-400 text-white shadow-[0_10px_24px_-10px_rgba(124,58,237,0.6)]">
              <IconAward className="size-5" />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <h3 className="text-base font-semibold text-ink">{CERTIFICATION.title}</h3>
                <span className="rounded-full border border-violet-200 bg-violet-50 px-2.5 py-0.5 font-mono text-xs font-medium text-violet-700 dark:text-violet-300">
                  {CERTIFICATION.issuer} · {CERTIFICATION.year}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{CERTIFICATION.description}</p>
            </div>
          </Card>
        </Reveal>
      </div>
    </Section>
  )
}
