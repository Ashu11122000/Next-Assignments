"use client";

import Link from "next/link";

/**
 * ============================================================================
 * Not Found Page
 * ============================================================================
 *
 * Custom 404 page displayed when a requested route cannot be found.
 *
 * Features:
 * - Friendly error message
 * - Quick navigation
 * - Responsive layout
 * - Accessible design
 * ============================================================================
 */

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
      {/* Error Code */}
      <span className="rounded-full bg-red-100 px-4 py-1 text-sm font-semibold text-red-600">
        Error 404
      </span>

      {/* Heading */}
      <h1 className="mt-6 text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
        Page Not Found
      </h1>

      {/* Description */}
      <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
        Sorry, the page you are looking for doesn&apos;t exist or may have been
        moved. Use one of the links below to continue exploring the project.
      </p>

      {/* Action Buttons */}
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
        >
          Back to Home
        </Link>

        <Link
          href="/blog"
          className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-100"
        >
          Browse Blog
        </Link>

        <Link
          href="/docs"
          className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-100"
        >
          View Documentation
        </Link>
      </div>
    </section>
  );
}