"use client";

/* =============================================================================
   Portfolio UI Library
   -----------------------------------------------------------------------------
   File: src/components/ui/GradientBorder.tsx

   Ultra Premium reusable Gradient Border wrapper.

   Features
   -----------------------------------------------------------------------------
   ✓ React 19
   ✓ Next.js 16
   ✓ TypeScript
   ✓ Slot + Slottable
   ✓ Animated Gradient
   ✓ Glassmorphism
   ✓ Glow Effect
   ✓ Premium Hover
   ✓ ForwardRef
============================================================================= */

import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const gradientBorderVariants = cva(
  [
    "group",
    "relative",
    "overflow-hidden",

    "transition-all",
    "duration-500",
    "ease-out",

    "isolate",

    "bg-[length:250%_250%]",
  ].join(" "),
  {
    variants: {
      variant: {
        primary: [
          "bg-gradient-to-r",
          "from-cyan-500",
          "via-blue-500",
          "to-violet-500",
        ].join(" "),

        accent: [
          "bg-gradient-to-r",
          "from-violet-500",
          "via-fuchsia-500",
          "to-pink-500",
        ].join(" "),

        success: [
          "bg-gradient-to-r",
          "from-emerald-500",
          "via-teal-500",
          "to-cyan-500",
        ].join(" "),

        warning: [
          "bg-gradient-to-r",
          "from-amber-400",
          "via-orange-500",
          "to-red-500",
        ].join(" "),
      },

      radius: {
        none: "rounded-none",

        sm: "rounded-xl",

        md: "rounded-2xl",

        lg: "rounded-3xl",

        xl: "rounded-[2rem]",

        full: "rounded-full",
      },

      borderSize: {
        sm: "p-px",

        md: "p-[2px]",

        lg: "p-[3px]",
      },

      glow: {
        true: "",

        false: "",
      },
    },

    compoundVariants: [
      {
        glow: true,
        variant: "primary",
        className:
          "shadow-[0_20px_60px_rgba(59,130,246,.30)]",
      },
      {
        glow: true,
        variant: "accent",
        className:
          "shadow-[0_20px_60px_rgba(168,85,247,.30)]",
      },
      {
        glow: true,
        variant: "success",
        className:
          "shadow-[0_20px_60px_rgba(16,185,129,.30)]",
      },
      {
        glow: true,
        variant: "warning",
        className:
          "shadow-[0_20px_60px_rgba(249,115,22,.30)]",
      },
    ],

    defaultVariants: {
      variant: "primary",
      radius: "lg",
      borderSize: "md",
      glow: false,
    },
  }
);

export interface GradientBorderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gradientBorderVariants> {
  asChild?: boolean;
}

const innerRadius: Record<
  NonNullable<GradientBorderProps["radius"]>,
  string
> = {
  none: "rounded-none",
  sm: "rounded-[calc(theme(borderRadius.xl)-1px)]",
  md: "rounded-[calc(theme(borderRadius.2xl)-2px)]",
  lg: "rounded-[calc(theme(borderRadius.3xl)-2px)]",
  xl: "rounded-[calc(2rem-2px)]",
  full: "rounded-full",
};

const GradientBorder = React.forwardRef<
  HTMLDivElement,
  GradientBorderProps
>(
  (
    {
      className,
      variant,
      radius,
      borderSize,
      glow,
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
          gradientBorderVariants({
            variant,
            radius,
            borderSize,
            glow,
          }),
          className
        )}
        {...props}
      >
        {/* Animated Border Glow */}
        <div
          aria-hidden
          className="
            absolute
            inset-0
            opacity-0
            blur-2xl
            transition-opacity
            duration-500
            group-hover:opacity-100
            bg-inherit
          "
        />

        {/* Inner Glass Surface */}
        <div
          className={cn(
            "relative",

            "h-full",
            "w-full",

            "overflow-hidden",

            "border",

            "border-white/8",

            "bg-slate-950/90",

            "backdrop-blur-3xl",

            "shadow-[inset_0_1px_0_rgba(255,255,255,.05)]",

            innerRadius[radius ?? "lg"]
          )}
        >
          {/* Glass Highlight */}
          <div
            aria-hidden
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-br
              from-white/[0.06]
              via-transparent
              to-white/[0.02]
            "
          />

          {/* Hover Glow */}
          <div
            aria-hidden
            className="
              pointer-events-none
              absolute
              -right-16
              -top-16
              h-40
              w-40
              rounded-full
              bg-white/10
              blur-3xl
              opacity-0
              transition-opacity
              duration-500
              group-hover:opacity-100
            "
          />

          <div className="relative z-10 h-full w-full">
            <Slottable>{children}</Slottable>
          </div>
        </div>
      </Comp>
    );
  }
);

GradientBorder.displayName = "GradientBorder";

export {
  GradientBorder,
  gradientBorderVariants,
};