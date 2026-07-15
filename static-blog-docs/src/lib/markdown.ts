/**
 * ============================================================================
 * Markdown Utilities
 * ============================================================================
 *
 * Shared helper functions for reading and converting Markdown files.
 *
 * Features:
 * - Read Markdown files
 * - Parse frontmatter
 * - Convert Markdown to HTML
 * - Return typed data
 * *
 * Used by:
 * - blog.ts
 * - docs.ts
 * ============================================================================
 */

import fs from "node:fs/promises";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

/**
 * Reads a Markdown file from disk.
 *
 * @param filePath Absolute path to the Markdown file.
 * @returns Raw Markdown content.
 */
export async function readMarkdownFile(
  filePath: string
): Promise<string> {
  return fs.readFile(filePath, "utf8");
}

/**
 * Parses frontmatter and Markdown content.
 *
 * @param fileContent Raw Markdown file.
 * @returns Frontmatter data and Markdown body.
 */
export function parseMarkdown<T>(fileContent: string): {
  frontmatter: T;
  content: string;
} {
  const { data, content } = matter(fileContent);

  return {
    frontmatter: data as T,
    content,
  };
}

/**
 * Converts Markdown into HTML.
 *
 * @param markdown Markdown content.
 * @returns Rendered HTML string.
 */
export async function markdownToHtml(
  markdown: string
): Promise<string> {
  const processed = await remark()
    .use(html)
    .process(markdown);

  return processed.toString();
}

/**
 * Reads, parses, and converts a Markdown file.
 *
 * This helper combines all Markdown operations into a
 * single reusable function.
 *
 * @param filePath Absolute path to the Markdown file.
 * @returns Parsed frontmatter and rendered HTML.
 */
export async function processMarkdownFile<T>(
  filePath: string
): Promise<{
  frontmatter: T;
  content: string;
}> {
  const fileContent = await readMarkdownFile(filePath);

  const { frontmatter, content } =
    parseMarkdown<T>(fileContent);

  const htmlContent = await markdownToHtml(content);

  return {
    frontmatter,
    content: htmlContent,
  };
}