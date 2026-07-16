"use client";

/* =============================================================================
   Portfolio UI Library
   -----------------------------------------------------------------------------
   File: src/components/ui/Skeleton.tsx

   Production-ready reusable Skeleton component.

   Features
   -----------------------------------------------------------------------------
   ✓ React 19
   ✓ Next.js 16
   ✓ TypeScript
   ✓ CVA Variants
   ✓ Multiple variants
   ✓ Multiple animations
   ✓ Accessible
   ✓ ForwardRef
============================================================================= */

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const skeletonVariants = cva(
  [
    "relative",
    "overflow-hidden",
    "rounded-xl",
    "bg-slate-800/70",
    "before:absolute",
    "before:inset-0",
    "before:-translate-x-full",
    "before:bg-gradient-to-r",
    "before:from-transparent",
    "before:via-white/10",
    "before:to-transparent",
    "before:animate-[shimmer_1.8s_infinite]",
  ].join(" "),
  {
    variants: {
      variant: {
        default: "bg-slate-800/70",

        glass:
          "bg-white/5 backdrop-blur-xl border border-white/10",

        muted: "bg-slate-900/60",

        card: "bg-slate-800 border border-white/10",
      },

      radius: {
        none: "rounded-none",

        sm: "rounded-md",

        md: "rounded-lg",

        lg: "rounded-xl",

        xl: "rounded-2xl",

        full: "rounded-full",
      },

      animation: {
        shimmer:
          "before:animate-[shimmer_1.8s_linear_infinite]",

        pulse: "animate-pulse before:hidden",

        none: "before:hidden",
      },
    },

    defaultVariants: {
      variant: "default",
      radius: "lg",
      animation: "shimmer",
    },
  }
);

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {}

const Skeleton = React.forwardRef<
  HTMLDivElement,
  SkeletonProps
>(
  (
    {
      className,
      variant,
      radius,
      animation,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        aria-hidden="true"
        className={cn(
          skeletonVariants({
            variant,
            radius,
            animation,
          }),
          className
        )}
        {...props}
      />
    );
  }
);

Skeleton.displayName = "Skeleton";

export { Skeleton };