import { CERTIFICATIONS, EDUCATION } from '../data/portfolio'
import { IconAward, IconCap } from '../components/icons'
import { Section } from '../components/ui/Section'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Reveal } from '../components/ui/Reveal'

export function Education() {
  return (
    <Section id="education">
      <SectionHeading
        index="05"
        title="Education"
        description="Academic background along with professional certification."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {EDUCATION.map((edu, i) => (
          <Reveal key={edu.degree} delay={i * 0.08} className="h-full">
            <article className="surface-card flex h-full flex-col p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <span className="flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-indigo-300">
                  <IconCap className="size-5" />
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-xs text-slate-400">
                  {edu.period}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold leading-snug text-white">{edu.degree}</h3>
              <p className="mt-2 text-sm text-indigo-300/90">{edu.institution}</p>
              {edu.affiliation && <p className="mt-0.5 text-xs text-slate-500">{edu.affiliation}</p>}
              <div className="mt-auto flex items-end justify-between pt-6">
                <span className="text-xs uppercase tracking-widest text-slate-500">Score</span>
                <span className="text-gradient font-mono text-2xl font-bold">{edu.score}</span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {CERTIFICATIONS.map((certification) => (
        <Reveal key={certification.title} delay={0.15}>
          <article className="surface-card mt-6 flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:gap-6 sm:p-8">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-indigo-300">
              <IconAward className="size-6" />
            </span>
            <div className="flex-1">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-lg font-semibold text-white">{certification.title}</h3>
                <span className="text-sm text-indigo-300/90">
                  {certification.issuer} · {certification.year}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{certification.description}</p>
            </div>
          </article>
        </Reveal>
      ))}
    </Section>
  )
}
