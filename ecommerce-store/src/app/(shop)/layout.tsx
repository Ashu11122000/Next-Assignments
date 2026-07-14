import type { ReactNode } from "react";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

interface ShopLayoutProps {
  children: ReactNode;
}

/* -------------------------------------------------------------------------- */
/* Shop Layout                                                                 */
/* -------------------------------------------------------------------------- */
/**
 * Shared layout for all customer-facing pages.
 *
 * Routes:
 * /
 * /products
 * /products/[id]
 * /categories
 * /categories/[slug]
 */

export default function ShopLayout({
  children,
}: ShopLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* ------------------------------------------------------------------ */}
      {/* Navigation */}
      {/* ------------------------------------------------------------------ */}

      <Navbar />

      {/* ------------------------------------------------------------------ */}
      {/* Main Content */}
      {/* ------------------------------------------------------------------ */}

      <main
        id="main-content"
        className="flex-1"
      >
        {children}
      </main>

      {/* ------------------------------------------------------------------ */}
      {/* Footer */}
      {/* ------------------------------------------------------------------ */}

      <Footer />
    </div>
  );
}