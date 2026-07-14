"use client";

import Image from "next/image";
import Link from "next/link";

import { ROUTES } from "@/constants/routes";
import { SITE_CONFIG } from "@/constants/site";
import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/* Props                                                                       */
/* -------------------------------------------------------------------------- */

export interface LogoProps {
  className?: string;

  href?: string;

  showText?: boolean;

  priority?: boolean;
}

/* -------------------------------------------------------------------------- */
/* Component                                                                   */
/* -------------------------------------------------------------------------- */

export default function Logo({
  className,
  href = ROUTES.home,
  showText = true,
  priority = false,
}: Readonly<LogoProps>) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-3 transition-opacity hover:opacity-90",
        className,
      )}
      aria-label={`${SITE_CONFIG.name} Home`}
    >
      <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-linear-to-br from-slate-900 to-slate-700 shadow-md dark:from-white dark:to-neutral-300">
        <Image
          src="/images/logo/logo.png"
          alt={SITE_CONFIG.name}
          width={44}
          height={44}
          priority={priority}
          className="object-contain p-1"
        />
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <span className="text-lg font-bold tracking-tight text-foreground">
            {SITE_CONFIG.name}
          </span>

          <span className="text-xs text-muted-foreground">
            Premium Store
          </span>
        </div>
      )}
    </Link>
  );
}