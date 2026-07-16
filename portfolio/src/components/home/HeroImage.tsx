/**
 * =============================================================================
 * Portfolio
 * =============================================================================
 * File: src/components/home/HeroImage.tsx
 * -----------------------------------------------------------------------------
 * Hero Image
 * -----------------------------------------------------------------------------
 *
 * Responsibilities
 * ----------------
 * • Render the Hero illustration area.
 * • Display floating technology icons.
 * • Showcase a premium developer workspace.
 * • Keep the component presentation-focused.
 * • Match the portfolio's premium dashboard aesthetic.
 *
 * Rendering
 * ---------
 * • Server Component
 * • Static Rendering
 *
 * =============================================================================
 */

import Image from "next/image";

import { Card } from "@/components/ui/Card";
import FloatingTechIcons from "./FloatingTechIcons";

export default function HeroImage() {
  return (
    <div className="relative flex items-center justify-center">
      {/* =======================================================================
          Background Glow
      ======================================================================= */}

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 flex items-center justify-center"
      >
        <div className="h-[420px] w-[420px] rounded-full bg-primary/15 blur-[140px]" />
      </div>

      {/* =======================================================================
          Decorative Rings
      ======================================================================= */}

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 flex items-center justify-center"
      >
        <div className="absolute h-[500px] w-[500px] rounded-full border border-primary/10" />
        <div className="absolute h-[380px] w-[380px] rounded-full border border-white/5" />
      </div>

      {/* =======================================================================
          Floating Tech Icons
      ======================================================================= */}

      <FloatingTechIcons />

      {/* =======================================================================
          Main Card
      ======================================================================= */}

      <Card
        variant="glass"
        radius="xl"
        padding="none"
        className="relative overflow-hidden border border-white/10 bg-background/40 shadow-2xl backdrop-blur-2xl"
      >
        {/* Top Glow */}

        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500" />

        {/* Image */}

        <div className="relative aspect-square w-[320px] overflow-hidden sm:w-[380px] lg:w-[500px]">
          <Image
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
            alt="Developer workspace"
            fill
            priority
            sizes="(max-width:768px) 320px,
                   (max-width:1024px) 380px,
                   500px"
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>

        {/* Bottom Gradient */}

        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background via-background/70 to-transparent" />

        {/* Floating Badge */}

        <div className="absolute bottom-6 left-6 rounded-xl border border-white/10 bg-background/70 px-4 py-3 shadow-xl backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Current Focus
          </p>

          <p className="mt-1 text-sm font-semibold text-foreground">
            Full Stack Development
          </p>
        </div>
      </Card>
    </div>
  );
}