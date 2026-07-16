/**
 * =============================================================================
 * Portfolio Website
 * =============================================================================
 * File: src/components/about/AboutHero.tsx
 * -----------------------------------------------------------------------------
 * About Hero
 * -----------------------------------------------------------------------------
 *
 * Responsibilities
 * ----------------
 * • Display the About page hero section.
 * • Introduce the About page with a premium header.
 * • Render breadcrumb navigation.
 * • Display professional summary from the data layer.
 * • Maintain consistency with the Home page design.
 *
 * Rendering
 * ---------
 * • Server Component
 * • Static Rendering
 *
 * Dependencies
 * ------------
 * • src/data/about.ts
 * • Button
 * • Card
 *
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
      {/* ---------------------------------------------------------------------- */}
      {/* Decorative Background                                                  */}
      {/* ---------------------------------------------------------------------- */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      {/* ---------------------------------------------------------------------- */}
      {/* Content                                                                */}
      {/* ---------------------------------------------------------------------- */}

      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <Card
          variant="glass"
          padding="xl"
          radius="xl"
          className="border-white/10"
        >
          <div className="flex flex-col gap-10">
            {/* ---------------------------------------------------------------- */}
            {/* Breadcrumb                                                       */}
            {/* ---------------------------------------------------------------- */}

            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-sm text-zinc-400"
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 transition-colors hover:text-cyan-400"
              >
                <Home className="h-4 w-4" />

                <span>Home</span>
              </Link>

              <ArrowRight className="h-4 w-4" />

              <span
                className="font-medium text-white"
                aria-current="page"
              >
                About
              </span>
            </nav>

            {/* ---------------------------------------------------------------- */}
            {/* Badge                                                            */}
            {/* ---------------------------------------------------------------- */}

            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
              <User className="h-4 w-4" />

              {ABOUT_DATA.badge}
            </div>

            {/* ---------------------------------------------------------------- */}
            {/* Heading                                                          */}
            {/* ---------------------------------------------------------------- */}

            <div className="space-y-6">
              <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                {ABOUT_DATA.title}

                <span className="mt-3 block bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 bg-clip-text text-transparent">
                  {ABOUT_DATA.heading}
                </span>
              </h1>

              {ABOUT_DATA.description.map((paragraph) => (
                <p
                  key={paragraph}
                  className="max-w-4xl text-lg leading-8 text-zinc-300"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* ---------------------------------------------------------------- */}
            {/* CTA                                                              */}
            {/* ---------------------------------------------------------------- */}

            <div className="flex flex-wrap gap-4">
              <Button asChild variant="gradient">
                <Link href="/projects">
                  View Projects
                </Link>
              </Button>

              <Button asChild variant="outline">
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