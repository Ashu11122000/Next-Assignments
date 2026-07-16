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
      radius="lg"
      className="border-white/10"
    >
      <div className="flex flex-col gap-6">
        {/* ------------------------------------------------------------------
            Header
        ------------------------------------------------------------------- */}
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-violet-600 text-white shadow-lg shadow-cyan-500/20">
            <Code2 className="h-5 w-5" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">
              Skills & Technologies
            </h2>

            <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500" />
          </div>
        </div>

        {/* ------------------------------------------------------------------
            Skill Badges
        ------------------------------------------------------------------- */}
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill.name}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-200 transition-all duration-300 hover:border-cyan-500/30 hover:bg-cyan-500/10 hover:text-white"
            >
              <span className="text-cyan-400">
                {getSkillIcon(skill.name)}
              </span>

              {skill.name}
            </span>
          ))}
        </div>
      </div>
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
      return <Braces className="h-4 w-4" />;

    case "Node.js":
    case "Express.js":
    case "FastAPI":
    case "NestJS":
      return <Server className="h-4 w-4" />;

    case "PostgreSQL":
    case "SQLAlchemy":
      return <Database className="h-4 w-4" />;

    default:
      return <Code2 className="h-4 w-4" />;
  }
}