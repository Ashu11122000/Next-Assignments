"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Loader2, MapPin, Search } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

/**
 * ============================================================================
 * Search Bar
 * ============================================================================
 *
 * Client Component
 *
 * Features:
 * - Search any city
 * - Enter key support
 * - Search button
 * - Loading state
 * - Responsive
 * - Accessible
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
      className="flex w-full flex-col gap-3 sm:flex-row"
    >
      <div className="relative flex-1">
        <MapPin className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />

        <Input
          value={city}
          onChange={(event) =>
            setCity(event.target.value)
          }
          placeholder="Search city..."
          className="h-12 rounded-xl pl-12"
          autoComplete="off"
          spellCheck={false}
        />
      </div>

      <Button
        type="submit"
        disabled={isPending}
        className="h-12 rounded-xl px-6"
      >
        {isPending ? (
          <>
            <Loader2 className="mr-2 size-4 animate-spin" />
            Searching...
          </>
        ) : (
          <>
            <Search className="mr-2 size-4" />
            Search
          </>
        )}
      </Button>
    </form>
  );
}