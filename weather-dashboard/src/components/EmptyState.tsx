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
 * Premium reusable empty state component.
 *
 * Features
 * --------
 * ✓ Premium dashboard styling
 * ✓ Glassmorphism ready
 * ✓ Responsive
 * ✓ Accessible
 * ✓ Optional CTA
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
    <Card className="overflow-hidden">
      <CardContent className="relative flex min-h-[420px] flex-col items-center justify-center px-8 py-14 text-center">

        {/* Background Glow */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-500/5 via-cyan-500/5 to-blue-500/5" />

        {/* Icon */}
        <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-border/50 bg-background/70 shadow-lg backdrop-blur-xl transition-transform duration-300 hover:scale-105">
          {icon ?? (
            <CloudOff
              className="h-12 w-12 text-sky-500"
              aria-hidden="true"
            />
          )}
        </div>

        {/* Title */}
        <h2 className="max-w-xl text-3xl font-bold tracking-tight text-foreground">
          {title}
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-lg text-base leading-7 text-muted-foreground">
          {description}
        </p>

        {/* Action */}
        {actionLabel && actionHref && (
          <Button
            asChild
            size="lg"
            className="mt-10 min-w-[180px]"
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