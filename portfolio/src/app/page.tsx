/**
 * =============================================================================
 * Portfolio
 * =============================================================================
 * File: src/app/page.tsx
 * -----------------------------------------------------------------------------
 * Home Page
 * -----------------------------------------------------------------------------
 *
 * Responsibilities
 * ----------------
 * • Render the portfolio homepage.
 * • Compose the homepage from reusable sections.
 * • Keep the page lightweight and server-rendered.
 * • Provide the entry point for future homepage sections.
 *
 * Rendering
 * ---------
 * • Server Component
 * • Static Rendering
 *
 * Future Sections
 * ---------------
 * • Hero
 * • About
 * • Skills
 * • Experience
 * • Featured Projects
 * • Education
 * • Contact
 *
 * =============================================================================
 */

import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* ---------------------------------------------------------------------- */}
      {/* Hero Section                                                           */}
      {/* ---------------------------------------------------------------------- */}

      <Hero />

      {/* ---------------------------------------------------------------------- */}
      {/* Upcoming Sections                                                      */}
      {/* ---------------------------------------------------------------------- */}

      {/*
        <AboutPreview />
        <SkillsPreview />
        <ExperiencePreview />
        <FeaturedProjects />
        <EducationPreview />
        <ContactCTA />
      */}
    </main>
  );
}