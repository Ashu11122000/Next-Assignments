"use client";

/* =============================================================================
   Portfolio Website
   =============================================================================
   File: src/components/common/SocialLinks.tsx

   Ultra Premium Social Links

   Features
   -----------------------------------------------------------------------------
   ✓ React 19
   ✓ Next.js 16
   ✓ TypeScript
   ✓ Responsive
   ✓ Accessible
   ✓ Premium Glass UI
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

const socialLinksVariants = cva(
  [
    "flex",
    "flex-wrap",
  ].join(" "),
  {
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
  }
);

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
  links?: readonly SocialLink[];

  showLabel?: boolean;

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
  buttonVariant = "glass",
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
          className={cn(
            "group",

            showLabel
              ? [
                  "min-w-[140px]",
                  "justify-center",
                  "rounded-2xl",
                ].join(" ")
              : [
                  "h-12",
                  "w-12",
                  "rounded-2xl",
                ].join(" "),

            "border",

            "border-white/10",

            "bg-white/[0.04]",

            "backdrop-blur-2xl",

            "shadow-[0_12px_35px_rgba(15,23,42,.22)]",

            "hover:border-cyan-400/30",

            "hover:shadow-[0_18px_45px_rgba(59,130,246,.22)]"
          )}
        >
          <Link
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className={cn(
              "flex",
              "items-center",
              "justify-center",

              showLabel && "gap-2.5"
            )}
          >
            <span
              className="
                flex
                items-center
                justify-center

                transition-transform
                duration-300

                group-hover:-translate-y-0.5
                group-hover:scale-110
              "
            >
              {link.icon}
            </span>

            {showLabel && (
              <span
                className="
                  text-sm
                  font-medium
                  tracking-wide
                "
              >
                {link.label}
              </span>
            )}
          </Link>
        </Button>
      ))}
    </div>
  );
}