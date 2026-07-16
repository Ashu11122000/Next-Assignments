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
 * • Render shared layout components
 *
 * =============================================================================
 */

import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Geist, Geist_Mono } from "next/font/google";

import "@/app/globals.css";

import Providers from "./providers";

import { metadata as siteMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageContainer from "@/components/layout/PageContainer";

import ScrollProgress from "@/components/common/ScrollProgress";
import BackToTop from "@/components/common/BackToTop";

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

export const metadata: Metadata = siteMetadata;

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
        <Providers>
          <ScrollProgress />

          <Navbar />

          <main className="flex min-h-screen flex-col">
            <PageContainer>{children}</PageContainer>
          </main>

          <Footer />

          <BackToTop />
        </Providers>
      </body>
    </html>
  );
}