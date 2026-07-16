/* =============================================================================
   Portfolio Website
   =============================================================================
   File: src/data/experience.ts

   Description
   -----------------------------------------------------------------------------
   Static professional experience data used throughout the portfolio.

   Used By
   -----------------------------------------------------------------------------
   ✓ ExperienceCard
   ✓ ExperienceTimeline
   ✓ Home Page
   ✓ Experience Page
   =============================================================================
*/

export interface Experience {
  readonly id: string;
  readonly company: string;
  readonly position: string;
  readonly employmentType: string;
  readonly location: string;
  readonly duration: string;
  readonly current: boolean;
  readonly description: string;
  readonly responsibilities: readonly string[];
  readonly technologies: readonly string[];
  readonly featured?: boolean;
}

export const experience: readonly Experience[] = [
  {
    id: "revel-labs",

    company: "Revel Labs",

    position: "Software Analyst Intern",

    employmentType: "Remote Internship",

    location: "Remote",

    duration: "Feb 2026 – Present",

    current: true,

    description:
      "Working on backend development, API engineering, database operations, containerized development environments, and modern software engineering practices while contributing to production-ready applications.",

    responsibilities: [
      "Developing and testing RESTful APIs using Express.js and Node.js following backend development best practices.",
      "Writing and optimizing PostgreSQL queries for data retrieval, validation, and database operations.",
      "Implementing API testing workflows using Postman to verify endpoint functionality and improve reliability.",
      "Working with Git and GitHub for collaborative development, branching, pull requests, and version control.",
      "Building containerized development environments using Docker for consistent deployments.",
      "Applying Pydantic for request validation and structured API data handling.",
      "Managing environment configurations using virtualenv, dotenv, and environment variables.",
      "Exploring GraphQL and gRPC communication patterns for scalable microservice architectures.",
      "Working in Linux-based development environments using modern command-line tooling.",
      "Strengthening backend architecture, debugging, API design, and software engineering fundamentals.",
    ],

    technologies: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Docker",
      "Git",
      "GitHub",
      "Postman",
      "Pydantic",
      "Python",
      "GraphQL",
      "gRPC",
      "Linux",
    ],

    featured: true,
  },

  {
    id: "devnexus-solutions",

    company: "Devnexus Solutions",

    position: "Frontend Developer",

    employmentType: "Internship",

    location: "Gurugram, Haryana",

    duration: "May 2025 – Aug 2025",

    current: false,

    description:
      "Contributed to frontend development, responsive user interfaces, client collaboration, deployment workflows, and business-facing web applications.",

    responsibilities: [
      "Developed and maintained responsive frontend modules using modern JavaScript.",
      "Contributed to the HRMS Portal by building reusable UI components and integrating backend APIs.",
      "Assisted CI/CD and deployment workflows for the Cervino Ceramics project.",
      "Collaborated with development teams to improve application usability, performance, and maintainability.",
      "Participated in client meetings, requirement gathering, and technical solution presentations.",
      "Generated business leads and maintained client communication throughout project lifecycles.",
    ],

    technologies: [
      "JavaScript",
      "HTML",
      "CSS",
      "React",
      "Git",
      "GitHub",
      "REST APIs",
      "Responsive Design",
      "CI/CD",
    ],
  },
] as const;

export default experience;