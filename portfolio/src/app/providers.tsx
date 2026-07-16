"use client";

/**
 * =============================================================================
 * Portfolio
 * =============================================================================
 * File: src/app/providers.tsx
 * -----------------------------------------------------------------------------
 * Global Providers
 * -----------------------------------------------------------------------------
 *
 * Combines all application-level providers into a single wrapper.
 *
 * Current Providers
 * -----------------
 * • ThemeProvider
 * • MotionProvider
 * • Sonner Toaster
 *
 * Future Providers
 * ----------------
 * • React Query
 * • Analytics
 * • Authentication
 * • Feature Flags
 * • Internationalization
 *
 * =============================================================================
 */

import * as React from "react";

import { Toaster } from "sonner";

import ThemeProvider from "@/providers/ThemeProvider";
import MotionProvider from "@/providers/MotionProvider";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({
  children,
}: ProvidersProps): React.ReactElement {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <MotionProvider>
        {children}

        <Toaster
          position="top-right"
          richColors
          closeButton
          expand
          duration={4000}
          visibleToasts={4}
          theme="system"
          toastOptions={{
            classNames: {
              toast: "glass border border-white/10",
              title: "font-semibold",
              description: "text-muted-foreground",
            },
          }}
        />
      </MotionProvider>
    </ThemeProvider>
  );
}