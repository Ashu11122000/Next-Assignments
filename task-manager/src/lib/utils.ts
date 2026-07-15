/**
 * ============================================================================
 * Utility Functions
 * ============================================================================
 *
 * Shared utility functions used throughout the application.
 *
 * Currently includes:
 * - cn(): Merges conditional Tailwind CSS class names.
 *
 * This utility combines:
 * - clsx: Handles conditional class names.
 * - tailwind-merge: Removes conflicting Tailwind classes.
 *
 * Example:
 *
 * cn(
 *   "rounded-md",
 *   isActive && "bg-blue-500",
 *   "p-4",
 *   "p-6"
 * )
 *
 * Output:
 * "rounded-md bg-blue-500 p-6"
 * ============================================================================
 */

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge conditional Tailwind CSS class names.
 *
 * @param inputs - Class names or conditional class values.
 * @returns A single merged class name string.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}