import type { Metadata } from "next";
import {
  BookOpen,
  FileText,
  Sparkles,
} from "lucide-react";

import BlogCard from "@/components/BlogCard";
import { getAllBlogPosts } from "@/lib/blog";

/**
 * ============================================================================
 * Ultra Premium Blog Listing Page
 * ============================================================================
 *
 * Features
 * - Static Site Generation (SSG)
 * - Premium Hero
 * - Responsive Blog Grid
 * - Glassmorphism UI
 * - Modern Empty State
 * - SEO Optimized
 * ============================================================================
 */

export const metadata: Metadata = {
  title: "Blog | Static Blog & Documentation",
  description:
    "Explore articles about Next.js, Markdown, Static Site Generation, App Router, and modern web development.",
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <main className="relative overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-7xl py-10 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 shadow-sm dark:border-blue-900 dark:bg-blue-950/40">
          <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />

          <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
            Premium Knowledge Hub
          </span>
        </div>

        <h1 className="mt-8 text-5xl font-black tracking-tight text-zinc-900 dark:text-zinc-100 md:text-7xl">
          Explore Our
          <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 bg-clip-text text-transparent">
            {" "}
            Blog
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-zinc-600 dark:text-zinc-400">
          Discover high-quality articles covering Next.js, TypeScript,
          Markdown, Static Site Generation, App Router, performance,
          accessibility, and modern frontend development.
        </p>

        {/* Stats */}
        <div className="mx-auto mt-14 grid max-w-4xl gap-5 sm:grid-cols-3">
          <div className="rounded-3xl border border-zinc-200/70 bg-white/70 p-6 shadow-lg backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/70">
            <BookOpen className="mx-auto mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />

            <p className="text-3xl font-black text-zinc-900 dark:text-zinc-100">
              {posts.length}
            </p>

            <p className="mt-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">
              Articles Published
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200/70 bg-white/70 p-6 shadow-lg backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/70">
            <FileText className="mx-auto mb-4 h-8 w-8 text-violet-600 dark:text-violet-400" />

            <p className="text-3xl font-black text-zinc-900 dark:text-zinc-100">
              Markdown
            </p>

            <p className="mt-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">
              Content Powered
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200/70 bg-white/70 p-6 shadow-lg backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/70">
            <Sparkles className="mx-auto mb-4 h-8 w-8 text-emerald-600 dark:text-emerald-400" />

            <p className="text-3xl font-black text-zinc-900 dark:text-zinc-100">
              SSG
            </p>

            <p className="mt-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">
              Lightning Fast
            </p>
          </div>
        </div>
      </section>

      {/* Articles */}
      {posts.length > 0 ? (
        <section className="mx-auto mt-20 max-w-7xl">
          <div className="mb-10 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                Latest Articles
              </h2>

              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                Carefully crafted articles for modern web developers.
              </p>
            </div>

            <div className="hidden rounded-full border border-zinc-200 bg-white/70 px-5 py-2 text-sm font-semibold text-zinc-700 shadow-sm backdrop-blur dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-300 md:block">
              {posts.length} Articles
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      ) : (
        <section className="mx-auto mt-16 max-w-5xl">
          <div className="rounded-[32px] border border-dashed border-zinc-300 bg-white/70 p-16 text-center shadow-xl backdrop-blur-xl dark:border-zinc-700 dark:bg-zinc-900/70">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-violet-600">
              <BookOpen className="h-10 w-10 text-white" />
            </div>

            <h2 className="mt-8 text-3xl font-bold text-zinc-900 dark:text-zinc-100">
              No Articles Yet
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Start creating amazing content by adding Markdown files to the{" "}
              <code className="rounded-lg bg-zinc-200 px-2 py-1 text-sm dark:bg-zinc-800">
                content/blog
              </code>{" "}
              directory.
            </p>
          </div>
        </section>
      )}
    </main>
  );
}