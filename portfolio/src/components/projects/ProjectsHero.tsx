"use client";

/* =============================================================================
   Portfolio Website
   =============================================================================
   File: src/components/projects/ProjectsHero.tsx

   Description
   -----------------------------------------------------------------------------
   Hero section for the Projects page.

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
import { FolderOpen, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/Badge";

export default function ProjectsHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_40%)]" />

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
            Portfolio Showcase
          </Badge>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            My Projects
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            A collection of modern web applications built with React,
            Next.js, TypeScript, FastAPI, NestJS, Prisma, PostgreSQL,
            Tailwind CSS, and other modern technologies.
          </p>

          <div className="mt-10 flex justify-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-6 py-3 text-cyan-300 backdrop-blur-md">
              <FolderOpen className="h-5 w-5" />
              <span className="font-medium">
                Production-Ready Portfolio Projects
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}