/**
 * =============================================================================
 * Portfolio
 * =============================================================================
 * File: src/components/home/FloatingTechIcons.tsx
 * -----------------------------------------------------------------------------
 * Floating Technology Icons
 * -----------------------------------------------------------------------------
 *
 * Ultra Premium UI
 * -----------------------------------------------------------------------------
 * • Premium Glassmorphism
 * • Floating Animation
 * • Responsive Positioning
 * • Dashboard Style
 * • No Business Logic Changes
 * =============================================================================
 */

"use client";

import { motion } from "framer-motion";

import { FLOATING_TECHNOLOGIES } from "@/data/hero";
import { cn } from "@/lib/utils";

const POSITIONS = [
  "-left-8 top-12",
  "right-0 top-2",
  "-left-10 bottom-24",
  "right-2 bottom-20",
  "left-20 -bottom-6",
  "right-24 top-1/2",
] as const;

export default function FloatingTechIcons() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden xl:block"
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
              y: [0, -14, 0],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              delay: technology.delay,
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <div
              className="
                group
                flex
                items-center
                gap-4
                rounded-2xl
                border
                border-white/10
                bg-white/10
                px-5
                py-4
                shadow-[0_15px_40px_rgba(0,0,0,0.25)]
                backdrop-blur-2xl
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-cyan-400/30
                hover:bg-white/15
                hover:shadow-[0_20px_60px_rgba(34,211,238,0.15)]
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-cyan-500/20
                  bg-gradient-to-br
                  from-cyan-500/20
                  via-sky-500/20
                  to-violet-500/20
                  text-cyan-400
                  transition-all
                  duration-300
                  group-hover:scale-110
                  group-hover:rotate-6
                  group-hover:bg-gradient-to-br
                  group-hover:from-cyan-500
                  group-hover:to-violet-600
                  group-hover:text-white
                "
              >
                <Icon className="h-6 w-6" />
              </div>

              <div className="flex flex-col">
                <span className="whitespace-nowrap text-sm font-semibold text-white">
                  {technology.name}
                </span>

                <span className="text-xs text-zinc-400">
                  Technology
                </span>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}