"use client";

/* =============================================================================
   Portfolio UI Library
   -----------------------------------------------------------------------------
   File: src/components/ui/Badge.tsx

   Premium reusable Badge component.

   Features
   -----------------------------------------------------------------------------
   ✓ React 19
   ✓ Next.js 16
   ✓ TypeScript
   ✓ CVA
   ✓ Glassmorphism
   ✓ Ultra Premium Hover
   ✓ Slot + Slottable
   ✓ Accessible
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

    "shrink-0",

    "whitespace-nowrap",

    "font-medium",

    "leading-none",

    "tracking-wide",

    "border",

    "backdrop-blur-2xl",

    "transition-all",

    "duration-300",

    "ease-out",

    "select-none",

    "cursor-default",

    "shadow-[0_8px_30px_rgba(0,0,0,.18)]",

    "hover:-translate-y-0.5",

    "hover:scale-[1.03]",

    "hover:shadow-[0_12px_40px_rgba(99,102,241,.18)]",
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          "border-white/10",
          "bg-white/[0.05]",
          "text-slate-200",
          "hover:border-indigo-400/30",
          "hover:bg-white/[0.08]",
        ].join(" "),

        primary: [
          "border-cyan-400/20",
          "bg-cyan-500/12",
          "text-cyan-300",
          "hover:border-cyan-400/45",
          "hover:bg-cyan-500/20",
        ].join(" "),

        secondary: [
          "border-blue-400/20",
          "bg-blue-500/12",
          "text-blue-300",
          "hover:border-blue-400/45",
          "hover:bg-blue-500/20",
        ].join(" "),

        success: [
          "border-emerald-400/20",
          "bg-emerald-500/12",
          "text-emerald-300",
          "hover:border-emerald-400/40",
          "hover:bg-emerald-500/20",
        ].join(" "),

        warning: [
          "border-amber-400/20",
          "bg-amber-500/12",
          "text-amber-300",
          "hover:border-amber-400/40",
          "hover:bg-amber-500/20",
        ].join(" "),

        danger: [
          "border-red-400/20",
          "bg-red-500/12",
          "text-red-300",
          "hover:border-red-400/40",
          "hover:bg-red-500/20",
        ].join(" "),

        outline: [
          "border-white/15",
          "bg-transparent",
          "text-slate-300",
          "hover:border-indigo-400/40",
          "hover:bg-white/[0.04]",
        ].join(" "),

        glass: [
          "border-white/10",
          "bg-gradient-to-b",
          "from-white/[0.08]",
          "to-white/[0.03]",
          "text-slate-100",
          "shadow-[inset_0_1px_0_rgba(255,255,255,.08)]",
          "hover:border-violet-400/30",
        ].join(" "),

        gradient: [
          "border-transparent",
          "bg-gradient-to-r",
          "from-indigo-500",
          "via-violet-500",
          "to-cyan-500",
          "text-white",
          "shadow-[0_10px_30px_rgba(99,102,241,.35)]",
          "hover:shadow-[0_15px_45px_rgba(99,102,241,.45)]",
        ].join(" "),
      },

      size: {
        xs: "h-5 px-2.5 text-[10px]",

        sm: "h-7 px-3 text-xs",

        md: "h-8 px-3.5 text-sm",

        lg: "h-10 px-4.5 text-sm",
      },

      radius: {
        sm: "rounded-md",

        md: "rounded-lg",

        lg: "rounded-xl",

        full: "rounded-full",
      },
    },

    defaultVariants: {
      variant: "glass",
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
        {leftIcon && (
          <span className="flex items-center justify-center">
            {leftIcon}
          </span>
        )}

        <Slottable>{children}</Slottable>

        {rightIcon && (
          <span className="flex items-center justify-center">
            {rightIcon}
          </span>
        )}
      </Comp>
    );
  }
);

Badge.displayName = "Badge";

export { Badge, badgeVariants };