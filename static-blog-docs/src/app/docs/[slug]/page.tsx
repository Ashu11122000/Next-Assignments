import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Markdown from "@/components/Markdown";
import { getDocPage, getDocSlugs } from "@/lib/docs";

/**
 * ============================================================================
 * Documentation Page
 * ============================================================================
 *
 * Displays an individual documentation page generated from a Markdown file.
 *
 * Features:
 * - Static Site Generation (SSG)
 * - Dynamic routing
 * - Markdown rendering
 * - Dynamic metadata
 * - 404 handling
 * ============================================================================
 */

interface DocPageProps {
  params: Promise<{
    slug: string;
  }>;
}

/**
 * Generate all documentation routes at build time.
 */
export async function generateStaticParams() {
  const slugs = await getDocSlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}

/**
 * Generate page metadata.
 */
export async function generateMetadata({
  params,
}: DocPageProps): Promise<Metadata> {
  try {
    const { slug } = await params;
    const doc = await getDocPage(slug);

    return {
      title: `${doc.title} | Documentation`,
      description: doc.description,
    };
  } catch {
    return {
      title: "Documentation Not Found",
    };
  }
}

export default async function DocumentationPage({
  params,
}: DocPageProps) {
  const { slug } = await params;

  let doc;
  try {
    doc = await getDocPage(slug);
  } catch {
    notFound();
  }

  return (
    <article className="mx-auto max-w-4xl">
      {/* Page Header */}
      <header className="mb-10 border-b border-gray-200 pb-8">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
          {doc.title}
        </h1>

        <p className="text-lg leading-8 text-gray-600">
          {doc.description}
        </p>
      </header>

      {/* Markdown Content */}
      <Markdown content={doc.content} />
    </article>
  );
}