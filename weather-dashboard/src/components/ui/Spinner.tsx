import * as React from "react";
import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * ============================================================================
 * Spinner Component
 * ============================================================================
 *
 * A reusable loading spinner built using Lucide React.
 *
 * Built with:
 * - React 19
 * - Next.js 16
 * - TypeScript
 * - Tailwind CSS v4
 * - Lucide React
 *
 * Features
 * --------
 * ✓ Multiple sizes
 * ✓ Accessible
 * ✓ Custom styling
 * ✓ Lightweight
 * ✓ Reusable
 * ✓ Tailwind Merge support
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
          className
        )}
        {...props}
      >
        <Loader2
          className={cn(
            "animate-spin text-primary",
            spinnerSizes[size]
          )}
          aria-hidden="true"
        />

        <span className="sr-only">{label}</span>
      </div>
    );
  }
);

Spinner.displayName = "Spinner";

export { Spinner };