"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import Button from "@/components/common/Button";
import SearchInput from "@/components/common/SearchInput";
import { ROUTES } from "@/constants/routes";
import { navigation } from "@/data/navigation";
import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/* Props                                                                      */
/* -------------------------------------------------------------------------- */

export interface MobileMenuProps {
  open: boolean;

  searchQuery: string;

  onSearchChange: (value: string) => void;

  onClose: () => void;
}

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function MobileMenu({
  open,
  searchQuery,
  onSearchChange,
  onClose,
}: Readonly<MobileMenuProps>) {
  const pathname = usePathname();

  if (!open) {
    return null;
  }

  return (
    <div
      id="mobile-navigation"
      className={cn(
        "border-t border-border/60",
        "animate-in fade-in-0 slide-in-from-top-2 duration-300",
        "lg:hidden",
      )}
    >
      <div className="space-y-6 py-6">
        {/* ------------------------------------------------------------------ */}
        {/* Search                                                             */}
        {/* ------------------------------------------------------------------ */}

        <SearchInput
          value={searchQuery}
          onChange={onSearchChange}
          placeholder="Search products..."
        />

        {/* ------------------------------------------------------------------ */}
        {/* Navigation                                                         */}
        {/* ------------------------------------------------------------------ */}

        <nav
          aria-label="Mobile Navigation"
          className="flex flex-col gap-2"
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
                onClick={onClose}
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

        {/* ------------------------------------------------------------------ */}
        {/* CTA                                                                */}
        {/* ------------------------------------------------------------------ */}

        <Button
          asChild
          className="w-full"
        >
          <Link
            href={ROUTES.products}
            onClick={onClose}
          >
            Explore Products
          </Link>
        </Button>
      </div>
    </div>
  );
}