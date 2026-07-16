"use client";

/* =============================================================================
   Portfolio UI Library
   -----------------------------------------------------------------------------
   File: src/components/ui/Textarea.tsx

   Production-ready reusable Textarea component.

   Features
   -----------------------------------------------------------------------------
   ✓ React 19
   ✓ Next.js 16
   ✓ TypeScript
   ✓ CVA Variants
   ✓ Multiple sizes
   ✓ Error & Success states
   ✓ Accessible
   ✓ React Hook Form friendly
   ✓ ForwardRef
============================================================================= */

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const textareaVariants = cva(
  [
    "flex",
    "w-full",
    "rounded-xl",
    "border",
    "bg-slate-900/60",
    "text-slate-100",
    "placeholder:text-slate-500",
    "backdrop-blur-xl",
    "transition-all",
    "duration-300",
    "outline-none",
    "resize-y",
    "disabled:cursor-not-allowed",
    "disabled:opacity-50",
    "focus-visible:ring-2",
    "focus-visible:ring-cyan-500/30",
    "focus-visible:border-cyan-500/40",
  ].join(" "),
  {
    variants: {
      variant: {
        default: "border-white/10",

        glass:
          "border-white/10 bg-white/5 backdrop-blur-2xl",

        outline:
          "border-white/20 bg-transparent",

        filled:
          "border-transparent bg-slate-800",
      },

      size: {
        sm: "min-h-24 px-3 py-2 text-sm",

        md: "min-h-32 px-4 py-3 text-base",

        lg: "min-h-40 px-5 py-4 text-lg",
      },

      state: {
        default: "",

        error:
          "border-red-500 focus-visible:ring-red-500/25",

        success:
          "border-emerald-500 focus-visible:ring-emerald-500/25",
      },

      resize: {
        none: "resize-none",

        vertical: "resize-y",

        horizontal: "resize-x",

        both: "resize",
      },
    },

    defaultVariants: {
      variant: "glass",
      size: "md",
      state: "default",
      resize: "vertical",
    },
  }
);

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {}

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  TextareaProps
>(
  (
    {
      className,
      variant,
      size,
      state,
      resize,
      ...props
    },
    ref
  ) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          textareaVariants({
            variant,
            size,
            state,
            resize,
          }),
          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea, textareaVariants };