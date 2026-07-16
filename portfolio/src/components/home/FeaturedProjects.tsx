/* =============================================================================
   Portfolio Website
   =============================================================================
   File: src/components/home/FeaturedProjects.tsx
   -----------------------------------------------------------------------------
   Featured Projects

   Ultra Premium UI
   -----------------------------------------------------------------------------
   • Premium Glassmorphism
   • Equal Height Cards
   • Better Typography
   • Responsive Layout
   • Dashboard Inspired
   • No Business Logic Changes
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
      "A production-grade full-stack productivity platform inspired by Notion and Todoist featuring Notes, Tasks, Authentication, Notifications and Analytics using a scalable microservices architecture.",
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
      "Modern Blog Management application built with the Next.js App Router using Server Components, reusable UI architecture, SEO optimization and responsive design.",
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
      "Luxury fashion e-commerce frontend with scalable architecture, Context API, reusable components and a premium shopping experience.",
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
    <section className="relative space-y-12">

      {/* ============================================================
          Background Glow
      ============================================================ */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-20 top-24 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      {/* ============================================================
          Section Header
      ============================================================ */}

      <div className="flex flex-col gap-6 sm:flex-row sm:items-center">

        <div
          className="
            flex
            h-16
            w-16
            shrink-0
            items-center
            justify-center
            rounded-2xl
            border
            border-cyan-400/20
            bg-gradient-to-br
            from-cyan-500
            via-sky-500
            to-violet-600
            text-white
            shadow-xl
            shadow-cyan-500/20
          "
        >
          <FolderGit2 className="h-8 w-8" />
        </div>

        <div className="min-w-0">

          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Featured Projects
          </h2>

          <p className="mt-3 max-w-3xl text-[15px] leading-8 text-zinc-400">
            A collection of selected projects showcasing scalable backend
            architecture, modern frontend engineering, clean UI systems,
            reusable component design, cloud technologies, and production-ready
            software development practices.
          </p>

          <div className="mt-5 h-1.5 w-24 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />

        </div>

      </div>

      {/* ============================================================
          Projects Grid
      ============================================================ */}

      <div
        className="
          grid
          grid-cols-1
          gap-8
          md:grid-cols-2
          xl:grid-cols-3
        "
      >
        {projects.map((project) => (

          <Card
            key={project.title}
            variant="glass"
            padding="lg"
            radius="xl"
            className="
              group
              relative
              flex
              h-full
              flex-col
              overflow-hidden
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-cyan-400/20
              hover:bg-white/[0.05]
              hover:shadow-[0_20px_60px_rgba(34,211,238,0.10)]
            "
          >

            {/* Card Glow */}

            <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-cyan-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative flex h-full flex-col">

                            {/* ============================================================
                  Project Header
              ============================================================ */}

              <div className="flex items-start justify-between gap-4">

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-cyan-500/20
                    bg-gradient-to-br
                    from-cyan-500/20
                    via-sky-500/20
                    to-violet-500/20
                    transition-all
                    duration-300
                    group-hover:scale-110
                    group-hover:rotate-6
                  "
                >
                  <Sparkles className="h-7 w-7 text-cyan-400" />
                </div>

                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    transition-all
                    duration-300
                    group-hover:border-cyan-400/30
                    group-hover:bg-cyan-500/10
                  "
                >
                  <ArrowUpRight className="h-5 w-5 text-zinc-400 transition-colors duration-300 group-hover:text-cyan-400" />
                </div>

              </div>

              {/* ============================================================
                  Project Title
              ============================================================ */}

              <div className="mt-7">

                <h3 className="text-2xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-300">
                  {project.title}
                </h3>

              </div>

              {/* ============================================================
                  Description
              ============================================================ */}

              <p className="mt-5 flex-1 text-[15px] leading-8 text-zinc-300">
                {project.description}
              </p>

              {/* ============================================================
                  Divider
              ============================================================ */}

              <div className="my-7 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              {/* ============================================================
                  Technologies
              ============================================================ */}

              <div>

                <div className="mb-4 flex items-center justify-between">

                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                    Tech Stack
                  </span>

                  <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                    {project.technologies.length} Tech
                  </span>

                </div>

                <div className="flex flex-wrap gap-2.5">

                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="
                        rounded-full
                        border
                        border-cyan-500/20
                        bg-cyan-500/10
                        px-3.5
                        py-2
                        text-xs
                        font-semibold
                        text-cyan-300
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:border-cyan-400/40
                        hover:bg-cyan-500/20
                        hover:shadow-lg
                        hover:shadow-cyan-500/10
                      "
                    >
                      {technology}
                    </span>
                  ))}

                </div>

              </div>

              {/* ============================================================
                  Footer
              ============================================================ */}

              <div className="mt-8">

                <Button
                  asChild
                  variant="secondary"
                  className="
                    h-12
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-cyan-400/30
                  "
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

            </div>

          </Card>

        ))}

      </div>

    </section>
  );
}