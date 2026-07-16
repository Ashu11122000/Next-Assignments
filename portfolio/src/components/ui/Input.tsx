"use client";

/* =============================================================================
   Portfolio UI Library
   -----------------------------------------------------------------------------
   File: src/components/ui/Input.tsx

   Ultra Premium reusable Input component.

   Features
   -----------------------------------------------------------------------------
   ✓ React 19
   ✓ Next.js 16
   ✓ TypeScript
   ✓ CVA
   ✓ Glassmorphism
   ✓ Premium Focus
   ✓ Slot + Slottable
   ✓ Accessible
============================================================================= */

import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const inputVariants = cva(
  [
    "group",
    "relative",

    "flex",
    "w-full",
    "items-center",
    "gap-3",

    "overflow-hidden",

    "rounded-2xl",

    "border",

    "backdrop-blur-2xl",

    "transition-all",
    "duration-300",
    "ease-out",

    "shadow-[0_10px_30px_rgba(15,23,42,.18)]",

    "focus-within:-translate-y-0.5",
    "focus-within:shadow-[0_18px_45px_rgba(99,102,241,.18)]",

    "focus-within:ring-2",
    "focus-within:ring-violet-500/25",
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          "border-white/10",
          "bg-slate-900/70",
        ].join(" "),

        glass: [
          "border-white/10",
          "bg-white/[0.05]",
          "backdrop-blur-3xl",
          "shadow-[inset_0_1px_0_rgba(255,255,255,.05)]",
        ].join(" "),

        outline: [
          "border-white/15",
          "bg-transparent",
        ].join(" "),

        filled: [
          "border-transparent",
          "bg-slate-800/90",
        ].join(" "),
      },

      size: {
        sm: "h-11 px-4",

        md: "h-13 min-h-[3.25rem] px-5",

        lg: "h-15 min-h-[3.75rem] px-6",
      },

      state: {
        default: "",

        error: [
          "border-red-500/50",
          "focus-within:border-red-500",
          "focus-within:ring-red-500/25",
        ].join(" "),

        success: [
          "border-emerald-500/50",
          "focus-within:border-emerald-500",
          "focus-within:ring-emerald-500/25",
        ].join(" "),
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
        {/* Glass Highlight */}
        <div
          aria-hidden
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-br
            from-white/[0.05]
            via-transparent
            to-transparent
          "
        />

        {leftIcon && (
          <span
            className="
              relative
              z-10
              flex
              shrink-0
              items-center
              justify-center
              text-slate-400
              transition-colors
              duration-300
              group-focus-within:text-violet-300
            "
          >
            {leftIcon}
          </span>
        )}

        <Comp
          ref={ref}
          className={cn(
            "relative",
            "z-10",

            "w-full",

            "border-none",
            "bg-transparent",
            "outline-none",

            "text-[15px]",
            "font-medium",
            "text-slate-100",

            "placeholder:text-slate-500",

            "disabled:cursor-not-allowed",
            "disabled:opacity-50",

            className
          )}
          {...(asChild ? {} : props)}
        >
          {asChild ? (
            <Slottable>{props.children}</Slottable>
          ) : null}
        </Comp>

        {rightIcon && (
          <span
            className="
              relative
              z-10
              flex
              shrink-0
              items-center
              justify-center
              text-slate-400
              transition-colors
              duration-300
              group-focus-within:text-violet-300
            "
          >
            {rightIcon}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input, inputVariants };