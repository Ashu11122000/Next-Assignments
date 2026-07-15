import type { HTMLAttributes } from "react";

/**
 * ============================================================================
 * Premium Markdown Component
 * ============================================================================
 *
 * Reusable wrapper for rendering HTML generated from Markdown.
 *
 * Features
 * - Premium typography
 * - Light & dark mode optimized
 * - Beautiful code blocks
 * - Better readability
 * - Responsive layout
 * - Accessible semantics
 * ============================================================================
 */

interface MarkdownProps extends HTMLAttributes<HTMLElement> {
  /**
   * HTML generated from Markdown.
   */
  content: string;
}

export default function Markdown({
  content,
  className = "",
  ...props
}: MarkdownProps) {
  return (
    <article
      className={[
        "prose",
        "prose-zinc",
        "dark:prose-invert",
        "max-w-none",

        // Overall typography
        "prose-lg",
        "leading-8",

        // Headings
        "prose-headings:scroll-mt-24",
        "prose-headings:font-extrabold",
        "prose-headings:tracking-tight",
        "prose-headings:text-zinc-900",
        "dark:prose-headings:text-zinc-100",

        "prose-h1:mb-8",
        "prose-h1:text-5xl",
        "prose-h1:font-black",

        "prose-h2:mt-16",
        "prose-h2:mb-6",
        "prose-h2:border-b",
        "prose-h2:border-zinc-200",
        "prose-h2:pb-3",
        "dark:prose-h2:border-zinc-800",

        "prose-h3:mt-12",
        "prose-h3:mb-4",

        "prose-h4:mt-10",

        // Paragraphs
        "prose-p:text-zinc-700",
        "dark:prose-p:text-zinc-300",
        "prose-p:leading-8",

        // Links
        "prose-a:font-semibold",
        "prose-a:text-blue-600",
        "dark:prose-a:text-blue-400",
        "prose-a:no-underline",
        "hover:prose-a:text-blue-500",
        "hover:prose-a:underline",
        "prose-a:transition-colors",

        // Strong
        "prose-strong:text-zinc-900",
        "dark:prose-strong:text-zinc-100",

        // Lists
        "prose-li:marker:text-blue-500",

        // Horizontal rule
        "prose-hr:border-zinc-200",
        "dark:prose-hr:border-zinc-800",

        // Inline Code
        "prose-code:rounded-md",
        "prose-code:bg-zinc-100",
        "dark:prose-code:bg-zinc-800",
        "prose-code:px-1.5",
        "prose-code:py-1",
        "prose-code:font-medium",
        "prose-code:text-pink-600",
        "dark:prose-code:text-pink-400",

        // Remove default backticks
        "prose-code:before:hidden",
        "prose-code:after:hidden",

        // Code blocks
        "prose-pre:overflow-x-auto",
        "prose-pre:rounded-2xl",
        "prose-pre:border",
        "prose-pre:border-zinc-800",
        "prose-pre:bg-zinc-950",
        "prose-pre:p-6",
        "prose-pre:shadow-xl",

        // Images
        "prose-img:rounded-2xl",
        "prose-img:border",
        "prose-img:border-zinc-200",
        "dark:prose-img:border-zinc-800",
        "prose-img:shadow-xl",

        // Blockquotes
        "prose-blockquote:rounded-r-xl",
        "prose-blockquote:border-l-4",
        "prose-blockquote:border-blue-500",
        "prose-blockquote:bg-blue-50/60",
        "dark:prose-blockquote:bg-blue-950/20",
        "prose-blockquote:px-6",
        "prose-blockquote:py-4",
        "prose-blockquote:text-zinc-700",
        "dark:prose-blockquote:text-zinc-300",
        "prose-blockquote:not-italic",

        // Tables
        "prose-table:block",
        "prose-table:overflow-x-auto",
        "prose-table:rounded-xl",
        "prose-table:border",
        "prose-table:border-zinc-200",
        "dark:prose-table:border-zinc-800",

        "prose-th:border-b",
        "prose-th:border-zinc-200",
        "dark:prose-th:border-zinc-700",

        "prose-td:border-zinc-200",
        "dark:prose-td:border-zinc-700",

        className,
      ].join(" ")}
      dangerouslySetInnerHTML={{ __html: content }}
      {...props}
    />
  );
}