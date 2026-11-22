type ClassValue = string | false | null | undefined

export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(' ')
}

const MONTHS: Record<string, number> = {
  jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
  jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11,
}

function parseMonthYear(text: string): Date {
  const match = text.trim().match(/([A-Za-z]{3,})\s*(\d{4})/)
  if (!match) return new Date()
  const month = MONTHS[match[1].toLowerCase().slice(0, 3)] ?? 0
  const year = Number(match[2])
  return new Date(year, month, 1)
}

export function parsePeriod(period: string): { start: Date; end: Date } {
  const [startPart, endPart] = period.split('–').map((s) => s.trim())
  const start = parseMonthYear(startPart)
  const end = (endPart?.toLowerCase() === 'present') ? new Date() : parseMonthYear(endPart)
  return { start, end }
}

export function calculateTotalExperience(periods: string[]): { years: number; months: number; totalMonths: number } {
  let totalMonths = 0
  for (const period of periods) {
    const { start, end } = parsePeriod(period)
    const diffMonths = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth())
    totalMonths += Math.max(0, diffMonths)
  }
  return { years: Math.floor(totalMonths / 12), months: totalMonths % 12, totalMonths }
}

export function formatExperience(years: number, months: number): string {
  if (months >= 9) {
    return `Around ${years + 1}`
  }
  if (months === 0) {
    return `${years}`
  }
  return `${years}.${months}`
}
