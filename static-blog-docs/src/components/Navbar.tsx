import Link from "next/link";

/**
 * ============================================================================
 * Navbar Component
 * ============================================================================
 *
 * Main navigation displayed across the application.
 *
 * Features:
 * - Responsive navigation
 * - Active page links (handled by Next.js routing in future if needed)
 * - Accessible semantic markup
 * - Sticky header
 * - Shared across all pages
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
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <nav
        className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6"
        aria-label="Main Navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-gray-900 transition-colors hover:text-blue-600"
        >
          Static Blog
        </Link>

        {/* Navigation Links */}
        <ul className="flex items-center gap-6">
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
    </header>
  );
}