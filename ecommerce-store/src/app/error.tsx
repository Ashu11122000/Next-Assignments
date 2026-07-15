"use client";

import { useEffect } from "react";

import { AlertTriangle } from "lucide-react";
import Link from 'next/link';
import Button from "@/components/common/Button";
import Container from "@/components/common/Container";

interface ErrorPageProps {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}

/* -------------------------------------------------------------------------- */
/* Global Error UI                                                            */
/* -------------------------------------------------------------------------- */

export default function Error({
  error,
  reset,
}: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[70vh] items-center justify-center py-16">
      <Container className="max-w-2xl">
        <div className="rounded-3xl border border-border bg-card p-8 text-center shadow-sm sm:p-12">
          {/* ---------------------------------------------------------------- */}
          {/* Error Icon                                                       */}
          {/* ---------------------------------------------------------------- */}

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
            <AlertTriangle className="h-8 w-8 text-destructive" />
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* Heading                                                          */}
          {/* ---------------------------------------------------------------- */}

          <h1 className="mt-6 text-3xl font-bold tracking-tight">
            Something went wrong
          </h1>

          <p className="mt-4 text-muted-foreground">
            An unexpected error occurred while loading this page.
            Please try again. If the problem persists, return to
            the homepage and try again later.
          </p>

          {/* ---------------------------------------------------------------- */}
          {/* Actions                                                          */}
          {/* ---------------------------------------------------------------- */}

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

                        <Button
              onClick={reset}
            >
              Try Again
            </Button>

            <Button
              asChild
              variant="outline"
            >
              <Link href="/">
                Go to Home
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}