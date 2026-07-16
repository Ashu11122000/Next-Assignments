/**
 * =============================================================================
 * Portfolio
 * =============================================================================
 * File: src/components/home/HeroButtons.tsx
 * -----------------------------------------------------------------------------
 * Hero CTA Buttons
 * -----------------------------------------------------------------------------
 *
 * Ultra Premium UI
 * -----------------------------------------------------------------------------
 * • Premium CTA Buttons
 * • Better Responsive Layout
 * • Smooth Hover Effects
 * • Dashboard Style
 * • No Business Logic Changes
 *
 * =============================================================================
 */

import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { HERO_BUTTONS } from "@/data/hero";

export default function HeroButtons() {
  return (
    <div
      className="
        flex
        flex-col
        gap-4
        pt-10
        sm:flex-row
        sm:flex-wrap
        sm:items-center
      "
    >
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
              sm:w-auto
              sm:min-w-[220px]
              rounded-2xl
              px-8
              text-sm
              font-semibold
              transition-all
              duration-300
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
  );
}