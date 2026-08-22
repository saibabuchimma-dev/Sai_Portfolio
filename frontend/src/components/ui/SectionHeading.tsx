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
      <p className="font-mono text-sm text-indigo-400/80">{index}.</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      <div
        aria-hidden="true"
        className={`mt-5 h-px w-20 bg-gradient-to-r from-indigo-400 to-purple-400 ${centered ? 'mx-auto' : ''}`}
      />
      {description && (
        <p className={`mt-5 max-w-2xl text-[15px] leading-relaxed text-slate-400 ${centered ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </Reveal>
  )
}
