/**
 * ============================================================================
 * Authentication Types
 * ============================================================================
 *
 * Shared authentication models used throughout the application.
 */

import type { ReactNode } from "react";

/* -------------------------------------------------------------------------- */
/* User                                                                       */
/* -------------------------------------------------------------------------- */

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar?: string;
  role: "user" | "admin";
}

/* -------------------------------------------------------------------------- */
/* Authentication Session                                                     */
/* -------------------------------------------------------------------------- */

export interface Session {
  user: User;
  expiresAt: string;
}

/* -------------------------------------------------------------------------- */
/* Login Form                                                                 */
/* -------------------------------------------------------------------------- */

export interface LoginFormValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

/* -------------------------------------------------------------------------- */
/* Register Form                                                              */
/* -------------------------------------------------------------------------- */

export interface RegisterFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

/* -------------------------------------------------------------------------- */
/* Authentication Response                                                    */
/* -------------------------------------------------------------------------- */

export interface AuthResponse {
  success: boolean;
  message: string;
  user?: User;
}

/* -------------------------------------------------------------------------- */
/* Protected Route Props                                                      */
/* -------------------------------------------------------------------------- */

export interface ProtectedRouteProps {
  children: ReactNode;
}

/* -------------------------------------------------------------------------- */
/* Authentication Context                                                     */
/* -------------------------------------------------------------------------- */

export interface AuthContextValue {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;

  login: (values: LoginFormValues) => Promise<void>;
  register: (values: RegisterFormValues) => Promise<void>;
  logout: () => Promise<void>;
}