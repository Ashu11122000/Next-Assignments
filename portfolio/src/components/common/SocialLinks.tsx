"use client";

/* =============================================================================
   Portfolio Website
   =============================================================================
   File: src/components/common/SocialLinks.tsx
   -----------------------------------------------------------------------------
   Reusable Social Links
   -----------------------------------------------------------------------------

   Responsibilities
   ----------------
   • Render reusable social profile links.
   • Support icon-only and labeled layouts.
   • Reuse the shared Button component.
   • Provide accessible external links.
   • Remain responsive and configurable.

   Features
   --------
   ✓ React 19
   ✓ Next.js 16
   ✓ TypeScript
   ✓ CVA Variants
   ✓ Accessible
   ✓ Responsive
   ✓ react-icons (Brand Icons)
   ✓ Lucide React (UI Icons)
   ✓ Production Ready

============================================================================= */

import * as React from "react";
import Link from "next/link";

import { cva, type VariantProps } from "class-variance-authority";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

/* =============================================================================
   Variants
============================================================================= */

const socialLinksVariants = cva("flex", {
  variants: {
    direction: {
      row: "flex-row",
      column: "flex-col",
    },

    gap: {
      sm: "gap-2",
      md: "gap-3",
      lg: "gap-4",
    },

    alignment: {
      start: "items-start justify-start",
      center: "items-center justify-center",
      end: "items-end justify-end",
    },
  },

  defaultVariants: {
    direction: "row",
    gap: "md",
    alignment: "center",
  },
});

/* =============================================================================
   Types
============================================================================= */

export interface SocialLink {
  readonly label: string;
  readonly href: string;
  readonly icon: React.ReactNode;
}

export interface SocialLinksProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof socialLinksVariants> {
  /**
   * Override default links.
   */
  links?: readonly SocialLink[];

  /**
   * Show text labels beside icons.
   *
   * true  → GitHub
   * false → icon only
   */
  showLabel?: boolean;

  /**
   * Button variant.
   */
  buttonVariant?: React.ComponentProps<typeof Button>["variant"];
}

/* =============================================================================
   Default Links
============================================================================= */

const DEFAULT_LINKS: readonly SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/Ashu11122000",
    icon: <FaGithub className="h-5 w-5" />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ashish-sharma-383439191/",
    icon: <FaLinkedin className="h-5 w-5" />,
  },
  {
    label: "Email",
    href: "mailto:ashu11vats@gmail.com",
    icon: <Mail className="h-5 w-5" />,
  },
];

/* =============================================================================
   Component
============================================================================= */

export default function SocialLinks({
  className,
  direction,
  gap,
  alignment,
  links = DEFAULT_LINKS,
  showLabel = false,
  buttonVariant = "ghost",
  ...props
}: SocialLinksProps) {
  return (
    <div
      className={cn(
        socialLinksVariants({
          direction,
          gap,
          alignment,
        }),
        className
      )}
      {...props}
    >
      {links.map((link) => (
        <Button
          key={link.label}
          asChild
          variant={buttonVariant}
          size={showLabel ? "md" : "icon"}
          aria-label={link.label}
          title={link.label}
        >
          <Link
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
          >
            {link.icon}

            {showLabel && (
              <span className="ml-2">
                {link.label}
              </span>
            )}
          </Link>
        </Button>
      ))}
    </div>
  );
}