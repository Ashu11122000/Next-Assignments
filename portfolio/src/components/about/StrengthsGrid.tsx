/**
 * =============================================================================
 * Portfolio Website
 * =============================================================================
 * File: src/components/about/StrengthsGrid.tsx
 * -----------------------------------------------------------------------------
 * Strengths Grid
 * -----------------------------------------------------------------------------
 *
 * Responsibilities
 * ----------------
 * • Display core professional strengths.
 * • Render reusable highlight cards.
 * • Match the premium dashboard design.
 * • Consume data from src/data/about.ts.
 * • Remain presentation-only.
 *
 * Rendering
 * ---------
 * • Server Component
 * • Static Rendering
 *
 * =============================================================================
 */

import { ArrowUpRight } from "lucide-react";

import { ABOUT_HIGHLIGHTS } from "@/data/about";

import { Card } from "@/components/ui/Card";

export default function StrengthsGrid() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
      {/* ---------------------------------------------------------------------- */}
      {/* Section Header                                                         */}
      {/* ---------------------------------------------------------------------- */}

      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-white">
          Core Strengths
        </h2>

        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500" />

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
          My approach to software engineering combines technical expertise,
          problem-solving, continuous learning, and collaboration to build
          scalable, maintainable, and impactful applications.
        </p>
      </div>

      {/* ---------------------------------------------------------------------- */}
      {/* Strength Cards                                                        */}
      {/* ---------------------------------------------------------------------- */}

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {ABOUT_HIGHLIGHTS.map((strength) => {
          const Icon = strength.icon;

          return (
            <Card
              key={strength.title}
              variant="glass"
              padding="lg"
              radius="lg"
              className="group border-white/10"
            >
              <div className="flex h-full flex-col">
                {/* Icon */}

                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-600 text-white shadow-lg shadow-cyan-500/20 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>

                  <ArrowUpRight className="h-5 w-5 text-zinc-500 transition-colors duration-300 group-hover:text-cyan-400" />
                </div>

                {/* Content */}

                <div className="mt-8 flex-1">
                  <h3 className="text-xl font-semibold text-white">
                    {strength.title}
                  </h3>

                  <p className="mt-4 leading-7 text-zinc-300">
                    {strength.description}
                  </p>
                </div>

                {/* Bottom Accent */}

                <div className="mt-8 h-1 w-0 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 transition-all duration-500 group-hover:w-full" />
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}