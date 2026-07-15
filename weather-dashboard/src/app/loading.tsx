import WeatherSkeleton from "@/components/WeatherSkeleton";

/**
 * ============================================================================
 * Global Loading UI
 * ============================================================================
 *
 * Displayed while route segments are loading.
 *
 * Responsibilities
 * ----------------
 * ✓ Display premium loading skeleton
 * ✓ Prevent layout shifts
 * ✓ Match dashboard layout
 * ✓ Consistent loading experience
 * ============================================================================
 */

export default function Loading() {
  return (
    <main className="min-h-screen bg-background">

      {/* Background Glow */}
      <div className="relative">

        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-gradient-to-b from-sky-500/10 via-cyan-500/5 to-transparent" />

        <div className="container mx-auto max-w-7xl px-4 py-10 lg:px-6">
          <WeatherSkeleton />
        </div>

      </div>

    </main>
  );
}