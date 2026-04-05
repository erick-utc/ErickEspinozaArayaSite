import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type TagProps = {
  children: ReactNode
  className?: string
  tone?: 'dark' | 'light'
}

export function Tag({ children, className, tone = 'dark' }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 text-xs',
        tone === 'dark' && 'border-white/14 bg-white/4 text-white',
        tone === 'light' && 'border-black/10 bg-white text-[var(--text-strong)]',
        className,
      )}
    >
      {children}
    </span>
  )
}
