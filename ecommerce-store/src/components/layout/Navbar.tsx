"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Menu, Search, X } from "lucide-react";

import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import SearchInput from "@/components/common/SearchInput";
import Logo from "@/components/layout/Logo";
import { navigation } from "@/data/navigation";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/* Navbar                                                                     */
/* -------------------------------------------------------------------------- */

export default function Navbar() {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");

  /* ------------------------------------------------------------------------ */
  /* Scroll Effect                                                            */
  /* ------------------------------------------------------------------------ */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ------------------------------------------------------------------------ */
  /* Render                                                                   */
  /* ------------------------------------------------------------------------ */

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "border-b border-border/60 bg-background/80 shadow-lg backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <Container>
        <div className="flex h-20 items-center justify-between gap-6">
          {/* ----------------------------------------------------------------- */}
          {/* Logo                                                              */}
          {/* ----------------------------------------------------------------- */}

          <Logo />

          {/* ----------------------------------------------------------------- */}
          {/* Desktop Navigation                                                */}
          {/* ----------------------------------------------------------------- */}

          <nav className="hidden items-center gap-2 lg:flex">
            {navigation.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== ROUTES.home && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200",
                    "hover:bg-muted hover:text-foreground",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* ----------------------------------------------------------------- */}
          {/* Right Section                                                     */}
          {/* ----------------------------------------------------------------- */}

          <div className="flex items-center gap-3">
            {/* -------------------------------------------------------------- */}
            {/* Desktop Search                                                 */}
            {/* -------------------------------------------------------------- */}

            <div className="hidden w-72 xl:block">
              <SearchInput
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search products..."
              />
            </div>

            {/* -------------------------------------------------------------- */}
            {/* Desktop Actions                                                */}
            {/* -------------------------------------------------------------- */}

            <div className="hidden items-center gap-3 lg:flex">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Search"
                className="xl:hidden"
              >
                <Search className="h-5 w-5" />
              </Button>

              <Button asChild variant="primary">
                <Link href={ROUTES.products}>Explore Products</Link>
              </Button>
            </div>

            {/* -------------------------------------------------------------- */}
            {/* Mobile Menu Toggle                                             */}
            {/* -------------------------------------------------------------- */}

            <Button
              variant="ghost"
              size="icon"
              aria-label={
                mobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen((previous) => !previous)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Mobile Navigation                                                   */}
        {/* ------------------------------------------------------------------ */}

        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            className={cn(
              "border-t border-border/60 lg:hidden",
              "animate-in fade-in-0 slide-in-from-top-2 duration-300",
            )}
          >
            <div className="space-y-6 py-6">
              {/* ------------------------------------------------------------ */}
              {/* Mobile Search                                                */}
              {/* ------------------------------------------------------------ */}

              <SearchInput
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search products..."
              />

              {/* ------------------------------------------------------------ */}
              {/* Navigation Links                                             */}
              {/* ------------------------------------------------------------ */}

              <nav
                className="flex flex-col gap-2"
                aria-label="Mobile Navigation"
              >
                {navigation.map((item) => {
                  const isActive =
                    pathname === item.href ||
                    (item.href !== ROUTES.home &&
                      pathname.startsWith(item.href));

                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200",
                        "hover:bg-muted",
                        isActive
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "text-muted-foreground",
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              {/* ------------------------------------------------------------ */}
              {/* Mobile Action                                                */}
              {/* ------------------------------------------------------------ */}

              <Button asChild className="w-full">
                <Link
                  href={ROUTES.products}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Explore Products
                </Link>
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
