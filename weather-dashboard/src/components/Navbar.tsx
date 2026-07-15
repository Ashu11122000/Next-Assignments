import Link from "next/link";
import { CloudSun, MapPin } from "lucide-react";

import ThemeToggle from "@/components/ThemeToggle";
import { Badge } from "@/components/ui/Badge";

/**
 * ============================================================================
 * Navbar
 * ============================================================================
 *
 * Application Header
 *
 * Features
 * - Sticky
 * - Glassmorphism
 * - Responsive
 * - Theme Toggle
 * - Brand
 * ============================================================================
 */

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}

        <Link
          href="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-90"
        >
          <div className="flex size-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-md">
            <CloudSun className="size-6" />
          </div>

          <div className="hidden sm:block">
            <h1 className="text-lg font-bold tracking-tight">
              Weather Dashboard
            </h1>

            <p className="text-xs text-muted-foreground">
              Real-time Weather Forecast
            </p>
          </div>
        </Link>

        {/* Center */}

        <div className="hidden items-center gap-3 lg:flex">
          <Badge
            variant="secondary"
            className="rounded-full px-3 py-1"
          >
            <MapPin className="mr-1 size-3" />
            Live Weather
          </Badge>

          <Badge
            variant="outline"
            className="rounded-full px-3 py-1"
          >
            WeatherAPI
          </Badge>
        </div>

        {/* Right */}

        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}