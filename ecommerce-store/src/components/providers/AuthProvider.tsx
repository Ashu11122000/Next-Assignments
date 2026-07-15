"use client";

/**
 * ============================================================================
 * Authentication Provider
 * ============================================================================
 *
 * Provides authentication state and actions throughout the application using
 * React Context. This implementation is designed for a frontend-only
 * e-commerce application and can later be replaced with a real backend
 * without changing consumer components.
 */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  getCurrentUser,
  isLoggedIn,
  login as loginUser,
  logout as logoutUser,
  register as registerUser,
} from "@/lib/auth";

import type {
  AuthContextValue,
  LoginFormValues,
  RegisterFormValues,
  User,
} from "@/types/auth";

/* -------------------------------------------------------------------------- */
/* Context                                                                    */
/* -------------------------------------------------------------------------- */

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

/* -------------------------------------------------------------------------- */
/* Props                                                                      */
/* -------------------------------------------------------------------------- */

interface AuthProviderProps {
  children: ReactNode;
}

/* -------------------------------------------------------------------------- */
/* Provider                                                                   */
/* -------------------------------------------------------------------------- */

export default function AuthProvider({
  children,
}: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  /* ------------------------------------------------------------------------ */
  /* Initialize Session                                                       */
  /* ------------------------------------------------------------------------ */

  useEffect(() => {
    if (isLoggedIn()) {
      setUser(getCurrentUser());
    }

    setIsLoading(false);
  }, []);

  /* ------------------------------------------------------------------------ */
  /* Login                                                                    */
  /* ------------------------------------------------------------------------ */

  const login = useCallback(
    async (values: LoginFormValues) => {
      const response = await loginUser(values);

      if (!response.success || !response.user) {
        throw new Error(response.message);
      }

      setUser(response.user);
    },
    [],
  );

  /* ------------------------------------------------------------------------ */
  /* Register                                                                 */
  /* ------------------------------------------------------------------------ */

  const register = useCallback(
    async (values: RegisterFormValues) => {
      const response = await registerUser(values);

      if (!response.success || !response.user) {
        throw new Error(response.message);
      }

      setUser(response.user);
    },
    [],
  );

  /* ------------------------------------------------------------------------ */
  /* Logout                                                                   */
  /* ------------------------------------------------------------------------ */

  const logout = useCallback(async () => {
    await logoutUser();

    setUser(null);
  }, []);

  /* ------------------------------------------------------------------------ */
  /* Context Value                                                            */
  /* ------------------------------------------------------------------------ */

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      isAuthenticated: user !== null,
      isLoading,
      login,
      register,
      logout,
    }),
    [
      user,
      isLoading,
      login,
      register,
      logout,
    ],
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

/* -------------------------------------------------------------------------- */
/* Hook                                                                       */
/* -------------------------------------------------------------------------- */

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used within an AuthProvider.",
    );
  }

  return context;
}