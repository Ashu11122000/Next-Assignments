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
 * • Assemble reusable landing page sections.
 * • Keep the page server-rendered.
 * • Maintain a premium single-page scrolling experience.
 *
 * Rendering
 * ---------
 * • Server Component
 * • Static Rendering
 *
 * =============================================================================
 */

import Hero from "@/components/home/Hero";
import AboutCard from "@/components/home/AboutCard";
import FeaturedProjects from "@/components/home/FeaturedProjects";

import TechStack from "@/components/skills/TechStack";
import Timeline from "@/components/experience/Timeline";
import EducationTimeline from "@/components/education/EducationTimeline";

import ContactCard from "@/components/contact/ContactCard";
import { skills } from "@/data/skills";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      {/* ---------------------------------------------------------------------- */}
      {/* Hero */}
      {/* ---------------------------------------------------------------------- */}

      <Hero />

      {/* ---------------------------------------------------------------------- */}
      {/* About */}
      {/* ---------------------------------------------------------------------- */}

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <AboutCard />
      </section>

      {/* ---------------------------------------------------------------------- */}
      {/* Skills */}
      {/* ---------------------------------------------------------------------- */}

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <TechStack categories={skills} />
      </section>

      {/* ---------------------------------------------------------------------- */}
      {/* Featured Projects */}
      {/* ---------------------------------------------------------------------- */}

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <FeaturedProjects />
      </section>

      {/* ---------------------------------------------------------------------- */}
      {/* Experience */}
      {/* ---------------------------------------------------------------------- */}

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <Timeline />
      </section>

      {/* ---------------------------------------------------------------------- */}
      {/* Education */}
      {/* ---------------------------------------------------------------------- */}

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <EducationTimeline />
      </section>

      {/* ---------------------------------------------------------------------- */}
      {/* Contact */}
      {/* ---------------------------------------------------------------------- */}

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <ContactCard />
      </section>
    </main>
  );
}