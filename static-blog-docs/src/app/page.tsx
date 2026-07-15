import type { Metadata } from "next";
import Link from "next/link";

/**
 * ============================================================================
 * About Page
 * ============================================================================
 *
 * Provides an overview of the Static Blog & Documentation Site, its purpose,
 * technologies, and key features.
 *
 * Features:
 * - Project overview
 * - Technology stack
 * - Assignment objectives
 * - Navigation to Blog and Documentation
 * - Responsive layout
 * ============================================================================
 */

export const metadata: Metadata = {
  title: "About | Static Blog & Documentation Site",
  description:
    "Learn about the Static Blog & Documentation Site, the technologies used, and the project objectives.",
};

const technologies = [
  "Next.js App Router",
  "TypeScript",
  "Tailwind CSS",
  "Markdown",
  "Static Site Generation (SSG)",
  "gray-matter",
  "remark",
  "remark-html",
];

const objectives = [
  "Build a static blog using Markdown files.",
  "Generate pages using Static Site Generation (SSG).",
  "Implement dynamic routing with the App Router.",
  "Create a documentation website with nested layouts.",
  "Build reusable UI components.",
  "Develop a responsive and accessible user interface.",
];

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl space-y-16 py-8">
      {/* Hero */}
      <header className="text-center">
        <span className="inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
          About This Project
        </span>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
          Static Blog & Documentation Site
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
          This project demonstrates how to build a modern static website using
          Next.js App Router, TypeScript, Tailwind CSS, and Markdown. It
          combines a static blog with a documentation website while following
          modern development practices and a reusable component architecture.
        </p>
      </header>

      {/* Project Overview */}
      <section className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-4 text-2xl font-semibold text-gray-900">
          Project Overview
        </h2>

        <p className="leading-8 text-gray-600">
          The application reads Markdown files from the content directory,
          extracts metadata using frontmatter, converts the content into HTML,
          and statically generates pages during the build process. This approach
          delivers excellent performance, improved SEO, and a clean separation
          between content and application code.
        </p>
      </section>

      {/* Technologies */}
      <section>
        <h2 className="mb-6 text-2xl font-semibold text-gray-900">
          Technologies Used
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {technologies.map((technology) => (
            <div
              key={technology}
              className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-center font-medium text-gray-700"
            >
              {technology}
            </div>
          ))}
        </div>
      </section>

      {/* Objectives */}
      <section className="rounded-xl border border-gray-200 bg-gray-50 p-8">
        <h2 className="mb-6 text-2xl font-semibold text-gray-900">
          Assignment Objectives
        </h2>

        <ul className="grid list-disc gap-3 pl-6 text-gray-700 md:grid-cols-2">
          {objectives.map((objective) => (
            <li key={objective}>{objective}</li>
          ))}
        </ul>
      </section>

      {/* Call to Action */}
      <section className="rounded-xl border border-blue-200 bg-blue-50 p-8 text-center">
        <h2 className="mb-4 text-2xl font-semibold text-gray-900">
          Explore the Project
        </h2>

        <p className="mx-auto mb-8 max-w-2xl text-gray-600">
          Browse the blog posts to learn about modern web development concepts
          or explore the documentation to understand the project structure and
          implementation.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/blog"
            className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
          >
            Explore Blog
          </Link>

          <Link
            href="/docs"
            className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-100"
          >
            View Documentation
          </Link>
        </div>
      </section>
    </section>
  );
}