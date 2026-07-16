/**
 * =============================================================================
 * Portfolio
 * =============================================================================
 * File: src/components/home/Hero.tsx
 * -----------------------------------------------------------------------------
 * Home Hero Section
 * -----------------------------------------------------------------------------
 *
 * Responsibilities
 * ----------------
 * • Compose the complete Hero section.
 * • Arrange Hero content and Hero image.
 * • Display hero statistics.
 * • Provide the premium dashboard layout.
 * • Keep business logic outside the component.
 *
 * Rendering
 * ---------
 * • Server Component
 * • Static Rendering
 * • No client-side JavaScript
 *
 * =============================================================================
 */

import { Container } from "@/components/ui/Container";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-12 sm:pt-16 lg:pt-20"
    >
      {/* --------------------------------------------------------------------- */}
      {/* Background Effects                                                    */}
      {/* --------------------------------------------------------------------- */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20"
      >
        {/* Top Glow */}
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />

        {/* Left Glow */}
        <div className="absolute -left-32 top-48 h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />

        {/* Right Glow */}
        <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <Container>
        <div className="relative space-y-8 lg:space-y-12">
          {/* ===================================================================
              Hero Layout
          =================================================================== */}

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* --------------------------------------------------------------- */}
            {/* Left Column                                                     */}
            {/* --------------------------------------------------------------- */}

            <HeroContent />

            {/* --------------------------------------------------------------- */}
            {/* Right Column                                                    */}
            {/* --------------------------------------------------------------- */}

            <HeroImage />
          </div>

          {/* ===================================================================
              Statistics
          =================================================================== */}

          <HeroStats />
        </div>
      </Container>
    </section>
  );
}