import { profile } from '../../data/portfolio'
import { IconGithub, IconLinkedin, IconMail } from '../icons'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 sm:px-8 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <p className="font-semibold text-white">{profile.name}</p>
          <p className="mt-1 font-mono text-xs text-slate-500">Frontend Developer — {profile.stackLine}</p>
        </div>

        <div className="flex items-center gap-3">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="social-btn">
            <IconLinkedin className="size-[18px]" />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="social-btn">
            <IconGithub className="size-[18px]" />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Send an email" className="social-btn">
            <IconMail className="size-[18px]" />
          </a>
        </div>

        <p className="order-last text-xs text-slate-600 md:order-none">© {year} {profile.name}</p>
      </div>
    </footer>
  )
}
