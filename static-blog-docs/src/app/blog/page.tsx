import type { Metadata } from "next";

import BlogCard from "@/components/BlogCard";
import { getAllBlogPosts } from "@/lib/blog";

/**
 * ============================================================================
 * Blog Listing Page
 * ============================================================================
 *
 * Displays all blog posts available in the content/blog directory.
 *
 * Features:
 * - Static Site Generation (SSG)
 * - Responsive blog grid
 * - BlogCard integration
 * - Markdown-powered content
 * - SEO metadata
 * ============================================================================
 */

export const metadata: Metadata = {
  title: "Blog | Static Blog & Documentation Site",
  description:
    "Browse all blog posts written in Markdown and generated using Static Site Generation with Next.js.",
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <section className="mx-auto max-w-7xl">
      {/* Page Header */}
      <header className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
          Blog
        </h1>

        <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-600">
          Explore articles covering Next.js, Static Site Generation,
          Markdown, the App Router, and modern web development concepts.
          Every post is written in Markdown and statically generated for
          excellent performance and SEO.
        </p>
      </header>

      {/* Blog Posts */}
      {posts.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-gray-300 bg-gray-50 py-20 text-center">
          <h2 className="mb-2 text-2xl font-semibold text-gray-900">
            No blog posts found
          </h2>

          <p className="text-gray-600">
            Add Markdown files to the{" "}
            <code className="rounded bg-gray-200 px-1 py-0.5">
              content/blog
            </code>{" "}
            directory to display them here.
          </p>
        </div>
      )}
    </section>
  );
}