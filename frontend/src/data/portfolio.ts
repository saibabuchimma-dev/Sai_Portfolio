export interface NavLink {
  label: string
  href: string
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export const SECTION_IDS = [
  'home',
  'about',
  'skills',
  'experience',
  'projects',
  'education',
  'contact',
] as const

export const profile = {
  name: 'Sai Babu Chimma',
  initials: 'SC',
  role: 'Frontend Developer',
  stackLine: 'React.js | Next.js | TypeScript | Tailwind CSS',
  summary:
    'I build clean, responsive web applications with React, Next.js, and TypeScript.',
  location: 'Hyderabad, India',
  email: 'saibabuchimma888@gmail.com',
  phoneDisplay: '+91 97015 60676',
  phoneHref: 'tel:+919701560676',
  linkedin: 'https://linkedin.com/in/saibabuchimma',
  github: 'https://github.com/saibabuchimma-dev',
  photo: '/saiPassportSize.jpeg' as string | null,
  resume: '/resume.pdf',
}

export interface SkillGroup {
  title: string
  skills: string[]
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Frontend Development',
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'React.js',
      'Next.js',
    ],
  },
  {
    title: 'State & Data Management',
    skills: [
      'TanStack Query',
      'Zustand',
      'Context API',
      'Axios',
    ],
  },
  {
    title: 'UI & Styling',
    skills: [
      'Tailwind CSS',
      'shadcn/ui',
      'Mantine UI',
      'Responsive Design',
    ],
  },
  {
    title: 'Database & APIs',
    skills: [
      'PostgreSQL',
      'MongoDB',
      'REST API Integration',
      'JSON',
    ],
  },
  {
    title: 'Forms & Validation',
    skills: [
      'React Hook Form',
      'Zod',
    ],
  },
  {
    title: 'Testing & Tools',
    skills: [
      'Jest',
      'Git',
      'GitHub',
      'ESLint',
      'Prettier',
      'VS Code',
      'Chrome DevTools',
    ],
  },
  {
    title: 'AI-Assisted Development',
    skills: [
      'GitHub Copilot',
      'Cursor',
      'OpenAI Codex',
      'Antigravity',
      'OpenCode AI',
    ],
  },
  {
    title: 'Core Concepts',
    skills: [
      'Component Architecture',
      'Performance Optimization',
      'Agile / Scrum',
    ],
  },
]


export const ABOUT_PARAGRAPHS = [
  'Hi, I’m Sai. I’m a Frontend Developer based in Hyderabad, India, with 2.4+ years of experience building web applications.',
  'I mainly work with React.js, Next.js, TypeScript, and Tailwind CSS. I enjoy turning designs and requirements into interfaces that are simple to use, responsive, and easy to maintain.',
  'My work also involves connecting frontend applications with REST APIs, handling authentication and application state, building reusable components, and improving performance.',
  'I enjoy working with designers, backend developers, and product teams to turn ideas into working products.',
]

export const ABOUT_HIGHLIGHTS = [
  'React & Next.js Development',
  'REST API Integration',
  'Authentication & Protected Routes',
  'State Management',
  'Reusable Components',
  'Performance Optimization',
]

export interface Experience {
  role: string
  company: string
  period: string
  location: string
  description: string
  points: string[]
  projects?: string[]
}

export const EXPERIENCE: Experience[] = [
  {
    role: 'Junior Software Engineer — Frontend Developer',
    company: 'SRYTAL Systems India Pvt Ltd',
    period: 'Jan 2025 – Present',
    location: 'Hyderabad, India',
    description:
      'I work on React and Next.js applications, building reusable components and working with APIs, authentication, state management, and dashboards.',
    points: [
      'Build responsive interfaces with React, Next.js, TypeScript, and Tailwind CSS.',
      'Connect frontend applications with REST APIs using Axios and TanStack Query.',
      'Work on authentication, protected routes, forms, and validation.',
      'Build data tables and analytics dashboards for business applications.',
      'Collaborating closely with backend developers to ship end-to-end features.',
    ],
    projects: [
      'BringEx — Logistics & Shipment Tracking Platform',
      'JobSetu — Job Portal Platform',
      'SRYTAL Systems Company Website',
    ],
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Vanmayi Technologies',
    period: 'Apr 2024 – Oct 2024',
    location: 'Hyderabad, India',
    description:
      'During my internship, I worked on responsive React interfaces and reusable UI components.',
    points: [
      'Converted design mockups into working web pages.',
      'Built responsive interfaces using React, HTML, CSS, and JavaScript.',
      'Tested and fixed UI issues across different browsers and screen sizes.',
      'Worked with Git and a collaborative development workflow.',
    ],
  },
]

export type ProjectStatus = 'In Progress' | 'Production' | 'Completed'

export interface Project {
  name: string
  subtitle: string
  status: ProjectStatus
  featured?: boolean
  description: string
  scopeNote?: string
  technologies: string[]
  highlights: string[]
  link?: string
  linkLabel?: string
  unavailableNote?: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Axiora Pulse',
    subtitle: 'AI Workspace for Startup Idea Validation',
    status: 'Production',
    featured: true,
    description:
      'Axiora Pulse is an AI-powered workspace that helps users explore and validate startup ideas through research, surveys, conversations, and collaborative workspaces.',
    scopeNote:
      'Frontend development — worked with an existing REST API and built reusable UI components for the application.',
    technologies: [
      'React.js',
      'TypeScript',
      'Vite',
      'React Router',
      'Tailwind CSS',
      'TanStack Query',
      'Zustand',
      'Jest',
    ],
    highlights: [
      'Built authentication and protected routes',
      'Worked on AI chat and streaming responses',
      'Developed workspace and survey features',
      'Added reusable layouts, notifications, and lazy-loaded routes',
    ],
    link: 'https://axiorapulse.com/',
    linkLabel: 'View Live Project',
  },
  {
    name: 'BringEx',
    subtitle: 'Logistics & Shipment Tracking Platform',
    status: 'In Progress',
    description:
      'BringEx is a logistics platform for managing shipments, orders, drivers, warehouses, tracking, and analytics.',
    scopeNote:
      'Frontend architecture — built with Next.js App Router using Server Components and client-side TanStack Query.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'TanStack Query',
      'Zustand',
      'Recharts',
      'Jest',
    ],
    highlights: [
      'Built shipment and order management screens',
      'Developed analytics dashboards',
      'Created sortable and filterable data tables',
      'Implemented role-based authentication',
      'Added URL-based filtering and pagination',
    ],
    unavailableNote: 'Currently in development',
  },
  {
    name: 'JobSetu',
    subtitle: 'Job Portal Platform',
    status: 'Completed',
    description:
      'JobSetu is a job portal designed for candidates, employers, recruiters, and administrators, with different experiences for each user role.',
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Mantine UI',
      'Zustand',
      'MongoDB',
    ],
    highlights: [
      'Built role-based dashboards',
      'Added job search and filtering',
      'Implemented protected routes',
      'Integrated REST APIs',
    ],
    link: 'https://www.iglobusjobsetu.com/',
    linkLabel: 'View Live Project',
  },
  {
    name: 'SRYTAL Systems',
    subtitle: 'Corporate Website',
    status: 'Completed',
    description:
      'A responsive company website built to showcase SRYTAL Systems services, solutions, and company information.',
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Mantine UI',
    ],
    highlights: [
      'Built dynamic pages',
      'Developed contact forms',
      'Created responsive layouts',
    ],
    link: 'https://srytal.com/',
    linkLabel: 'View Live Project',
  },
]

export interface Education {
  degree: string
  institution: string
  affiliation?: string
  period: string
  score: string
}

export const EDUCATION: Education[] = [
  {
    degree: 'Bachelor of Technology — Civil Engineering',
    institution: 'WISTM Engineering College',
    affiliation: 'Affiliated to Andhra University',
    period: '2020 – 2023',
    score: '70.02%',
  },
  {
    degree: 'Diploma — Civil Engineering',
    institution: 'Sri Vasavi Engineering College',
    affiliation: 'SBTET Andhra Pradesh',
    period: '2019',
    score: '68.37%',
  },
]

export const CERTIFICATION = {
  title: 'React.js Development',
  issuer: 'Udemy',
  year: '2026',
  description:
    'React fundamentals, component architecture, hooks, and modern frontend development practices.',
}
