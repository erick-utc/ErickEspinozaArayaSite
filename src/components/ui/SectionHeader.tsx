import type { ReactNode } from 'react'
import { Copy } from './Copy'
import { Title } from './Title'

type SectionHeaderProps = {
  kicker: ReactNode
  title: ReactNode
  inverse?: boolean
}

export function SectionHeader({ kicker, title, inverse = false }: SectionHeaderProps) {
  return (
    <div className="mb-[18px] grid gap-1">
      <Copy size="label" tone={inverse ? 'inverse-muted' : 'muted'}>
        {kicker}
      </Copy>
      <Title inverse={inverse}>{title}</Title>
    </div>
  )
}
