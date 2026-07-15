"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import {
  Loader2,
  MapPin,
  Search,
} from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

/**
 * ============================================================================
 * Search Bar
 * ============================================================================
 *
 * Premium weather search component.
 *
 * Features
 * --------
 * ✓ Search any city
 * ✓ Enter key support
 * ✓ Loading state
 * ✓ Glassmorphism
 * ✓ Responsive
 * ============================================================================
 */

export default function SearchBar() {
  const router = useRouter();

  const [city, setCity] = useState("");
  const [isPending, startTransition] = useTransition();

  function handleSearch() {
    const value = city.trim();

    if (!value) return;

    startTransition(() => {
      router.push(`/weather/${encodeURIComponent(value)}`);
    });
  }

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    handleSearch();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-4 sm:flex-row sm:items-center"
    >
      {/* Search Input */}
      <div className="group relative flex-1">

        <MapPin className="pointer-events-none absolute left-5 top-1/2 z-10 size-5 -translate-y-1/2 text-sky-500 transition-colors duration-300 group-focus-within:text-primary" />

        <Input
          value={city}
          onChange={(event) =>
            setCity(event.target.value)
          }
          placeholder="Search for any city..."
          className="h-14 rounded-2xl pl-14 pr-5 text-base shadow-md transition-all duration-300"
          autoComplete="off"
          spellCheck={false}
        />

      </div>

      {/* Search Button */}
      <Button
        type="submit"
        size="lg"
        disabled={isPending}
        className="h-14 min-w-[170px] rounded-2xl px-8 shadow-lg"
      >
        {isPending ? (
          <>
            <Loader2 className="size-5 animate-spin" />
            Searching...
          </>
        ) : (
          <>
            <Search className="size-5" />
            Search
          </>
        )}
      </Button>
    </form>
  );
}