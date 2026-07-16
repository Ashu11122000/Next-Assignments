"use client";

/* =============================================================================
   Portfolio UI Library
   -----------------------------------------------------------------------------
   File: src/components/ui/Button.tsx

   Premium reusable Button component.

   Features
   -----------------------------------------------------------------------------
   ✓ React 19
   ✓ Next.js 16
   ✓ TypeScript
   ✓ CVA
   ✓ Slot + Slottable
   ✓ Loading State
   ✓ Glassmorphism
   ✓ Premium Hover
   ✓ Accessible
============================================================================= */

import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "group",
    "relative",

    "inline-flex",
    "items-center",
    "justify-center",
    "gap-2.5",

    "overflow-hidden",

    "rounded-2xl",

    "font-medium",
    "tracking-wide",

    "transition-all",
    "duration-300",
    "ease-out",

    "outline-none",

    "whitespace-nowrap",

    "select-none",

    "cursor-pointer",

    "border",

    "backdrop-blur-xl",

    "active:scale-[0.98]",

    "hover:-translate-y-1",

    "disabled:pointer-events-none",
    "disabled:opacity-50",

    "focus-visible:ring-2",
    "focus-visible:ring-violet-500/40",
    "focus-visible:ring-offset-2",
    "focus-visible:ring-offset-slate-950",
  ].join(" "),
  {
    variants: {
      variant: {
        primary: [
          "border-cyan-400/20",
          "bg-cyan-500",
          "text-white",

          "shadow-[0_10px_35px_rgba(6,182,212,.30)]",

          "hover:bg-cyan-400",

          "hover:border-cyan-300/40",

          "hover:shadow-[0_18px_50px_rgba(6,182,212,.45)]",
        ].join(" "),

        secondary: [
          "border-white/10",

          "bg-slate-900/70",

          "text-slate-100",

          "backdrop-blur-2xl",

          "hover:bg-slate-800/80",

          "hover:border-violet-400/30",

          "hover:shadow-[0_15px_45px_rgba(99,102,241,.18)]",
        ].join(" "),

        outline: [
          "border-white/15",

          "bg-white/[0.02]",

          "text-slate-100",

          "backdrop-blur-xl",

          "hover:bg-white/[0.06]",

          "hover:border-violet-400/30",

          "hover:shadow-[0_15px_45px_rgba(99,102,241,.12)]",
        ].join(" "),

        ghost: [
          "border-transparent",

          "bg-transparent",

          "text-slate-200",

          "hover:bg-white/[0.05]",

          "hover:border-white/10",
        ].join(" "),

        gradient: [
          "border-transparent",

          "bg-gradient-to-r",

          "from-cyan-500",

          "via-blue-500",

          "to-violet-500",

          "text-white",

          "shadow-[0_15px_45px_rgba(99,102,241,.35)]",

          "hover:brightness-110",

          "hover:shadow-[0_22px_60px_rgba(99,102,241,.50)]",
        ].join(" "),

        destructive: [
          "border-red-500/30",

          "bg-red-500",

          "text-white",

          "hover:bg-red-600",

          "hover:shadow-[0_15px_40px_rgba(239,68,68,.35)]",
        ].join(" "),
      },

      size: {
        sm: "h-10 px-4 text-sm",

        md: "h-11 px-6 text-sm",

        lg: "h-12 px-7 text-base",

        xl: "h-14 px-9 text-lg",

        icon: "h-11 w-11 p-0",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ComponentPropsWithoutRef<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;

  loading?: boolean;

  leftIcon?: React.ReactNode;

  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading = false,
      leftIcon,
      rightIcon,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(
          buttonVariants({
            variant,
            size,
          }),
          className
        )}
        disabled={loading || disabled}
        {...props}
      >
        {/* Premium Shine */}
        <span
          aria-hidden
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
        >
          <span
            className="
              absolute
              -left-20
              top-0
              h-full
              w-12
              rotate-12
              bg-white/20
              blur-xl
              transition-all
              duration-700
              group-hover:left-[120%]
            "
          />
        </span>

        {loading ? (
          <Loader2 className="h-4 w-4 shrink-0 animate-spin" />
        ) : (
          leftIcon && (
            <span className="flex items-center justify-center">
              {leftIcon}
            </span>
          )
        )}

        <Slottable>{children}</Slottable>

        {!loading && rightIcon && (
          <span
            className="
              flex
              items-center
              justify-center
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          >
            {rightIcon}
          </span>
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };