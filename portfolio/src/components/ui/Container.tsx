"use client";

/* =============================================================================
   Portfolio UI Library
   -----------------------------------------------------------------------------
   File: src/components/ui/Container.tsx

   Production-ready reusable Container component.

   Features
   -----------------------------------------------------------------------------
   ✓ React 19
   ✓ Next.js 16
   ✓ TypeScript
   ✓ Slot + Slottable support
   ✓ asChild support
   ✓ CVA variants
   ✓ Responsive max-widths
   ✓ Horizontal padding
   ✓ Center alignment
   ✓ ForwardRef
   ✓ Accessible
============================================================================= */

import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const containerVariants = cva(
  [
    "mx-auto",
    "w-full",
    "transition-all",
    "duration-300",
  ].join(" "),
  {
    variants: {
      size: {
        xs: "max-w-screen-xs",
        sm: "max-w-screen-sm",
        md: "max-w-screen-md",
        lg: "max-w-screen-lg",
        xl: "max-w-screen-xl",
        "2xl": "max-w-screen-2xl",
        full: "max-w-full",
      },

      padding: {
        none: "",

        sm: "px-4 sm:px-6",

        md: "px-6 sm:px-8 lg:px-10",

        lg: "px-6 md:px-10 lg:px-12 xl:px-16",
      },

      centered: {
        true: "text-center",

        false: "",
      },
    },

    defaultVariants: {
      size: "2xl",
      padding: "md",
      centered: false,
    },
  }
);

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  asChild?: boolean;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      className,
      size,
      padding,
      centered,
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "div";

    return (
      <Comp
        ref={ref}
        className={cn(
          containerVariants({
            size,
            padding,
            centered,
          }),
          className
        )}
        {...props}
      >
        <Slottable>{children}</Slottable>
      </Comp>
    );
  }
);

Container.displayName = "Container";

export { Container, containerVariants };