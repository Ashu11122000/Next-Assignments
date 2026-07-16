/**
 * =============================================================================
 * Portfolio
 * =============================================================================
 * File: src/components/home/FloatingTechIcons.tsx
 * -----------------------------------------------------------------------------
 * Floating Technology Icons
 * -----------------------------------------------------------------------------
 *
 * Responsibilities
 * ----------------
 * • Render floating technology badges around the Hero image.
 * • Consume data from src/data/hero.ts.
 * • Provide subtle floating animations.
 * • Keep HeroImage clean and presentation-focused.
 *
 * Rendering
 * ---------
 * • Client Component
 * • Uses Framer Motion
 *
 * =============================================================================
 */

"use client";

import { motion } from "framer-motion";

import { FLOATING_TECHNOLOGIES } from "@/data/hero";
import { cn } from "@/lib/utils";

const POSITIONS = [
  "left-0 top-12",
  "right-2 top-0",
  "-left-6 bottom-20",
  "right-0 bottom-16",
  "left-16 -bottom-4",
  "right-20 top-1/2",
] as const;

export default function FloatingTechIcons() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden lg:block"
    >
      {FLOATING_TECHNOLOGIES.map((technology, index) => {
        const Icon = technology.icon;

        return (
          <motion.div
            key={technology.name}
            className={cn(
              "absolute",
              POSITIONS[index] ?? "left-0 top-0"
            )}
            initial={{
              opacity: 0,
              scale: 0.8,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -12, 0],
            }}
            transition={{
              delay: technology.delay,
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          >
            <div className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-background/70 px-4 py-3 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-primary/40 hover:shadow-primary/20">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" />
              </div>

              <span className="whitespace-nowrap text-sm font-semibold text-foreground">
                {technology.name}
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}