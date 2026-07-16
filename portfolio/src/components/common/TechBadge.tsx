"use client";

/* =============================================================================
   Portfolio UI Library
   -----------------------------------------------------------------------------
   File: src/components/common/TechBadge.tsx

   Production-ready reusable Tech Badge component.

   Features
   -----------------------------------------------------------------------------
   ✓ React 19
   ✓ Next.js 16
   ✓ TypeScript
   ✓ Uses reusable Badge component
   ✓ react-icons integration
   ✓ Accessible
   ✓ Fully reusable
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

const techBadgeVariants = cva("", {
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
});

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

export interface TechBadgeProps
  extends VariantProps<typeof techBadgeVariants> {
  technology: Technology | string;

  showIcon?: boolean;

  className?: string;

  variant?: React.ComponentProps<typeof Badge>["variant"];

  radius?: React.ComponentProps<typeof Badge>["radius"];
}

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
      className={cn(variantClass, className)}
    >
      {showIcon && (
        <Icon
          aria-hidden="true"
          className={cn(
            "shrink-0",
            iconSizeMap[badgeSize]
          )}
        />
      )}

      <span>{technology}</span>
    </Badge>
  );
}