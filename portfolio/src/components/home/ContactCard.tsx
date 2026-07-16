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
      className="
        group
        relative
        overflow-hidden
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-cyan-400/20
        hover:shadow-[0_0_40px_rgba(56,189,248,0.08)]
      "
    >
      {/* Decorative Glow */}
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-44 w-44 rounded-full bg-violet-500/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex flex-col gap-7">
        {/* ---------------------------------------------------------------------
            Header
        ---------------------------------------------------------------------- */}
        <div className="flex items-start gap-4">
          <div
            className="
              flex
              h-14
              w-14
              shrink-0
              items-center
              justify-center
              rounded-2xl
              border
              border-cyan-400/20
              bg-gradient-to-br
              from-cyan-500
              via-blue-500
              to-violet-600
              text-white
              shadow-lg
              shadow-cyan-500/20
            "
          >
            <MessageCircleMore className="h-6 w-6" />
          </div>

          <div className="min-w-0 flex-1">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Let&apos;s Connect
            </h2>

            <div className="mt-3 h-[3px] w-16 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />
          </div>
        </div>

        {/* ---------------------------------------------------------------------
            Description
        ---------------------------------------------------------------------- */}
        <p className="text-[15px] leading-8 text-zinc-300">
          I&apos;m always interested in discussing software engineering,
          full-stack development, backend architecture, exciting opportunities,
          and collaborative projects. Feel free to reach out anytime.
        </p>

        {/* ---------------------------------------------------------------------
            Contact Information
        ---------------------------------------------------------------------- */}
        <div className="grid gap-4">
          <div
            className="
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-white/10
              bg-white/5
              px-4
              py-3.5
              transition-all
              duration-300
              hover:border-cyan-400/20
              hover:bg-white/10
            "
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10">
              <Mail className="h-4 w-4 text-cyan-400" />
            </div>

            <Link
              href="mailto:ashu11vats@gmail.com"
              className="
                truncate
                text-sm
                font-medium
                text-zinc-200
                transition-colors
                duration-300
                hover:text-cyan-400
              "
            >
              ashu11vats@gmail.com
            </Link>
          </div>

          <div
            className="
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-white/10
              bg-white/5
              px-4
              py-3.5
              transition-all
              duration-300
              hover:border-cyan-400/20
              hover:bg-white/10
            "
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10">
              <MapPin className="h-4 w-4 text-cyan-400" />
            </div>

            <span className="text-sm font-medium text-zinc-200">
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
            className="
              h-11
              w-full
              justify-center
              rounded-xl
              border
              border-white/10
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-cyan-400/30
            "
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
            className="
              h-11
              w-full
              justify-center
              rounded-xl
              border
              border-white/10
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-cyan-400/30
            "
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
          className="
            mt-1
            h-12
            w-full
            rounded-xl
            text-sm
            font-semibold
            shadow-lg
            shadow-cyan-500/20
            transition-all
            duration-300
            hover:-translate-y-0.5
          "
          leftIcon={<Mail className="h-4 w-4" />}
        >
          <Link href="mailto:ashu11vats@gmail.com">
            Send a Message
          </Link>
        </Button>
      </div>
    </Card>
  );
}