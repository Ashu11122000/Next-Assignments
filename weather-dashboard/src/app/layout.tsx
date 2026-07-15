import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import {
  APP_DESCRIPTION,
  APP_NAME,
} from "@/lib/constants";

import "./globals.css";

/**
 * ============================================================================
 * Root Layout
 * ============================================================================
 *
 * Shared layout used across the Weather Dashboard.
 *
 * Features
 * - Global metadata
 * - SEO
 * - Open Graph
 * - Twitter Card
 * - Google Geist Fonts
 * - Global styles
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
    default: APP_NAME,
    template: `%s | ${APP_NAME}`,
  },

  description: APP_DESCRIPTION,

  applicationName: APP_NAME,

  keywords: [
    "Weather",
    "Weather Dashboard",
    "WeatherAPI",
    "Forecast",
    "Current Weather",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Server Components",
    "App Router",
  ],

  authors: [
    {
      name: "Ashish Sharma",
    },
  ],

  creator: "Ashish Sharma",

  metadataBase: new URL("http://localhost:3000"),

  openGraph: {
    title: APP_NAME,
    description: APP_DESCRIPTION,
    type: "website",
    locale: "en_US",
    siteName: APP_NAME,
  },

  twitter: {
    card: "summary_large_image",
    title: APP_NAME,
    description: APP_DESCRIPTION,
  },

  robots: {
    index: true,
    follow: true,
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}