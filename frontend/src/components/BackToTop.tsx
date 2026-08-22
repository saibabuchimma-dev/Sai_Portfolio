import { useEffect, useState } from 'react'
import { IconArrowUp } from './icons'

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
      className={`fixed bottom-6 right-6 z-40 grid size-12 place-items-center rounded-full bg-violet-600 text-white shadow-[0_12px_30px_-8px_rgba(124,58,237,0.6)] transition-all duration-300 hover:-translate-y-1 hover:bg-violet-700 ${
        visible ? 'translate-y-0 scale-100 opacity-100' : 'pointer-events-none translate-y-4 scale-90 opacity-0'
      }`}
    >
      <IconArrowUp className="size-5" />
    </button>
  )
}
