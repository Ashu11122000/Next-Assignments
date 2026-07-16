/**
 * =============================================================================
 * Portfolio
 * =============================================================================
 * File: src/data/hero.ts
 * -----------------------------------------------------------------------------
 * Home Page Hero Data
 * -----------------------------------------------------------------------------
 *
 * Responsibilities
 * ----------------
 * • Centralize all Hero section content.
 * • Keep the Hero UI completely presentation-focused.
 * • Provide strongly typed, reusable static data.
 * • Populate content from the latest resume.
 * • Support future localization and CMS integration.
 *
 * Used By
 * -------
 * • Hero.tsx
 * • HeroContent.tsx
 * • HeroButtons.tsx
 * • HeroStats.tsx
 * • FloatingTechIcons.tsx
 *
 * =============================================================================
 */

import type { LucideIcon } from "lucide-react";
import {
  BriefcaseBusiness,
  FolderKanban,
  Code2,
  Rocket,
  ArrowRight,
  Mail,
  Atom,
  Box,
  Braces,
  Database,
  FileCode2,
  Hexagon,
} from "lucide-react";

import type { IconType } from "react-icons";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

/* =============================================================================
   Types
============================================================================= */

export interface HeroButton {
  readonly label: string;
  readonly href: string;
  readonly icon: LucideIcon;
  readonly variant: "primary" | "secondary";
  readonly external?: boolean;
}

export interface HeroStat {
  readonly label: string;
  readonly value: string;
  readonly icon: LucideIcon;
}

export interface FloatingTechnology {
  readonly name: string;
  readonly icon: LucideIcon;
  readonly delay: number;
}

export interface HeroSocial {
  readonly label: string;
  readonly href: string;
  readonly icon: IconType;
}

/* =============================================================================
   Hero Content
============================================================================= */

export const HERO_DATA = {
  greeting: "Hi, I'm",

  name: "Ashish Sharma",

  title: "Aspiring",

  highlight: "Software Engineer",

  subtitle: "Building impactful web solutions for a better tomorrow",

  description:
    "Aspiring Software Engineer with experience in developing full-stack applications, backend systems, and modern web solutions. Passionate about solving real-world problems with clean, scalable, and production-ready code.",

  location: "Panchkula, Haryana, India",

  availability: "Available for Full-Time Opportunities",
} as const;

/* =============================================================================
   Hero Buttons
============================================================================= */

export const HERO_BUTTONS: readonly HeroButton[] = [
  {
    label: "View My Projects",
    href: "/projects",
    icon: ArrowRight,
    variant: "primary",
  },
  {
    label: "Get In Touch",
    href: "/contact",
    icon: Mail,
    variant: "secondary",
  },
] as const;

/* =============================================================================
   Hero Statistics
============================================================================= */

export const HERO_STATS: readonly HeroStat[] = [
  {
    value: "10 Months",
    label: "Experience",
    icon: BriefcaseBusiness,
  },
  {
    value: "10",
    label: "Projects Completed",
    icon: FolderKanban,
  },
  {
    value: "6+",
    label: "Technologies",
    icon: Code2,
  },
  {
    value: "100%",
    label: "Dedication",
    icon: Rocket,
  },
] as const;

/* =============================================================================
   Floating Technology Icons
============================================================================= */

export const FLOATING_TECHNOLOGIES: readonly FloatingTechnology[] = [
  {
    name: "React",
    icon: Atom,
    delay: 0,
  },
  {
    name: "Next.js",
    icon: Hexagon,
    delay: 0.25,
  },
  {
    name: "TypeScript",
    icon: FileCode2,
    delay: 0.5,
  },
  {
    name: "Node.js",
    icon: Braces,
    delay: 0.75,
  },
  {
    name: "Docker",
    icon: Box,
    delay: 1,
  },
  {
    name: "PostgreSQL",
    icon: Database,
    delay: 1.25,
  },
] as const;

/* =============================================================================
   Hero Social Links
============================================================================= */

export const HERO_SOCIALS: readonly HeroSocial[] = [
  {
    label: "GitHub",
    href: "https://github.com/Ashu11122000",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ashish-sharma-383439191/",
    icon: FaLinkedinIn,
  },
] as const;