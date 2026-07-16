"use client";

/* =============================================================================
   Portfolio UI Library
   -----------------------------------------------------------------------------
   File: src/components/ui/Button.tsx

   A production-ready reusable button component built for Next.js 16,
   React 19, TypeScript, Tailwind CSS and CVA.

   Features
   -----------------------------------------------------------------------------
   ✓ Slot + Slottable support
   ✓ asChild support
   ✓ Loading state
   ✓ Left icon
   ✓ Right icon
   ✓ Multiple variants
   ✓ Multiple sizes
   ✓ Accessible
   ✓ ForwardRef
   ✓ Fully typed
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
    "gap-2",
    "overflow-hidden",
    "rounded-xl",
    "font-medium",
    "transition-all",
    "duration-300",
    "outline-none",
    "select-none",
    "whitespace-nowrap",
    "cursor-pointer",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
    "focus-visible:ring-2",
    "focus-visible:ring-cyan-500/40",
    "focus-visible:ring-offset-2",
    "focus-visible:ring-offset-slate-950",
  ].join(" "),
  {
    variants: {
      variant: {
        primary:
          "bg-cyan-500 text-white hover:bg-cyan-400 active:bg-cyan-600",

        secondary:
          "bg-slate-800 text-slate-100 hover:bg-slate-700",

        outline:
          "border border-white/15 bg-transparent hover:bg-white/5",

        ghost:
          "bg-transparent hover:bg-white/5",

        gradient:
          "bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 text-white hover:brightness-110",

        destructive:
          "bg-red-500 text-white hover:bg-red-600",
      },

      size: {
        sm: "h-9 px-3 text-sm",

        md: "h-11 px-5 text-sm",

        lg: "h-12 px-6 text-base",

        xl: "h-14 px-8 text-lg",

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
        className={cn(buttonVariants({ variant, size }), className)}
        disabled={loading || disabled}
        {...props}
      >
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin shrink-0" />
        ) : (
          leftIcon
        )}

        <Slottable>{children}</Slottable>

        {!loading && rightIcon}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };