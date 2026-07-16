/* =============================================================================
   Portfolio Layout
   -----------------------------------------------------------------------------
   File: src/components/layout/PageContainer.tsx

   Production-ready reusable page container.

   Features
   -----------------------------------------------------------------------------
   ✓ React 19
   ✓ Next.js 16
   ✓ Server Component
   ✓ Slot + Slottable support
   ✓ asChild support
   ✓ CVA variants
   ✓ Multiple max-widths
   ✓ Optional vertical padding
   ✓ TypeScript
============================================================================= */

import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const pageContainerVariants = cva(
  [
    "mx-auto",
    "w-full",
    "px-4",
    "sm:px-6",
    "lg:px-8",
  ].join(" "),
  {
    variants: {
      maxWidth: {
        sm: "max-w-screen-sm",
        md: "max-w-screen-md",
        lg: "max-w-screen-lg",
        xl: "max-w-screen-xl",
        "2xl": "max-w-screen-2xl",
        "7xl": "max-w-7xl",
        full: "max-w-full",
      },

      paddingY: {
        none: "",
        sm: "py-6",
        md: "py-10",
        lg: "py-16",
        xl: "py-24",
      },
    },

    defaultVariants: {
      maxWidth: "7xl",
      paddingY: "none",
    },
  }
);

export interface PageContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pageContainerVariants> {
  asChild?: boolean;
}

export default function PageContainer({
  className,
  children,
  maxWidth,
  paddingY,
  asChild = false,
  ...props
}: PageContainerProps) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      className={cn(
        pageContainerVariants({
          maxWidth,
          paddingY,
        }),
        className
      )}
      {...props}
    >
      <Slottable>{children}</Slottable>
    </Comp>
  );
}