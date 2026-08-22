import type { ComponentType, SVGProps } from 'react'
import { profile } from '../data/portfolio'
import { IconGithub, IconLinkedin, IconMail, IconPhone } from '../components/icons'
import { Section } from '../components/ui/Section'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Reveal } from '../components/ui/Reveal'

interface ContactLink {
  label: string
  value: string
  href: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  external?: boolean
}

const CONTACT_LINKS: ContactLink[] = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: IconMail },
  { label: 'Phone', value: profile.phoneDisplay, href: profile.phoneHref, icon: IconPhone },
  { label: 'LinkedIn', value: 'linkedin.com/in/saibabuchimma', href: profile.linkedin, icon: IconLinkedin, external: true },
  { label: 'GitHub', value: 'github.com/saibabuchimma-dev', href: profile.github, icon: IconGithub, external: true },
]

export function Contact() {
  return (
    <Section id="contact">
      <SectionHeading
        index="06"
        title="Let's Build Something Great"
        description="Have an opportunity, a project, or just want to talk frontend? Feel free to reach out through any of the channels below."
      />

      <Reveal className="mt-10 text-center">
        <a href={`mailto:${profile.email}`} className="btn-primary">
          Say Hello
          <IconMail className="size-4" />
        </a>
      </Reveal>

      <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {CONTACT_LINKS.map((c, i) => {
          const Icon = c.icon
          return (
            <Reveal key={c.label} delay={i * 0.07} className="h-full">
              <a
                href={c.href}
                {...(c.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                className="surface-card flex h-full flex-col items-center gap-3 p-6 text-center"
              >
                <span className="flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-indigo-300">
                  <Icon className="size-5" />
                </span>
                <span className="text-xs font-medium uppercase tracking-widest text-slate-500">{c.label}</span>
                <span className="break-all text-[13px] text-slate-200">{c.value}</span>
              </a>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
