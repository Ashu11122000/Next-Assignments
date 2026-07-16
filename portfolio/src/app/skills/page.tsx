/**
 * =============================================================================
 * Portfolio Website
 * =============================================================================
 * File: src/app/skills/page.tsx
 * -----------------------------------------------------------------------------
 * Skills Page
 * -----------------------------------------------------------------------------
 *
 * Responsibilities
 * ----------------
 * • Display all technical skills.
 * • Organize skills into categories.
 * • Keep the page server-rendered.
 *
 * Rendering
 * ---------
 * • Server Component
 * • Static Rendering
 *
 * =============================================================================
 */

import SkillsHero from "@/components/skills/SkillsHero";
import TechStack from "@/components/skills/TechStack";

import { skills } from "@/data/skills";

export const metadata = {
  title: "Skills | Ashish Sharma",
  description:
    "Explore Ashish Sharma's technical skills including React, Next.js, TypeScript, FastAPI, NestJS, PostgreSQL, Prisma, Docker, Tailwind CSS, and modern software development technologies.",
};

export default function SkillsPage() {
  return (
    <main className="relative overflow-x-hidden">
      {/* ---------------------------------------------------------------------- */}
      {/* Hero */}
      {/* ---------------------------------------------------------------------- */}

      <SkillsHero />

      {/* ---------------------------------------------------------------------- */}
      {/* Skills */}
      {/* ---------------------------------------------------------------------- */}

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <TechStack categories={skills} />
      </section>
    </main>
  );
}