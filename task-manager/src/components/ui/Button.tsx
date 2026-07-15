"use client";

/**
 * ============================================================================
 * Button Component
 * ============================================================================
 *
 * A reusable button component built with:
 * - class-variance-authority (CVA)
 * - Tailwind CSS
 * - TypeScript
 *
 * Features:
 * - Multiple variants
 * - Multiple sizes
 * - Loading state
 * - Disabled state
 * - Full accessibility support
 * - Supports left/right icons
 * ============================================================================
 */

import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { Loader2 } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/* Button Variants                                                            */
/* -------------------------------------------------------------------------- */

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "rounded-lg font-medium",
    "transition-all duration-200",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-blue-500",
    "focus-visible:ring-offset-2",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
    "[&_svg]:pointer-events-none",
    "[&_svg]:h-4",
    "[&_svg]:w-4",
    "cursor-pointer",
  ].join(" "),
  {
    variants: {
      variant: {
        default:
          "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800",

        secondary:
          "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700",

        outline:
          "border border-slate-300 bg-white hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800",

        ghost:
          "hover:bg-slate-100 dark:hover:bg-slate-800",

        destructive:
          "bg-red-600 text-white hover:bg-red-700 active:bg-red-800",
      },

      size: {
        sm: "h-9 px-3 text-sm",

        default: "h-10 px-4 py-2",

        lg: "h-11 px-6 text-base",

        icon: "h-10 w-10 p-0",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

/* -------------------------------------------------------------------------- */
/* Button Props                                                               */
/* -------------------------------------------------------------------------- */

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * Render the child directly using Radix Slot.
   */
  asChild?: boolean;

  /**
   * Shows a loading spinner and disables the button.
   */
  loading?: boolean;

  /**
   * Optional icon displayed before the button content.
   */
  leftIcon?: React.ReactNode;

  /**
   * Optional icon displayed after the button content.
   */
  rightIcon?: React.ReactNode;
}

/* -------------------------------------------------------------------------- */
/* Button Component                                                           */
/* -------------------------------------------------------------------------- */

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading = false,
      disabled,
      leftIcon,
      rightIcon,
      children,
      ...props
    },
    ref
  ) => {
    const Component = asChild ? Slot : "button";

    return (
  <Component
    ref={ref}
    className={cn(buttonVariants({ variant, size }), className)}
    disabled={loading || disabled}
    aria-disabled={loading || disabled}
    {...props}
  >
    {loading ? (
      <Loader2 className="h-4 w-4 animate-spin" />
    ) : (
      leftIcon
    )}

    <Slottable>{children}</Slottable>

    {!loading && rightIcon}
  </Component>
);
  }
);

Button.displayName = "Button";

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

export { Button, buttonVariants };