/* =============================================================================
   Portfolio Website
   =============================================================================
   File: src/data/projects.ts

   Description
   -----------------------------------------------------------------------------
   Static project data used throughout the portfolio.

   Used By
   -----------------------------------------------------------------------------
   ✓ FeaturedProjects
   ✓ Projects Page
   ✓ Project Details Page
   ✓ Home Page
   =============================================================================
*/

export interface Project {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly duration: string;
  readonly image: string;
  readonly github: string;
  readonly demo?: string;
  readonly featured: boolean;
  readonly status: "Completed" | "In Progress";
  readonly technologies: readonly string[];
  readonly highlights: readonly string[];
}

export const projects: readonly Project[] = [
  {
    id: "team-productivity-system",

    slug: "team-productivity-system",

    title: "Team Productivity System",

    description:
      "A production-grade full-stack productivity platform inspired by Notion and Todoist, featuring notes, task management, notifications, authentication, analytics, and a microservices architecture.",

    duration: "Jun 2026 – Present",

    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",

    github:
      "https://github.com/Ashu11122000/Team-Productivity-Platform",

    featured: true,

    status: "In Progress",

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "NestJS",
      "PostgreSQL",
      "SQLAlchemy",
      "TypeORM",
      "Docker",
      "JWT",
      "React Query",
    ],

    highlights: [
      "Microservices architecture",
      "Authentication & RBAC",
      "Notes Management",
      "Kanban Task Board",
      "Notifications",
      "Docker Compose",
    ],
  },

  {
    id: "mini-blog-management",

    slug: "mini-blog-management",

    title: "Mini Blog Management",

    description:
      "A modern Blog Management System built using Next.js App Router with reusable architecture, dynamic routing, dashboard modules, metadata, search, analytics, and responsive UI.",

    duration: "Jun 2026",

    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",

    github:
      "https://github.com/Ashu11122000",

    featured: true,

    status: "Completed",

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Server Actions",
      "App Router",
    ],

    highlights: [
      "Admin Dashboard",
      "Dynamic Routing",
      "SEO",
      "Search & Filtering",
      "Reusable Components",
      "Responsive Design",
    ],
  },

  {
    id: "notes-backend-system",

    slug: "notes-backend-system",

    title: "Notes Backend System",

    description:
      "RESTful backend service for notes management featuring authentication, CRUD operations, validation, secure APIs, and scalable architecture.",

    duration: "2026",

    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",

    github:
      "https://github.com/Ashu11122000",

    featured: false,

    status: "Completed",

    technologies: [
      "FastAPI",
      "Python",
      "PostgreSQL",
      "JWT",
      "Pydantic",
    ],

    highlights: [
      "REST APIs",
      "Authentication",
      "Validation",
      "CRUD Operations",
    ],
  },

  {
    id: "task-management-backend",

    slug: "task-management-backend",

    title: "Task Management Backend",

    description:
      "Backend service providing task creation, priorities, scheduling, status tracking, authentication, and scalable REST APIs.",

    duration: "2026",

    image:
      "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=80",

    github:
      "https://github.com/Ashu11122000",

    featured: false,

    status: "Completed",

    technologies: [
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "JWT",
      "TypeORM",
    ],

    highlights: [
      "Task APIs",
      "Authentication",
      "Role-based Access",
      "Scalable Architecture",
    ],
  },

  {
    id: "expense-tracker-backend",

    slug: "expense-tracker-backend",

    title: "Expense Tracker Backend",

    description:
      "Backend APIs for managing expenses, budgeting, transactions, and financial records using modern backend architecture.",

    duration: "2026",

    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",

    github:
      "https://github.com/Ashu11122000",

    featured: false,

    status: "Completed",

    technologies: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "JWT",
    ],

    highlights: [
      "Expense Management",
      "REST APIs",
      "Authentication",
      "Database Design",
    ],
  },

  {
    id: "job-portal",

    slug: "job-portal",

    title: "Job Portal",

    description:
      "A responsive web application allowing employers to post jobs and candidates to search and apply with an intuitive user interface.",

    duration: "2025",

    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",

    github:
      "https://github.com/Ashu11122000",

    featured: false,

    status: "Completed",

    technologies: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
    ],

    highlights: [
      "Responsive UI",
      "Job Listings",
      "Search",
      "Application Workflow",
    ],
  },
] as const;

export default projects;