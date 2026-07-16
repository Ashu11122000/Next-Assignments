/* =============================================================================
   Portfolio Website
   =============================================================================
   File: src/data/social.ts

   Description
   -----------------------------------------------------------------------------
   Static social media profile data used throughout the portfolio.

   Used By
   -----------------------------------------------------------------------------
   ✓ SocialLinks
   ✓ Hero
   ✓ Footer
   ✓ Contact Page
   ✓ Navbar
   =============================================================================
*/

import type { IconType } from "react-icons";

import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";

export interface SocialLink {
  readonly id: string;
  readonly name: string;
  readonly href: string;
  readonly icon: IconType;
  readonly label: string;
  readonly external: boolean;
}

export const socialLinks: readonly SocialLink[] = [
  {
    id: "github",

    name: "GitHub",

    href: "https://github.com/Ashu11122000",

    icon: FaGithub,

    label: "Visit GitHub Profile",

    external: true,
  },

  {
    id: "linkedin",

    name: "LinkedIn",

    href: "https://www.linkedin.com/in/ashish-sharma-383439191/",

    icon: FaLinkedinIn,

    label: "Visit LinkedIn Profile",

    external: true,
  }
] as const;

export default socialLinks;