"use client";

import { useCallback } from "react";

import { Search, X } from "lucide-react";

import Input from "@/components/common/Input";
import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/* Props                                                                       */
/* -------------------------------------------------------------------------- */

export interface SearchInputProps {
  value: string;

  onChange: (value: string) => void;

  placeholder?: string;

  loading?: boolean;

  disabled?: boolean;

  autoFocus?: boolean;

  className?: string;
}

/* -------------------------------------------------------------------------- */
/* Component                                                                   */
/* -------------------------------------------------------------------------- */

export default function SearchInput({
  value,
  onChange,
  placeholder = "Search products...",
  loading = false,
  disabled = false,
  autoFocus = false,
  className,
}: Readonly<SearchInputProps>) {
  const clearSearch = useCallback(() => {
    onChange("");
  }, [onChange]);

  return (
    <div className="relative w-full">
      <Input
        autoComplete="off"
        autoFocus={autoFocus}
        className={cn("pr-11", className)}
        disabled={disabled}
        leftIcon={
          <Search className="h-4 w-4 text-muted-foreground" />
        }
        placeholder={placeholder}
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            clearSearch();
          }
        }}
      />

      {value && !loading && (
        <button
          aria-label="Clear search"
          className={cn(
            "absolute right-3 top-1/2 -translate-y-1/2",
            "rounded-full p-1",
            "text-muted-foreground transition-colors",
            "hover:bg-muted hover:text-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          )}
          type="button"
          onClick={clearSearch}
        >
          <X className="h-4 w-4" />
        </button>
      )}

      {loading && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-muted-foreground/30 border-t-foreground" />
        </div>
      )}
    </div>
  );
}