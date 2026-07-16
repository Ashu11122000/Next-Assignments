"use client";

/* =============================================================================
   Portfolio Layout
   -----------------------------------------------------------------------------
   File: src/components/layout/MobileMenu.tsx

   Premium mobile navigation drawer.

   Features
   -----------------------------------------------------------------------------
   ✓ Premium glassmorphism
   ✓ Slide-in animation
   ✓ Overlay backdrop
   ✓ Body scroll lock
   ✓ Escape key support
   ✓ Active navigation
   ✓ Theme toggle
   ✓ Social links
   ✓ Responsive
   ✓ Accessible
============================================================================= */

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineXMark } from "react-icons/hi2";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

import { navigation } from "@/data/navigation";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/Button";
import ThemeToggle from "@/components/common/ThemeToggle";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({
  isOpen,
  onClose,
}: MobileMenuProps) {
  const pathname = usePathname();

  React.useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}

          <motion.div
            className="fixed inset-0 z-40 bg-slate-950/80 backdrop-blur-md lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />

          {/* Drawer */}

          <motion.aside
            className="
              fixed
              right-0
              top-0
              z-50
              flex
              h-full
              w-[340px]
              max-w-[88vw]
              flex-col
              overflow-hidden
              border-l
              border-white/10
              bg-slate-950/95
              backdrop-blur-3xl
              shadow-[0_0_60px_rgba(59,130,246,0.15)]
              lg:hidden
            "
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 320,
              damping: 32,
            }}
          >
            {/* Decorative Background */}

            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
              <div className="absolute bottom-0 -left-16 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl" />
            </div>

            {/* Header */}

            <div className="relative z-10 flex items-center justify-between border-b border-white/10 px-6 py-6">
              <div>
                <h2 className="text-xl font-bold text-white">
                  Navigation
                </h2>

                <p className="mt-1 text-sm text-slate-400">
                  Explore my portfolio
                </p>
              </div>

              <Button
                variant="ghost"
                size="icon"
                aria-label="Close Menu"
                onClick={onClose}
                className="rounded-xl border border-white/10 bg-white/5 hover:border-primary/30 hover:bg-primary/10"
              >
                <HiOutlineXMark className="h-6 w-6" />
              </Button>
            </div>

            {/* Navigation */}

            <nav
              className="relative z-10 flex flex-1 flex-col px-5 py-6"
              aria-label="Mobile Navigation"
            >
              <ul className="space-y-2">
                {navigation.map((item) => {
                  const active =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={cn(
                          "group relative flex items-center rounded-2xl px-5 py-3.5 text-base font-medium transition-all duration-300",
                          active
                            ? "bg-gradient-to-r from-primary/20 to-violet-500/10 text-primary shadow-lg shadow-primary/10"
                            : "text-slate-300 hover:bg-white/5 hover:text-white hover:translate-x-1"
                        )}
                      >
                        {active && (
                          <span className="absolute left-0 top-1/2 h-7 w-1 -translate-y-1/2 rounded-r-full bg-gradient-to-b from-cyan-400 to-violet-500" />
                        )}

                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* Footer */}

              <div className="mt-auto rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
                {/* Theme */}

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-white">
                      Appearance
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      Light / Dark Mode
                    </p>
                  </div>

                  <ThemeToggle />
                </div>

                {/* Divider */}

                <div className="my-5 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Social */}

                <div className="flex items-center gap-3">
                  <Button
                    asChild
                    variant="ghost"
                    size="icon"
                    aria-label="GitHub"
                    className="rounded-xl border border-white/10 bg-white/5 hover:border-primary/30 hover:bg-primary/10"
                  >
                    <Link
                      href="https://github.com/Ashu11122000"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="h-5 w-5" />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="ghost"
                    size="icon"
                    aria-label="LinkedIn"
                    className="rounded-xl border border-white/10 bg-white/5 hover:border-primary/30 hover:bg-primary/10"
                  >
                    <Link
                      href="https://www.linkedin.com/in/ashish-sharma-383439191/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedinIn className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}