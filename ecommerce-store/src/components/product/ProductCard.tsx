"use client";

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";
import { ArrowRight, Eye, Heart, ShoppingCart } from "lucide-react";

import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";
import { Card } from "@/components/common/Card";
import type { Product } from "@/types/product";
import { cn } from "@/lib/utils";
import ProductRating from "./ProductRating";
import ProductPrice from "./ProductPrice";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
  className?: string;
}

/* -------------------------------------------------------------------------- */
/* Product Card                                                               */
/* -------------------------------------------------------------------------- */

export default function ProductCard({
  product,
  priority = false,
  className,
}: ProductCardProps) {
  const discount =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(
          ((product.originalPrice - product.price) / product.originalPrice) *
            100,
        )
      : 0;

  return (
    <motion.article
      layout
      whileHover={{ y: -8 }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      className={cn("group h-full", className)}
    >
      <Card
        className={cn(
          "relative flex h-full flex-col overflow-hidden",
          "border-border/60 bg-background/80 backdrop-blur-sm",
          "transition-all duration-300",
          "hover:border-primary/30",
          "hover:shadow-2xl hover:shadow-primary/10",
        )}
      >
        {/* ------------------------------------------------------------------ */}
        {/* Image Section                                                      */}
        {/* ------------------------------------------------------------------ */}

        <div className="relative aspect-[4/4.5] overflow-hidden">
          <Link href={`/products/${product.id}`} aria-label={product.name}>
            <Image
    src={product.images[0] ?? product.thumbnail}          
              alt={product.name}
              fill
              priority={priority}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              className={cn(
                "object-cover",
                "transition-transform duration-500",
                "group-hover:scale-105",
              )}
            />
          </Link>

          {/* -------------------------------------------------------------- */}
          {/* Gradient Overlay */}
          {/* -------------------------------------------------------------- */}

          <div
            className={cn(
              "pointer-events-none absolute inset-0",
              "bg-gradient-to-t",
              "from-black/20 via-transparent to-transparent",
            )}
          />

          {/* -------------------------------------------------------------- */}
          {/* Product Badges */}
          {/* -------------------------------------------------------------- */}

          <div className="absolute left-4 top-4 flex flex-col gap-2">
            {product.isNew && <Badge variant="success">New</Badge>}

            {product.featured && <Badge variant="secondary">Featured</Badge>}

            {product.trending && <Badge variant="default">Trending</Badge>}

            {discount > 0 && <Badge variant="destructive">-{discount}%</Badge>}
          </div>

          {/* -------------------------------------------------------------- */}
          {/* Floating Actions */}
          {/* -------------------------------------------------------------- */}

          <div
            className={cn(
              "absolute right-4 top-4",
              "flex flex-col gap-2",
              "translate-x-4 opacity-0",
              "transition-all duration-300",
              "group-hover:translate-x-0",
              "group-hover:opacity-100",
            )}
          >
            <Button
              size="icon"
              variant="secondary"
              aria-label="Add to wishlist"
              className="h-10 w-10 rounded-full backdrop-blur"
            >
              <Heart className="h-4 w-4" />
            </Button>

            <Button
              asChild
              size="icon"
              variant="secondary"
              className="h-10 w-10 rounded-full backdrop-blur"
            >
              <Link href={`/products/${product.id}`} aria-label="View product">
                <Eye className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Product Content (Part 2)                                           */}
        {/* ------------------------------------------------------------------ */}

        <div className="flex flex-1 flex-col p-5">
          {/* -------------------------------------------------------------- */}
          {/* Category */}
          {/* -------------------------------------------------------------- */}

          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            {product.category.name}
          </p>

          {/* -------------------------------------------------------------- */}
          {/* Product Name */}
          {/* -------------------------------------------------------------- */}

          <Link href={`/products/${product.id}`} className="mt-2">
            <h3
              className={cn(
                "line-clamp-2 text-lg font-semibold",
                "transition-colors duration-200",
                "group-hover:text-primary",
              )}
            >
              {product.name}
            </h3>
          </Link>

          {/* -------------------------------------------------------------- */}
          {/* Brand */}
          {/* -------------------------------------------------------------- */}

          <p className="mt-1 text-sm text-muted-foreground">
            by{" "}
            <span className="font-medium text-foreground">{product.brand.name}</span>
          </p>

          {/* -------------------------------------------------------------- */}
          {/* Description */}
          {/* -------------------------------------------------------------- */}

          <p className="mt-4 line-clamp-2 text-sm leading-6 text-muted-foreground">
            {product.description}
          </p>

          {/* -------------------------------------------------------------- */}
          {/* Rating */}
          {/* -------------------------------------------------------------- */}

          <div className="mt-5">
            <ProductRating rating={product.rating} />
          </div>

          {/* -------------------------------------------------------------- */}
          {/* Price */}
          {/* -------------------------------------------------------------- */}

          <div className="mt-5">
            <ProductPrice
              price={product.price}
              originalPrice={product.originalPrice}
            />
          </div>

          {/* -------------------------------------------------------------- */}
          {/* Stock Status */}
          {/* -------------------------------------------------------------- */}

          <div className="mt-4 flex items-center gap-2">
            <span
              className={cn(
                "h-2.5 w-2.5 rounded-full",
                product.stock ? "bg-emerald-500" : "bg-red-500",
              )}
            />

            <span
              className={cn(
                "text-sm font-medium",
                product.stock
                  ? "text-emerald-600 dark:text-emerald-400"
                  : "text-red-600 dark:text-red-400",
              )}
            >
              {product.stock ? "In Stock" : "Out of Stock"}
            </span>
          </div>

          {/* Push Actions to Bottom */}

          <div className="flex-1" />

          {/* -------------------------------------------------------------- */}
          {/* Actions */}
          {/* -------------------------------------------------------------- */}

          <div className="mt-6 flex items-center gap-3">
            <Button className="flex-1" disabled={!product.stock}>
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>

            <Button asChild variant="outline">
              <Link href={`/products/${product.id}`}>
                Details
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Card>
    </motion.article>
  );
}
