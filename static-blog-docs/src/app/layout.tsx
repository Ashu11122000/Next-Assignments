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
 * - Global metadata
 * - Google Geist fonts
 * - Persistent navigation
 * - Shared footer
 * - Responsive page container
 * * All routes are rendered inside the <main> element.
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
  title: "Static Blog & Documentation Site",
  description:
    "A simple static blog and documentation website built with Next.js, TypeScript, Tailwind CSS, Markdown, and Static Site Generation (SSG).",
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