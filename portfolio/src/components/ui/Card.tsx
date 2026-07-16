"use client";

/* =============================================================================
   Portfolio UI Library
   -----------------------------------------------------------------------------
   File: src/components/ui/Card.tsx

   Ultra Premium reusable Card component.

   Features
   -----------------------------------------------------------------------------
   ✓ React 19
   ✓ Next.js 16
   ✓ TypeScript
   ✓ CVA
   ✓ Glassmorphism
   ✓ Gradient Overlay
   ✓ Premium Hover
   ✓ Inner Highlight
   ✓ Accessible
============================================================================= */

import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const cardVariants = cva(
  [
    "group",
    "relative",

    "overflow-hidden",

    "border",

    "backdrop-blur-2xl",

    "transition-all",

    "duration-500",

    "ease-out",

    "isolate",
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          "border-white/10",

          "bg-slate-900/75",

          "shadow-[0_20px_60px_rgba(0,0,0,.30)]",
        ].join(" "),

        glass: [
          "border-white/10",

          "bg-white/[0.05]",

          "backdrop-blur-3xl",

          "shadow-[0_20px_60px_rgba(15,23,42,.35)]",
        ].join(" "),

        elevated: [
          "border-slate-700/70",

          "bg-slate-900",

          "shadow-[0_30px_80px_rgba(0,0,0,.40)]",
        ].join(" "),

        outline: [
          "border-white/15",

          "bg-transparent",
        ].join(" "),
      },

      padding: {
  none: "p-0",

  sm: "p-6",

  md: "p-8",

  lg: "p-10",

  xl: "p-12",
},

height: {
  auto: "",

  sm: "min-h-[220px]",

  md: "min-h-[300px]",

  lg: "min-h-[380px]",

  xl: "min-h-[460px]",
},

      radius: {
        none: "rounded-none",

        sm: "rounded-xl",

        md: "rounded-2xl",

        lg: "rounded-3xl",

        xl: "rounded-[2rem]",
      },

      hover: {
        true: [
          "hover:-translate-y-2",

          "hover:border-violet-400/30",

          "hover:shadow-[0_35px_80px_rgba(99,102,241,.18)]",
        ].join(" "),

        false: "",
      },
    },

    defaultVariants: {
      variant: "glass",
      padding: "md",
      radius: "lg",
      hover: true,
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  asChild?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant,
      padding,
      radius,
      hover,
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "div";

    return (
      <Comp
        ref={ref}
        className={cn(
          cardVariants({
            variant,
            padding,
            radius,
            hover,
          }),
          className
        )}
        {...props}
      >
        {/* Premium Top Highlight */}
        <div
          aria-hidden
          className="
            pointer-events-none
            absolute
            inset-x-0
            top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-white/30
            to-transparent
          "
        />

        {/* Glass Gradient */}
        <div
          aria-hidden
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-60
            bg-gradient-to-br
            from-white/[0.06]
            via-transparent
            to-violet-500/[0.03]
          "
        />

        {/* Glow */}
        <div
          aria-hidden
          className="
            pointer-events-none
            absolute
            -top-24
            right-0
            h-44
            w-44
            rounded-full
            bg-violet-500/10
            blur-3xl
            transition-opacity
            duration-500
            group-hover:opacity-100
            opacity-0
          "
        />

        {/* Bottom Glow */}
        <div
          aria-hidden
          className="
            pointer-events-none
            absolute
            -bottom-20
            -left-16
            h-40
            w-40
            rounded-full
            bg-cyan-400/10
            blur-3xl
            transition-opacity
            duration-500
            group-hover:opacity-100
            opacity-0
          "
        />

        {/* Content */}
        {/* ========================================================= */}
{/* Content */}
{/* ========================================================= */}

<div
  className="
    relative
    z-10

    flex
    h-full
    min-h-full
    flex-col

    justify-between

    gap-6
  "
>
  <Slottable>{children}</Slottable>
</div>
      </Comp>
    );
  }
);

Card.displayName = "Card";

export { Card, cardVariants };