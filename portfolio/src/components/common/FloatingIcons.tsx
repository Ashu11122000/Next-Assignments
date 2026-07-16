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
}"use client";

/* =============================================================================
   Portfolio UI Library
   -----------------------------------------------------------------------------
   File: src/components/common/FloatingIcons.tsx

   Ultra Premium Floating Tech Icons

   Features
   -----------------------------------------------------------------------------
   ✓ React 19
   ✓ Next.js 16
   ✓ TypeScript
   ✓ Framer Motion
   ✓ Ambient Glass Icons
   ✓ Responsive
   ✓ GPU Optimized
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
  [
    "pointer-events-none",
    "absolute",
    "inset-0",
    "overflow-hidden",
    "select-none",
  ].join(" "),
  {
    variants: {
      opacity: {
        low: "opacity-10",

        medium: "opacity-15",

        high: "opacity-25",
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
    className: "left-[5%] top-[10%]",
    duration: 18,
    delay: 0,
  },
  {
    Icon: SiNextdotjs,
    className: "right-[6%] top-[18%]",
    duration: 20,
    delay: 2,
  },
  {
    Icon: SiTypescript,
    className: "left-[12%] bottom-[18%]",
    duration: 22,
    delay: 4,
  },
  {
    Icon: SiTailwindcss,
    className: "right-[14%] bottom-[12%]",
    duration: 24,
    delay: 6,
  },
  {
    Icon: SiDocker,
    className: "left-1/2 top-[8%] -translate-x-1/2",
    duration: 26,
    delay: 1,
  },
  {
    Icon: SiFastapi,
    className: "right-[26%] top-1/2",
    duration: 20,
    delay: 3,
  },
  {
    Icon: SiNestjs,
    className: "left-[26%] top-1/2",
    duration: 18,
    delay: 5,
  },
  {
    Icon: SiPostgresql,
    className: "right-[40%] bottom-[24%]",
    duration: 22,
    delay: 2,
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
  iconSize = 32,
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
            className={cn(
              "absolute hidden md:flex",
              "items-center justify-center",

              "h-14 w-14",

              "rounded-2xl",

              "border border-white/8",

              "bg-white/[0.03]",

              "backdrop-blur-xl",

              "shadow-[0_12px_40px_rgba(15,23,42,.18)]",

              className
            )}
            animate={{
              y: [0, -12, 0],

              rotate: [0, 4, -4, 0],

              scale: [1, 1.04, 0.98, 1],
            }}
            transition={{
              duration,

              delay,

              repeat: Infinity,

              repeatType: "mirror",

              ease: "easeInOut",
            }}
            style={{
              willChange: "transform",
            }}
          >
            <Icon
              size={iconSize}
              className="text-slate-300/80"
            />
          </motion.div>
        )
      )}
    </div>
  );
}