"use client";

import Link from "next/link";
import { useEffect } from "react";
import {
  Home,
  RefreshCw,
  TriangleAlert,
} from "lucide-react";

import EmptyState from "@/components/EmptyState";
import { Button } from "@/components/ui/Button";

/**
 * ============================================================================
 * Weather Error Page
 * ============================================================================
 *
 * Client Component
 *
 * Displayed when the Weather page fails to render.
 *
 * Features
 * --------
 * ✓ Premium error experience
 * ✓ Retry action
 * ✓ Navigate back home
 * ✓ Development error details
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
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-red-500/10 via-orange-500/5 to-background" />

      <div className="w-full max-w-2xl">

        <EmptyState
          icon={
            <TriangleAlert
              className="h-14 w-14 text-destructive"
              aria-hidden="true"
            />
          }
          title="Unable to load weather"
          description="Something went wrong while fetching the latest weather information. Please try again."
        />

        {/* Actions */}
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

          <Button
            size="lg"
            onClick={reset}
          >
            <RefreshCw className="size-5" />
            Try Again
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
          >
            <Link href="/">
              <Home className="size-5" />
              Back to Home
            </Link>
          </Button>

        </div>

      </div>

      {/* Development Error */}
      {process.env.NODE_ENV === "development" && (
        <details className="fixed bottom-6 left-6 right-6 max-h-72 overflow-auto rounded-3xl border border-border bg-card/95 p-5 shadow-2xl backdrop-blur-xl">

          <summary className="cursor-pointer font-semibold">
            Error Details
          </summary>

          <pre className="mt-4 whitespace-pre-wrap text-sm text-muted-foreground">
            {error.message}
          </pre>

        </details>
      )}

    </main>
  );
}