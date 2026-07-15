"use client";

import { useEffect, useState } from "react";

import { Search, X } from "lucide-react";
import {
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

import Input from "@/components/common/Input";
import { useDebounce } from "@/hooks/useDebounce";
import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/* Search Bar Props                                                           */
/* -------------------------------------------------------------------------- */

interface SearchBarProps {
  placeholder?: string;
  className?: string;
}

/* -------------------------------------------------------------------------- */
/* Search Bar                                                                 */
/* -------------------------------------------------------------------------- */

export default function SearchBar({
  placeholder = "Search products...",
  className,
}: SearchBarProps) {
  /* ------------------------------------------------------------------------ */
  /* Router Hooks                                                             */
  /* ------------------------------------------------------------------------ */

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  /* ------------------------------------------------------------------------ */
  /* Local State                                                              */
  /* ------------------------------------------------------------------------ */

  const [query, setQuery] = useState(
    searchParams.get("q") ?? "",
  );

  /* ------------------------------------------------------------------------ */
  /* Debounced Query                                                          */
  /* ------------------------------------------------------------------------ */

  const debouncedQuery = useDebounce(query, 300);

    /* ------------------------------------------------------------------------ */
  /* Sync Search Query with URL                                               */
  /* ------------------------------------------------------------------------ */

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (debouncedQuery.trim()) {
      params.set("q", debouncedQuery.trim());
    } else {
      params.delete("q");
    }

    const queryString = params.toString();

    router.replace(
      queryString ? `${pathname}?${queryString}` : pathname,
      {
        scroll: false,
      },
    );
  }, [
    debouncedQuery,
    pathname,
    router,
    searchParams,
  ]);

  /* ------------------------------------------------------------------------ */
  /* Keyboard Shortcut                                                        */
  /* ------------------------------------------------------------------------ */

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setQuery("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  
    /* ------------------------------------------------------------------------ */
  /* Search Bar                                                               */
  /* ------------------------------------------------------------------------ */

  return (
    <div className={cn("relative w-full max-w-2xl", className)}>
      {/* -------------------------------------------------------------------- */}
      {/* Search Icon                                                          */}
      {/* -------------------------------------------------------------------- */}

      <Search
        className={cn(
          "pointer-events-none absolute left-4 top-1/2 h-5 w-5",
          "-translate-y-1/2 text-muted-foreground",
        )}
        aria-hidden="true"
      />

      {/* -------------------------------------------------------------------- */}
      {/* Search Input                                                         */}
      {/* -------------------------------------------------------------------- */}

      <Input
        type="search"
        role="searchbox"
        value={query}
        placeholder={placeholder}
        autoComplete="off"
        spellCheck={false}
        onChange={(event) => setQuery(event.target.value)}
        className="h-12 rounded-2xl border-border pl-12 pr-12"
        aria-label="Search products"
      />

      {/* -------------------------------------------------------------------- */}
      {/* Clear Button                                                         */}
      {/* -------------------------------------------------------------------- */}

      {query.length > 0 && (
        <button
          type="button"
          onClick={() => setQuery("")}
          className={cn(
            "absolute right-3 top-1/2",
            "-translate-y-1/2",
            "rounded-lg p-1.5",
            "text-muted-foreground",
            "transition-colors duration-200",
            "hover:bg-muted hover:text-foreground",
            "focus-visible:outline-none",
            "focus-visible:ring-2",
            "focus-visible:ring-primary",
            "focus-visible:ring-offset-2",
          )}
          aria-label="Clear search"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}