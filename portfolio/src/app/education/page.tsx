/**
 * =============================================================================
 * Portfolio Website
 * =============================================================================
 * File: src/app/education/page.tsx
 * -----------------------------------------------------------------------------
 * Education Page
 * -----------------------------------------------------------------------------
 *
 * Responsibilities
 * ----------------
 * • Display academic background.
 * • Showcase education timeline.
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

import type { Metadata } from "next";

import EducationHero from "@/components/education/EducationHero";
import EducationTimeline from "@/components/education/EducationTimeline";

export const metadata: Metadata = {
  title: "Education | Ashish Sharma",
  description:
    "Explore the academic background and educational journey of Ashish Sharma, including formal education and continuous learning in software engineering and modern web development.",
};

export default function EducationPage() {
  return (
    <main className="relative overflow-x-hidden">
      {/* ---------------------------------------------------------------------- */}
      {/* Hero */}
      {/* ---------------------------------------------------------------------- */}

      <EducationHero />

      {/* ---------------------------------------------------------------------- */}
      {/* Education Timeline */}
      {/* ---------------------------------------------------------------------- */}

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <EducationTimeline />
      </section>
    </main>
  );
}