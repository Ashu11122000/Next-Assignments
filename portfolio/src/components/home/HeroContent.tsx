/**
 * =============================================================================
 * Portfolio
 * =============================================================================
 * File: src/components/home/HeroContent.tsx
 * -----------------------------------------------------------------------------
 * Hero Content
 * -----------------------------------------------------------------------------
 *
 * Responsibilities
 * ----------------
 * • Render the textual content of the Hero section.
 * • Consume static data from src/data/hero.ts.
 * • Keep presentation separated from layout.
 * * • Display hero buttons and social links.
 * • Maintain accessibility and responsive typography.
 *
 * Rendering
 * ---------
 * • Server Component
 * • Static Rendering
 *
 * =============================================================================
 */

import Link from "next/link";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/common/SocialLinks";

import {
  HERO_BUTTONS,
  HERO_DATA,
} from "@/data/hero";

export default function HeroContent() {
  return (
    <div className="relative flex flex-col items-start">
      {/* --------------------------------------------------------------------- */}
      {/* Availability Badge                                                    */}
      {/* --------------------------------------------------------------------- */}

      <Badge
        variant="outline"
        className="mb-6 border-primary/25 bg-primary/5 px-4 py-1.5 text-xs font-medium tracking-wide"
      >
        {HERO_DATA.availability}
      </Badge>

      {/* --------------------------------------------------------------------- */}
      {/* Heading                                                               */}
      {/* --------------------------------------------------------------------- */}

      <h1
        id="hero-heading"
        className="max-w-3xl text-balance text-5xl font-extrabold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl"
      >
        <span className="block text-muted-foreground">
          {HERO_DATA.title}
        </span>

        <span className="mt-1 block bg-linear-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
          {HERO_DATA.highlight}
        </span>
      </h1>

      {/* --------------------------------------------------------------------- */}
      {/* Subtitle                                                              */}
      {/* --------------------------------------------------------------------- */}

      <p className="mt-6 max-w-2xl text-xl font-medium text-primary sm:text-2xl">
        {HERO_DATA.subtitle}
      </p>

      {/* --------------------------------------------------------------------- */}
      {/* Description                                                           */}
      {/* --------------------------------------------------------------------- */}

      <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-muted-foreground sm:text-lg">
        {HERO_DATA.description}
      </p>

      {/* --------------------------------------------------------------------- */}
      {/* CTA Buttons                                                           */}
      {/* --------------------------------------------------------------------- */}

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        {HERO_BUTTONS.map((button) => {
          const Icon = button.icon;

          return (
            <Button
              key={button.label}
              asChild
              variant={button.variant}
              size="lg"
              rightIcon={<Icon className="h-4 w-4" />}
            >
              <Link href={button.href}>
                {button.label}
              </Link>
            </Button>
          );
        })}
      </div>

      {/* --------------------------------------------------------------------- */}
      {/* Social Links                                                          */}
      {/* --------------------------------------------------------------------- */}

      <div className="mt-10">
        <SocialLinks />
      </div>
    </div>
  );
}