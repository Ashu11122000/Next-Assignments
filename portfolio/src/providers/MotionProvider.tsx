"use client";

/**
 * =============================================================================
 * Portfolio
 * -----------------------------------------------------------------------------
 * File: src/providers/MotionProvider.tsx
 * -----------------------------------------------------------------------------
 * Global Motion Provider
 * -----------------------------------------------------------------------------
 *
 * Responsibilities:
 * - Enables Framer Motion throughout the application.
 * - Honors the user's "prefers-reduced-motion" accessibility setting.
 * - Provides a single place for future animation configuration.
 * - Avoids unnecessary client-side overhead.
 *
 * =============================================================================
 */

import * as React from "react";

import { MotionConfig, useReducedMotion } from "framer-motion";

interface MotionProviderProps {
  children: React.ReactNode;
}

export default function MotionProvider({
  children,
}: MotionProviderProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <MotionConfig
      reducedMotion={prefersReducedMotion ? "always" : "never"}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </MotionConfig>
  );
}