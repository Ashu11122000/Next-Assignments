import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  UserRound,
} from "lucide-react";

import type { BlogPost } from "@/types/post";

/**
 * ============================================================================
 * Ultra Premium Blog Card
 * ============================================================================
 *
 * Features
 * - Premium glassmorphism
 * - Animated gradient border
 * - Floating glow
 * - Better typography
 * - Excellent accessibility
 * - Light & Dark mode optimized
 * ============================================================================
 */

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[30px] border border-zinc-200/70 bg-white/75 p-7 shadow-lg shadow-zinc-200/40 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:border-blue-300/60 hover:shadow-2xl hover:shadow-blue-500/10 dark:border-zinc-800 dark:bg-zinc-900/75 dark:shadow-black/20 dark:hover:border-blue-500/40">
      {/* Animated Gradient Border */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600" />

      {/* Background Glow */}
      <div className="absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-100">
        <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 flex h-full flex-col">
        {/* Category */}
        <div className="mb-6 inline-flex w-fit items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-blue-700 dark:border-blue-900 dark:bg-blue-950/50 dark:text-blue-300">
          Blog Article
        </div>

        {/* Meta */}
        <div className="mb-5 flex flex-wrap items-center gap-5 text-sm text-zinc-600 dark:text-zinc-400">
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <time dateTime={post.date}>{post.date}</time>
          </div>

          <div className="flex items-center gap-2">
            <UserRound className="h-4 w-4 text-violet-600 dark:text-violet-400" />
            <span>{post.author}</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock3 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            <span>5 min read</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="mb-5 text-3xl font-extrabold leading-tight tracking-tight text-zinc-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-zinc-100 dark:group-hover:text-blue-400">
          <Link
            href={`/blog/${post.slug}`}
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-4 dark:focus-visible:ring-offset-zinc-900"
          >
            {post.title}
          </Link>
        </h2>

        {/* Description */}
        <p className="mb-8 flex-1 text-[15px] leading-8 text-zinc-600 dark:text-zinc-400">
          {post.description}
        </p>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between">
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:scale-105 hover:gap-3 hover:shadow-blue-500/40"
          >
            Read Article

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <div className="rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 backdrop-blur-md dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-400">
            SSG
          </div>
        </div>
      </div>
    </article>
  );
}