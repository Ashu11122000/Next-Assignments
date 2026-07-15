import Link from "next/link";
import { BookOpen, ChevronRight, Sparkles } from "lucide-react";

import { getAllDocPages } from "@/lib/docs";

/**
 * ============================================================================
 * Ultra Premium Documentation Sidebar
 * ============================================================================
 *
 * Features
 * - Glassmorphism
 * - Premium gradients
 * - Responsive
 * - Accessible
 * - Beautiful hover effects
 * - Dark mode optimized
 * ============================================================================
 */

export default async function Sidebar() {
  const pages = await getAllDocPages();

  return (
    <aside className="w-full md:w-80 md:shrink-0">
      <div className="sticky top-28 overflow-hidden rounded-3xl border border-zinc-200/70 bg-white/75 p-7 shadow-xl shadow-zinc-200/40 backdrop-blur-2xl dark:border-zinc-800 dark:bg-zinc-900/75 dark:shadow-black/30">
        {/* Background Glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-violet-500/10 blur-3xl" />
        </div>

        <div className="relative">
          {/* Header */}
          <div className="mb-8">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 dark:border-blue-900 dark:bg-blue-950/40">
              <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">
                Documentation
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-cyan-500 to-violet-600 shadow-lg shadow-blue-500/25">
                <BookOpen className="h-6 w-6 text-white" />
              </div>

              <div>
                <h2 className="text-xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
                  Guides
                </h2>

                <p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  Explore project documentation and developer resources.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Documentation Navigation">
            <ul className="space-y-2">
              {pages.map((page) => (
                <li key={page.slug}>
                  <Link
                    href={`/docs/${page.slug}`}
                    className="group flex items-center justify-between rounded-2xl border border-transparent px-4 py-3 text-sm font-semibold text-zinc-700 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 dark:text-zinc-300 dark:hover:border-blue-900 dark:hover:bg-zinc-800 dark:hover:text-blue-400"
                  >
                    <span className="truncate">{page.title}</span>

                    <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer Badge */}
          <div className="mt-8 rounded-2xl border border-emerald-200 bg-gradient-to-r from-emerald-50 to-teal-50 p-4 dark:border-emerald-900 dark:from-emerald-950/40 dark:to-teal-950/40">
            <p className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
              Fully static, SEO-friendly documentation powered by Markdown and
              Next.js App Router.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}