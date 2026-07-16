"use client";

/* =============================================================================
   Portfolio UI Library
   -----------------------------------------------------------------------------
   File: src/components/common/ScrollIndicator.tsx

   Production-ready reusable Scroll Indicator.

   Features
   -----------------------------------------------------------------------------
   ✓ React 19
   ✓ Next.js 16
   ✓ TypeScript
   ✓ Framer Motion
   ✓ Accessible
   ✓ Smooth scrolling
   ✓ Configurable target section
   ✓ Optional label
============================================================================= */

import * as React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const scrollIndicatorVariants = cva(
  "inline-flex flex-col items-center justify-center gap-3 transition-all duration-300",
  {
    variants: {
      size: {
        sm: "scale-90",
        md: "scale-100",
        lg: "scale-110",
      },

      variant: {
        default: "text-slate-400",
        primary: "text-cyan-400",
        white: "text-white",
      },
    },

    defaultVariants: {
      size: "md",
      variant: "primary",
    },
  }
);

export interface ScrollIndicatorProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof scrollIndicatorVariants> {
  /**
   * ID of the section to scroll to.
   */
  targetId?: string;

  /**
   * Accessible label.
   */
  label?: string;

  /**
   * Show text label below the indicator.
   */
  showLabel?: boolean;
}

export function ScrollIndicator({
  className,
  size,
  variant,
  targetId = "about",
  label = "Scroll Down",
  showLabel = true,
  onClick,
  ...props
}: ScrollIndicatorProps) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);

    if (event.defaultPrevented) return;

    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <button
      type="button"
      aria-label={label}
      onClick={handleClick}
      className={cn(
        scrollIndicatorVariants({
          size,
          variant,
        }),
        className
      )}
      {...props}
    >
      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex h-14 w-8 items-start justify-center rounded-full border border-current p-1"
      >
        <motion.div
          animate={{
            y: [0, 18, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-2 w-2 rounded-full bg-current"
        />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 6, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.2,
        }}
      >
        <ChevronDown className="h-5 w-5" />
      </motion.div>

      {showLabel && (
        <span className="text-xs font-medium uppercase tracking-[0.2em]">
          {label}
        </span>
      )}
    </button>
  );
}

export default ScrollIndicator;