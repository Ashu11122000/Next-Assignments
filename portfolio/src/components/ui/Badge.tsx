"use client";

/* =============================================================================
   Portfolio UI Library
   -----------------------------------------------------------------------------
   File: src/components/ui/Badge.tsx

   Production-ready reusable Badge component.

   Features
   -----------------------------------------------------------------------------
   ✓ Slot + Slottable support
   ✓ asChild support
   ✓ Multiple variants
   ✓ Multiple sizes
   ✓ Rounded variants
   ✓ Left & Right icons
   ✓ Accessible
   ✓ CVA
   ✓ ForwardRef
   ✓ TypeScript
============================================================================= */

import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "gap-2",
    "whitespace-nowrap",
    "font-medium",
    "transition-all",
    "duration-300",
    "select-none",
    "border",
    "backdrop-blur-xl",
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          "border-white/10",
          "bg-slate-800/70",
          "text-slate-100",
        ].join(" "),

        primary: [
          "border-cyan-500/20",
          "bg-cyan-500/15",
          "text-cyan-300",
        ].join(" "),

        secondary: [
          "border-blue-500/20",
          "bg-blue-500/15",
          "text-blue-300",
        ].join(" "),

        success: [
          "border-emerald-500/20",
          "bg-emerald-500/15",
          "text-emerald-300",
        ].join(" "),

        warning: [
          "border-amber-500/20",
          "bg-amber-500/15",
          "text-amber-300",
        ].join(" "),

        danger: [
          "border-red-500/20",
          "bg-red-500/15",
          "text-red-300",
        ].join(" "),

        outline: [
          "border-white/20",
          "bg-transparent",
          "text-slate-200",
        ].join(" "),

        glass: [
          "border-white/10",
          "bg-white/5",
          "text-slate-100",
        ].join(" "),

        gradient: [
          "border-transparent",
          "bg-gradient-to-r",
          "from-cyan-500",
          "via-blue-500",
          "to-violet-500",
          "text-white",
        ].join(" "),
      },

      size: {
        xs: "h-5 px-2 text-[10px]",

        sm: "h-6 px-2.5 text-xs",

        md: "h-7 px-3 text-sm",

        lg: "h-8 px-4 text-sm",
      },

      radius: {
        sm: "rounded-md",

        md: "rounded-lg",

        lg: "rounded-xl",

        full: "rounded-full",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "md",
      radius: "full",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean;

  leftIcon?: React.ReactNode;

  rightIcon?: React.ReactNode;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      className,
      variant,
      size,
      radius,
      asChild = false,
      leftIcon,
      rightIcon,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "span";

    return (
      <Comp
        ref={ref}
        className={cn(
          badgeVariants({
            variant,
            size,
            radius,
          }),
          className
        )}
        {...props}
      >
        {leftIcon}

        <Slottable>{children}</Slottable>

        {rightIcon}
      </Comp>
    );
  }
);

Badge.displayName = "Badge";

export { Badge, badgeVariants };