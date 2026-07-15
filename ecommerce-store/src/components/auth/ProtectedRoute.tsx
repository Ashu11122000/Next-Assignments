"use client";

/**
 * ============================================================================
 * Protected Route
 * ============================================================================
 *
 * Protects client-side pages by checking the user's authentication status.
 * Unauthenticated users are redirected to the login page while preserving
 * the original destination.
 */

import { useEffect } from "react";

import { usePathname, useRouter } from "next/navigation";

import Spinner from "@/components/common/Spinner";
import { useAuth } from "@/components/providers/AuthProvider";

import type { ProtectedRouteProps } from "@/types/auth";

/* -------------------------------------------------------------------------- */
/* Protected Route                                                            */
/* -------------------------------------------------------------------------- */

export default function ProtectedRoute({
  children,
}: ProtectedRouteProps) {
  const router = useRouter();
  const pathname = usePathname();

  const {
    isAuthenticated,
    isLoading,
  } = useAuth();

  /* ------------------------------------------------------------------------ */
  /* Redirect Unauthenticated Users                                           */
  /* ------------------------------------------------------------------------ */

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (!isAuthenticated) {
      const redirect = encodeURIComponent(pathname);

      router.replace(`/login?redirect=${redirect}`);
    }
  }, [
    isAuthenticated,
    isLoading,
    pathname,
    router,
  ]);

  /* ------------------------------------------------------------------------ */
  /* Loading State                                                            */
  /* ------------------------------------------------------------------------ */

  if (isLoading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  /* ------------------------------------------------------------------------ */
  /* Prevent Flash of Protected Content                                       */
  /* ------------------------------------------------------------------------ */

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  /* ------------------------------------------------------------------------ */
  /* Render Protected Content                                                 */
  /* ------------------------------------------------------------------------ */

  return <>{children}</>;
}