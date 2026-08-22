import { ABOUT_HIGHLIGHTS, ABOUT_PARAGRAPHS, profile } from '../../data/portfolio'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { Card } from '../ui/Card'
import { Chip } from '../ui/Chip'
import { IconMail, IconMapPin, IconPhone } from '../icons'
import { buildPlainMailto } from '../../lib/contact'

const QUICK_FACTS = [
  { label: 'Location', value: profile.location, icon: IconMapPin, href: undefined },
  { label: 'Email', value: profile.email, icon: IconMail, href: buildPlainMailto() },
  { label: 'Phone', value: profile.phoneDisplay, icon: IconPhone, href: profile.phoneHref },
]

export function About() {
  return (
    <Section id="about" className="bg-platinum">
      <SectionHeading
        index="01"
        title="About"
        description="A frontend developer who turns requirements into fast, maintainable interfaces."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <div className="space-y-5 text-[15px] leading-relaxed text-ink-soft">
            {ABOUT_PARAGRAPHS.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {ABOUT_HIGHLIGHTS.map((highlight) => (
              <Chip key={highlight} variant="accent">
                {highlight}
              </Chip>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Card className="p-6">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">
              Quick facts
            </p>
            <ul className="mt-5 space-y-4">
              {QUICK_FACTS.map(({ label, value, icon: Icon, href }) => (
                <li key={label} className="flex items-center gap-3.5">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-violet-50 text-violet-600">
                    <Icon className="size-[18px]" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] font-medium uppercase tracking-wide text-ink-muted">
                      {label}
                    </span>
                    {href ? (
                      <a
                        href={href}
                        className="block break-words text-sm font-medium text-ink transition-colors hover:text-violet-600"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="block break-words text-sm font-medium text-ink">{value}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>
      </div>
    </Section>
  )
}
