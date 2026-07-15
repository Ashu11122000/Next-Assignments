import Container from "@/components/common/Container";
import EmptyState from "@/components/common/EmptyState";
import SectionHeading from "@/components/common/SectionHeading";
import ProductGrid from "@/components/product/ProductGrid";
import { cn } from "@/lib/utils";
import type { Product } from "@/types/product";

/* -------------------------------------------------------------------------- */
/* Search Results Props                                                       */
/* -------------------------------------------------------------------------- */

interface SearchResultsProps {
  products: Product[];
  query?: string;
  className?: string;
}

/* -------------------------------------------------------------------------- */
/* Search Results                                                             */
/* -------------------------------------------------------------------------- */

export default function SearchResults({
  products,
  query = "",
  className,
}: SearchResultsProps) {
  return (
    <section
      aria-labelledby="search-results-heading"
      className={cn("py-10 sm:py-12", className)}
    >
      <Container>
        {/* ------------------------------------------------------------------ */}
        {/* Results Heading                                                    */}
        {/* ------------------------------------------------------------------ */}

        <SectionHeading
          id="search-results-heading"
          badge="Search"
          title="Search Results"
          description={
            query.trim()
              ? `Results for "${query.trim()}".`
              : "Browse all available products."
          }
        />

        {/* ------------------------------------------------------------------ */}
        {/* Result Count                                                       */}
        {/* ------------------------------------------------------------------ */}

        <p
          className="mt-4 text-sm text-muted-foreground"
          aria-live="polite"
        >
          {products.length}{" "}
          {products.length === 1 ? "product" : "products"} found
        </p>

                {/* ------------------------------------------------------------------ */}
        {/* Search Results                                                     */}
        {/* ------------------------------------------------------------------ */}

        <div className="mt-8">
          {products.length === 0 ? (
            <EmptyState
              title="No Products Found"
              description={
                query.trim()
                  ? `We couldn't find any products matching "${query.trim()}". Try a different search term or adjust your filters.`
                  : "There are currently no products available."
              }
            />
          ) : (
            <ProductGrid
              products={products}
              columns={4}
              priorityCount={4}
              className="gap-8"
            />
          )}
        </div>
      </Container>
    </section>
  );
}