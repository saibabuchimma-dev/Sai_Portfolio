import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'

type ChipVariant = 'tech' | 'accent' | 'muted'

const VARIANT_CLASS: Record<ChipVariant, string> = {
  tech: 'tech-chip',
  accent:
    'rounded-full border border-violet-200 bg-violet-50 px-3.5 py-1.5 text-xs font-medium text-violet-700 dark:text-violet-300',
  muted:
    'rounded-lg border border-ink/[0.08] bg-platinum-100/70 px-3 py-1.5 text-xs font-medium text-ink-soft',
}

interface ChipProps {
  children: ReactNode
  variant?: ChipVariant
  className?: string
}

export function Chip({ children, variant = 'tech', className }: ChipProps) {
  return <span className={cn(VARIANT_CLASS[variant], className)}>{children}</span>
}
