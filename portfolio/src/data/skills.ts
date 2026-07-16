/* =============================================================================
   Portfolio Website
   =============================================================================
   File: src/data/skills.ts

   Description
   -----------------------------------------------------------------------------
   Static skills data used throughout the portfolio.

   Used By
   -----------------------------------------------------------------------------
   ✓ SkillsCard
   ✓ Skills Page
   ✓ Hero
   ✓ Tech Badges
   =============================================================================
*/

export interface SkillCategory {
  readonly id: string;
  readonly title: string;
  readonly skills: readonly string[];
}

export const skills: readonly SkillCategory[] = [
  {
    id: "languages",

    title: "Programming Languages",

    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "C",
      "C++",
      "SQL",
    ],
  },

  {
    id: "frontend",

    title: "Frontend Development",

    skills: [
      "React",
      "Next.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "ShadCN UI",
      "Responsive Design",
      "React Hook Form",
      "Zod",
      "Framer Motion",
    ],
  },

  {
    id: "backend",

    title: "Backend Development",

    skills: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "NestJS",
      "REST APIs",
      "JWT Authentication",
      "GraphQL",
      "gRPC",
      "Pydantic",
    ],
  },

  {
    id: "databases",

    title: "Databases",

    skills: [
      "PostgreSQL",
      "SQLite",
      "MySQL",
      "SQLAlchemy",
      "TypeORM",
      "Prisma ORM",
    ],
  },

  {
    id: "cloud-devops",

    title: "Cloud & DevOps",

    skills: [
      "Docker",
      "Docker Compose",
      "Git",
      "GitHub",
      "CI/CD",
      "Linux",
      "Environment Variables",
    ],
  },

  {
    id: "testing",

    title: "Testing & Debugging",

    skills: [
      "Postman",
      "API Testing",
      "Debugging",
      "Problem Solving",
    ],
  },

  {
    id: "tools",

    title: "Tools & Technologies",

    skills: [
      "VS Code",
      "npm",
      "Turbopack",
      "GitHub Actions",
      "Open Library API",
    ],
  },

  {
    id: "ai",

    title: "AI & Productivity",

    skills: [
      "ChatGPT",
      "GitHub Copilot",
      "Claude AI",
      "Gemini",
      "Cursor AI",
    ],
  },
] as const;

export default skills;