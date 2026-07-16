"use client";

/* =============================================================================
   Portfolio UI Library
   -----------------------------------------------------------------------------
   File: src/components/ui/Input.tsx

   Production-ready reusable Input component.

   Features
   -----------------------------------------------------------------------------
   ✓ Slot + Slottable support
   ✓ asChild support
   ✓ Left & Right icons
   ✓ Error & Success states
   ✓ Multiple sizes
   ✓ Glassmorphism styling
   ✓ Accessible
   ✓ CVA
   ✓ ForwardRef
   ✓ TypeScript
============================================================================= */

import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const inputVariants = cva(
  [
    "flex",
    "items-center",
    "gap-3",
    "w-full",
    "rounded-xl",
    "border",
    "bg-slate-900/60",
    "backdrop-blur-xl",
    "transition-all",
    "duration-300",
    "focus-within:ring-2",
    "focus-within:ring-cyan-500/30",
    "focus-within:border-cyan-500/40",
  ].join(" "),
  {
    variants: {
      variant: {
        default: "border-white/10",

        glass:
          "border-white/10 bg-white/5 backdrop-blur-2xl",

        outline:
          "border-white/20 bg-transparent",

        filled:
          "border-transparent bg-slate-800",
      },

      size: {
        sm: "h-10 px-3",

        md: "h-12 px-4",

        lg: "h-14 px-5",
      },

      state: {
        default: "",

        error:
          "border-red-500 focus-within:ring-red-500/25",

        success:
          "border-emerald-500 focus-within:ring-emerald-500/25",
      },
    },

    defaultVariants: {
      variant: "glass",
      size: "md",
      state: "default",
    },
  }
);

export interface InputProps
  extends Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      "size"
    >,
    VariantProps<typeof inputVariants> {
  asChild?: boolean;

  leftIcon?: React.ReactNode;

  rightIcon?: React.ReactNode;

  containerClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      containerClassName,
      variant,
      size,
      state,
      leftIcon,
      rightIcon,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "input";

    return (
      <div
        className={cn(
          inputVariants({
            variant,
            size,
            state,
          }),
          containerClassName
        )}
      >
        {leftIcon && (
          <span className="shrink-0 text-slate-400">
            {leftIcon}
          </span>
        )}

        <Comp
          ref={ref}
          className={cn(
            "w-full",
            "bg-transparent",
            "outline-none",
            "border-none",
            "placeholder:text-slate-500",
            "text-slate-100",
            "disabled:cursor-not-allowed",
            "disabled:opacity-50",
            className
          )}
          {...(asChild ? {} : props)}
        >
          {asChild ? <Slottable>{props.children}</Slottable> : null}
        </Comp>

        {rightIcon && (
          <span className="shrink-0 text-slate-400">
            {rightIcon}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input, inputVariants };