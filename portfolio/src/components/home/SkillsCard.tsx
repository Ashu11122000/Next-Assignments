/* =============================================================================
   Portfolio Website
   =============================================================================
   File: src/components/home/SkillsCard.tsx
   -----------------------------------------------------------------------------
   Skills Card
   -----------------------------------------------------------------------------

   Responsibilities
   ----------------
   • Display core technologies in a compact dashboard card.
   • Showcase the primary technologies from the portfolio.
   • Match the premium glassmorphism design language.
   • Reuse shared Card component.
   • Prepare for future expansion using src/data/skills.ts.

   Notes
   -----
   • Server Component
   • Fully responsive
   • Accessible
   • Production-ready
   =============================================================================
*/

import {
  Braces,
  Database,
  Server,
  Code2,
} from "lucide-react";

import { Card } from "@/components/ui/Card";

type Skill = {
  name: string;
};

const skills: Skill[] = [
  { name: "Next.js" },
  { name: "React" },
  { name: "TypeScript" },
  { name: "Tailwind CSS" },
  { name: "Node.js" },
  { name: "Express.js" },
  { name: "Python" },
  { name: "FastAPI" },
  { name: "NestJS" },
  { name: "PostgreSQL" },
  { name: "SQLAlchemy" },
  { name: "Docker" },
  { name: "Git & GitHub" },
  { name: "REST APIs" },
  { name: "GraphQL" },
  { name: "gRPC" },
];

export default function SkillsCard() {
  return (
    <Card
      variant="glass"
      padding="lg"
      radius="xl"
      className="
        group
        relative
        overflow-hidden
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-2xl
        transition-all
        duration-500
        hover:border-primary/30
        hover:shadow-[0_25px_70px_rgba(59,130,246,0.12)]
      "
    >
      {/* Background Glow */}

      <div
        aria-hidden
        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      >
        <div className="absolute -top-16 right-0 h-44 w-44 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-12 -left-8 h-36 w-36 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      {/* Decorative Ring */}

      <div
        aria-hidden
        className="absolute -right-16 -top-16 h-40 w-40 rounded-full border border-primary/10 transition-transform duration-700 group-hover:scale-125"
      />

      <div className="relative z-10 flex flex-col gap-8">

        {/* ------------------------------------------------------------------
            Header
        ------------------------------------------------------------------- */}

        <div className="flex items-center gap-4">
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
              border-primary/20
              bg-gradient-to-br
              from-cyan-500/20
              via-blue-500/15
              to-violet-600/20
              text-primary
              shadow-lg
              shadow-primary/10
              transition-all
              duration-500
              group-hover:scale-110
              group-hover:rotate-6
            "
          >
            <Code2 className="h-6 w-6" />
          </div>

          <div className="min-w-0">
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              Skills & Technologies
            </h2>

            <div className="mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />
          </div>
        </div>

        {/* ------------------------------------------------------------------
            Skill Badges
        ------------------------------------------------------------------- */}

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill.name}
              className="
                group/badge
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-white/[0.04]
                px-4
                py-2.5
                text-sm
                font-medium
                text-zinc-200
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-primary/40
                hover:bg-primary/10
                hover:text-white
                hover:shadow-lg
                hover:shadow-primary/10
              "
            >
              <span
                className="
                  flex
                  h-6
                  w-6
                  items-center
                  justify-center
                  rounded-full
                  bg-primary/10
                  text-primary
                  transition-all
                  duration-300
                  group-hover/badge:bg-primary
                  group-hover/badge:text-white
                "
              >
                {getSkillIcon(skill.name)}
              </span>

              <span className="whitespace-nowrap">
                {skill.name}
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Accent */}

      <div
        aria-hidden
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

      {/* Inner Border */}

      <div
        aria-hidden
        className="pointer-events-none absolute inset-[1px] rounded-[inherit] border border-white/5"
      />
    </Card>
  );
}

/* =============================================================================
   Helpers
============================================================================= */

function getSkillIcon(skill: string) {
  switch (skill) {
    case "Next.js":
    case "React":
    case "TypeScript":
    case "Tailwind CSS":
      return <Braces className="h-3.5 w-3.5" />;

    case "Node.js":
    case "Express.js":
    case "FastAPI":
    case "NestJS":
      return <Server className="h-3.5 w-3.5" />;

    case "PostgreSQL":
    case "SQLAlchemy":
      return <Database className="h-3.5 w-3.5" />;

    default:
      return <Code2 className="h-3.5 w-3.5" />;
  }
}