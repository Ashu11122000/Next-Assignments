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
 * A reusable, accessible, production-ready button component.
 *
 * Built with:
 * - React 19
 * - Next.js 16
 * - TypeScript
 * - Tailwind CSS v4
 * - Radix Slot
 * - class-variance-authority
 *
 * Features
 * --------
 * ✓ Variants
 * ✓ Sizes
 * ✓ Loading state
 * ✓ Disabled state
 * ✓ Icon support
 * ✓ asChild support
 * ✓ Ref forwarding
 * ✓ Keyboard accessible
 * ✓ Tailwind Merge
 * ============================================================================
 */

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "whitespace-nowrap rounded-xl",
    "font-medium",
    "transition-all duration-200",
    "select-none",
    "outline-none",
    "cursor-pointer",

    "focus-visible:ring-2",
    "focus-visible:ring-ring",
    "focus-visible:ring-offset-2",

    "disabled:pointer-events-none",
    "disabled:opacity-50",

    "[&_svg]:pointer-events-none",
    "[&_svg]:size-4",
    "[&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:opacity-90",

        secondary:
          "bg-secondary text-secondary-foreground hover:opacity-90",

        outline:
          "border border-default bg-transparent hover:bg-muted",

        ghost:
          "hover:bg-muted hover:text-foreground",

        destructive:
          "bg-red-600 text-white hover:bg-red-700",

        link:
          "underline-offset-4 hover:underline text-primary bg-transparent p-0 h-auto",
      },

      size: {
        sm: "h-9 px-3 text-sm",

        default: "h-10 px-4 py-2",

        lg: "h-11 px-8",

        icon: "h-10 w-10 p-0",
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