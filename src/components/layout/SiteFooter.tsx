import type { Locale } from '../../data/portfolio'
import { footerCopy } from '../../data/portfolio'
import { Image } from '../ui/Image'

export function SiteFooter({ locale }: { locale: Locale }) {
  return (
    <footer className="border-t border-white/8 px-1 pb-[18px] pt-1 flex-inline flex-col items-center justify-center gap-2  ">
      <p className="m-0 text-sm text-[var(--muted-strong)] inline">{footerCopy[locale]}</p>
      <div className="w-[100px] h-[100px] rounded-full border border-8 border-[#d2ff4be0] bg-white p-1 flex items-center justify-center aspect-square">
        <Image src="/logo.png"
          alt="Erick Espinoza Araya Site Logo"
          width={100}
          height={100}
          className="mt-2 h-auto w-[100px] "
        />
      </div>
    </footer>
  )
}
