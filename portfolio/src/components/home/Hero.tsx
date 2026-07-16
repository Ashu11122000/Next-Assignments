/**
 * =============================================================================
 * Portfolio
 * =============================================================================
 * File: src/components/home/Hero.tsx
 * -----------------------------------------------------------------------------
 * Home Hero Section
 * -----------------------------------------------------------------------------
 *
 * Ultra Premium UI
 * -----------------------------------------------------------------------------
 * • Premium Dashboard Layout
 * • Better Responsive Spacing
 * • Layered Background Effects
 * • Glass Dashboard Feel
 * • No Business Logic Changes
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
      className="
        relative
        overflow-hidden
        pt-16
        sm:pt-20
        lg:pt-24
        xl:pt-28
      "
    >
      {/* ================================================================
          Premium Background
      ================================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 overflow-hidden"
      >
        {/* Center Glow */}

        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[140px]" />

        {/* Left Glow */}

        <div className="absolute -left-40 top-56 h-96 w-96 rounded-full bg-violet-500/10 blur-[150px]" />

        {/* Right Glow */}

        <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[150px]" />

        {/* Extra Glow */}

        <div className="absolute left-1/3 bottom-0 h-80 w-80 rounded-full bg-sky-500/5 blur-[140px]" />

        {/* Decorative Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.04]
            [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)]
            [background-size:60px_60px]
            [mask-image:radial-gradient(circle_at_center,black,transparent_90%)]
          "
        />
      </div>

      <Container>
        <div
          className="
            relative
            flex
            flex-col
            gap-16
            lg:gap-24
          "
        >
          {/* ============================================================
              Hero Layout
          ============================================================ */}

          <div
            className="
              grid
              items-center
              gap-16
              lg:grid-cols-[1.05fr_0.95fr]
              xl:gap-24
            "
          >
            {/* Left */}

            <HeroContent />

            {/* Right */}

            <HeroImage />
          </div>

          {/* ============================================================
              Statistics
          ============================================================ */}

          <HeroStats />
        </div>
      </Container>
    </section>
  );
}