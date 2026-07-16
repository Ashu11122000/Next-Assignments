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
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6 py-12">
      {/* ------------------------------------------------------------------
          Premium Background
      ------------------------------------------------------------------- */}

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-violet-500/10 blur-[150px]" />

        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[180px]" />
      </div>

      {/* ------------------------------------------------------------------
          Card
      ------------------------------------------------------------------- */}

      <section
        className="
          relative
          w-full
          max-w-2xl
          overflow-hidden
          rounded-[32px]
          border
          border-white/10
          bg-white/[0.04]
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
            flex
            h-24
            w-24
            items-center
            justify-center
            rounded-3xl
            border
            border-primary/20
            bg-gradient-to-br
            from-cyan-500/15
            via-blue-500/10
            to-violet-500/15
            shadow-lg
            shadow-cyan-500/10
          "
        >
          <SearchX
            className="h-11 w-11 text-cyan-400"
            strokeWidth={1.8}
          />
        </div>

        {/* 404 */}

        <p className="mt-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-7xl font-extrabold tracking-tight text-transparent sm:text-8xl">
          404
        </p>

        {/* Heading */}

        <h1 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Page Not Found
        </h1>

        {/* Description */}

        <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
          The page you're looking for doesn't exist, may have been
          moved, or the URL you entered is incorrect.
        </p>

        {/* Buttons */}

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="
              inline-flex
              items-center
              justify-center
              gap-2
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
            <Home className="h-5 w-5" />

            Go Home
          </Link>

          <button
            type="button"
            onClick={handleGoBack}
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-2xl
              border
              border-white/10
              bg-white/[0.04]
              px-7
              py-3.5
              font-semibold
              text-white
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-primary/30
              hover:bg-primary/10
              focus:outline-none
              focus:ring-2
              focus:ring-cyan-400
              focus:ring-offset-2
              focus:ring-offset-background
            "
          >
            <ArrowLeft className="h-5 w-5" />

            Go Back
          </button>
        </div>
      </section>
    </main>
  );
}