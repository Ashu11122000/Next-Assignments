/**
 * ============================================================================
 * Authentication Utilities
 * ============================================================================
 *
 * High-level authentication helpers built on top of the session utilities.
 * These functions simulate authentication for the frontend-only
 * e-commerce application and can later be replaced with real API calls
 * without changing the rest of the application.
 */

import type {
  AuthResponse,
  LoginFormValues,
  RegisterFormValues,
  Session,
  User,
} from "@/types/auth";

import {
  clearSession,
  getSession,
  isAuthenticated,
  setSession,
} from "@/lib/session";

/* -------------------------------------------------------------------------- */
/* Mock User                                                                   */
/* -------------------------------------------------------------------------- */

const MOCK_USER: User = {
  id: "1",
  firstName: "John",
  lastName: "Doe",
  email: "john@example.com",
  role: "user",
  avatar: "/images/avatar/default-avatar.png",
};

/* -------------------------------------------------------------------------- */
/* Session Expiration                                                          */
/* -------------------------------------------------------------------------- */

const SESSION_DURATION = 1000 * 60 * 60 * 24 * 7; // 7 Days

/* -------------------------------------------------------------------------- */
/* Create Session                                                              */
/* -------------------------------------------------------------------------- */

function createSession(user: User): Session {
  return {
    user,
    expiresAt: new Date(Date.now() + SESSION_DURATION).toISOString(),
  };
}

/* -------------------------------------------------------------------------- */
/* Login                                                                       */
/* -------------------------------------------------------------------------- */

export async function login(
  values: LoginFormValues,
): Promise<AuthResponse> {
  // Simulate network request
  await new Promise((resolve) => setTimeout(resolve, 500));

  if (
    values.email !== MOCK_USER.email ||
    values.password.length < 6
  ) {
    return {
      success: false,
      message: "Invalid email or password.",
    };
  }

  const session = createSession(MOCK_USER);

  setSession(session);

  return {
    success: true,
    message: "Login successful.",
    user: MOCK_USER,
  };
}

/* -------------------------------------------------------------------------- */
/* Register                                                                    */
/* -------------------------------------------------------------------------- */

export async function register(
  values: RegisterFormValues,
): Promise<AuthResponse> {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const user: User = {
    id: crypto.randomUUID(),
    firstName: values.firstName,
    lastName: values.lastName,
    email: values.email,
    role: "user",
  };

  setSession(createSession(user));

  return {
    success: true,
    message: "Account created successfully.",
    user,
  };
}

/* -------------------------------------------------------------------------- */
/* Logout                                                                      */
/* -------------------------------------------------------------------------- */

export async function logout(): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 200));

  clearSession();
}

/* -------------------------------------------------------------------------- */
/* Current User                                                                */
/* -------------------------------------------------------------------------- */

export function getCurrentUser(): User | null {
  return getSession()?.user ?? null;
}

/* -------------------------------------------------------------------------- */
/* Current Session                                                             */
/* -------------------------------------------------------------------------- */

export function getCurrentSession(): Session | null {
  return getSession();
}

/* -------------------------------------------------------------------------- */
/* Authentication Status                                                       */
/* -------------------------------------------------------------------------- */

export function isLoggedIn(): boolean {
  return isAuthenticated();
}