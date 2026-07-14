"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, ShieldCheck } from "lucide-react";

import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import Input from "@/components/common/Input";

/* -------------------------------------------------------------------------- */
/* Newsletter                                                                 */
/* -------------------------------------------------------------------------- */

export default function Newsletter() {
  return (
    <section
      aria-labelledby="newsletter-heading"
      className="relative overflow-hidden py-24"
    >
      {/* ------------------------------------------------------------------ */}
      {/* Background */}
      {/* ------------------------------------------------------------------ */}

      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-primary/5 via-background to-primary/10" />

      <div className="absolute -left-24 top-0 -z-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="absolute -right-24 bottom-0 -z-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

      <Container>
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
          className="relative overflow-hidden rounded-3xl border border-border/60 bg-background/80 p-8 shadow-2xl backdrop-blur-xl md:p-12 lg:p-16"
        >
          {/* -------------------------------------------------------------- */}
          {/* Decorative Glow */}
          {/* -------------------------------------------------------------- */}

          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            {/* ---------------------------------------------------------- */}
            {/* Icon */}
            {/* ---------------------------------------------------------- */}

            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Mail className="h-8 w-8" />
            </div>

            {/* ---------------------------------------------------------- */}
            {/* Heading */}
            {/* ---------------------------------------------------------- */}

            <h2
              id="newsletter-heading"
              className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            >
              Stay Updated with
              <span className="block text-primary">Exclusive Offers</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Subscribe to receive the latest product launches, exclusive
              discounts, shopping tips, and special offers delivered directly to
              your inbox.
            </p>

            {/* ---------------------------------------------------------- */}
            {/* Form (Part 2) */}
            {/* ---------------------------------------------------------- */}
            {/* ---------------------------------------------------------- */}
            {/* Newsletter Form */}
            {/* ---------------------------------------------------------- */}

            <form
              className="mx-auto mt-10 max-w-2xl"
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    autoComplete="email"
                    aria-label="Email address"
                    className="h-12"
                  />
                </div>

                <Button type="submit" size="lg" className="sm:px-8">
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              {/* -------------------------------------------------------- */}
              {/* Privacy Notice */}
              {/* -------------------------------------------------------- */}

              <div className="mt-5 flex flex-col items-center justify-center gap-2 text-sm text-muted-foreground sm:flex-row">
                <ShieldCheck className="h-4 w-4 text-emerald-500" />

                <span>
                  No spam, ever. Unsubscribe anytime. Your information is always
                  secure.
                </span>
              </div>
            </form>

            {/* ---------------------------------------------------------- */}
            {/* Statistics */}
            {/* ---------------------------------------------------------- */}

            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-border/60 pt-10">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-foreground">25K+</h3>

                <p className="text-sm text-muted-foreground">Subscribers</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-foreground">500+</h3>

                <p className="text-sm text-muted-foreground">Products</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-foreground">99%</h3>

                <p className="text-sm text-muted-foreground">Satisfaction</p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
