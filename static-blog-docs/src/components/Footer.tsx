import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

/**
 * ============================================================================
 * Premium Footer
 * ============================================================================
 */

const navigation = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Documentation", href: "/docs" },
  { label: "About", href: "/about" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-28 overflow-hidden border-t border-zinc-200/70 bg-gradient-to-b from-white via-slate-50 to-white dark:border-zinc-800 dark:from-zinc-950 dark:via-zinc-900 dark:to-black">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-[1.5fr_0.8fr]">
          {/* Left */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-white/70 px-5 py-2 shadow-lg backdrop-blur-xl dark:border-blue-500/20 dark:bg-zinc-900/70">
              <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />

              <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                Premium Static Experience
              </span>
            </div>

            <h2 className="text-4xl font-black tracking-tight text-zinc-900 dark:text-white">
              Static Blog{" "}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 bg-clip-text text-transparent">
                Documentation
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              A beautifully crafted documentation platform built using{" "}
              <span className="font-semibold text-zinc-900 dark:text-white">
                Next.js
              </span>
              ,{" "}
              <span className="font-semibold text-zinc-900 dark:text-white">
                TypeScript
              </span>
              ,{" "}
              <span className="font-semibold text-zinc-900 dark:text-white">
                Tailwind CSS
              </span>{" "}
              and Markdown, optimized for performance, accessibility, SEO and
              an exceptional reading experience.
            </p>
          </div>

          {/* Right */}
          <div className="rounded-3xl border border-white/40 bg-white/70 p-8 shadow-2xl backdrop-blur-2xl dark:border-zinc-800 dark:bg-zinc-900/70">
            <div className="mb-6 flex items-center gap-3">
              <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />

              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                Explore
              </h3>
            </div>

            <nav aria-label="Footer Navigation">
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group flex items-center justify-between rounded-2xl px-4 py-3 font-medium text-zinc-600 transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-blue-400"
                    >
                      {item.label}

                      <ArrowUpRight className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="relative border-t border-zinc-200/70 bg-white/60 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-950/70">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-7 lg:flex-row">
          <p className="text-center text-sm leading-7 text-zinc-600 dark:text-zinc-400 lg:text-left">
            © {currentYear}{" "}
            <span className="font-semibold text-zinc-900 dark:text-white">
              Static Blog & Documentation
            </span>
            . Built with modern web technologies.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {["Next.js", "TypeScript", "Tailwind CSS", "Markdown"].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-700 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
              >
                {tech}
              </span>
            ))}

            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
              <ShieldCheck className="h-4 w-4" />
              Production Ready
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}