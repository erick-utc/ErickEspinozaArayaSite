import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type TitleProps = {
  children: ReactNode
  level?: 1 | 2 | 3
  inverse?: boolean
  className?: string
}

export function Title({ children, level = 2, inverse = false, className }: TitleProps) {
  const Component = `h${level}` as const

  return (
    <Component
      className={cn(
        'font-[var(--font-heading)] tracking-[-0.04em] text-[var(--text-strong)]',
        level === 1 && 'text-[clamp(2.6rem,7vw,5.7rem)] leading-[0.98]',
        level === 2 && 'text-[clamp(1.7rem,3vw,2.7rem)] leading-[0.98]',
        level === 3 && 'text-[1.08rem] leading-tight tracking-[-0.02em]',
        inverse && 'text-[var(--text-inverse)]',
        className,
      )}
    >
      {children}
    </Component>
  )
}
