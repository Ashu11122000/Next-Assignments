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
      className="h-full border-white/10"
    >
      <div className="flex flex-col gap-6">
        {/* ---------------------------------------------------------------------
            Header
        ---------------------------------------------------------------------- */}
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-violet-600 text-white shadow-lg shadow-cyan-500/20">
            <User className="h-5 w-5" />
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white">
              About Me
            </h2>

            <div className="mt-2 h-1 w-14 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500" />
          </div>
        </div>

        {/* ---------------------------------------------------------------------
            Description
        ---------------------------------------------------------------------- */}
        <p className="text-sm leading-7 text-zinc-300">
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
        <div className="grid gap-3">
          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
            <MapPin className="h-4 w-4 shrink-0 text-cyan-400" />

            <span className="text-sm text-zinc-200">
              Panchkula, Haryana, India
            </span>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
            <Mail className="h-4 w-4 shrink-0 text-cyan-400" />

            <span className="truncate text-sm text-zinc-200">
              ashu11vats@gmail.com
            </span>
          </div>
        </div>

        {/* ---------------------------------------------------------------------
            Social Links
        ---------------------------------------------------------------------- */}
        <div className="grid grid-cols-2 gap-3">
          <Button
            asChild
            variant="secondary"
            className="w-full justify-center"
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
            className="w-full justify-center"
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