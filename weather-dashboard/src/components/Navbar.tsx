import Link from "next/link";
import { CloudSun, MapPin } from "lucide-react";

import ThemeToggle from "@/components/ThemeToggle";
import { Badge } from "@/components/ui/Badge";

/**
 * ============================================================================
 * Navbar
 * ============================================================================
 *
 * Premium application header.
 *
 * Features
 * --------
 * ✓ Sticky
 * ✓ Glassmorphism
 * ✓ Responsive
 * ✓ Premium spacing
 * ✓ Theme Toggle
 * ============================================================================
 */

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/75 backdrop-blur-2xl supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-6">

        {/* ---------------------------------------------------------------- */}
        {/* Logo */}
        {/* ---------------------------------------------------------------- */}

        <Link
          href="/"
          className="group flex items-center gap-4"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 via-cyan-500 to-blue-600 text-white shadow-lg shadow-sky-500/25 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-sky-500/30">
            <CloudSun className="size-6" />
          </div>

          <div className="hidden sm:block">
            <h1 className="text-xl font-bold tracking-tight text-foreground">
              Weather Dashboard
            </h1>

            <p className="mt-0.5 text-sm text-muted-foreground">
              Real-time Weather Forecast
            </p>
          </div>
        </Link>

        {/* ---------------------------------------------------------------- */}
        {/* Center */}
        {/* ---------------------------------------------------------------- */}

        <div className="hidden items-center gap-3 xl:flex">

          <Badge
            variant="secondary"
            className="px-4 py-1.5"
          >
            <MapPin className="size-3.5" />
            Live Weather
          </Badge>

          <Badge
            variant="outline"
            className="px-4 py-1.5"
          >
            WeatherAPI
          </Badge>

        </div>

        {/* ---------------------------------------------------------------- */}
        {/* Right */}
        {/* ---------------------------------------------------------------- */}

        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>

      </div>
    </header>
  );
}