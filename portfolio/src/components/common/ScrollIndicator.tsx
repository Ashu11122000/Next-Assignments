"use client";

/* =============================================================================
   Portfolio UI Library
   -----------------------------------------------------------------------------
   File: src/components/common/ScrollIndicator.tsx

   Ultra Premium Scroll Indicator.

   Features
   -----------------------------------------------------------------------------
   ✓ React 19
   ✓ Next.js 16
   ✓ TypeScript
   ✓ Framer Motion
   ✓ Glassmorphism
   ✓ Premium Animation
   ✓ Accessible
============================================================================= */

import * as React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const scrollIndicatorVariants = cva(
  [
    "inline-flex",
    "flex-col",
    "items-center",
    "justify-center",

    "gap-4",

    "transition-all",

    "duration-300",

    "ease-out",

    "group",
  ].join(" "),
  {
    variants: {
      size: {
        sm: "scale-90",

        md: "scale-100",

        lg: "scale-110",
      },

      variant: {
        default: "text-slate-400",

        primary: "text-cyan-300",

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
  targetId?: string;

  label?: string;

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
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
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
      {/* Mouse */}

      <motion.div
        whileHover={{
          scale: 1.05,
        }}
        className="
          relative

          flex

          h-16
          w-9

          items-start
          justify-center

          overflow-hidden

          rounded-full

          border

          border-white/15

          bg-white/[0.04]

          backdrop-blur-xl

          shadow-[0_10px_35px_rgba(15,23,42,.20)]
        "
      >
        {/* Top highlight */}

        <div
          className="
            absolute

            inset-x-2

            top-0

            h-px

            bg-gradient-to-r

            from-transparent

            via-white/30

            to-transparent
          "
        />

        {/* Animated Dot */}

        <motion.div
          animate={{
            y: [0, 22, 0],

            opacity: [1, 0.4, 1],
          }}
          transition={{
            duration: 2,

            repeat: Infinity,

            ease: "easeInOut",
          }}
          className="
            mt-2

            h-2.5
            w-2.5

            rounded-full

            bg-cyan-300

            shadow-[0_0_15px_rgba(34,211,238,.6)]
          "
        />
      </motion.div>

      {/* Arrow */}

      <motion.div
        animate={{
          y: [0, 6, 0],
        }}
        transition={{
          duration: 2,

          repeat: Infinity,

          ease: "easeInOut",

          delay: 0.15,
        }}
      >
        <ChevronDown
          className="
            h-5
            w-5

            transition-transform

            duration-300

            group-hover:translate-y-1
          "
        />
      </motion.div>

      {showLabel && (
        <motion.span
          initial={{
            opacity: 0.8,
          }}
          whileHover={{
            opacity: 1,
          }}
          className="
            text-[11px]

            font-semibold

            uppercase

            tracking-[0.28em]

            text-slate-400
          "
        >
          {label}
        </motion.span>
      )}
    </button>
  );
}

export default ScrollIndicator;