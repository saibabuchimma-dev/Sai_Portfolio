import { Fragment } from 'react'
import { motion } from 'framer-motion'
import { EASE } from '../../lib/motion'

interface WordRevealProps {
  text: string
  className?: string
  startDelay?: number
  stagger?: number
}

/**
 * Reveals a line of text one word at a time — each word rises and unblurs
 * in sequence, giving the slow "typed by hand" entrance for the hero intro.
 */
export function WordReveal({ text, className, startDelay = 0, stagger = 0.14 }: WordRevealProps) {
  const words = text.split(' ')

  return (
    <motion.span
      className={className}
      aria-label={text}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: startDelay },
        },
      }}
    >
      {words.map((word, i) => (
        <Fragment key={`${word}-${i}`}>
          <motion.span
            aria-hidden="true"
            className="inline-block"
            variants={{
              hidden: { opacity: 0, y: '0.6em' },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.62, ease: EASE },
              },
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 ? ' ' : ''}
        </Fragment>
      ))}
    </motion.span>
  )
}
