"use client";

import { useState } from "react";

import Link from "next/link";

import {
  BadgeCheck,
  Heart,
  ShieldCheck,
  ShoppingCart,
  Truck,
} from "lucide-react";

import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";
import ProductPrice from "@/components/product/ProductPrice";
import ProductRating from "@/components/product/ProductRating";
import { cn } from "@/lib/utils";
import type { ProductInfoProps } from "@/types/product";

/* -------------------------------------------------------------------------- */
/* Product Info                                                               */
/* -------------------------------------------------------------------------- */

export default function ProductInfo({
  product,
}: ProductInfoProps) {
  /* ------------------------------------------------------------------------ */
  /* Quantity State                                                           */
  /* ------------------------------------------------------------------------ */

  const [quantity, setQuantity] = useState(1);

  /* ------------------------------------------------------------------------ */
  /* Product Badges                                                           */
  /* ------------------------------------------------------------------------ */

  const badges = [
    product.featured && {
      label: "Featured",
      variant: "default" as const,
    },
    product.trending && {
      label: "Trending",
      variant: "secondary" as const,
    },
    product.isNew && {
      label: "New",
      variant: "success" as const,
    },
    product.onSale && {
      label: "Sale",
      variant: "destructive" as const,
    },
  ].filter(Boolean) as {
    label: string;
    variant:
      | "default"
      | "secondary"
      | "success"
      | "destructive";
  }[];

  return (
    <div className="flex h-full flex-col">
      {/* -------------------------------------------------------------------- */}
      {/* Category                                                             */}
      {/* -------------------------------------------------------------------- */}

      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
        {product.category.name}
      </p>

      {/* -------------------------------------------------------------------- */}
      {/* Product Title                                                        */}
      {/* -------------------------------------------------------------------- */}

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
        {product.name}
      </h1>

      {/* -------------------------------------------------------------------- */}
      {/* Brand                                                                */}
      {/* -------------------------------------------------------------------- */}

      <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
        <span>
          Brand:{" "}
          <span className="font-semibold text-foreground">
            {product.brand.name}
          </span>
        </span>

        <span className="h-1.5 w-1.5 rounded-full bg-border" />

        <span>
          SKU:{" "}
          <span className="font-medium text-foreground">
            {product.sku}
          </span>
        </span>
      </div>

      {/* -------------------------------------------------------------------- */}
      {/* Product Badges                                                       */}
      {/* -------------------------------------------------------------------- */}

      {badges.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {badges.map((badge) => (
            <Badge
              key={badge.label}
              variant={badge.variant}
            >
              {badge.label}
            </Badge>
          ))}
        </div>
      )}

            {/* -------------------------------------------------------------------- */}
      {/* Product Rating                                                       */}
      {/* -------------------------------------------------------------------- */}

      <div className="mt-6">
        <ProductRating rating={product.rating} />
      </div>

      {/* -------------------------------------------------------------------- */}
      {/* Product Price                                                        */}
      {/* -------------------------------------------------------------------- */}

      <div className="mt-6">
        <ProductPrice
          price={product.price}
          originalPrice={product.originalPrice}
          discountPercentage={product.discountPercentage}
        />
      </div>

      {/* -------------------------------------------------------------------- */}
      {/* Stock Status                                                         */}
      {/* -------------------------------------------------------------------- */}

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <span
            className={cn(
              "h-3 w-3 rounded-full",
              product.stock > 10
                ? "bg-emerald-500"
                : product.stock > 0
                  ? "bg-amber-500"
                  : "bg-red-500",
            )}
          />

          <span
            className={cn(
              "font-medium",
              product.stock > 10
                ? "text-emerald-600 dark:text-emerald-400"
                : product.stock > 0
                  ? "text-amber-600 dark:text-amber-400"
                  : "text-red-600 dark:text-red-400",
            )}
          >
            {product.stock > 10
              ? "In Stock"
              : product.stock > 0
                ? `Only ${product.stock} left`
                : "Out of Stock"}
          </span>
        </div>

        <span className="h-1.5 w-1.5 rounded-full bg-border" />

        <span className="text-sm text-muted-foreground">
          {product.stock > 0
            ? "Ready to ship"
            : "Currently unavailable"}
        </span>
      </div>

      {/* -------------------------------------------------------------------- */}
      {/* Divider                                                              */}
      {/* -------------------------------------------------------------------- */}

      <div className="my-8 border-t border-border" />

      {/* -------------------------------------------------------------------- */}
      {/* Quantity Selector & Actions                                          */}
      {/* -------------------------------------------------------------------- */}

            {/* -------------------------------------------------------------------- */}
      {/* Quantity Selector                                                    */}
      {/* -------------------------------------------------------------------- */}

      <div className="flex flex-wrap items-center justify-between gap-6">
        <div>
          <p className="mb-3 text-sm font-medium text-foreground">
            Quantity
          </p>

          <div className="inline-flex items-center overflow-hidden rounded-xl border border-border">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label="Decrease quantity"
              disabled={quantity <= 1 || product.stock === 0}
              onClick={() =>
                setQuantity((previous) => Math.max(1, previous - 1))
              }
            >
              −
            </Button>

            <span className="flex h-10 min-w-14 items-center justify-center border-x border-border text-sm font-semibold">
              {quantity}
            </span>

            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label="Increase quantity"
              disabled={
                product.stock === 0 ||
                quantity >= product.stock
              }
              onClick={() =>
                setQuantity((previous) =>
                  Math.min(product.stock, previous + 1),
                )
              }
            >
              +
            </Button>
          </div>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* Quantity Validation                                              */}
        {/* ---------------------------------------------------------------- */}

        <p className="text-sm text-muted-foreground">
          {product.stock > 0
            ? `Maximum ${product.stock} item${
                product.stock > 1 ? "s" : ""
              } available`
            : "This product is currently unavailable."}
        </p>
      </div>

      {/* -------------------------------------------------------------------- */}
      {/* Action Buttons                                                       */}
      {/* -------------------------------------------------------------------- */}

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button
          className="flex-1"
          size="lg"
          disabled={product.stock === 0}
        >
          <ShoppingCart className="mr-2 h-5 w-5" />
          Add to Cart
        </Button>

        <Button
          className="flex-1"
          size="lg"
          variant="secondary"
          disabled={product.stock === 0}
        >
          Buy Now
        </Button>

        <Button
          type="button"
          variant="outline"
          size="lg"
          aria-label="Add to wishlist"
        >
          <Heart className="h-5 w-5" />
        </Button>
      </div>

            {/* -------------------------------------------------------------------- */}
      {/* Service Information                                                  */}
      {/* -------------------------------------------------------------------- */}

      <div className="mt-10 space-y-4 rounded-2xl border border-border bg-muted/20 p-6">
        {/* ---------------------------------------------------------------- */}
        {/* Free Shipping                                                    */}
        {/* ---------------------------------------------------------------- */}

        <div className="flex items-start gap-4">
          <div className="rounded-xl bg-primary/10 p-3 text-primary">
            <Truck className="h-5 w-5" />
          </div>

          <div>
            <h3 className="font-semibold text-foreground">
              Free Shipping
            </h3>

            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              Enjoy free delivery on eligible orders with fast and reliable
              shipping across India.
            </p>
          </div>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* Secure Payment                                                   */}
        {/* ---------------------------------------------------------------- */}

        <div className="flex items-start gap-4">
          <div className="rounded-xl bg-primary/10 p-3 text-primary">
            <ShieldCheck className="h-5 w-5" />
          </div>

          <div>
            <h3 className="font-semibold text-foreground">
              Secure Payments
            </h3>

            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              All transactions are protected with industry-standard encryption
              for a safe and secure checkout experience.
            </p>
          </div>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* Easy Returns                                                     */}
        {/* ---------------------------------------------------------------- */}

        <div className="flex items-start gap-4">
          <div className="rounded-xl bg-primary/10 p-3 text-primary">
            <BadgeCheck className="h-5 w-5" />
          </div>

          <div>
            <h3 className="font-semibold text-foreground">
              Easy Returns
            </h3>

            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              Hassle-free returns and exchanges are available within the return
              policy period for eligible products.
            </p>
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------------- */}
      {/* Additional Information                                              */}
      {/* -------------------------------------------------------------------- */}

      <p className="mt-6 text-sm leading-6 text-muted-foreground">
        Need help?{" "}
        <Link
          href="/contact"
          className="font-medium text-primary transition-colors hover:underline"
        >
          Contact our support team
        </Link>{" "}
        for product recommendations, order assistance, or warranty information.
      </p>
    </div>
  );
}