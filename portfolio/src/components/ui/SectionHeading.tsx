"use client";

/* =============================================================================
   Portfolio UI Library
   -----------------------------------------------------------------------------
   File: src/components/ui/SectionHeading.tsx

   Production-ready reusable Section Heading component.

   Features
   -----------------------------------------------------------------------------
   ✓ React 19
   ✓ Next.js 16
   ✓ TypeScript
   ✓ Slot + Slottable support
   ✓ asChild support
   ✓ CVA variants
   ✓ Badge support
   ✓ Title
   ✓ Description
   ✓ Left / Center / Right alignment
   ✓ Gradient title
   ✓ Divider support
   ✓ Fully responsive
   ✓ Accessible
   ✓ ForwardRef
============================================================================= */

import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { Badge } from "@/components/ui/Badge";
import { Divider } from "@/components/ui/Divider";
import { cn } from "@/lib/utils";

const sectionHeadingVariants = cva("w-full", {
  variants: {
    align: {
      left: "text-left items-start",
      center: "text-center items-center",
      right: "text-right items-end",
    },

    spacing: {
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-6",
    },

    maxWidth: {
      sm: "max-w-xl",
      md: "max-w-2xl",
      lg: "max-w-3xl",
      xl: "max-w-4xl",
      full: "max-w-full",
    },
  },

  defaultVariants: {
    align: "center",
    spacing: "md",
    maxWidth: "lg",
  },
});

export interface SectionHeadingProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title">,
    VariantProps<typeof sectionHeadingVariants> {
  asChild?: boolean;

  badge?: React.ReactNode;

  title: React.ReactNode;

  description?: React.ReactNode;

  divider?: boolean;

  gradient?: boolean;
}

const SectionHeading = React.forwardRef<
  HTMLDivElement,
  SectionHeadingProps
>(
  (
    {
      className,
      align,
      spacing,
      maxWidth,
      badge,
      title,
      description,
      divider = false,
      gradient = true,
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
          "flex flex-col",
          sectionHeadingVariants({
            align,
            spacing,
            maxWidth,
          }),
          className
        )}
        {...props}
      >
        {badge && (
          <Badge
            variant="gradient"
            size="sm"
          >
            {badge}
          </Badge>
        )}

        <h2
          className={cn(
            "heading-xl font-bold text-balance",
            gradient &&
              "bg-linear-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent"
          )}
        >
          {title}
        </h2>

        {description && (
          <p className="body-lg max-w-3xl text-slate-400 text-balance">
            {description}
          </p>
        )}

        {divider && (
          <Divider
            variant="gradient"
            className="max-w-32"
          />
        )}

        <Slottable>{children}</Slottable>
      </Comp>
    );
  }
);

SectionHeading.displayName = "SectionHeading";

export { SectionHeading, sectionHeadingVariants };