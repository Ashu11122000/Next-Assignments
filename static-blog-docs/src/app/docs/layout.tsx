import type { ReactNode } from "react";

import Sidebar from "@/components/Sidebar";

/**
 * ============================================================================
 * Documentation Layout
 * ============================================================================
 *
 * Shared layout for all documentation routes.
 *
 * Features:
 * - Persistent sidebar navigation
 * - Responsive two-column layout
 * - Shared across all /docs routes
 * - Server Component
 * ============================================================================
 */

interface DocsLayoutProps {
  children: ReactNode;
}

export default function DocsLayout({
  children,
}: Readonly<DocsLayoutProps>) {
  return (
    <section className="mx-auto max-w-7xl">
      <div className="flex flex-col gap-8 md:flex-row">
        {/* Documentation Sidebar */}
        <Sidebar />

        {/* Documentation Content */}
        <main className="min-w-0 flex-1">
          {children}
        </main>
      </div>
    </section>
  );
}