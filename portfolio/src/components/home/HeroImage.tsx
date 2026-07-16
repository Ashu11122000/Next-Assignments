/**
 * =============================================================================
 * Portfolio
 * =============================================================================
 * File: src/components/home/HeroImage.tsx
 * -----------------------------------------------------------------------------
 * Hero Image
 * -----------------------------------------------------------------------------
 *
 * Ultra Premium UI
 * -----------------------------------------------------------------------------
 * • Premium Dashboard Design
 * • Glassmorphism
 * • Layered Shadows
 * • Ambient Lighting
 * • Floating Tech Cards
 * • Responsive
 * • No Business Logic Changes
 *
 * =============================================================================
 */

import Image from "next/image";

import { Card } from "@/components/ui/Card";
import FloatingTechIcons from "./FloatingTechIcons";

export default function HeroImage() {
  return (
    <div
      className="
        relative
        flex
        items-center
        justify-center
        py-6
        lg:py-10
      "
    >
      {/* ============================================================
          Background Lighting
      ============================================================ */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-30
          flex
          items-center
          justify-center
          overflow-hidden
        "
      >
        {/* Main Glow */}

        <div className="absolute h-[520px] w-[520px] rounded-full bg-cyan-500/15 blur-[170px]" />

        {/* Secondary Glow */}

        <div className="absolute -left-16 top-24 h-80 w-80 rounded-full bg-violet-500/10 blur-[140px]" />

        {/* Third Glow */}

        <div className="absolute -right-12 bottom-12 h-80 w-80 rounded-full bg-sky-500/10 blur-[150px]" />

        {/* Bottom Glow */}

        <div className="absolute bottom-0 h-52 w-[520px] rounded-full bg-blue-500/10 blur-[150px]" />
      </div>

      {/* ============================================================
          Decorative Rings
      ============================================================ */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-20
          flex
          items-center
          justify-center
        "
      >
        {/* Outer Ring */}

        <div className="absolute h-[620px] w-[620px] rounded-full border border-cyan-400/10" />

        {/* Middle Ring */}

        <div className="absolute h-[500px] w-[500px] rounded-full border border-white/5" />

        {/* Inner Ring */}

        <div className="absolute h-[390px] w-[390px] rounded-full border border-cyan-500/10" />

        {/* Decorative Dots */}

        <div className="absolute top-16 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-400/50 blur-[1px]" />

        <div className="absolute bottom-20 left-20 h-2.5 w-2.5 rounded-full bg-violet-400/50 blur-[1px]" />

        <div className="absolute right-20 top-32 h-3 w-3 rounded-full bg-sky-400/40 blur-[1px]" />
      </div>

      {/* ============================================================
          Floating Technologies
      ============================================================ */}

      <FloatingTechIcons />

      {/* ============================================================
          Main Glass Card
      ============================================================ */}

      <Card
        variant="glass"
        radius="xl"
        padding="none"
        className="
          group
          relative
          overflow-hidden
          rounded-[2rem]
          border
          border-white/10
          bg-white/[0.04]
          shadow-[0_30px_80px_rgba(0,0,0,0.40)]
          backdrop-blur-2xl
          transition-all
          duration-500
          hover:border-cyan-400/20
          hover:shadow-[0_40px_100px_rgba(34,211,238,0.15)]
        "
      >
        {/* Top Gradient */}

        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-500 to-violet-500" />

        {/* Glass Highlight */}

        <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/10 via-transparent to-transparent" />

        {/* Inner Border */}

        <div className="pointer-events-none absolute inset-3 rounded-[1.6rem] border border-white/10" />

        {/* ============================================================
            Image Container
            (Continue in Part 2)
        ============================================================ */}

        <div
          className="
            relative
            aspect-square
            w-[320px]
            overflow-hidden
            sm:w-[390px]
            lg:w-[520px]
          "
        >

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
              group-hover:scale-105
            "
          />

          {/* Top Overlay */}

          <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-transparent" />

          {/* Bottom Overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/15 to-transparent" />

          {/* Side Highlight */}

          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white/5 to-transparent" />
        </div>

        {/* ============================================================
            Current Focus Card
        ============================================================ */}

        <div
          className="
            absolute
            bottom-7
            left-7
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

            <span className="relative flex h-3 w-3">

              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />

              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />

            </span>

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
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

        {/* ============================================================
            Developer Badge
        ============================================================ */}

        <div
          className="
            absolute
            right-7
            top-7
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

        {/* ============================================================
            Experience Badge
        ============================================================ */}

        <div
          className="
            absolute
            right-7
            bottom-28
            rounded-2xl
            border
            border-white/10
            bg-white/10
            px-5
            py-4
            shadow-xl
            backdrop-blur-xl
          "
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-400">
            Experience
          </p>

          <p className="mt-2 text-xl font-bold text-white">
            10<span className="text-cyan-400">+</span>
          </p>

          <p className="text-xs text-zinc-400">
            Months
          </p>
        </div>

        {/* ============================================================
            Decorative Glow
        ============================================================ */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-20
            -top-20
            h-48
            w-48
            rounded-full
            bg-cyan-500/10
            blur-3xl
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -left-20
            -bottom-20
            h-56
            w-56
            rounded-full
            bg-violet-500/10
            blur-3xl
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
        />
      </Card>
    </div>
  );
}