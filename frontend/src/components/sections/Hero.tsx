import { motion } from 'framer-motion'
import { profile, PROJECTS } from '../../data/portfolio'
import { EASE } from '../../lib/motion'
import { buildGmailCompose } from '../../lib/contact'
import { WordReveal } from '../ui/WordReveal'
import { IconArrowUpRight, IconDownload, IconGithub, IconLinkedin, IconMail, IconMapPin } from '../icons'
import { Button } from '../ui/Button'
import { SocialLink } from '../ui/SocialLink'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE, delay },
  }),
}

const FLOATING_STATS = [
  { value: '3+', label: 'Years exp.', className: 'left-0 top-10 sm:-left-5' },
  { value: `${PROJECTS.length}`, label: 'Projects', className: 'right-0 bottom-14 sm:-right-4' },
]

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-halo" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 bg-grid-faint [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-5 pb-12 pt-32 sm:px-8 sm:pt-36 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:pb-16 lg:pt-40">
        <div>
          <motion.span
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-surface/70 px-3.5 py-1.5 text-xs font-medium text-ink-muted shadow-sm backdrop-blur"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            Open to full-time opportunities
          </motion.span>

          <h1 className="mt-6 font-display tracking-tight text-ink">
            <WordReveal
              text="Hi, my name is"
              className="block text-2xl font-medium text-ink-soft sm:text-3xl"
              stagger={0.16}
            />
            <WordReveal
              text={profile.name}
              className="mt-2 block text-5xl font-semibold leading-[1.05] text-gradient sm:text-6xl lg:text-[4.4rem]"
              startDelay={0.75}
              stagger={0.16}
            />
          </h1>

          <motion.p
            custom={1.5}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-6 max-w-xl font-mono text-sm text-violet-600 sm:text-base"
          >
            {profile.role} · {profile.stackLine}
          </motion.p>

          <motion.p
            custom={1.7}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-muted"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            custom={1.9}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button href={buildGmailCompose()} external>
              <IconMail className="size-4" />
              Say hello
            </Button>
            <Button href="#projects" variant="secondary">
              View projects
              <IconArrowUpRight className="size-4" />
            </Button>
            <Button href={profile.resume} download variant="secondary">
              <IconDownload className="size-4" />
              Download CV
            </Button>
          </motion.div>

          <motion.div
            custom={2.1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-7 flex items-center gap-3"
          >
            <SocialLink href={profile.github} label="GitHub">
              <IconGithub className="size-[18px]" />
            </SocialLink>
            <SocialLink href={profile.linkedin} label="LinkedIn">
              <IconLinkedin className="size-[18px]" />
            </SocialLink>
            <span className="ml-1 inline-flex items-center gap-1.5 text-sm text-ink-muted">
              <IconMapPin className="size-4 text-violet-500" />
              {profile.location}
            </span>
          </motion.div>
        </div>

        <motion.div
          custom={1.2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex justify-center lg:justify-end"
        >
          <div className="relative animate-float-slow">
            <div className="relative size-72 sm:size-80 lg:size-[25rem]">
              <div
                className="absolute -inset-8 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.22),transparent_62%)] blur-2xl"
                aria-hidden="true"
              />
              <div
                className="absolute -inset-4 animate-spin-slow rounded-full border border-dashed border-violet-300/70"
                aria-hidden="true"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-600 via-violet-500 to-violet-300 p-[3px] shadow-[0_35px_80px_-30px_rgba(124,58,237,0.6)]">
                <div className="size-full rounded-full bg-platinum p-2.5">
                  {profile.photo ? (
                    <img
                      src={profile.photo}
                      alt={`Portrait of ${profile.name}`}
                      className="size-full rounded-full object-cover object-top"
                      loading="eager"
                    />
                  ) : (
                    <div className="grid size-full place-items-center rounded-full bg-surface font-display text-7xl font-semibold text-violet-600">
                      {profile.initials}
                    </div>
                  )}
                </div>
              </div>

              {FLOATING_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className={`absolute rounded-2xl border border-ink/[0.08] bg-surface/90 px-4 py-2.5 text-center shadow-[0_16px_40px_-18px_rgba(23,19,31,0.35)] backdrop-blur ${stat.className}`}
                >
                  <p className="font-display text-xl font-semibold leading-none text-ink">{stat.value}</p>
                  <p className="mt-1 text-[10px] font-medium uppercase tracking-wide text-ink-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
