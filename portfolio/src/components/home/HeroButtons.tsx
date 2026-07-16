/**
 * =============================================================================
 * Portfolio
 * =============================================================================
 * File: src/components/home/HeroButtons.tsx
 * -----------------------------------------------------------------------------
 * Hero CTA Buttons
 * -----------------------------------------------------------------------------
 *
 * Responsibilities
 * ----------------
 * • Render the primary call-to-action buttons for the Hero section.
 * • Consume static button data from src/data/hero.ts.
 * • Keep HeroContent focused only on layout and typography.
 * • Support internal and external navigation.
 *
 * Rendering
 * ---------
 * • Server Component
 * • Static Rendering
 *
 * =============================================================================
 */

import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { HERO_BUTTONS } from "@/data/hero";

export default function HeroButtons() {
  return (
    <div className="flex flex-col gap-4 pt-8 sm:flex-row sm:items-center">
      {HERO_BUTTONS.map((button) => {
        const Icon = button.icon;

        return (
          <Button
            key={button.label}
            asChild
            variant={button.variant}
            size="lg"
            rightIcon={<Icon className="h-4 w-4" />}
            className="min-w-[190px]"
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
  );
}