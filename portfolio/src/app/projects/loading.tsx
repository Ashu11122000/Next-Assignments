/**
 * =============================================================================
 * Portfolio Website
 * =============================================================================
 * File: src/app/projects/loading.tsx
 * -----------------------------------------------------------------------------
 * Projects Loading Page
 * -----------------------------------------------------------------------------
 *
 * Responsibilities
 * ----------------
 * • Display while the Projects route is loading.
 * • Match the portfolio design language.
 * • Remain lightweight.
 *
 * Rendering
 * ---------
 * • Server Component
 * =============================================================================
 */

export default function Loading() {
  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-7xl items-center justify-center px-6 py-20">
      <div className="flex flex-col items-center gap-6">
        {/* Spinner */}

        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border-4 border-white/10" />

          <div className="absolute inset-0 animate-spin rounded-full border-4 border-cyan-500 border-t-transparent" />
        </div>

        {/* Text */}

        <div className="space-y-2 text-center">
          <h2 className="text-2xl font-semibold">
            Loading Projects...
          </h2>

          <p className="text-slate-400">
            Preparing portfolio projects.
          </p>
        </div>
      </div>
    </main>
  );
}