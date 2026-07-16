/* =============================================================================
   Portfolio Layout
   -----------------------------------------------------------------------------
   File: src/components/layout/Footer.tsx

   Premium reusable footer.

   Features
   -----------------------------------------------------------------------------
   ✓ Responsive
   ✓ Glassmorphism styling
   ✓ Quick navigation
   ✓ Social links
   ✓ Copyright
   ✓ Built with section
   ✓ Accessible
============================================================================= */

import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { HiOutlineEnvelope } from "react-icons/hi2";

import { navigation } from "@/data/navigation";

import { Button } from "@/components/ui/Button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* ---------------------------------------------------------------- */}
          {/* Brand */}
          {/* ---------------------------------------------------------------- */}

          <div className="space-y-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-cyan-500 via-blue-500 to-violet-500 text-lg font-bold text-white shadow-lg shadow-cyan-500/20">
                AS
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  Ashish Sharma
                </h3>

                <p className="text-sm text-slate-400">
                  Full Stack Developer
                </p>
              </div>
            </Link>

            <p className="max-w-xs text-sm leading-7 text-slate-400">
              Building scalable, high-performance web applications with
              modern technologies and clean architecture.
            </p>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* Quick Links */}
          {/* ---------------------------------------------------------------- */}

          <div>
            <h4 className="mb-5 text-lg font-semibold text-white">
              Quick Links
            </h4>

            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 transition-colors duration-300 hover:text-cyan-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* Connect */}
          {/* ---------------------------------------------------------------- */}

          <div>
            <h4 className="mb-5 text-lg font-semibold text-white">
              Connect
            </h4>

            <div className="flex flex-wrap gap-3">
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

              <Button
                asChild
                variant="ghost"
                size="icon"
                aria-label="Email"
              >
                <Link href="mailto:ashishsharma11122000@gmail.com">
                  <HiOutlineEnvelope className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* Built With */}
          {/* ---------------------------------------------------------------- */}

          <div>
            <h4 className="mb-5 text-lg font-semibold text-white">
              Built With
            </h4>

            <ul className="space-y-3 text-sm text-slate-400">
              <li>Next.js 16</li>
              <li>React 19</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Framer Motion</li>
            </ul>
          </div>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* Bottom */}
        {/* ---------------------------------------------------------------- */}

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center md:flex-row md:text-left">
          <p className="text-sm text-slate-500">
            © {currentYear} Ashish Sharma. All rights reserved.
          </p>

          <p className="text-sm text-slate-500">
            Designed & Built with ❤️ using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}