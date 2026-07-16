/**
 * =============================================================================
 * Portfolio
 * =============================================================================
 * File: src/lib/metadata.ts
 * -----------------------------------------------------------------------------
 * Global Metadata
 * -----------------------------------------------------------------------------
 *
 * Centralized SEO configuration for the entire application.
 *
 * Responsibilities
 * ----------------
 * • Default Metadata
 * • SEO
 * • Open Graph
 * • Twitter Cards
 * • Robots
 * • Icons
 * • Keywords
 * • Author Information
 * • Canonical URL
 *
 * =============================================================================
 */

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),

  title: {
    default: "Ashish Sharma | Full Stack Developer",
    template: "%s | Ashish Sharma",
  },

  description:
    "Production-grade Full Stack Developer Portfolio built with Next.js, TypeScript, Tailwind CSS, FastAPI, NestJS, PostgreSQL, Docker, and modern web technologies.",

  applicationName: "Ashish Sharma Portfolio",

  authors: [
    {
      name: "Ashish Sharma",
      url: "https://github.com/Ashu11122000",
    },
  ],

  creator: "Ashish Sharma",

  publisher: "Ashish Sharma",

  keywords: [
    "Ashish Sharma",
    "Portfolio",
    "Software Engineer",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "FastAPI",
    "NestJS",
    "Node.js",
    "Express.js",
    "Python",
    "PostgreSQL",
    "Docker",
    "REST API",
    "GraphQL",
    "gRPC",
    "Cloud Computing",
    "DevOps",
    "Software Analyst",
  ],

  category: "Technology",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "http://localhost:3000",
    siteName: "Ashish Sharma Portfolio",

    title: "Ashish Sharma | Full Stack Developer",

    description:
      "Production-grade Full Stack Developer Portfolio showcasing experience, projects, technical skills, and modern web engineering.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ashish Sharma Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Ashish Sharma | Full Stack Developer",

    description:
      "Production-grade Full Stack Developer Portfolio built with Next.js and modern web technologies.",

    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  alternates: {
    canonical: "/",
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  referrer: "origin-when-cross-origin",
};