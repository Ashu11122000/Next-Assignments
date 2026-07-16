"use client";

/* =============================================================================
   Portfolio Website
   =============================================================================
   File: src/components/home/EducationCard.tsx

   Description
   -----------------------------------------------------------------------------
   Premium Education Card component for the Home page.

   Features
   -----------------------------------------------------------------------------
   ✓ React 19
   ✓ Next.js 16
   ✓ TypeScript
   ✓ Responsive
   ✓ Accessible
   ✓ Framer Motion
   ✓ Glassmorphism UI
   ✓ Timeline Layout
   ✓ Uses education.ts data
   =============================================================================
*/

import { motion } from "framer-motion";
import {
  GraduationCap,
  CalendarDays,
  MapPin,
  Award,
  BookOpen,
} from "lucide-react";

import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { education } from "@/data/education";

export default function EducationCard() {
  return (
    <Card className="relative overflow-hidden">
      {/* Background Glow */}

      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-violet-500/5" />

      <div className="relative space-y-8">
        {/* ------------------------------------------------------------------ */}
        {/* Header */}
        {/* ------------------------------------------------------------------ */}

        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
            <GraduationCap className="h-6 w-6" />
          </div>

          <div>
            <h2 className="text-xl font-bold tracking-tight">Education</h2>

            <p className="text-sm text-slate-400">
              Academic background and qualifications.
            </p>
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Timeline */}
        {/* ------------------------------------------------------------------ */}

        <div className="relative space-y-8 before:absolute before:left-5 before:top-0 before:h-full before:w-px before:bg-white/10">
          {education.map((item, index) => (
            <motion.article
              key={item.id}
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
                amount: 0.25,
              }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              className="relative pl-14"
            >
              {/* Timeline Dot */}

              <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-500/30 bg-slate-950">
                <GraduationCap className="h-4 w-4 text-cyan-400" />
              </div>

              {/* Card */}

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/[0.05]">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">{item.degree}</h3>

                    <p className="font-medium text-cyan-400">
                      {item.institution}
                    </p>

                    <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {item.location}
                      </span>

                      <span className="inline-flex items-center gap-1">
                        <CalendarDays className="h-4 w-4" />
                        {item.duration}
                      </span>
                    </div>
                  </div>

                  <Badge variant="gradient">
                    {item.scoreLabel}: {item.score}
                  </Badge>
                </div>

                <p className="mt-5 leading-7 text-slate-300">
                  {item.description}
                </p>

                {/* ---------------------------------------------------------- */}
                {/* Coursework */}
                {/* ---------------------------------------------------------- */}

                <div className="mt-6">
                  <div className="mb-3 flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-cyan-400" />

                    <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
                      Relevant Coursework
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {item.coursework.map((course) => (
                      <Badge
                        key={course}
                        variant="secondary"
                        className="text-xs"
                      >
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* ---------------------------------------------------------- */}
                {/* Featured Badge */}
                {/* ---------------------------------------------------------- */}

                {item.featured && (
                  <div className="mt-6 flex">
                    <Badge variant="gradient" className="gap-2">
                      <Award className="h-3.5 w-3.5" />
                      Featured Qualification
                    </Badge>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* -------------------------------------------------------------- */}
        {/* Summary */}
        {/* -------------------------------------------------------------- */}

        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5">
          <div className="flex items-start gap-3">
            <div className="rounded-lg bg-cyan-500/10 p-2">
              <GraduationCap className="h-5 w-5 text-cyan-400" />
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Continuous Learning</h3>

              <p className="text-sm leading-7 text-slate-400">
                My academic journey established a solid foundation in software
                engineering, databases, cloud computing, DevOps, algorithms,
                networking, and modern web development. I continue to strengthen
                these skills through real-world projects, internships, and
                continuous self-learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
