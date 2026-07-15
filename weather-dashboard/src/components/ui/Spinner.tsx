import * as React from "react";
import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * ============================================================================
 * Spinner Component
 * ============================================================================
 *
 * Premium reusable loading spinner.
 *
 * Features
 * --------
 * ✓ Lightweight
 * ✓ Accessible
 * ✓ Responsive
 * ✓ Multiple sizes
 * ✓ Smooth animation
 * ============================================================================
 */

export interface SpinnerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "default" | "lg" | "xl";
  label?: string;
}

const spinnerSizes = {
  sm: "size-4",
  default: "size-5",
  lg: "size-6",
  xl: "size-8",
} as const;

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  (
    {
      className,
      size = "default",
      label = "Loading...",
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        role="status"
        aria-live="polite"
        aria-label={label}
        className={cn(
          "inline-flex items-center justify-center",
          "select-none",
          className
        )}
        {...props}
      >
        <Loader2
          className={cn(
            "animate-spin",
            "text-primary",
            "opacity-90",
            "transition-colors duration-300",
            spinnerSizes[size]
          )}
          strokeWidth={2.25}
          aria-hidden="true"
        />

        <span className="sr-only">{label}</span>
      </div>
    );
  }
);

Spinner.displayName = "Spinner";

export { Spinner };