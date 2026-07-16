/* =============================================================================
   Portfolio Website
   =============================================================================
   File: src/components/home/ExperienceCard.tsx
   -----------------------------------------------------------------------------
   Experience Card
   -----------------------------------------------------------------------------

   Responsibilities
   ----------------
   • Display the current professional experience.
   • Highlight the current role and company.
   • Showcase the primary technologies being used.
   • Match the premium dashboard design language.
   • Reuse the shared Card component.

   Notes
   -----
   • Server Component
   • Fully responsive
   • Accessible
   • Production-ready
   =============================================================================
*/

import {
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  ArrowUpRight,
} from "lucide-react";

import { Card } from "@/components/ui/Card";

const technologies = [
  "FastAPI",
  "NestJS",
  "Node.js",
  "TypeScript",
  "PostgreSQL",
  "Docker",
];

export default function ExperienceCard() {
  return (
    <Card
      variant="glass"
      padding="lg"
      radius="lg"
      className="border-white/10"
    >
      <div className="flex flex-col gap-6">
        {/* ------------------------------------------------------------------
            Header
        ------------------------------------------------------------------- */}
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-violet-600 text-white shadow-lg shadow-cyan-500/20">
            <BriefcaseBusiness className="h-5 w-5" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">
              Experience
            </h2>

            <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500" />
          </div>
        </div>

        {/* ------------------------------------------------------------------
            Current Position
        ------------------------------------------------------------------- */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-white">
                Software Analyst Intern
              </h3>

              <div className="mt-3 flex flex-wrap gap-4 text-sm text-zinc-300">
                <div className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-cyan-400" />

                  <span>Revel Labs</span>
                </div>

                <div className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-cyan-400" />

                  <span>Feb 2026 – Present</span>
                </div>
              </div>
            </div>

            <ArrowUpRight className="h-5 w-5 text-cyan-400" />
          </div>

          <p className="mt-5 text-sm leading-7 text-zinc-300">
            Developing scalable backend services and RESTful APIs using
            FastAPI, NestJS, Node.js, and PostgreSQL while following modern
            software engineering practices. Working with Docker,
            authentication, API testing, database optimization, and
            collaborative development workflows.
          </p>
        </div>

        {/* ------------------------------------------------------------------
            Technologies
        ------------------------------------------------------------------- */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-400">
            Current Tech Stack
          </h4>

          <div className="flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1.5 text-xs font-medium text-cyan-300 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/20"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}