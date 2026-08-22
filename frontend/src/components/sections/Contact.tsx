import { profile } from '../../data/portfolio'
import { Section } from '../ui/Section'
import { Reveal } from '../ui/Reveal'
import { buildGmailCompose, buildPlainMailto } from '../../lib/contact'
import {
  IconGithub,
  IconLinkedin,
  IconMail,
  IconMapPin,
  IconPhone,
} from '../icons'

const CHANNELS = [
  {
    label: 'Email',
    value: profile.email,
    icon: IconMail,
    href: buildPlainMailto(),
  },
  {
    label: 'Phone',
    value: profile.phoneDisplay,
    icon: IconPhone,
    href: profile.phoneHref,
  },
  {
    label: 'Location',
    value: profile.location,
    icon: IconMapPin,
    href: undefined,
  },
]

export function Contact() {
  return (
    <Section id="contact" className="bg-platinum-100/60">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-ink/[0.08] bg-white p-8 shadow-[0_1px_3px_rgba(18,21,28,0.04),0_24px_60px_-30px_rgba(18,21,28,0.25)] sm:p-12">
          <div className="pointer-events-none absolute inset-0 bg-halo" aria-hidden="true" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
            {/* Left — call to action */}
            <div>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-violet-600">
                06 — Contact
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-[2.6rem] sm:leading-[1.1]">
                Let's build something together
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-muted">
                Have a role, a project, or an idea in mind? Say hello and I'll get
                back to you. The button opens your mail app with a short message
                ready to send.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href={buildGmailCompose()} target="_blank" rel="noreferrer" className="btn-primary">
                  <IconMail className="size-4" />
                  Say hello
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-secondary">
                  <IconLinkedin className="size-4" />
                  Connect on LinkedIn
                </a>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="social-btn">
                  <IconGithub className="size-[18px]" />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-btn">
                  <IconLinkedin className="size-[18px]" />
                </a>
                <a href={buildPlainMailto()} aria-label="Email" className="social-btn">
                  <IconMail className="size-[18px]" />
                </a>
              </div>
            </div>

            {/* Right — channels */}
            <div className="flex flex-col gap-3">
              {CHANNELS.map(({ label, value, icon: Icon, href }) => {
                const inner = (
                  <>
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-violet-50 text-violet-600 transition-colors group-hover:bg-violet-600 group-hover:text-white">
                      <Icon className="size-[18px]" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[11px] font-medium uppercase tracking-wide text-ink-muted">
                        {label}
                      </span>
                      <span className="block truncate text-sm font-semibold text-ink">{value}</span>
                    </span>
                  </>
                )

                return href ? (
                  <a
                    key={label}
                    href={href}
                    className="group tile flex items-center gap-4 p-4"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={label} className="group tile flex items-center gap-4 p-4">
                    {inner}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
