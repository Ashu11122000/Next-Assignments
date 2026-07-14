import Link from "next/link";

import { ArrowRight } from "lucide-react";

import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import CategoryCard from "../product/CategoryCard";
import { categories } from "@/data/categories";

export default function Categories() {
  return (
    <section
      aria-labelledby="categories-heading"
      className="relative overflow-hidden py-20 sm:py-24"
    >
      {/* -------------------------------------------------------------------------- */}
      {/* Background */}
      {/* -------------------------------------------------------------------------- */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <Container>
        {/* ---------------------------------------------------------------------- */}
        {/* Section Heading */}
        {/* ---------------------------------------------------------------------- */}

        <SectionHeading
          badge="Shop by Category"
          title="Discover Products Across Every Category"
          description="Browse our curated collection of categories to quickly find the products you love—from electronics and fashion to home essentials and accessories."
          action={
            <Button
              asChild
              variant="outline"
            >
              <Link href="/categories">
                View All Categories
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          }
        />

        {/* ---------------------------------------------------------------------- */}
        {/* Categories Grid */}
        {/* ---------------------------------------------------------------------- */}

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}