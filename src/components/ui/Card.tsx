import type { ElementType, ReactNode } from 'react'
import { cn } from '../../lib/cn'

type CardVariant = 'light' | 'dark' | 'glass'

type CardProps = {
  as?: ElementType
  children: ReactNode
  className?: string
  variant?: CardVariant
}

const variants: Record<CardVariant, string> = {
  light: 'border border-black/8 bg-white',
  dark: 'border border-white/8 bg-[#0f1519] text-[var(--text-inverse)]',
  glass: 'border border-white/8 bg-white/6 text-[var(--text-inverse)] backdrop-blur-sm',
}

export function Card({ as: Component = 'article', children, className, variant = 'light' }: CardProps) {
  return (
    <Component className={cn('rounded-[24px] p-5 shadow-[var(--shadow-soft)] overflow-hidden text-ellipsis', variants[variant], className)}>
      {children}
    </Component>
  )
}
