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

export const SECTION_IDS = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'] as const

export const profile = {
  name: 'Sai Babu Chimma',
  initials: 'SC',
  role: 'Frontend Developer',
  stackLine: 'React.js | Next.js | TypeScript | Tailwind CSS',
  summary:
    'Frontend Developer with 2.4+ years of experience building scalable, responsive web applications using React.js, Next.js, TypeScript, and Tailwind CSS — from client wireframes to production-ready interfaces.',
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
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React.js', 'Next.js'],
  },
  {
    title: 'State Management',
    skills: ['TanStack Query (React Query)', 'Zustand'],
  },
  {
    title: 'Styling & UI',
    skills: ['Tailwind CSS', 'Mantine UI', 'Responsive Web Design'],
  },
  {
    title: 'Database & APIs',
    skills: ['PostgreSQL', 'MongoDB', 'REST API Integration', 'JSON'],
  },
  {
    title: 'Development Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Chrome DevTools', 'ESLint', 'Prettier', 'Axios'],
  },
  {
    title: 'AI-Assisted Development',
    skills: ['GitHub Copilot', 'Cursor', 'OpenAI Codex', 'Antigravity', 'OpenCode AI'],
  },
  {
    title: 'Core Concepts',
    skills: [
      'React Server Components',
      'Component-Based Architecture',
      'Wireframing',
      'Agile/Scrum',
      'Sprint Demos',
      'Performance Optimization',
    ],
  },
]

export const ABOUT_PARAGRAPHS = [
  'Frontend Developer with 2.4+ years of experience building scalable, responsive web applications using React.js, Next.js, TypeScript, and Tailwind CSS.',
  'I work across REST API integration, role-based authentication, and modern state management, with a strong focus on performance optimization and maintainable frontend architectures.',
  'My workflow bridges client wireframes and production UI — translating requirements into sprint tasks within Agile/Scrum teams and demonstrating features in sprint demos.',
]

export const ABOUT_HIGHLIGHTS = [
  'REST API Integration',
  'Role-Based Authentication',
  'State Management',
  'Performance Optimization',
  'Maintainable Frontend Architectures',
  'Agile / Scrum & Sprint Demos',
]

export interface Experience {
  role: string
  company: string
  period: string
  location: string
  points: string[]
  projects?: string[]
}

export const EXPERIENCE: Experience[] = [
  {
    role: 'Junior Software Engineer — Frontend Developer',
    company: 'SRYTAL Systems India Pvt Ltd',
    period: 'Jan 2025 – Present',
    location: 'Hyderabad, India',
    points: [
      'Building scalable, responsive web applications with reusable React components and modular UI architectures.',
      'Integrating REST APIs using Axios and TanStack Query, with role-based authentication and protected routing.',
      'Implementing form validation with React Hook Form and Zod, managing state with Zustand and Context API.',
      'Developing with the Next.js App Router, leveraging React Server Components and SSR.',
      'Building TanStack Table shipment-management modules and Recharts-powered analytics dashboards.',
      'Gathering client requirements and UX feedback, translating them into sprint tasks and wireframes.',
      'Participating in daily standups and delivering feature demonstrations within Agile/Scrum sprints.',
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
    points: [
      'Completed a 6-month internship building responsive web pages and reusable UI components with React.js, HTML5, CSS3, and JavaScript.',
      'Translated design mockups into functional interfaces.',
      'Tested and debugged applications across browsers and screen sizes.',
      'Worked within version-controlled, collaborative workflows.',
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
    subtitle: 'AI workspace for validating startup ideas',
    status: 'Production',
    featured: true,
    description:
      'An AI workspace for turning startup ideas into validated opportunities. Users describe an idea, work through structured questions and surveys, collaborate with an AI co-founder, and manage the resulting workspaces.',
    scopeNote: 'Frontend development — the application communicates with an existing REST API to fetch and display data through reusable UI components.',
    technologies: [
      'React.js',
      'TypeScript',
      'Vite',
      'React Router',
      'Tailwind CSS',
      'shadcn/ui',
      'TanStack Query',
      'Zustand',
      'Axios',
      'React Hook Form',
      'Zod',
      'lucide-react',
      'Sonner',
      'Jest',
    ],
    highlights: [
      'Guest and authenticated routing with protected and admin-only route guards',
      'Complete auth flows — login, registration, OTP verification, password reset',
      'AI chat with conversations, model selection, markdown and streaming responses',
      'Workspace management with surveys, questionnaires, attachments and archive',
      'Lazy-loaded routes, error handling, notifications and shared layouts',
    ],
    link: 'https://axiorapulse.com/',
    linkLabel: 'View Live Project',
  },
  {
    name: 'BringEx',
    subtitle: 'Logistics & Shipment Tracking Platform',
    status: 'In Progress',
    description:
      'Scalable logistics platform built on the Next.js 14 App Router, covering the full shipment lifecycle — orders, drivers, warehouses, real-time tracking, and analytics — with a strict Server/Client Component architecture.',
    scopeNote: 'Frontend architecture — Server Components fetch initial data, hydrated into TanStack Query on the client.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'shadcn/ui',
      'TanStack Query',
      'Zustand',
      'React Hook Form',
      'Zod',
      'Axios',
      'Recharts',
      'Sonner',
      'Jest',
    ],
    highlights: [
      'Shipment, order, driver & warehouse management modules',
      'Analytics dashboards and KPIs powered by Recharts',
      'Sortable, filterable data tables via TanStack Table',
      'Role-based auth with middleware-protected routes',
      'URL-synced filters & pagination',
    ],
    unavailableNote: 'Currently in development',
  },
  {
    name: 'JobSetu',
    subtitle: 'Job Portal Platform',
    status: 'Completed',
    description:
      'Multi-role job portal supporting Candidates, Employers, Recruiters, and Admins with role-based dashboards, advanced job search and filtering, protected routes, REST API integration, and form validation.',
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Mantine UI', 'MongoDB', 'Zustand', 'React Hook Form', 'Axios'],
    highlights: [
      'Four role-based dashboard experiences',
      'Advanced job search & filtering',
      'Protected routes & REST API integration',
    ],
    link: 'https://www.iglobusjobsetu.com/',
    linkLabel: 'View Live Project',
  },
  {
    name: 'SRYTAL Systems',
    subtitle: 'Company Website',
    status: 'Completed',
    description:
      'Official corporate website showcasing services, solutions, and organizational information with dynamic pages, contact forms, and fully responsive layouts across mobile, tablet, and desktop.',
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Mantine UI', 'MongoDB', 'Zustand', 'React Hook Form', 'Axios'],
    highlights: ['Dynamic corporate pages', 'Contact forms', 'Fully responsive layouts'],
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
  title: 'React.js Development Certification',
  issuer: 'Udemy',
  year: '2026',
  description: 'Covers React fundamentals, component architecture, hooks, and modern frontend development practices.',
}
