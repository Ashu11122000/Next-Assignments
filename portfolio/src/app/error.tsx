"use client";

/**
 * =============================================================================
 * Portfolio
 * =============================================================================
 * File: src/app/error.tsx
 * -----------------------------------------------------------------------------
 * Global Error Boundary
 * -----------------------------------------------------------------------------
 *
 * Responsibilities
 * ----------------
 * • Displays a user-friendly error page.
 * • Handles unexpected runtime errors.
 * • Allows the user to retry rendering.
 * • Logs errors during development.
 * • Matches the portfolio design system.
 * =============================================================================
 */

import { useEffect } from "react";
import { AlertTriangle, RefreshCcw } from "lucide-react";

interface ErrorPageProps {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}

export default function Error({
  error,
  reset,
}: Readonly<ErrorPageProps>) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main
      role="alert"
      aria-live="assertive"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6 py-12"
    >
      {/* Background Glow */}

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[140px]" />
      </div>

      <section
        className="
          relative
          w-full
          max-w-2xl
          overflow-hidden
          rounded-[32px]
          border
          border-white/10
          bg-white/[0.03]
          p-8
          text-center
          shadow-[0_30px_80px_rgba(0,0,0,0.35)]
          backdrop-blur-2xl
          sm:p-12
        "
      >
        {/* Decorative Rings */}

        <div
          aria-hidden
          className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-primary/10"
        />

        <div
          aria-hidden
          className="absolute -left-20 -bottom-20 h-52 w-52 rounded-full border border-violet-500/10"
        />

        {/* Icon */}

        <div
          className="
            mx-auto
            mb-8
            flex
            h-24
            w-24
            items-center
            justify-center
            rounded-3xl
            border
            border-red-500/20
            bg-gradient-to-br
            from-red-500/10
            via-orange-500/10
            to-yellow-500/10
            shadow-lg
          "
        >
          <AlertTriangle
            className="h-11 w-11 text-red-400"
            strokeWidth={1.8}
          />
        </div>

        {/* Heading */}

        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Something Went Wrong
        </h1>

        {/* Description */}

        <p className="mx-auto mt-5 max-w-lg text-base leading-8 text-slate-400 sm:text-lg">
          An unexpected error occurred while loading this page.
          Please try again. If the issue continues, feel free to
          contact me.
        </p>

        {/* Retry Button */}

        <button
          type="button"
          onClick={reset}
          className="
            mt-10
            inline-flex
            items-center
            gap-3
            rounded-2xl
            bg-gradient-to-r
            from-cyan-500
            via-blue-500
            to-violet-600
            px-7
            py-3.5
            font-semibold
            text-white
            shadow-lg
            shadow-cyan-500/20
            transition-all
            duration-300
            hover:-translate-y-1
            hover:scale-[1.02]
            hover:shadow-cyan-500/30
            focus:outline-none
            focus:ring-2
            focus:ring-cyan-400
            focus:ring-offset-2
            focus:ring-offset-background
          "
        >
          <RefreshCcw className="h-5 w-5" />

          Try Again
        </button>

        {/* Development Details */}

        {process.env.NODE_ENV === "development" && (
          <details
            className="
              mt-12
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
              p-5
              text-left
              backdrop-blur-xl
            "
          >
            <summary className="cursor-pointer font-semibold text-white">
              Developer Details
            </summary>

            <pre className="mt-5 overflow-x-auto whitespace-pre-wrap break-words rounded-xl bg-black/20 p-4 text-sm text-slate-400">
              {error.message}
            </pre>

            {error.digest && (
              <p className="mt-4 text-xs text-slate-500">
                Digest: {error.digest}
              </p>
            )}
          </details>
        )}
      </section>
    </main>
  );
}