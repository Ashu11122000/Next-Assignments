import Link from "next/link";

import type { BlogPost } from "@/types/post";

/**
 * ============================================================================
 * Blog Card Component
 * ============================================================================
 *
 * Reusable card used to display blog post summaries.
 *
 * Features:
 * - Displays blog metadata
 * - Responsive layout
 * - Accessible heading hierarchy
 * - Read More link
 * - Reusable across blog listings
 * ============================================================================
 */

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      {/* Metadata */}
      <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-gray-500">
        <time dateTime={post.date}>{post.date}</time>

        <span aria-hidden="true">•</span>

        <span>{post.author}</span>
      </div>

      {/* Title */}
      <h2 className="mb-3 text-2xl font-bold tracking-tight text-gray-900">
        <Link
          href={`/blog/${post.slug}`}
          className="transition-colors hover:text-blue-600"
        >
          {post.title}
        </Link>
      </h2>

      {/* Description */}
      <p className="mb-6 flex-1 leading-7 text-gray-600">
        {post.description}
      </p>

      {/* Read More */}
      <div className="mt-auto">
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center font-medium text-blue-600 transition-colors hover:text-blue-700"
        >
          Read More →
        </Link>
      </div>
    </article>
  );
}