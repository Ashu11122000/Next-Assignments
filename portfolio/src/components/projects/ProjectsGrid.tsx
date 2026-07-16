"use client";

/* =============================================================================
   Portfolio Website
   =============================================================================
   File: src/components/projects/ProjectGrid.tsx

   Description
   -----------------------------------------------------------------------------
   Responsive Projects Grid.

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
import { FolderOpen } from "lucide-react";

import ProjectCard from "./ProjectCard";

import { projects, type Project } from "@/data/projects";

interface ProjectGridProps {
  projects: readonly Project[];
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

export default function ProjectGrid({
  projects,
}: ProjectGridProps) {
  if (projects.length === 0) {
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
          <FolderOpen className="h-10 w-10 text-cyan-400" />
        </div>

        <h3 className="text-2xl font-semibold">
          No Projects Found
        </h3>

        <p className="mt-3 max-w-md leading-7 text-slate-400">
          There are currently no projects available that
          match the selected criteria. Please try another
          filter or check back later.
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

          {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          index={index}
        />
      ))}
    </motion.div>
  );
}