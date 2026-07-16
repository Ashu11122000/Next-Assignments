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
 *
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
      className="flex min-h-screen items-center justify-center bg-background px-6"
      role="alert"
      aria-live="assertive"
    >
      <section className="glass flex w-full max-w-xl flex-col items-center rounded-3xl border border-border p-10 text-center shadow-card">
        {/* Error Icon */}
        <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-error/10">
          <AlertTriangle
            className="h-12 w-12 text-error"
            strokeWidth={1.75}
          />
        </div>

        {/* Heading */}
        <h1 className="heading-xl mb-4 text-gradient">
          Something Went Wrong
        </h1>

        {/* Description */}
        <p className="body-md mb-8 max-w-md text-muted">
          An unexpected error occurred while loading this page.
          Please try again. If the issue persists, feel free to
          contact me.
        </p>

        {/* Retry Button */}
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
        >
          <RefreshCcw className="h-5 w-5" />

          Try Again
        </button>

        {/* Development Error Message */}
        {process.env.NODE_ENV === "development" && (
          <details className="mt-10 w-full rounded-xl border border-border bg-card p-4 text-left">
            <summary className="cursor-pointer font-semibold text-foreground">
              Developer Details
            </summary>

            <pre className="mt-4 overflow-x-auto whitespace-pre-wrap break-words text-sm text-muted">
              {error.message}
            </pre>

            {error.digest && (
              <p className="mt-4 text-xs text-muted">
                Digest: {error.digest}
              </p>
            )}
          </details>
        )}
      </section>
    </main>
  );
}