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
          theme="system"
          richColors
          closeButton
          expand
          duration={4000}
          visibleToasts={4}
          gap={12}
          offset={24}
          toastOptions={{
            classNames: {
              toast: `
                rounded-2xl
                border
                border-white/10
                bg-background/80
                backdrop-blur-2xl
                shadow-[0_20px_50px_rgba(0,0,0,0.30)]
                px-4
                py-4
              `,
              title: `
                text-sm
                font-semibold
                tracking-tight
              `,
              description: `
                mt-1
                text-sm
                text-muted-foreground
              `,
              actionButton: `
                rounded-xl
                bg-primary
                text-primary-foreground
                hover:opacity-90
              `,
              cancelButton: `
                rounded-xl
                bg-secondary
                text-secondary-foreground
              `,
              closeButton: `
                border
                border-white/10
                bg-background/70
                backdrop-blur-md
              `,
            },
          }}
        />
      </MotionProvider>
    </ThemeProvider>
  );
}