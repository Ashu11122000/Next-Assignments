import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Code2,
  Layers3,
  Rocket,
  Sparkles,
} from "lucide-react";

/**
 * ============================================================================
 * Ultra Premium About Page
 * ============================================================================
 *
 * Features
 * - Premium Hero
 * - Glassmorphism Cards
 * - Modern Technology Stack
 * - Beautiful CTA
 * - Responsive
 * - Accessible
 * ============================================================================
 */

export const metadata: Metadata = {
  title: "About | Static Blog & Documentation Site",
  description:
    "Learn about the Static Blog & Documentation Site, the technologies used, and the project objectives.",
};

const technologies = [
  "Next.js App Router",
  "TypeScript",
  "Tailwind CSS",
  "Markdown",
  "Static Site Generation (SSG)",
  "gray-matter",
  "remark",
  "remark-html",
];

const objectives = [
  "Build a static blog using Markdown files.",
  "Generate pages using Static Site Generation (SSG).",
  "Implement dynamic routing with the App Router.",
  "Create a documentation website with nested layouts.",
  "Build reusable UI components.",
  "Develop a responsive and accessible user interface.",
];

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-0 h-[30rem] w-[30rem] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-0 top-40 h-[26rem] w-[26rem] rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl py-10">
        {/* Hero */}
        <header className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 shadow-sm dark:border-blue-900 dark:bg-blue-950/40">
            <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />

            <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
              Modern Static Experience
            </span>
          </div>

          <h1 className="mt-8 text-5xl font-black tracking-tight text-zinc-900 dark:text-zinc-100 md:text-7xl">
            About This
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 bg-clip-text text-transparent">
              {" "}
              Project
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-zinc-600 dark:text-zinc-400">
            A premium static publishing platform built with modern web
            technologies, combining Markdown-powered blogging and technical
            documentation into one fast, scalable and SEO-friendly experience.
          </p>
        </header>

        {/* Highlights */}
        <section className="mt-20 grid gap-8 md:grid-cols-3">
          {[
            {
              icon: Rocket,
              title: "Lightning Fast",
              description:
                "Static Site Generation provides excellent performance and SEO.",
            },
            {
              icon: Layers3,
              title: "Scalable",
              description:
                "Reusable architecture designed for maintainability and growth.",
            },
            {
              icon: Code2,
              title: "Developer Friendly",
              description:
                "Markdown content with clean Next.js App Router architecture.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-[30px] border border-zinc-200/70 bg-white/75 p-8 shadow-xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-300 hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-900/70 dark:hover:border-blue-500/40"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-cyan-500 to-violet-600 shadow-lg shadow-blue-500/20">
                <item.icon className="h-7 w-7 text-white" />
              </div>

              <h2 className="mb-4 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                {item.title}
              </h2>

              <p className="leading-8 text-zinc-600 dark:text-zinc-400">
                {item.description}
              </p>
            </article>
          ))}
        </section>

        {/* Overview */}
        <section className="mt-24 rounded-[32px] border border-zinc-200/70 bg-white/75 p-10 shadow-xl backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/70 md:p-12">
          <div className="mb-6 flex items-center gap-3">
            <BookOpen className="h-7 w-7 text-blue-600 dark:text-blue-400" />

            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
              Project Overview
            </h2>
          </div>

          <p className="text-lg leading-9 text-zinc-600 dark:text-zinc-400">
            The application reads Markdown files from the content directory,
            extracts frontmatter metadata, converts Markdown into HTML and
            statically generates every page during the build process. This
            approach provides exceptional performance, excellent SEO, improved
            maintainability and a clean separation between content and
            application logic.
          </p>
        </section>

        {/* Technologies */}
        <section className="mt-24">
          <h2 className="mb-8 text-3xl font-bold text-zinc-900 dark:text-zinc-100">
            Technology Stack
          </h2>

          <div className="flex flex-wrap gap-4">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-zinc-200 bg-white/80 px-5 py-3 text-sm font-semibold text-zinc-700 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>

        {/* Objectives */}
        <section className="mt-24 rounded-[32px] border border-zinc-200/70 bg-white/75 p-10 shadow-xl backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/70 md:p-12">
          <h2 className="mb-8 text-3xl font-bold text-zinc-900 dark:text-zinc-100">
            Project Objectives
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            {objectives.map((objective) => (
              <div
                key={objective}
                className="flex items-start gap-3 rounded-2xl bg-zinc-50 p-5 dark:bg-zinc-800/50"
              >
                <CheckCircle2 className="mt-1 h-5 w-5 text-emerald-500" />

                <p className="leading-7 text-zinc-700 dark:text-zinc-300">
                  {objective}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-24 rounded-[36px] bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 p-12 text-center shadow-2xl">
          <h2 className="text-4xl font-black text-white">
            Start Exploring
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Dive into detailed blog articles or browse the complete
            documentation to understand the architecture, implementation and
            development workflow.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-blue-700 transition-all duration-300 hover:scale-105"
            >
              Explore Blog

              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/docs"
              className="rounded-full border border-white/30 px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-white/10"
            >
              View Documentation
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}