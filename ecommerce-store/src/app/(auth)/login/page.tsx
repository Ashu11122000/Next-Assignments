/**
 * ============================================================================
 * Login Page
 * ============================================================================
 *
 * Server Component responsible for rendering the login page.
 * Interactive functionality is delegated to the LoginForm client component.
 */

import type { Metadata } from "next";

import LoginForm from "@/components/auth/LoginForm";

/* -------------------------------------------------------------------------- */
/* Metadata                                                                   */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Login",
  description:
    "Sign in to your account to access checkout, orders, and your profile.",
  robots: {
    index: false,
    follow: false,
  },
};

/* -------------------------------------------------------------------------- */
/* Login Page                                                                 */
/* -------------------------------------------------------------------------- */

export default function LoginPage() {
  return <LoginForm />;
}