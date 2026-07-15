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
 * Premium loading placeholder.
 *
 * Matches the final dashboard layout to minimize layout shift.
 * ============================================================================
 */

export default function WeatherSkeleton() {
  return (
    <div className="space-y-10 animate-pulse">

      {/* ================================================================= */}
      {/* Hero Weather Card */}
      {/* ================================================================= */}

      <Card>
        <CardHeader className="pb-8">

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            <div className="space-y-5">

              <div className="h-10 w-64 rounded-xl bg-muted" />

              <div className="h-5 w-52 rounded-lg bg-muted" />

            </div>

            <div className="size-36 rounded-full bg-muted" />

          </div>

        </CardHeader>

        <CardContent>

          <div className="flex flex-col gap-10 xl:flex-row xl:items-end xl:justify-between">

            <div className="space-y-5">

              <div className="h-20 w-44 rounded-xl bg-muted" />

              <div className="h-6 w-40 rounded-lg bg-muted" />

            </div>

            <div className="grid grid-cols-2 gap-4 lg:min-w-[420px]">

              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-border/50 p-5"
                >
                  <div className="mb-4 h-10 w-10 rounded-xl bg-muted" />

                  <div className="space-y-2">

                    <div className="h-4 w-20 rounded bg-muted" />

                    <div className="h-7 w-24 rounded bg-muted" />

                  </div>
                </div>
              ))}

            </div>

          </div>

        </CardContent>
      </Card>

      {/* ================================================================= */}
      {/* Weather Details */}
      {/* ================================================================= */}

      <Card>

        <CardHeader>
          <div className="h-8 w-52 rounded-lg bg-muted" />
        </CardHeader>

        <CardContent>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">

            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                className="rounded-3xl border border-border/50 p-5"
              >
                <div className="mb-5 h-12 w-12 rounded-2xl bg-muted" />

                <div className="space-y-2">

                  <div className="h-4 w-24 rounded bg-muted" />

                  <div className="h-7 w-20 rounded bg-muted" />

                </div>
              </div>
            ))}

          </div>

        </CardContent>

      </Card>

      {/* ================================================================= */}
      {/* 5-Day Forecast */}
      {/* ================================================================= */}

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-5">

        {Array.from({ length: 5 }).map((_, index) => (
          <Card key={index}>

            <CardContent className="flex flex-col items-center justify-between p-7">

              <div className="h-8 w-24 rounded-full bg-muted" />

              <div className="my-6 size-20 rounded-full bg-muted" />

              <div className="h-7 w-28 rounded-full bg-muted" />

              <div className="my-6 h-10 w-24 rounded bg-muted" />

              <div className="h-9 w-28 rounded-full bg-muted" />

            </CardContent>

          </Card>
        ))}

      </div>

      {/* ================================================================= */}
      {/* Hourly Forecast */}
      {/* ================================================================= */}

      <Card>

        <CardHeader>
          <div className="h-8 w-48 rounded-lg bg-muted" />
        </CardHeader>

        <CardContent>

          <div className="flex gap-5 overflow-hidden">

            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="min-w-[132px] rounded-3xl border border-border/50 p-5"
              >
                <div className="mx-auto h-7 w-20 rounded-full bg-muted" />

                <div className="mx-auto my-5 size-18 rounded-full bg-muted" />

                <div className="mx-auto h-9 w-16 rounded bg-muted" />

                <div className="mx-auto mt-4 h-4 w-20 rounded bg-muted" />
              </div>
            ))}

          </div>

        </CardContent>

      </Card>

    </div>
  );
}