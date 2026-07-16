"use client";

/* =============================================================================
   Portfolio Layout
   -----------------------------------------------------------------------------
   File: src/components/layout/MobileMenu.tsx

   Premium mobile navigation drawer.

   Features
   -----------------------------------------------------------------------------
   ✓ Slide-in animation
   ✓ Overlay backdrop
   ✓ Body scroll lock
   ✓ Escape key support
   ✓ Active navigation
   ✓ Theme toggle
   ✓ Social links
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
          <motion.div
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.aside
            className="fixed right-0 top-0 z-50 flex h-full w-80 max-w-[85vw] flex-col border-l border-white/10 bg-slate-950/95 backdrop-blur-xl lg:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 30,
            }}
          >
            <div className="flex items-center justify-between border-b border-white/10 p-6">
              <h2 className="text-lg font-semibold text-white">
                Navigation
              </h2>

              <Button
                variant="ghost"
                size="icon"
                aria-label="Close Menu"
                onClick={onClose}
              >
                <HiOutlineXMark className="h-6 w-6" />
              </Button>
            </div>

            <nav
              className="flex flex-1 flex-col p-6"
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
                          "block rounded-xl px-4 py-3 text-base font-medium transition-all duration-300",
                          active
                            ? "bg-cyan-500/10 text-cyan-400"
                            : "text-slate-300 hover:bg-white/5 hover:text-white"
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-auto space-y-6 border-t border-white/10 pt-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">
                    Theme
                  </span>

                  <ThemeToggle />
                </div>

                <div className="flex items-center gap-3">
                  <Button
                    asChild
                    variant="ghost"
                    size="icon"
                    aria-label="GitHub"
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