/**
 * ==========================================================
 * Navigation Data
 * ==========================================================
 *
 * Centralized navigation links used throughout the application.
 *
 * Used by:
 * - Navbar
 * - Mobile Menu
 * - Footer
 * - Breadcrumbs (future)
 */

import { ROUTES } from "@/constants/routes";
import type { NavigationItem } from "@/types/common";

/* -------------------------------------------------------------------------- */
/* Main Navigation                                                             */
/* -------------------------------------------------------------------------- */

export const navigation: NavigationItem[] = [
  {
    id: 1,
    label: "Home",
    href: ROUTES.home,
  },
  {
    id: 2,
    label: "Products",
    href: ROUTES.products,
  },
  {
    id: 3,
    label: "Categories",
    href: ROUTES.categories,
  },
];

/* -------------------------------------------------------------------------- */
/* Footer Navigation                                                           */
/* -------------------------------------------------------------------------- */

export const footerNavigation = {
  shop: [
    {
      id: 1,
      label: "All Products",
      href: ROUTES.products,
    },
    {
      id: 2,
      label: "Categories",
      href: ROUTES.categories,
    },
  ],

  company: [
    {
      id: 3,
      label: "About",
      href: "#",
    },
    {
      id: 4,
      label: "Contact",
      href: "#",
    },
    {
      id: 5,
      label: "Privacy Policy",
      href: "#",
    },
    {
      id: 6,
      label: "Terms & Conditions",
      href: "#",
    },
  ],

  customer: [
    {
      id: 7,
      label: "Help Center",
      href: "#",
    },
    {
      id: 8,
      label: "Shipping",
      href: "#",
    },
    {
      id: 9,
      label: "Returns",
      href: "#",
    },
    {
      id: 10,
      label: "Track Order",
      href: "#",
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* Social Links                                                                */
/* -------------------------------------------------------------------------- */

export const socialLinks: NavigationItem[] = [
  {
    id: 1,
    label: "GitHub",
    href: "https://github.com/Ashu11122000",
    external: true,
  },
  {
    id: 2,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ashish-sharma-383439191/",
    external: true,
  },
];