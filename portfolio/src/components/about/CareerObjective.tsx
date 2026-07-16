/**
 * =============================================================================
 * Portfolio Website
 * =============================================================================
 * File: src/components/about/CareerObjective.tsx
 * =============================================================================
 */

import { ArrowRight, Target } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function CareerObjective() {
  return (
    <section className="relative mx-auto w-full max-w-[1600px] px-5 py-20 sm:px-6 md:py-24 lg:px-8 xl:px-12 2xl:px-16">
      <Card
        variant="glass"
        padding="xl"
        radius="xl"
        className="relative overflow-hidden border border-white/10 bg-white/[0.035] backdrop-blur-2xl"
      >
        {/* ================================================================ */}
        {/* Background Effects */}
        {/* ================================================================ */}

        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-[120px]" />

          <div className="absolute -right-44 bottom-0 h-[34rem] w-[34rem] rounded-full bg-violet-600/15 blur-[140px]" />

          <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[120px]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_70%)]" />
        </div>

        {/* Decorative Rings */}

        <div className="pointer-events-none absolute -left-16 -top-16 h-60 w-60 rounded-full border border-cyan-500/10" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full border border-violet-500/10" />

        {/* ================================================================ */}
        {/* Content */}
        {/* ================================================================ */}

        <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
          {/* Icon */}

          <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500 via-blue-500 to-violet-600 text-white shadow-[0_20px_50px_rgba(6,182,212,0.25)]">
            <Target className="h-9 w-9" />
          </div>

          {/* Badge */}

          <div className="mt-8 inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300 backdrop-blur-md">
            Career Vision
          </div>

          {/* Heading */}

          <h2 className="mt-8 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Career Objective
          </h2>

          {/* Divider */}

          <div className="mt-6 h-px w-40 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

          {/* Description */}

          <p className="mt-8 max-w-4xl text-base leading-8 text-zinc-300 sm:text-lg sm:leading-9">
            My goal is to grow as a Software Engineer by building scalable,
            high-performance applications that solve real-world problems. I
            enjoy working across the full stack—from intuitive frontend
            experiences to robust backend systems—and continuously expanding my
            knowledge in cloud technologies, distributed systems, DevOps, and
            modern software architecture. I aim to contribute to impactful
            products while collaborating with talented teams that value
            innovation, clean engineering practices, and continuous learning.
          </p>

          {/* Focus Areas */}

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {[
              "Full-Stack Development",
              "Backend Engineering",
              "Cloud Technologies",
              "DevOps",
              "Software Architecture",
              "Continuous Learning",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-zinc-300 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/30 hover:text-white"
              >
                {item}
              </span>
            ))}
          </div>

          {/* CTA */}

          <div className="mt-12 flex w-full justify-center">
            <Button
              variant="gradient"
              size="lg"
              className="min-w-[240px]"
              rightIcon={<ArrowRight className="h-4 w-4" />}
            >
              Open to Opportunities
            </Button>
          </div>
        </div>
      </Card>
    </section>
  );
}