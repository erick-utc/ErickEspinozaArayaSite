import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type BannerProps = {
  children: ReactNode
  className?: string
}

export function Banner({ children, className }: BannerProps) {
  return <div className={cn('rounded-[24px] border p-4', className)}>{children}</div>
}
