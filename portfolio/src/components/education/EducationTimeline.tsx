"use client";

/* =============================================================================
   Portfolio Website
   =============================================================================
   File: src/components/education/EducationTimeline.tsx

   Description
   -----------------------------------------------------------------------------
   Premium Education Timeline component.

   Features
   -----------------------------------------------------------------------------
   ✓ React 19
   ✓ Next.js 16
   ✓ TypeScript
   ✓ Framer Motion
   ✓ Responsive Timeline
   ✓ Glassmorphism UI
   ✓ Accessible
   ✓ Uses education.ts
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

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

import { education } from "@/data/education";

export default function EducationTimeline() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="relative py-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* ------------------------------------------------------------------ */}
        {/* Section Heading */}
        {/* ------------------------------------------------------------------ */}

        <SectionHeading
          title="Education"
          description="My academic background has provided a strong foundation in software engineering, cloud computing, computer science fundamentals, and modern application development."
        />

        {/* ------------------------------------------------------------------ */}
        {/* Timeline */}
        {/* ------------------------------------------------------------------ */}

        <div className="relative mt-16">
          {/* Vertical Line */}

          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-500/40 via-violet-500/30 to-transparent md:block" />

          <div className="space-y-10">
            {education.map((item, index) => (
              <motion.article
                key={item.id}
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
                className="relative md:pl-16"
              >
                {/* Timeline Icon */}

                <div className="absolute left-0 top-6 hidden md:flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-500/30 bg-slate-950 shadow-lg shadow-cyan-500/20">
                    <GraduationCap className="h-5 w-5 text-cyan-400" />
                  </div>
                </div>

                {/* Card */}

                <Card className="transition-all duration-300 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10">
                  <div className="space-y-6">
                    {/* ------------------------------------------------------ */}
                    {/* Header */}
                    {/* ------------------------------------------------------ */}

                    <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                      <div className="space-y-3">
                        <h3 className="text-2xl font-bold tracking-tight">
                          {item.degree}
                        </h3>

                        <p className="text-lg font-semibold text-cyan-400">
                          {item.institution}
                        </p>

                        <div className="flex flex-wrap gap-5 text-sm text-slate-400">
                          <span className="inline-flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            {item.location}
                          </span>

                          <span className="inline-flex items-center gap-2">
                            <CalendarDays className="h-4 w-4" />
                            {item.duration}
                          </span>
                        </div>
                      </div>

                      <Badge variant="gradient" className="w-fit">
                        {item.scoreLabel}: {item.score}
                      </Badge>
                    </div>

                    <p className="leading-7 text-slate-300">
                      {item.description}
                    </p>

                    {/* ------------------------------------------------------ */}
                    {/* Coursework */}
                    {/* ------------------------------------------------------ */}

                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-cyan-400" />

                        <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
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

                    {/* ------------------------------------------------------ */}
                    {/* Featured Qualification */}
                    {/* ------------------------------------------------------ */}

                    {item.featured && (
                      <div className="flex items-center">
                        <Badge variant="gradient" className="gap-2">
                          <Award className="h-3.5 w-3.5" />
                          Featured Qualification
                        </Badge>
                      </div>
                    )}
                  </div>
                </Card>
              </motion.article>
            ))}
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Education Summary */}
        {/* ------------------------------------------------------------------ */}

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
          className="mt-20"
        >
          <Card className="border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 via-transparent to-violet-500/5">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-cyan-500/10 p-3">
                <GraduationCap className="h-6 w-6 text-cyan-400" />
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Lifelong Learning</h3>

                <p className="leading-7 text-slate-400">
                  My academic journey established strong foundations in computer
                  science, software engineering, cloud computing, DevOps,
                  databases, networking, operating systems, and web
                  technologies. These concepts continue to support my work on
                  modern full-stack applications and backend architectures while
                  I continuously expand my skills through internships, personal
                  projects, and self-directed learning.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
