export function BackgroundFX() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid-faint opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
      <div className="absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[120px]" />
      <div className="absolute -right-40 top-1/3 h-[420px] w-[420px] rounded-full bg-purple-600/[0.07] blur-[110px]" />
      <div className="absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-sky-600/[0.06] blur-[110px]" />
    </div>
  )
}
