import * as React from "react";

import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/* Props                                                                       */
/* -------------------------------------------------------------------------- */

export type SkeletonProps = React.HTMLAttributes<HTMLDivElement>;

/* -------------------------------------------------------------------------- */
/* Component                                                                   */
/* -------------------------------------------------------------------------- */

function Skeleton({
  className,
  ...props
}: Readonly<SkeletonProps>) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "animate-pulse rounded-xl bg-muted",
        className,
      )}
      {...props}
    />
  );
}

export default Skeleton;