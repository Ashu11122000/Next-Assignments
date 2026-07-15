import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  FileText,
  Layers,
  Rocket,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

/**
 * ============================================================================
 * Ultra Premium About Page
 * ============================================================================
 */

export const metadata: Metadata = {
  title: "About | Static Blog & Documentation",
  description:
    "Learn about the architecture, technologies, and goals behind this modern static blog and documentation platform.",
};

const technologies = [
  "Next.js App Router",
  "TypeScript",
  "Tailwind CSS",
  "Markdown",
  "Static Site Generation",
  "gray-matter",
  "remark",
  "remark-html",
];

const objectives = [
  "Build a static blog using Markdown.",
  "Generate pages using SSG.",
  "Implement App Router dynamic routes.",
  "Create reusable UI components.",
  "Build responsive documentation.",
  "Improve SEO and accessibility.",
];

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Hero */}
        <section className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 dark:border-blue-900 dark:bg-blue-950/40">
            <Sparkles className="h-4 w-4 text-blue-600" />

            <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
              Modern Static Platform
            </span>
          </div>

          <h1 className="mt-8 text-5xl font-black tracking-tight text-zinc-900 dark:text-white md:text-7xl">
            Static Blog &
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 bg-clip-text text-transparent">
              {" "}
              Documentation
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-zinc-600 dark:text-zinc-400">
            A premium documentation experience powered by Next.js, Markdown,
            Static Site Generation, and modern UI principles focused on
            performance, accessibility, maintainability and elegant design.
          </p>
        </section>

        {/* Feature Cards */}
        <section className="mt-20 grid gap-8 md:grid-cols-3">
          {[
            {
              icon: Rocket,
              title: "Fast",
              text: "Static Site Generation delivers exceptional performance and SEO.",
            },
            {
              icon: Layers,
              title: "Scalable",
              text: "Reusable components keep the project clean and maintainable.",
            },
            {
              icon: BookOpen,
              title: "Content First",
              text: "Markdown enables an efficient and developer-friendly workflow.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-zinc-200/70 bg-white/75 p-8 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-900/70"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600">
                <item.icon className="h-7 w-7 text-white" />
              </div>

              <h3 className="mb-3 text-2xl font-bold text-zinc-900 dark:text-white">
                {item.title}
              </h3>

              <p className="leading-8 text-zinc-600 dark:text-zinc-400">
                {item.text}
              </p>
            </div>
          ))}
        </section>

        {/* Technologies */}
        <section className="mt-24">
          <h2 className="mb-8 text-3xl font-bold text-zinc-900 dark:text-white">
            Technology Stack
          </h2>

          <div className="flex flex-wrap gap-4">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="rounded-full border border-zinc-200 bg-white/70 px-5 py-3 font-semibold text-zinc-700 shadow-sm backdrop-blur dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-300"
              >
                {tech}
              </div>
            ))}
          </div>
        </section>

        {/* Objectives */}
        <section className="mt-24 rounded-[32px] border border-zinc-200/70 bg-white/75 p-10 shadow-xl backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/70">
          <div className="mb-8 flex items-center gap-3">
            <FileText className="h-7 w-7 text-blue-600" />

            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
              Project Objectives
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {objectives.map((objective) => (
              <div
                key={objective}
                className="flex items-start gap-3 rounded-2xl bg-zinc-50 p-5 dark:bg-zinc-800/50"
              >
                <CheckCircle2 className="mt-1 h-5 w-5 text-emerald-500" />

                <span className="leading-7 text-zinc-700 dark:text-zinc-300">
                  {objective}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-24 rounded-[36px] bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 p-12 text-center text-white shadow-2xl">
          <h2 className="text-4xl font-black">
            Ready to Explore?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Dive into the blog articles or browse the complete project
            documentation to learn more about the architecture and implementation.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-blue-700 transition-all hover:scale-105"
            >
              Explore Blog

              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/docs"
              className="rounded-full border border-white/30 px-7 py-4 font-semibold text-white transition-all hover:bg-white/10"
            >
              View Documentation
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}