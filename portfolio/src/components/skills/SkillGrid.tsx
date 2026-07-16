"use client";

/* =============================================================================
   Portfolio Website
   =============================================================================
   File: src/components/skills/SkillGrid.tsx

   Description
   -----------------------------------------------------------------------------
   Responsive grid for displaying skill categories.

   Features
   -----------------------------------------------------------------------------
   ✓ React 19
   ✓ Next.js 16
   ✓ TypeScript
   ✓ Framer Motion
   ✓ Responsive Grid
   ✓ Empty State
   ✓ Reusable
   =============================================================================
*/

import { motion } from "framer-motion";
import { Boxes } from "lucide-react";

import SkillCard from "./SkillCard";

interface SkillCategory {
  title: string;
  skills: readonly string[];
}

interface SkillGridProps {
  categories: readonly SkillCategory[];
}

const containerVariants = {
  hidden: {
    opacity: 0,
  },

  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function SkillGrid({
  categories,
}: SkillGridProps) {
  if (categories.length === 0) {
    return (
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="flex min-h-[320px] flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 bg-white/[0.02] px-6 text-center"
      >
        <div className="mb-5 rounded-2xl bg-cyan-500/10 p-5">
          <Boxes className="h-10 w-10 text-cyan-400" />
        </div>

        <h3 className="text-2xl font-semibold">
          No Skills Available
        </h3>

        <p className="mt-3 max-w-md leading-7 text-slate-400">
          No skill categories are available at the
          moment. Please check back later.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
    >
              {categories.map((category, index) => (
        <SkillCard
          key={category.title}
          title={category.title}
          skills={category.skills}
          index={index}
        />
      ))}
    </motion.div>
  );
}