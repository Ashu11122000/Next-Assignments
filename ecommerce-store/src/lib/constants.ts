/**
 * ==========================================================
 * Application Constants
 * ==========================================================
 *
 * Shared constants used throughout the E-commerce Store.
 *
 * Keep this file free from feature-specific logic.
 */

/* -------------------------------------------------------------------------- */
/* Currency                                                                    */
/* -------------------------------------------------------------------------- */

export const DEFAULT_CURRENCY = "INR";

export const DEFAULT_LOCALE = "en-IN";

/* -------------------------------------------------------------------------- */
/* Pagination                                                                  */
/* -------------------------------------------------------------------------- */

export const DEFAULT_PAGE = 1;

export const DEFAULT_PAGE_SIZE = 12;

export const MAX_PAGE_SIZE = 50;

/* -------------------------------------------------------------------------- */
/* Search                                                                      */
/* -------------------------------------------------------------------------- */

export const SEARCH_DEBOUNCE_MS = 300;

export const MIN_SEARCH_QUERY_LENGTH = 2;

export const MAX_SEARCH_RESULTS = 20;

/* -------------------------------------------------------------------------- */
/* Products                                                                     */
/* -------------------------------------------------------------------------- */

export const FEATURED_PRODUCTS_LIMIT = 8;

export const TRENDING_PRODUCTS_LIMIT = 8;

export const RELATED_PRODUCTS_LIMIT = 4;

/* -------------------------------------------------------------------------- */
/* Ratings                                                                     */
/* -------------------------------------------------------------------------- */

export const MAX_RATING = 5;

export const MIN_RATING = 0;

/* -------------------------------------------------------------------------- */
/* Stock                                                                       */
/* -------------------------------------------------------------------------- */

export const LOW_STOCK_THRESHOLD = 10;

/* -------------------------------------------------------------------------- */
/* Images                                                                      */
/* -------------------------------------------------------------------------- */

export const IMAGE_PATHS = {
  products: "/images/products",
  categories: "/images/categories",
  banners: "/images/banners",
  brands: "/images/brands",
  logo: "/images/logo",
} as const;

export const PLACEHOLDER_IMAGE = "/images/products/placeholder.webp";

/* -------------------------------------------------------------------------- */
/* API                                                                         */
/* -------------------------------------------------------------------------- */

export const API_ROUTES = {
  products: "/api/products",
} as const;

/* -------------------------------------------------------------------------- */
/* Animation                                                                   */
/* -------------------------------------------------------------------------- */

export const ANIMATION_DURATION = 300;

export const TOAST_DURATION = 3000;

/* -------------------------------------------------------------------------- */
/* Local Storage                                                               */
/* -------------------------------------------------------------------------- */

export const STORAGE_KEYS = {
  theme: "theme",
  recentSearches: "recent-searches",
  wishlist: "wishlist",
} as const;

/* -------------------------------------------------------------------------- */
/* Regular Expressions                                                         */
/* -------------------------------------------------------------------------- */

export const REGEX = {
  slug: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
} as const;

/* -------------------------------------------------------------------------- */
/* Defaults                                                                    */
/* -------------------------------------------------------------------------- */

export const DEFAULT_PRODUCT_SORT = "featured";

export const DEFAULT_CATEGORY = "all";