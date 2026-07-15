/**
 * ============================================================================
 * Blog Utilities
 * ============================================================================
 *
 * Helper functions for reading and processing blog posts stored as
 * Markdown files.
 *
 * Features:
 * - Get all blog posts
 * - Get a single post by slug
 * - Get all available slugs
 * - Sort posts by publication date
 * ============================================================================
 */

import path from "node:path";
import { readdir } from "node:fs/promises";

import {
  processMarkdownFile,
} from "@/lib/markdown";

import type {
  BlogFrontmatter,
  BlogPost,
} from "@/types/post";

/**
 * Absolute path to the blog content directory.
 */
const BLOG_DIRECTORY = path.join(
  process.cwd(),
  "content",
  "blog"
);

/**
 * Returns all Markdown filenames inside the blog directory.
 */
export async function getBlogSlugs(): Promise<string[]> {
  const files = await readdir(BLOG_DIRECTORY);

  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(".md", ""));
}

/**
 * Returns a single blog post by slug.
 */
export async function getBlogPost(
  slug: string
): Promise<BlogPost> {
  const filePath = path.join(
    BLOG_DIRECTORY,
    `${slug}.md`
  );

  const { frontmatter, content } =
    await processMarkdownFile<BlogFrontmatter>(
      filePath
    );

  return {
    slug,
    title: frontmatter.title,
    description: frontmatter.description,
    date: frontmatter.date,
    author: frontmatter.author,
    content,
  };
}

/**
 * Returns all blog posts sorted by newest first.
 */
export async function getAllBlogPosts(): Promise<
  BlogPost[]
> {
  const slugs = await getBlogSlugs();

  const posts = await Promise.all(
    slugs.map((slug) => getBlogPost(slug))
  );

  return posts.sort(
    (a, b) =>
      new Date(b.date).getTime() -
      new Date(a.date).getTime()
  );
}