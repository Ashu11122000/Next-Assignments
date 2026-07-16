/**
 * =============================================================================
 * Portfolio
 * =============================================================================
 * File: src/components/home/HeroBackground.tsx
 * -----------------------------------------------------------------------------
 * Hero Background
 * -----------------------------------------------------------------------------
 *
 * Responsibilities
 * ----------------
 * • Render decorative background effects for the Hero section.
 * • Provide premium gradient lighting.
 * • Display subtle grid overlay.
 * • Remain purely decorative.
 *
 * Rendering
 * ---------
 * • Server Component
 * • Static Rendering
 *
 * =============================================================================
 */

export default function HeroBackground() {
  return (
    <>
      {/* =======================================================================
          Gradient Lighting
      ======================================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-30 overflow-hidden"
      >
        {/* Center Glow */}

        <div className="absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-primary/15 blur-[140px]" />

        {/* Left Glow */}

        <div className="absolute -left-32 top-44 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

        {/* Right Glow */}

        <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-violet-500/10 blur-[140px]" />

        {/* Bottom Glow */}

        <div className="absolute bottom-0 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />
      </div>

      {/* =======================================================================
          Grid Background
      ======================================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 opacity-[0.04]"
      >
        <div
          className="
            h-full
            w-full
            bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)]
            bg-[size:40px_40px]
            text-white
          "
        />
      </div>

      {/* =======================================================================
          Radial Fade
      ======================================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(2,6,23,0.45)_100%)]"
      />
    </>
  );
}