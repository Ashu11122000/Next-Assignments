import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Markdown from "@/components/Markdown";
import { getBlogPost, getBlogSlugs } from "@/lib/blog";

/**
 * ============================================================================
 * Blog Post Page
 * ============================================================================
 *
 * Displays an individual blog post generated from a Markdown file.
 *
 * Features:
 * - Static Site Generation (SSG)
 * - Dynamic routing
 * - Markdown rendering
 * - Dynamic metadata
 * - 404 handling
 * ============================================================================
 */

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

/**
 * Generate all blog routes at build time.
 */
export async function generateStaticParams() {
  const slugs = await getBlogSlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}

/**
 * Generate page metadata.
 */
export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  try {
    const { slug } = await params;
    const post = await getBlogPost(slug);

    return {
      title: `${post.title} | Static Blog`,
      description: post.description,
    };
  } catch {
    return {
      title: "Blog Post Not Found",
    };
  }
}

export default async function BlogPostPage({
  params,
}: BlogPostPageProps) {
  const { slug } = await params;

  let post;
  try {
    post = await getBlogPost(slug);
  } catch {
    notFound();
  }

  return (
    <article className="mx-auto max-w-4xl">
      {/* Header */}
      <header className="mb-10 border-b border-gray-200 pb-8">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
          {post.title}
        </h1>

        <p className="mb-6 text-lg leading-8 text-gray-600">
          {post.description}
        </p>

        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
          <span>{post.author}</span>

          <span aria-hidden="true">•</span>

          <time dateTime={post.date}>{post.date}</time>
        </div>
      </header>

      {/* Markdown Content */}
      <Markdown content={post.content} />
    </article>
  );
}