"use client";

/* =============================================================================
   Portfolio Website
   =============================================================================
   File: src/components/projects/TechBadges.tsx

   Description
   -----------------------------------------------------------------------------
   Animated technology badges used across project cards and project details.

   Features
   -----------------------------------------------------------------------------
   ✓ React 19
   ✓ Next.js 16
   ✓ TypeScript
   ✓ Framer Motion
   ✓ Responsive
   ✓ Reusable
   ✓ Accessible
   =============================================================================
*/

import { motion } from "framer-motion";

import { Badge } from "@/components/ui/Badge";

interface TechBadgesProps {
  technologies: readonly string[];
}

const containerVariants = {
  hidden: {
    opacity: 0,
  },

  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 8,
    scale: 0.95,
  },

  show: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

export default function TechBadges({
  technologies,
}: TechBadgesProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className="flex flex-wrap gap-2"
    >
      {technologies.map((technology) => (
        <motion.div
          key={technology}
          variants={itemVariants}
          whileHover={{
            y: -2,
            scale: 1.05,
          }}
          transition={{
            duration: 0.2,
          }}
        >
          <Badge
            variant="secondary"
            className="cursor-default border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200 backdrop-blur-md transition-colors hover:border-cyan-500/30 hover:bg-cyan-500/10 hover:text-cyan-300"
          >
            {technology}

                     </Badge>
        </motion.div>
      ))}
    </motion.div>
  );
} 