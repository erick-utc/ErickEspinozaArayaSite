import { useState } from 'react'
import { SiteFooter } from './components/layout/SiteFooter'
import { SiteHeader } from './components/layout/SiteHeader'
import { AboutSection } from './components/sections/AboutSection'
import { BrandsBanner } from './components/sections/BrandsBanner'
import { ContactSection } from './components/sections/ContactSection'
import { EducationSection } from './components/sections/EducationSection'
import { ExperienceSection } from './components/sections/ExperienceSection'
import { HeroSection } from './components/sections/HeroSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { SkillsSection } from './components/sections/SkillsSection'
import type { Locale } from './data/portfolio'

function App() {
  const [locale, setLocale] = useState<Locale>('es')

  return (
    <div className="grid gap-[22px] p-[22px] md:p-[22px]">
      <SiteHeader locale={locale} onLocaleChange={setLocale} />

      <main className="grid gap-[22px]">
        <HeroSection locale={locale} />
        <BrandsBanner />
        <AboutSection locale={locale} />
        <ExperienceSection locale={locale} />
        <ProjectsSection locale={locale} />
        <SkillsSection locale={locale} />
        <EducationSection locale={locale} />
        <ContactSection locale={locale} />
      </main>

      <SiteFooter locale={locale} />
    </div>
  )
}

export default App
