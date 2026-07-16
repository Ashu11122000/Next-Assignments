"use client";

/* =============================================================================
   Portfolio Website
   =============================================================================
   File: src/components/skills/SkillBadge.tsx

   Description
   -----------------------------------------------------------------------------
   Reusable animated skill badge component.

   Features
   -----------------------------------------------------------------------------
   ✓ React 19
   ✓ Next.js 16
   ✓ TypeScript
   ✓ Framer Motion
   ✓ Glassmorphism
   ✓ Responsive
   ✓ Accessible
   =============================================================================
*/

import { motion } from "framer-motion";

import { Badge } from "@/components/ui/Badge";

interface SkillBadgeProps {
  skill: string;
}

export default function SkillBadge({
  skill,
}: SkillBadgeProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
        y: 8,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      whileHover={{
        scale: 1.06,
        y: -2,
      }}
      transition={{
        duration: 0.2,
      }}
      className="inline-flex"
    >
      <Badge
        variant="secondary"
        className="
          cursor-default
          border-white/10
          bg-white/5
          px-4
          py-2
          text-sm
          font-medium
          text-slate-200
          backdrop-blur-md
          transition-all
          duration-300
          hover:border-cyan-500/30
          hover:bg-cyan-500/10
          hover:text-cyan-300
        "
      >
        {skill}

          </Badge>
    </motion.div>
  );
}