"use client";

/* =============================================================================
   Portfolio Website
   =============================================================================
   File: src/components/experience/TimelineItem.tsx

   Description
   -----------------------------------------------------------------------------
   Reusable Experience Timeline Item.

   Used By
   -----------------------------------------------------------------------------
   ✓ Timeline.tsx

   Features
   -----------------------------------------------------------------------------
   ✓ React 19
   ✓ Next.js 16
   ✓ TypeScript
   ✓ Framer Motion
   ✓ Glassmorphism Card
   ✓ Responsive
   ✓ Accessible
   =============================================================================
*/

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  MapPin,
} from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

import type { Experience } from "@/data/experience";

interface TimelineItemProps {
  item: Experience;
  index: number;
}

export default function TimelineItem({
  item,
  index,
}: TimelineItemProps) {
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
      className="relative md:pl-16"
    >
      {/* Timeline Icon */}

      <div className="absolute left-0 top-6 hidden md:flex">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-500/30 bg-slate-950 shadow-lg shadow-cyan-500/20">
          <BriefcaseBusiness className="h-5 w-5 text-cyan-400" />
        </div>
      </div>

      {/* Card */}

      <Card className="transition-all duration-300 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10">
        <div className="space-y-6">
          {/* ------------------------------------------------------------ */}
          {/* Header */}
          {/* ------------------------------------------------------------ */}

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

          {/* ------------------------------------------------------------ */}
          {/* Description */}
          {/* ------------------------------------------------------------ */}

          <p className="leading-7 text-slate-300">
            {item.description}
          </p>

                    {/* ------------------------------------------------------------ */}
          {/* Responsibilities */}
          {/* ------------------------------------------------------------ */}

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Key Responsibilities
            </h4>

            <ul className="space-y-3">
              {item.responsibilities.map((responsibility) => (
                <li
                  key={responsibility}
                  className="flex items-start gap-3"
                >
                  <BriefcaseBusiness className="mt-1 h-4 w-4 shrink-0 text-cyan-400" />

                  <span className="leading-7 text-slate-300">
                    {responsibility}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* Technologies */}
          {/* ------------------------------------------------------------ */}

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

          {/* ------------------------------------------------------------ */}
          {/* Current Position Badge */}
          {/* ------------------------------------------------------------ */}

          {item.current && (
            <div className="flex">
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
  );
}