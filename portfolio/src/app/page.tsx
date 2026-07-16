/**
 * =============================================================================
 * Portfolio Website
 * =============================================================================
 * File: src/app/page.tsx
 * -----------------------------------------------------------------------------
 * Home Page
 * -----------------------------------------------------------------------------
 *
 * Responsibilities
 * ----------------
 * • Render the complete portfolio homepage.
 * • Assemble all reusable homepage sections.
 * • Keep the page lightweight and server-rendered.
 * • Provide a responsive dashboard-style layout.
 *
 * Rendering
 * ---------
 * • Server Component
 * • Static Rendering
 *
 * Sections
 * --------
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

import AboutCard from "@/components/home/AboutCard";
import ContactCard from "@/components/home/ContactCard";
import EducationTimeline from "@/components/home/EducationTimeline";
import ExperienceCard from "@/components/home/ExperienceCard";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Hero from "@/components/home/Hero";
import SkillsCard from "@/components/home/SkillsCard";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* ---------------------------------------------------------------------- */}
      {/* Hero Section                                                           */}
      {/* ---------------------------------------------------------------------- */}

      <Hero />

      {/* ---------------------------------------------------------------------- */}
      {/* Main Content                                                           */}
      {/* ---------------------------------------------------------------------- */}

      <section className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 xl:grid-cols-[1.7fr_1fr]">
          {/* ================================================================== */}
          {/* Left Content                                                       */}
          {/* ================================================================== */}

          <div className="space-y-8">
            <FeaturedProjects />

            <EducationTimeline />
          </div>

          {/* ================================================================== */}
          {/* Right Sidebar                                                      */}
          {/* ================================================================== */}

          <aside className="space-y-8">
            <AboutCard />

            <SkillsCard />

            <ExperienceCard />

            <ContactCard />
          </aside>
        </div>
      </section>
    </main>
  );
}