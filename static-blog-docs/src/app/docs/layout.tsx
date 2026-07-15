import type { ReactNode } from "react";

import Sidebar from "@/components/Sidebar";

/**
 * ============================================================================
 * Ultra Premium Documentation Layout
 * ============================================================================
 *
 * Shared layout for all documentation pages.
 *
 * Features
 * - Premium documentation experience
 * - Glassmorphism content area
 * - Sticky sidebar
 * - Responsive layout
 * - Better spacing
 * - Dark mode optimized
 * ============================================================================
 */

interface DocsLayoutProps {
  children: ReactNode;
}

export default function DocsLayout({
  children,
}: Readonly<DocsLayoutProps>) {
  return (
    <section className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/8 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-violet-500/8 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/8 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl py-10">
        <div className="flex flex-col gap-10 lg:flex-row">
          {/* Sidebar */}
          <Sidebar />

          {/* Documentation Content */}
          <main className="min-w-0 flex-1">
            <div className="rounded-[36px] border border-zinc-200/70 bg-white/75 p-8 shadow-xl backdrop-blur-2xl dark:border-zinc-800 dark:bg-zinc-900/70 md:p-10 lg:p-12">
              {children}
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}