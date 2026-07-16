"use client";

/* =============================================================================
   Portfolio UI Library
   -----------------------------------------------------------------------------
   File: src/components/common/TechBadge.tsx

   Ultra Premium reusable Tech Badge component.

   Features
   -----------------------------------------------------------------------------
   ✓ React 19
   ✓ Next.js 16
   ✓ TypeScript
   ✓ Uses reusable Badge component
   ✓ Premium Glass UI
   ✓ Responsive
   ✓ Accessible
============================================================================= */

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import type { IconType } from "react-icons";
import {
  SiCss,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiGit,
  SiGithub,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiSqlalchemy,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { Code2 } from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

/* =============================================================================
   Variants
============================================================================= */

const techBadgeVariants = cva(
  [
    "transition-all",
    "duration-300",
    "ease-out",

    "hover:-translate-y-0.5",

    "hover:scale-[1.03]",

    "cursor-default",
  ].join(" "),
  {
    variants: {
      size: {
        sm: "",

        md: "",

        lg: "",
      },
    },

    defaultVariants: {
      size: "md",
    },
  }
);

/* =============================================================================
   Icons
============================================================================= */

const techIcons = {
  "Next.js": SiNextdotjs,
  React: SiReact,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  NestJS: SiNestjs,
  FastAPI: SiFastapi,
  Python: SiPython,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  Prisma: SiPrisma,
  SQLAlchemy: SiSqlalchemy,
  Docker: SiDocker,
  GraphQL: SiGraphql,
  "Tailwind CSS": SiTailwindcss,
  HTML5: SiHtml5,
  CSS3: SiCss,
  Git: SiGit,
  GitHub: SiGithub,
} as const satisfies Record<string, IconType>;

export type Technology = keyof typeof techIcons;

const iconSizeMap = {
  sm: "h-3.5 w-3.5",

  md: "h-4 w-4",

  lg: "h-5 w-5",
} as const;

/* =============================================================================
   Props
============================================================================= */

export interface TechBadgeProps
  extends VariantProps<typeof techBadgeVariants> {
  technology: Technology | string;

  showIcon?: boolean;

  className?: string;

  variant?: React.ComponentProps<typeof Badge>["variant"];

  radius?: React.ComponentProps<typeof Badge>["radius"];
}

/* =============================================================================
   Component
============================================================================= */

export function TechBadge({
  technology,
  showIcon = true,
  size,
  variant = "glass",
  radius = "full",
  className,
}: TechBadgeProps) {
  const badgeSize = size ?? "md";

  const variantClass = techBadgeVariants({
    size: badgeSize,
  });

  const Icon =
    techIcons[technology as Technology] ?? Code2;

  return (
    <Badge
      variant={variant}
      size={badgeSize}
      radius={radius}
      className={cn(
        "group",

        "gap-2.5",

        "font-medium",

        "tracking-wide",

        "backdrop-blur-2xl",

        "border-white/10",

        "shadow-[0_10px_30px_rgba(15,23,42,.16)]",

        "hover:border-cyan-400/25",

        "hover:shadow-[0_16px_40px_rgba(59,130,246,.18)]",

        variantClass,

        className
      )}
    >
      {showIcon && (
        <span
          className="
            flex

            items-center

            justify-center

            transition-transform

            duration-300

            group-hover:scale-110

            group-hover:-translate-y-0.5
          "
        >
          <Icon
            aria-hidden="true"
            className={cn(
              "shrink-0",

              iconSizeMap[badgeSize]
            )}
          />
        </span>
      )}

      <span className="whitespace-nowrap">
        {technology}
      </span>
    </Badge>
  );
}