"use client";

/* =============================================================================
   Portfolio UI Library
   -----------------------------------------------------------------------------
   File: src/components/ui/Container.tsx

   Ultra Premium reusable Container component.

   Features
   -----------------------------------------------------------------------------
   ✓ React 19
   ✓ Next.js 16
   ✓ TypeScript
   ✓ Slot + Slottable
   ✓ CVA
   ✓ Premium Responsive Layout
   ✓ Better Desktop Width
   ✓ Better Mobile Spacing
============================================================================= */

import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const containerVariants = cva(
  [
    "relative",
    "mx-auto",
    "w-full",

    "transition-all",
    "duration-300",
    "ease-out",
  ].join(" "),
  {
    variants: {
      size: {
        xs: "max-w-screen-xs",

        sm: "max-w-screen-sm",

        md: "max-w-screen-md",

        lg: "max-w-screen-lg",

        xl: "max-w-screen-xl",

        "2xl": "max-w-[1440px]",

        full: "max-w-full",
      },

      padding: {
        none: "",

        sm: [
          "px-4",
          "sm:px-6",
          "lg:px-8",
        ].join(" "),

        md: [
          "px-5",
          "sm:px-8",
          "lg:px-10",
          "xl:px-12",
        ].join(" "),

        lg: [
          "px-6",
          "sm:px-8",
          "md:px-10",
          "lg:px-14",
          "xl:px-20",
        ].join(" "),
      },

      centered: {
        true: [
          "text-center",
          "flex",
          "flex-col",
          "items-center",
        ].join(" "),

        false: "",
      },
    },

    defaultVariants: {
      size: "2xl",
      padding: "lg",
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