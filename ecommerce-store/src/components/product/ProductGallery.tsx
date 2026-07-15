"use client";

import { useState } from "react";

import Image from "next/image";

import EmptyState from "@/components/common/EmptyState";
import { cn } from "@/lib/utils";
import type { ProductGalleryProps } from "@/types/product";

/* -------------------------------------------------------------------------- */
/* Product Gallery                                                             */
/* -------------------------------------------------------------------------- */

export default function ProductGallery({
  images,
  productName,
}: ProductGalleryProps) {
  /* ------------------------------------------------------------------------ */
  /* State                                                                    */
  /* ------------------------------------------------------------------------ */

  const [selectedImage, setSelectedImage] = useState(0);

  /* ------------------------------------------------------------------------ */
  /* Empty Image Handling                                                     */
  /* ------------------------------------------------------------------------ */

  if (!images.length) {
    return (
      <EmptyState
        title="No Images Available"
        description="Images for this product are currently unavailable."
      />
    );
  }

    /* ------------------------------------------------------------------------ */
  /* Product Gallery                                                          */
  /* ------------------------------------------------------------------------ */

  return (
    <div className="space-y-5">
      {/* -------------------------------------------------------------------- */}
      {/* Main Product Image                                                   */}
      {/* -------------------------------------------------------------------- */}
      <div
        className={cn(
          "relative overflow-hidden rounded-3xl",
          "border border-border bg-muted/30",
          "aspect-square",
        )}
      >
        <Image
          src={images[selectedImage]}
          alt={`${productName} - Image ${selectedImage + 1}`}
          fill
          priority={selectedImage === 0}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 40vw"
          className={cn(
            "object-contain p-6",
            "transition-all duration-500",
          )}
        />
      </div>

            {/* -------------------------------------------------------------------- */}
      {/* Thumbnail Gallery                                                    */}
      {/* -------------------------------------------------------------------- */}
      <div
        className="grid grid-cols-4 gap-3 sm:grid-cols-5"
        role="list"
        aria-label={`${productName} image gallery`}
      >
        {images.map((image, index) => (
          <button
            key={`${image}-${index}`}
            type="button"
            onClick={() => setSelectedImage(index)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setSelectedImage(index);
              }
            }}
            className={cn(
              "relative aspect-square overflow-hidden rounded-2xl",
              "border bg-muted/30",
              "transition-all duration-200",
              "focus-visible:outline-none",
              "focus-visible:ring-2",
              "focus-visible:ring-primary",
              "focus-visible:ring-offset-2",
              selectedImage === index
                ? "border-primary ring-2 ring-primary"
                : "border-border hover:border-primary/60",
            )}
            aria-label={`View image ${index + 1}`}
            aria-pressed={selectedImage === index}
          >
            <Image
              src={image}
              alt={`${productName} thumbnail ${index + 1}`}
              fill
              sizes="120px"
              className={cn(
                "object-contain p-2",
                "transition-transform duration-300",
                "hover:scale-105",
              )}
            />
          </button>
        ))}
      </div>
    </div>
  );
}