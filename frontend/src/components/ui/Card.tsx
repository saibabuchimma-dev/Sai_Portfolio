import type { ElementType, ReactNode } from 'react'
import { cn } from '../../lib/utils'

interface CardProps {
  children: ReactNode
  as?: ElementType
  className?: string
}

export function Card({ children, as, className }: CardProps) {
  const Component = as ?? 'div'
  return <Component className={cn('surface-card', className)}>{children}</Component>
}
