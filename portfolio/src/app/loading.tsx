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
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6 py-12">
      {/* ---------------------------------------------------------------------
          Premium Background
      --------------------------------------------------------------------- */}

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-violet-500/10 blur-[150px]" />

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[170px]" />
      </div>

      {/* ---------------------------------------------------------------------
          Loading Card
      --------------------------------------------------------------------- */}

      <section
        className="
          relative
          w-full
          max-w-lg
          overflow-hidden
          rounded-[32px]
          border
          border-white/10
          bg-white/[0.04]
          p-8
          shadow-[0_30px_80px_rgba(0,0,0,0.35)]
          backdrop-blur-2xl
          sm:p-12
        "
      >
        {/* Decorative Rings */}

        <div
          aria-hidden
          className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-primary/10"
        />

        <div
          aria-hidden
          className="absolute -left-16 -bottom-16 h-52 w-52 rounded-full border border-violet-500/10"
        />

        <div className="flex flex-col items-center">

          {/* --------------------------------------------------------------- */}
          {/* Premium Loader */}
          {/* --------------------------------------------------------------- */}

          <div className="relative flex h-24 w-24 items-center justify-center">
            <div className="absolute inset-0 animate-spin rounded-full border-[3px] border-primary/10 border-t-cyan-400" />

            <div className="absolute inset-3 animate-spin rounded-full border-[3px] border-violet-500/10 border-b-violet-500 [animation-direction:reverse] [animation-duration:2.5s]" />

            <div className="absolute h-14 w-14 animate-pulse rounded-full bg-gradient-to-br from-cyan-500/20 to-violet-500/20 blur-xl" />

            <div className="relative h-5 w-5 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 shadow-[0_0_30px_rgba(59,130,246,0.6)]" />
          </div>

          {/* --------------------------------------------------------------- */}
          {/* Text */}
          {/* --------------------------------------------------------------- */}

          <div className="mt-10 space-y-3 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Loading Portfolio
            </h2>

            <p className="mx-auto max-w-sm text-base leading-7 text-slate-400">
              Preparing an amazing experience for you...
            </p>
          </div>

          {/* --------------------------------------------------------------- */}
          {/* Progress Bar */}
          {/* --------------------------------------------------------------- */}

          <div className="mt-10 w-full">
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="
                  h-full
                  w-1/3
                  animate-[pulse_1.8s_ease-in-out_infinite]
                  rounded-full
                  bg-gradient-to-r
                  from-cyan-400
                  via-blue-500
                  to-violet-500
                  shadow-[0_0_20px_rgba(59,130,246,0.35)]
                "
              />
            </div>
          </div>

          {/* --------------------------------------------------------------- */}
          {/* Loading Status */}
          {/* --------------------------------------------------------------- */}

          <div className="mt-8 flex items-center gap-2 text-sm text-slate-500">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />

            Initializing components...
          </div>
        </div>
      </section>
    </main>
  );
}