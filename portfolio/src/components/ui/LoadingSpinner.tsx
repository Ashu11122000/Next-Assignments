"use client";

/* =============================================================================
   Portfolio UI Library
   -----------------------------------------------------------------------------
   File: src/components/ui/LoadingSpinner.tsx

   Production-ready reusable loading spinner.

   Features
   -----------------------------------------------------------------------------
   ✓ React 19
   ✓ Next.js 16
   ✓ TypeScript
   ✓ CVA Variants
   ✓ Multiple sizes
   ✓ Multiple colors
   ✓ Accessible
   ✓ Optional loading text
   ✓ ForwardRef
============================================================================= */

import * as React from "react";
import { Loader2 } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const spinnerVariants = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "gap-3",
  ].join(" "),
  {
    variants: {
      size: {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
        xl: "text-xl",
      },

      color: {
        default: "text-slate-300",
        primary: "text-cyan-400",
        secondary: "text-blue-400",
        success: "text-emerald-400",
        warning: "text-amber-400",
        danger: "text-red-400",
        white: "text-white",
      },
    },

    defaultVariants: {
      size: "md",
      color: "primary",
    },
  }
);

const iconSizes = {
  xs: 14,
  sm: 18,
  md: 22,
  lg: 28,
  xl: 36,
} as const;

export interface LoadingSpinnerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color">,
    VariantProps<typeof spinnerVariants> {
  text?: string;

  fullScreen?: boolean;
}

const LoadingSpinner = React.forwardRef<
  HTMLDivElement,
  LoadingSpinnerProps
>(
  (
    {
      className,
      size = "md",
      color,
      text,
      fullScreen = false,
      ...props
    },
    ref
  ) => {
    const spinSize = size as keyof typeof iconSizes;
    return (
      <div
        ref={ref}
        role="status"
        aria-live="polite"
        aria-busy="true"
        className={cn(
          fullScreen &&
            "fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-md",
          spinnerVariants({
            size,          
            color,
          }),
          className
        )}
        {...props}
      >
        <Loader2
          className="animate-spin shrink-0"
          size={iconSizes[spinSize]}
        />

        {text && (
          <span className="font-medium">
            {text}
          </span>
        )}

        <span className="sr-only">
          Loading
        </span>
      </div>
    );
  }
);

LoadingSpinner.displayName = "LoadingSpinner";

export { LoadingSpinner };