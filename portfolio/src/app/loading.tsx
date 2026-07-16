/**
 * =============================================================================
 * Portfolio
 * =============================================================================
 * File: src/app/loading.tsx
 * -----------------------------------------------------------------------------
 * Global Loading UI
 * -----------------------------------------------------------------------------
 *
 * Responsibilities
 * ----------------
 * • Display while route segments are loading.
 * • Provide a premium loading experience.
 * • Match the portfolio's design system.
 * • Keep implementation lightweight.
 *
 * =============================================================================
 */

export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <section className="flex w-full max-w-md flex-col items-center gap-8 rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur-xl">
        {/* Animated Loader */}
        <div className="relative flex h-20 w-20 items-center justify-center">
          <div className="absolute h-20 w-20 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />

          <div className="absolute h-12 w-12 animate-pulse rounded-full bg-primary/20 blur-xl" />

          <div className="h-4 w-4 rounded-full bg-primary shadow-[0_0_25px_theme(colors.cyan.400)]" />
        </div>

        {/* Loading Text */}
        <div className="space-y-2 text-center">
          <h2 className="heading-md text-gradient">
            Loading Portfolio
          </h2>

          <p className="body-sm text-muted">
            Preparing an amazing experience...
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/3 animate-pulse rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />
        </div>
      </section>
    </main>
  );
}