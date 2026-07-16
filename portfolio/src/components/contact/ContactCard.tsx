/* =============================================================================
   Portfolio Website
   =============================================================================
   File: src/components/home/ContactCard.tsx

   Description:
   -----------------------------------------------------------------------------
   Reusable Contact Card displayed on the Home page sidebar.

   Features
   -----------------------------------------------------------------------------
   ✓ Server Component
   ✓ Responsive
   ✓ Accessible
   ✓ Premium Glass UI
   ✓ Uses reusable Card and Button components
   ✓ Uses react-icons for GitHub & LinkedIn
   ✓ Uses contact data
   ✓ External links
   =============================================================================
*/

import Link from "next/link";
import { Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { contact } from "@/data/contact";

export default function ContactCard() {
  return (
    <Card className="relative overflow-hidden border-white/10 bg-gradient-to-br from-primary/5 via-background to-background">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.18),transparent_45%)]" />

      <div className="relative flex h-full flex-col gap-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/20">
            <Mail className="h-6 w-6" />
          </div>

          <div>
            <h3 className="text-xl font-semibold tracking-tight">
              Let&apos;s Connect
            </h3>

            <p className="mt-1 text-sm text-muted-foreground">
              I&apos;m always open to discussing new opportunities,
              interesting projects or just tech in general.
            </p>
          </div>
        </div>

        {/* CTA */}
        <Button
          asChild
          variant="gradient"
          size="lg"
          className="w-full justify-center"
          rightIcon={<Send className="h-4 w-4" />}
        >
          <Link href="/contact">Send a Message</Link>
        </Button>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-3">
          <Button
            asChild
            variant="outline"
            size="icon"
            aria-label="LinkedIn Profile"
          >
            <Link
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="h-5 w-5" />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="icon"
            aria-label="GitHub Profile"
          >
            <Link
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="h-5 w-5" />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="icon"
            aria-label="Send Email"
          >
            <Link href={`mailto:${contact.email}`}>
              <Mail className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}