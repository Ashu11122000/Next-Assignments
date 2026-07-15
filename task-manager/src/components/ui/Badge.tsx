/**
 * ============================================================================
 * Badge Component
 * ============================================================================
 *
 * A reusable badge component built with:
 * - class-variance-authority (CVA)
 * - Tailwind CSS
 * - TypeScript
 *
 * Features:
 * - Multiple variants
 * - Multiple sizes
 * - Status badges
 * - Fully reusable
 * - Accessible
 * ============================================================================
 */

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/* Badge Variants                                                             */
/* -------------------------------------------------------------------------- */

const badgeVariants = cva(
  [
    "inline-flex items-center justify-center",
    "rounded-full",
    "font-medium",
    "transition-colors",
    "border",
    "whitespace-nowrap",
    "select-none",
  ].join(" "),
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900",

        secondary:
          "border-transparent bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-100",

        outline:
          "border-slate-300 bg-transparent text-slate-900 dark:border-slate-700 dark:text-slate-100",

        success:
          "border-transparent bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300",

        warning:
          "border-transparent bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300",

        destructive:
          "border-transparent bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300",

        pending:
          "border-transparent bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",

        completed:
          "border-transparent bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
      },

      size: {
        sm: "px-2 py-0.5 text-xs",

        default: "px-2.5 py-1 text-sm",

        lg: "px-3 py-1.5 text-base",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

/* -------------------------------------------------------------------------- */
/* Badge Props                                                                */
/* -------------------------------------------------------------------------- */

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

/* -------------------------------------------------------------------------- */
/* Badge Component                                                            */
/* -------------------------------------------------------------------------- */

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, ...props }, ref) => (
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
  )
);

Badge.displayName = "Badge";

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

export { Badge, badgeVariants };