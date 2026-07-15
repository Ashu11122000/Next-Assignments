import CategoryCard from "@/components/product/CategoryCard";
import EmptyState from "@/components/common/EmptyState";
import { cn } from "@/lib/utils";
import type { Category } from "@/types/category";

/* -------------------------------------------------------------------------- */
/* Category Grid                                                              */
/* -------------------------------------------------------------------------- */

interface CategoryGridProps {
  categories: Category[];
  className?: string;
  columns?: 2 | 3 | 4;
}

export default function CategoryGrid({
  categories,
  className,
  columns = 4,
}: CategoryGridProps) {
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

  if (categories.length === 0) {
    return (
      <EmptyState
        title="No Categories Available"
        description="There are currently no categories to display."
      />
    );
  }

    /* ------------------------------------------------------------------------ */
  /* Category Grid                                                            */
  /* ------------------------------------------------------------------------ */

  return (
    <div
      className={cn(
        "grid gap-6",
        gridColumns[columns],
        className,
      )}
    >
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          category={category}
        />
      ))}
    </div>
  );
}