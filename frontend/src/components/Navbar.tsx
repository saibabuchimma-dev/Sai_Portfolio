import { useEffect, useState } from 'react'
import { NAV_LINKS, SECTION_IDS, profile } from '../data/portfolio'
import { useActiveSection } from '../hooks/useActiveSection'
import { buildGmailCompose } from '../lib/contact'
import { IconMenu, IconX } from './icons'

export function Navbar() {
  const active = useActiveSection(SECTION_IDS)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-ink/[0.07] bg-platinum/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-[72px] w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="group flex items-center gap-3" aria-label="Home">
          {profile.photo ? (
            <img
              src={profile.photo}
              alt={profile.name}
              className="size-9 rounded-full object-cover object-top ring-2 ring-violet-500/40 shadow-[0_8px_20px_-10px_rgba(124,58,237,0.6)]"
            />
          ) : (
            <span className="grid size-9 place-items-center rounded-full bg-violet-600 font-display text-sm font-semibold text-white shadow-[0_8px_20px_-8px_rgba(124,58,237,0.6)]">
              {profile.initials}
            </span>
          )}
          <span className="hidden text-sm font-semibold tracking-tight text-ink sm:block">
            {profile.name}
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const id = link.href.slice(1)
            const isActive = active === id
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-violet-700' : 'text-ink-muted hover:text-ink'
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 -z-10 rounded-full bg-violet-50" aria-hidden="true" />
                  )}
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={buildGmailCompose()}
            target="_blank"
            rel="noreferrer"
            className="hidden btn-primary !px-5 !py-2.5 sm:inline-flex"
          >
            Say hello
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="grid size-10 place-items-center rounded-full border border-ink/12 bg-white text-ink-soft shadow-sm transition-colors hover:text-violet-600 lg:hidden"
          >
            {menuOpen ? <IconX className="size-5" /> : <IconMenu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-ink/[0.07] bg-platinum/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden ${
          menuOpen ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-5 py-4">
          {NAV_LINKS.map((link) => {
            const id = link.href.slice(1)
            const isActive = active === id
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    isActive ? 'bg-violet-50 text-violet-700' : 'text-ink-soft hover:bg-white'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
          <li className="pt-2">
            <a
              href={buildGmailCompose()}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              className="btn-primary w-full"
            >
              Say hello
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
