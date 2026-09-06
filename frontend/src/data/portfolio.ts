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
  role: 'Full Stack Developer',
  stackLine: 'React.js | Node.js | Next.js | TypeScript',
  summary:
    'I build scalable, responsive web applications with React.js, Next.js, Node.js, Express.js, and TypeScript.',
  location: 'Visakhapatnam, India',
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
      'Node.js',
      'Express.js',
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
      'Figma UX Wireframing',
      'Responsive Design',
    ],
  },
  {
    title: 'Database & APIs',
    skills: [
      'PostgreSQL',
      'MongoDB',
      'REST API Development',
      'REST API Integration',
      'JWT Authentication',
      'Role-Based Access Control',
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
      'AWS',
      'Amazon S3',
      'CI/CD Pipelines',
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
      'Claude Sonnet 5',
      'Claude Opus 5',
      'Gemini 3.8 Flash',
    ],
  },
  {
    title: 'Core Concepts',
    skills: [
      'Component Architecture',
      'Performance Optimization',
      'Agile / Scrum',
      'Sprint Demos',
    ],
  },
]


export const ABOUT_PARAGRAPHS = [
  'Hi, I’m Sai. I’m a Full Stack Developer based in Visakhapatnam, India, with around 3 years of experience building web applications.',
  'I work with React.js, Next.js, JavaScript, Node.js, Express.js, and TypeScript to build scalable and responsive products.',
  'My work includes developing REST APIs, JWT-based role-based authentication, reusable component architectures, application state management, and performance improvements.',
  'I enjoy turning requirements and Figma wireframes into reliable products while collaborating with designers, backend developers, and product teams in Agile sprint cycles.',
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
    role: 'Junior Software Engineer — Full Stack Developer',
    company: 'SRYTAL Systems India Pvt Ltd',
    period: 'Jan 2025 – Present',
    location: 'Hyderabad, India',
    description:
      'I build scalable React and Next.js applications and REST APIs, working across frontend architecture, authentication, state management, dashboards, and deployment.',
    points: [
      'Build responsive, scalable applications with React.js, Next.js, TypeScript, HTML5, and Tailwind CSS.',
      'Develop and integrate REST APIs with Node.js and Express.js, using Axios and TanStack Query for data fetching and caching.',
      'Implement JWT token-based authentication, role-based access control, and protected routing across multi-role applications.',
      'Use Next.js App Router, React Server Components, and SSR to improve performance, SEO, and initial page load times.',
      'Develop TanStack Table data tables with search, filtering, sorting, pagination, and URL-synchronized state.',
      'Design UX wireframes and UI mockups in Figma, and deploy applications through Git-based workflows, CI/CD pipelines, AWS, and Amazon S3.',
      'Collaborate closely with backend developers to troubleshoot issues and ship end-to-end features.',
    ],
    projects: [
      'BringEx — Logistics & Shipment Tracking Platform',
      'JobSetu — Job Portal Platform',
      'SRYTAL Systems Company Website',
      'Axiora Pulse — AI-Powered Startup Validation & Mentorship Platform',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Vanmayi Technologies',
    period: 'Nov 2023 – Oct 2024',
    location: 'Hyderabad, India',
    description:
      'I developed and enhanced responsive web applications using React.js, JavaScript, HTML5, and CSS3.',
    points: [
      'Developed reusable React.js components, frontend features, and interactive user interfaces.',
      'Integrated APIs and followed modern frontend development practices.',
      'Worked on technical research, feature enhancements, UI improvements, and frontend solution evaluation.',
      'Performed manual, debugging, cross-browser, and responsive testing to resolve UI and functional issues.',
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
    subtitle: 'AI-Powered Startup Validation & Mentorship Platform',
    status: 'Completed',
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
      'Axios',
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
      'Mantine UI',
      'TanStack Query',
      'Zustand',
      'Recharts',
      'React Hook Form',
      'Axios',
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
      'React Hook Form',
      'Axios',
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
      'MongoDB',
      'Zustand',
      'React Hook Form',
      'Axios',
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

export interface Certification {
  title: string
  issuer: string
  year: string
  description: string
}

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'React.js Development',
    issuer: 'Udemy',
    year: '2026',
    description:
      'React fundamentals, component architecture, hooks, and modern frontend development practices.',
  },
  {
    title: 'Prompt Engineering',
    issuer: 'AWS Skill Builder',
    year: '2026',
    description:
      'Prompt engineering fundamentals, LLM interaction, prompt optimization, and AI-assisted development workflows.',
  },
]
