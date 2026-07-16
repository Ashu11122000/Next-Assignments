/**
 * =============================================================================
 * Portfolio
 * =============================================================================
 * File: src/components/layout/Footer.tsx
 * -----------------------------------------------------------------------------
 * Ultra Premium Footer
 * =============================================================================
 */

import Link from "next/link";

import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";

import {
  HiOutlineEnvelope,
} from "react-icons/hi2";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

import { navigation } from "@/data/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-white/10
        bg-slate-950
      "
    >
      {/* ============================================================= */}
      {/* Premium Background */}
      {/* ============================================================= */}

      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        {/* Base */}

        <div className="absolute inset-0 bg-slate-950" />

        {/* Top Glow */}

        <div
          className="
            absolute
            left-1/2
            top-[-260px]
            h-[760px]
            w-[760px]
            -translate-x-1/2
            rounded-full
            bg-cyan-500/10
            blur-[210px]
          "
        />

        {/* Left Glow */}

        <div
          className="
            absolute
            -left-52
            top-40
            h-[560px]
            w-[560px]
            rounded-full
            bg-sky-500/10
            blur-[170px]
          "
        />

        {/* Right Glow */}

        <div
          className="
            absolute
            -right-60
            bottom-20
            h-[620px]
            w-[620px]
            rounded-full
            bg-violet-600/10
            blur-[200px]
          "
        />

        {/* Bottom Glow */}

        <div
          className="
            absolute
            bottom-[-320px]
            left-1/2
            h-[820px]
            w-[820px]
            -translate-x-1/2
            rounded-full
            bg-blue-500/5
            blur-[230px]
          "
        />

        {/* Accent */}

        <div
          className="
            absolute
            left-24
            top-24
            h-44
            w-44
            rounded-full
            bg-cyan-400/10
            blur-[90px]
          "
        />

        <div
          className="
            absolute
            right-20
            bottom-24
            h-56
            w-56
            rounded-full
            bg-fuchsia-500/10
            blur-[100px]
          "
        />

        {/* Mesh */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_60%)]
          "
        />

        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.16]
            bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]
            bg-[size:64px_64px]
          "
        />

        {/* Fade */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-transparent
            via-transparent
            to-slate-950
          "
        />
      </div>

      {/* ============================================================= */}
      {/* Container */}
      {/* ============================================================= */}

      <Container
        size="2xl"
        padding="lg"
        className="
          relative
          py-24
          lg:py-32
        "
      >
        {/* ========================================================= */}
        {/* Glass Card */}
        {/* ========================================================= */}

        <div
          className="
            relative
            mx-auto
            w-full
            max-w-[1500px]
            overflow-hidden
            rounded-[42px]
            border
            border-white/10
            bg-white/[0.04]
            backdrop-blur-3xl
            shadow-[0_40px_120px_rgba(0,0,0,0.45)]
          "
        >
          {/* Card Gradient */}

          <div
            aria-hidden
            className="
              absolute
              inset-0
              bg-gradient-to-br
              from-white/[0.07]
              via-white/[0.03]
              to-white/[0.02]
            "
          />

          {/* Top Left Glow */}

          <div
            aria-hidden
            className="
              absolute
              -left-24
              -top-24
              h-72
              w-72
              rounded-full
              bg-cyan-500/10
              blur-[110px]
            "
          />

          {/* Bottom Right Glow */}

          <div
            aria-hidden
            className="
              absolute
              -bottom-28
              -right-28
              h-80
              w-80
              rounded-full
              bg-violet-500/10
              blur-[130px]
            "
          />

          {/* Mesh Overlay */}

          <div
            aria-hidden
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.08),transparent_35%)]
            "
          />

          {/* Border Highlight */}

          <div
            aria-hidden
            className="
              absolute
              inset-x-0
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-white/20
              to-transparent
            "
          />

          {/* ========================================================= */}
          {/* Content Wrapper */}
          {/* ========================================================= */}

          <div
            className="
              relative
              px-8
              py-14

              sm:px-12
              sm:py-16

              md:px-16
              md:py-18

              lg:px-20
              lg:py-20

              xl:px-24
              xl:py-24

              2xl:px-28
              2xl:py-28
            "
          >

                        {/* ========================================================= */}
            {/* Footer Grid */}
            {/* ========================================================= */}

            <div
              className="
                grid
                grid-cols-1
                gap-y-16

                lg:grid-cols-12
                lg:gap-x-14

                xl:gap-x-20
                2xl:gap-x-24
              "
            >
              {/* ===================================================== */}
              {/* Brand Section */}
              {/* ===================================================== */}

              <section
                className="
                  lg:col-span-5
                  flex
                  flex-col
                  justify-center
                "
              >
                {/* Logo */}

                <Link
                  href="/"
                  className="
                    inline-flex
                    items-center
                    gap-6
                    self-start
                  "
                >
                  <div
                    className="
                      relative
                      flex
                      h-20
                      w-20
                      shrink-0
                      items-center
                      justify-center
                      overflow-hidden
                      rounded-[28px]
                      bg-gradient-to-br
                      from-cyan-400
                      via-blue-500
                      to-violet-600
                      shadow-[0_24px_70px_rgba(34,211,238,0.35)]
                      transition-all
                      duration-500
                      hover:scale-105
                    "
                  >
                    <div className="absolute inset-0 bg-white/10" />

                    <span
                      className="
                        relative
                        text-3xl
                        font-extrabold
                        tracking-tight
                        text-white
                      "
                    >
                      AS
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h2
                      className="
                        text-4xl
                        font-bold
                        tracking-tight
                        text-white
                        xl:text-5xl
                      "
                    >
                      Ashish Sharma
                    </h2>

                    <p
                      className="
                        text-lg
                        font-medium
                        text-slate-400
                      "
                    >
                      Full Stack Developer
                    </p>
                  </div>
                </Link>

                {/* Description */}

                <p
                  className="
                    mt-10
                    max-w-[520px]
                    text-lg
                    leading-9
                    text-slate-400
                  "
                >
                  Passionate about building premium digital experiences
                  using modern web technologies. I enjoy transforming ideas
                  into scalable, accessible and high-performance
                  applications with clean architecture, elegant interfaces
                  and delightful user experiences.
                </p>

                {/* Technology Pills */}

                <div
                  className="
                    mt-10
                    flex
                    flex-wrap
                    gap-3
                    max-w-[560px]
                  "
                >
                  <span
                    className="
                      rounded-full
                      border
                      border-cyan-500/20
                      bg-cyan-500/10
                      px-5
                      py-2.5
                      text-sm
                      font-medium
                      text-cyan-300
                    "
                  >
                    Next.js
                  </span>

                  <span
                    className="
                      rounded-full
                      border
                      border-blue-500/20
                      bg-blue-500/10
                      px-5
                      py-2.5
                      text-sm
                      font-medium
                      text-blue-300
                    "
                  >
                    React
                  </span>

                  <span
                    className="
                      rounded-full
                      border
                      border-violet-500/20
                      bg-violet-500/10
                      px-5
                      py-2.5
                      text-sm
                      font-medium
                      text-violet-300
                    "
                  >
                    TypeScript
                  </span>

                  <span
                    className="
                      rounded-full
                      border
                      border-emerald-500/20
                      bg-emerald-500/10
                      px-5
                      py-2.5
                      text-sm
                      font-medium
                      text-emerald-300
                    "
                  >
                    Tailwind CSS
                  </span>

                  <span
                    className="
                      rounded-full
                      border
                      border-amber-500/20
                      bg-amber-500/10
                      px-5
                      py-2.5
                      text-sm
                      font-medium
                      text-amber-300
                    "
                  >
                    Framer Motion
                  </span>

                  <span
                    className="
                      rounded-full
                      border
                      border-pink-500/20
                      bg-pink-500/10
                      px-5
                      py-2.5
                      text-sm
                      font-medium
                      text-pink-300
                    "
                  >
                    UI / UX
                  </span>
                </div>
              </section>

              {/* ===================================================== */}
              {/* Middle Column */}
              {/* ===================================================== */}

              <section
                className="
                  lg:col-span-3
                  lg:px-4
                  xl:px-8
                "
              >

                                <h3
                  className="
                    text-2xl
                    font-semibold
                    tracking-tight
                    text-white
                  "
                >
                  Quick Links
                </h3>

                <p
                  className="
                    mt-4
                    text-base
                    leading-8
                    text-slate-400
                  "
                >
                  Explore the important sections of my portfolio.
                </p>

                <nav
                  aria-label="Footer Navigation"
                  className="mt-10"
                >
                  <ul className="space-y-5">

                    {navigation.map((item) => (

                      <li key={item.href}>

                        <Link
                          href={item.href}
                          className="
                            group
                            inline-flex
                            items-center
                            gap-3
                            text-base
                            font-medium
                            text-slate-400
                            transition-all
                            duration-300
                            hover:translate-x-2
                            hover:text-cyan-400
                          "
                        >
                          <span
                            className="
                              h-1.5
                              w-1.5
                              rounded-full
                              bg-cyan-400
                              opacity-60
                              transition-all
                              duration-300
                              group-hover:scale-150
                              group-hover:opacity-100
                            "
                          />

                          <span>{item.label}</span>

                          <span
                            className="
                              opacity-0
                              transition-all
                              duration-300
                              group-hover:translate-x-1
                              group-hover:opacity-100
                            "
                          >
                            →
                          </span>

                        </Link>

                      </li>

                    ))}

                  </ul>
                </nav>

                {/* Small Info Card */}

                <div
                  className="
                    mt-12
                    rounded-[24px]
                    border
                    border-white/10
                    bg-white/[0.04]
                    p-6
                    backdrop-blur-xl
                  "
                >

                  <p
                    className="
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.30em]
                      text-cyan-400
                    "
                  >
                    Current Focus
                  </p>

                  <h4
                    className="
                      mt-4
                      text-xl
                      font-semibold
                      text-white
                    "
                  >
                    Building scalable web products
                  </h4>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-7
                      text-slate-400
                    "
                  >
                    Focused on creating modern, responsive and
                    high-performance applications with exceptional
                    user experiences.
                  </p>

                </div>

              </section>

              {/* ===================================================== */}
              {/* Connect Section */}
              {/* ===================================================== */}

              <section
                className="
                  lg:col-span-4
                  flex
                  flex-col
                  justify-center
                  lg:pl-4
                  xl:pl-8
                "
              >

                                <h3
                  className="
                    text-2xl
                    font-semibold
                    tracking-tight
                    text-white
                  "
                >
                  Let&apos;s Connect
                </h3>

                <p
                  className="
                    mt-6
                    max-w-md
                    text-base
                    leading-8
                    text-slate-400
                  "
                >
                  Whether you have a project, internship opportunity,
                  freelance work or simply want to discuss technology,
                  I&apos;d love to connect and build something meaningful
                  together.
                </p>

                {/* ===================================================== */}
                {/* Social Buttons */}
                {/* ===================================================== */}

                <div
                  className="
                    mt-10
                    flex
                    flex-wrap
                    gap-5
                  "
                >

                  <Button
                    asChild
                    variant="ghost"
                    size="icon"
                    aria-label="GitHub"
                    className="
                      h-16
                      w-16
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.04]
                      backdrop-blur-xl
                      transition-all
                      duration-500
                      hover:-translate-y-2
                      hover:scale-105
                      hover:border-cyan-400/40
                      hover:bg-cyan-500/10
                      hover:shadow-[0_0_45px_rgba(34,211,238,0.30)]
                    "
                  >
                    <Link
                      href="https://github.com/Ashu11122000"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="h-6 w-6" />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="ghost"
                    size="icon"
                    aria-label="LinkedIn"
                    className="
                      h-16
                      w-16
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.04]
                      backdrop-blur-xl
                      transition-all
                      duration-500
                      hover:-translate-y-2
                      hover:scale-105
                      hover:border-cyan-400/40
                      hover:bg-cyan-500/10
                      hover:shadow-[0_0_45px_rgba(34,211,238,0.30)]
                    "
                  >
                    <Link
                      href="https://www.linkedin.com/in/ashish-sharma-383439191/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedinIn className="h-6 w-6" />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="ghost"
                    size="icon"
                    aria-label="Email"
                    className="
                      h-16
                      w-16
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.04]
                      backdrop-blur-xl
                      transition-all
                      duration-500
                      hover:-translate-y-2
                      hover:scale-105
                      hover:border-cyan-400/40
                      hover:bg-cyan-500/10
                      hover:shadow-[0_0_45px_rgba(34,211,238,0.30)]
                    "
                  >
                    <Link href="mailto:ashishsharma11122000@gmail.com">
                      <HiOutlineEnvelope className="h-6 w-6" />
                    </Link>
                  </Button>

                </div>

                {/* ===================================================== */}
                {/* Availability Card */}
                {/* ===================================================== */}

                <div
                  className="
                    mt-12
                    w-full
                    rounded-[30px]
                    border
                    border-white/10
                    bg-white/[0.05]
                    p-8
                    backdrop-blur-2xl
                  "
                >

                  <p
                    className="
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.35em]
                      text-cyan-400
                    "
                  >
                    Available For
                  </p>

                  <h4
                    className="
                      mt-5
                      text-2xl
                      font-semibold
                      leading-tight
                      text-white
                    "
                  >
                    Full-Time
                    <br />
                    Remote
                    <br />
                    Freelance
                  </h4>

                  <p
                    className="
                      mt-5
                      text-sm
                      leading-8
                      text-slate-400
                    "
                  >
                    Currently open to exciting opportunities where I can
                    contribute to scalable products, collaborate with
                    talented teams and continue growing as a Full Stack
                    Developer.
                  </p>

                  <div
                    className="
                      mt-8
                      flex
                      flex-wrap
                      gap-3
                    "
                  >

                    <span
                      className="
                        rounded-full
                        bg-emerald-500/10
                        border
                        border-emerald-500/20
                        px-4
                        py-2
                        text-xs
                        font-semibold
                        text-emerald-300
                      "
                    >
                      🟢 Open to Work
                    </span>

                    <span
                      className="
                        rounded-full
                        bg-cyan-500/10
                        border
                        border-cyan-500/20
                        px-4
                        py-2
                        text-xs
                        font-semibold
                        text-cyan-300
                      "
                    >
                      Immediate Joining
                    </span>

                  </div>

                </div>

              </section>

            </div>

                        {/* ============================================================= */}
            {/* Premium Divider */}
            {/* ============================================================= */}

            <div className="relative my-20 lg:my-24">

              <div
                className="
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-white/10
                  to-transparent
                "
              />

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-2
                  w-32
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-gradient-to-r
                  from-cyan-400
                  via-blue-500
                  to-violet-500
                  blur-sm
                "
              />

            </div>

            {/* ============================================================= */}
            {/* Bottom Footer */}
            {/* ============================================================= */}

            <div
              className="
                flex
                flex-col
                gap-10

                lg:flex-row
                lg:items-center
                lg:justify-between
              "
            >

              {/* ========================================================= */}
              {/* Copyright */}
              {/* ========================================================= */}

              <div
                className="
                  flex
                  flex-col
                  gap-3
                "
              >

                <p
                  className="
                    text-base
                    font-medium
                    text-slate-300
                  "
                >
                  © {currentYear} Ashish Sharma.
                  All Rights Reserved.
                </p>

                <p
                  className="
                    max-w-2xl
                    text-sm
                    leading-7
                    text-slate-500
                  "
                >
                  Designed &amp; Built with{" "}
                  <span className="text-rose-400">
                    ❤
                  </span>{" "}
                  using Next.js, React, TypeScript,
                  Tailwind CSS and modern web technologies.
                </p>

              </div>

              {/* ========================================================= */}
              {/* Status Badges */}
              {/* ========================================================= */}

              <div
                className="
                  flex
                  flex-wrap
                  items-center
                  gap-4

                  lg:justify-end
                "
              >

                <span
                  className="
                    rounded-full
                    border
                    border-emerald-500/20
                    bg-emerald-500/10
                    px-5
                    py-2.5
                    text-xs
                    font-semibold
                    tracking-wide
                    text-emerald-300
                  "
                >
                  🟢 Open to Work
                </span>

                <span
                  className="
                    rounded-full
                    border
                    border-cyan-500/20
                    bg-cyan-500/10
                    px-5
                    py-2.5
                    text-xs
                    font-semibold
                    tracking-wide
                    text-cyan-300
                  "
                >
                  Full Stack Developer
                </span>

                <span
                  className="
                    rounded-full
                    border
                    border-violet-500/20
                    bg-violet-500/10
                    px-5
                    py-2.5
                    text-xs
                    font-semibold
                    tracking-wide
                    text-violet-300
                  "
                >
                  Software Engineer
                </span>

              </div>

            </div>

                      </div>

        </div>

      </Container>

    </footer>
  );
}