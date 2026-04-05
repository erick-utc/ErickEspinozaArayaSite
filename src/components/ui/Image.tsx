import type { ImgHTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

export function Image({ className, alt, ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  return <img alt={alt} className={cn('block h-full w-full object-cover', className)} {...props} />
}
