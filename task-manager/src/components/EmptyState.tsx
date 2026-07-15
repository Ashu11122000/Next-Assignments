"use client";

/**
 * ============================================================================
 * Empty State Component
 * ============================================================================
 *
 * A reusable empty state component displayed when no data is available.
 *
 * Features:
 * - Icon support
 * - Title
 * - Description
 * - Optional action button
 * - Responsive layout
 * - Accessible
 * ============================================================================
 */

import * as React from "react";
import { ClipboardList } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

/* -------------------------------------------------------------------------- */
/* Empty State Props                                                          */
/* -------------------------------------------------------------------------- */

export interface EmptyStateProps {
  /**
   * Optional custom icon.
   */
  icon?: React.ReactNode;

  /**
   * Main heading.
   */
  title: string;

  /**
   * Supporting description.
   */
  description?: string;

  /**
   * Action button label.
   */
  actionLabel?: string;

  /**
   * Action button click handler.
   */
  onAction?: () => void;

  /**
   * Additional container classes.
   */
  className?: string;
}

/* -------------------------------------------------------------------------- */
/* Empty State Component                                                      */
/* -------------------------------------------------------------------------- */

export function EmptyState({
  icon,
  title,
  description,
  actionLabel,
  onAction,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center",
        "dark:border-slate-700 dark:bg-slate-900/50",
        className
      )}
      role="status"
      aria-live="polite"
    >
      {/* ------------------------------------------------------------------ */}
      {/* Icon                                                               */}
      {/* ------------------------------------------------------------------ */}

      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800">
        {icon ?? (
          <ClipboardList
            className="h-8 w-8 text-slate-500 dark:text-slate-400"
            aria-hidden="true"
          />
        )}
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Title                                                              */}
      {/* ------------------------------------------------------------------ */}

      <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
        {title}
      </h2>

      {/* ------------------------------------------------------------------ */}
      {/* Description                                                        */}
      {/* ------------------------------------------------------------------ */}

      {description && (
        <p className="mt-2 max-w-md text-sm leading-6 text-slate-600 dark:text-slate-400">
          {description}
        </p>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* Action Button                                                      */}
      {/* ------------------------------------------------------------------ */}

      {actionLabel && onAction && (
        <Button
          className="mt-6"
          onClick={onAction}
        >
          {actionLabel}
        </Button>
      )}
    </div>
  );
}