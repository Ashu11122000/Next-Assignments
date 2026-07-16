/**
 * =============================================================================
 * Portfolio Website
 * =============================================================================
 * File: src/app/projects/page.tsx
 * -----------------------------------------------------------------------------
 * Projects Page
 * -----------------------------------------------------------------------------
 *
 * Responsibilities
 * ----------------
 * • Display all portfolio projects.
 * • Highlight featured projects.
 * • Present project cards in a responsive grid.
 * • Keep the page server-rendered.
 *
 * Rendering
 * ---------
 * • Server Component
 * • Static Rendering
 *
 * =============================================================================
 */

import ProjectsHero from "@/components/projects/ProjectsHero";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ProjectsGrid from "@/components/projects/ProjectsGrid";

import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects | Ashish Sharma",
  description:
    "Explore software engineering, frontend, backend, and full-stack projects built by Ashish Sharma using React, Next.js, TypeScript, FastAPI, NestJS, PostgreSQL, Prisma, and modern web technologies.",
};

export default function ProjectsPage() {
  const featuredProjects = projects.filter((project) => project.featured);

  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <main className="relative overflow-x-hidden">
      {/* ---------------------------------------------------------------------- */}
      {/* Hero */}
      {/* ---------------------------------------------------------------------- */}

      <ProjectsHero />

      {/* ---------------------------------------------------------------------- */}
      {/* Featured Projects */}
      {/* ---------------------------------------------------------------------- */}

      {featuredProjects.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <FeaturedProjects />
        </section>
      )}

      {/* ---------------------------------------------------------------------- */}
      {/* All Projects */}
      {/* ---------------------------------------------------------------------- */}

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <ProjectsGrid projects={otherProjects} />
      </section>
    </main>
  );
}