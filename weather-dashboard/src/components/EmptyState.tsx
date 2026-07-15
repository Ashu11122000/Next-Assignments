import * as React from "react";
import Link from "next/link";
import { CloudOff } from "lucide-react";

import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
} from "@/components/ui/Card";

/**
 * ============================================================================
 * Empty State
 * ============================================================================
 *
 * Server Component
 *
 * Generic empty state component for displaying
 * friendly messages when no data is available.
 *
 * Built with:
 * - React 19
 * - Next.js 16
 * - TypeScript
 * - Tailwind CSS v4
 *
 * Features
 * --------
 * ✓ Reusable
 * ✓ Accessible
 * ✓ Customizable
 * ✓ Icon support
 * ✓ Optional action button
 * ============================================================================
 */

export interface EmptyStateProps {
  title: string;

  description: string;

  icon?: React.ReactNode;

  actionLabel?: string;

  actionHref?: string;
}

export default function EmptyState({
  title,
  description,
  icon,
  actionLabel,
  actionHref,
}: EmptyStateProps) {
  return (
    <Card>
      <CardContent className="flex flex-col items-center justify-center px-6 py-16 text-center">
        <div className="mb-6 flex size-20 items-center justify-center rounded-full bg-muted">
          {icon ?? (
            <CloudOff
              className="size-10 text-muted"
              aria-hidden="true"
            />
          )}
        </div>

        <h2 className="text-2xl font-bold tracking-tight">
          {title}
        </h2>

        <p className="mt-3 max-w-md text-muted">
          {description}
        </p>

        {actionLabel && actionHref && (
          <Button
            asChild
            className="mt-8"
          >
            <Link href={actionHref}>
              {actionLabel}
            </Link>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}