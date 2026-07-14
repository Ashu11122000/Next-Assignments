/**
 * ==========================================================
 * Route Constants
 * ==========================================================
 *
 * Centralized application routes used throughout the
 * E-commerce Store.
 *
 * Import these constants instead of hardcoding route strings.
 */

/* -------------------------------------------------------------------------- */
/* Public Routes                                                               */
/* -------------------------------------------------------------------------- */

export const ROUTES = {
  home: "/",

  products: "/products",

  categories: "/categories",
} as const;

/* -------------------------------------------------------------------------- */
/* Dynamic Routes                                                              */
/* -------------------------------------------------------------------------- */

/**
 * Product Details
 *
 * Example:
 * /products/1
 */
export const productRoute = (id: string | number): string =>
  `${ROUTES.products}/${id}`;

/**
 * Category Details
 *
 * Example:
 * /categories/electronics
 */
export const categoryRoute = (slug: string): string =>
  `${ROUTES.categories}/${slug}`;

/* -------------------------------------------------------------------------- */
/* API Routes                                                                  */
/* -------------------------------------------------------------------------- */

export const API_ROUTES = {
  products: "/api/products",
} as const;

/* -------------------------------------------------------------------------- */
/* Route Types                                                                 */
/* -------------------------------------------------------------------------- */

export type RouteKey = keyof typeof ROUTES;
export type ApiRouteKey = keyof typeof API_ROUTES;