"use client";

import { useEffect } from "react";

/**
 * ============================================================================
 * Weather Error Page
 * ============================================================================
 *
 * Client Component
 *
 * Displayed automatically when an error occurs while rendering
 * the Weather page or fetching weather data.
 *
 * Features:
 * - Friendly error message
 * - Retry button
 * - Back to Home button
 * - Error logging
 * ============================================================================
 */

interface ErrorPageProps {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}

export default function WeatherError({
  error,
  reset,
}: Readonly<ErrorPageProps>) {
  useEffect(() => {
    console.error("Weather Page Error:", error);
  }, [error]);

  return (
    <main className="container mx-auto flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-lg rounded-xl border border-default bg-card p-8 text-center shadow-sm">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-100 text-4xl dark:bg-red-950">
          ⚠️
        </div>

        <h1 className="mb-3 text-3xl font-bold">
          Something went wrong
        </h1>

        <p className="mb-8 text-muted">
          We couldn&apos;t load the weather information at the
          moment. Please try again.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={() => reset()}
            className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition-colors hover:bg-blue-700"
          >
            Try Again
          </button>

          <button
            type="button"
            onClick={() => (window.location.href = "/")}
            className="rounded-lg border border-default px-5 py-3 font-medium transition-colors hover:bg-muted"
          >
            Back to Home
          </button>
        </div>

        {process.env.NODE_ENV === "development" && (
          <details className="mt-8 rounded-lg bg-muted p-4 text-left">
            <summary className="cursor-pointer font-medium">
              Error Details
            </summary>

            <pre className="mt-3 overflow-x-auto whitespace-pre-wrap text-sm">
              {error.message}
            </pre>
          </details>
        )}
      </div>
    </main>
  );
}