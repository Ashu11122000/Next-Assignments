import { useMemo } from "react";

import { useSearchParams } from "next/navigation";

import type { Product } from "@/types/product";

/* -------------------------------------------------------------------------- */
/* Use Search                                                                 */
/* -------------------------------------------------------------------------- */

export function useSearch(products: Product[]) {
  /* ------------------------------------------------------------------------ */
  /* URL Search Parameters                                                    */
  /* ------------------------------------------------------------------------ */

  const searchParams = useSearchParams();

  const query = searchParams.get("q")?.trim().toLowerCase() ?? "";

  const category =
    searchParams.get("category")?.trim().toLowerCase() ?? "";

  const brand =
    searchParams.get("brand")?.trim().toLowerCase() ?? "";

  const rating = Number(searchParams.get("rating") ?? "0");

  const stockOnly = searchParams.get("stock") === "true";

  const sort = searchParams.get("sort") ?? "";

  /* ------------------------------------------------------------------------ */
  /* Filtered Products                                                        */
  /* ------------------------------------------------------------------------ */

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

        /* ---------------------------------------------------------------------- */
    /* Search Query                                                           */
    /* ---------------------------------------------------------------------- */

    if (query) {
      filtered = filtered.filter((product) => {
        const searchableText = [
          product.name,
          product.shortDescription,
          product.description,
          product.brand.name,
          product.category.name,
        ]
          .join(" ")
          .toLowerCase();

        return searchableText.includes(query);
      });
    }

    /* ---------------------------------------------------------------------- */
    /* Category Filter                                                        */
    /* ---------------------------------------------------------------------- */

    if (category) {
      filtered = filtered.filter(
        (product) =>
          product.category.slug.toLowerCase() === category,
      );
    }

    /* ---------------------------------------------------------------------- */
    /* Brand Filter                                                           */
    /* ---------------------------------------------------------------------- */

    if (brand) {
      filtered = filtered.filter(
        (product) =>
          product.brand.name.toLowerCase() === brand,
      );
    }

        /* ---------------------------------------------------------------------- */
    /* Rating Filter                                                          */
    /* ---------------------------------------------------------------------- */

    if (rating > 0) {
      filtered = filtered.filter(
        (product) => product.rating.rate >= rating,
      );
    }

    /* ---------------------------------------------------------------------- */
    /* In Stock Filter                                                        */
    /* ---------------------------------------------------------------------- */

    if (stockOnly) {
      filtered = filtered.filter(
        (product) => product.stock > 0,
      );
    }

    /* ---------------------------------------------------------------------- */
    /* Sorting                                                                */
    /* ---------------------------------------------------------------------- */

    switch (sort) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;

      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;

      case "rating":
        filtered.sort(
          (a, b) => b.rating.rate - a.rating.rate,
        );
        break;

      case "name":
        filtered.sort((a, b) =>
          a.name.localeCompare(b.name),
        );
        break;

      case "newest":
      default:
        filtered.sort((a, b) => Number(b.id) - Number(a.id));
        break;
    }

    return filtered;
  }, [
    products,
    query,
    category,
    brand,
    rating,
    stockOnly,
    sort,
  ]);

    /* ------------------------------------------------------------------------ */
  /* Return                                                                   */
  /* ------------------------------------------------------------------------ */

  return {
    products: filteredProducts,
    totalResults: filteredProducts.length,

    query,
    category,
    brand,
    rating,
    stockOnly,
    sort,
  };
}