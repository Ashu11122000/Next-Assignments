"use client";

/* =============================================================================
   Portfolio Website
   =============================================================================
   File: src/components/projects/ProjectDetails.tsx

   Description
   -----------------------------------------------------------------------------
   Premium Project Details component.

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
   ✓ Uses react-icons for external links
   =============================================================================
*/

import Image from "next/image";

import { motion } from "framer-motion";

import {
  Clock3,
  Star,
} from "lucide-react";

import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

import type { Project } from "@/data/projects";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import { Button } from "../ui/Button";

interface ProjectDetailsProps {
  project: Project;
}

export default function ProjectDetails({
  project,
}: ProjectDetailsProps) {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="space-y-10"
    >
      {/* ========================================================== */}
      {/* Hero Image */}
      {/* ========================================================== */}

      <Card className="overflow-hidden p-0">
        <div className="relative aspect-[16/8] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

          {/* Featured Badge */}

          {project.featured && (
            <Badge
              variant="gradient"
              className="absolute left-6 top-6 gap-2"
            >
              <Star className="h-4 w-4" />
              Featured Project
            </Badge>
          )}

          {/* Status Badge */}

          <Badge
            variant={
              project.status === "Completed"
                ? "secondary"
                : "outline"
            }
            className="absolute right-6 top-6 gap-2"
          >
            <Clock3 className="h-4 w-4" />
            {project.status}
          </Badge>
        </div>
      </Card>

      {/* ========================================================== */}
      {/* Project Information */}
      {/* ========================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.45,
        }}
        className="space-y-5"
      >
        <div>
          <h1 className="text-4xl font-bold tracking-tight">
            {project.title}
          </h1>

          <p className="mt-2 text-slate-400">
            {project.duration}
          </p>
        </div>

        <p className="max-w-4xl text-lg leading-8 text-slate-300">
          {project.description}
        </p>
      </motion.div>

            {/* ========================================================== */}
      {/* Content Grid */}
      {/* ========================================================== */}

      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        {/* ====================================================== */}
        {/* Left Column */}
        {/* ====================================================== */}

        <div className="space-y-8">
          {/* Technologies */}

          <Card>
            <div className="space-y-5">
              <h2 className="text-2xl font-semibold">
                Technologies Used
              </h2>

              <div className="flex flex-wrap gap-3">
                {project.technologies.map((technology) => (
                  <Badge
                    key={technology}
                    variant="secondary"
                  >
                    {technology}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>

          {/* Highlights */}

          <Card>
            <div className="space-y-5">
              <h2 className="text-2xl font-semibold">
                Project Highlights
              </h2>

              <ul className="space-y-4">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />

                    <span className="leading-7 text-slate-300">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </div>

        {/* ====================================================== */}
        {/* Right Column */}
        {/* ====================================================== */}

        <div className="space-y-6">
          {/* Status */}

          <Card>
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-wider text-slate-500">
                Status
              </p>

              <Badge
                variant={
                  project.status === "Completed"
                    ? "secondary"
                    : "gradient"
                }
              >
                {project.status}
              </Badge>
            </div>
          </Card>

          {/* Duration */}

          <Card>
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-wider text-slate-500">
                Duration
              </p>

              <p className="font-medium">
                {project.duration}
              </p>
            </div>
          </Card>

          {/* Featured */}

          <Card>
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-wider text-slate-500">
                Featured
              </p>

              <p className="font-medium">
                {project.featured
                  ? "Yes"
                  : "No"}
              </p>
            </div>
          </Card>

          {/* Action Buttons */}

          <Card>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">
                Explore Project
              </h3>

              <div className="flex flex-col gap-3">
                                <Button
                  asChild
                  variant="gradient"
                  size="lg"
                  leftIcon={<FaGithub />}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    View Source Code
                  </a>
                </Button>

                {project.demo && (
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    rightIcon={<FaArrowUpRightFromSquare />}
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
        </div>
      </div>
    </motion.section>
  );
}