import type { Locale } from '../../data/portfolio'
import { content, links, pick } from '../../data/portfolio'
import { Button } from '../ui/Button'
import { Copy } from '../ui/Copy'
import { Section } from '../ui/Section'
import { SectionHeader } from '../ui/SectionHeader'

export function ContactSection({ locale }: { locale: Locale }) {
  return (
    <Section id="contact" tone="dark">
      <SectionHeader inverse kicker={pick(content.contact.kicker, locale)} title={pick(content.contact.title, locale)} />
      <Copy tone="inverse">{pick(content.contact.body, locale)}</Copy>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button href="mailto:egea19984@gmail.com" variant="primary">{pick(content.contact.emailLabel, locale)}</Button>
        <Button href={links.github} rel="noreferrer" target="_blank">{pick(content.contact.githubLabel, locale)}</Button>
        <Button href="tel:+50670141908">+506 7014-1908</Button>
        <Button href={links.cv} rel="noreferrer" target="_blank">{pick(content.contact.cvViewLabel, locale)}</Button>
        <Button download href={links.cv}>{pick(content.contact.cvLabel, locale)}</Button>
      </div>
    </Section>
  )
}
