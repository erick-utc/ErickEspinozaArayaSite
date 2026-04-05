import type { Locale } from '../../data/portfolio'
import { content, experienceItems, pick } from '../../data/portfolio'
import { Card } from '../ui/Card'
import { Copy } from '../ui/Copy'
import { Section } from '../ui/Section'
import { SectionHeader } from '../ui/SectionHeader'
import { Tag } from '../ui/Tag'
import { Title } from '../ui/Title'

export function ExperienceSection({ locale }: { locale: Locale }) {
  return (
    <Section id="experience">
      <SectionHeader kicker={pick(content.experience.kicker, locale)} title={pick(content.experience.title, locale)} />
      <div className="grid gap-4 xl:grid-cols-3">
        {experienceItems.map((item) => (
          <Card className="grid gap-3 border-white/8 bg-[#0f1519] text-[var(--text-inverse)]" key={`${item.company}-${item.period}`} variant="dark">
            <header className="border-b border-white/8 pb-3.5">
              <Title className="text-white" inverse level={3}>{item.company}</Title>
              <Copy className="mt-1 text-white" size="small" tone="inverse">{item.role[locale]}</Copy>
              <Copy className="mt-1 text-[#f2f6f7]" size="small" tone="inverse">{item.period}</Copy>
            </header>
            <Copy className="text-white" size="small" tone="inverse">{item.summary[locale]}</Copy>
            <div className="flex flex-wrap gap-2">
              {item.stack.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
