/**
 * =============================================================================
 * Portfolio
 * =============================================================================
 * File: src/app/layout.tsx
 * -----------------------------------------------------------------------------
 * Root Layout
 * -----------------------------------------------------------------------------
 *
 * Responsibilities
 * ----------------
 * • Configure global metadata
 * • Load Geist fonts
 * • Import global styles
 * • Register application providers
 * • Configure HTML language
 * • Prevent hydration mismatch
 * • Define the root document structure
 *
 * =============================================================================
 */

import type { ReactNode } from "react";

import { Geist, Geist_Mono } from "next/font/google";

import "@/app/globals.css";

import Providers from "./providers";

import { metadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export { metadata };

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="scroll-smooth"
    >
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "min-h-screen bg-background font-sans text-foreground antialiased"
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}