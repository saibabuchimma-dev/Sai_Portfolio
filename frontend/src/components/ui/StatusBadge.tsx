import type { ProjectStatus } from '../../data/portfolio'

const STATUS_STYLES: Record<ProjectStatus, string> = {
  'In Progress': 'border-amber-400/30 bg-amber-400/10 text-amber-300',
  Production: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300',
  Completed: 'border-sky-400/30 bg-sky-400/10 text-sky-300',
}

interface StatusBadgeProps {
  status: ProjectStatus
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${STATUS_STYLES[status]}`}
    >
      <span aria-hidden="true" className={`size-1.5 rounded-full bg-current ${status === 'In Progress' ? 'animate-pulse' : ''}`} />
      {status}
    </span>
  )
}
