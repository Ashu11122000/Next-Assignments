/**
 * =============================================================================
 * Portfolio
 * =============================================================================
 * File: src/components/home/HeroIllustration.tsx
 * -----------------------------------------------------------------------------
 * Hero Illustration
 * -----------------------------------------------------------------------------
 *
 * Ultra Premium UI
 * -----------------------------------------------------------------------------
 * • Premium Glass Frame
 * • Better Shadows
 * • Responsive
 * • Dashboard Inspired
 * • No Business Logic Changes
 *
 * =============================================================================
 */

import Image from "next/image";

export default function HeroIllustration() {
  return (
    <>
      {/* ===============================================================
          Image Container
      ================================================================ */}

      <div
        className="
          relative
          aspect-square
          w-[320px]
          overflow-hidden
          rounded-[2rem]
          border
          border-white/10
          bg-white/5
          shadow-[0_30px_80px_rgba(0,0,0,0.35)]
          backdrop-blur-xl
          sm:w-[390px]
          lg:w-[520px]
        "
      >
        {/* Gradient Border */}

        <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-500/20 via-transparent to-violet-500/20" />

        {/* Image */}

        <Image
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
          alt="Modern software development workspace"
          fill
          priority
          sizes="
            (max-width:640px) 320px,
            (max-width:1024px) 390px,
            520px
          "
          className="
            object-cover
            transition-transform
            duration-700
            hover:scale-105
          "
        />

        {/* Top Overlay */}

        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-transparent" />

        {/* Bottom Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Inner Border */}

        <div className="pointer-events-none absolute inset-3 rounded-[1.6rem] border border-white/10" />
      </div>

      {/* ===============================================================
          Decorative Glow
      ================================================================ */}

      <div
        aria-hidden="true"
        className="
          absolute
          -right-8
          -top-8
          h-44
          w-44
          rounded-full
          bg-cyan-500/15
          blur-3xl
        "
      />

      {/* ===============================================================
          Current Focus Card
      ================================================================ */}

      <div
        className="
          absolute
          bottom-8
          left-8
          rounded-3xl
          border
          border-white/10
          bg-white/10
          px-6
          py-5
          shadow-2xl
          backdrop-blur-2xl
        "
      >
        <div className="flex items-center gap-3">

          <span className="flex h-3 w-3">

            <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-emerald-400 opacity-70" />

            <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />

          </span>

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
            Current Focus
          </p>

        </div>

        <p className="mt-3 text-base font-bold text-white">
          Full Stack Development
        </p>

        <p className="mt-1 text-sm text-zinc-400">
          Building scalable web applications
        </p>
      </div>

      {/* ===============================================================
          Floating Badge
      ================================================================ */}

      <div
        className="
          absolute
          right-6
          top-6
          rounded-full
          border
          border-cyan-500/20
          bg-cyan-500/10
          px-4
          py-2
          backdrop-blur-xl
        "
      >
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
          Developer
        </span>
      </div>
    </>
  );
}