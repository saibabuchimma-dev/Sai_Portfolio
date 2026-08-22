import { profile } from '../data/portfolio'
import { buildPlainMailto } from '../lib/contact'
import { IconGithub, IconLinkedin, IconMail } from './icons'

export function Footer() {
  return (
    <footer className="border-t border-ink/[0.07] bg-platinum">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8">
        <div className="flex items-center gap-3">
          {profile.photo ? (
            <img
              src={profile.photo}
              alt={profile.name}
              className="size-9 rounded-full object-cover object-top ring-2 ring-violet-500/40"
            />
          ) : (
            <span className="grid size-9 place-items-center rounded-full bg-violet-600 font-display text-sm font-semibold text-white">
              {profile.initials}
            </span>
          )}
          <div>
            <p className="text-sm font-semibold text-ink">{profile.name}</p>
            <p className="text-xs text-ink-muted">{profile.role}</p>
          </div>
        </div>

        <p className="order-last text-xs text-ink-muted sm:order-none">
          Designed &amp; built by {profile.name} · © {new Date().getFullYear()}
        </p>

        <div className="flex items-center gap-2.5">
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
    </footer>
  )
}
