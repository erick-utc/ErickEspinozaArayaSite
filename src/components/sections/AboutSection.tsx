import type { Locale } from '../../data/portfolio'
import { content, pick } from '../../data/portfolio'
import { Card } from '../ui/Card'
import { Copy } from '../ui/Copy'
import { Section } from '../ui/Section'
import { SectionHeader } from '../ui/SectionHeader'

export function AboutSection({ locale }: { locale: Locale }) {
  return (
    <Section id="about" tone="light">
      <SectionHeader kicker={pick(content.about.kicker, locale)} title={pick(content.about.title, locale)} />
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
        <Copy size="lead">{pick(content.about.body, locale)}</Copy>
        <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          {content.about.stats.map((item) => (
            <Card className="border-white/8 bg-[#0f1519] text-[var(--text-inverse)]" key={item.value} variant="dark">
              <p className="m-0 text-[2rem] text-[var(--accent-lime)]">{item.value}</p>
              <Copy className="mt-1 text-white" size="small" tone="inverse">{item.label[locale]}</Copy>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}
