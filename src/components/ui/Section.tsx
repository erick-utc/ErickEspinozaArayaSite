import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type SectionTone = 'default' | 'light' | 'dark' | 'hero'

type SectionProps = {
  id?: string
  children: ReactNode
  className?: string
  tone?: SectionTone
}

const tones: Record<SectionTone, string> = {
  default: 'border-[var(--line-soft)] bg-[var(--surface)]',
  light: 'border-[var(--line-soft)] bg-[#f4f1e8]',
  dark: 'border-white/8 bg-[linear-gradient(135deg,#11151a,#191d24)] text-[var(--text-inverse)]',
  hero: 'border-[var(--line-soft)] bg-[linear-gradient(135deg,#11151a,#1b2027_62%,#15191f)] text-[var(--text-inverse)]',
}

export function Section({ id, children, className, tone = 'default' }: SectionProps) {
  return (
    <section id={id} className={cn('rounded-[32px] border p-8 shadow-[var(--shadow-soft)] md:p-[34px]', tones[tone], className)}>
      {children}
    </section>
  )
}
