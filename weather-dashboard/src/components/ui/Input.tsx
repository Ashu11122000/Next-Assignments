import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * ============================================================================
 * Input Component
 * ============================================================================
 *
 * A reusable, accessible input component.
 *
 * Built with:
 * - React 19
 * - Next.js 16
 * - TypeScript
 * - Tailwind CSS v4
 *
 * Features
 * --------
 * ✓ Ref forwarding
 * ✓ Disabled state
 * ✓ Invalid state
 * ✓ File input support
 * ✓ Search input support
 * ✓ Accessible
 * ✓ Tailwind Merge support
 * ============================================================================
 */

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", error = false, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        data-slot="input"
        aria-invalid={error}
        className={cn(
          "flex h-10 w-full rounded-xl border border-default bg-background px-3 py-2 text-sm text-foreground shadow-sm transition-colors",
          "placeholder:text-muted",
          "file:border-0 file:bg-transparent file:text-sm file:font-medium",
          "focus-visible:outline-none",
          "focus-visible:ring-2",
          "focus-visible:ring-ring",
          "focus-visible:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50",
          error &&
            "border-red-500 focus-visible:ring-red-500",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };