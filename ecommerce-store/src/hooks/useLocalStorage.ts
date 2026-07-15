import { useEffect, useState } from "react";

/* -------------------------------------------------------------------------- */
/* Use Local Storage                                                          */
/* -------------------------------------------------------------------------- */

/**
 * Synchronizes React state with localStorage.
 *
 * @param key - localStorage key.
 * @param initialValue - Default value when no value exists.
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T,
) {
  /* ------------------------------------------------------------------------ */
  /* State                                                                    */
  /* ------------------------------------------------------------------------ */

  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);

      return item
        ? (JSON.parse(item) as T)
        : initialValue;
    } catch {
      return initialValue;
    }
  });

  /* ------------------------------------------------------------------------ */
  /* Persist to localStorage                                                  */
  /* ------------------------------------------------------------------------ */

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    try {
      window.localStorage.setItem(
        key,
        JSON.stringify(storedValue),
      );
    } catch {
      // Ignore write errors (e.g. storage quota exceeded)
    }
  }, [key, storedValue]);

  /* ------------------------------------------------------------------------ */
  /* Remove Value                                                             */
  /* ------------------------------------------------------------------------ */

  const removeValue = () => {
    if (typeof window === "undefined") {
      return;
    }

    try {
      window.localStorage.removeItem(key);
    } finally {
      setStoredValue(initialValue);
    }
  };

  return [
    storedValue,
    setStoredValue,
    removeValue,
  ] as const;
}