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
      className="relative"
    >
      {/* Screen Reader Heading */}

      <h2 id="hero-stats-heading" className="sr-only">
        Portfolio Statistics
      </h2>

      <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
        {HERO_STATS.map((stat) => {
          const Icon = stat.icon;

          return (
            <Card
              key={stat.label}
              variant="glass"
              padding="lg"
              radius="xl"
              hover
              className="group relative overflow-hidden border border-white/10"
            >
              {/* Background Glow */}

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-violet-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />

              {/* Icon */}

              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/15 bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-7 w-7" />
              </div>

              {/* Value */}

              <p className="relative z-10 mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {stat.value}
              </p>

              {/* Label */}

              <p className="relative z-10 mt-2 text-sm font-medium tracking-wide text-muted-foreground">
                {stat.label}
              </p>

              {/* Decorative Border */}

              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </Card>
          );
        })}
      </div>
    </section>
  );
}