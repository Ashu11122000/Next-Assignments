/**
 * =============================================================================
 * Portfolio Website
 * =============================================================================
 * File: src/components/about/QuickFacts.tsx
 * -----------------------------------------------------------------------------
 * Quick Facts
 * -----------------------------------------------------------------------------
 *
 * Responsibilities
 * ----------------
 * • Display quick professional information.
 * • Showcase important statistics.
 * • Highlight current role and expertise.
 * • Match the premium dashboard design.
 * • Consume data from src/data/about.ts.
 *
 * Rendering
 * ---------
 * • Server Component
 * • Static Rendering
 *
 * =============================================================================
 */

import {
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  MapPin,
  Rocket,
  Sparkles,
} from "lucide-react";

import { ABOUT_INFO } from "@/data/about";

import { Card } from "@/components/ui/Card";

const STATS = [
  {
    label: "Experience",
    value: "10 Months",
    icon: BriefcaseBusiness,
  },
  {
    label: "Projects",
    value: "10+",
    icon: Rocket,
  },
  {
    label: "Technologies",
    value: "20+",
    icon: Code2,
  },
  {
    label: "Availability",
    value: "Open to Opportunities",
    icon: Sparkles,
  },
] as const;

export default function QuickFacts() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
      {/* ---------------------------------------------------------------------- */}
      {/* Header                                                                 */}
      {/* ---------------------------------------------------------------------- */}

      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-white">
          Quick Facts
        </h2>

        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500" />

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
          A quick overview of my professional profile, current role,
          academic background, and software engineering journey.
        </p>
      </div>

      {/* ---------------------------------------------------------------------- */}
      {/* Info Cards                                                             */}
      {/* ---------------------------------------------------------------------- */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {ABOUT_INFO.map((item) => {
          const Icon = item.icon;

          return (
            <Card
              key={item.label}
              variant="glass"
              padding="lg"
              radius="lg"
              className="text-center border-white/10"
            >
              <div className="flex flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-600 text-white shadow-lg shadow-cyan-500/20">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-6 text-sm uppercase tracking-wider text-zinc-400">
                  {item.label}
                </h3>

                <p className="mt-3 text-lg font-semibold text-white">
                  {item.value}
                </p>
              </div>
            </Card>
          );
        })}
      </div>

      {/* ---------------------------------------------------------------------- */}
      {/* Statistics                                                             */}
      {/* ---------------------------------------------------------------------- */}

      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {STATS.map((item) => {
          const Icon = item.icon;

          return (
            <Card
              key={item.label}
              variant="glass"
              padding="lg"
              radius="lg"
              className="border-white/10"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                  <Icon className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-sm text-zinc-400">
                    {item.label}
                  </p>

                  <p className="mt-1 text-lg font-semibold text-white">
                    {item.value}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* ---------------------------------------------------------------------- */}
      {/* Bottom Summary                                                         */}
      {/* ---------------------------------------------------------------------- */}

      <Card
        variant="glass"
        padding="lg"
        radius="lg"
        className="mt-10 border-white/10"
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-cyan-400" />

            <span className="text-zinc-300">
              Panchkula, Haryana, India
            </span>
          </div>

          <div className="flex items-center gap-3">
            <BriefcaseBusiness className="h-5 w-5 text-cyan-400" />

            <span className="text-zinc-300">
              Software Analyst Intern · Revel Labs
            </span>
          </div>

          <div className="flex items-center gap-3">
            <GraduationCap className="h-5 w-5 text-cyan-400" />

            <span className="text-zinc-300">
              MCA · Cloud Computing & DevOps
            </span>
          </div>
        </div>
      </Card>
    </section>
  );
}