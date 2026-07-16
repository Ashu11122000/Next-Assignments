/**
 * =============================================================================
 * Portfolio Website
 * =============================================================================
 * File: src/app/experience/page.tsx
 * -----------------------------------------------------------------------------
 * Experience Page
 * -----------------------------------------------------------------------------
 *
 * Responsibilities
 * ----------------
 * • Display professional work experience.
 * • Showcase career timeline.
 * • Keep the page server-rendered.
 * • Maintain the premium portfolio layout.
 *
 * Rendering
 * ---------
 * • Server Component
 * • Static Rendering
 *
 * =============================================================================
 */

import ExperienceHero from "@/components/experience/ExperienceHero";
import Timeline from "@/components/experience/Timeline";

export const metadata = {
  title: "Experience | Ashish Sharma",
  description:
    "Explore the professional experience of Ashish Sharma, including internships, frontend development, full-stack engineering, and modern software development expertise.",
};

export default function ExperiencePage() {
  return (
    <main className="relative overflow-x-hidden">
      {/* ---------------------------------------------------------------------- */}
      {/* Hero */}
      {/* ---------------------------------------------------------------------- */}

      <ExperienceHero />

      {/* ---------------------------------------------------------------------- */}
      {/* Timeline */}
      {/* ---------------------------------------------------------------------- */}

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <Timeline />
      </section>
    </main>
  );
}