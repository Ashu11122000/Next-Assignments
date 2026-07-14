import Link from "next/link";

import { ArrowRight } from "lucide-react";

import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import ProductCard from "@/components/product/ProductCard";
import { products } from "@/data/products";

/* -------------------------------------------------------------------------- */
/* Trending Products                                                          */
/* -------------------------------------------------------------------------- */

export default function TrendingProducts() {
  const trendingProducts = products.filter(
    (product) => product.trending,
  );

  return (
    <section
      aria-labelledby="trending-products-heading"
      className="relative overflow-hidden py-20 sm:py-24"
    >
      {/* ------------------------------------------------------------------ */}
      {/* Background */}
      {/* ------------------------------------------------------------------ */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 bottom-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <Container>
        {/* -------------------------------------------------------------- */}
        {/* Section Heading */}
        {/* -------------------------------------------------------------- */}

        <SectionHeading
          badge="Trending Now"
          title="Most Popular Products This Week"
          description="Explore the products our customers are loving right now. These trending picks are updated regularly based on popularity and demand."
          action={
            <Button
              asChild
              variant="outline"
            >
              <Link href="/products">
                Shop All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          }
        />

        {/* -------------------------------------------------------------- */}
        {/* Product Grid (Part 2) */}
        {/* -------------------------------------------------------------- */}

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                      {trendingProducts.length > 0 ? (
            trendingProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                priority={index < 4}
              />
            ))
          ) : (
            <div className="col-span-full">
              <div className="rounded-3xl border border-dashed border-border bg-muted/20 px-8 py-20 text-center">
                <h3 className="text-xl font-semibold text-foreground">
                  No Trending Products
                </h3>

                <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-muted-foreground">
                  There are no trending products available at the
                  moment. Check back soon to discover what&apos;s popular
                  with our customers.
                </p>

                <Button
                  asChild
                  className="mt-8"
                >
                  <Link href="/products">
                    Explore All Products
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>

         </Container>
    </section>
  );
}