"use client";

/* =============================================================================
   Portfolio Website
   =============================================================================
   File: src/components/projects/ProjectCard.tsx

   Description
   -----------------------------------------------------------------------------
   Premium reusable Project Card component.

   Features
   -----------------------------------------------------------------------------
   ✓ React 19
   ✓ Next.js 16
   ✓ TypeScript
   ✓ Framer Motion
   ✓ Next/Image
   ✓ Glassmorphism
   ✓ Responsive
   ✓ Accessible
   =============================================================================
*/

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Clock3, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  return (
    <motion.article
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
        amount: 0.25,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
    >
      <Card className="group overflow-hidden p-0 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10">
        {/* ========================================================== */}
        {/* Project Image */}
        {/* ========================================================== */}

        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority={index < 2}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Gradient Overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

          {/* Featured Badge */}

          {project.featured && (
            <Badge
              variant="gradient"
              className="absolute left-4 top-4 gap-2"
            >
              <Star className="h-3.5 w-3.5" />
              Featured
            </Badge>
          )}

          {/* Status Badge */}

          <Badge
            variant={
              project.status === "Completed"
                ? "secondary"
                : "outline"
            }
            className="absolute right-4 top-4 gap-2"
          >
            <Clock3 className="h-3.5 w-3.5" />
            {project.status}
          </Badge>
        </div>

        {/* ========================================================== */}
        {/* Content */}
        {/* ========================================================== */}

        <div className="space-y-6 p-6">
          <div className="space-y-3">
            <h3 className="text-2xl font-bold tracking-tight transition-colors group-hover:text-cyan-400">
              {project.title}
            </h3>

            <p className="text-sm text-slate-400">
              {project.duration}
            </p>

            <p className="leading-7 text-slate-300">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              variant="gradient"
              leftIcon={<FaGithub className="h-4 w-4" />}
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} source code on GitHub`}
              >
                Source Code
              </a>
            </Button>

            {project.demo && (
              <Button
                asChild
                variant="outline"
                rightIcon={<ArrowUpRight className="h-4 w-4" />}
              >
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} live demo`}
                >
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.article>
  );
}