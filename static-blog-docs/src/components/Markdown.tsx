import type { HTMLAttributes } from "react";

/**
 * ============================================================================
 * Markdown Component
 * ============================================================================
 *
 * Reusable wrapper for rendering HTML generated from Markdown files.
 *
 * Features:
 * - Renders parsed Markdown HTML
 * - Typography-friendly styling
 * - Responsive content layout
 * - Accessible article semantics
 * - Reusable for blog posts and documentation pages
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
        "prose-gray",
        "max-w-none",
        "prose-headings:font-bold",
        "prose-headings:text-gray-900",
        "prose-p:text-gray-700",
        "prose-p:leading-7",
        "prose-a:text-blue-600",
        "prose-a:no-underline",
        "hover:prose-a:underline",
        "prose-strong:text-gray-900",
        "prose-code:text-pink-600",
        "prose-pre:overflow-x-auto",
        "prose-pre:rounded-lg",
        "prose-pre:bg-gray-900",
        "prose-img:rounded-lg",
        "prose-blockquote:border-l-4",
        "prose-blockquote:border-gray-300",
        "prose-blockquote:italic",
        className,
      ].join(" ")}
      dangerouslySetInnerHTML={{ __html: content }}
      {...props}
    />
  );
}