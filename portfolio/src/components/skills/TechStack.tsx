"use client";

/* =============================================================================
   Portfolio Website
   =============================================================================
   File: src/components/skills/TechStack.tsx

   Description
   -----------------------------------------------------------------------------
   Premium Tech Stack section.

   Features
   -----------------------------------------------------------------------------
   ✓ React 19
   ✓ Next.js 16
   ✓ TypeScript
   ✓ Framer Motion
   ✓ Responsive
   ✓ Reusable
   ✓ Uses SkillGrid
   =============================================================================
*/

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/ui/SectionHeading";
import SkillGrid from "@/components/skills/SkillGrid";

interface SkillCategory {
  title: string;
  skills: readonly string[];
}

interface TechStackProps {
  categories: readonly SkillCategory[];
}

export default function TechStack({
  categories,
}: TechStackProps) {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative py-20"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          {/* ========================================================== */}
          {/* Section Heading */}
          {/* ========================================================== */}

          <SectionHeading
            title="Tech Stack"
            description="I build modern, scalable, and high-performance web applications using a carefully selected technology stack. My expertise spans frontend development, backend engineering, databases, cloud technologies, DevOps, and professional development tools."
          />
        </motion.div>

        {/* ========================================================== */}
        {/* Skills Grid */}
        {/* ========================================================== */}

        <div className="mt-16">
                      <SkillGrid categories={categories} />
        </div>

        {/* ========================================================== */}
        {/* Summary */}
        {/* ========================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            delay: 0.15,
          }}
          className="mt-20 rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 via-transparent to-violet-500/5 p-8 text-center backdrop-blur-xl"
        >
          <h3 className="text-2xl font-bold">
            Always Learning
          </h3>

          <p className="mx-auto mt-4 max-w-3xl leading-8 text-slate-400">
            Technology evolves continuously, and so do I. I enjoy exploring
            modern frameworks, improving software architecture, learning cloud
            platforms, and adopting best engineering practices to build
            scalable, maintainable, and user-focused applications.
          </p>
        </motion.div>
      </div>
    </section>
  );
}