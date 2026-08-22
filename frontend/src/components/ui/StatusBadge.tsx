import type { ProjectStatus } from '../../data/portfolio'

const STATUS_STYLES: Record<ProjectStatus, string> = {
  'In Progress': 'border-amber-300/70 bg-amber-50 text-amber-700',
  Production: 'border-emerald-300/70 bg-emerald-50 text-emerald-700',
  Completed: 'border-violet-200 bg-violet-50 text-violet-700',
}

interface StatusBadgeProps {
  status: ProjectStatus
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${STATUS_STYLES[status]}`}
    >
      <span
        aria-hidden="true"
        className={`size-1.5 rounded-full bg-current ${status === 'In Progress' ? 'animate-pulse' : ''}`}
      />
      {status}
    </span>
  )
}
