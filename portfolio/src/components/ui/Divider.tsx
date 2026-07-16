"use client";

/* =============================================================================
   Portfolio UI Library
   -----------------------------------------------------------------------------
   File: src/components/ui/Divider.tsx

   Production-ready reusable Divider component.

   Features
   -----------------------------------------------------------------------------
   ✓ React 19
   ✓ Next.js 16
   ✓ TypeScript
   ✓ Slot + Slottable support
   ✓ asChild support
   ✓ Horizontal / Vertical
   ✓ Gradient
   ✓ Dashed
   ✓ Label support
   ✓ CVA
   ✓ ForwardRef
============================================================================= */

import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const dividerVariants = cva("shrink-0", {
  variants: {
    orientation: {
      horizontal: "w-full border-t",
      vertical: "h-full border-l",
    },

    variant: {
      solid: "border-white/10",

      dashed: "border-dashed border-white/20",

      gradient: "border-transparent",

      glow: "border-cyan-500/30 shadow-[0_0_12px_rgba(6,182,212,0.35)]",
    },

    spacing: {
      none: "",

      sm: "my-2",

      md: "my-4",

      lg: "my-6",

      xl: "my-8",
    },
  },

  defaultVariants: {
    orientation: "horizontal",
    variant: "solid",
    spacing: "md",
  },
});

export interface DividerProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dividerVariants> {
  asChild?: boolean;

  label?: React.ReactNode;
}

const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  (
    {
      className,
      orientation,
      variant,
      spacing,
      label,
      asChild = false,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "div";

    if (label) {
      return (
        <div
          className={cn(
            "flex items-center gap-4",
            spacing !== "none" &&
              dividerVariants({
                spacing,
              })
                .split(" ")
                .find(Boolean),
          )}
        >
          <div
            className={cn(
              "flex-1",
              dividerVariants({
                orientation: "horizontal",
                variant,
                spacing: "none",
              }),
            )}
          />

          <span className="text-sm font-medium text-slate-400 whitespace-nowrap">
            {label}
          </span>

          <div
            className={cn(
              "flex-1",
              dividerVariants({
                orientation: "horizontal",
                variant,
                spacing: "none",
              }),
            )}
          />
        </div>
      );
    }

    return (
      <Comp
        ref={ref}
        role="separator"
        aria-orientation={orientation ?? undefined}
        className={cn(
          dividerVariants({
            orientation,
            variant,
            spacing,
          }),
          variant === "gradient" &&
            "bg-linear-to-r from-cyan-500 via-blue-500 to-violet-500 border-0 h-px",
          orientation === "vertical" &&
            variant === "gradient" &&
            "bg-linear-to-b from-cyan-500 via-blue-500 to-violet-500 w-px h-full",
          className,
        )}
        {...props}
      >
        <Slottable>{children}</Slottable>
      </Comp>
    );
  },
);

Divider.displayName = "Divider";

export { Divider, dividerVariants };
