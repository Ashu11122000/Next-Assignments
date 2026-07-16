"use client";

/* =============================================================================
   Portfolio UI Library
   -----------------------------------------------------------------------------
   File: src/components/ui/GradientBorder.tsx

   Production-ready reusable Gradient Border wrapper.

   Features
   -----------------------------------------------------------------------------
   ✓ React 19
   ✓ Next.js 16
   ✓ TypeScript
   ✓ Slot + Slottable support
   ✓ asChild support
   ✓ Gradient variants
   ✓ Glow effect
   ✓ Radius variants
   ✓ Border thickness
   ✓ ForwardRef
============================================================================= */

import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const gradientBorderVariants = cva(
  "relative overflow-hidden transition-all duration-300",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500",

        accent:
          "bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500",

        success:
          "bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500",

        warning:
          "bg-gradient-to-r from-amber-400 via-orange-500 to-red-500",
      },

      radius: {
        none: "rounded-none",

        sm: "rounded-lg",

        md: "rounded-xl",

        lg: "rounded-2xl",

        xl: "rounded-3xl",

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
          "shadow-[0_0_40px_rgba(6,182,212,0.30)]",
      },
      {
        glow: true,
        variant: "accent",
        className:
          "shadow-[0_0_40px_rgba(139,92,246,0.30)]",
      },
      {
        glow: true,
        variant: "success",
        className:
          "shadow-[0_0_35px_rgba(16,185,129,0.30)]",
      },
      {
        glow: true,
        variant: "warning",
        className:
          "shadow-[0_0_35px_rgba(245,158,11,0.30)]",
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
        <div
          className={cn(
            "h-full w-full bg-slate-950",
            {
              "rounded-lg": radius === "sm",
              "rounded-xl": radius === "md",
              "rounded-2xl": radius === "lg",
              "rounded-3xl": radius === "xl",
              "rounded-full": radius === "full",
            }
          )}
        >
          <Slottable>{children}</Slottable>
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