/**
 * =============================================================================
 * Portfolio Website
 * =============================================================================
 * File: src/components/about/AboutHero.tsx
 * =============================================================================
 */

import Link from "next/link";
import { ArrowRight, Home, User } from "lucide-react";

import { ABOUT_DATA } from "@/data/about";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden">
      {/* ================================================================ */}
      {/* Premium Background */}
      {/* ================================================================ */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-0 h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute -right-40 top-10 h-[34rem] w-[34rem] rounded-full bg-violet-600/15 blur-[140px]" />

        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/5 blur-[120px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_70%)]" />
      </div>

      {/* ================================================================ */}
      {/* Content */}
      {/* ================================================================ */}

      <div className="relative mx-auto w-full max-w-[1600px] px-5 py-16 sm:px-6 md:py-20 lg:px-8 xl:px-12 2xl:px-16">
        <Card
          variant="glass"
          padding="xl"
          radius="xl"
          className="relative overflow-hidden border border-white/10 bg-white/[0.035] backdrop-blur-2xl"
        >
          {/* Decorative Glow */}

          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-24 top-0 h-64 w-64 rounded-full bg-violet-500/10 blur-[100px]" />

            <div className="absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-cyan-500/10 blur-[90px]" />
          </div>

          <div className="relative flex flex-col gap-8 lg:gap-10">
            {/* ========================================================== */}
            {/* Breadcrumb */}
            {/* ========================================================== */}

            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 text-sm text-zinc-400"
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 transition-all duration-300 hover:border-cyan-400/40 hover:text-cyan-300"
              >
                <Home className="h-4 w-4" />

                <span>Home</span>
              </Link>

              <ArrowRight className="h-4 w-4 text-zinc-600" />

              <span
                aria-current="page"
                className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-2 font-medium text-cyan-300"
              >
                About
              </span>
            </nav>

            {/* ========================================================== */}
            {/* Badge */}
            {/* ========================================================== */}

            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300 backdrop-blur-md">
              <User className="h-4 w-4" />

              {ABOUT_DATA.badge}
            </div>

            {/* ========================================================== */}
            {/* Heading */}
            {/* ========================================================== */}

            <div className="max-w-5xl space-y-6">
              <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                {ABOUT_DATA.title}

                <span className="mt-3 block bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
                  {ABOUT_DATA.heading}
                </span>
              </h1>

              <div className="h-px w-40 bg-gradient-to-r from-cyan-400 via-violet-500 to-transparent" />

              <div className="space-y-6">
                {ABOUT_DATA.description.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="max-w-4xl text-base leading-8 text-zinc-300 sm:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* ========================================================== */}
            {/* CTA */}
            {/* ========================================================== */}

            <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:flex-wrap">
              <Button
                asChild
                variant="gradient"
                size="lg"
                className="w-full sm:w-auto min-w-[220px]"
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
              >
                <Link href="/contact">
                  Contact Me
                </Link>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}