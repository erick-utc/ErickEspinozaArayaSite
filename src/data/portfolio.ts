export type Locale = 'es' | 'en'

export type LocalizedText = {
  es: string
  en: string
}

export type ExperienceItem = {
  company: string
  role: LocalizedText
  period: string
  summary: LocalizedText
  stack: string[]
}

export type ProjectItem = {
  name: string
  description: LocalizedText
  impact: LocalizedText
}

export type CertificationItem = {
  name: string
  issuer: string
  year: string
}

export const content = {
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
} as const

export const featuredBrands = ['Akamai', 'Toyota', 'Firestone', 'Splunk', 'BMC', 'BMW', 'Mercedes-Benz']

export const projectItems: ProjectItem[] = [
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
      es: 'An end-to-end business solution outside the AEM ecosystem, focused on real operations.',
      en: 'An end-to-end business solution outside the AEM ecosystem, focused on real operations.',
    },
  },
]

export const links = {
  linkedin: 'https://www.linkedin.com/in/egea19984',
  github: 'https://github.com/erick-utc',
  cv: '/Erick-Gerardo-Espinoza-Araya-CV.pdf',
  profileImage: '/erick-profile.jpg',
}

export const experienceItems: ExperienceItem[] = [
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

export const certificationItems: CertificationItem[] = [
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

export const footerCopy = {
  es: 'Hecho con React + Tailwind CSS. Disponible para oportunidades remotas y en Costa Rica.',
  en: 'Built with React + Tailwind CSS. Open to remote opportunities and Costa Rica based roles.',
}

export function pick(text: LocalizedText, locale: Locale) {
  return text[locale]
}
