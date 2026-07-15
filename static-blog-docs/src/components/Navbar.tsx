"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen } from "lucide-react";

/**
 * ============================================================================
 * Ultra Premium Navbar
 * ============================================================================
 *
 * Features
 * - Floating glassmorphism
 * - Active navigation highlighting
 * - Responsive layout
 * - Dark mode optimized
 * - Accessible semantic markup
 * ============================================================================
 */

const navigation = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Documentation",
    href: "/docs",
  },
  {
    label: "About",
    href: "/about",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 px-4 py-4">
      <nav
        aria-label="Main Navigation"
        className="mx-auto flex h-18 w-full max-w-7xl items-center justify-between rounded-2xl border border-zinc-200/70 bg-white/75 px-6 shadow-xl shadow-zinc-200/40 backdrop-blur-2xl transition-all dark:border-zinc-800/70 dark:bg-zinc-900/75 dark:shadow-black/30"
      >
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-cyan-500 to-violet-600 shadow-lg shadow-blue-500/30 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
            <BookOpen className="h-5 w-5 text-white" />
          </div>

          <div>
            <h1 className="text-lg font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
              Static Blog
            </h1>

            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Documentation Platform
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <ul className="flex items-center gap-2">
          {navigation.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/20"
                      : "text-zinc-600 hover:bg-zinc-100 hover:text-blue-600 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-blue-400"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}