import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  FileText,
  FolderKanban,
  Sparkles,
} from "lucide-react";

import { getAllDocPages } from "@/lib/docs";

/**
 * ============================================================================
 * Ultra Premium Documentation Home
 * ============================================================================
 */

export const metadata: Metadata = {
  title: "Documentation | Static Blog & Documentation",
  description:
    "Browse installation guides, project structure, architecture and documentation for the Static Blog platform.",
};

export default async function DocsPage() {
  const docs = await getAllDocPages();

  return (
    <main className="relative overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      {/* Hero */}
      <section className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 shadow-sm dark:border-blue-900 dark:bg-blue-950/40">
          <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />

          <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
            Developer Documentation
          </span>
        </div>

        <h1 className="mt-8 text-5xl font-black tracking-tight text-zinc-900 dark:text-zinc-100 md:text-7xl">
          Documentation
          <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 bg-clip-text text-transparent">
            {" "}
            Hub
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-zinc-600 dark:text-zinc-400">
          Everything you need to understand the project architecture,
          installation, folder structure, Markdown workflow, and how this
          Static Blog is built using Next.js and modern web technologies.
        </p>
      </section>

      {/* Stats */}
      <section className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-zinc-200/70 bg-white/75 p-8 text-center shadow-xl backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/70">
          <BookOpen className="mx-auto mb-5 h-9 w-9 text-blue-600 dark:text-blue-400" />

          <p className="text-4xl font-black text-zinc-900 dark:text-zinc-100">
            {docs.length}
          </p>

          <p className="mt-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            Documentation Pages
          </p>
        </div>

        <div className="rounded-3xl border border-zinc-200/70 bg-white/75 p-8 text-center shadow-xl backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/70">
          <FolderKanban className="mx-auto mb-5 h-9 w-9 text-violet-600 dark:text-violet-400" />

          <p className="text-4xl font-black text-zinc-900 dark:text-zinc-100">
            SSG
          </p>

          <p className="mt-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            Build Strategy
          </p>
        </div>

        <div className="rounded-3xl border border-zinc-200/70 bg-white/75 p-8 text-center shadow-xl backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/70">
          <FileText className="mx-auto mb-5 h-9 w-9 text-emerald-600 dark:text-emerald-400" />

          <p className="text-4xl font-black text-zinc-900 dark:text-zinc-100">
            Markdown
          </p>

          <p className="mt-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            Documentation Source
          </p>
        </div>
      </section>

      {/* Documentation Cards */}
      <section className="mt-20">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
            Browse Documentation
          </h2>

          <p className="mt-3 text-zinc-600 dark:text-zinc-400">
            Explore guides, architecture, setup instructions and development
            resources.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {docs.map((doc) => (
            <article
              key={doc.slug}
              className="group rounded-[30px] border border-zinc-200/70 bg-white/75 p-8 shadow-xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-300 hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-900/70 dark:hover:border-blue-500/40"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-cyan-500 to-violet-600">
                <BookOpen className="h-7 w-7 text-white" />
              </div>

              <h2 className="mb-4 text-2xl font-bold tracking-tight text-zinc-900 transition-colors group-hover:text-blue-600 dark:text-zinc-100 dark:group-hover:text-blue-400">
                <Link href={`/docs/${doc.slug}`}>
                  {doc.title}
                </Link>
              </h2>

              <p className="mb-8 leading-8 text-zinc-600 dark:text-zinc-400">
                {doc.description}
              </p>

              <Link
                href={`/docs/${doc.slug}`}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:gap-3 hover:shadow-blue-500/30"
              >
                Read Documentation

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}