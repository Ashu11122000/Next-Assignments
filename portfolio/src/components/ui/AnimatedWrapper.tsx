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
   ✓ Multiple animation presets
============================================================================= */

import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import {
  motion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";

import { cn } from "@/lib/utils";

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
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  },

  fadeDown: {
    hidden: {
      opacity: 0,
      y: -40,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  },

  fadeLeft: {
    hidden: {
      opacity: 0,
      x: -40,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  },

  fadeRight: {
    hidden: {
      opacity: 0,
      x: 40,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  },

  scale: {
    hidden: {
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
  },

  zoom: {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
  },

  rotate: {
    hidden: {
      opacity: 0,
      rotate: -8,
    },
    visible: {
      opacity: 1,
      rotate: 0,
    },
  },
};

export interface AnimatedWrapperProps
  extends Omit<
    HTMLMotionProps<"div">,
    "variants"
  > {
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
      duration = 0.5,
      once = true,
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    if (asChild) {
      return (
        <Slot
          ref={ref}
          className={className}
        >
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
          amount: 0.2,
        }}
        transition={{
          duration,
          delay,
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