/* =============================================================================
   Portfolio Website
   =============================================================================
   File: src/components/home/ExperienceCard.tsx
   -----------------------------------------------------------------------------
   Experience Card

   Ultra Premium UI
   -----------------------------------------------------------------------------
   • Premium Glassmorphism
   • Responsive
   • Dashboard Style
   • Better Typography
   • Premium Hover Effects
   • No Business Logic Changes
   =============================================================================
*/

import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
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
      className="
        group
        relative
        overflow-hidden
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-cyan-400/20
        hover:shadow-[0_20px_60px_rgba(34,211,238,0.10)]
      "
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex flex-col gap-8">
        {/* ============================================================
            Header
        ============================================================= */}

        <div className="flex items-start gap-4">
          <div
            className="
              flex
              h-14
              w-14
              shrink-0
              items-center
              justify-center
              rounded-2xl
              border
              border-cyan-400/20
              bg-gradient-to-br
              from-cyan-500
              via-sky-500
              to-violet-600
              text-white
              shadow-xl
              shadow-cyan-500/20
            "
          >
            <BriefcaseBusiness className="h-6 w-6" />
          </div>

          <div className="min-w-0">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Experience
            </h2>

            <p className="mt-2 text-sm text-zinc-400">
              Professional journey building scalable backend systems and modern
              web applications.
            </p>

            <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />
          </div>
        </div>

        {/* ============================================================
            Experience Card
        ============================================================= */}

        <div
          className="
            group/card
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-6
            transition-all
            duration-300
            hover:border-cyan-400/20
            hover:bg-white/10
          "
        >
          <div className="flex flex-col gap-6">
            {/* Role */}

            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0 flex-1">
                <h3 className="text-xl font-bold leading-7 text-white">
                  Software Analyst Intern
                </h3>

                <div className="mt-5 flex flex-wrap gap-3">
                  <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                    <Building2 className="h-4 w-4 text-cyan-400" />

                    <span className="text-sm font-medium text-zinc-300">
                      Revel Labs
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                    <CalendarDays className="h-4 w-4 text-cyan-400" />

                    <span className="text-sm font-medium text-zinc-300">
                      Feb 2026 – Present
                    </span>
                  </div>
                </div>
              </div>

              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-cyan-500/20
                  bg-cyan-500/10
                  transition-all
                  duration-300
                  group-hover/card:rotate-6
                  group-hover/card:scale-110
                "
              >
                <ArrowUpRight className="h-5 w-5 text-cyan-400" />
              </div>
            </div>

            {/* Divider */}

            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Description */}

            <p className="text-[15px] leading-8 text-zinc-300">
              Developing scalable backend services, RESTful APIs, and enterprise
              software using FastAPI, NestJS, Node.js, PostgreSQL, and Docker.
              Working on authentication systems, database optimization,
              performance improvements, API integrations, and collaborative
              development workflows while following modern software engineering
              best practices.
            </p>
          </div>
        </div>

        {/* ============================================================
            Technologies
        ============================================================= */}

        <div>
          <div className="mb-5 flex items-center justify-between">
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Current Tech Stack
            </h4>

            <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300">
              {technologies.length} Technologies
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="
                  rounded-full
                  border
                  border-cyan-500/20
                  bg-cyan-500/10
                  px-4
                  py-2
                  text-xs
                  font-semibold
                  text-cyan-300
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-cyan-400/40
                  hover:bg-cyan-500/20
                  hover:shadow-lg
                  hover:shadow-cyan-500/10
                "
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