"use client";

/* =============================================================================
   Portfolio Website
   =============================================================================
   File: src/components/experience/Timeline.tsx

   Description
   -----------------------------------------------------------------------------
   Premium Experience Timeline component.

   Features
   -----------------------------------------------------------------------------
   ✓ React 19
   ✓ Next.js 16
   ✓ TypeScript
   ✓ Framer Motion
   ✓ Responsive
   ✓ Glassmorphism UI
   ✓ Timeline Layout
   ✓ Uses experience.ts data
   =============================================================================
*/

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
  Building2,
  CheckCircle2,
} from "lucide-react";

import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";

import { experience } from "@/data/experience";

export default function Timeline() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative py-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* ------------------------------------------------------------------ */}
        {/* Section Heading */}
        {/* ------------------------------------------------------------------ */}

        <SectionHeading
          title="Professional Experience"
          description="My internships and professional experience have helped me build scalable web applications, backend systems, REST APIs, cloud-native solutions, and collaborative software development practices."
        />

        {/* ------------------------------------------------------------------ */}
        {/* Timeline */}
        {/* ------------------------------------------------------------------ */}

        <div className="relative mt-16">
          {/* Vertical Timeline */}

          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-500/40 via-violet-500/30 to-transparent md:block" />

          <div className="space-y-10">
            {experience.map((item, index) => (
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
                    <BriefcaseBusiness className="h-5 w-5 text-cyan-400" />
                  </div>
                </div>

                {/* Experience Card */}

                <Card className="transition-all duration-300 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10">
                  <div className="space-y-6">
                    {/* ------------------------------------------------------ */}
                    {/* Header */}
                    {/* ------------------------------------------------------ */}

                    <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                      <div className="space-y-3">
                        <h3 className="text-2xl font-bold tracking-tight">
                          {item.position}
                        </h3>

                        <div className="flex items-center gap-2 text-cyan-400">
                          <Building2 className="h-5 w-5" />

                          <span className="text-lg font-semibold">
                            {item.company}
                          </span>
                        </div>

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

                      <Badge
                        variant="gradient"
                        className="w-fit"
                      >
                        {item.employmentType}
                      </Badge>
                    </div>

                    <p className="leading-7 text-slate-300">
                      {item.description}
                    </p>

                                        {/* ------------------------------------------------------ */}
                    {/* Responsibilities */}
                    {/* ------------------------------------------------------ */}

                    <div className="space-y-4">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                        Key Responsibilities
                      </h4>

                      <ul className="space-y-3">
                        {item.responsibilities.map((responsibility) => (
                          <li
                            key={responsibility}
                            className="flex items-start gap-3 text-slate-300"
                          >
                            <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-cyan-400" />

                            <span className="leading-7">
                              {responsibility}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* ------------------------------------------------------ */}
                    {/* Technologies */}
                    {/* ------------------------------------------------------ */}

                    <div className="space-y-4">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                        Technologies
                      </h4>

                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((technology) => (
                          <Badge
                            key={technology}
                            variant="secondary"
                            className="text-xs"
                          >
                            {technology}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* ------------------------------------------------------ */}
                    {/* Current Position Badge */}
                    {/* ------------------------------------------------------ */}

                    {item.current && (
                      <div className="flex items-center">
                        <Badge
                          variant="gradient"
                          className="gap-2"
                        >
                          <BriefcaseBusiness className="h-3.5 w-3.5" />
                          Currently Working
                        </Badge>
                      </div>
                    )}
                  </div>
                </Card>
              </motion.article>
            ))}
          </div>
        </div>

        {/* -------------------------------------------------------------- */}
        {/* Summary */}
        {/* -------------------------------------------------------------- */}

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
                <BriefcaseBusiness className="h-6 w-6 text-cyan-400" />
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold">
                  Professional Growth
                </h3>

                <p className="leading-7 text-slate-400">
                  My professional journey has strengthened
                  my expertise in full-stack development,
                  backend engineering, REST API design,
                  database management, cloud technologies,
                  Docker, version control, and collaborative
                  software development. Every project and
                  internship has helped me build scalable,
                  maintainable, and production-ready
                  applications while continuously improving
                  problem-solving and engineering practices.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

              </div>
    </section>
  );
}
