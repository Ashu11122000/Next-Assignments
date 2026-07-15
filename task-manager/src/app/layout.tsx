import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

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
    default: "Task Manager",
    template: "%s | Task Manager",
  },
  description:
    "A modern Task Manager built with Next.js 16, TypeScript, Prisma, SQLite, and Server Actions.",
  keywords: [
    "Task Manager",
    "Next.js",
    "TypeScript",
    "Prisma",
    "SQLite",
    "Server Actions",
    "Tailwind CSS",
  ],
  authors: [
    {
      name: "Ashish Sharma",
    },
  ],
  applicationName: "Task Manager",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100">
        {children}
      </body>
    </html>
  );
}