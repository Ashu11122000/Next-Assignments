import WeatherSkeleton from "@/components/WeatherSkeleton";

/**
 * ============================================================================
 * Weather Page Loading
 * ============================================================================
 *
 * Route-level loading UI for the Weather Dashboard.
 *
 * This component is automatically rendered by the Next.js App Router
 * while the Weather Server Component fetches weather data.
 *
 * Responsibilities:
 * - Display a reusable loading skeleton
 * - Prevent layout shifts
 * - Keep loading UI consistent across the application
 *
 * ============================================================================
 */

export default function WeatherLoading() {
  return (
    <main className="min-h-screen bg-background">
      <WeatherSkeleton />
    </main>
  );
}