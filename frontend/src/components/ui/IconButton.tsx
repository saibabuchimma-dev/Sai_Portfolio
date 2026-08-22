import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'

interface IconButtonProps {
  children: ReactNode
  onClick?: () => void
  'aria-label': string
  'aria-expanded'?: boolean
  title?: string
  className?: string
}

export function IconButton({
  children,
  onClick,
  title,
  className,
  'aria-label': ariaLabel,
  'aria-expanded': ariaExpanded,
}: IconButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
      className={cn(
        'grid size-10 place-items-center rounded-full border border-ink/12 bg-surface text-ink-soft shadow-sm transition-colors duration-300 hover:border-violet-500/60 hover:text-violet-600 dark:hover:text-violet-300',
        className,
      )}
    >
      {children}
    </button>
  )
}
