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
 * React 19 + Next.js 16
 *
 * Uses useSyncExternalStore instead of mounted state
 * to avoid hydration warnings and React 19 lint errors.
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
    >
      {isDark ? (
        <Sun className="size-5 transition-transform duration-200" />
      ) : (
        <Moon className="size-5 transition-transform duration-200" />
      )}
    </Button>
  );
}