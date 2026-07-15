"use client";

import Link from "next/link";

/**
 * ============================================================================
 * Global Error Page
 * ============================================================================
 *
 * Error boundary for the Next.js App Router.
 *
 * Features:
 * - Handles unexpected runtime errors
 * - Retry functionality
 * - Navigation back to the Home page
 * - Accessible and responsive layout
 * ============================================================================
 */

interface ErrorPageProps {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}

export default function ErrorPage({
  error,
  reset,
}: Readonly<ErrorPageProps>) {
  // Log the error for debugging purposes.
  console.error(error);

  return (
    <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
      {/* Error Badge */}
      <span className="rounded-full bg-red-100 px-4 py-1 text-sm font-semibold text-red-600">
        Application Error
      </span>

      {/* Heading */}
      <h1 className="mt-6 text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
        Something Went Wrong
      </h1>

      {/* Description */}
      <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
        An unexpected error occurred while loading this page. You can try
        again, return to the home page, or continue browsing the project.
      </p>

      {/* Action Buttons */}
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <button
          type="button"
          onClick={reset}
          className="cursor-pointer rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Try Again
        </button>

        <Link
          href="/"
          className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Back to Home
        </Link>

        <Link
          href="/blog"
          className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Browse Blog
        </Link>
      </div>

      {/* Error Details (Development Only) */}
      {process.env.NODE_ENV === "development" && (
        <details className="mt-10 w-full rounded-lg border border-red-200 bg-red-50 p-4 text-left">
          <summary className="cursor-pointer font-medium text-red-700">
            Error Details
          </summary>

          <pre className="mt-4 overflow-x-auto whitespace-pre-wrap wrap-break-word text-sm text-red-600">
            {error.message}
          </pre>
        </details>
      )}
    </section>
  );
}