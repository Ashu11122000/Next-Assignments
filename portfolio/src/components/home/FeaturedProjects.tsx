/* =============================================================================
   Portfolio Website
   =============================================================================
   File: src/components/home/FeaturedProjects.tsx
   -----------------------------------------------------------------------------
   Featured Projects
   -----------------------------------------------------------------------------

   Responsibilities
   ----------------
   • Showcase the most important portfolio projects.
   • Display project overview, technologies and links.
   • Match the premium dashboard design language.
   • Reuse shared UI components.
   • Responsive across all screen sizes.

   Notes
   -----
   • Server Component
   • Production-ready
   • Accessible
   • Uses reusable Card & Button components
   • Project data can later be moved to src/data/projects.ts
   =============================================================================
*/

import Link from "next/link";
import {
  ArrowUpRight,
  FolderGit2,
  Sparkles,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  github: string;
};

const projects: Project[] = [
  {
    title: "Team Productivity Platform",
    description:
      "A production-grade full-stack productivity platform inspired by Notion and Todoist featuring Notes, Tasks, Authentication, Notifications and Analytics using a microservices architecture.",
    technologies: [
      "Next.js",
      "FastAPI",
      "NestJS",
      "PostgreSQL",
      "TypeScript",
      "Docker",
    ],
    github: "https://github.com/Ashu11122000",
  },
  {
    title: "Mini Blog Management",
    description:
      "Modern Blog Management application built with the Next.js App Router using Server Components, Route Handlers, reusable UI architecture, SEO and responsive design.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    github: "https://github.com/Ashu11122000",
  },
  {
    title: "Elegant-Context",
    description:
      "Luxury fashion e-commerce frontend with scalable architecture, Context API, reusable components and premium shopping experience.",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Context API",
    ],
    github: "https://github.com/Ashu11122000",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="space-y-8">
      {/* -----------------------------------------------------------------------
          Section Header
      ------------------------------------------------------------------------ */}
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-violet-600 text-white shadow-lg shadow-cyan-500/20">
          <FolderGit2 className="h-6 w-6" />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-white">
            Featured Projects
          </h2>

          <p className="mt-2 text-zinc-400">
            Selected projects demonstrating modern full-stack engineering,
            scalable architecture and clean UI development.
          </p>

          <div className="mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500" />
        </div>
      </div>

      {/* -----------------------------------------------------------------------
          Projects Grid
      ------------------------------------------------------------------------ */}
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <Card
            key={project.title}
            variant="glass"
            padding="lg"
            radius="lg"
            className="group flex h-full flex-col border-white/10"
          >
            {/* Project Header */}
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 text-cyan-400">
                <Sparkles className="h-6 w-6" />
              </div>

              <ArrowUpRight className="h-5 w-5 text-zinc-500 transition-colors duration-300 group-hover:text-cyan-400" />
            </div>

            {/* Title */}
            <h3 className="mt-6 text-xl font-semibold text-white">
              {project.title}
            </h3>

            {/* Description */}
            <p className="mt-4 flex-1 text-sm leading-7 text-zinc-300">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/20"
                >
                  {technology}
                </span>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-8">
              <Button
                asChild
                variant="secondary"
                className="w-full"
                leftIcon={<FaGithub className="h-4 w-4" />}
              >
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Repository
                </Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}