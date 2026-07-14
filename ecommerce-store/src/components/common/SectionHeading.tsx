import * as React from "react";

import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/* Props                                                                      */
/* -------------------------------------------------------------------------- */

export interface SectionHeadingProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title: string;

  description?: string;

  badge?: React.ReactNode;

  action?: React.ReactNode;

  centered?: boolean;
}

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

function SectionHeading({
  title,
  description,
  badge,
  action,
  centered = false,
  className,
  ...props
}: Readonly<SectionHeadingProps>) {
  return (
    <div
      className={cn(
        "mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
        centered && "items-center text-center md:flex-col",
        className,
      )}
      {...props}
    >
      <div className="space-y-3">
        {badge}

        <h2
          className={cn(
            "text-3xl font-bold tracking-tight text-foreground",
            "sm:text-4xl",
          )}
        >
          {title}
        </h2>

        {description && (
          <p
            className={cn(
              "max-w-2xl text-base leading-relaxed text-muted-foreground",
              centered && "mx-auto",
            )}
          >
            {description}
          </p>
        )}
      </div>

      {action && (
        <div className="shrink-0">
          {action}
        </div>
      )}
    </div>
  );
}

export default SectionHeading;