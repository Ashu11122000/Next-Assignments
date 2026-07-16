/* =============================================================================
   Portfolio Website
   =============================================================================
   File: src/components/home/AboutCard.tsx
   -----------------------------------------------------------------------------
   About Card
   -----------------------------------------------------------------------------

   Responsibilities
   ----------------
   • Display a concise professional introduction.
   • Show quick contact information.
   • Provide external profile links.
   • Match the premium dashboard design language.
   • Reuse the shared Card and Button components.

   Notes
   -----
   • Server Component (no "use client")
   • Fully responsive
   • Accessible
   • Uses reusable UI components
   =============================================================================
*/

import Link from "next/link";
import { Mail, MapPin, User } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function AboutCard() {
  return (
    <Card
      variant="glass"
      padding="lg"
      radius="lg"
      className="
        group
        relative
        h-full
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
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex h-full flex-col gap-7">
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
            <User className="h-6 w-6" />
          </div>

          <div className="min-w-0 flex-1">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              About Me
            </h2>

            <div className="mt-3 h-[3px] w-16 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />
          </div>
        </div>

        {/* ---------------------------------------------------------------------
            Description
        ---------------------------------------------------------------------- */}
        <p
          className="
            text-[15px]
            leading-8
            text-zinc-300
          "
        >
          Aspiring Software Engineer with experience in developing full-stack
          applications, backend systems, and modern web solutions. Driven by
          curiosity and a strong problem-solving mindset, with a passion for
          building impactful software products that address real-world
          challenges. Committed to continuous learning, innovation, and
          contributing effectively within dynamic and growth-oriented teams.
        </p>

        {/* ---------------------------------------------------------------------
            Quick Information
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
              <MapPin className="h-4 w-4 text-cyan-400" />
            </div>

            <span className="text-sm font-medium text-zinc-200">
              Panchkula, Haryana, India
            </span>
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
              <Mail className="h-4 w-4 text-cyan-400" />
            </div>

            <span className="truncate text-sm font-medium text-zinc-200">
              ashu11vats@gmail.com
            </span>
          </div>
        </div>

        {/* ---------------------------------------------------------------------
            Social Links
        ---------------------------------------------------------------------- */}
        <div className="grid grid-cols-2 gap-3 pt-1">
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
      </div>
    </Card>
  );
}