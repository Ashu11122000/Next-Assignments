"use client";

/* =============================================================================
   Portfolio UI Library
   -----------------------------------------------------------------------------
   File: src/components/ui/LoadingSpinner.tsx

   Ultra Premium reusable Loading Spinner.

   Features
   -----------------------------------------------------------------------------
   ✓ React 19
   ✓ Next.js 16
   ✓ TypeScript
   ✓ CVA
   ✓ Glassmorphism
   ✓ Premium Overlay
   ✓ Loading Text
   ✓ Accessible
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
    "gap-4",

    "transition-all",
    "duration-300",
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
  xs: 16,
  sm: 20,
  md: 26,
  lg: 34,
  xl: 42,
} as const;

export interface LoadingSpinnerProps
  extends Omit<
      React.HTMLAttributes<HTMLDivElement>,
      "color"
    >,
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
            [
              "fixed",
              "inset-0",
              "z-[999]",

              "flex",
              "items-center",
              "justify-center",

              "bg-slate-950/70",

              "backdrop-blur-xl",
            ].join(" "),

          spinnerVariants({
            size,
            color,
          }),

          className
        )}
        {...props}
      >
        <div
          className="
            flex
            items-center
            gap-4

            rounded-2xl

            border
            border-white/10

            bg-white/[0.05]

            px-6
            py-4

            backdrop-blur-2xl

            shadow-[0_20px_60px_rgba(15,23,42,.35)]
          "
        >
          {/* Spinner */}
          <div className="relative flex items-center justify-center">
            {/* Glow */}
            <div
              className="
                absolute
                inset-0

                rounded-full

                bg-cyan-400/20

                blur-xl
              "
            />

            <Loader2
              className="
                relative

                shrink-0

                animate-spin

                text-cyan-400
              "
              size={iconSizes[spinSize]}
            />
          </div>

          {text && (
            <span
              className="
                font-medium

                tracking-wide

                text-slate-200
              "
            >
              {text}
            </span>
          )}

          <span className="sr-only">
            Loading
          </span>
        </div>
      </div>
    );
  }
);

LoadingSpinner.displayName = "LoadingSpinner";

export { LoadingSpinner };