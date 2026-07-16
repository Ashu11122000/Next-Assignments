/**
 * =============================================================================
 * Portfolio Website
 * =============================================================================
 * File: src/components/about/AboutCTA.tsx
 * -----------------------------------------------------------------------------
 * About Call To Action
 * -----------------------------------------------------------------------------
 *
 * Responsibilities
 * ----------------
 * • Encourage recruiters and clients to connect.
 * • Provide quick access to Projects and Contact pages.
 * • Display social profile links.
 * • Match the premium portfolio design language.
 * • Reuse shared UI components.
 *
 * Rendering
 * ---------
 * • Server Component
 * • Static Rendering
 *
 * Notes
 * -----
 * • Uses react-icons for social brand icons.
 * • Uses Lucide React for UI icons.
 *
 * =============================================================================
 */

import Link from "next/link";

import { ArrowRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function AboutCTA() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
      <Card
        variant="glass"
        padding="xl"
        radius="xl"
        className="relative overflow-hidden border-white/10"
      >
        {/* ---------------------------------------------------------------------- */}
        {/* Background Effects                                                     */}
        {/* ---------------------------------------------------------------------- */}

        <div className="absolute inset-0 -z-10">
          <div className="absolute -left-28 -top-28 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
        </div>

        {/* ---------------------------------------------------------------------- */}
        {/* Content                                                                */}
        {/* ---------------------------------------------------------------------- */}

        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
            Open to Opportunities
          </span>

          <h2 className="mt-8 text-4xl font-bold leading-tight text-white md:text-5xl">
            Let&apos;s Build Something
            <span className="block bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-zinc-300">
            I&apos;m always interested in discussing full-stack development,
            backend engineering, modern web technologies, and opportunities
            where I can contribute, learn, and grow alongside talented teams.
          </p>

          {/* ------------------------------------------------------------------ */}
          {/* Primary Actions                                                    */}
          {/* ------------------------------------------------------------------ */}

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              variant="gradient"
              size="lg"
              rightIcon={<ArrowRight className="h-4 w-4" />}
            >
              <Link href="/projects">
                View Projects
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              leftIcon={<Mail className="h-4 w-4" />}
            >
              <Link href="/contact">
                Contact Me
              </Link>
            </Button>
          </div>

          {/* ------------------------------------------------------------------ */}
          {/* Social Links                                                       */}
          {/* ------------------------------------------------------------------ */}

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              variant="secondary"
              leftIcon={<FaLinkedin className="h-4 w-4" />}
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

          {/* ------------------------------------------------------------------ */}
          {/* Bottom Text                                                        */}
          {/* ------------------------------------------------------------------ */}

          <p className="mt-10 text-sm text-zinc-500">
            Currently working as a{" "}
            <span className="font-medium text-cyan-400">
              Software Analyst Intern
            </span>{" "}
            at{" "}
            <span className="font-medium text-white">
              Revel Labs
            </span>
            , building scalable backend systems and modern web applications.
          </p>
        </div>
      </Card>
    </section>
  );
}