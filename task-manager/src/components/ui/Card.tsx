/**
 * ============================================================================
 * Card Components
 * ============================================================================
 *
 * A collection of reusable card components for building consistent layouts.
 *
 * Components:
 * - Card
 * - CardHeader
 * - CardTitle
 * - CardDescription
 * - CardContent
 * - CardFooter
 *
 * Features:
 * - Fully reusable
 * - Accessible
 * - Responsive
 * - Tailwind CSS
 * - TypeScript
 * ============================================================================
 */

import * as React from "react";

import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/* Card                                                                       */
/* -------------------------------------------------------------------------- */

export type CardProps = React.HTMLAttributes<HTMLDivElement>;

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-xl border border-slate-200 bg-white text-slate-950 shadow-sm",
        "dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
        className
      )}
      {...props}
    />
  )
);

Card.displayName = "Card";

/* -------------------------------------------------------------------------- */
/* Card Header                                                                */
/* -------------------------------------------------------------------------- */

type CardHeaderProps = React.HTMLAttributes<HTMLDivElement>;

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex flex-col space-y-1.5 p-6",
        className
      )}
      {...props}
    />
  )
);

CardHeader.displayName = "CardHeader";

/* -------------------------------------------------------------------------- */
/* Card Title                                                                 */
/* -------------------------------------------------------------------------- */

type CardTitleProps = React.HTMLAttributes<HTMLHeadingElement>;

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        "text-xl font-semibold leading-none tracking-tight",
        className
      )}
      {...props}
    />
  )
);

CardTitle.displayName = "CardTitle";

/* -------------------------------------------------------------------------- */
/* Card Description                                                           */
/* -------------------------------------------------------------------------- */

type CardDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  CardDescriptionProps
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "text-sm text-slate-500 dark:text-slate-400",
      className
    )}
    {...props}
  />
));

CardDescription.displayName = "CardDescription";

/* -------------------------------------------------------------------------- */
/* Card Content                                                               */
/* -------------------------------------------------------------------------- */

type CardContentProps = React.HTMLAttributes<HTMLDivElement>;

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("p-6 pt-0", className)}
      {...props}
    />
  )
);

CardContent.displayName = "CardContent";

/* -------------------------------------------------------------------------- */
/* Card Footer                                                                */
/* -------------------------------------------------------------------------- */

type CardFooterProps = React.HTMLAttributes<HTMLDivElement>;

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex items-center p-6 pt-0",
        className
      )}
      {...props}
    />
  )
);

CardFooter.displayName = "CardFooter";

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
};