"use client";

import { useEffect } from "react";

/**
 * ============================================================================
 * Global Error Page
 * ============================================================================
 *
 * Catches unexpected errors anywhere in the application.
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
    <html lang="en">
      <body className="flex min-h-screen items-center justify-center bg-background text-foreground">
        <div className="max-w-lg rounded-xl border border-default bg-card p-8 text-center shadow">
          <h1 className="mb-4 text-3xl font-bold">
            Something went wrong
          </h1>

          <p className="mb-6 text-muted">
            An unexpected error occurred.
          </p>

          <button
            type="button"
            onClick={() => reset()}
            className="rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
          >
            Try Again
          </button>

          {process.env.NODE_ENV === "development" && (
            <pre className="mt-6 overflow-auto rounded bg-muted p-4 text-left text-sm">
              {error.message}
            </pre>
          )}
        </div>
      </body>
    </html>
  );
}