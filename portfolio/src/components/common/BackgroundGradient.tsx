"use client";

/* =============================================================================
   Portfolio UI Library
   -----------------------------------------------------------------------------
   File: src/components/common/BackgroundGradient.tsx

   Ultra Premium Animated Background Gradient

   Features
   -----------------------------------------------------------------------------
   ✓ React 19
   ✓ Next.js 16
   ✓ TypeScript
   ✓ Framer Motion
   ✓ Ultra Soft Ambient Lighting
   ✓ Premium Glow
   ✓ Lightweight
============================================================================= */

import * as React from "react";
import { motion } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const backgroundGradientVariants = cva(
  [
    "pointer-events-none",

    "absolute",

    "inset-0",

    "overflow-hidden",

    "select-none",
  ].join(" "),
  {
    variants: {
      variant: {
        hero: "",

        contact: "",

        footer: "",

        minimal: "",
      },

      intensity: {
        low: "opacity-20",

        medium: "opacity-35",

        high: "opacity-55",
      },
    },

    defaultVariants: {
      variant: "hero",
      intensity: "medium",
    },
  }
);

export interface BackgroundGradientProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof backgroundGradientVariants> {}

const gradients = {
  hero: [
    {
      className:
        "-left-52 -top-40 h-[34rem] w-[34rem] bg-cyan-400/18",

      duration: 30,

      delay: 0,
    },

    {
      className:
        "right-[-12rem] top-10 h-[38rem] w-[38rem] bg-violet-500/18",

      duration: 34,

      delay: 2,
    },

    {
      className:
        "left-1/3 bottom-[-14rem] h-[30rem] w-[30rem] bg-blue-500/14",

      duration: 38,

      delay: 4,
    },
  ],

  contact: [
    {
      className:
        "-left-32 top-10 h-[24rem] w-[24rem] bg-cyan-400/16",

      duration: 28,

      delay: 0,
    },

    {
      className:
        "-right-20 bottom-0 h-[28rem] w-[28rem] bg-violet-500/16",

      duration: 32,

      delay: 2,
    },
  ],

  footer: [
    {
      className:
        "left-1/2 bottom-[-12rem] h-[26rem] w-[26rem] -translate-x-1/2 bg-blue-500/14",

      duration: 36,

      delay: 0,
    },
  ],

  minimal: [
    {
      className:
        "left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 bg-cyan-400/12",

      duration: 36,

      delay: 0,
    },
  ],
};

export function BackgroundGradient({
  className,
  variant = "hero",
  intensity,
  ...props
}: BackgroundGradientProps) {
  const selectedVariant =
    (variant ?? "hero") as keyof typeof gradients;

  return (
    <div
      aria-hidden="true"
      className={cn(
        backgroundGradientVariants({
          variant,
          intensity,
        }),
        className
      )}
      {...props}
    >
      {gradients[selectedVariant].map(
        ({ className, duration, delay }, index) => (
          <motion.div
            key={index}
            className={cn(
              "absolute",

              "rounded-full",

              "blur-[140px]",

              className
            )}
            animate={{
              x: [0, 50, -35, 0],

              y: [0, -40, 25, 0],

              scale: [1, 1.08, 0.94, 1],
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
          />
        )
      )}

      {/* Premium Center Glow */}
      <motion.div
        className="
          absolute
          left-1/2
          top-1/2

          h-[26rem]
          w-[26rem]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-white/[0.03]

          blur-[160px]
        "
        animate={{
          scale: [1, 1.05, 0.96, 1],
        }}
        transition={{
          duration: 18,

          repeat: Infinity,

          ease: "easeInOut",
        }}
      />
    </div>
  );
}