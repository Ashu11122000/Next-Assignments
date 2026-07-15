import Link from "next/link";

import { ArrowRight } from "lucide-react";

import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import ProductGrid from "@/components/product/ProductGrid";
import { cn } from "@/lib/utils";
import type { RelatedProductsProps } from "@/types/product";

/* -------------------------------------------------------------------------- */
/* Related Products                                                           */
/* -------------------------------------------------------------------------- */

export default function RelatedProducts({
  products,
}: RelatedProductsProps) {
  return (
    <section
      aria-labelledby="related-products-heading"
      className="py-16 sm:py-20"
    >
      <Container>
        {/* ------------------------------------------------------------------ */}
        {/* Section Heading                                                    */}
        {/* ------------------------------------------------------------------ */}

        <SectionHeading
          id="related-products-heading"
          badge="You May Also Like"
          title="Related Products"
          description="Discover similar products that complement your current selection and explore more options from the same category."
          action={
            <Button
              asChild
              variant="outline"
            >
              <Link href="/products">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          }
        />

                {/* ------------------------------------------------------------------ */}
        {/* Related Products Grid                                              */}
        {/* ------------------------------------------------------------------ */}

        <div className="mt-12">
          {products.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-border bg-muted/20 px-6 py-16 text-center">
              <h3 className="text-lg font-semibold text-foreground">
                No Related Products
              </h3>

              <p className="mt-2 text-muted-foreground">
                We couldn&apos;t find any related products for this item at the
                moment. Please explore our full catalog for more options.
              </p>

              <Button
                asChild
                className="mt-6"
              >
                <Link href="/products">
                  Browse Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
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