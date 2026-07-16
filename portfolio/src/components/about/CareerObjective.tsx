/**
 * =============================================================================
 * Portfolio Website
 * =============================================================================
 * File: src/components/about/CareerObjective.tsx
 * -----------------------------------------------------------------------------
 * Career Objective
 * -----------------------------------------------------------------------------
 *
 * Responsibilities
 * ----------------
 * • Display professional career objective.
 * • Highlight engineering mindset and long-term goals.
 * • Encourage recruiters to understand career aspirations.
 * * Match the premium portfolio design language.
 * • Reuse shared UI components.
 *
 * Rendering
 * ---------
 * • Server Component
 * • Static Rendering
 *
 * =============================================================================
 */

import { ArrowRight, Target } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function CareerObjective() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
      <Card
        variant="glass"
        padding="xl"
        radius="xl"
        className="relative overflow-hidden border-white/10"
      >
        {/* Decorative Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-600 text-white shadow-xl shadow-cyan-500/20">
            <Target className="h-8 w-8" />
          </div>

          <h2 className="mt-8 text-3xl font-bold text-white md:text-4xl">
            Career Objective
          </h2>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500" />

          <p className="mt-8 text-lg leading-9 text-zinc-300">
            My goal is to grow as a Software Engineer by building scalable,
            high-performance applications that solve real-world problems. I
            enjoy working across the full stack—from intuitive frontend
            experiences to robust backend systems—and continuously expanding my
            knowledge in cloud technologies, distributed systems, DevOps, and
            modern software architecture. I aim to contribute to impactful
            products while collaborating with talented teams that value
            innovation, clean engineering practices, and continuous learning.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button variant="gradient" rightIcon={<ArrowRight className="h-4 w-4" />}>
              Open to Opportunities
            </Button>
          </div>
        </div>
      </Card>
    </section>
  );
}