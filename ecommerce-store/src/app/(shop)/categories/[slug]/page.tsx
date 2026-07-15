
import type { Metadata } from "next";

import { notFound } from "next/navigation";

import Container from "@/components/common/Container";
import ProductGrid from "@/components/product/ProductGrid";
import SectionHeading from "@/components/common/SectionHeading";
import { SITE_CONFIG } from "@/constants/site";
import { categories } from "@/data/categories";
import { products } from "@/data/products";

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

/* -------------------------------------------------------------------------- */
/* Static Params                                                              */
/* -------------------------------------------------------------------------- */

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

/* -------------------------------------------------------------------------- */
/* Metadata                                                                   */
/* -------------------------------------------------------------------------- */

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;

  const category = categories.find(
    (item) => item.slug === slug,
  );

  if (!category) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: category.name,
    description: category.description,
    openGraph: {
      title: `${category.name} | ${SITE_CONFIG.name}`,
      description: category.description,
      siteName: SITE_CONFIG.name,
    },
  };
}

/* -------------------------------------------------------------------------- */
/* Category Page                                                              */
/* -------------------------------------------------------------------------- */

export default async function CategoryPage({
  params,
}: CategoryPageProps) {
  const { slug } = await params;

  /* ------------------------------------------------------------------------ */
  /* Category Lookup                                                          */
  /* ------------------------------------------------------------------------ */

  const category = categories.find(
    (item) => item.slug === slug,
  );

  if (!category) {
    notFound();
  }

  /* ------------------------------------------------------------------------ */
  /* Category Products                                                        */
  /* ------------------------------------------------------------------------ */

  const categoryProducts = products.filter(
    (product) => product.category.slug === category.slug,
  );

  /* ------------------------------------------------------------------------ */
  /* Page Layout                                                              */
  /* ------------------------------------------------------------------------ */

  return (
    <main className="py-16 sm:py-20">
      <Container>
        {/* ------------------------------------------------------------------ */}
        {/* Page Heading                                                       */}
        {/* ------------------------------------------------------------------ */}

        <SectionHeading
          badge="Category"
          title={category.name}
          description={category.description}
        />

        {/* ------------------------------------------------------------------ */}
        {/* Products Grid                                                      */}
        {/* ------------------------------------------------------------------ */}

        <div className="mt-12">
                      {/* ---------------------------------------------------------------- */}
          {/* Product Count                                                    */}
          {/* ---------------------------------------------------------------- */}

          <p className="mb-6 text-sm text-muted-foreground">
            Showing{" "}
            <span className="font-semibold text-foreground">
              {categoryProducts.length}
            </span>{" "}
            {categoryProducts.length === 1 ? "product" : "products"}{" "}
            in{" "}
            <span className="font-semibold text-foreground">
              {category.name}
            </span>
          </p>

          {/* ---------------------------------------------------------------- */}
          {/* Product Grid                                                     */}
          {/* ---------------------------------------------------------------- */}

          <ProductGrid
            products={categoryProducts}
            columns={4}
            priorityCount={4}
            emptyMessage={`No products found in the ${category.name} category.`}
          />
        </div>
      </Container>
    </main>
      );
}