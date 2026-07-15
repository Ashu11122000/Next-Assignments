import ProductCard from "@/components/product/ProductCard";
import EmptyState from "@/components/common/EmptyState";
import { cn } from "@/lib/utils";
import type { ProductGridProps } from "@/types/product";

/* -------------------------------------------------------------------------- */
/* Product Grid                                                                */
/* -------------------------------------------------------------------------- */

export default function ProductGrid({
  products,
  className,
  columns = 4,
  priorityCount = 4,
  emptyMessage = "No products found.",
}: ProductGridProps & {
  className?: string;
  columns?: 2 | 3 | 4;
  priorityCount?: number;
  emptyMessage?: string;
}) {
  /* ------------------------------------------------------------------------ */
  /* Grid Configuration                                                       */
  /* ------------------------------------------------------------------------ */

  const gridColumns = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  };

  /* ------------------------------------------------------------------------ */
  /* Empty State                                                              */
  /* ------------------------------------------------------------------------ */

  if (products.length === 0) {
    return (
      <EmptyState
        title="No Products Available"
        description={emptyMessage}
      />
    );
  }

    /* ------------------------------------------------------------------------ */
  /* Product Grid                                                              */
  /* ------------------------------------------------------------------------ */

  return (
    <div
      className={cn(
        "grid gap-6",
        gridColumns[columns],
        className,
      )}
    >
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          priority={index < priorityCount}
        />
      ))}
    </div>
  );
}