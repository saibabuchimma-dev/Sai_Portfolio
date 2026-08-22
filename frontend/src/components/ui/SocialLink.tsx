import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'

interface SocialLinkProps {
  href: string
  label: string
  children: ReactNode
  external?: boolean
  className?: string
}

export function SocialLink({ href, label, children, external = true, className }: SocialLinkProps) {
  return (
    <a
      href={href}
      aria-label={label}
      className={cn('social-btn', className)}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      {children}
    </a>
  )
}
