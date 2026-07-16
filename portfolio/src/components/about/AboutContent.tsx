/**
 * =============================================================================
 * Portfolio Website
 * =============================================================================
 * File: src/components/about/AboutContent.tsx
 * -----------------------------------------------------------------------------
 * About Content
 * -----------------------------------------------------------------------------
 *
 * Responsibilities
 * ----------------
 * • Display detailed professional information.
 * • Render personal information cards.
 * • Display professional highlights.
 * • Encourage recruiters to connect.
 * • Reuse shared UI components.
 *
 * Rendering
 * ---------
 * • Server Component
 * • Static Rendering
 *
 * =============================================================================
 */

import Link from "next/link";

import {
  ArrowUpRight,
  Mail,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";

import {
  ABOUT_DATA,
  ABOUT_HIGHLIGHTS,
  ABOUT_INFO,
} from "@/data/about";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function AboutContent() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        {/* ==================================================================== */}
        {/* Left Column                                                         */}
        {/* ==================================================================== */}

        <div className="space-y-8">
          {/* Professional Summary */}

          <Card
            variant="glass"
            padding="lg"
            radius="lg"
          >
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-white">
                  Professional Summary
                </h2>

                <div className="mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500" />
              </div>

              {ABOUT_DATA.description.map((paragraph) => (
                <p
                  key={paragraph}
                  className="leading-8 text-zinc-300"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Card>

          {/* Highlights */}

          <div className="grid gap-6 md:grid-cols-2">
            {ABOUT_HIGHLIGHTS.map((highlight) => {
              const Icon = highlight.icon;

              return (
                <Card
                  key={highlight.title}
                  variant="glass"
                  padding="lg"
                  radius="lg"
                >
                  <div className="space-y-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600 text-white shadow-lg shadow-cyan-500/20">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {highlight.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-zinc-300">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* ==================================================================== */}
        {/* Right Column                                                        */}
        {/* ==================================================================== */}

        <aside className="space-y-8">
          {/* Personal Information */}

          <Card
            variant="glass"
            padding="lg"
            radius="lg"
          >
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">
                Quick Information
              </h2>

              <div className="space-y-4">
                {ABOUT_INFO.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-wider text-zinc-500">
                          {item.label}
                        </p>

                        <p className="mt-1 text-sm font-medium text-white">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>

          {/* Connect */}

          <Card
            variant="glass"
            padding="lg"
            radius="lg"
          >
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">
                Let&apos;s Connect
              </h2>

              <p className="text-sm leading-7 text-zinc-300">
                I&apos;m always open to discussing software engineering,
                backend systems, full-stack development, and exciting
                opportunities.
              </p>

              <div className="space-y-3">
                <Button
                  asChild
                  variant="secondary"
                  className="w-full justify-between"
                  rightIcon={<ArrowUpRight className="h-4 w-4" />}
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
                  className="w-full justify-between"
                  rightIcon={<ArrowUpRight className="h-4 w-4" />}
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

                <Button
                  asChild
                  variant="gradient"
                  className="w-full"
                  leftIcon={<Mail className="h-4 w-4" />}
                >
                  <Link href="mailto:ashu11vats@gmail.com">
                    Send Email
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </aside>
      </div>
    </section>
  );
}