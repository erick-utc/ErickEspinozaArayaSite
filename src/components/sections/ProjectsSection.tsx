import type { Locale } from '../../data/portfolio'
import { content, pick, projectItems } from '../../data/portfolio'
import { Card } from '../ui/Card'
import { Copy } from '../ui/Copy'
import { Section } from '../ui/Section'
import { SectionHeader } from '../ui/SectionHeader'
import { Title } from '../ui/Title'

export function ProjectsSection({ locale }: { locale: Locale }) {
  return (
    <Section id="projects">
      <SectionHeader kicker={pick(content.projects.kicker, locale)} title={pick(content.projects.title, locale)} />
      <div className="grid gap-4 xl:grid-cols-4">
        {projectItems.map((project, index) => (
          <Card className="grid gap-[14px] bg-[linear-gradient(180deg,rgba(17,21,26,0.97),rgba(28,33,40,0.96))] text-[var(--text-inverse)]" key={project.name} variant="dark">
            <Copy className="text-[var(--accent-lime)]" size="label" tone="inverse">0{index + 1}</Copy>
            <Title inverse level={3}>{project.name}</Title>
            <Copy size="small" tone="inverse">{project.description[locale]}</Copy>
            <Copy className="border-t border-white/10 pt-3 text-white/72" size="small" tone="inverse-muted">{project.impact[locale]}</Copy>
          </Card>
        ))}
      </div>
    </Section>
  )
}
