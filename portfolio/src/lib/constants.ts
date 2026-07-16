/**
 * =============================================================================
 * Personal Portfolio
 * File: src/lib/constants.ts
 * -----------------------------------------------------------------------------
 * Global Application Constants
 * -----------------------------------------------------------------------------
 * This file contains application-wide constants that are reused throughout
 * the portfolio. Dynamic content such as projects, experience, skills, and
 * education should live inside the `src/data` directory.
 * =============================================================================
 */

/* =============================================================================
   Application
   ============================================================================= */

export const APP_NAME = "Ashish Sharma";

export const APP_FULL_NAME = "Ashish Sharma Portfolio";

export const APP_DESCRIPTION =
  "Software Analyst Intern and Full Stack Developer specializing in Next.js, React, TypeScript, FastAPI, NestJS, PostgreSQL, and modern web technologies.";

export const APP_URL = "http://localhost:3000";

/* =============================================================================
   Personal Information
   ============================================================================= */

export const AUTHOR_NAME = "Ashish Sharma";

export const JOB_TITLE = "Software Analyst Intern";

export const PROFESSIONAL_TITLE = "Full Stack Developer";

export const LOCATION = "Panchkula, Haryana, India";

export const EMAIL = "ashu11vats@gmail.com";

export const PHONE = "+91-78885-45551";

/* =============================================================================
   Social Links
   ============================================================================= */

export const SOCIAL_LINKS = {
  github: "https://github.com/Ashu11122000",

  linkedin: "https://www.linkedin.com/in/ashish-sharma-383439191/",

  email: "mailto:ashu11vats@gmail.com",
} as const;

/* =============================================================================
   Navigation
   ============================================================================= */

export const NAVIGATION_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Skills",
    href: "/skills",
  },
  {
    label: "Experience",
    href: "/experience",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Education",
    href: "/education",
  },
  {
    label: "Contact",
    href: "/contact",
  },
] as const;

/* =============================================================================
   Hero Statistics
   ============================================================================= */

export const HERO_STATS = [
  {
    value: "2+",
    label: "Years Learning",
  },
  {
    value: "10+",
    label: "Projects Built",
  },
  {
    value: "15+",
    label: "Technologies",
  },
  {
    value: "100%",
    label: "Dedication",
  },
] as const;

/* =============================================================================
   Theme
   ============================================================================= */

export const DEFAULT_THEME = "dark" as const;

/* =============================================================================
   Layout
   ============================================================================= */

export const MAX_CONTENT_WIDTH = "1440px";

export const NAVBAR_HEIGHT = "5rem";

/* =============================================================================
   SEO
   ============================================================================= */

export const DEFAULT_KEYWORDS = [
  "Ashish Sharma",
  "Portfolio",
  "Software Engineer",
  "Software Analyst",
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "FastAPI",
  "NestJS",
  "Node.js",
  "PostgreSQL",
] as const;

/* =============================================================================
   Animation
   ============================================================================= */

export const ANIMATION_DURATION = {
  fast: 150,

  normal: 300,

  slow: 500,

  extraSlow: 700,
} as const;

/* =============================================================================
   Breakpoints
   ============================================================================= */

export const BREAKPOINTS = {
  sm: 640,

  md: 768,

  lg: 1024,

  xl: 1280,

  "2xl": 1536,
} as const;

/* =============================================================================
   External Links
   ============================================================================= */

export const EXTERNAL_LINKS = {
  github: SOCIAL_LINKS.github,

  linkedin: SOCIAL_LINKS.linkedin,
} as const;