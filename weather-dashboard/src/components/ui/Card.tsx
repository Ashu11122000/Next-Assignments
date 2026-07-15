import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * ============================================================================
 * Card Component
 * ============================================================================
 *
 * Premium reusable card component.
 *
 * Features
 * --------
 * ✓ Glassmorphism inspired
 * ✓ Premium shadows
 * ✓ Better spacing
 * ✓ Responsive
 * ✓ Hover animations
 * ✓ Accessible
 * ============================================================================
 */

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      [
        "relative overflow-hidden",

        // Layout
        "rounded-3xl",

        // Glass effect
        "border border-border/50",
        "bg-card/80",
        "backdrop-blur-xl",

        // Text
        "text-card-foreground",

        // Shadow
        "shadow-sm",
        "hover:shadow-xl",

        // Animation
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1",

        // Optional subtle highlight
        "before:absolute before:inset-0 before:pointer-events-none",
        "before:rounded-3xl",
        "before:bg-gradient-to-br",
        "before:from-white/5 before:to-transparent",
      ].join(" "),
      className
    )}
    {...props}
  />
));

Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      [
        "flex flex-col",
        "space-y-2",
        "px-7 pt-7 pb-5",
      ].join(" "),
      className
    )}
    {...props}
  />
));

CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      [
        "text-xl",
        "font-bold",
        "tracking-tight",
        "leading-none",
      ].join(" "),
      className
    )}
    {...props}
  />
));

CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      [
        "text-sm",
        "leading-relaxed",
        "text-muted-foreground",
      ].join(" "),
      className
    )}
    {...props}
  />
));

CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      [
        "px-7",
        "pb-7",
        "pt-0",
      ].join(" "),
      className
    )}
    {...props}
  />
));

CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      [
        "flex items-center justify-between",
        "gap-3",
        "px-7",
        "pb-7",
        "pt-0",
      ].join(" "),
      className
    )}
    {...props}
  />
));

CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
};