/**
 * =============================================================================
 * Portfolio
 * =============================================================================
 * File: src/components/home/HeroIllustration.tsx
 * -----------------------------------------------------------------------------
 * Hero Illustration
 * -----------------------------------------------------------------------------
 *
 * Responsibilities
 * ----------------
 * • Render the developer workspace illustration.
 * • Display the current focus badge.
 * • Optimize image loading.
 * • Remain presentation-only.
 *
 * Rendering
 * ---------
 * • Server Component
 *
 * =============================================================================
 */

import Image from "next/image";

export default function HeroIllustration() {
  return (
    <>
      <div className="relative aspect-square w-[320px] overflow-hidden sm:w-[380px] lg:w-[500px]">
        <Image
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
          alt="Modern software development workspace"
          fill
          priority
          sizes="
            (max-width:640px) 320px,
            (max-width:1024px) 380px,
            500px
          "
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>

      <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-background via-background/70 to-transparent" />

      <div className="absolute bottom-6 left-6 rounded-2xl border border-white/10 bg-background/70 px-5 py-4 shadow-xl backdrop-blur-xl">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Current Focus
        </p>

        <p className="mt-1 text-sm font-semibold text-foreground">
          Full Stack Development
        </p>
      </div>
    </>
  );
}