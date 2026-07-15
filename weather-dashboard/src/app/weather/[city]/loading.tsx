import WeatherSkeleton from "@/components/WeatherSkeleton";

/**
 * ============================================================================
 * Weather Page Loading
 * ============================================================================
 *
 * Route-level loading UI.
 *
 * Automatically rendered while weather data is being fetched.
 *
 * Features
 * --------
 * ✓ Premium loading experience
 * ✓ Matches dashboard layout
 * ✓ Prevents layout shifts
 * ✓ Responsive
 * ============================================================================
 */

export default function WeatherLoading() {
  return (
    <main className="min-h-screen bg-background">

      <div className="relative">

        {/* Background Glow */}
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-gradient-to-b from-sky-500/10 via-cyan-500/5 to-transparent" />

        <div className="container mx-auto max-w-7xl px-4 py-10 lg:px-6">
          <WeatherSkeleton />
        </div>

      </div>

    </main>
  );
}