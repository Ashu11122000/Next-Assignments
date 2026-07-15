import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  CalendarDays,
  Clock3,
  Sparkles,
  UserRound,
} from "lucide-react";

import Markdown from "@/components/Markdown";
import { getBlogPost, getBlogSlugs } from "@/lib/blog";

/**
 * ============================================================================
 * Ultra Premium Blog Post Page
 * ============================================================================
 *
 * Features
 * - Static Site Generation (SSG)
 * - Dynamic Routing
 * - Premium Reading Experience
 * - Dynamic Metadata
 * - Glassmorphism Hero
 * - Responsive
 * ============================================================================
 */

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

/**
 * Generate all blog routes.
 */
export async function generateStaticParams() {
  const slugs = await getBlogSlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}

/**
 * SEO Metadata
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
    <main className="relative overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <article className="mx-auto max-w-5xl">
        {/* Hero */}
        <header className="mb-16 rounded-[36px] border border-zinc-200/70 bg-white/75 p-10 shadow-2xl backdrop-blur-2xl dark:border-zinc-800 dark:bg-zinc-900/70 md:p-14">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 dark:border-blue-900 dark:bg-blue-950/40">
            <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />

            <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
              Featured Article
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl font-black tracking-tight text-zinc-900 dark:text-zinc-100 md:text-6xl">
            {post.title}
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-3xl text-xl leading-9 text-zinc-600 dark:text-zinc-400">
            {post.description}
          </p>

          {/* Meta */}
          <div className="mt-10 flex flex-wrap gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
              <UserRound className="h-4 w-4 text-violet-600 dark:text-violet-400" />
              {post.author}
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
              <CalendarDays className="h-4 w-4 text-blue-600 dark:text-blue-400" />

              <time dateTime={post.date}>{post.date}</time>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
              <Clock3 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              5 min read
            </div>
          </div>
        </header>

        {/* Reading Content */}
        <section className="rounded-[36px] border border-zinc-200/70 bg-white/75 p-8 shadow-xl backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/70 md:p-12">
          <Markdown content={post.content} />
        </section>
      </article>
    </main>
  );
}