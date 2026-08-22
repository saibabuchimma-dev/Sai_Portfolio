import { EXPERIENCE } from '../data/portfolio'
import { IconMapPin } from '../components/icons'
import { Section } from '../components/ui/Section'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Reveal } from '../components/ui/Reveal'

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        index="03"
        title="Experience"
        description="Professional journey building and shipping frontend features."
      />
      <ol className="relative mt-14 space-y-12 before:absolute before:bottom-2 before:left-[7px] before:top-2 before:w-px before:bg-gradient-to-b before:from-indigo-400/60 before:via-purple-400/25 before:to-transparent sm:before:left-[8px]">
        {EXPERIENCE.map((job, idx) => (
          <li key={job.company} className="relative pl-9 sm:pl-12">
            <span aria-hidden="true" className="absolute left-0 top-1.5 flex size-4 items-center justify-center">
              <span className="absolute inline-flex size-full rounded-full bg-indigo-500/30 blur-[6px]" />
              <span className="relative size-2.5 rounded-full bg-gradient-to-br from-indigo-300 to-purple-400 ring-4 ring-night-950" />
            </span>
            <Reveal delay={idx * 0.08}>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-lg font-semibold text-white sm:text-xl">{job.role}</h3>
                <span className="text-[15px] font-medium text-indigo-300">@ {job.company}</span>
              </div>
              <div className="mt-2.5 flex flex-wrap items-center gap-2.5 font-mono text-xs text-slate-400">
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1">{job.period}</span>
                <span className="inline-flex items-center gap-1.5">
                  <IconMapPin className="size-3.5 text-indigo-400/80" />
                  {job.location}
                </span>
              </div>
              <ul className="mt-5 space-y-2.5">
                {job.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm leading-relaxed text-slate-400">
                    <span aria-hidden="true" className="mt-[7px] size-1.5 shrink-0 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400" />
                    {p}
                  </li>
                ))}
              </ul>
              {job.projects && (
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-slate-500">Projects</span>
                  {job.projects.map((name) => (
                    <span
                      key={name}
                      className="rounded-md border border-indigo-400/20 bg-indigo-500/[0.07] px-2.5 py-1 font-mono text-[11px] text-indigo-200/90"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              )}
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
