/**
 * =============================================================================
 * Portfolio Website
 * =============================================================================
 * File: src/components/about/AboutCTA.tsx
 * =============================================================================
 */

import Link from "next/link";

import { ArrowRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function AboutCTA() {
  return (
    <section className="relative mx-auto w-full max-w-[1600px] px-5 py-20 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
      <Card
        variant="glass"
        padding="xl"
        radius="xl"
        className="relative overflow-hidden border border-white/10 bg-white/[0.035] backdrop-blur-2xl"
      >
        {/* ================================================================ */}
        {/* Background Glow */}
        {/* ================================================================ */}

        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-[120px]" />

          <div className="absolute -right-40 bottom-0 h-[32rem] w-[32rem] rounded-full bg-violet-600/15 blur-[140px]" />

          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[120px]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_70%)]" />
        </div>

        {/* Decorative Ring */}

        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-violet-500/10" />
        <div className="absolute -left-24 bottom-0 h-56 w-56 rounded-full border border-cyan-500/10" />

        {/* ================================================================ */}
        {/* Content */}
        {/* ================================================================ */}

        <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
          {/* Badge */}

          <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300 backdrop-blur-md">
            ✨ Open to Full-Time Opportunities
          </div>

          {/* Heading */}

          <h2 className="mt-8 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let&apos;s Build Something

            <span className="mt-2 block bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>

          {/* Divider */}

          <div className="mt-8 h-px w-40 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

          {/* Description */}

          <p className="mt-8 max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg">
            I&apos;m always interested in discussing full-stack development,
            backend engineering, scalable architectures, modern web
            technologies, and opportunities where I can contribute,
            learn, and grow alongside talented teams.
          </p>

          {/* ============================================================ */}
          {/* CTA Buttons */}
          {/* ============================================================ */}

          <div className="mt-12 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
            <Button
              asChild
              variant="gradient"
              size="lg"
              className="w-full sm:w-auto min-w-[220px]"
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
              className="w-full sm:w-auto min-w-[220px]"
              leftIcon={<Mail className="h-4 w-4" />}
            >
              <Link href="/contact">
                Contact Me
              </Link>
            </Button>
          </div>

          {/* ============================================================ */}
          {/* Social Buttons */}
          {/* ============================================================ */}

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              variant="secondary"
              className="min-w-[160px]"
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
              className="min-w-[160px]"
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

          {/* ============================================================ */}
          {/* Bottom Card */}
          {/* ============================================================ */}

          <div className="mt-12 w-full max-w-3xl rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 backdrop-blur-xl">
            <p className="text-sm leading-7 text-zinc-400 sm:text-base">
              Currently working as a{" "}
              <span className="font-semibold text-cyan-400">
                Software Analyst Intern
              </span>{" "}
              at{" "}
              <span className="font-semibold text-white">
                Revel Labs
              </span>
              , building scalable backend systems, REST APIs, modern web
              applications, and cloud-ready solutions using contemporary
              technologies.
            </p>
          </div>
        </div>
      </Card>
    </section>
  );
}