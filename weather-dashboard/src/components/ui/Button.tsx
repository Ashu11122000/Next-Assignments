import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * ============================================================================
 * Button Component
 * ============================================================================
 *
 * Premium reusable button component.
 *
 * Features
 * --------
 * ✓ Modern glassmorphism styling
 * ✓ Gradient primary button
 * ✓ Better hover animations
 * ✓ Loading state
 * ✓ Icon support
 * ✓ Accessible
 * ✓ asChild support
 * ✓ Type-safe variants
 * ============================================================================
 */

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "rounded-2xl",
    "whitespace-nowrap",
    "font-semibold",
    "tracking-wide",
    "select-none",
    "cursor-pointer",
    "outline-none",
    "relative overflow-hidden",

    // Animation
    "transition-all duration-300 ease-out",
    "active:scale-[0.98]",
    "hover:-translate-y-0.5",

    // Focus
    "focus-visible:ring-2",
    "focus-visible:ring-primary/40",
    "focus-visible:ring-offset-2",

    // Disabled
    "disabled:pointer-events-none",
    "disabled:opacity-50",

    // Shadow
    "shadow-sm",
    "hover:shadow-lg",

    // SVG
    "[&_svg]:pointer-events-none",
    "[&_svg]:size-4",
    "[&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        default:
          [
            "border border-transparent",
            "bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-600",
            "text-white",
            "shadow-blue-500/20",
            "hover:shadow-blue-500/30",
            "hover:brightness-110",
          ].join(" "),

        secondary:
          [
            "border border-border/60",
            "bg-secondary/80",
            "backdrop-blur-xl",
            "text-secondary-foreground",
            "hover:bg-secondary",
          ].join(" "),

        outline:
          [
            "border border-border",
            "bg-background/70",
            "backdrop-blur-md",
            "text-foreground",
            "hover:bg-muted/60",
          ].join(" "),

        ghost:
          [
            "bg-transparent",
            "text-foreground",
            "hover:bg-muted/70",
          ].join(" "),

        destructive:
          [
            "border border-red-500/20",
            "bg-gradient-to-r from-red-500 to-rose-600",
            "text-white",
            "hover:brightness-110",
            "shadow-red-500/20",
          ].join(" "),

        link:
          [
            "h-auto rounded-none",
            "bg-transparent",
            "p-0",
            "text-primary",
            "shadow-none",
            "hover:translate-y-0",
            "hover:shadow-none",
            "underline-offset-4",
            "hover:underline",
          ].join(" "),
      },

      size: {
        sm: "h-9 px-4 text-sm",

        default: "h-11 px-5 text-sm",

        lg: "h-12 px-7 text-base",

        icon: "size-11 p-0",
      },

      fullWidth: {
        true: "w-full",
        false: "",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      asChild = false,
      loading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const Component = asChild ? Slot : "button";

    return (
      <Component
        ref={ref}
        className={cn(
          buttonVariants({
            variant,
            size,
            fullWidth,
          }),
          className
        )}
        disabled={loading || disabled}
        aria-disabled={loading || disabled}
        data-loading={loading}
        {...props}
      >
        {loading && (
          <Loader2
            className="size-4 animate-spin"
            aria-hidden="true"
          />
        )}

        <Slottable>{children}</Slottable>
      </Component>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };