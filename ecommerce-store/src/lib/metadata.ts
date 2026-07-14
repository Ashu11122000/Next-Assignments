/**
 * ==========================================================
 * Metadata Utilities
 * ==========================================================
 *
 * Centralized metadata helpers for generating SEO-friendly
 * metadata throughout the application.
 */

import type { Metadata } from "next";

import { SITE_CONFIG } from "@/constants/site";

/* -------------------------------------------------------------------------- */
/* Base Metadata                                                               */
/* -------------------------------------------------------------------------- */

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),

  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },

  description: SITE_CONFIG.description,

  applicationName: SITE_CONFIG.name,

  keywords: [...SITE_CONFIG.keywords],

  authors: [
    {
      name: SITE_CONFIG.author.name,
      url: SITE_CONFIG.author.url,
    },
  ],

  creator: SITE_CONFIG.author.name,

  publisher: SITE_CONFIG.author.name,

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
  },

  robots: {
    index: true,
    follow: true,
  },
};

/* -------------------------------------------------------------------------- */
/* Page Metadata                                                               */
/* -------------------------------------------------------------------------- */

interface PageMetadataOptions {
  title: string;
  description: string;
  image?: string;
}

/**
 * Generates metadata for standard pages.
 */
export function createMetadata({
  title,
  description,
  image,
}: PageMetadataOptions): Metadata {
  return {
    title,
    description,

    openGraph: {
      title,
      description,
      url: SITE_CONFIG.url,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: image ?? SITE_CONFIG.ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image ?? SITE_CONFIG.ogImage],
    },
  };
}

/* -------------------------------------------------------------------------- */
/* Product Metadata                                                            */
/* -------------------------------------------------------------------------- */

/**
 * Generates metadata for product pages.
 */
export function createProductMetadata(
  productName: string,
  description: string,
  image: string,
): Metadata {
  return createMetadata({
    title: productName,
    description,
    image,
  });
}

/* -------------------------------------------------------------------------- */
/* Category Metadata                                                           */
/* -------------------------------------------------------------------------- */

/**
 * Generates metadata for category pages.
 */
export function createCategoryMetadata(
  categoryName: string,
  description: string,
): Metadata {
  return createMetadata({
    title: categoryName,
    description,
  });
}