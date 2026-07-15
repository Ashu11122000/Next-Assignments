/**
 * ============================================================================
 * Documentation Utilities
 * ============================================================================
 *
 * Helper functions for reading and processing documentation pages
 * stored as Markdown files.
 *
 * Features:
 * - Get all documentation pages
 * - Get a single documentation page by slug
 * - Get all available slugs
 * ============================================================================
 */

import path from "node:path";
import { readdir } from "node:fs/promises";

import { processMarkdownFile } from "@/lib/markdown";

import type {
  DocFrontmatter,
  DocPage,
} from "@/types/post";

/**
 * Absolute path to the documentation content directory.
 */
const DOCS_DIRECTORY = path.join(
  process.cwd(),
  "content",
  "docs"
);

/**
 * Returns all Markdown filenames inside the documentation directory.
 */
export async function getDocSlugs(): Promise<string[]> {
  const files = await readdir(DOCS_DIRECTORY);

  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(".md", ""));
}

/**
 * Returns a single documentation page by slug.
 */
export async function getDocPage(
  slug: string
): Promise<DocPage> {
  const filePath = path.join(
    DOCS_DIRECTORY,
    `${slug}.md`
  );

  const { frontmatter, content } =
    await processMarkdownFile<DocFrontmatter>(
      filePath
    );

  return {
    slug,
    title: frontmatter.title,
    description: frontmatter.description,
    content,
  };
}

/**
 * Returns all documentation pages.
 */
export async function getAllDocPages(): Promise<
  DocPage[]
> {
  const slugs = await getDocSlugs();

  return Promise.all(
    slugs.map((slug) => getDocPage(slug))
  );
}