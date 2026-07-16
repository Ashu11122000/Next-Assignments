"use client";

/* =============================================================================
   Portfolio Layout
   =============================================================================
   File: src/components/layout/Navbar.tsx

   Ultra Premium Floating Navbar

   Features
   -----------------------------------------------------------------------------
   ✓ Business logic unchanged
   ✓ Responsive
   ✓ Premium glassmorphism
   ✓ 3-column layout
   ✓ Better spacing
   ✓ Floating glow
   ✓ Active navigation
   ✓ Mobile drawer
============================================================================= */

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineMenu } from "react-icons/hi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

import { navigation } from "@/data/navigation";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/Button";
import ThemeToggle from "@/components/common/ThemeToggle";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full px-0 pt-0">
        <nav
          aria-label="Main Navigation"
          className="
            relative
            mx-auto
            w-full
            max-w-[1700px]
            overflow-hidden
            rounded-[30px]
            border
            border-white/10
            bg-slate-950/70
            shadow-[0_20px_70px_rgba(0,0,0,0.35)]
            ring-1
            ring-white/5
            backdrop-blur-3xl
          "
        >
          {/* ========================================================= */}
          {/* Background Glow */}
          {/* ========================================================= */}

          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 overflow-hidden rounded-[30px]"
          >
            <div className="absolute -left-20 top-0 h-52 w-52 rounded-full bg-cyan-500/10 blur-[90px]" />

            <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-violet-500/10 blur-[90px]" />

            <div className="absolute bottom-0 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[80px]" />
          </div>

          {/* ========================================================= */}
          {/* Main Grid */}
          {/* ========================================================= */}

<div
  className="
    relative
    z-10
    flex
    h-[92px]
    items-center
    justify-between
    px-8
    lg:px-12
    xl:px-16
  "
>
            {/* ===================================================== */}
            {/* Logo */}
            {/* ===================================================== */}

            <Link
              href="/"
              aria-label="Go to homepage"
             className="
flex
w-[320px]
items-center
gap-4
shrink-0
"
            >
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  from-cyan-400
                  via-blue-500
                  to-violet-600
                  text-xl
                  font-bold
                  tracking-wide
                  text-white
                  shadow-xl
                  shadow-cyan-500/30
                  transition-all
                  duration-300
                  hover:rotate-3
                  hover:scale-105
                "
              >
                AS
              </div>

              <div className="hidden sm:block">
                <h1 className="text-[1.65rem] font-bold tracking-tight text-white leading-none">
                  Ashish Sharma
                </h1>

                <p className="mt-2 text-[15px] text-slate-400">
                  Full Stack Developer
                </p>
              </div>
            </Link>

                        {/* ===================================================== */}
            {/* Desktop Navigation */}
            {/* ===================================================== */}

<div className="hidden flex-1 px-10 lg:flex">
  <ul
    className="
      flex
      w-full
      items-center
      justify-evenly
      rounded-full
      border
      border-white/10
      bg-white/[0.04]
      px-4
      py-2
      backdrop-blur-2xl
    "
  >
                {navigation.map((item) => {
                  const active =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          `
                            group
                            relative
                            flex
                            items-center
                            justify-center
                            overflow-hidden
                            rounded-full
                            px-6
                            py-3
                            text-[15px]
                            font-semibold
                            tracking-wide
                            transition-all
                            duration-300
                          `,
                          active
                            ? `
                              bg-gradient-to-r
                              from-cyan-500/20
                              via-blue-500/20
                              to-violet-500/20
                              text-white
                              shadow-lg
                              shadow-cyan-500/15
                              ring-1
                              ring-cyan-400/20
                            `
                            : `
                              text-slate-300
                              hover:-translate-y-0.5
                              hover:bg-white/6
                              hover:text-white
                            `
                        )}
                      >
                        {/* Hover Glow */}
                        <span
                          className="
                            absolute
                            inset-0
                            opacity-0
                            transition-opacity
                            duration-300
                            group-hover:opacity-100
                          "
                        >
                          <span
                            className="
                              absolute
                              inset-x-4
                              top-0
                              h-full
                              rounded-full
                              bg-gradient-to-r
                              from-cyan-500/10
                              via-blue-500/10
                              to-violet-500/10
                            "
                          />
                        </span>

                        <span className="relative z-10 whitespace-nowrap">
                          {item.label}
                        </span>

                        {active && (
                          <>
                            <span
                              className="
                                absolute
                                inset-x-5
                                bottom-0
                                h-[2px]
                                rounded-full
                                bg-gradient-to-r
                                from-cyan-400
                                via-blue-500
                                to-violet-500
                              "
                            />

                            <span
                              className="
                                absolute
                                inset-0
                                rounded-full
                                bg-gradient-to-r
                                from-cyan-500/5
                                via-transparent
                                to-violet-500/5
                              "
                            />
                          </>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

                        {/* ===================================================== */}
            {/* Right Actions */}
            {/* ===================================================== */}

<div
  className="
    flex
    w-[320px]
    shrink-0
    items-center
    justify-end
    gap-3
  "
>
              {/* GitHub */}

              <Button
                asChild
                variant="ghost"
                size="icon"
                className="
                  h-12
                  w-12
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  text-slate-300
                  shadow-lg
                  shadow-black/10
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-cyan-400/40
                  hover:bg-cyan-500/10
                  hover:text-cyan-300
                  hover:shadow-cyan-500/20
                "
              >
                <Link
                  href="https://github.com/Ashu11122000"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <FaGithub size={19} />
                </Link>
              </Button>

              {/* LinkedIn */}

              <Button
                asChild
                variant="ghost"
                size="icon"
                className="
                  h-12
                  w-12
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  text-slate-300
                  shadow-lg
                  shadow-black/10
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-cyan-400/40
                  hover:bg-cyan-500/10
                  hover:text-cyan-300
                  hover:shadow-cyan-500/20
                "
              >
                <Link
                  href="https://www.linkedin.com/in/ashish-sharma-383439191/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedinIn size={18} />
                </Link>
              </Button>

              {/* Theme Toggle */}

              <div className="flex items-center justify-center">
                <ThemeToggle />
              </div>

              {/* Mobile Menu */}

              <Button
                type="button"
                variant="ghost"
                size="icon"
                aria-label="Open navigation menu"
                onClick={() => setMenuOpen(true)}
                className="
                  h-12
                  w-12
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  text-slate-300
                  transition-all
                  duration-300
                  hover:border-cyan-400/40
                  hover:bg-cyan-500/10
                  hover:text-cyan-300
                  lg:hidden
                "
              >
                <HiOutlineMenu size={23} />
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* ========================================================= */}
      {/* Mobile Navigation */}
      {/* ========================================================= */}

      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}