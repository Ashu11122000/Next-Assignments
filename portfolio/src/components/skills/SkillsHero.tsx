"use client";

/* =============================================================================
   Portfolio Website
   =============================================================================
   File: src/components/skills/SkillsHero.tsx
   -----------------------------------------------------------------------------
   Skills Hero Section
   -----------------------------------------------------------------------------
   Features
   -----------------------------------------------------------------------------
   ✓ React 19
   ✓ Next.js 16
   ✓ TypeScript
   ✓ Framer Motion
   ✓ Responsive
   ✓ Accessible
   =============================================================================
*/

import { motion } from "framer-motion";
import { Brain, Code2, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/Badge";

export default function SkillsHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-indigo-500/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.15),transparent_45%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center lg:px-8 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge
            variant="gradient"
            className="mb-6 inline-flex items-center gap-2"
          >
            <Sparkles className="h-4 w-4" />
            Technical Expertise
          </Badge>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Skills & Technologies
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            My technical toolkit spans modern frontend development,
            backend engineering, databases, cloud technologies, and
            professional software engineering practices.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-3 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-3 text-cyan-300 backdrop-blur-md">
              <Code2 className="h-5 w-5" />
              <span>Full Stack Development</span>
            </div>

            <div className="flex items-center gap-3 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-5 py-3 text-indigo-300 backdrop-blur-md">
              <Brain className="h-5 w-5" />
              <span>Continuous Learning</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}