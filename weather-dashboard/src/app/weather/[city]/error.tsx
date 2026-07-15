"use client";

import { useEffect } from "react";
import { Home, RefreshCw, TriangleAlert } from "lucide-react";

import EmptyState from "@/components/EmptyState";

/**
 * ============================================================================
 * Weather Error Page
 * ============================================================================
 *
 * Client Component
 *
 * Automatically rendered by the Next.js App Router when an error
 * occurs while rendering the Weather page.
 *
 * Responsibilities:
 * - Log runtime errors
 * - Display a reusable EmptyState
 * - Allow retry
 * - Navigate back home
 *
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
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <EmptyState
        icon={<TriangleAlert className="h-16 w-16 text-destructive" />}
        title="Unable to load weather"
        description="Something went wrong while fetching the latest weather information. Please try again."
      />

      {process.env.NODE_ENV === "development" && (
        <details className="fixed bottom-6 left-6 right-6 max-h-64 overflow-auto rounded-xl border border-default bg-card p-4 shadow-lg">
          <summary className="cursor-pointer font-medium">
            Error Details
          </summary>

          <pre className="mt-4 whitespace-pre-wrap text-sm">
            {error.message}
          </pre>
        </details>
      )}
    </main>
  );
}