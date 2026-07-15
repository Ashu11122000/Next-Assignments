import WeatherSkeleton from "@/components/WeatherSkeleton";

/**
 * ============================================================================
 * Global Loading UI
 * ============================================================================
 *
 * Displayed while route segments are loading.
 *
 * Responsibilities:
 * - Show a reusable loading skeleton
 * - Prevent layout shifts
 * - Provide a consistent loading experience
 *
 * ============================================================================
 */

export default function Loading() {
  return (
    <main className="min-h-screen bg-background">
      <WeatherSkeleton />
    </main>
  );
}