import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/* Container Variants                                                         */
/* -------------------------------------------------------------------------- */

const containerVariants = cva("mx-auto w-full", {
  variants: {
    size: {
      sm: "max-w-3xl",
      md: "max-w-5xl",
      lg: "max-w-6xl",
      xl: "max-w-7xl",
      full: "max-w-full",
    },

    padding: {
      none: "",
      sm: "px-4 sm:px-6",
      md: "px-6 lg:px-8",
      lg: "px-8 lg:px-12",
    },
  },

  defaultVariants: {
    size: "xl",
    padding: "sm",
  },
});

/* -------------------------------------------------------------------------- */
/* Props                                                                      */
/* -------------------------------------------------------------------------- */

type ContainerElement =
  | "div"
  | "section"
  | "main"
  | "article"
  | "header"
  | "footer";

export interface ContainerProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof containerVariants> {
  as?: ContainerElement;
}

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

function Container({
  as = "div",
  className,
  size,
  padding,
  children,
  ...props
}: Readonly<ContainerProps>) {
  const Component = as;

  return (
    <Component
      className={cn(
        containerVariants({
          size,
          padding,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Container;