/**
 * ============================================================================
 * Session Utilities
 * ============================================================================
 *
 * Helper functions for managing the user's authentication session.
 * This implementation uses localStorage to simulate authentication
 * for the frontend-only e-commerce application.
 */

"use client";

import type { Session } from "@/types/auth";

/* -------------------------------------------------------------------------- */
/* Constants                                                                  */
/* -------------------------------------------------------------------------- */

const SESSION_KEY = "ecommerce-session";

/* -------------------------------------------------------------------------- */
/* Get Session                                                                */
/* -------------------------------------------------------------------------- */

export function getSession(): Session | null {
  if (typeof window === "undefined") {
    return null;
  }

  const session = localStorage.getItem(SESSION_KEY);

  if (!session) {
    return null;
  }

  try {
    return JSON.parse(session) as Session;
  } catch {
    return null;
  }
}

/* -------------------------------------------------------------------------- */
/* Set Session                                                                */
/* -------------------------------------------------------------------------- */

export function setSession(session: Session): void {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

/* -------------------------------------------------------------------------- */
/* Clear Session                                                              */
/* -------------------------------------------------------------------------- */

export function clearSession(): void {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.removeItem(SESSION_KEY);
}

/* -------------------------------------------------------------------------- */
/* Authentication Status                                                      */
/* -------------------------------------------------------------------------- */

export function isAuthenticated(): boolean {
  const session = getSession();

  if (!session) {
    return false;
  }

  return new Date(session.expiresAt).getTime() > Date.now();
}