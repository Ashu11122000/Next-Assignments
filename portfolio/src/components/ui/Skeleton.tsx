"use client";

/* =============================================================================
   Portfolio UI Library
   -----------------------------------------------------------------------------
   File: src/components/ui/Skeleton.tsx

   Ultra Premium reusable Skeleton component.

   Features
   -----------------------------------------------------------------------------
   ✓ React 19
   ✓ Next.js 16
   ✓ TypeScript
   ✓ CVA
   ✓ Glassmorphism
   ✓ Premium Shimmer
   ✓ Multiple Variants
   ✓ Accessible
============================================================================= */

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const skeletonVariants = cva(
  [
    "group",

    "relative",

    "overflow-hidden",

    "rounded-2xl",

    "border",

    "border-white/10",

    "bg-slate-900/70",

    "backdrop-blur-2xl",

    "shadow-[0_12px_35px_rgba(15,23,42,.20)]",

    "before:absolute",

    "before:inset-0",

    "before:-translate-x-full",

    "before:bg-gradient-to-r",

    "before:from-transparent",

    "before:via-white/[0.12]",

    "before:to-transparent",

    "before:animate-[shimmer_2s_linear_infinite]",
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          "bg-slate-900/70",
        ].join(" "),

        glass: [
          "bg-white/[0.05]",

          "border-white/10",

          "backdrop-blur-3xl",

          "shadow-[inset_0_1px_0_rgba(255,255,255,.05)]",
        ].join(" "),

        muted: [
          "bg-slate-900/50",

          "border-white/5",
        ].join(" "),

        card: [
          "bg-white/[0.04]",

          "border-white/10",

          "shadow-[0_20px_60px_rgba(15,23,42,.28)]",
        ].join(" "),
      },

      radius: {
        none: "rounded-none",

        sm: "rounded-lg",

        md: "rounded-xl",

        lg: "rounded-2xl",

        xl: "rounded-3xl",

        full: "rounded-full",
      },

      animation: {
        shimmer:
          "before:animate-[shimmer_2s_linear_infinite]",

        pulse: [
          "animate-pulse",

          "before:hidden",
        ].join(" "),

        none: "before:hidden",
      },
    },

    defaultVariants: {
      variant: "glass",
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
      >
        {/* Glass Highlight */}
        <div
          aria-hidden
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-br
            from-white/[0.05]
            via-transparent
            to-transparent
          "
        />

        {/* Soft Glow */}
        <div
          aria-hidden
          className="
            pointer-events-none
            absolute
            -right-8
            -top-8
            h-24
            w-24
            rounded-full
            bg-cyan-400/10
            blur-2xl
          "
        />
      </div>
    );
  }
);

Skeleton.displayName = "Skeleton";

export { Skeleton };