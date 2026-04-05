import { Button } from '../ui/Button'
import type { Locale } from '../../data/portfolio'
import { content, links, pick } from '../../data/portfolio'

type SiteHeaderProps = {
  locale: Locale
  onLocaleChange: (locale: Locale) => void
}

export function SiteHeader({ locale, onLocaleChange }: SiteHeaderProps) {
  const labels = {
    about: pick(content.nav.about, locale),
    experience: pick(content.nav.experience, locale),
    projects: pick(content.nav.projects, locale),
    skills: pick(content.nav.skills, locale),
    certifications: pick(content.nav.certifications, locale),
    contact: pick(content.nav.contact, locale),
  }

  return (
    <header className="grid items-center gap-4 rounded-[24px] border border-white/8 bg-[#10151a] px-[22px] py-[18px] shadow-[var(--shadow-soft)] lg:grid-cols-[auto_1fr_auto_auto]">
      <p className="m-0 text-sm uppercase tracking-[0.16em] text-[var(--text-inverse)]">Erick Espinoza Araya</p>
      <nav aria-label="Main navigation" className="flex flex-wrap justify-start gap-3 lg:justify-center">
        <a className="text-xs uppercase tracking-[0.14em] text-[var(--muted-inverse)] transition-colors hover:text-[var(--accent-lime)]" href="#about">{labels.about}</a>
        <a className="text-xs uppercase tracking-[0.14em] text-[var(--muted-inverse)] transition-colors hover:text-[var(--accent-lime)]" href="#experience">{labels.experience}</a>
        <a className="text-xs uppercase tracking-[0.14em] text-[var(--muted-inverse)] transition-colors hover:text-[var(--accent-lime)]" href="#projects">{labels.projects}</a>
        <a className="text-xs uppercase tracking-[0.14em] text-[var(--muted-inverse)] transition-colors hover:text-[var(--accent-lime)]" href="#skills">{labels.skills}</a>
        <a className="text-xs uppercase tracking-[0.14em] text-[var(--muted-inverse)] transition-colors hover:text-[var(--accent-lime)]" href="#certifications">{labels.certifications}</a>
        <a className="text-xs uppercase tracking-[0.14em] text-[var(--muted-inverse)] transition-colors hover:text-[var(--accent-lime)]" href="#contact">{labels.contact}</a>
      </nav>
      <div className="flex flex-wrap gap-2">
        <Button href={links.github} rel="noreferrer" target="_blank">GitHub</Button>
        <Button href={links.cv} rel="noreferrer" target="_blank">CV</Button>
      </div>
      <div className="inline-flex overflow-hidden rounded-full border border-white/14">
        <button
          className={locale === 'es' ? 'bg-[var(--accent-lime)] px-3 py-2 text-xs tracking-[0.08em] text-[var(--bg-deep)]' : 'bg-transparent px-3 py-2 text-xs tracking-[0.08em] text-[var(--muted-inverse)]'}
          onClick={() => onLocaleChange('es')}
          type="button"
        >
          ES
        </button>
        <button
          className={locale === 'en' ? 'bg-[var(--accent-lime)] px-3 py-2 text-xs tracking-[0.08em] text-[var(--bg-deep)]' : 'bg-transparent px-3 py-2 text-xs tracking-[0.08em] text-[var(--muted-inverse)]'}
          onClick={() => onLocaleChange('en')}
          type="button"
        >
          EN
        </button>
      </div>
    </header>
  )
}
