"use client";

import {
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

import { cn } from "@/lib/utils";
import type { Brand } from "@/types/product";
import type { Category } from "@/types/category";

/* -------------------------------------------------------------------------- */
/* Search Filters Props                                                       */
/* -------------------------------------------------------------------------- */

interface SearchFiltersProps {
  categories: Category[];
  brands: Brand[];
  className?: string;
}

/* -------------------------------------------------------------------------- */
/* Search Filters                                                             */
/* -------------------------------------------------------------------------- */

export default function SearchFilters({
  categories,
  brands,
  className,
}: SearchFiltersProps) {
  /* ------------------------------------------------------------------------ */
  /* Router Hooks                                                             */
  /* ------------------------------------------------------------------------ */

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  /* ------------------------------------------------------------------------ */
  /* URL Parameter Helpers                                                    */
  /* ------------------------------------------------------------------------ */

  const updateSearchParam = (
    key: string,
    value: string,
  ) => {
    const params = new URLSearchParams(
      searchParams.toString(),
    );

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    const queryString = params.toString();

    router.replace(
      queryString ? `${pathname}?${queryString}` : pathname,
      {
        scroll: false,
      },
    );
  };

  const getSearchParam = (key: string) =>
    searchParams.get(key) ?? "";

  
    /* ------------------------------------------------------------------------ */
  /* Search Filters                                                           */
  /* ------------------------------------------------------------------------ */

  return (
    <div
      className={cn(
        "grid gap-4",
        "grid-cols-1",
        "sm:grid-cols-2",
        "lg:grid-cols-3",
        className,
      )}
    >
      {/* -------------------------------------------------------------------- */}
      {/* Category Filter                                                      */}
      {/* -------------------------------------------------------------------- */}

      <div className="space-y-2">
        <label
          htmlFor="category-filter"
          className="text-sm font-medium text-foreground"
        >
          Category
        </label>

        <select
          id="category-filter"
          value={getSearchParam("category")}
          onChange={(event) =>
            updateSearchParam(
              "category",
              event.target.value,
            )
          }
          className={cn(
            "h-11 w-full rounded-xl border border-border",
            "bg-background px-4 text-sm",
            "transition-colors duration-200",
            "focus:border-primary",
            "focus:outline-none",
            "focus:ring-2",
            "focus:ring-primary/20",
          )}
        >
          <option value="">All Categories</option>

          {categories.map((category) => (
            <option
              key={category.id}
              value={category.slug}
            >
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {/* -------------------------------------------------------------------- */}
      {/* Brand Filter                                                         */}
      {/* -------------------------------------------------------------------- */}

      <div className="space-y-2">
        <label
          htmlFor="brand-filter"
          className="text-sm font-medium text-foreground"
        >
          Brand
        </label>

        <select
          id="brand-filter"
          value={getSearchParam("brand")}
          onChange={(event) =>
            updateSearchParam(
              "brand",
              event.target.value,
            )
          }
          className={cn(
            "h-11 w-full rounded-xl border border-border",
            "bg-background px-4 text-sm",
            "transition-colors duration-200",
            "focus:border-primary",
            "focus:outline-none",
            "focus:ring-2",
            "focus:ring-primary/20",
          )}
        >
          <option value="">All Brands</option>

          {brands.map((brand) => (
            <option
              key={brand.id}
              value={brand.name}
            >
              {brand.name}
            </option>
          ))}
        </select>
      </div>

      {/* -------------------------------------------------------------------- */}
      {/* Rating Filter                                                        */}
      {/* -------------------------------------------------------------------- */}

      <div className="space-y-2">
        <label
          htmlFor="rating-filter"
          className="text-sm font-medium text-foreground"
        >
          Minimum Rating
        </label>

        <select
          id="rating-filter"
          value={getSearchParam("rating")}
          onChange={(event) =>
            updateSearchParam(
              "rating",
              event.target.value,
            )
          }
          className={cn(
            "h-11 w-full rounded-xl border border-border",
            "bg-background px-4 text-sm",
            "transition-colors duration-200",
            "focus:border-primary",
            "focus:outline-none",
            "focus:ring-2",
            "focus:ring-primary/20",
          )}
        >
          <option value="">All Ratings</option>
          <option value="4.5">★★★★★ & Up</option>
          <option value="4">★★★★☆ & Up</option>
          <option value="3">★★★☆☆ & Up</option>
          <option value="2">★★☆☆☆ & Up</option>
          <option value="1">★☆☆☆☆ & Up</option>
        </select>
      </div>

            {/* -------------------------------------------------------------------- */}
      {/* In Stock Filter                                                      */}
      {/* -------------------------------------------------------------------- */}

      <div className="space-y-2">
        <label
          htmlFor="stock-filter"
          className="flex h-11 cursor-pointer items-center justify-between rounded-xl border border-border bg-background px-4"
        >
          <span className="text-sm font-medium text-foreground">
            In Stock Only
          </span>

          <input
            id="stock-filter"
            type="checkbox"
            checked={getSearchParam("stock") === "true"}
            onChange={(event) =>
              updateSearchParam(
                "stock",
                event.target.checked ? "true" : "",
              )
            }
            className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
          />
        </label>
      </div>

      {/* -------------------------------------------------------------------- */}
      {/* Sort Filter                                                          */}
      {/* -------------------------------------------------------------------- */}

      <div className="space-y-2">
        <label
          htmlFor="sort-filter"
          className="text-sm font-medium text-foreground"
        >
          Sort By
        </label>

        <select
          id="sort-filter"
          value={getSearchParam("sort")}
          onChange={(event) =>
            updateSearchParam(
              "sort",
              event.target.value,
            )
          }
          className={cn(
            "h-11 w-full rounded-xl border border-border",
            "bg-background px-4 text-sm",
            "transition-colors duration-200",
            "focus:border-primary",
            "focus:outline-none",
            "focus:ring-2",
            "focus:ring-primary/20",
          )}
        >
          <option value="">Newest</option>
          <option value="price-asc">
            Price: Low to High
          </option>
          <option value="price-desc">
            Price: High to Low
          </option>
          <option value="rating">
            Highest Rated
          </option>
          <option value="name">
            Name (A–Z)
          </option>
        </select>
      </div>

      {/* -------------------------------------------------------------------- */}
      {/* Reset Filters                                                        */}
      {/* -------------------------------------------------------------------- */}

      <div className="flex items-end">
        <button
          type="button"
          onClick={() => router.replace(pathname)}
          className={cn(
            "h-11 w-full rounded-xl border border-border",
            "bg-background px-4 text-sm font-medium",
            "transition-colors duration-200",
            "hover:bg-muted",
            "focus-visible:outline-none",
            "focus-visible:ring-2",
            "focus-visible:ring-primary",
            "focus-visible:ring-offset-2",
          )}
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
}