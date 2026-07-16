"use client";

/**
 * =============================================================================
 * Portfolio
 * =============================================================================
 * File: src/app/not-found.tsx
 * -----------------------------------------------------------------------------
 * Global 404 Page
 * -----------------------------------------------------------------------------
 *
 * Responsibilities
 * ----------------
 * • Display when a route cannot be found.
 * • Provide navigation back to the homepage.
 * • Match the portfolio's premium design language.
 * • Lightweight Client Component (required for Go Back button).
 *
 * =============================================================================
 */

import Link from "next/link";

import { ArrowLeft, Home, SearchX } from "lucide-react";

export default function NotFound() {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <section className="glass relative w-full max-w-2xl overflow-hidden rounded-3xl border border-border p-10 shadow-card">
        {/* Background Glow */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-600/10" />

        {/* Icon */}
        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
          <SearchX
            className="h-12 w-12 text-primary"
            strokeWidth={1.75}
          />
        </div>

        {/* 404 Number */}
        <p className="display-xl text-gradient text-center">
          404
        </p>

        {/* Heading */}
        <h1 className="heading-xl mt-4 text-center">
          Page Not Found
        </h1>

        {/* Description */}
        <p className="body-md mx-auto mt-6 max-w-xl text-center text-muted">
          The page you&apos;re looking for doesn&apos;t exist, may have been moved,
          or the URL might be incorrect.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
          >
            <Home className="h-5 w-5" />
            Go Home
          </Link>

          <button
            type="button"
            onClick={handleGoBack}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-3 font-medium text-foreground transition-all duration-300 hover:bg-card-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
          >
            <ArrowLeft className="h-5 w-5" />
            Go Back
          </button>
        </div>
      </section>
    </main>
  );
}