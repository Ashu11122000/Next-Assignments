"use client";

/* =============================================================================
   Portfolio UI Library
   -----------------------------------------------------------------------------
   File: src/components/ui/Textarea.tsx

   Ultra Premium reusable Textarea component.

   Features
   -----------------------------------------------------------------------------
   ✓ React 19
   ✓ Next.js 16
   ✓ TypeScript
   ✓ CVA
   ✓ Glassmorphism
   ✓ Premium Focus
   ✓ Accessible
   ✓ React Hook Form Friendly
============================================================================= */

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const textareaVariants = cva(
  [
    "w-full",

    "rounded-2xl",

    "border",

    "bg-slate-900/70",

    "text-slate-100",

    "placeholder:text-slate-500",

    "backdrop-blur-2xl",

    "shadow-[0_10px_30px_rgba(15,23,42,.18)]",

    "transition-all",
    "duration-300",
    "ease-out",

    "outline-none",

    "resize-y",

    "leading-7",

    "disabled:cursor-not-allowed",
    "disabled:opacity-50",

    "focus-visible:-translate-y-0.5",

    "focus-visible:border-violet-400/40",

    "focus-visible:ring-2",

    "focus-visible:ring-violet-500/25",

    "focus-visible:shadow-[0_18px_45px_rgba(99,102,241,.18)]",
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          "border-white/10",
          "bg-slate-900/70",
        ].join(" "),

        glass: [
          "border-white/10",
          "bg-white/[0.05]",
          "backdrop-blur-3xl",
          "shadow-[inset_0_1px_0_rgba(255,255,255,.05)]",
        ].join(" "),

        outline: [
          "border-white/15",
          "bg-transparent",
        ].join(" "),

        filled: [
          "border-transparent",
          "bg-slate-800/90",
        ].join(" "),
      },

      size: {
        sm: "min-h-24 px-4 py-3 text-sm",

        md: "min-h-36 px-5 py-4 text-base",

        lg: "min-h-48 px-6 py-5 text-lg",
      },

      state: {
        default: "",

        error: [
          "border-red-500/50",
          "focus-visible:border-red-500",
          "focus-visible:ring-red-500/25",
        ].join(" "),

        success: [
          "border-emerald-500/50",
          "focus-visible:border-emerald-500",
          "focus-visible:ring-emerald-500/25",
        ].join(" "),
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
      <div className="group relative w-full">
        {/* Glass Highlight */}
        <div
          aria-hidden
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-2xl
            bg-gradient-to-br
            from-white/[0.05]
            via-transparent
            to-transparent
          "
        />

        <textarea
          ref={ref}
          className={cn(
            textareaVariants({
              variant,
              size,
              state,
              resize,
            }),
            "relative z-10",
            "scrollbar-thin",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea, textareaVariants };