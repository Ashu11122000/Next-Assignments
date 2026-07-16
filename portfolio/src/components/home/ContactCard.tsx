/* =============================================================================
   Portfolio Website
   =============================================================================
   File: src/components/home/ContactCard.tsx
   -----------------------------------------------------------------------------
   Contact Card
   -----------------------------------------------------------------------------

   Responsibilities
   ----------------
   • Display primary contact information.
   • Provide quick access to Email, LinkedIn and GitHub.
   • Encourage recruiters and clients to connect.
   • Match the premium dashboard design language.
   • Reuse shared Card and Button components.
   • Responsive across all screen sizes.

   Notes
   -----
   • Server Component
   • Production-ready
   • Accessible
   • Contact information should later be moved to src/data/contact.ts
   =============================================================================
*/

import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircleMore,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function ContactCard() {
  return (
    <Card
      variant="glass"
      padding="lg"
      radius="lg"
      className="border-white/10"
    >
      <div className="flex flex-col gap-6">
        {/* ---------------------------------------------------------------------
            Header
        ---------------------------------------------------------------------- */}
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-violet-600 text-white shadow-lg shadow-cyan-500/20">
            <MessageCircleMore className="h-5 w-5" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">
              Let&apos;s Connect
            </h2>

            <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500" />
          </div>
        </div>

        {/* ---------------------------------------------------------------------
            Description
        ---------------------------------------------------------------------- */}
        <p className="text-sm leading-7 text-zinc-300">
          I&apos;m always interested in discussing software engineering,
          full-stack development, backend architecture, and exciting
          opportunities. Feel free to reach out anytime.
        </p>

        {/* ---------------------------------------------------------------------
            Contact Information
        ---------------------------------------------------------------------- */}
        <div className="space-y-3">
          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
            <Mail className="h-4 w-4 shrink-0 text-cyan-400" />

            <Link
              href="mailto:ashu11vats@gmail.com"
              className="truncate text-sm text-zinc-200 transition-colors hover:text-cyan-400"
            >
              ashu11vats@gmail.com
            </Link>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
            <MapPin className="h-4 w-4 shrink-0 text-cyan-400" />

            <span className="text-sm text-zinc-200">
              Panchkula, Haryana, India
            </span>
          </div>
        </div>

        {/* ---------------------------------------------------------------------
            Social Buttons
        ---------------------------------------------------------------------- */}
        <div className="grid grid-cols-2 gap-3">
          <Button
            asChild
            variant="secondary"
            className="w-full"
            leftIcon={<FaLinkedinIn className="h-4 w-4" />}
            rightIcon={<ArrowUpRight className="h-4 w-4" />}
          >
            <Link
              href="https://www.linkedin.com/in/ashish-sharma-383439191/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
          </Button>

          <Button
            asChild
            variant="secondary"
            className="w-full"
            leftIcon={<FaGithub className="h-4 w-4" />}
            rightIcon={<ArrowUpRight className="h-4 w-4" />}
          >
            <Link
              href="https://github.com/Ashu11122000"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </Button>
        </div>

        {/* ---------------------------------------------------------------------
            CTA
        ---------------------------------------------------------------------- */}
        <Button
          asChild
          variant="gradient"
          className="w-full"
          leftIcon={<Mail className="h-4 w-4" />}
        >
          <Link href="mailto:ashu11vats@gmail.com">
            Send an Email
          </Link>
        </Button>
      </div>
    </Card>
  );
}