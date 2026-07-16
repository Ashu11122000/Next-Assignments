/* =============================================================================
   Portfolio Data
   -----------------------------------------------------------------------------
   File: src/data/site.ts

   Global application configuration.

   This file serves as the single source of truth for application-wide
   settings, metadata, SEO, and branding.

   Used by:
   - metadata.ts
   - layout.tsx
   - sitemap.ts
   - robots.ts
   - manifest.ts
   - Footer
   - Open Graph
   - Twitter Cards
============================================================================= */

export interface SiteConfig {
  name: string;
  shortName: string;
  description: string;
  url: string;
  locale: string;
  themeColor: string;
  author: string;
  creator: string;
  keywords: readonly string[];
}

export const siteConfig: SiteConfig = {
  name: "Ashish Sharma Portfolio",

  shortName: "Portfolio",

  description:
    "Production-ready Full Stack Developer portfolio showcasing modern web applications, technical expertise, and professional experience built with Next.js, React, TypeScript, Tailwind CSS, FastAPI, and NestJS.",

  url: "https://ashish-portfolio.vercel.app",

  locale: "en-IN",

  themeColor: "#020617",

  author: "Ashish Sharma",

  creator: "Ashish Sharma",

  keywords: [
    "Ashish Sharma",
    "Portfolio",
    "Full Stack Developer",
    "Software Engineer",
    "Software Analyst",
    "Frontend Developer",
    "Backend Developer",
    "Next.js",
    "React",
    "React 19",
    "Next.js 16",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "FastAPI",
    "NestJS",
    "Node.js",
    "Python",
    "PostgreSQL",
    "REST API",
    "Docker",
    "Git",
    "GitHub",
    "Web Developer",
  ] as const,
} as const;