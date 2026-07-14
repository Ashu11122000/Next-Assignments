"use client";

import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/* Badge Variants                                                              */
/* -------------------------------------------------------------------------- */

const badgeVariants = cva(
  [
    "inline-flex items-center justify-center",
    "rounded-full",
    "border",
    "px-2.5 py-1",
    "text-xs",
    "font-semibold",
    "transition-colors",
    "select-none",
    "whitespace-nowrap",
  ],
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-neutral-900 text-white dark:bg-white dark:text-neutral-900",

        secondary:
          "border-transparent bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-white",

        outline:
          "border-neutral-300 bg-transparent text-neutral-900 dark:border-neutral-700 dark:text-neutral-100",

        success:
          "border-transparent bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",

        warning:
          "border-transparent bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",

        destructive:
          "border-transparent bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",

        info:
          "border-transparent bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
      },

      size: {
        sm: "px-2 py-0.5 text-[10px]",

        md: "px-2.5 py-1 text-xs",

        lg: "px-3 py-1.5 text-sm",
      },
    },

    defaultVariants: {
      variant: "default",

      size: "md",
    },
  },
);

/* -------------------------------------------------------------------------- */
/* Badge Props                                                                 */
/* -------------------------------------------------------------------------- */

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

/* -------------------------------------------------------------------------- */
/* Badge                                                                       */
/* -------------------------------------------------------------------------- */

function Badge({
  className,
  variant,
  size,
  ...props
}: Readonly<BadgeProps>) {
  return (
    <div
      className={cn(
        badgeVariants({
          variant,
          size,
        }),
        className,
      )}
      {...props}
    />
  );
}

export { Badge, badgeVariants };

export default Badge;