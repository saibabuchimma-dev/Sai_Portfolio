import { ABOUT_HIGHLIGHTS, ABOUT_PARAGRAPHS } from '../data/portfolio'
import { IconMapPin } from '../components/icons'
import { Section } from '../components/ui/Section'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Reveal } from '../components/ui/Reveal'

export function About() {
  return (
    <Section id="about">
      <SectionHeading index="01" title="About Me" />
      <div className="mt-14 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <Reveal>
          <div className="space-y-5 text-[15px] leading-relaxed text-slate-400">
            {ABOUT_PARAGRAPHS.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs text-slate-500">
            <span className="inline-flex items-center gap-2">
              <IconMapPin className="size-3.5 text-indigo-400/80" />
              Hyderabad, India
            </span>
            <span className="inline-flex items-center gap-2">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-emerald-400" />
              Currently Frontend Developer @ SRYTAL Systems
            </span>
          </div>
        </Reveal>

        <div className="grid content-start gap-4 sm:grid-cols-2">
          {ABOUT_HIGHLIGHTS.map((h, i) => (
            <Reveal key={h} delay={i * 0.06} className="h-full">
              <div className="tile flex h-full items-center gap-3 p-4">
                <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400" />
                <span className="text-sm font-medium text-slate-200">{h}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
