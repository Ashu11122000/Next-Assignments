"use client";

/* =============================================================================
   Portfolio Website
   =============================================================================
   File: src/components/skills/SkillCard.tsx

   Description
   -----------------------------------------------------------------------------
   Premium reusable Skill Card component.

   Features
   -----------------------------------------------------------------------------
   ✓ React 19
   ✓ Next.js 16
   ✓ TypeScript
   ✓ Framer Motion
   ✓ Glassmorphism
   ✓ Responsive
   ✓ Reusable
   ✓ Accessible
============================================================================= */

import { motion } from "framer-motion";
import { Layers3 } from "lucide-react";

import { Card } from "@/components/ui/Card";
import SkillBadge from "./SkillBadge";

interface SkillCardProps {
  title: string;
  skills: readonly string[];
  index?: number;
}

export default function SkillCard({
  title,
  skills,
  index = 0,
}: SkillCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
    >
      <Card className="h-full transition-all duration-300 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10">
        <div className="space-y-6">
          {/* ========================================================== */}
          {/* Category Header */}
          {/* ========================================================== */}

          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-cyan-500/10 p-3">
              <Layers3 className="h-6 w-6 text-cyan-400" />
            </div>

            <div>
              <h3 className="text-xl font-semibold tracking-tight">
                {title}
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                {skills.length} Skills
              </p>
            </div>
          </div>

          {/* ========================================================== */}
          {/* Skills */}
          {/* ========================================================== */}

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <SkillBadge
                key={skill}
                skill={skill}

                              />
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}