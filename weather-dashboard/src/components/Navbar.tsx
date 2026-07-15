import Link from "next/link";
import { CloudSun } from "lucide-react";

import ThemeToggle from "@/components/ThemeToggle";
import { Badge } from "@/components/ui/Badge";

/**
 * ============================================================================
 * Navbar
 * ============================================================================
 *
 * Server Component
 *
 * Application navigation bar.
 *
 * Features
 * --------
 * ✓ Sticky header
 * ✓ Responsive layout
 * ✓ Backdrop blur
 * ✓ Brand logo
 * ✓ Theme toggle
 * ✓ Accessible navigation
 * ✓ App Router ready
 * ============================================================================
 */

const navigation = [
  {
    href: "/",
    label: "Home",
  },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-default bg-background/80 backdrop-blur-xl">
      <div className="container">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* ---------------------------------------------------------------- */}
          {/* Logo */}
          {/* ---------------------------------------------------------------- */}

          <Link
            href="/"
            className="flex items-center gap-3 transition-opacity hover:opacity-90"
            aria-label="Weather Dashboard"
          >
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
              <CloudSun className="size-6" />
            </div>

            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight">
                Weather Dashboard
              </span>

              <Badge
                variant="secondary"
                size="sm"
                className="mt-1 w-fit"
              >
                Next.js 16
              </Badge>
            </div>
          </Link>

          {/* ---------------------------------------------------------------- */}
          {/* Navigation */}
          {/* ---------------------------------------------------------------- */}

          <nav
            aria-label="Primary Navigation"
            className="hidden items-center gap-6 md:flex"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* ---------------------------------------------------------------- */}
          {/* Actions */}
          {/* ---------------------------------------------------------------- */}

          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}