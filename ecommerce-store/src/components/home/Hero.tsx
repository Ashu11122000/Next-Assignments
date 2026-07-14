"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { ArrowRight, Play, ShieldCheck, Star } from "lucide-react";

import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/* Statistics                                                                  */
/* -------------------------------------------------------------------------- */

const statistics = [
  {
    id: 1,
    value: "50K+",
    label: "Happy Customers",
  },
  {
    id: 2,
    value: "15K+",
    label: "Premium Products",
  },
  {
    id: 3,
    value: "4.9★",
    label: "Average Rating",
  },
];

/* -------------------------------------------------------------------------- */
/* Hero                                                                        */
/* -------------------------------------------------------------------------- */

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* ---------------------------------------------------------------- */}
          {/* Left Content                                                     */}
          {/* ---------------------------------------------------------------- */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="relative z-10"
          >
            {/* -------------------------------------------------------------- */}
            {/* Badge                                                         */}
            {/* -------------------------------------------------------------- */}

            <Badge
              variant="info"
              className="mb-6 px-4 py-2"
            >
              <ShieldCheck className="mr-2 h-4 w-4" />

              Trusted by 50,000+ Customers
            </Badge>

            {/* -------------------------------------------------------------- */}
            {/* Heading                                                       */}
            {/* -------------------------------------------------------------- */}

            <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-foreground sm:text-6xl xl:text-7xl">
              Discover the

              <span className="block bg-linear-to-r from-blue-600 via-violet-600 to-pink-600 bg-clip-text text-transparent">
                Future of Shopping
              </span>
            </h1>

            {/* -------------------------------------------------------------- */}
            {/* Description                                                   */}
            {/* -------------------------------------------------------------- */}

            <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
              Shop premium electronics, accessories, fashion,
              and lifestyle products from the world&apos;s most
              trusted brands with unbeatable prices and
              lightning-fast delivery.
            </p>

            {/* -------------------------------------------------------------- */}
            {/* CTA Buttons                                                   */}
            {/* -------------------------------------------------------------- */}

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
              >
                <Link href="/products">
                  Shop Now

                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
              >
                <Link href="/categories">
                  <Play className="mr-2 h-5 w-5 fill-current" />

                  Explore Categories
                </Link>
              </Button>
            </div>

            {/* -------------------------------------------------------------- */}
            {/* Trust Statistics                                              */}
            {/* -------------------------------------------------------------- */}

            <div className="mt-14 flex flex-wrap gap-10">
              {statistics.map((item) => (
                <div key={item.id}>
                  <h3 className="text-3xl font-bold text-foreground">
                    {item.value}
                  </h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ---------------------------------------------------------------- */}
          {/* Right Showcase                                                   */}
          {/* ---------------------------------------------------------------- */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="relative"
          >
                        {/* -------------------------------------------------------------- */}
            {/* Background Decorations                                        */}
            {/* -------------------------------------------------------------- */}

            <div className="absolute inset-0 -z-20">
              <div className="absolute left-12 top-10 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />

              <div className="absolute bottom-6 right-0 h-72 w-72 rounded-full bg-violet-500/15 blur-3xl" />
            </div>

            {/* -------------------------------------------------------------- */}
            {/* Floating Rating Card                                          */}
            {/* -------------------------------------------------------------- */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute -left-8 top-12 z-20 rounded-2xl border border-border bg-background/80 p-5 shadow-xl backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-yellow-500/10 p-2">
                  <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                </div>

                <div>
                  <h4 className="font-semibold text-foreground">
                    4.9 Rating
                  </h4>

                  <p className="text-sm text-muted-foreground">
                    From 12,000+ Reviews
                  </p>
                </div>
              </div>
            </motion.div>

            {/* -------------------------------------------------------------- */}
            {/* Discount Card                                                 */}
            {/* -------------------------------------------------------------- */}

            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute -right-6 top-28 z-20 rounded-2xl bg-gradient-to-r from-pink-600 to-violet-600 px-6 py-5 text-white shadow-2xl"
            >
              <p className="text-sm font-medium uppercase tracking-wider">
                Limited Offer
              </p>

              <h3 className="mt-2 text-3xl font-bold">
                30% OFF
              </h3>
            </motion.div>

            {/* -------------------------------------------------------------- */}
            {/* Featured Product Card                                         */}
            {/* -------------------------------------------------------------- */}

            <motion.div
              whileHover={{
                scale: 1.03,
                rotate: -1,
              }}
              transition={{
                duration: 0.3,
              }}
              className="relative overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-background to-muted/30 shadow-2xl"
            >
              <div className="relative aspect-square">
                <Image
                  src="/images/banner/hero-product.webp"
                  alt="Featured Product"
                  fill
                  priority
                  className="object-contain p-10"
                />
              </div>

              {/* ------------------------------------------------------------ */}
              {/* Product Info                                                 */}
              {/* ------------------------------------------------------------ */}

              <div className="border-t border-border bg-background/90 p-6 backdrop-blur-md">
                <div className="flex items-center justify-between gap-6">
                  <div>
                    <Badge
                      variant="success"
                      className="mb-3"
                    >
                      Best Seller
                    </Badge>

                    <h3 className="text-2xl font-bold text-foreground">
                      Apple iPhone 16 Pro
                    </h3>

                    <p className="mt-2 text-sm text-muted-foreground">
                      A18 Pro • Titanium • 256GB
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-sm text-muted-foreground line-through">
                      ₹149,900
                    </p>

                    <h3 className="text-3xl font-bold text-primary">
                      ₹139,900
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* -------------------------------------------------------------- */}
            {/* Floating Shipping Card                                        */}
            {/* -------------------------------------------------------------- */}

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
              }}
              className="absolute -bottom-6 left-10 rounded-2xl border border-border bg-background/90 p-5 shadow-xl backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-green-500/10 p-2">
                  <ShieldCheck className="h-5 w-5 text-green-600" />
                </div>

                <div>
                  <h4 className="font-semibold text-foreground">
                    Free Shipping
                  </h4>

                  <p className="text-sm text-muted-foreground">
                    On orders above ₹999
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

                  </div>
      </Container>

      {/* -------------------------------------------------------------------- */}
      {/* Background Decorations                                                */}
      {/* -------------------------------------------------------------------- */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Top Left Gradient */}

        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"
        />

        {/* Top Right Gradient */}

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl"
        />

        {/* Bottom Gradient */}

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-3xl"
        />

        {/* Decorative Grid */}

        <div
          className={cn(
            "absolute inset-0",
            "[background-image:linear-gradient(to_right,hsl(var(--border)/0.2)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.2)_1px,transparent_1px)]",
            "[background-size:64px_64px]",
            "[mask-image:radial-gradient(circle_at_center,black,transparent_85%)]",
            "opacity-40",
          )}
        />
      </div>
    </section>
  );
}