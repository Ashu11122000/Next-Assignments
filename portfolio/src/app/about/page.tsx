/**
 * =============================================================================
 * Portfolio Website
 * =============================================================================
 * File: src/app/about/page.tsx
 * -----------------------------------------------------------------------------
 * About Page
 * -----------------------------------------------------------------------------
 *
 * Responsibilities
 * ----------------
 * • Render the complete About page.
 * • Assemble all About page sections.
 * • Keep the page lightweight and server-rendered.
 * • Maintain a modular architecture.
 *
 * Rendering
 * ---------
 * • Server Component
 * • Static Rendering
 *
 * Sections
 * --------
 * • About Hero
 * • About Content
 * • Career Objective
 * • Professional Journey
 * • Strengths Grid
 * • Quick Facts
 * • Call To Action
 *
 * =============================================================================
 */

import AboutCTA from "@/components/about/AboutCTA";
import AboutContent from "@/components/about/AboutContent";
import AboutHero from "@/components/about/AboutHero";
import CareerObjective from "@/components/about/CareerObjective";
import ProfessionalJourney from "@/components/about/ProfessionalJourney";
import QuickFacts from "@/components/about/QuickFacts";
import StrengthsGrid from "@/components/about/StrengthsGrid";

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden">
      {/* ---------------------------------------------------------------------- */}
      {/* About Hero                                                             */}
      {/* ---------------------------------------------------------------------- */}

      <AboutHero />

      {/* ---------------------------------------------------------------------- */}
      {/* About Content                                                          */}
      {/* ---------------------------------------------------------------------- */}

      <AboutContent />

      {/* ---------------------------------------------------------------------- */}
      {/* Career Objective                                                       */}
      {/* ---------------------------------------------------------------------- */}

      <CareerObjective />

      {/* ---------------------------------------------------------------------- */}
      {/* Professional Journey                                                   */}
      {/* ---------------------------------------------------------------------- */}

      <ProfessionalJourney />

      {/* ---------------------------------------------------------------------- */}
      {/* Core Strengths                                                         */}
      {/* ---------------------------------------------------------------------- */}

      <StrengthsGrid />

      {/* ---------------------------------------------------------------------- */}
      {/* Quick Facts                                                            */}
      {/* ---------------------------------------------------------------------- */}

      <QuickFacts />

      {/* ---------------------------------------------------------------------- */}
      {/* Call To Action                                                         */}
      {/* ---------------------------------------------------------------------- */}

      <AboutCTA />
    </main>
  );
}