"use client";

/**
 * =============================================================================
 * Portfolio
 * -----------------------------------------------------------------------------
 * File: src/providers/ThemeProvider.tsx
 * -----------------------------------------------------------------------------
 * Global Theme Provider
 * -----------------------------------------------------------------------------
 *
 * Responsibilities:
 * - Enables Light / Dark / System themes.
 * - Prevents hydration mismatches.
 * - Applies theme using the HTML class attribute.
 * - Disables transition flickering during theme changes.
 * - Serves as the single theme provider for the application.
 *
 * =============================================================================
 */

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import type { ThemeProviderProps } from "next-themes";

export default function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
      storageKey="portfolio-theme"
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}