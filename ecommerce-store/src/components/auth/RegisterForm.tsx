"use client";

/**
 * ============================================================================
 * Register Form
 * ============================================================================
 *
 * Client-side registration form using React Hook Form, Zod validation,
 * and the application's authentication context.
 */

import { useState, useTransition } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  User,
  UserPlus,
} from "lucide-react";
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

const registerSchema = z
  .object({
    firstName: z
      .string()
      .trim()
      .min(2, "First name must be at least 2 characters."),

    lastName: z
      .string()
      .trim()
      .min(2, "Last name must be at least 2 characters."),

    email: z
      .email("Please enter a valid email address.")
      .trim(),

    password: z
      .string()
      .min(6, "Password must be at least 6 characters."),

    confirmPassword: z.string(),

    acceptTerms: z.boolean().refine(
      (value) => value,
      {
        message: "You must accept the terms and conditions.",
      },
    ),
  })
  .refine(
    (data) => data.password === data.confirmPassword,
    {
      message: "Passwords do not match.",
      path: ["confirmPassword"],
    },
  );

type RegisterFormData = z.infer<typeof registerSchema>;

/* -------------------------------------------------------------------------- */
/* Register Form                                                              */
/* -------------------------------------------------------------------------- */

export default function RegisterForm() {
  const router = useRouter();

  const { register: registerUser } = useAuth();

  const [showPassword, setShowPassword] =
    useState(false);

  const [
    showConfirmPassword,
    setShowConfirmPassword,
  ] = useState(false);

  const [error, setError] =
    useState<string | null>(null);

  const [isPending, startTransition] =
    useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),

    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    },
  });

    /* ------------------------------------------------------------------------ */
  /* Submit Handler                                                           */
  /* ------------------------------------------------------------------------ */

  async function onSubmit(values: RegisterFormData) {
    setError(null);

    startTransition(async () => {
      try {
        await registerUser(values);

        router.replace("/");
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Unable to create your account. Please try again.",
        );
      }
    });
  }

  /* ------------------------------------------------------------------------ */
  /* Register Form                                                            */
  /* ------------------------------------------------------------------------ */

  return (
    <Container className="flex min-h-[calc(100vh-8rem)] items-center justify-center py-16">
      <Card className="w-full max-w-xl rounded-3xl border border-border/60 bg-background/95 p-8 shadow-2xl backdrop-blur">
        {/* ---------------------------------------------------------------- */}
        {/* Header                                                           */}
        {/* ---------------------------------------------------------------- */}

        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
            <UserPlus className="h-7 w-7" />
          </div>

          <h1 className="text-3xl font-bold tracking-tight">
            Create Your Account
          </h1>

          <p className="mt-2 text-sm text-muted-foreground">
            Join our store and start shopping today.
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
          {/* Name Fields                                                    */}
          {/* -------------------------------------------------------------- */}

          <div className="grid gap-4 sm:grid-cols-2">
            <Input
              label="First Name"
              placeholder="John"
              autoComplete="given-name"
              leftIcon={<User className="h-4 w-4" />}
              error={errors.firstName?.message}
              {...register("firstName")}
            />

            <Input
              label="Last Name"
              placeholder="Doe"
              autoComplete="family-name"
              leftIcon={<User className="h-4 w-4" />}
              error={errors.lastName?.message}
              {...register("lastName")}
            />
          </div>

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
              placeholder="Create a password"
              autoComplete="new-password"
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
          {/* Confirm Password                                               */}
          {/* -------------------------------------------------------------- */}

          <div className="relative">
            <Input
              type={
                showConfirmPassword
                  ? "text"
                  : "password"
              }
              label="Confirm Password"
              placeholder="Confirm your password"
              autoComplete="new-password"
              leftIcon={<Lock className="h-4 w-4" />}
              error={errors.confirmPassword?.message}
              {...register("confirmPassword")}
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(
                  (previous) => !previous,
                )
              }
              aria-label={
                showConfirmPassword
                  ? "Hide confirm password"
                  : "Show confirm password"
              }
              aria-pressed={showConfirmPassword}
              className="absolute right-4 top-[2.9rem] text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              {showConfirmPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* -------------------------------------------------------------- */}
          {/* Accept Terms                                                   */}
          {/* -------------------------------------------------------------- */}

          <div className="space-y-2">
            <label className="flex cursor-pointer items-start gap-3 text-sm">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary"
                {...register("acceptTerms")}
              />

              <span className="leading-6 text-muted-foreground">
                I agree to the{" "}
                <Link
                  href="/terms"
                  className="font-medium text-primary transition-colors hover:underline"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="font-medium text-primary transition-colors hover:underline"
                >
                  Privacy Policy
                </Link>
                .
              </span>
            </label>

            {errors.acceptTerms && (
              <p
                className="text-sm text-destructive"
                role="alert"
              >
                {errors.acceptTerms.message}
              </p>
            )}
          </div>

          {/* -------------------------------------------------------------- */}
          {/* Register Button                                                */}
          {/* -------------------------------------------------------------- */}

          <Button
            type="submit"
            className="w-full"
            size="lg"
            loading={isPending}
            disabled={isPending}
          >
            <UserPlus className="mr-2 h-4 w-4" />
            Create Account
          </Button>

          {/* -------------------------------------------------------------- */}
          {/* Login Link                                                     */}
          {/* -------------------------------------------------------------- */}

          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-primary transition-colors hover:underline"
            >
              Sign in
            </Link>
          </p>
        </form>
      </Card>
    </Container>
  );
}