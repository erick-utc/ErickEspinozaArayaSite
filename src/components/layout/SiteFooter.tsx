import type { Locale } from '../../data/portfolio'
import { footerCopy } from '../../data/portfolio'

export function SiteFooter({ locale }: { locale: Locale }) {
  return (
    <footer className="border-t border-white/8 px-1 pb-[18px] pt-1">
      <p className="m-0 text-sm text-[var(--muted-strong)]">{footerCopy[locale]}</p>
    </footer>
  )
}
