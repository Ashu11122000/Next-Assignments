/**
 * ============================================================================
 * Weather Page Loading
 * ============================================================================
 *
 * Loading UI displayed while the Weather Server Component
 * fetches current weather and forecast data.
 *
 * This is automatically rendered by Next.js App Router.
 * ============================================================================
 */

export default function WeatherLoading() {
  return (
    <main className="container mx-auto min-h-screen px-4 py-10">
      <div className="mx-auto max-w-5xl animate-pulse space-y-8">
        {/* Header */}
        <div className="space-y-3">
          <div className="h-10 w-72 rounded-lg bg-muted" />
          <div className="h-5 w-96 rounded bg-muted" />
        </div>

        {/* Current Weather Card */}
        <section className="rounded-xl border border-default bg-card p-6 shadow-sm">
          <div className="mb-6 h-8 w-56 rounded bg-muted" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="space-y-3">
                <div className="h-4 w-24 rounded bg-muted" />
                <div className="h-6 w-20 rounded bg-muted" />
              </div>
            ))}
          </div>
        </section>

        {/* Forecast Card */}
        <section className="rounded-xl border border-default bg-card p-6 shadow-sm">
          <div className="mb-6 h-8 w-48 rounded bg-muted" />

          <div className="space-y-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-lg border border-default p-4"
              >
                <div className="h-5 w-40 rounded bg-muted" />
                <div className="h-5 w-16 rounded bg-muted" />
                <div className="h-5 w-28 rounded bg-muted" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}