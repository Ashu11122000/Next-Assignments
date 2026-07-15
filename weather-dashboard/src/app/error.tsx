"use client";

import { useEffect } from "react";
import { AlertTriangle, RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
} from "@/components/ui/Card";

/**
 * ============================================================================
 * Global Error Page
 * ============================================================================
 *
 * Displays a premium fallback UI whenever an unexpected
 * application error occurs.
 *
 * ============================================================================
 */

interface GlobalErrorProps {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}

export default function GlobalError({
  error,
  reset,
}: Readonly<GlobalErrorProps>) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground">

        <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">

          {/* Background Glow */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-red-500/10 via-orange-500/5 to-background" />

          <Card className="w-full max-w-xl overflow-hidden">

            <CardContent className="flex flex-col items-center px-8 py-12 text-center">

              {/* Error Icon */}
              <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-red-500/20 bg-red-500/10 shadow-lg backdrop-blur-xl">
                <AlertTriangle
                  className="h-12 w-12 text-red-500"
                  aria-hidden="true"
                />
              </div>

              {/* Heading */}
              <h1 className="text-4xl font-extrabold tracking-tight">
                Something went wrong
              </h1>

              {/* Description */}
              <p className="mt-4 max-w-md text-base leading-7 text-muted-foreground">
                We encountered an unexpected error while loading this page.
                Please try again. If the problem continues, refresh the page.
              </p>

              {/* Action */}
              <Button
                size="lg"
                onClick={reset}
                className="mt-10 min-w-[180px]"
              >
                <RotateCcw className="size-5" />
                Try Again
              </Button>

              {/* Development Error */}
              {process.env.NODE_ENV === "development" && (
                <pre className="mt-10 max-h-64 w-full overflow-auto rounded-2xl border border-border bg-muted/40 p-5 text-left text-sm text-muted-foreground">
                  {error.message}
                </pre>
              )}

            </CardContent>

          </Card>

        </main>

      </body>
    </html>
  );
}