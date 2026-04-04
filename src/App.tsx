import { useMemo, useState } from 'react'
import './App.css'

type Locale = 'es' | 'en'

type LocalizedText = {
  es: string
  en: string
}

type ExperienceItem = {
  company: string
  role: LocalizedText
  period: string
  summary: LocalizedText
  stack: string[]
}

type ProjectItem = {
  name: string
  description: LocalizedText
  impact: LocalizedText
}

type CertificationItem = {
  name: string
  issuer: string
  year: string
}

const content = {
  nav: {
    about: { es: 'Sobre mi', en: 'About' },
    experience: { es: 'Experiencia', en: 'Experience' },
    projects: { es: 'Proyectos', en: 'Projects' },
    skills: { es: 'Habilidades', en: 'Skills' },
    certifications: { es: 'Formacion', en: 'Education' },
    contact: { es: 'Contacto', en: 'Contact' },
  },
  hero: {
    kicker: {
      es: 'Portafolio / Digital Experience',
      en: 'Portfolio / Digital Experience',
    },
    badge: {
      es: 'Senior AEM / FullStack Developer',
      en: 'Senior AEM / Full Stack Developer',
    },
    title: {
      es: 'Diseno y desarrollo plataformas web premium para marcas globales.',
      en: 'I design and build premium web platforms for global brands.',
    },
    subtitle: {
      es: 'Mas de 14 anos desarrollando plataformas AEM, aplicaciones full stack y redisenos de marca para Akamai, Toyota, Firestone, Bridgestone, Splunk, BMW, Mercedes-Benz y BMC.',
      en: 'Over 14 years building AEM platforms, full stack applications, and brand redesigns for Akamai, Toyota, Firestone, Bridgestone, Splunk, BMW, Mercedes-Benz, and BMC.',
    },
    primaryCta: { es: 'Contactar', en: 'Contact me' },
    secondaryCta: { es: 'Ver LinkedIn', en: 'View LinkedIn' },
    cvCta: { es: 'Descargar CV', en: 'Download Resume' },
    cvViewCta: { es: 'Ver CV', en: 'View Resume' },
    githubCta: { es: 'Ver GitHub', en: 'View GitHub' },
    spotlightTitle: {
      es: 'Especialidad',
      en: 'Specialty',
    },
    spotlightBody: {
      es: 'AEM Cloud, React, TypeScript, Laravel, AWS y arquitectura web para equipos que necesitan authoring claro, escalabilidad y entregas consistentes.',
      en: 'AEM Cloud, React, TypeScript, Laravel, AWS, and web architecture for teams that need clean authoring, scalability, and consistent delivery.',
    },
  },
  about: {
    kicker: { es: 'Sobre mi', en: 'About me' },
    title: { es: 'Perfil profesional', en: 'Professional profile' },
    body: {
      es: 'Soy desarrollador FullStack con experiencia en AWS, MySQL, Microsoft SQL Server, PHP, WordPress y Laravel, ademas de una trayectoria senior en AEM desde CQ5 hasta AEM as a Cloud Service. Combino arquitectura de componentes, UI engineering, authoring experiences y colaboracion con negocio para entregar soluciones estables y escalables.',
      en: 'I am a full stack developer with experience in AWS, MySQL, Microsoft SQL Server, PHP, WordPress, and Laravel, plus a senior AEM track from CQ5 to AEM as a Cloud Service. I combine component architecture, UI engineering, authoring experiences, and business collaboration to deliver stable and scalable solutions.',
    },
    stats: [
      { label: { es: 'Anos de experiencia', en: 'Years of experience' }, value: '14+' },
      { label: { es: 'Marcas globales', en: 'Global brands' }, value: '15+' },
      { label: { es: 'Especialidad', en: 'Core expertise' }, value: 'AEM + FullStack' },
    ],
  },
  experience: {
    kicker: { es: 'Trayectoria', en: 'Experience' },
    title: { es: 'Experiencia reciente', en: 'Recent experience' },
  },
  projects: {
    kicker: { es: 'Casos', en: 'Cases' },
    title: { es: 'Casos destacados', en: 'Featured cases' },
  },
  skills: {
    kicker: { es: 'Capacidades', en: 'Capabilities' },
    title: { es: 'Stack principal', en: 'Core stack' },
    groups: [
      {
        name: 'AEM',
        values: [
          'AEM 6.x',
          'AEM Cloud Service',
          'HTL/Sightly',
          'Core Components',
          'Content Fragments',
          'Proxy Components',
        ],
      },
      {
        name: 'Frontend',
        values: ['React', 'TypeScript', 'Angular', 'Vue', 'Astro', 'Next.js'],
      },
      {
        name: 'Backend / Cloud',
        values: ['Laravel', 'PHP', 'WordPress', 'AWS', 'MySQL', 'SQL Server'],
      },
      {
        name: 'Delivery',
        values: ['Webpack', 'Node.js', 'Docker', 'Scrum', 'Mentoring', 'Responsive UI'],
      },
    ],
  },
  certifications: {
    kicker: { es: 'Formacion', en: 'Education' },
    title: { es: 'Formacion y certificaciones', en: 'Education and certifications' },
  },
  contact: {
    kicker: { es: 'Contacto', en: 'Contact' },
    title: { es: 'Contacto', en: 'Contact' },
    body: {
      es: 'Disponible para roles senior AEM, frontend o full stack, asi como consultoria tecnica. Conversemos.',
      en: 'Open to senior AEM, frontend, or full stack roles, as well as technical consulting opportunities. Let us connect.',
    },
    emailLabel: { es: 'Escribirme', en: 'Email me' },
    cvLabel: { es: 'Descargar CV PDF', en: 'Download Resume PDF' },
    cvViewLabel: { es: 'Abrir CV', en: 'Open Resume' },
    githubLabel: { es: 'GitHub', en: 'GitHub' },
  },
}

const featuredBrands = ['Akamai', 'Toyota', 'Firestone', 'Splunk', 'BMC', 'BMW', 'Mercedes-Benz']

const projectItems: ProjectItem[] = [
  {
    name: 'Akamai Marketing Platform',
    description: {
      es: 'Desarrollo full stack del marketing site de Akamai con AEM Cloud, ReactJS y VanillaJS.',
      en: 'Full stack development for the Akamai marketing site using AEM Cloud, ReactJS, and VanillaJS.',
    },
    impact: {
      es: 'Base enterprise mantenible para evolucion continua de contenido y experiencias digitales.',
      en: 'A maintainable enterprise foundation for ongoing content and digital experience evolution.',
    },
  },
  {
    name: 'BMC AEM Experience',
    description: {
      es: 'Implementacion en AEM 6.5 con Astro, Webpack y consumo de servicios para BMC, incluyendo analisis UX y code reviews.',
      en: 'AEM 6.5 implementation with Astro, Webpack, and service integrations for BMC, including UX analysis and code reviews.',
    },
    impact: {
      es: 'Entrega mas madura combinando desarrollo, mentoring y definicion tecnica.',
      en: 'A more mature delivery model combining development, mentoring, and technical definition.',
    },
  },
  {
    name: 'Toyota / Firestone / Bridgestone',
    description: {
      es: 'Desarrollo de componentes AEM 6.5 con React, Redux y logica conectada a microservicios para marcas globales.',
      en: 'Built AEM 6.5 components with React, Redux, and microservice-connected logic for global brands.',
    },
    impact: {
      es: 'Arquitectura reutilizable para multiples flujos de authoring y experiencia de usuario.',
      en: 'Reusable architecture for multiple authoring and user-experience flows.',
    },
  },
  {
    name: 'El Nica Barber Studio',
    description: {
      es: 'Aplicacion full stack en Laravel y PHP para citas y ecommerce, desplegada en Hostinger.',
      en: 'Full stack Laravel and PHP application for appointments and ecommerce, deployed on Hostinger.',
    },
    impact: {
      es: 'Solucion de negocio completa fuera del ecosistema AEM, con enfoque en operacion real.',
      en: 'An end-to-end business solution outside the AEM ecosystem, focused on real operations.',
    },
  },
]

const links = {
  linkedin: 'https://www.linkedin.com/in/egea19984',
  github: 'https://github.com/erick-utc',
  cv: '/Erick-Gerardo-Espinoza-Araya-CV.pdf',
}

const experienceItems: ExperienceItem[] = [
  {
    company: 'Akamai Technologies Costa Rica',
    role: {
      es: 'Senior AEM Developer',
      en: 'Senior AEM Developer',
    },
    period: '2024 - Actualidad',
    summary: {
      es: 'Full stack developer a cargo del Akamai Marketing Site, trabajando con ReactJS, VanillaJS y AEM Cloud.',
      en: 'Full stack developer in charge of the Akamai Marketing Site, working with ReactJS, VanillaJS, and AEM Cloud.',
    },
    stack: ['AEM Cloud', 'ReactJS', 'VanillaJS', 'Full Stack'],
  },
  {
    company: 'El Nica Barber Studio',
    role: {
      es: 'Senior Full Stack Developer',
      en: 'Senior Full Stack Developer',
    },
    period: '2025 - Actualidad',
    summary: {
      es: 'Desarrollo de aplicacion Laravel PHP para citas y ecommerce, hospedada en Hostinger.',
      en: 'Building a Laravel PHP application for appointments and ecommerce, hosted on Hostinger.',
    },
    stack: ['Laravel', 'PHP', 'Ecommerce', 'Hostinger'],
  },
  {
    company: 'Pop',
    role: {
      es: 'Senior AEM UI Developer',
      en: 'Senior AEM UI Developer',
    },
    period: '2025',
    summary: {
      es: 'Trabajo con AEM 6.5 para BMC usando ES6, Astro, Webpack y AEM Core Components, incluyendo mentoring y code reviews.',
      en: 'Worked with AEM 6.5 for BMC using ES6, Astro, Webpack, and AEM Core Components, including mentoring and code reviews.',
    },
    stack: ['AEM 6.5', 'Astro', 'Webpack', 'BMC'],
  },
  {
    company: 'Nikola Digital Lab',
    role: {
      es: 'Senior AEM and UI React Developer',
      en: 'Senior AEM and UI React Developer',
    },
    period: '2020 - 2024',
    summary: {
      es: 'Desarrollo senior en AEM 6.4/6.5 para Toyota, Firestone y Bridgestone con React, Redux, APIs y responsabilidades de mentoring.',
      en: 'Senior development in AEM 6.4/6.5 for Toyota, Firestone, and Bridgestone with React, Redux, APIs, and mentoring responsibilities.',
    },
    stack: ['AEM 6.5', 'React', 'Redux', 'Webpack', 'Mentoring'],
  },
  {
    company: 'Sistemas Rodriguez',
    role: {
      es: 'Senior Full Stack Developer',
      en: 'Senior Full Stack Developer',
    },
    period: '2017 - 2018',
    summary: {
      es: 'Desarrollo full stack con PHP, AWS, EC2, MySQL y ecommerce conectado con Shopify para una solucion de negocio en produccion.',
      en: 'Full stack development with PHP, AWS, EC2, MySQL, and Shopify-connected ecommerce for a production business solution.',
    },
    stack: ['PHP', 'AWS', 'EC2', 'MySQL', 'Shopify'],
  },
  {
    company: 'Atypical Digital',
    role: {
      es: 'Senior AEM and UI React, Angular, VanillaJS Developer',
      en: 'Senior AEM and UI React, Angular, VanillaJS Developer',
    },
    period: '2019 - 2023',
    summary: {
      es: 'Desarrollo de componentes author/UI, Content Fragments, EDAM y redisenos anuales para Splunk, con liderazgo tecnico y mentoring.',
      en: 'Built author/UI components, Content Fragments, EDAM solutions, and yearly redesign support for Splunk, with tech leadership and mentoring.',
    },
    stack: ['AEM 6.4/6.5', 'React', 'Angular', 'VanillaJS', 'Splunk'],
  },
]

const certificationItems: CertificationItem[] = [
  {
    name: 'Software Engineer',
    issuer: 'Universidad Tecnologica Costarricense (UTC)',
    year: '2023 - 2026',
  },
  {
    name: 'Mathematics Teaching and Didactic Software Development',
    issuer: 'Instituto Tecnologico de Costa Rica (ITCR)',
    year: '2004 - 2009',
  },
  {
    name: 'Front End Frameworks Angular',
    issuer: 'MEIC',
    year: '2024',
  },
  {
    name: 'Certified Scrum Master',
    issuer: 'Scrum Alliance',
    year: '2022',
  },
  {
    name: 'Certified Scrum Master',
    issuer: 'SCRUMstudy',
    year: '2019',
  },
  {
    name: 'MongoDB for Node.js Developers',
    issuer: 'Mongo University',
    year: '2015',
  },
  {
    name: 'iOS Developer',
    issuer: 'CENFOTEC',
    year: '2013',
  },
]

function App() {
  const [locale, setLocale] = useState<Locale>('es')
  const isSpanish = locale === 'es'

  const labels = useMemo(
    () => ({
      about: content.nav.about[locale],
      experience: content.nav.experience[locale],
      projects: content.nav.projects[locale],
      skills: content.nav.skills[locale],
      certifications: content.nav.certifications[locale],
      contact: content.nav.contact[locale],
    }),
    [locale],
  )

  return (
    <div className="site">
      <header className="topbar">
        <p className="brand">Erick Espinoza Araya</p>
        <nav aria-label="Main navigation">
          <a href="#about">{labels.about}</a>
          <a href="#experience">{labels.experience}</a>
          <a href="#projects">{labels.projects}</a>
          <a href="#skills">{labels.skills}</a>
          <a href="#certifications">{labels.certifications}</a>
          <a href="#contact">{labels.contact}</a>
        </nav>
        <div className="top-actions" aria-label="Profile links">
          <a href={links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={links.cv} target="_blank" rel="noreferrer">
            CV
          </a>
        </div>
        <div className="lang-switch" role="group" aria-label="Language switch">
          <button
            type="button"
            className={!isSpanish ? '' : 'active'}
            onClick={() => setLocale('es')}
          >
            ES
          </button>
          <button
            type="button"
            className={isSpanish ? '' : 'active'}
            onClick={() => setLocale('en')}
          >
            EN
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="kicker">{content.hero.kicker[locale]}</p>
            <p className="badge">{content.hero.badge[locale]}</p>
            <h1>{content.hero.title[locale]}</h1>
            <p className="lead">{content.hero.subtitle[locale]}</p>
            <div className="hero-cta">
              <a className="button primary" href="#contact">
                {content.hero.primaryCta[locale]}
              </a>
              <a
                className="button secondary"
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                {content.hero.secondaryCta[locale]}
              </a>
              <a className="button secondary" href={links.github} target="_blank" rel="noreferrer">
                {content.hero.githubCta[locale]}
              </a>
              <a className="button secondary" href={links.cv} target="_blank" rel="noreferrer">
                {content.hero.cvViewCta[locale]}
              </a>
              <a className="button secondary" href={links.cv} download>
                {content.hero.cvCta[locale]}
              </a>
            </div>
          </div>

          <div className="hero-spotlight">
            <div className="portrait-frame">
              <img
                className="portrait-image"
                src="/erick-profile.jpg"
                alt="Erick Espinoza Araya"
                width="800"
                height="800"
              />
              <div className="spotlight-orbit" aria-hidden="true">
                <span className="orbit-core"></span>
                <span className="orbit-ring orbit-ring-a"></span>
                <span className="orbit-ring orbit-ring-b"></span>
              </div>
            </div>
            <div className="spotlight-card">
              <p className="kicker">{content.hero.spotlightTitle[locale]}</p>
              <p className="spotlight-text">{content.hero.spotlightBody[locale]}</p>
            </div>
            <div className="hero-mini-stats">
              {content.about.stats.map((item) => (
                <article key={item.value} className="mini-stat">
                  <p className="mini-stat-value">{item.value}</p>
                  <p className="mini-stat-label">{item.label[locale]}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="brands-strip" aria-label="Featured brands">
          {featuredBrands.map((brand) => (
            <span key={brand}>{brand}</span>
          ))}
        </section>

        <section className="panel panel-intro" id="about">
          <div className="section-heading">
            <p className="kicker">{content.about.kicker[locale]}</p>
            <h2>{content.about.title[locale]}</h2>
          </div>
          <div className="about-layout">
            <p className="about-copy">{content.about.body[locale]}</p>
            <div className="stats-grid">
              {content.about.stats.map((item) => (
                <article key={item.value} className="stat">
                  <p className="stat-value">{item.value}</p>
                  <p className="stat-label">{item.label[locale]}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="panel" id="experience">
          <div className="section-heading">
            <p className="kicker">{content.experience.kicker[locale]}</p>
            <h2>{content.experience.title[locale]}</h2>
          </div>
          <div className="timeline">
            {experienceItems.map((item) => (
              <article className="timeline-item" key={`${item.company}-${item.period}`}>
                <header>
                  <h3>{item.company}</h3>
                  <p className="timeline-role">{item.role[locale]}</p>
                  <p className="timeline-period">{item.period}</p>
                </header>
                <p>{item.summary[locale]}</p>
                <ul>
                  {item.stack.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="panel" id="projects">
          <div className="section-heading">
            <p className="kicker">{content.projects.kicker[locale]}</p>
            <h2>{content.projects.title[locale]}</h2>
          </div>
          <div className="project-grid">
            {projectItems.map((project, index) => (
              <article key={project.name} className="project-card">
                <p className="project-index">0{index + 1}</p>
                <h3>{project.name}</h3>
                <p>{project.description[locale]}</p>
                <p className="project-impact">{project.impact[locale]}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="panel" id="skills">
          <div className="section-heading">
            <p className="kicker">{content.skills.kicker[locale]}</p>
            <h2>{content.skills.title[locale]}</h2>
          </div>
          <div className="skill-groups">
            {content.skills.groups.map((group) => (
              <article key={group.name} className="skill-group">
                <h3>{group.name}</h3>
                <ul>
                  {group.values.map((value) => (
                    <li key={value}>{value}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="panel" id="certifications">
          <div className="section-heading">
            <p className="kicker">{content.certifications.kicker[locale]}</p>
            <h2>{content.certifications.title[locale]}</h2>
          </div>
          <div className="cert-grid">
            {certificationItems.map((certification) => (
              <article key={`${certification.name}-${certification.year}`} className="cert-card">
                <h3>{certification.name}</h3>
                <p>{certification.issuer}</p>
                <p className="timeline-period">{certification.year}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="panel contact" id="contact">
          <div className="section-heading">
            <p className="kicker">{content.contact.kicker[locale]}</p>
            <h2>{content.contact.title[locale]}</h2>
          </div>
          <p>{content.contact.body[locale]}</p>
          <div className="hero-cta">
            <a className="button primary" href="mailto:egea19984@gmail.com">
              {content.contact.emailLabel[locale]}
            </a>
            <a className="button secondary" href={links.github} target="_blank" rel="noreferrer">
              {content.contact.githubLabel[locale]}
            </a>
            <a className="button secondary" href="tel:+50670141908" aria-label="Phone number">
              +506 7014-1908
            </a>
            <a className="button secondary" href={links.cv} target="_blank" rel="noreferrer">
              {content.contact.cvViewLabel[locale]}
            </a>
            <a className="button secondary" href={links.cv} download>
              {content.contact.cvLabel[locale]}
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p>
          {isSpanish
            ? 'Hecho con React + TypeScript. Disponible para oportunidades remotas y en Costa Rica.'
            : 'Built with React + TypeScript. Open to remote opportunities and Costa Rica based roles.'}
        </p>
      </footer>
    </div>
  )
}

export default App
