/**
 * =============================================================================
 * Portfolio Website
 * =============================================================================
 * File: src/app/contact/page.tsx
 * -----------------------------------------------------------------------------
 * Contact Page
 * -----------------------------------------------------------------------------
 *
 * Responsibilities
 * ----------------
 * • Render the Contact page.
 * • Display contact information and social links.
 * • Keep the page lightweight and server-rendered.
 * • Maintain the premium portfolio design language.
 *
 * Rendering
 * ---------
 * • Server Component
 * • Static Rendering
 *
 * =============================================================================
 */

import type { Metadata } from "next";

import ContactHero from "@/components/contact/ContactHero";
import ContactCard from "@/components/contact/ContactCard";

export const metadata: Metadata = {
  title: "Contact | Ashish Sharma",
  description:
    "Get in touch with Ashish Sharma for software engineering, frontend, backend, full-stack development, internships, freelance work, and collaboration opportunities.",
};

export default function ContactPage() {
  return (
    <main className="relative overflow-x-hidden">
      {/* ---------------------------------------------------------------------- */}
      {/* Hero */}
      {/* ---------------------------------------------------------------------- */}

      <ContactHero />

      {/* ---------------------------------------------------------------------- */}
      {/* Contact Card */}
      {/* ---------------------------------------------------------------------- */}

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <ContactCard />
      </section>
    </main>
  );
}