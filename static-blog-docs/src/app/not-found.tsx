"use client";

import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  Compass,
  FileText,
  SearchX,
} from "lucide-react";

/**
 * ============================================================================
 * Ultra Premium 404 Page
 * ============================================================================
 *
 * Features
 * - Glassmorphism UI
 * - Beautiful gradient background
 * - Premium CTA buttons
 * - Responsive
 * - Accessible
 * ============================================================================
 */

export default function NotFound() {
  return (
    <main className="relative flex min-h-[85vh] items-center justify-center overflow-hidden px-6">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-0 top-32 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <section className="relative mx-auto w-full max-w-4xl rounded-[36px] border border-zinc-200/70 bg-white/75 p-10 text-center shadow-2xl backdrop-blur-2xl dark:border-zinc-800 dark:bg-zinc-900/70 md:p-16">
        {/* Icon */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 via-cyan-500 to-violet-600 shadow-xl shadow-blue-500/25">
          <SearchX className="h-12 w-12 text-white" />
        </div>

        {/* Badge */}
        <div className="mt-8 inline-flex rounded-full border border-red-200 bg-red-50 px-5 py-2 text-sm font-semibold text-red-700 dark:border-red-900 dark:bg-red-950/30 dark:text-red-300">
          Error 404
        </div>

        {/* Large 404 */}
        <h1 className="mt-8 text-7xl font-black tracking-tight md:text-8xl">
          <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 bg-clip-text text-transparent">
            404
          </span>
        </h1>

        {/* Heading */}
        <h2 className="mt-6 text-4xl font-black tracking-tight text-zinc-900 dark:text-zinc-100">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-9 text-zinc-600 dark:text-zinc-400">
          The page you're looking for doesn't exist, may have been moved,
          or the URL might be incorrect. Continue exploring using one of
          the options below.
        </p>

        {/* Quick Navigation */}
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <Link
            href="/"
            className="group flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 px-6 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/30"
          >
            <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            Home
          </Link>

          <Link
            href="/blog"
            className="group flex items-center justify-center gap-3 rounded-2xl border border-zinc-200 bg-white/80 px-6 py-4 font-semibold text-zinc-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-300 dark:hover:border-blue-500 dark:hover:bg-zinc-800 dark:hover:text-blue-400"
          >
            <BookOpen className="h-5 w-5" />
            Blog
          </Link>

          <Link
            href="/docs"
            className="group flex items-center justify-center gap-3 rounded-2xl border border-zinc-200 bg-white/80 px-6 py-4 font-semibold text-zinc-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-300 dark:hover:border-blue-500 dark:hover:bg-zinc-800 dark:hover:text-blue-400"
          >
            <FileText className="h-5 w-5" />
            Documentation
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-12 inline-flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-2 text-sm text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
          <Compass className="h-4 w-4" />
          Keep exploring — there's plenty to discover.
        </div>
      </section>
    </main>
  );
}