import { useTheme } from '../hooks/use-theme'
import { IconMoon, IconSun } from './icons'
import { IconButton } from './ui/IconButton'

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <IconButton
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={className ? `overflow-hidden ${className}` : 'overflow-hidden'}
    >
      <span className="relative block size-5">
        <IconSun
          className={`absolute inset-0 size-5 transition-all duration-500 ${
            isDark ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'
          }`}
        />
        <IconMoon
          className={`absolute inset-0 size-5 transition-all duration-500 ${
            isDark ? '-rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
          }`}
        />
      </span>
    </IconButton>
  )
}
