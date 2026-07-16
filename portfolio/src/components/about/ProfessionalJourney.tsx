/**
 * =============================================================================
 * Portfolio Website
 * =============================================================================
 * File: src/components/about/ProfessionalJourney.tsx
 * -----------------------------------------------------------------------------
 * Professional Journey
 * -----------------------------------------------------------------------------
 *
 * Responsibilities
 * ----------------
 * • Display career and education journey.
 * • Present milestones in chronological order.
 * • Match the premium portfolio design language.
 * • Reuse shared Card component.
 * • Fully responsive and accessible.
 *
 * Rendering
 * ---------
 * • Server Component
 * • Static Rendering
 *
 * =============================================================================
 */

import {
  BriefcaseBusiness,
  CalendarDays,
  GraduationCap,
  School,
} from "lucide-react";

import { Card } from "@/components/ui/Card";

type JourneyItem = {
  title: string;
  organization: string;
  duration: string;
  description: string;
  type: "education" | "experience";
};

const JOURNEY: readonly JourneyItem[] = [
  {
    title: "Software Analyst Intern",
    organization: "Revel Labs",
    duration: "Feb 2026 – Present",
    description:
      "Developing scalable backend services, REST APIs, authentication workflows, PostgreSQL solutions, Docker-based environments, and modern software engineering practices using FastAPI, NestJS, Node.js and TypeScript.",
    type: "experience",
  },
  {
    title: "Frontend Developer",
    organization: "Devnexus Solutions",
    duration: "May 2025 – Aug 2025",
    description:
      "Built responsive web interfaces, integrated frontend modules with backend APIs, collaborated with development teams, and contributed to deployment and client-facing projects.",
    type: "experience",
  },
  {
    title: "Master of Computer Applications",
    organization: "Chandigarh University",
    duration: "Aug 2021 – Jul 2023",
    description:
      "Specialized in Cloud Computing & DevOps while strengthening software engineering, backend development, databases, networking, and cloud technologies.",
    type: "education",
  },
  {
    title: "Bachelor of Computer Applications",
    organization: "Panjab University",
    duration: "Jul 2018 – Jun 2021",
    description:
      "Built a strong academic foundation in programming, databases, operating systems, web development, and software engineering fundamentals.",
    type: "education",
  },
];

export default function ProfessionalJourney() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-white">
          Professional Journey
        </h2>

        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500" />

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
          My journey has been driven by continuous learning, practical
          experience, and a passion for building modern software solutions that
          solve real-world problems.
        </p>
      </div>

      <div className="relative mx-auto max-w-5xl">
        {/* Timeline Line */}

        <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-500 via-sky-500 to-violet-500 md:block" />

        <div className="space-y-10">
          {JOURNEY.map((item) => {
            const Icon =
              item.type === "experience"
                ? BriefcaseBusiness
                : GraduationCap;

            return (
              <div
                key={`${item.title}-${item.organization}`}
                className="relative flex gap-6"
              >
                {/* Timeline Icon */}

                <div className="relative z-10 hidden md:flex">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-500/30 bg-gradient-to-br from-cyan-500 to-violet-600 text-white shadow-lg shadow-cyan-500/20">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                {/* Content */}

                <Card
                  variant="glass"
                  padding="lg"
                  radius="lg"
                  className="flex-1 border-white/10"
                >
                  <div className="space-y-5">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                      <div>
                        <h3 className="text-2xl font-semibold text-white">
                          {item.title}
                        </h3>

                        <div className="mt-3 flex flex-wrap gap-5 text-sm text-zinc-400">
                          <div className="flex items-center gap-2">
                            <School className="h-4 w-4 text-cyan-400" />

                            <span>{item.organization}</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <CalendarDays className="h-4 w-4 text-cyan-400" />

                            <span>{item.duration}</span>
                          </div>
                        </div>
                      </div>

                      <span className="inline-flex w-fit rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-300">
                        {item.type}
                      </span>
                    </div>

                    <p className="leading-8 text-zinc-300">
                      {item.description}
                    </p>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}