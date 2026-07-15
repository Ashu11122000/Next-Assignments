import Link from "next/link";

/**
 * ============================================================================
 * Footer Component
 * ============================================================================
 *
 * Shared footer displayed across the application.
 *
 * Features:
 * - Responsive layout
 * - Quick navigation links
 * - Assignment information
 * - Copyright section
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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between">
        {/* Project Information */}
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-gray-900">
            Static Blog & Documentation
          </h2>

          <p className="max-w-md text-sm leading-6 text-gray-600">
            A simple assignment project built with Next.js, TypeScript,
            Tailwind CSS, and Markdown using Static Site Generation (SSG) and
            the App Router.
          </p>
        </div>

        {/* Navigation */}
        <nav aria-label="Footer Navigation">
          <ul className="flex flex-wrap items-center gap-5">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-sm text-gray-500 md:flex-row">
          <p>
            © {currentYear} Static Blog & Documentation Site. All rights
            reserved.
          </p>

          <p>Built with Next.js App Router and Markdown.</p>
        </div>
      </div>
    </footer>
  );
}