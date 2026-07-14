/**
 * ==========================================================
 * Common Shared Types
 * ==========================================================
 *
 * Reusable TypeScript interfaces and utility types shared
 * across the entire application.
 *
 * These types are intentionally generic and should not contain
 * feature-specific models such as Product or Category.
 */

/* -------------------------------------------------------------------------- */
/* Base Types                                                                 */
/* -------------------------------------------------------------------------- */

export type ID = string | number;

export type Nullable<T> = T | null;

export type Optional<T> = T | undefined;

/* -------------------------------------------------------------------------- */
/* Navigation                                                                  */
/* -------------------------------------------------------------------------- */

export interface NavigationItem {
  id: ID;
  label: string;
  href: string;
  external?: boolean;
}

/* -------------------------------------------------------------------------- */
/* Select Options                                                              */
/* -------------------------------------------------------------------------- */

export interface SelectOption {
  label: string;
  value: string;
}

/* -------------------------------------------------------------------------- */
/* Breadcrumbs                                                                 */
/* -------------------------------------------------------------------------- */

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

/* -------------------------------------------------------------------------- */
/* Pagination                                                                  */
/* -------------------------------------------------------------------------- */

export interface Pagination {
  page: number;
  limit: number;
  totalItems: number;
  totalPages: number;
}

/* -------------------------------------------------------------------------- */
/* API Response                                                                */
/* -------------------------------------------------------------------------- */

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

/* -------------------------------------------------------------------------- */
/* Search                                                                      */
/* -------------------------------------------------------------------------- */

export interface SearchParams {
  query?: string;
  category?: string;
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  sortBy?: string;
}

/* -------------------------------------------------------------------------- */
/* Metadata                                                                    */
/* -------------------------------------------------------------------------- */

export interface MetaData {
  title: string;
  description: string;
  image?: string;
}

/* -------------------------------------------------------------------------- */
/* Theme                                                                       */
/* -------------------------------------------------------------------------- */

export type ThemeMode = "light" | "dark" | "system";

/* -------------------------------------------------------------------------- */
/* Status                                                                      */
/* -------------------------------------------------------------------------- */

export type Status = "idle" | "loading" | "success" | "error";

/* -------------------------------------------------------------------------- */
/* Component Props                                                             */
/* -------------------------------------------------------------------------- */

export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

/* -------------------------------------------------------------------------- */
/* Generic Dictionary                                                          */
/* -------------------------------------------------------------------------- */

export type Dictionary<T = unknown> = Record<string, T>;