"use client";

/* =============================================================================
   Portfolio UI Library
   -----------------------------------------------------------------------------
   File: src/components/ui/Card.tsx

   A production-ready reusable Card component.

   Features
   -----------------------------------------------------------------------------
   ✓ Slot + Slottable support
   ✓ asChild support
   ✓ Multiple variants
   ✓ Padding variants
   ✓ Radius variants
   ✓ Hover animation
   ✓ Glass effect
   ✓ CVA
   ✓ ForwardRef
   ✓ Fully typed
============================================================================= */

import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const cardVariants = cva(
  [
    "relative",
    "overflow-hidden",
    "transition-all",
    "duration-300",
    "ease-out",
    "border",
    "backdrop-blur-xl",
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          "bg-slate-900/70",
          "border-white/10",
          "shadow-lg",
        ].join(" "),

        glass: [
          "bg-white/5",
          "backdrop-blur-2xl",
          "border-white/10",
          "shadow-xl",
        ].join(" "),

        elevated: [
          "bg-slate-900",
          "border-slate-800",
          "shadow-2xl",
        ].join(" "),

        outline: [
          "bg-transparent",
          "border-white/15",
        ].join(" "),
      },

      padding: {
        none: "p-0",

        sm: "p-4",

        md: "p-6",

        lg: "p-8",

        xl: "p-10",
      },

      radius: {
        none: "rounded-none",

        sm: "rounded-lg",

        md: "rounded-xl",

        lg: "rounded-2xl",

        xl: "rounded-3xl",
      },

      hover: {
        true: [
          "hover:-translate-y-1",
          "hover:border-cyan-500/30",
          "hover:shadow-cyan-500/10",
          "hover:shadow-2xl",
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
        <Slottable>{children}</Slottable>
      </Comp>
    );
  }
);

Card.displayName = "Card";

export { Card, cardVariants };