"use client";

/* =============================================================================
   Portfolio UI Library
   -----------------------------------------------------------------------------
   File: src/components/ui/AnimatedWrapper.tsx

   Production-ready reusable animation wrapper.

   Features
   -----------------------------------------------------------------------------
   ✓ React 19
   ✓ Next.js 16
   ✓ TypeScript
   ✓ Framer Motion
   ✓ Slot + Slottable
   ✓ asChild support
   ✓ ForwardRef
   ✓ Premium spring animations
   ✓ GPU Optimized
============================================================================= */

import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import {
  motion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";

import { cn } from "@/lib/utils";

const DISTANCE = 28;

const animationVariants: Record<string, Variants> = {
  fade: {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  },

  fadeUp: {
    hidden: {
      opacity: 0,
      y: DISTANCE,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  },

  fadeDown: {
    hidden: {
      opacity: 0,
      y: -DISTANCE,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  },

  fadeLeft: {
    hidden: {
      opacity: 0,
      x: -DISTANCE,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  },

  fadeRight: {
    hidden: {
      opacity: 0,
      x: DISTANCE,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  },

  scale: {
    hidden: {
      opacity: 0,
      scale: 0.96,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
  },

  zoom: {
    hidden: {
      opacity: 0,
      scale: 0.92,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
  },

  rotate: {
    hidden: {
      opacity: 0,
      rotate: -4,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      rotate: 0,
      scale: 1,
    },
  },
};

export interface AnimatedWrapperProps
  extends Omit<HTMLMotionProps<"div">, "variants"> {
  asChild?: boolean;

  animation?:
    | "fade"
    | "fadeUp"
    | "fadeDown"
    | "fadeLeft"
    | "fadeRight"
    | "scale"
    | "zoom"
    | "rotate";

  delay?: number;

  duration?: number;

  once?: boolean;
}

const AnimatedWrapper = React.forwardRef<
  HTMLDivElement,
  AnimatedWrapperProps
>(
  (
    {
      className,
      animation = "fadeUp",
      delay = 0,
      duration = 0.7,
      once = true,
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    if (asChild) {
      return (
        <Slot ref={ref} className={className}>
          <Slottable>{children as React.ReactNode}</Slottable>
        </Slot>
      );
    }

    return (
      <motion.div
        ref={ref}
        className={cn(className)}
        variants={animationVariants[animation]}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once,
          amount: 0.15,
          margin: "-60px",
        }}
        transition={{
          duration,
          delay,
          type: "spring",
          stiffness: 85,
          damping: 18,
          mass: 0.8,
        }}
        style={{
          willChange: "transform, opacity",
        }}
        {...props}
      >
        <Slottable>{children as React.ReactNode}</Slottable>
      </motion.div>
    );
  }
);

AnimatedWrapper.displayName = "AnimatedWrapper";

export { AnimatedWrapper };