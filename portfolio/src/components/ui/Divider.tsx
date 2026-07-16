"use client";

/* =============================================================================
   Portfolio UI Library
   -----------------------------------------------------------------------------
   File: src/components/ui/Divider.tsx

   Ultra Premium reusable Divider component.

   Features
   -----------------------------------------------------------------------------
   ✓ React 19
   ✓ Next.js 16
   ✓ TypeScript
   ✓ Slot + Slottable
   ✓ CVA
   ✓ Premium Gradient
   ✓ Label Support
   ✓ Glass Styling
============================================================================= */

import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const dividerVariants = cva("relative shrink-0", {
  variants: {
    orientation: {
      horizontal: "w-full border-t",

      vertical: "h-full border-l",
    },

    variant: {
      solid: [
        "border-white/10",
      ].join(" "),

      dashed: [
        "border-dashed",
        "border-white/15",
      ].join(" "),

      gradient: "border-transparent",

      glow: [
        "border-violet-400/25",
        "shadow-[0_0_18px_rgba(99,102,241,.22)]",
      ].join(" "),
    },

    spacing: {
      none: "",

      sm: "my-3",

      md: "my-6",

      lg: "my-8",

      xl: "my-12",
    },
  },

  defaultVariants: {
    orientation: "horizontal",
    variant: "solid",
    spacing: "md",
  },
});

export interface DividerProps
  extends React.HTMLAttributes<HTMLDivElement>,
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
    ref
  ) => {
    const Comp = asChild ? Slot : "div";

    if (label) {
      return (
        <div
          className={cn(
            "flex w-full items-center gap-5",
            spacing !== "none" &&
              dividerVariants({
                spacing,
              })
                .split(" ")
                .find(Boolean)
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
              variant === "gradient" &&
                "h-px border-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            )}
          />

          <span
            className="
              shrink-0
              rounded-full
              border
              border-white/10
              bg-white/[0.04]
              px-4
              py-1.5
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              text-slate-400
              backdrop-blur-xl
            "
          >
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
              variant === "gradient" &&
                "h-px border-0 bg-gradient-to-r from-transparent via-violet-400 to-transparent"
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
            orientation === "horizontal" &&
            [
              "h-px",
              "border-0",
              "bg-gradient-to-r",
              "from-transparent",
              "via-cyan-400",
              "to-transparent",
            ].join(" "),

          variant === "gradient" &&
            orientation === "vertical" &&
            [
              "w-px",
              "border-0",
              "bg-gradient-to-b",
              "from-transparent",
              "via-cyan-400",
              "to-transparent",
            ].join(" "),

          className
        )}
        {...props}
      >
        <Slottable>{children}</Slottable>
      </Comp>
    );
  }
);

Divider.displayName = "Divider";

export { Divider, dividerVariants };