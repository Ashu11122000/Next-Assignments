"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/* Card                                                                       */
/* -------------------------------------------------------------------------- */

function Card({
  className,
  ...props
}: Readonly<React.HTMLAttributes<HTMLDivElement>>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-neutral-200 bg-white text-neutral-950 shadow-sm transition-all duration-300",
        "hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50",
        className,
      )}
      {...props}
    />
  );
}

/* -------------------------------------------------------------------------- */
/* Card Header                                                                */
/* -------------------------------------------------------------------------- */

function CardHeader({
  className,
  ...props
}: Readonly<React.HTMLAttributes<HTMLDivElement>>) {
  return (
    <div
      className={cn(
        "flex flex-col space-y-2 p-6",
        className,
      )}
      {...props}
    />
  );
}

/* -------------------------------------------------------------------------- */
/* Card Title                                                                 */
/* -------------------------------------------------------------------------- */

function CardTitle({
  className,
  ...props
}: Readonly<React.HTMLAttributes<HTMLHeadingElement>>) {
  return (
    <h3
      className={cn(
        "text-xl font-semibold leading-none tracking-tight",
        className,
      )}
      {...props}
    />
  );
}

/* -------------------------------------------------------------------------- */
/* Card Description                                                           */
/* -------------------------------------------------------------------------- */

function CardDescription({
  className,
  ...props
}: Readonly<React.HTMLAttributes<HTMLParagraphElement>>) {
  return (
    <p
      className={cn(
        "text-sm leading-relaxed text-neutral-600 dark:text-neutral-400",
        className,
      )}
      {...props}
    />
  );
}

/* -------------------------------------------------------------------------- */
/* Card Content                                                               */
/* -------------------------------------------------------------------------- */

function CardContent({
  className,
  ...props
}: Readonly<React.HTMLAttributes<HTMLDivElement>>) {
  return (
    <div
      className={cn(
        "px-6 pb-6",
        className,
      )}
      {...props}
    />
  );
}

/* -------------------------------------------------------------------------- */
/* Card Footer                                                                */
/* -------------------------------------------------------------------------- */

function CardFooter({
  className,
  ...props
}: Readonly<React.HTMLAttributes<HTMLDivElement>>) {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-4 border-t border-neutral-200 px-6 py-4 dark:border-neutral-800",
        className,
      )}
      {...props}
    />
  );
}

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
};

export default Card;