/**
 * ==========================================================
 * Product Types
 * ==========================================================
 *
 * Shared TypeScript interfaces for products used throughout
 * the E-commerce Store application.
 */

import type { ID } from "./common";
import type { Category } from "./category";

/* -------------------------------------------------------------------------- */
/* Product Brand                                                               */
/* -------------------------------------------------------------------------- */

export interface Brand {
  id: ID;
  name: string;
  logo?: string;
}

/* -------------------------------------------------------------------------- */
/* Product Rating                                                              */
/* -------------------------------------------------------------------------- */

export interface ProductRating {
  rate: number;
  count: number;
}

/* -------------------------------------------------------------------------- */
/* Product Specifications                                                      */
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
/* Product Card                                                                */
/* -------------------------------------------------------------------------- */

export interface ProductCardProps {
  product: Product;
}

/* -------------------------------------------------------------------------- */
/* Product Grid                                                                */
/* -------------------------------------------------------------------------- */

export interface ProductGridProps {
  products: Product[];
}

/* -------------------------------------------------------------------------- */
/* Product Gallery                                                             */
/* -------------------------------------------------------------------------- */

export interface ProductGalleryProps {
  images: string[];
  productName: string;
}

/* -------------------------------------------------------------------------- */
/* Product Info                                                                */
/* -------------------------------------------------------------------------- */

export interface ProductInfoProps {
  product: Product;
}

/* -------------------------------------------------------------------------- */
/* Product Price                                                               */
/* -------------------------------------------------------------------------- */

export interface ProductPriceProps {
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
}

/* -------------------------------------------------------------------------- */
/* Product Rating                                                              */
/* -------------------------------------------------------------------------- */

export interface ProductRatingProps {
  rating: ProductRating;
}

/* -------------------------------------------------------------------------- */
/* Product Description                                                         */
/* -------------------------------------------------------------------------- */

export interface ProductDescriptionProps {
  description: string;
}

/* -------------------------------------------------------------------------- */
/* Product Specifications                                                      */
/* -------------------------------------------------------------------------- */

export interface ProductSpecificationsProps {
  specifications: ProductSpecification[];
}

/* -------------------------------------------------------------------------- */
/* Related Products                                                            */
/* -------------------------------------------------------------------------- */

export interface RelatedProductsProps {
  products: Product[];
}

/* -------------------------------------------------------------------------- */
/* Product Page Params                                                         */
/* -------------------------------------------------------------------------- */

export interface ProductPageParams {
  id: string;
}