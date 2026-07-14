/**
 * ==========================================================
 * Category Types
 * ==========================================================
 *
 * Shared TypeScript interfaces for product categories.
 */

import type { ID } from "./common";

/* -------------------------------------------------------------------------- */
/* Category                                                                    */
/* -------------------------------------------------------------------------- */

export interface Category {
  id: ID;
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
  featured?: boolean;
}

/* -------------------------------------------------------------------------- */
/* Category Card                                                               */
/* -------------------------------------------------------------------------- */

export interface CategoryCardProps {
  category: Category;
}

/* -------------------------------------------------------------------------- */
/* Category Page Params                                                        */
/* -------------------------------------------------------------------------- */

export interface CategoryPageParams {
  slug: string;
}

/* -------------------------------------------------------------------------- */
/* Category Filters                                                            */
/* -------------------------------------------------------------------------- */

export interface CategoryFilter {
  category: string;
}