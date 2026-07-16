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
 * • Provide premium global background
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
          "min-h-screen overflow-x-hidden bg-background font-sans text-foreground antialiased selection:bg-cyan-500/30 selection:text-white"
        )}
      >
        {/* =========================================================================
            Premium Background
        ========================================================================= */}

        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-50 overflow-hidden"
        >
          {/* Base Background */}

          <div className="absolute inset-0 bg-background" />

          {/* Mesh Gradient */}

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0891b215,transparent_30%),radial-gradient(circle_at_top_right,#3b82f610,transparent_28%),radial-gradient(circle_at_bottom_left,#7c3aed12,transparent_32%),radial-gradient(circle_at_bottom,#06b6d410,transparent_30%)]" />

          {/* Large Glows */}

          <div className="absolute left-1/2 top-[-180px] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[170px]" />

          <div className="absolute -left-40 top-1/3 h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-[160px]" />

          <div className="absolute -right-48 top-1/2 h-[650px] w-[650px] rounded-full bg-violet-500/10 blur-[180px]" />

          <div className="absolute bottom-[-250px] left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-400/5 blur-[200px]" />

          {/* Small Accent Glow */}

          <div className="absolute left-24 top-24 h-52 w-52 rounded-full bg-cyan-400/10 blur-[100px]" />

          <div className="absolute right-24 bottom-24 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-[120px]" />

          {/* Grid */}

          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px] opacity-[0.18]" />

          {/* Fade */}

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
        </div>

        {/* =========================================================================
            Application
        ========================================================================= */}

        <Providers>
          <ScrollProgress />

          <div className="relative isolate flex min-h-screen flex-col">
            <Navbar />

            <main className="relative z-10 flex-1">
              {children}
            </main>

            <Footer />
          </div>

          <BackToTop />
        </Providers>
      </body>
    </html>
  );
}