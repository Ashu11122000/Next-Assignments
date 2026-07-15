import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * ============================================================================
 * Badge Component
 * ============================================================================
 *
 * A reusable badge component for labels, status indicators,
 * weather conditions, categories, and metadata.
 *
 * Built with:
 * - React 19
 * - Next.js 16
 * - TypeScript
 * - Tailwind CSS v4
 * - class-variance-authority
 *
 * Features
 * --------
 * ✓ Multiple variants
 * ✓ Multiple sizes
 * ✓ Accessible
 * ✓ Tailwind Merge support
 * ✓ Type-safe variants
 * ============================================================================
 */

const badgeVariants = cva(
  [
    "inline-flex items-center justify-center",
    "rounded-full",
    "border",
    "font-medium",
    "whitespace-nowrap",
    "transition-colors",
    "select-none",
    "shrink-0",
  ],
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground",

        secondary:
          "border-transparent bg-secondary text-secondary-foreground",

        outline:
          "border-default bg-transparent text-foreground",

        success:
          "border-transparent bg-green-600 text-white",

        warning:
          "border-transparent bg-amber-500 text-black",

        destructive:
          "border-transparent bg-red-600 text-white",
      },

      size: {
        sm: "px-2 py-0.5 text-xs",

        default: "px-2.5 py-1 text-xs",

        lg: "px-3 py-1.5 text-sm",
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
  (
    {
      className,
      variant,
      size,
      ...props
    },
    ref
  ) => {
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