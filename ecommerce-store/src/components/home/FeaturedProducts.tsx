import Link from "next/link";

import { ArrowRight } from "lucide-react";

import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import ProductCard from "@/components/product/ProductCard";
import { products } from "@/data/products";

/* -------------------------------------------------------------------------- */
/* Featured Products                                                          */
/* -------------------------------------------------------------------------- */

export default function FeaturedProducts() {
  const featuredProducts = products.filter(
    (product) => product.featured,
  );

  return (
    <section
      aria-labelledby="featured-products-heading"
      className="relative overflow-hidden py-20 sm:py-24"
    >
      {/* ------------------------------------------------------------------ */}
      {/* Background */}
      {/* ------------------------------------------------------------------ */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/3 top-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <Container>
        {/* -------------------------------------------------------------- */}
        {/* Section Heading */}
        {/* -------------------------------------------------------------- */}

        <SectionHeading
          badge="Featured Collection"
          title="Handpicked Products You'll Love"
          description="Discover our carefully selected featured products, chosen for their exceptional quality, customer popularity, and outstanding value."
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

        {/* -------------------------------------------------------------- */}
        {/* Product Grid (Part 2) */}
        {/* -------------------------------------------------------------- */}

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                      {featuredProducts.length > 0 ? (
            featuredProducts.map((product, index) => (
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
                  No Featured Products
                </h3>

                <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-muted-foreground">
                  We couldn&apos;t find any featured products at the moment.
                  Please check back later for our latest curated
                  collection.
                </p>

                <Button
                  asChild
                  className="mt-8"
                >
                  <Link href="/products">
                    Browse All Products
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