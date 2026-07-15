"use client";

/**
 * ============================================================================
 * Login Form
 * ============================================================================
 *
 * Client-side login form with React Hook Form, Zod validation,
 * and authentication context integration.
 */

import { useState, useTransition } from "react";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Lock, LogIn, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import Container from "@/components/common/Container";
import Input from "@/components/common/Input";
import { useAuth } from "@/components/providers/AuthProvider";

/* -------------------------------------------------------------------------- */
/* Validation Schema                                                          */
/* -------------------------------------------------------------------------- */

const loginSchema = z.object({
  email: z
    .email("Please enter a valid email address.")
    .trim(),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters."),

  rememberMe: z.boolean(),
});

type LoginFormData = z.infer<typeof loginSchema>;

/* -------------------------------------------------------------------------- */
/* Login Form                                                                 */
/* -------------------------------------------------------------------------- */

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState<string | null>(null);

  const [isPending, startTransition] = useTransition();

  const redirect =
    searchParams.get("redirect") ?? "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),

    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

    /* ------------------------------------------------------------------------ */
  /* Submit Handler                                                           */
  /* ------------------------------------------------------------------------ */

  async function onSubmit(values: LoginFormData) {
    setError(null);

    startTransition(async () => {
      try {
        await login(values);

        router.replace(redirect);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Unable to sign in. Please try again.",
        );
      }
    });
  }

  /* ------------------------------------------------------------------------ */
  /* Login Form                                                               */
  /* ------------------------------------------------------------------------ */

  return (
    <Container className="flex min-h-[calc(100vh-8rem)] items-center justify-center py-16">
      <Card className="w-full max-w-md rounded-3xl border border-border/60 bg-background/95 p-8 shadow-2xl backdrop-blur">
        {/* ---------------------------------------------------------------- */}
        {/* Header                                                           */}
        {/* ---------------------------------------------------------------- */}

        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
            <LogIn className="h-7 w-7" />
          </div>

          <h1 className="text-3xl font-bold tracking-tight">
            Welcome Back
          </h1>

          <p className="mt-2 text-sm text-muted-foreground">
            Sign in to continue shopping.
          </p>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* Error Message                                                    */}
        {/* ---------------------------------------------------------------- */}

        {error && (
          <div className="mb-6 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
            {error}
          </div>
        )}

        {/* ---------------------------------------------------------------- */}
        {/* Form                                                             */}
        {/* ---------------------------------------------------------------- */}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >
          {/* -------------------------------------------------------------- */}
          {/* Email                                                          */}
          {/* -------------------------------------------------------------- */}

          <Input
            type="email"
            label="Email Address"
            placeholder="john@example.com"
            autoComplete="email"
            leftIcon={<Mail className="h-4 w-4" />}
            error={errors.email?.message}
            {...register("email")}
          />

                    {/* -------------------------------------------------------------- */}
          {/* Password                                                       */}
          {/* -------------------------------------------------------------- */}

          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              label="Password"
              placeholder="Enter your password"
              autoComplete="current-password"
              leftIcon={<Lock className="h-4 w-4" />}
              error={errors.password?.message}
              {...register("password")}
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword((previous) => !previous)
              }
              aria-label={
                showPassword
                  ? "Hide password"
                  : "Show password"
              }
              aria-pressed={showPassword}
              className="absolute right-4 top-[2.9rem] text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* -------------------------------------------------------------- */}
          {/* Remember Me / Forgot Password                                 */}
          {/* -------------------------------------------------------------- */}

          <div className="flex items-center justify-between gap-4 text-sm">
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
                {...register("rememberMe")}
              />

              <span className="text-muted-foreground">
                Remember me
              </span>
            </label>

            <Link
              href="/forgot-password"
              className="font-medium text-primary transition-colors hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* -------------------------------------------------------------- */}
          {/* Submit Button                                                  */}
          {/* -------------------------------------------------------------- */}

          <Button
            type="submit"
            className="w-full"
            size="lg"
            loading={isPending}
            disabled={isPending}
          >
            <LogIn className="mr-2 h-4 w-4" />
            Sign In
          </Button>

          {/* -------------------------------------------------------------- */}
          {/* Register Link                                                  */}
          {/* -------------------------------------------------------------- */}

          <p className="text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="font-semibold text-primary transition-colors hover:underline"
            >
              Create one
            </Link>
          </p>
        </form>
      </Card>
    </Container>
  );
}