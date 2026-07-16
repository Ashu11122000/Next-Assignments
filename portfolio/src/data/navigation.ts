/* =============================================================================
   Portfolio Data
   -----------------------------------------------------------------------------
   File: src/data/navigation.ts

   Central navigation configuration for the portfolio.

   This file is used by:
   - Navbar
   - MobileMenu
   - Footer (Quick Links)
   - Active navigation highlighting

   Keeping navigation in one place ensures consistency across the application.
============================================================================= */

export interface NavigationItem {
  label: string;
  href: string;
}

export const navigation: NavigationItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Skills",
    href: "/skills",
  },
  {
    label: "Experience",
    href: "/experience",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Education",
    href: "/education",
  },
  {
    label: "Contact",
    href: "/contact",
  },
] as const;