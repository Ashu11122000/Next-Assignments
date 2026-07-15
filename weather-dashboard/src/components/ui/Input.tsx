import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * ============================================================================
 * Input Component
 * ============================================================================
 *
 * Premium reusable input component.
 *
 * Features
 * --------
 * ✓ Glassmorphism inspired
 * ✓ Better spacing
 * ✓ Smooth focus animations
 * ✓ Accessible
 * ✓ Search & file input support
 * ✓ Responsive
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
          [
            // Layout
            "flex h-12 w-full",
            "rounded-2xl",

            // Spacing
            "px-4 py-3",

            // Typography
            "text-sm font-medium tracking-wide",
            "text-foreground",
            "placeholder:text-muted-foreground",

            // Glass
            "border border-border/60",
            "bg-background/80",
            "backdrop-blur-xl",

            // Shadow
            "shadow-sm",

            // Animation
            "transition-all duration-300 ease-out",

            // Focus
            "focus-visible:outline-none",
            "focus-visible:ring-2",
            "focus-visible:ring-primary/30",
            "focus-visible:border-primary/40",
            "focus-visible:shadow-lg",

            // Disabled
            "disabled:cursor-not-allowed",
            "disabled:opacity-50",

            // File input
            "file:border-0",
            "file:bg-transparent",
            "file:text-sm",
            "file:font-semibold",
            "file:text-foreground",
          ].join(" "),

          error &&
            [
              "border-red-500/60",
              "focus-visible:border-red-500",
              "focus-visible:ring-red-500/30",
            ].join(" "),

          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };