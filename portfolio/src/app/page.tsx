/**
 * =============================================================================
 * Portfolio Website
 * =============================================================================
 * File: src/app/page.tsx
 * -----------------------------------------------------------------------------
 * Home Page
 * =============================================================================
 */

import Hero from "@/components/home/Hero";
import AboutCard from "@/components/home/AboutCard";
import FeaturedProjects from "@/components/home/FeaturedProjects";

import TechStack from "@/components/skills/TechStack";
import Timeline from "@/components/experience/Timeline";
import EducationTimeline from "@/components/education/EducationTimeline";

import ContactCard from "@/components/contact/ContactCard";

import { Container } from "@/components/ui/Container";

import { skills } from "@/data/skills";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      {/* =========================================================================
          Hero
      ========================================================================= */}

      <Hero />

      {/* =========================================================================
          About
      ========================================================================= */}

      <section className="relative py-24 lg:py-32">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
        >
          <div className="absolute left-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[120px]" />
        </div>

        <Container>
          <AboutCard />
        </Container>
      </section>

      {/* =========================================================================
          Skills
      ========================================================================= */}

      <section className="relative py-24 lg:py-32">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
        >
          <div className="absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-violet-500/5 blur-[140px]" />
        </div>

        <Container>
          <TechStack categories={skills} />
        </Container>
      </section>

      {/* =========================================================================
          Projects
      ========================================================================= */}

      <section className="relative py-24 lg:py-32">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
        >
          <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/5 blur-[160px]" />
        </div>

        <Container>
          <FeaturedProjects />
        </Container>
      </section>

      {/* =========================================================================
          Experience
      ========================================================================= */}

      <section className="relative py-24 lg:py-32">
        <Container>
          <Timeline />
        </Container>
      </section>

      {/* =========================================================================
          Education
      ========================================================================= */}

      <section className="relative py-24 lg:py-32">
        <Container>
          <EducationTimeline />
        </Container>
      </section>

      {/* =========================================================================
          Contact
      ========================================================================= */}

      <section className="relative pb-40 pt-24 lg:pb-52 lg:pt-32">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
        >
          <div className="absolute bottom-0 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[180px]" />
        </div>

        <Container>
          <ContactCard />
        </Container>
      </section>
    </main>
  );
}