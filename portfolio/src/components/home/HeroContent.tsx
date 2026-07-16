/**
 * =============================================================================
 * Portfolio
 * =============================================================================
 * File: src/components/home/HeroContent.tsx
 * -----------------------------------------------------------------------------
 * Hero Content
 * -----------------------------------------------------------------------------
 *
 * Ultra Premium UI
 * -----------------------------------------------------------------------------
 * • Premium Typography
 * • Better Responsive Layout
 * • Dashboard Style
 * • Better Spacing
 * • No Business Logic Changes
 *
 * =============================================================================
 */

import Link from "next/link";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import SocialLinks from "@/components/common/SocialLinks";

import {
  HERO_BUTTONS,
  HERO_DATA,
} from "@/data/hero";

export default function HeroContent() {
  return (
    <div
      className="
        relative
        z-10
        flex
        max-w-3xl
        flex-col
        items-start
      "
    >
      {/* ============================================================
          Availability Badge
      ============================================================ */}

      <Badge
        variant="outline"
        className="
          mb-8
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-cyan-500/20
          bg-cyan-500/5
          px-5
          py-2
          text-xs
          font-semibold
          uppercase
          tracking-[0.25em]
          text-cyan-300
          backdrop-blur-xl
        "
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </span>

        {HERO_DATA.availability}
      </Badge>

      {/* ============================================================
          Heading
      ============================================================ */}

      <h1
        id="hero-heading"
        className="
          max-w-4xl
          text-balance
          text-5xl
          font-black
          leading-[1.05]
          tracking-tight
          text-white
          sm:text-6xl
          lg:text-7xl
          xl:text-[5.3rem]
        "
      >
        <span className="block text-zinc-300">
          {HERO_DATA.title}
        </span>

        <span
          className="
            mt-3
            block
            bg-gradient-to-r
            from-cyan-400
            via-sky-400
            to-violet-500
            bg-clip-text
            text-transparent
          "
        >
          {HERO_DATA.highlight}
        </span>
      </h1>

      {/* ============================================================
          Subtitle
      ============================================================ */}

      <p
        className="
          mt-8
          inline-flex
          items-center
          rounded-full
          border
          border-white/10
          bg-white/5
          px-5
          py-2.5
          text-base
          font-semibold
          text-cyan-300
          backdrop-blur-xl
          sm:text-lg
          lg:text-xl
        "
      >
        {HERO_DATA.subtitle}
      </p>

      {/* ============================================================
          Description
      ============================================================ */}

      <p
        className="
          mt-8
          max-w-2xl
          text-pretty
          text-[16px]
          leading-9
          text-zinc-400
          sm:text-lg
        "
      >
        {HERO_DATA.description}
      </p>

      {/* ============================================================
          CTA Buttons
          (Continue in Part 2)
      ============================================================ */}

      <div className="mt-12 flex w-full flex-col gap-4 sm:flex-row sm:flex-wrap">

                {HERO_BUTTONS.map((button) => {
          const Icon = button.icon;

          const isPrimary = button.variant === "gradient";

          return (
            <Button
              key={button.label}
              asChild
              variant={button.variant}
              size="lg"
              rightIcon={<Icon className="h-4 w-4" />}
              className={`
                h-14
                w-full
                rounded-2xl
                px-8
                text-sm
                font-semibold
                transition-all
                duration-300
                sm:w-auto
                sm:min-w-[220px]
                ${
                  isPrimary
                    ? `
                      shadow-xl
                      shadow-cyan-500/20
                      hover:-translate-y-1
                      hover:shadow-cyan-500/30
                    `
                    : `
                      border
                      border-white/10
                      bg-white/5
                      backdrop-blur-xl
                      hover:-translate-y-1
                      hover:border-cyan-400/30
                      hover:bg-white/10
                    `
                }
              `}
            >
              <Link
                href={button.href}
                {...(button.external
                  ? {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }
                  : {})}
              >
                {button.label}
              </Link>
            </Button>
          );
        })}
      </div>

      {/* ============================================================
          Social Links
      ============================================================ */}

      <div className="mt-12 flex flex-col items-start gap-5">

        <div className="flex items-center gap-3">

          <div className="h-px w-10 bg-gradient-to-r from-cyan-400 to-transparent" />

          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
            Connect With Me
          </span>

        </div>

        <SocialLinks />

      </div>

      {/* ============================================================
          Bottom Accent
      ============================================================ */}

      <div
        aria-hidden="true"
        className="
          mt-12
          h-px
          w-40
          rounded-full
          bg-gradient-to-r
          from-cyan-500/50
          via-violet-500/50
          to-transparent
        "
      />

    </div>
  );
}