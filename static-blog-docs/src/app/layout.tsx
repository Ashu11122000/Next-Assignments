import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import "./globals.css";

/**
 * ============================================================================
 * Root Layout
 * ============================================================================
 *
 * Shared layout used across the entire application.
 *
 * Features:
 * - Global SEO metadata
 * - Open Graph metadata
 * - Twitter Card metadata
 * - Google Geist fonts
 * - Persistent navigation
 * - Shared footer
 * - Responsive page container
 * ============================================================================
 */

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),

  title: {
    default: "Static Blog & Documentation Site",
    template: "%s | Static Blog & Documentation Site",
  },

  description:
    "A simple static blog and documentation website built with Next.js App Router, TypeScript, Tailwind CSS, Markdown, and Static Site Generation (SSG).",

  applicationName: "Static Blog & Documentation Site",

  keywords: [
    "Next.js",
    "App Router",
    "TypeScript",
    "Tailwind CSS",
    "Markdown",
    "Static Site Generation",
    "SSG",
    "Documentation",
    "Blog",
  ],

  authors: [
    {
      name: "Ashish Sharma",
    },
  ],

  creator: "Ashish Sharma",

  category: "Education",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Static Blog & Documentation Site",
    description:
      "A simple assignment project demonstrating Static Site Generation (SSG), Markdown content, reusable components, and nested layouts using Next.js.",

    type: "website",

    locale: "en_US",

    siteName: "Static Blog & Documentation Site",
  },

  twitter: {
    card: "summary_large_image",

    title: "Static Blog & Documentation Site",

    description:
      "A Next.js App Router assignment demonstrating Static Site Generation (SSG), Markdown, and documentation pages.",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-white font-sans text-gray-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          {/* Global Navigation */}
          <Navbar />

          {/* Main Content */}
          <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-10">
            {children}
          </main>

          {/* Global Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}