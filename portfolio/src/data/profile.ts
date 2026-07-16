/* =============================================================================
   Portfolio Data
   -----------------------------------------------------------------------------
   File: src/data/profile.ts

   Central profile configuration for the portfolio.

   This file acts as the single source of truth for all personal information
   used throughout the application.

   Used by:
   - Navbar
   - MobileMenu
   - Footer
   - Hero
   - About
   - Contact
   - SEO Metadata
============================================================================= */

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
}

export interface PersonalProfile {
  name: string;
  shortName: string;
  title: string;
  subtitle: string;
  description: string;
  location: string;
  email: string;
  phone: string;
  website: string;
  avatar: string;
  socials: SocialLinks;
}

export const profile: PersonalProfile = {
  name: "Ashish Sharma",

  shortName: "AS",

  title: "Full Stack Developer",

  subtitle: "Software Analyst Intern @ Revel Labs",

  description:
    "Passionate Full Stack Developer specializing in building scalable, high-performance web applications using modern technologies including Next.js, React, TypeScript, FastAPI, NestJS, and PostgreSQL.",

  location: "Panchkula, Haryana, India",

  email: "ashu11vats@gmail.com",

  phone: "+91-78885-45551", // Replace with your actual phone number if you want to display it.

  website: "https://ashish-portfolio.vercel.app", // Replace after deployment.

  avatar: "", // Add a profile image URL later if needed.

  socials: {
    github: "https://github.com/Ashu11122000",

    linkedin:
      "https://www.linkedin.com/in/ashish-sharma-383439191/",

    email: "mailto:ashu11vats@gmail.com",
  },
} as const;