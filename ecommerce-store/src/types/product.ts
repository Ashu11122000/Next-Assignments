/**
 * ==========================================================
 * Product Types
 * ==========================================================
 *
 * Shared TypeScript interfaces for products used throughout
 * the E-commerce Store application.
 */

import type { Category } from "./category";
import type { ID } from "./common";

/* -------------------------------------------------------------------------- */
/* Brand                                                                       */
/* -------------------------------------------------------------------------- */

export interface Brand {
  id: ID;
  name: string;
  logo?: string;
}

/* -------------------------------------------------------------------------- */
/* Rating                                                                      */
/* -------------------------------------------------------------------------- */

export interface ProductRating {
  rate: number;
  count: number;
}

/* -------------------------------------------------------------------------- */
/* Specification                                                               */
/* -------------------------------------------------------------------------- */

export interface ProductSpecification {
  label: string;
  value: string;
}

/* -------------------------------------------------------------------------- */
/* Product                                                                     */
/* -------------------------------------------------------------------------- */

export interface Product {
  id: ID;
  name: string;
  slug: string;

  description: string;
  shortDescription: string;

  category: Category;
  brand: Brand;

  price: number;
  originalPrice?: number;
  discountPercentage?: number;

  rating: ProductRating;

  stock: number;
  sku: string;

  images: string[];
  thumbnail: string;

  specifications: ProductSpecification[];

  featured: boolean;
  trending: boolean;
  isNew: boolean;
  onSale: boolean;
}
/* -------------------------------------------------------------------------- */
/* Derived Helpers                                                             */
/* -------------------------------------------------------------------------- */

export type ProductStatus =
  | "new"
  | "featured"
  | "trending"
  | "sale";

export interface ProductCardProps {
  product: Product;
  priority?: boolean;
  className?: string;
}

export interface ProductGridProps {
  products: Product[];
}

export interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export interface ProductInfoProps {
  product: Product;
}

export interface ProductPriceProps {
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
}

export interface ProductRatingProps {
  rating: ProductRating;
}

export interface ProductDescriptionProps {
  description: string;
}

export interface ProductSpecificationsProps {
  specifications: ProductSpecification[];
}

export interface RelatedProductsProps {
  products: Product[];
}

export interface ProductPageParams {
  id: string;
}