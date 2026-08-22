import { Reveal } from './Reveal'

interface SectionHeadingProps {
  index: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ index, title, description, align = 'center' }: SectionHeadingProps) {
  const centered = align === 'center'
  return (
    <Reveal className={centered ? 'text-center' : undefined}>
      <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-violet-600">
        {index} — {title}
      </p>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-[2.6rem] sm:leading-[1.1]">
        {title}
      </h2>
      <div
        aria-hidden="true"
        className={`mt-5 h-px w-16 bg-gradient-to-r from-violet-600 to-violet-400 ${centered ? 'mx-auto' : ''}`}
      />
      {description && (
        <p className={`mt-5 max-w-2xl text-[15px] leading-relaxed text-ink-muted ${centered ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </Reveal>
  )
}
