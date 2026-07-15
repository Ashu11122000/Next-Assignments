import { useEffect, useState } from "react";

/* -------------------------------------------------------------------------- */
/* Use Debounce                                                               */
/* -------------------------------------------------------------------------- */

/**
 * Returns a debounced version of a value.
 *
 * @param value - The value to debounce.
 * @param delay - Delay in milliseconds.
 */
export function useDebounce<T>(
  value: T,
  delay = 300,
): T {
  const [debouncedValue, setDebouncedValue] =
    useState<T>(value);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [value, delay]);

  return debouncedValue;
}