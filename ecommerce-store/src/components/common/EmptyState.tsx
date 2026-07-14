import * as React from "react";

import { PackageSearch } from "lucide-react";

import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/* Props                                                                       */
/* -------------------------------------------------------------------------- */

export interface EmptyStateProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title: string;

  description?: string;

  icon?: React.ReactNode;

  action?: React.ReactNode;
}

/* -------------------------------------------------------------------------- */
/* Component                                                                   */
/* -------------------------------------------------------------------------- */

function EmptyState({
  title,
  description,
  icon,
  action,
  className,
  ...props
}: Readonly<EmptyStateProps>) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-muted/20 px-6 py-16 text-center",
        className,
      )}
      {...props}
    >
      <div className="mb-6 rounded-full bg-muted p-4 text-muted-foreground">
        {icon ?? <PackageSearch className="h-10 w-10" />}
      </div>

      <h2 className="text-2xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>

      {description && (
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}

      {action && <div className="mt-8">{action}</div>}
    </div>
  );
}

export default EmptyState;