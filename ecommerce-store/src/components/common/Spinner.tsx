"use client";

import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/* Spinner Variants                                                            */
/* -------------------------------------------------------------------------- */

const spinnerVariants = cva(
  [
    "inline-block",
    "animate-spin",
    "rounded-full",
    "border-2",
    "border-current",
    "border-t-transparent",
  ],
  {
    variants: {
      size: {
        xs: "h-3 w-3",
        sm: "h-4 w-4",
        md: "h-6 w-6",
        lg: "h-8 w-8",
        xl: "h-12 w-12",
      },

      variant: {
        default: "text-primary",

        muted: "text-muted-foreground",

        white: "text-white",

        destructive: "text-destructive",
      },
    },

    defaultVariants: {
      size: "md",
      variant: "default",
    },
  },
);

/* -------------------------------------------------------------------------- */
/* Props                                                                       */
/* -------------------------------------------------------------------------- */

export interface SpinnerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinnerVariants> {
  label?: string;
}

/* -------------------------------------------------------------------------- */
/* Component                                                                   */
/* -------------------------------------------------------------------------- */

function Spinner({
  className,
  size,
  variant,
  label = "Loading...",
  ...props
}: Readonly<SpinnerProps>) {
  return (
    <div
      aria-busy="true"
      aria-label={label}
      role="status"
      className={cn(
        "inline-flex items-center justify-center",
        className,
      )}
      {...props}
    >
      <span
        className={spinnerVariants({
          size,
          variant,
        })}
      />

      <span className="sr-only">{label}</span>
    </div>
  );
}

export default Spinner;