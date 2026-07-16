/**
 * =============================================================================
 * Portfolio Website
 * =============================================================================
 * File: src/components/about/AboutContent.tsx
 * =============================================================================
 */

import Link from "next/link";

import { ArrowUpRight, Mail } from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa6";

import {
  ABOUT_DATA,
  ABOUT_HIGHLIGHTS,
  ABOUT_INFO,
} from "@/data/about";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function AboutContent() {
  return (
    <section className="relative mx-auto w-full max-w-[1600px] px-5 py-16 sm:px-6 md:py-20 lg:px-8 xl:px-12 2xl:px-16">
      <div className="grid items-start gap-8 xl:gap-10 2xl:grid-cols-[1.65fr_1fr]">
        {/* ==================================================================== */}
        {/* Left Column */}
        {/* ==================================================================== */}

        <div className="space-y-8">
          {/* Professional Summary */}

          <Card
            variant="glass"
            padding="lg"
            radius="lg"
            className="group overflow-hidden border border-white/10 bg-white/[0.035] backdrop-blur-2xl transition-all duration-500 hover:border-violet-500/30 hover:shadow-[0_20px_60px_rgba(99,102,241,0.18)]"
          >
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-1 rounded-full bg-gradient-to-b from-cyan-400 via-blue-500 to-violet-500" />

                  <div>
                    <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      Professional Summary
                    </h2>

                    <p className="mt-1 text-sm text-zinc-400">
                      A brief introduction about my experience and passion.
                    </p>
                  </div>
                </div>

                <div className="mt-5 h-px w-full bg-gradient-to-r from-cyan-500/60 via-violet-500/30 to-transparent" />
              </div>

              <div className="space-y-6">
                {ABOUT_DATA.description.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-[15px] leading-8 text-zinc-300 lg:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </Card>

          {/* Highlights */}

          <div className="grid gap-6 sm:grid-cols-2">
            {ABOUT_HIGHLIGHTS.map((highlight) => {
              const Icon = highlight.icon;

              return (
                <Card
                  key={highlight.title}
                  variant="glass"
                  padding="lg"
                  radius="lg"
                  className="group h-full border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-violet-500/30 hover:shadow-[0_18px_45px_rgba(99,102,241,0.16)]"
                >
                  <div className="flex h-full flex-col">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-500 to-violet-600 text-white shadow-xl shadow-cyan-500/20 transition-transform duration-500 group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div className="mt-6 flex-1">
                      <h3 className="text-lg font-semibold text-white">
                        {highlight.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-zinc-300">
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
        {/* Right Column */}
        {/* ==================================================================== */}

        <aside className="space-y-8">
          {/* Quick Information */}

          <Card
            variant="glass"
            padding="lg"
            radius="lg"
            className="border border-white/10 bg-white/[0.035] backdrop-blur-2xl"
          >
            <div className="space-y-7">
              <div>
                <div className="flex items-center gap-3">
                  <div className="h-9 w-1 rounded-full bg-gradient-to-b from-cyan-400 to-violet-500" />

                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      Quick Information
                    </h2>

                    <p className="mt-1 text-sm text-zinc-400">
                      Personal and professional details.
                    </p>
                  </div>
                </div>

                <div className="mt-5 h-px bg-gradient-to-r from-cyan-500/60 via-violet-500/30 to-transparent" />
              </div>

              <div className="space-y-4">
                {ABOUT_INFO.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/[0.05]"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-violet-500/10 text-cyan-400 transition-all duration-300 group-hover:scale-105 group-hover:text-cyan-300">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-zinc-500">
                          {item.label}
                        </p>

                        <p className="mt-2 break-words text-sm font-medium leading-6 text-white">
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
            className="overflow-hidden border border-white/10 bg-gradient-to-br from-violet-500/5 via-transparent to-cyan-500/5 backdrop-blur-2xl"
          >
            <div className="space-y-7">
              <div>
                <div className="flex items-center gap-3">
                  <div className="h-9 w-1 rounded-full bg-gradient-to-b from-cyan-400 to-violet-500" />

                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      Let&apos;s Connect
                    </h2>

                    <p className="mt-1 text-sm text-zinc-400">
                      Available for opportunities and collaborations.
                    </p>
                  </div>
                </div>

                <div className="mt-5 h-px bg-gradient-to-r from-cyan-500/60 via-violet-500/30 to-transparent" />
              </div>

              <p className="text-sm leading-7 text-zinc-300">
                I&apos;m always open to discussing software engineering, backend
                systems, full-stack development, open-source contributions, and
                exciting opportunities.
              </p>

              <div className="space-y-4">
                <Button
                  asChild
                  variant="secondary"
                  className="w-full justify-between rounded-xl"
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
                  className="w-full justify-between rounded-xl"
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
                  className="w-full rounded-xl"
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