import type { Metadata } from "next";

import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import CategoryCard from "@/components/product/CategoryCard";
import { SITE_CONFIG } from "@/constants/site";
import { categories } from "@/data/categories";

/* -------------------------------------------------------------------------- */
/* Metadata                                                                   */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Categories",
  description: `Browse all product categories available at ${SITE_CONFIG.name}.`,
};

/* -------------------------------------------------------------------------- */
/* Categories Page                                                            */
/* -------------------------------------------------------------------------- */

export default function CategoriesPage() {
  return (
    <main className="py-16 sm:py-20">
      <Container>
        {/* ------------------------------------------------------------------ */}
        {/* Page Heading                                                       */}
        {/* ------------------------------------------------------------------ */}

        <SectionHeading
          badge="Categories"
          title="Shop by Category"
          description="Explore our curated collection of product categories to quickly find exactly what you're looking for."
        />

        {/* ------------------------------------------------------------------ */}
        {/* Categories Grid                                                    */}
        {/* ------------------------------------------------------------------ */}

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                      {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </div>
      </Container>
    </main>
  );
}