
/**
 * ==========================================================
 * Site Configuration
 * ==========================================================
 *
 * Global application configuration shared throughout the
 * E-commerce Store.
 */

export const SITE_CONFIG = {
  /* ------------------------------------------------------------------------ */
  /* Basic Information                                                        */
  /* ------------------------------------------------------------------------ */

  name: "NextShop",

  shortName: "NextShop",

  description:
    "A modern, responsive, and high-performance E-commerce Store built with Next.js App Router, TypeScript, and Tailwind CSS.",

  url: "https://nextshop.vercel.app",

  ogImage: "/images/banners/og-image.webp",

  locale: "en-IN",

  defaultTheme: "light",

  /* ------------------------------------------------------------------------ */
  /* SEO                                                                       */
  /* ------------------------------------------------------------------------ */

  keywords: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "E-commerce",
    "Online Store",
    "Shopping",
    "Next.js App Router",
    "Responsive Design",
    "Frontend Development",
  ],

  /* ------------------------------------------------------------------------ */
  /* Author                                                                    */
  /* ------------------------------------------------------------------------ */

  author: {
    name: "Ashish Sharma",
    email: "ashish@example.com",
    url: "https://github.com/Ashu11122000",
  },

  /* ------------------------------------------------------------------------ */
  /* Social Links                                                              */
  /* ------------------------------------------------------------------------ */

  social: {
    github: "https://github.com/Ashu11122000",

    linkedin: "https://www.linkedin.com/in/ashish-sharma-383439191/",

    twitter: "",

    instagram: "",
  },

  /* ------------------------------------------------------------------------ */
  /* Contact                                                                   */
  /* ------------------------------------------------------------------------ */

  contact: {
    email: "support@nextshop.com",

    phone: "+91 98765 43210",

    address: "India",
  },

  /* ------------------------------------------------------------------------ */
  /* Navigation                                                                */
  /* ------------------------------------------------------------------------ */

  navigation: {
    home: "/",
    products: "/products",
    categories: "/categories",
  },

  /* ------------------------------------------------------------------------ */
  /* Footer                                                                    */
  /* ------------------------------------------------------------------------ */

  copyright: `© ${new Date().getFullYear()} NextShop. All rights reserved.`,
} as const;

export type SiteConfig = typeof SITE_CONFIG;