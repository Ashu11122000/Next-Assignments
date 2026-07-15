import Link from "next/link";

/**
 * ============================================================================
 * Home Page
 * ============================================================================
 *
 * Landing page for the Static Blog & Documentation Site.
 *
 * Features:
 * - Project introduction
 * - Assignment overview
 * - Navigation to Blog and Documentation
 * - Responsive layout
 * ============================================================================
 */

export default function Home() {
  return (
    <section className="mx-auto flex max-w-4xl flex-col items-center py-16 text-center">
      {/* Hero */}
      <div className="space-y-6">
        <span className="inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
          Next.js • TypeScript • Markdown • SSG
        </span>

        <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
          Static Blog & Documentation Site
        </h1>

        <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-600">
          A simple assignment project built with Next.js App Router,
          TypeScript, Tailwind CSS, and Markdown. The project demonstrates
          Static Site Generation (SSG), dynamic routing, reusable components,
          and nested layouts for documentation.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link
          href="/blog"
          className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
        >
          Explore Blog
        </Link>

        <Link
          href="/docs"
          className="rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-100"
        >
          View Documentation
        </Link>
      </div>

      {/* Features */}
      <div className="mt-20 grid w-full gap-6 md:grid-cols-3">
        <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-semibold text-gray-900">
            Static Blog
          </h2>

          <p className="text-gray-600">
            Read blog posts written in Markdown and generated at build time
            using Static Site Generation for excellent performance and SEO.
          </p>
        </article>

        <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-semibold text-gray-900">
            Documentation
          </h2>

          <p className="text-gray-600">
            Browse organized project documentation using nested layouts and a
            persistent sidebar navigation powered by Markdown content.
          </p>
        </article>

        <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-semibold text-gray-900">
            Modern Stack
          </h2>

          <p className="text-gray-600">
            Built with Next.js App Router, TypeScript, Tailwind CSS,
            gray-matter, remark, and reusable components following modern best
            practices.
          </p>
        </article>
      </div>

      {/* Assignment Summary */}
      <div className="mt-20 w-full rounded-xl border border-gray-200 bg-gray-50 p-8 text-left">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          Project Highlights
        </h2>

        <ul className="grid list-disc gap-3 pl-6 text-gray-700 md:grid-cols-2">
          <li>Static Site Generation (SSG)</li>
          <li>Markdown-based content</li>
          <li>Dynamic routing</li>
          <li>Nested documentation layouts</li>
          <li>Reusable UI components</li>
          <li>Responsive design</li>
          <li>TypeScript support</li>
          <li>Clean project architecture</li>
        </ul>
      </div>
    </section>
  );
}