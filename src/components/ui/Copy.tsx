import type { ElementType, ReactNode } from 'react'
import { cn } from '../../lib/cn'

type CopyTone = 'default' | 'muted' | 'inverse' | 'inverse-muted'
type CopySize = 'body' | 'lead' | 'small' | 'label'

type CopyProps = {
  as?: ElementType
  children: ReactNode
  className?: string
  tone?: CopyTone
  size?: CopySize
}

const tones: Record<CopyTone, string> = {
  default: 'text-[var(--text)]',
  muted: 'text-[var(--muted-strong)]',
  inverse: 'text-[var(--text-inverse)]',
  'inverse-muted': 'text-white/78',
}

const sizes: Record<CopySize, string> = {
  body: 'text-base leading-7',
  lead: 'text-[1.03rem] leading-7',
  small: 'text-sm leading-6',
  label: 'text-[11px] uppercase tracking-[0.18em]',
}

export function Copy({ as: Component = 'p', children, className, tone = 'default', size = 'body' }: CopyProps) {
  return <Component className={cn(tones[tone], sizes[size], className)}>{children}</Component>
}
