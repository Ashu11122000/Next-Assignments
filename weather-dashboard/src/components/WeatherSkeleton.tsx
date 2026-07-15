import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/Card";

/**
 * ============================================================================
 * Weather Skeleton
 * ============================================================================
 *
 * Server Component
 *
 * Reusable loading placeholder displayed while weather
 * data is being fetched.
 *
 * Built with:
 * - React 19
 * - Next.js 16
 * - Tailwind CSS v4
 *
 * Features
 * --------
 * ✓ Reusable
 * ✓ Responsive
 * ✓ Accessible
 * ✓ Dashboard layout matching
 * ✓ Minimal layout shift
 * ============================================================================
 */

export default function WeatherSkeleton() {
  return (
    <div className="space-y-8 animate-pulse">
      {/* ================================================================ */}
      {/* Weather Hero Card */}
      {/* ================================================================ */}

      <Card>
        <CardHeader>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <div className="h-8 w-52 rounded-lg bg-muted" />

              <div className="h-5 w-36 rounded bg-muted" />
            </div>

            <div className="size-24 rounded-full bg-muted" />
          </div>
        </CardHeader>

        <CardContent>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-4">
              <div className="h-14 w-40 rounded bg-muted" />

              <div className="h-5 w-32 rounded bg-muted" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {Array.from({ length: 2 }).map((_, index) => (
                <div
                  key={index}
                  className="space-y-2"
                >
                  <div className="h-4 w-24 rounded bg-muted" />

                  <div className="h-6 w-16 rounded bg-muted" />
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ================================================================ */}
      {/* Weather Details */}
      {/* ================================================================ */}

      <Card>
        <CardHeader>
          <div className="h-7 w-48 rounded bg-muted" />
        </CardHeader>

        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                className="flex items-center gap-4 rounded-xl border border-default p-4"
              >
                <div className="size-10 rounded-xl bg-muted" />

                <div className="flex-1 space-y-2">
                  <div className="h-4 w-24 rounded bg-muted" />

                  <div className="h-5 w-20 rounded bg-muted" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* ================================================================ */}
      {/* 5-Day Forecast */}
      {/* ================================================================ */}

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {Array.from({ length: 5 }).map((_, index) => (
          <Card key={index}>
            <CardContent className="flex flex-col items-center gap-4 p-6">
              <div className="h-5 w-20 rounded bg-muted" />

              <div className="size-16 rounded-full bg-muted" />

              <div className="h-5 w-24 rounded bg-muted" />

              <div className="h-6 w-14 rounded bg-muted" />

              <div className="h-4 w-16 rounded bg-muted" />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* ================================================================ */}
      {/* Hourly Forecast */}
      {/* ================================================================ */}

      <Card>
        <CardHeader>
          <div className="h-7 w-44 rounded bg-muted" />
        </CardHeader>

        <CardContent>
          <div className="flex gap-4 overflow-hidden">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="flex min-w-[120px] flex-col items-center rounded-xl border border-default p-4"
              >
                <div className="h-4 w-12 rounded bg-muted" />

                <div className="mt-4 size-14 rounded-full bg-muted" />

                <div className="mt-4 h-7 w-12 rounded bg-muted" />

                <div className="mt-3 h-4 w-16 rounded bg-muted" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}