"use client";

import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/* Input Variants                                                              */
/* -------------------------------------------------------------------------- */

const inputVariants = cva(
  [
    "flex h-11 w-full rounded-xl border bg-background px-3 py-2",
    "text-sm",
    "transition-all duration-200",
    "placeholder:text-muted-foreground",
    "file:border-0 file:bg-transparent file:text-sm file:font-medium",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-ring",
    "focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed",
    "disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        default:
          "border-input hover:border-primary/40",

        filled:
          "border-transparent bg-muted hover:bg-muted/80",

        ghost:
          "border-transparent bg-transparent",
      },

      state: {
        default: "",

        error:
          "border-destructive focus-visible:ring-destructive",

        success:
          "border-green-500 focus-visible:ring-green-500",
      },

      size: {
        sm: "h-9 text-sm",

        md: "h-11 text-sm",

        lg: "h-12 text-base",
      },
    },

    defaultVariants: {
      variant: "default",
      state: "default",
      size: "md",
    },
  },
);

/* -------------------------------------------------------------------------- */
/* Props                                                                       */
/* -------------------------------------------------------------------------- */

export interface InputProps
  extends Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      "size"
    >,
    VariantProps<typeof inputVariants> {
  leftIcon?: React.ReactNode;

  rightIcon?: React.ReactNode;
}

/* -------------------------------------------------------------------------- */
/* Input                                                                       */
/* -------------------------------------------------------------------------- */

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant,
      state,
      size,
      leftIcon,
      rightIcon,
      ...props
    },
    ref,
  ) => {
    return (
      <div className="relative w-full">
        {leftIcon && (
          <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-muted-foreground">
            {leftIcon}
          </div>
        )}

        <input
          ref={ref}
          className={cn(
            inputVariants({
              variant,
              state,
              size,
            }),
            leftIcon && "pl-10",
            rightIcon && "pr-10",
            className,
          )}
          {...props}
        />

        {rightIcon && (
          <div className="absolute inset-y-0 right-3 flex items-center text-muted-foreground">
            {rightIcon}
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input, inputVariants };

export default Input;