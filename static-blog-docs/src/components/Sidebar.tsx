import Link from "next/link";

import { getAllDocPages } from "@/lib/docs";

/**
 * ============================================================================
 * Sidebar Component
 * ============================================================================
 *
 * Persistent navigation for the documentation section.
 *
 * Features:
 * - Lists all documentation pages
 * - Reads navigation items from Markdown files
 * - Responsive layout
 * - Accessible navigation
 * - Reusable across all documentation pages
 * ============================================================================
 */

export default async function Sidebar() {
  const pages = await getAllDocPages();

  return (
    <aside className="w-full rounded-lg border border-gray-200 bg-gray-50 p-6 md:w-72 md:shrink-0">
      <div className="space-y-6">
        {/* Sidebar Heading */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Documentation
          </h2>

          <p className="mt-1 text-sm text-gray-600">
            Browse the available guides and project documentation.
          </p>
        </div>

        {/* Navigation */}
        <nav aria-label="Documentation Navigation">
          <ul className="space-y-2">
            {pages.map((page) => (
              <li key={page.slug}>
                <Link
                  href={`/docs/${page.slug}`}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
                >
                  {page.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}