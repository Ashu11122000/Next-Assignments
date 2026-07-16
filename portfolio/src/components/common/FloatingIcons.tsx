"use client";

/* =============================================================================
   Portfolio UI Library
   -----------------------------------------------------------------------------
   File: src/components/common/FloatingIcons.tsx

   Production-ready Floating Tech Icons.

   Features
   -----------------------------------------------------------------------------
   ✓ React 19
   ✓ Next.js 16
   ✓ TypeScript
   ✓ Framer Motion
   ✓ react-icons
   ✓ Responsive
   ✓ Lightweight
   ✓ Decorative
============================================================================= */

import * as React from "react";
import { motion } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import {
  SiDocker,
  SiFastapi,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import { cn } from "@/lib/utils";

const floatingIconsVariants = cva(
  "pointer-events-none absolute inset-0 overflow-hidden",
  {
    variants: {
      opacity: {
        low: "opacity-10",
        medium: "opacity-20",
        high: "opacity-30",
      },
    },

    defaultVariants: {
      opacity: "medium",
    },
  }
);

const icons = [
  {
    Icon: SiReact,
    className: "left-[6%] top-[12%]",
    duration: 7,
    delay: 0,
  },
  {
    Icon: SiNextdotjs,
    className: "right-[8%] top-[20%]",
    duration: 8,
    delay: 0.5,
  },
  {
    Icon: SiTypescript,
    className: "left-[12%] bottom-[20%]",
    duration: 9,
    delay: 1,
  },
  {
    Icon: SiTailwindcss,
    className: "right-[15%] bottom-[10%]",
    duration: 10,
    delay: 1.5,
  },
  {
    Icon: SiDocker,
    className: "left-1/2 top-[8%]",
    duration: 8,
    delay: 2,
  },
  {
    Icon: SiFastapi,
    className: "right-[28%] top-1/2",
    duration: 9,
    delay: 0.8,
  },
  {
    Icon: SiNestjs,
    className: "left-[28%] top-1/2",
    duration: 7.5,
    delay: 1.2,
  },
  {
    Icon: SiPostgresql,
    className: "right-[42%] bottom-[25%]",
    duration: 9.5,
    delay: 0.4,
  },
];

export interface FloatingIconsProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof floatingIconsVariants> {
  iconSize?: number;
}

export function FloatingIcons({
  className,
  opacity,
  iconSize = 36,
  ...props
}: FloatingIconsProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        floatingIconsVariants({
          opacity,
        }),
        className
      )}
      {...props}
    >
      {icons.map(
        ({ Icon, className, duration, delay }, index) => (
          <motion.div
            key={index}
            className={cn("absolute", className)}
            animate={{
              y: [0, -18, 0],
              rotate: [0, 8, -8, 0],
            }}
            transition={{
              duration,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              delay,
            }}
          >
            <Icon size={iconSize} />
          </motion.div>
        )
      )}
    </div>
  );
}