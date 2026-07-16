"use client";

/* =============================================================================
   Portfolio UI Library
   -----------------------------------------------------------------------------
   File: src/components/common/BackgroundGradient.tsx

   Production-ready animated background gradients.

   Features
   -----------------------------------------------------------------------------
   ✓ React 19
   ✓ Next.js 16
   ✓ TypeScript
   ✓ Framer Motion
   ✓ CVA
   ✓ Multiple variants
   ✓ Blur effects
   ✓ Responsive
   ✓ Lightweight
============================================================================= */

import * as React from "react";
import { motion } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const backgroundGradientVariants = cva(
  "pointer-events-none absolute inset-0 overflow-hidden",
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

        high: "opacity-50",
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
        "left-[-12rem] top-[-8rem] h-96 w-96 bg-cyan-500/30",
      duration: 18,
    },
    {
      className:
        "right-[-10rem] top-20 h-[28rem] w-[28rem] bg-violet-500/25",
      duration: 20,
    },
    {
      className:
        "bottom-[-12rem] left-1/3 h-[24rem] w-[24rem] bg-blue-500/20",
      duration: 22,
    },
  ],

  contact: [
    {
      className:
        "left-0 top-0 h-80 w-80 bg-cyan-500/20",
      duration: 16,
    },
    {
      className:
        "right-0 bottom-0 h-96 w-96 bg-violet-500/20",
      duration: 20,
    },
  ],

  footer: [
    {
      className:
        "left-1/4 bottom-0 h-72 w-72 bg-blue-500/20",
      duration: 18,
    },
  ],

  minimal: [
    {
      className:
        "left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 bg-cyan-500/15",
      duration: 20,
    },
  ],
};

export function BackgroundGradient({
  className,
  variant = "hero",
  intensity,
  ...props
}: BackgroundGradientProps) {
  const selectedVariant = (variant ?? "hero") as keyof typeof gradients;
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
        ({ className, duration }, index) => (
          <motion.div
            key={index}
            className={cn(
              "absolute rounded-full blur-3xl",
              className
            )}
            animate={{
              x: [0, 40, -30, 0],
              y: [0, -30, 20, 0],
              scale: [1, 1.15, 0.95, 1],
            }}
            transition={{
              duration,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        )
      )}
    </div>
  );
}