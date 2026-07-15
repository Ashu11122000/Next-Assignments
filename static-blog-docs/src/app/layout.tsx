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
 * Shared layout for the entire application.
 *
 * Features
 * - Global SEO metadata
 * - Premium background
 * - Persistent navigation
 * - Responsive container
 * - Light & Dark mode
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
  title: {
    default: "Static Blog & Documentation Site",
    template: "%s | Static Blog & Documentation Site",
  },

  description:
    "A premium static blog and documentation platform built with Next.js App Router, TypeScript, Tailwind CSS, Markdown and Static Site Generation.",

  applicationName: "Static Blog & Documentation Site",

  authors: [
    {
      name: "Ashish Sharma",
    },
  ],

  creator: "Ashish Sharma",

  category: "Technology",

  keywords: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Markdown",
    "Documentation",
    "Static Blog",
    "App Router",
    "SSG",
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Static Blog & Documentation Site",
    description:
      "A premium static blog and documentation platform powered by Next.js App Router and Markdown.",
    type: "website",
    locale: "en_US",
    siteName: "Static Blog & Documentation Site",
  },

  twitter: {
    card: "summary_large_image",
    title: "Static Blog & Documentation Site",
    description:
      "A premium static blog and documentation platform built with Next.js and Markdown.",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-zinc-50 font-sans text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-100`}
      >
        {/* Background Effects */}
        <div className="fixed inset-0 -z-50 overflow-hidden">
          <div className="absolute left-0 top-0 h-[32rem] w-[32rem] rounded-full bg-blue-500/8 blur-3xl" />

          <div className="absolute right-0 top-48 h-[28rem] w-[28rem] rounded-full bg-violet-500/8 blur-3xl" />

          <div className="absolute bottom-0 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-cyan-500/8 blur-3xl" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.45),transparent_60%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.03),transparent_60%)]" />
        </div>

        <div className="relative flex min-h-screen flex-col">
          {/* Navigation */}
          <Navbar />

          {/* Main */}
          <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-12">
            {children}
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}