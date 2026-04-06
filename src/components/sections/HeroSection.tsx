import type { Locale } from '../../data/portfolio'
import { content, links, pick } from '../../data/portfolio'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
import { Copy } from '../ui/Copy'
import { Image } from '../ui/Image'
import { Section } from '../ui/Section'
import { Title } from '../ui/Title'

export function HeroSection({ locale }: { locale: Locale }) {
  return (
    <Section id="home" tone="hero" className="grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.9fr)] lg:items-stretch">
      <div className="grid content-center">
        <Copy size="label" tone="inverse-muted">{pick(content.hero.kicker, locale)}</Copy>
        <Copy className="mt-2 text-sm uppercase tracking-[0.08em] text-white/82" size="small" tone="inverse-muted">
          {pick(content.hero.badge, locale)}
        </Copy>
        <Title className="mt-3 !text-[#d2ff4be0]" inverse level={1}>
          {pick(content.hero.title, locale)}
        </Title>
        <Copy className="max-w-[60ch]" size="lead" tone="inverse-muted">
          {pick(content.hero.subtitle, locale)}
        </Copy>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href="#contact" variant="primary">{pick(content.hero.primaryCta, locale)}</Button>
          <Button href={links.website} rel="noreferrer" target="_blank">{pick(content.hero.websiteCta, locale)}</Button>
          <Button href={links.linkedin} rel="noreferrer" target="_blank">{pick(content.hero.secondaryCta, locale)}</Button>
          <Button href={links.github} rel="noreferrer" target="_blank">{pick(content.hero.githubCta, locale)}</Button>
          <Button href={links.cv} rel="noreferrer" target="_blank">{pick(content.hero.cvViewCta, locale)}</Button>
          <Button download href={links.cv}>{pick(content.hero.cvCta, locale)}</Button>
        </div>
      </div>

      <div className="grid gap-[14px]">
        <div className="relative overflow-hidden rounded-[28px] border border-white/8 bg-white/4">
          <Image
            alt="Erick Espinoza Araya"
            className="min-h-[250px] object-cover object-center object-top saturate-[1.02] contrast-105"
            height={800}
            src={links.profileImage}
            width={800}
          />
          {/* <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-[28px] bg-[radial-gradient(circle_at_center,rgba(210,255,75,0.14),transparent_22%)]">
            <span className="absolute left-1/2 top-1/2 h-[92px] w-[92px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(210,255,75,0.88),#7ab80d)] shadow-[0_0_50px_rgba(210,255,75,0.3)]"></span>
            <span className="absolute left-1/2 top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/16"></span>
            <span className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/16"></span>
          </div> */}
        </div>

        <Card className="border-white/8 bg-white/6 backdrop-blur-sm" variant="glass">
          <Copy size="label" tone="inverse-muted">{pick(content.hero.spotlightTitle, locale)}</Copy>
          <Copy className="mt-2" tone="inverse">{pick(content.hero.spotlightBody, locale)}</Copy>
        </Card>

        <div className="grid gap-[10px] md:grid-cols-3">
          {content.about.stats.map((item) => (
            <Card className="border-white/8 bg-white/6 backdrop-blur-sm" key={item.value} variant="glass">
              <p className="m-0 font-[var(--font-heading)] text-[1.45rem] text-[var(--accent-lime)]">{item.value}</p>
              <Copy className="mt-1.5" size="small" tone="inverse-muted">{item.label[locale]}</Copy>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}
