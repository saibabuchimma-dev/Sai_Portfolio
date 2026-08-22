import type { ProjectStatus } from '../../data/portfolio'

const STATUS_STYLES: Record<ProjectStatus, string> = {
  'In Progress':
    'border-amber-300/70 bg-amber-50 text-amber-700 dark:border-amber-400/30 dark:bg-amber-400/10 dark:text-amber-300',
  Production:
    'border-emerald-300/70 bg-emerald-50 text-emerald-700 dark:border-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-300',
  Completed:
    'border-violet-200 bg-violet-50 text-violet-700 dark:border-violet-400/30 dark:bg-violet-500/15 dark:text-violet-300',
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
