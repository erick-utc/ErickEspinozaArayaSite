import type { Locale } from '../../data/portfolio'
import { certificationItems, content, pick } from '../../data/portfolio'
import { Card } from '../ui/Card'
import { Copy } from '../ui/Copy'
import { Section } from '../ui/Section'
import { SectionHeader } from '../ui/SectionHeader'
import { Title } from '../ui/Title'

export function EducationSection({ locale }: { locale: Locale }) {
  return (
    <Section id="certifications">
      <SectionHeader kicker={pick(content.certifications.kicker, locale)} title={pick(content.certifications.title, locale)} />
      <Title level={3}> Formal Education </Title>
      <div className="grid gap-4 xl:grid-cols-2 my-6">
        {certificationItems.map((certification) => ( certification.type === 'education' && 
          <Card className="border-white/8 bg-[#0f1519] text-[var(--text-inverse)]" key={`${certification.name}-${certification.year}`} variant="dark">
            <Title className="text-white" inverse level={3}>{certification.name}</Title>
            <Copy className="mt-2 text-white" size="body" tone="inverse">{certification.issuer}</Copy>
            <Copy className="mt-2 text-[#f2f6f7]" size="small" tone="inverse">{certification.year}</Copy>
          </Card>
        ))}
      </div>
      <Title level={3}> Certifications and others </Title>
      <div className="grid gap-4 xl:grid-cols-3">
        {certificationItems.map((certification) => ( certification.type !== 'education' && 
          <Card className="border-white/8 bg-[#0f1519] text-[var(--text-inverse)]" key={`${certification.name}-${certification.year}`} variant="dark">
            <Title className="text-white" inverse level={3}>{certification.name}</Title>
            <Copy className="mt-2 text-white" size="body" tone="inverse">{certification.issuer}</Copy>
            <Copy className="mt-2 text-[#f2f6f7]" size="small" tone="inverse">{certification.year}</Copy>
          </Card>
        ))}
      </div>
    </Section>
  )
}
