"use client";

/* =============================================================================
   Portfolio Website
   =============================================================================
   File: src/components/education/EducationHero.tsx

   Description
   -----------------------------------------------------------------------------
   Premium hero section for the Education page.

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
import { GraduationCap, BookOpen, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/Badge";

export default function EducationHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-indigo-500/10" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_45%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center lg:px-8 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <Badge
            variant="gradient"
            className="mb-6 inline-flex items-center gap-2"
          >
            <Sparkles className="h-4 w-4" />
            Academic Journey
          </Badge>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Education
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            My academic foundation, technical learning, and continuous
            pursuit of knowledge that support my growth as a modern
            full-stack software developer.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-3 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-3 text-cyan-300 backdrop-blur-md">
              <GraduationCap className="h-5 w-5" />
              <span>Formal Education</span>
            </div>

            <div className="flex items-center gap-3 rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-3 text-violet-300 backdrop-blur-md">
              <BookOpen className="h-5 w-5" />
              <span>Continuous Learning</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}