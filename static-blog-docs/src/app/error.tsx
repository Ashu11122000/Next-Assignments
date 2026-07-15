"use client";

import Link from "next/link";
import {
  AlertTriangle,
  ArrowLeft,
  RefreshCw,
  BookOpen,
  FileText,
} from "lucide-react";

/**
 * ============================================================================
 * Ultra Premium Global Error Page
 * ============================================================================
 *
 * Features
 * - Next.js Error Boundary
 * - Retry functionality
 * - Premium glassmorphism UI
 * - Responsive layout
 * - Development error details
 * - Accessible
 * ============================================================================
 */

interface ErrorPageProps {
  error: Error & {
    digest?: string;
  };
  reset: () =>void;
}

export default function ErrorPage({
  error,
  reset,
}: Readonly<ErrorPageProps>) {
  console.error(error);

  return (
    <main className="relative flex min-h-[85vh] items-center justify-center overflow-hidden px-6">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-red-500/10 blur-3xl" />
        <div className="absolute right-0 top-32 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <section className="relative mx-auto w-full max-w-4xl rounded-[36px] border border-zinc-200/70 bg-white/75 p-10 text-center shadow-2xl backdrop-blur-2xl dark:border-zinc-800 dark:bg-zinc-900/70 md:p-16">
        {/* Icon */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-red-500 via-orange-500 to-red-600 shadow-xl shadow-red-500/20">
          <AlertTriangle className="h-12 w-12 text-white" />
        </div>

        {/* Badge */}
        <div className="mt-8 inline-flex rounded-full border border-red-200 bg-red-50 px-5 py-2 text-sm font-semibold text-red-700 dark:border-red-900 dark:bg-red-950/30 dark:text-red-300">
          Application Error
        </div>

        {/* Heading */}
        <h1 className="mt-8 text-5xl font-black tracking-tight text-zinc-900 dark:text-zinc-100 md:text-6xl">
          Something Went Wrong
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-9 text-zinc-600 dark:text-zinc-400">
          An unexpected error occurred while loading this page.
          You can retry the operation or continue exploring the
          application using the navigation options below.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={reset}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 px-7 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <RefreshCw className="h-5 w-5 transition-transform duration-300 group-hover:rotate-180" />
            Try Again
          </button>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-7 py-4 font-semibold text-zinc-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-300 dark:hover:border-blue-500 dark:hover:bg-zinc-800 dark:hover:text-blue-400"
          >
            <ArrowLeft className="h-5 w-5" />
            Home
          </Link>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-7 py-4 font-semibold text-zinc-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-300 dark:hover:border-blue-500 dark:hover:bg-zinc-800 dark:hover:text-blue-400"
          >
            <BookOpen className="h-5 w-5" />
            Blog
          </Link>

          <Link
            href="/docs"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-7 py-4 font-semibold text-zinc-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-300 dark:hover:border-blue-500 dark:hover:bg-zinc-800 dark:hover:text-blue-400"
          >
            <FileText className="h-5 w-5" />
            Documentation
          </Link>
        </div>

        {/* Development Error Details */}
        {process.env.NODE_ENV === "development" && (
          <details className="mt-12 rounded-3xl border border-red-200 bg-red-50/70 p-6 text-left backdrop-blur dark:border-red-900 dark:bg-red-950/20">
            <summary className="cursor-pointer font-semibold text-red-700 dark:text-red-300">
              Error Details
            </summary>

            <pre className="mt-5 overflow-x-auto whitespace-pre-wrap break-words rounded-2xl bg-red-100/60 p-4 text-sm text-red-700 dark:bg-red-950/30 dark:text-red-300">
              {error.message}
            </pre>

            {error.digest && (
              <p className="mt-4 text-xs text-red-600 dark:text-red-400">
                Digest: {error.digest}
              </p>
            )}
          </details>
        )}
      </section>
    </main>
  );
}