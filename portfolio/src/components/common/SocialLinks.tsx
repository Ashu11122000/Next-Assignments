"use client";

/* =============================================================================
   Portfolio UI Library
   -----------------------------------------------------------------------------
   File: src/components/common/SocialLinks.tsx

   Production-ready reusable Social Links component.

   Features
   -----------------------------------------------------------------------------
   ✓ React 19
   ✓ Next.js 16
   ✓ TypeScript
   ✓ Responsive
   ✓ Accessible
   ✓ Uses reusable Button component
   ✓ Multiple variants
   ✓ Multiple sizes
   ✓ External link security
============================================================================= */

import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const socialLinksVariants = cva("flex items-center", {
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

export interface SocialLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}

export interface SocialLinksProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof socialLinksVariants> {
  links?: SocialLink[];

  iconOnly?: boolean;

  buttonVariant?: React.ComponentProps<typeof Button>["variant"];
}

const defaultLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/Ashu11122000",
    icon: <SiGithub className="h-5 w-5" />,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/ashish-sharma-383439191",
    icon: <FaLinkedin className="h-5 w-5" />,
  },
  {
    label: "Email",
    href: "mailto:ashu11vats@gmail.com",
    icon: <Mail className="h-5 w-5" />,
  },
];

export function SocialLinks({
  className,
  direction,
  gap,
  alignment,
  links = defaultLinks,
  iconOnly = true,
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
          size={iconOnly ? "icon" : "md"}
          aria-label={link.label}
        >
          <Link
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}

            {!iconOnly && <span>{link.label}</span>}
          </Link>
        </Button>
      ))}
    </div>
  );
}