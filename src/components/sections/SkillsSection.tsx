import type { Locale } from '../../data/portfolio'
import { content, pick } from '../../data/portfolio'
import { Card } from '../ui/Card'
import { Section } from '../ui/Section'
import { SectionHeader } from '../ui/SectionHeader'
import { Title } from '../ui/Title'

export function SkillsSection({ locale }: { locale: Locale }) {
  return (
    <Section id="skills">
      <SectionHeader kicker={pick(content.skills.kicker, locale)} title={pick(content.skills.title, locale)} />
      <div className="grid gap-4 xl:grid-cols-4">
        {content.skills.groups.map((group) => (
          <Card className="bg-[linear-gradient(180deg,rgba(249,246,237,0.98),rgba(255,255,255,0.98))]" key={group.name}>
            <Title level={3}>{group.name}</Title>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[var(--muted-strong)]">
              {group.values.map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  )
}
