import { LoaderCircle, Sparkles } from "lucide-react";

/**
 * ============================================================================
 * Ultra Premium Global Loading Page
 * ============================================================================
 *
 * Displayed while route segments are loading.
 *
 * Features
 * - Premium glassmorphism
 * - Animated loading indicator
 * - Gradient background glow
 * - Accessible
 * - Responsive
 * ============================================================================
 */

export default function Loading() {
  return (
    <main className="relative flex min-h-[85vh] items-center justify-center overflow-hidden px-6">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-0 top-32 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <section className="relative w-full max-w-md rounded-[36px] border border-zinc-200/70 bg-white/75 p-12 text-center shadow-2xl backdrop-blur-2xl dark:border-zinc-800 dark:bg-zinc-900/70">
        {/* Animated Icon */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 via-cyan-500 to-violet-600 shadow-xl shadow-blue-500/20">
          <LoaderCircle className="h-12 w-12 animate-spin text-white" />
        </div>

        {/* Badge */}
        <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 dark:border-blue-900 dark:bg-blue-950/30">
          <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />

          <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
            Loading Content
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-8 text-3xl font-black tracking-tight text-zinc-900 dark:text-zinc-100">
          Preparing Your Experience
        </h2>

        {/* Description */}
        <p className="mt-5 leading-8 text-zinc-600 dark:text-zinc-400">
          We're loading your content and preparing everything for the best
          reading experience.
        </p>

        {/* Animated Dots */}
        <div className="mt-10 flex justify-center gap-3">
          <span className="h-3 w-3 animate-bounce rounded-full bg-blue-600 [animation-delay:-0.3s]" />
          <span className="h-3 w-3 animate-bounce rounded-full bg-cyan-500 [animation-delay:-0.15s]" />
          <span className="h-3 w-3 animate-bounce rounded-full bg-violet-600" />
        </div>
      </section>
    </main>
  );
}