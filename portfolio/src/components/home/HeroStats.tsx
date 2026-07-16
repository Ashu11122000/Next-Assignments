/**
 * =============================================================================
 * Portfolio
 * =============================================================================
 * File: src/components/home/HeroStats.tsx
 * -----------------------------------------------------------------------------
 * Hero Statistics
 * -----------------------------------------------------------------------------
 *
 * Responsibilities
 * ----------------
 * • Display professional statistics beneath the Hero section.
 * • Consume static data from src/data/hero.ts.
 * • Showcase portfolio highlights.
 * • Reuse the shared Card component.
 * • Remain completely presentation-focused.
 *
 * Rendering
 * ---------
 * • Server Component
 * • Static Rendering
 *
 * =============================================================================
 */

import { Card } from "@/components/ui/Card";
import { HERO_STATS } from "@/data/hero";

export default function HeroStats() {
  return (
    <section
      aria-labelledby="hero-stats-heading"
      className="relative w-full"
    >
      <h2 id="hero-stats-heading" className="sr-only">
        Portfolio Statistics
      </h2>

      <div className="grid grid-cols-2 gap-4 md:gap-6 xl:grid-cols-4">
        {HERO_STATS.map((stat) => {
          const Icon = stat.icon;

          return (
            <Card
              key={stat.label}
              variant="glass"
              padding="lg"
              radius="xl"
              hover
              className="
                group
                relative
                flex
                min-h-[190px]
                flex-col
                items-center
                justify-center
                overflow-hidden
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-primary/40
                hover:shadow-[0_20px_60px_rgba(59,130,246,0.18)]
              "
            >
              {/* Premium Background Glow */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-0
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              >
                <div className="absolute -top-16 left-1/2 h-36 w-36 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-24 w-24 rounded-full bg-violet-500/15 blur-2xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-violet-500/10" />
              </div>

              {/* Decorative Ring */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  -right-12
                  -top-12
                  h-32
                  w-32
                  rounded-full
                  border
                  border-primary/10
                  transition-transform
                  duration-700
                  group-hover:scale-125
                "
              />

              {/* Icon */}

              <div
                className="
                  relative
                  z-10
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-primary/20
                  bg-gradient-to-br
                  from-primary/20
                  via-primary/10
                  to-violet-500/20
                  text-primary
                  shadow-lg
                  shadow-primary/10
                  transition-all
                  duration-500
                  group-hover:scale-110
                  group-hover:rotate-6
                  group-hover:border-primary/40
                  group-hover:bg-primary
                  group-hover:text-primary-foreground
                "
              >
                <Icon className="h-7 w-7" />
              </div>

              {/* Value */}

              <p
                className="
                  relative
                  z-10
                  mt-6
                  text-center
                  text-3xl
                  font-extrabold
                  tracking-tight
                  text-foreground
                  sm:text-4xl
                "
              >
                {stat.value}
              </p>

              {/* Label */}

              <p
                className="
                  relative
                  z-10
                  mt-2
                  text-center
                  text-sm
                  font-medium
                  leading-relaxed
                  text-muted-foreground
                "
              >
                {stat.label}
              </p>

              {/* Bottom Accent */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  h-[3px]
                  scale-x-0
                  bg-gradient-to-r
                  from-cyan-400
                  via-blue-500
                  to-violet-500
                  transition-transform
                  duration-500
                  group-hover:scale-x-100
                "
              />

              {/* Soft Inner Border */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-[1px]
                  rounded-[inherit]
                  border
                  border-white/5
                "
              />
            </Card>
          );
        })}
      </div>
    </section>
  );
}