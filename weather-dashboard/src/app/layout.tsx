import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";

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
 * Shared application layout.
 *
 * Features
 * --------
 * ✓ Global metadata
 * ✓ SEO
 * ✓ Open Graph
 * ✓ Twitter Cards
 * ✓ Theme Provider
 * ✓ Google Geist Fonts
 * ✓ Premium background
 * ✓ Optimized rendering
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
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "App Router",
    "Server Components",
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
    siteName: APP_NAME,
    type: "website",
    locale: "en_US",
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

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  colorScheme: "light dark",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#ffffff",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#020817",
    },
  ],
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
      className="scroll-smooth"
    >
      <body
        className={[
          geistSans.variable,
          geistMono.variable,

          // Layout
          "min-h-screen",

          // Typography
          "font-sans",
          "antialiased",
          "text-foreground",

          // Background
          "bg-background",
          "selection:bg-sky-500/20",
          "selection:text-foreground",

          // Rendering
          "overflow-x-hidden",
          "[text-rendering:optimizeLegibility]",
          "[-webkit-font-smoothing:antialiased]",
          "[-moz-osx-font-smoothing:grayscale]",
        ].join(" ")}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}