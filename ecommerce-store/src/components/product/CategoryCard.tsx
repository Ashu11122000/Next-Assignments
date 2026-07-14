"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import Badge from "@/components/common/Badge";
import { Card } from "@/components/common/Card";
import type { Category } from "@/types/category";

/* -------------------------------------------------------------------------- */
/* Props                                                                      */
/* -------------------------------------------------------------------------- */

export interface CategoryCardProps {
  category: Category;
}

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function CategoryCard({
  category,
}: Readonly<CategoryCardProps>) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="h-full"
    >
      <Link
        href={`/categories/${category.slug}`}
        className="block h-full"
      >
        <Card className="group h-full overflow-hidden rounded-3xl border-0 bg-background shadow-lg transition-all duration-300 hover:shadow-2xl">
          {/* ---------------------------------------------------------------- */}
          {/* Image                                                            */}
          {/* ---------------------------------------------------------------- */}

          <div className="relative aspect-square overflow-hidden">
            <Image
              src={category.image}
              alt={category.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Gradient */}

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

            {/* Featured Badge */}

            {category.featured && (
              <div className="absolute left-4 top-4">
                <Badge variant="success">
                  Featured
                </Badge>
              </div>
            )}

            {/* Product Count */}

            <div className="absolute bottom-4 left-4">
              <Badge variant="secondary">
                {category.productCount} Products
              </Badge>
            </div>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* Content                                                          */}
          {/* ---------------------------------------------------------------- */}

          <div className="flex flex-1 flex-col p-6">
            <h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-primary">
              {category.name}
            </h3>

            <p className="mt-3 line-clamp-2 text-sm leading-6 text-muted-foreground">
              {category.description}
            </p>

            <div className="mt-6 flex items-center font-medium text-primary">
              Browse Category

              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}