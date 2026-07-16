/**
 * =============================================================================
 * Portfolio
 * =============================================================================
 * File: src/components/home/HeroBackground.tsx
 * -----------------------------------------------------------------------------
 * Hero Background
 * -----------------------------------------------------------------------------
 *
 * Ultra Premium UI
 * -----------------------------------------------------------------------------
 * • Layered Ambient Lighting
 * • Premium Dashboard Grid
 * • Radial Fade
 * • Decorative Gradient Effects
 * • Purely Presentational
 *
 * =============================================================================
 */

export default function HeroBackground() {
  return (
    <>
      {/* ===============================================================
          Ambient Lighting
      ================================================================ */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-30 overflow-hidden"
      >
        {/* Main Glow */}

        <div className="absolute left-1/2 top-0 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[180px]" />

        {/* Left Glow */}

        <div className="absolute -left-40 top-52 h-[28rem] w-[28rem] rounded-full bg-violet-500/10 blur-[170px]" />

        {/* Right Glow */}

        <div className="absolute -right-40 bottom-10 h-[30rem] w-[30rem] rounded-full bg-sky-500/10 blur-[180px]" />

        {/* Bottom Glow */}

        <div className="absolute bottom-0 left-1/2 h-[24rem] w-[56rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[170px]" />

        {/* Accent Glow */}

        <div className="absolute left-1/3 top-1/2 h-72 w-72 rounded-full bg-cyan-400/5 blur-[150px]" />

        {/* Accent Glow */}

        <div className="absolute right-1/3 bottom-20 h-72 w-72 rounded-full bg-violet-500/5 blur-[150px]" />
      </div>

      {/* ===============================================================
          Decorative Gradient Orbs
      ================================================================ */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-25 overflow-hidden"
      >
        <div className="absolute left-20 top-20 h-3 w-3 rounded-full bg-cyan-400/40 blur-sm" />
        <div className="absolute right-32 top-44 h-4 w-4 rounded-full bg-violet-400/30 blur-sm" />
        <div className="absolute bottom-20 left-1/4 h-3 w-3 rounded-full bg-sky-400/30 blur-sm" />
        <div className="absolute right-1/4 bottom-32 h-2 w-2 rounded-full bg-cyan-300/40 blur-sm" />
      </div>

      {/* ===============================================================
          Premium Grid Overlay
      ================================================================ */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-20
          opacity-[0.05]
        "
      >
        <div
          className="
            h-full
            w-full
            bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)]
            bg-[size:48px_48px]
            [mask-image:radial-gradient(circle_at_center,black,transparent_90%)]
          "
        />
      </div>

      {/* ===============================================================
          Top Gradient Fade
      ================================================================ */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          -z-15
          h-40
          bg-gradient-to-b
          from-background
          to-transparent
        "
      />

      {/* ===============================================================
          Bottom Gradient Fade
      ================================================================ */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          -z-15
          h-48
          bg-gradient-to-t
          from-background
          to-transparent
        "
      />

      {/* ===============================================================
          Radial Vignette
      ================================================================ */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          bg-[radial-gradient(circle_at_center,transparent_42%,rgba(2,6,23,0.55)_100%)]
        "
      />

      {/* ===============================================================
          Soft Noise Layer
      ================================================================ */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-5
          opacity-[0.015]
          [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)]
          [background-size:22px_22px]
        "
      />
    </>
  );
}