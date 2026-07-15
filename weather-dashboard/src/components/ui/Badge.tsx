import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * ============================================================================
 * Badge Component
 * ============================================================================
 *
 * Premium reusable badge component for labels, weather conditions,
 * metadata, categories and status indicators.
 *
 * Features
 * --------
 * ✓ Glassmorphism inspired styling
 * ✓ Multiple variants
 * ✓ Multiple sizes
 * ✓ Accessible
 * ✓ Fully responsive
 * ✓ Type-safe variants
 * ============================================================================
 */

const badgeVariants = cva(
  [
    "inline-flex items-center justify-center gap-1.5",
    "rounded-full",
    "border",
    "font-semibold",
    "tracking-wide",
    "whitespace-nowrap",
    "select-none",
    "shrink-0",
    "backdrop-blur-md",
    "transition-all duration-300 ease-out",
    "shadow-sm",
    "hover:shadow-md",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-primary/40",
  ],
  {
    variants: {
      variant: {
        default:
          "border-primary/15 bg-primary/10 text-primary hover:bg-primary/15",

        secondary:
          "border-border/60 bg-secondary/70 text-secondary-foreground hover:bg-secondary",

        outline:
          "border-border bg-background/60 text-foreground hover:bg-muted/60",

        success:
          "border-green-500/20 bg-green-500/10 text-green-700 dark:text-green-400 hover:bg-green-500/15",

        warning:
          "border-amber-500/20 bg-amber-500/10 text-amber-700 dark:text-amber-400 hover:bg-amber-500/15",

        destructive:
          "border-red-500/20 bg-red-500/10 text-red-700 dark:text-red-400 hover:bg-red-500/15",
      },

      size: {
        sm: "h-6 px-2.5 text-[11px]",

        default: "h-7 px-3 text-xs",

        lg: "h-8 px-4 text-sm",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          badgeVariants({
            variant,
            size,
          }),
          className
        )}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";

export { Badge, badgeVariants };