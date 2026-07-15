"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/Button";

/**
 * ============================================================================
 * Theme Toggle
 * ============================================================================
 *
 * Premium theme switcher.
 *
 * React 19 + Next.js 16
 *
 * Uses useSyncExternalStore to avoid hydration warnings.
 * ============================================================================
 */

function useMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

export default function ThemeToggle() {
  const mounted = useMounted();

  const { resolvedTheme, setTheme } = useTheme();

  if (!mounted) {
    return (
      <Button
        size="icon"
        variant="ghost"
        disabled
        aria-label="Toggle theme"
        className="rounded-2xl"
      >
        <Sun className="size-5 opacity-0" />
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      type="button"
      size="icon"
      variant="ghost"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      onClick={() =>
        setTheme(isDark ? "light" : "dark")
      }
      className="group rounded-2xl border border-border/50 bg-background/60 backdrop-blur-xl shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-muted/70 hover:shadow-lg"
    >
      {isDark ? (
        <Sun className="size-5 text-amber-500 transition-all duration-300 group-hover:rotate-180 group-hover:scale-110" />
      ) : (
        <Moon className="size-5 text-slate-700 transition-all duration-300 dark:text-slate-300 group-hover:-rotate-12 group-hover:scale-110" />
      )}
    </Button>
  );
}