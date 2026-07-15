/**
 * ============================================================================
 * Markdown Content Types
 * ============================================================================
 *
 * Shared TypeScript interfaces for blog posts and documentation pages.
 * These types are used throughout the application when reading Markdown files
 * and rendering content.
 * ============================================================================
 */

/**
 * Shared metadata available for all Markdown content.
 */
export interface BaseContent {
  /**
   * URL-friendly identifier derived from the filename.
   */
  slug: string;

  /**
   * Page or post title.
   */
  title: string;

  /**
   * Short summary displayed in listings.
   */
  description: string;
}

/**
 * Blog post metadata.
 */
export interface BlogPost extends BaseContent {
  /**
   * Publication date.
   */
  date: string;

  /**
   * Author name.
   */
  author: string;

  /**
   * Rendered HTML content.
   */
  content: string;
}

/**
 * Documentation page metadata.
 */
export interface DocPage extends BaseContent {
  /**
   * Rendered HTML content.
   */
  content: string;
}

/**
 * Frontmatter stored inside blog Markdown files.
 */
export interface BlogFrontmatter {
  title: string;
  description: string;
  date: string;
  author: string;
}

/**
 * Frontmatter stored inside documentation Markdown files.
 */
export interface DocFrontmatter {
  title: string;
  description: string;
}