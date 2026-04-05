import { featuredBrands } from '../../data/portfolio'
import { Banner } from '../ui/Banner'

export function BrandsBanner() {
  return (
    <section aria-label="Featured brands" className="grid gap-2 md:grid-cols-3 xl:grid-cols-7">
      {featuredBrands.map((brand) => (
        <Banner className="grid min-h-[70px] place-items-center border-white/8 bg-[#0f1519] text-center text-[0.88rem] uppercase tracking-[0.1em] text-white" key={brand}>
          {brand}
        </Banner>
      ))}
    </section>
  )
}
