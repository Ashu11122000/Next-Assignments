"use client";

/* =============================================================================
   Portfolio UI Library
   -----------------------------------------------------------------------------
   File: src/components/ui/SectionHeading.tsx

   Ultra Premium reusable Section Heading component.

   Features
   -----------------------------------------------------------------------------
   ✓ React 19
   ✓ Next.js 16
   ✓ TypeScript
   ✓ CVA
   ✓ Premium Typography
   ✓ Glass Badge
   ✓ Responsive
   ✓ Accessible
============================================================================= */

import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { Badge } from "@/components/ui/Badge";
import { Divider } from "@/components/ui/Divider";
import { cn } from "@/lib/utils";

const sectionHeadingVariants = cva(
  [
    "relative",
    "flex",
    "w-full",
    "flex-col",
  ].join(" "),
  {
    variants: {
      align: {
        left: "items-start text-left",

        center: "items-center text-center",

        right: "items-end text-right",
      },

      spacing: {
        sm: "gap-3",

        md: "gap-5",

        lg: "gap-7",
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
      spacing: "lg",
      maxWidth: "lg",
    },
  }
);

export interface SectionHeadingProps
  extends Omit<
      React.HTMLAttributes<HTMLDivElement>,
      "title"
    >,
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
            variant="glass"
            size="sm"
            className="mb-1"
          >
            {badge}
          </Badge>
        )}

        <h2
          className={cn(
            [
              "text-3xl",
              "font-bold",
              "leading-tight",
              "tracking-tight",
              "text-balance",

              "sm:text-4xl",

              "lg:text-5xl",
            ].join(" "),

            gradient
              ? [
                  "bg-gradient-to-r",

                  "from-cyan-300",

                  "via-blue-400",

                  "to-violet-400",

                  "bg-clip-text",

                  "text-transparent",
                ].join(" ")
              : "text-white"
          )}
        >
          {title}
        </h2>

        {description && (
          <p
            className={cn(
              [
                "max-w-3xl",

                "text-base",

                "leading-8",

                "text-slate-400",

                "text-pretty",

                "sm:text-lg",

                "lg:text-xl",
              ].join(" "),

              align === "left" && "mx-0",

              align === "center" && "mx-auto",

              align === "right" && "ml-auto"
            )}
          >
            {description}
          </p>
        )}

        {divider && (
          <Divider
            variant="gradient"
            spacing="none"
            className={cn(
              "mt-2",

              align === "center" && "w-28",

              align === "left" && "w-28",

              align === "right" && "ml-auto w-28"
            )}
          />
        )}

        <Slottable>{children}</Slottable>
      </Comp>
    );
  }
);

SectionHeading.displayName = "SectionHeading";

export { SectionHeading, sectionHeadingVariants };