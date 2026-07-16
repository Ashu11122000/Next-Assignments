"use client";

/* =============================================================================
   Portfolio Website
   =============================================================================
   File: src/components/experience/ExperienceHero.tsx
   -----------------------------------------------------------------------------
   Experience Hero
   -----------------------------------------------------------------------------
   Premium hero section for the Experience page.

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
import { Badge } from "@/components/ui/Badge";
import { BriefcaseBusiness, Sparkles, TrendingUp } from "lucide-react";

export default function ExperienceHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_45%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center lg:px-8 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <Badge
            variant="gradient"
            className="mb-6 inline-flex items-center gap-2"
          >
            <Sparkles className="h-4 w-4" />
            Professional Journey
          </Badge>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Work Experience
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            My journey as a software developer, building modern web
            applications, collaborating with teams, and continuously
            improving my technical and problem-solving skills.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-3 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-3 text-cyan-300 backdrop-blur-md">
              <BriefcaseBusiness className="h-5 w-5" />
              <span>Industry Experience</span>
            </div>

            <div className="flex items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-3 text-emerald-300 backdrop-blur-md">
              <TrendingUp className="h-5 w-5" />
              <span>Continuous Growth</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}