"use client";

/* =============================================================================
   Portfolio UI Library
   -----------------------------------------------------------------------------
   File: src/components/ui/ThemeToggle.tsx

   Production-ready Theme Toggle.

   Features
   -----------------------------------------------------------------------------
   ✓ React 19
   ✓ Next.js 16
   ✓ next-themes
   ✓ Framer Motion
   ✓ Accessible
   ✓ Hydration-safe
   ✓ React 19 useSyncExternalStore
   ✓ Glassmorphism UI
============================================================================= */

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/Button";

type Theme = "light" | "dark" | "system";

const icons: Record<Theme, React.ReactNode> = {
  light: <Sun className="h-5 w-5" />,
  dark: <Moon className="h-5 w-5" />,
  system: <Monitor className="h-5 w-5" />,
};

const labels: Record<Theme, string> = {
  light: "Light theme",
  dark: "Dark theme",
  system: "System theme",
};

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  /**
   * React 19 recommended hydration-safe client detection.
   * Avoids calling setState inside useEffect.
   */
  const mounted = React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <Button
        type="button"
        size="icon"
        variant="ghost"
        aria-label="Loading theme"
        disabled
      >
        <Sun className="h-5 w-5 opacity-0" />
      </Button>
    );
  }

  const currentTheme = (theme ?? "system") as Theme;

  const nextTheme: Theme =
    currentTheme === "light"
      ? "dark"
      : currentTheme === "dark"
        ? "system"
        : "light";

  return (
    <Button
      type="button"
      size="icon"
      variant="ghost"
      aria-label={`Switch to ${labels[nextTheme]}`}
      aria-pressed={currentTheme === "dark"}
      onClick={() => setTheme(nextTheme)}
      className="relative overflow-hidden"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={currentTheme}
          initial={{
            opacity: 0,
            rotate: -90,
            scale: 0.7,
          }}
          animate={{
            opacity: 1,
            rotate: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            rotate: 90,
            scale: 0.7,
          }}
          transition={{
            duration: 0.25,
            ease: "easeInOut",
          }}
          className="flex items-center justify-center"
        >
          {icons[currentTheme]}
        </motion.span>
      </AnimatePresence>
    </Button>
  );
}

export default ThemeToggle;