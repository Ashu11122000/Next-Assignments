/**
 * ==========================================================
 * Utility Functions
 * ==========================================================
 *
 * Shared helper functions used throughout the application.
 */

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/* -------------------------------------------------------------------------- */
/* Tailwind Class Merge                                                       */
/* -------------------------------------------------------------------------- */

/**
 * Combines conditional class names and merges conflicting
 * Tailwind CSS utility classes.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/* -------------------------------------------------------------------------- */
/* Currency                                                                   */
/* -------------------------------------------------------------------------- */

/**
 * Formats a number as Indian Rupees.
 *
 * Example:
 * 129999 -> ₹1,29,999
 */
export function formatPrice(
  price: number,
  currency = "INR",
  locale = "en-IN",
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(price);
}

/* -------------------------------------------------------------------------- */
/* Percentage                                                                 */
/* -------------------------------------------------------------------------- */

/**
 * Calculates discount percentage.
 *
 * Example:
 * 99999 -> 79999
 * Returns 20
 */
export function calculateDiscountPercentage(
  originalPrice: number,
  discountedPrice: number,
): number {
  if (originalPrice <= 0) {
    return 0;
  }

  return Math.round(
    ((originalPrice - discountedPrice) / originalPrice) * 100,
  );
}

/* -------------------------------------------------------------------------- */
/* Rating                                                                     */
/* -------------------------------------------------------------------------- */

/**
 * Ensures rating stays between 0 and 5.
 */
export function formatRating(rating: number): number {
  return Math.min(Math.max(rating, 0), 5);
}

/* -------------------------------------------------------------------------- */
/* Slug                                                                       */
/* -------------------------------------------------------------------------- */

/**
 * Converts text into a URL-friendly slug.
 *
 * Example:
 * Apple iPhone 16 Pro
 * ->
 * apple-iphone-16-pro
 */
export function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

/* -------------------------------------------------------------------------- */
/* Capitalize                                                                 */
/* -------------------------------------------------------------------------- */

/**
 * Capitalizes the first letter.
 */
export function capitalize(value: string): string {
  if (!value) {
    return "";
  }

  return value.charAt(0).toUpperCase() + value.slice(1);
}

/* -------------------------------------------------------------------------- */
/* Truncate                                                                   */
/* -------------------------------------------------------------------------- */

/**
 * Shortens long text with an ellipsis.
 */
export function truncate(
  text: string,
  maxLength = 120,
): string {
  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength).trim()}...`;
}

/* -------------------------------------------------------------------------- */
/* Average Rating                                                             */
/* -------------------------------------------------------------------------- */

/**
 * Formats rating to one decimal place.
 */
export function averageRating(rating: number): string {
  return rating.toFixed(1);
}

/* -------------------------------------------------------------------------- */
/* Stock Status                                                               */
/* -------------------------------------------------------------------------- */

/**
 * Returns readable stock status.
 */
export function getStockStatus(stock: number): string {
  if (stock <= 0) {
    return "Out of Stock";
  }

  if (stock <= 10) {
    return "Low Stock";
  }

  return "In Stock";
}

/* -------------------------------------------------------------------------- */
/* Random Products                                                            */
/* -------------------------------------------------------------------------- */

/**
 * Returns a random subset of products.
 */
export function getRandomItems<T>(
  items: T[],
  count: number,
): T[] {
  return [...items]
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
}

/* -------------------------------------------------------------------------- */
/* Unique Values                                                              */
/* -------------------------------------------------------------------------- */

/**
 * Removes duplicate values from an array.
 */
export function uniqueValues<T>(items: T[]): T[] {
  return [...new Set(items)];
}

/* -------------------------------------------------------------------------- */
/* Delay                                                                      */
/* -------------------------------------------------------------------------- */

/**
 * Utility for simulating API requests.
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}