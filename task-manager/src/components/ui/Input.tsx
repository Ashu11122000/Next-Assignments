"use client";

/**
 * ============================================================================
 * Input Component
 * ============================================================================
 *
 * A reusable input component with built-in support for:
 * - Label
 * - Helper text
 * - Error message
 * - Required indicator
 * - Disabled state
 * - Accessibility
 * - Forward Ref
 *
 * Built with:
 * - React
 * - TypeScript
 * - Tailwind CSS
 * ============================================================================
 */

import * as React from "react";

import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/* Input Props                                                                */
/* -------------------------------------------------------------------------- */

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Input label.
   */
  label?: string;

  /**
   * Helper text displayed below the input.
   */
  helperText?: string;

  /**
   * Error message displayed below the input.
   */
  error?: string;

  /**
   * Marks the field as required.
   */
  required?: boolean;

  /**
   * Optional wrapper class.
   */
  containerClassName?: string;
}

/* -------------------------------------------------------------------------- */
/* Input Component                                                            */
/* -------------------------------------------------------------------------- */

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      label,
      helperText,
      error,
      required = false,
      className,
      containerClassName,
      disabled,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const inputId = id ?? generatedId;

    const helperId = `${inputId}-helper`;
    const errorId = `${inputId}-error`;

    const describedBy = [
      helperText ? helperId : null,
      error ? errorId : null,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div
        className={cn(
          "w-full space-y-2",
          containerClassName
        )}
      >
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-slate-900 dark:text-slate-100"
          >
            {label}

            {required && (
              <span
                className="ml-1 text-red-500"
                aria-hidden="true"
              >
                *
              </span>
            )}
          </label>
        )}

        <input
          ref={ref}
          id={inputId}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={
            describedBy || undefined
          }
          className={cn(
            "flex h-10 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm",
            "placeholder:text-slate-400",
            "transition-colors",
            "focus:outline-none",
            "focus:ring-2",
            "focus:ring-blue-500",
            "focus:border-blue-500",
            "disabled:cursor-not-allowed",
            "disabled:opacity-50",
            "dark:border-slate-700",
            "dark:bg-slate-900",
            "dark:text-slate-100",
            "dark:placeholder:text-slate-500",
            error &&
              "border-red-500 focus:border-red-500 focus:ring-red-500",
            className
          )}
          {...props}
        />

        {helperText && !error && (
          <p
            id={helperId}
            className="text-sm text-slate-500 dark:text-slate-400"
          >
            {helperText}
          </p>
        )}

        {error && (
          <p
            id={errorId}
            role="alert"
            className="text-sm font-medium text-red-600 dark:text-red-400"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

export { Input };