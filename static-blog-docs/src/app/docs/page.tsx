import type { Metadata } from "next";
import Link from "next/link";

import { getAllDocPages } from "@/lib/docs";

/**
 * ============================================================================
 * Documentation Home Page
 * ============================================================================
 *
 * Landing page for the documentation section.
 *
 * Features:
 * - Static Site Generation (SSG)
 * - Lists all documentation pages
 * - Quick navigation
 * - Responsive layout
 * - SEO metadata
 * ============================================================================
 */

export const metadata: Metadata = {
  title: "Documentation | Static Blog & Documentation Site",
  description:
    "Browse the project documentation, installation guide, and project structure for the Static Blog & Documentation Site.",
};

export default async function DocsPage() {
  const docs = await getAllDocPages();

  return (
    <section className="space-y-10">
      {/* Page Header */}
      <header>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900">
          Documentation
        </h1>

        <p className="max-w-3xl text-lg leading-8 text-gray-600">
          Welcome to the documentation section. Here you&apos;ll find everything
          you need to understand the project structure, installation process,
          and how this Static Blog & Documentation Site is built using
          Next.js, TypeScript, Tailwind CSS, and Markdown.
        </p>
      </header>

      {/* Documentation Cards */}
      <div className="grid gap-6 md:grid-cols-2">
        {docs.map((doc) => (
          <article
            key={doc.slug}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
          >
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">
              <Link
                href={`/docs/${doc.slug}`}
                className="transition-colors hover:text-blue-600"
              >
                {doc.title}
              </Link>
            </h2>

            <p className="mb-6 leading-7 text-gray-600">
              {doc.description}
            </p>

            <Link
              href={`/docs/${doc.slug}`}
              className="inline-flex items-center font-medium text-blue-600 transition-colors hover:text-blue-700"
            >
              Read Documentation →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}