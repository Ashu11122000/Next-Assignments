"use client";

/* =============================================================================
   Portfolio Layout
   -----------------------------------------------------------------------------
   File: src/components/layout/Navbar.tsx

   Features
   -----------------------------------------------------------------------------
   ✓ Sticky glassmorphism navbar
   ✓ Active navigation highlighting
   ✓ Responsive layout
   ✓ GitHub & LinkedIn shortcuts
   ✓ Theme toggle
   ✓ Mobile menu trigger (ready for future drawer)
   ✓ Accessible navigation
   ✓ Next.js App Router compatible
============================================================================= */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineMenu } from "react-icons/hi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

import { navigation } from "@/data/navigation";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/Button";
import ThemeToggle from "@/components/common/ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();

  const handleMenuClick = () => {
    // Mobile navigation drawer will be implemented later.
    console.log("Open mobile menu");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main Navigation"
      >
        {/* Logo */}

        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label="Go to homepage"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-cyan-500 via-blue-500 to-violet-500 text-lg font-bold text-white shadow-lg shadow-cyan-500/20 transition-transform duration-300 group-hover:scale-105">
            AS
          </div>

          <div className="hidden flex-col leading-none sm:flex">
            <span className="text-base font-semibold text-white">
              Ashish Sharma
            </span>

            <span className="text-xs text-slate-400">
              Full Stack Developer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}

        <ul className="hidden items-center gap-2 lg:flex">
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
                    "relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300",
                    active
                      ? "bg-cyan-500/10 text-cyan-400"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  )}
                >
                  {item.label}

                  {active && (
                    <span className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-linear-to-r from-cyan-400 via-blue-500 to-violet-500" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right Actions */}

        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="ghost"
            size="icon"
            aria-label="GitHub Profile"
          >
            <Link
              href="https://github.com/Ashu11122000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={18} />
            </Link>
          </Button>

          <Button
            asChild
            variant="ghost"
            size="icon"
            aria-label="LinkedIn Profile"
          >
            <Link
              href="https://www.linkedin.com/in/ashish-sharma-383439191/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size={18} />
            </Link>
          </Button>

          <ThemeToggle />

          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label="Open navigation menu"
            onClick={handleMenuClick}
          >
            <HiOutlineMenu size={20} />
          </Button>
        </div>
      </nav>
    </header>
  );
}