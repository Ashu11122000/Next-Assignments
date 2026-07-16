/* =============================================================================
   Portfolio Website
   =============================================================================
   File: src/data/contact.ts

   Description
   -----------------------------------------------------------------------------
   Static contact information used throughout the portfolio.

   Used By
   -----------------------------------------------------------------------------
   ✓ ContactCard
   ✓ ContactForm
   ✓ Contact Page
   ✓ Footer
   ✓ SocialLinks
   ✓ SEO
   =============================================================================
*/

export interface ContactData {
  readonly name: string;
  readonly title: string;
  readonly email: string;
  readonly phone: string;
  readonly location: string;

  readonly github: string;
  readonly linkedin: string;

  readonly availability: string;
  readonly responseTime: string;

  readonly description: string;
}

export const contact: ContactData = {
  name: "Ashish Sharma",

  title: "Software Analyst Intern | Full Stack Developer",

  email: "ashu11vats@gmail.com",

  phone: "+91 78885 45551",

  location: "Panchkula, Haryana, India",

  github: "https://github.com/Ashu11122000",

  linkedin:
    "https://www.linkedin.com/in/ashish-sharma-383439191/",

  availability: "Available for Internship & Full-Time Opportunities",

  responseTime: "Usually responds within 24 hours",

  description:
    "I'm always interested in discussing software engineering, full-stack development, backend systems, cloud technologies, and exciting new opportunities. Whether you have a project idea, collaboration opportunity, or just want to connect, feel free to reach out.",
} as const;

export default contact;