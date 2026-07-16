/**
 * =============================================================================
 * Portfolio
 * =============================================================================
 * File: src/data/about.ts
 * -----------------------------------------------------------------------------
 * About Section Data
 * -----------------------------------------------------------------------------
 *
 * Responsibilities
 * ----------------
 * • Centralize all About section content.
 * • Keep the About UI presentation-focused.
 * • Provide strongly typed static data.
 * • Populate content from the latest resume.
 * • Support future CMS/localization integration.
 *
 * Used By
 * -------
 * • About.tsx
 * • AboutContent.tsx
 * • AboutHighlights.tsx
 * • AboutInfo.tsx
 *
 * =============================================================================
 */

import type { LucideIcon } from "lucide-react";
import {
  Award,
  BriefcaseBusiness,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  MapPin,
  Rocket,
  Target,
} from "lucide-react";

/* =============================================================================
   Types
============================================================================= */

export interface AboutHighlight {
  readonly title: string;
  readonly description: string;
  readonly icon: LucideIcon;
}

export interface AboutInfoItem {
  readonly label: string;
  readonly value: string;
  readonly icon: LucideIcon;
}

/* =============================================================================
   Main About Content
============================================================================= */

export const ABOUT_DATA = {
  title: "About Me",

  badge: "Professional Summary",

  heading: "Passionate about building modern, scalable software.",

  description: [
    "I'm Ashish Sharma, an aspiring Software Engineer with hands-on experience in developing full-stack applications, backend APIs, and modern web solutions using Next.js, React, TypeScript, FastAPI, NestJS, and PostgreSQL.",

    "Currently, I'm working as a Software Analyst Intern at Revel Labs, where I contribute to backend development, RESTful APIs, PostgreSQL optimization, Docker-based development environments, and modern software engineering practices.",

    "I enjoy solving complex problems, learning new technologies, and creating software that delivers meaningful value to users while following clean architecture, scalability, and performance-first principles.",
  ],
} as const;

/* =============================================================================
   About Information
============================================================================= */

export const ABOUT_INFO: readonly AboutInfoItem[] = [
  {
    label: "Location",
    value: "Panchkula, Haryana, India",
    icon: MapPin,
  },
  {
    label: "Current Role",
    value: "Software Analyst Intern",
    icon: BriefcaseBusiness,
  },
  {
    label: "Company",
    value: "Revel Labs",
    icon: Rocket,
  },
  {
    label: "Education",
    value: "MCA • Cloud Computing & DevOps",
    icon: GraduationCap,
  },
] as const;

/* =============================================================================
   Professional Highlights
============================================================================= */

export const ABOUT_HIGHLIGHTS: readonly AboutHighlight[] = [
  {
    title: "Full Stack Development",
    description:
      "Building scalable frontend and backend applications using modern technologies and production-ready architecture.",
    icon: Rocket,
  },
  {
    title: "Problem Solving",
    description:
      "Passionate about solving real-world challenges through efficient software engineering and clean code practices.",
    icon: Lightbulb,
  },
  {
    title: "Continuous Learning",
    description:
      "Committed to constantly improving technical expertise across frontend, backend, cloud, and DevOps technologies.",
    icon: Award,
  },
  {
    title: "Career Objective",
    description:
      "Seeking opportunities to contribute, learn, and grow as a Software Engineer while building impactful software products.",
    icon: Target,
  },
  {
    title: "Team Collaboration",
    description:
      "Enjoy collaborating with cross-functional teams using Agile workflows, Git, and modern development practices.",
    icon: HeartHandshake,
  },
] as const;