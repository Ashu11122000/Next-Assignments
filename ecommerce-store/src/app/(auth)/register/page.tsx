/**
 * ============================================================================
 * Register Page
 * ============================================================================
 *
 * Server Component responsible for rendering the registration page.
 * Interactive functionality is delegated to the RegisterForm client component.
 */

import type { Metadata } from "next";

import RegisterForm from "@/components/auth/RegisterForm";

/* -------------------------------------------------------------------------- */
/* Metadata                                                                   */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Create Account",
  description:
    "Create your account to save favorites, manage orders, and enjoy a faster checkout experience.",
  robots: {
    index: false,
    follow: false,
  },
};

/* -------------------------------------------------------------------------- */
/* Register Page                                                              */
/* -------------------------------------------------------------------------- */

export default function RegisterPage() {
  return <RegisterForm />;
}