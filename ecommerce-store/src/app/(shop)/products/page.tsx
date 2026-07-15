import type { Metadata } from "next";
import type { ComponentPropsWithoutRef } from "react";

import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import ProductGrid from "@/components/product/ProductGrid";
import SearchBar from "@/components/search/SearchBar";
import { SITE_CONFIG } from "@/constants/site";
import { products } from "@/data/products";

/* -------------------------------------------------------------------------- */
/* Metadata                                                                   */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Products",
  description: `Browse all products available at ${SITE_CONFIG.name}.`,
};

/* -------------------------------------------------------------------------- */
/* Products Page                                                              */
/* -------------------------------------------------------------------------- */

export default function ProductsPage() {
  return (
    <Container className="py-16 sm:py-20">
      {/* -------------------------------------------------------------------- */}
      {/* Page Heading                                                         */}
      {/* -------------------------------------------------------------------- */}

      <SectionHeading
        badge="All Products"
        title="Explore Our Complete Collection"
        description="Browse our curated collection of premium products across every category."
      />

      {/* -------------------------------------------------------------------- */}
      {/* Search                                                               */}
      {/* -------------------------------------------------------------------- */}

      <div className="mx-auto mt-10 max-w-2xl">
        {/* Cast props to SearchBar prop type to satisfy differing SearchBar prop types */}
        <SearchBar
          {...({
            items: products,
            placeholder: "Search products...",
          } as ComponentPropsWithoutRef<typeof SearchBar>)}
        />
      </div>

      {/* -------------------------------------------------------------------- */}
      {/* Products Grid                                                        */}
      {/* -------------------------------------------------------------------- */}

            <div className="mt-12">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {/* ---------------------------------------------------------------- */}
          {/* Product Count                                                    */}
          {/* ---------------------------------------------------------------- */}

          <p className="text-sm text-muted-foreground">
            Showing{" "}
            <span className="font-semibold text-foreground">
              {products.length}
            </span>{" "}
            {products.length === 1 ? "product" : "products"}
          </p>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Products Grid                                                      */}
        {/* ------------------------------------------------------------------ */}

        <ProductGrid
          products={products}
          columns={4}
          priorityCount={4}
        />
      </div>
    </Container>
  );
}