"use client";

/* =============================================================================
   Portfolio UI Library
   -----------------------------------------------------------------------------
   File: src/components/ui/ThemeToggle.tsx

   Ultra Premium Theme Toggle

   Features
   -----------------------------------------------------------------------------
   ✓ React 19
   ✓ Next.js 16
   ✓ next-themes
   ✓ Framer Motion
   ✓ Hydration Safe
   ✓ Glassmorphism
   ✓ Premium Animation
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
        variant="glass"
        disabled
        aria-label="Loading theme"
        className="
          h-11
          w-11
          rounded-2xl
        "
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
    <motion.div
      whileHover={{
        y: -2,
      }}
      whileTap={{
        scale: 0.96,
      }}
      transition={{
        duration: 0.18,
      }}
    >
      <Button
        type="button"
        size="icon"
        variant="glass"
        aria-label={`Switch to ${labels[nextTheme]}`}
        aria-pressed={currentTheme === "dark"}
        onClick={() => setTheme(nextTheme)}
        className="
          group

          relative

          h-11
          w-11

          overflow-hidden

          rounded-2xl

          border
          border-white/10

          bg-white/[0.05]

          backdrop-blur-2xl

          shadow-[0_10px_30px_rgba(15,23,42,.18)]

          hover:border-cyan-400/25

          hover:shadow-[0_18px_45px_rgba(59,130,246,.20)]
        "
      >
        {/* Top Glass Highlight */}

        <div
          aria-hidden
          className="
            absolute
            inset-x-2
            top-0
            h-px

            bg-gradient-to-r

            from-transparent

            via-white/35

            to-transparent
          "
        />

        {/* Ambient Glow */}

        <div
          aria-hidden
          className="
            absolute

            inset-0

            rounded-2xl

            bg-cyan-400/5

            opacity-0

            blur-xl

            transition-opacity

            duration-300

            group-hover:opacity-100
          "
        />

        <AnimatePresence
          mode="wait"
          initial={false}
        >
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
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="
              relative
              z-10

              flex

              items-center

              justify-center

              transition-transform

              duration-300

              group-hover:scale-110
            "
          >
            {icons[currentTheme]}
          </motion.span>
        </AnimatePresence>
      </Button>
    </motion.div>
  );
}

export default ThemeToggle;