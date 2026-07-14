import { Star } from "lucide-react";

import { cn } from "@/lib/utils";
import type { ProductRatingProps } from "@/types/product";

/* -------------------------------------------------------------------------- */
/* Product Rating                                                             */
/* -------------------------------------------------------------------------- */

export default function ProductRating({
  rating,
}: ProductRatingProps) {
  const maxStars = 5;

  const filledStars = Math.round(rating.rate);

  return (
    <div className="flex items-center gap-2">
      {/* ------------------------------------------------------------------ */}
      {/* Stars */}
      {/* ------------------------------------------------------------------ */}

      <div
        className="flex items-center"
        aria-hidden="true"
      >
        {Array.from({ length: maxStars }).map((_, index) => (
          <Star
            key={index}
            className={cn(
              "h-4 w-4 transition-colors",
              index < filledStars
                ? "fill-yellow-400 text-yellow-400"
                : "fill-transparent text-muted-foreground/40",
            )}
          />
        ))}
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Rating Value */}
      {/* ------------------------------------------------------------------ */}

      <span className="text-sm font-semibold text-foreground">
        {rating.rate.toFixed(1)}
      </span>

            {/* ------------------------------------------------------------------ */}
      {/* Review Count */}
      {/* ------------------------------------------------------------------ */}

      <span className="text-sm text-muted-foreground">
        ({rating.count.toLocaleString()}{" "}
        {rating.count === 1 ? "review" : "reviews"})
      </span>

      {/* ------------------------------------------------------------------ */}
      {/* Screen Reader */}
      {/* ------------------------------------------------------------------ */}

      <span className="sr-only">
        Rated {rating.rate.toFixed(1)} out of {maxStars} stars based on{" "}
        {rating.count.toLocaleString()}{" "}
        {rating.count === 1 ? "review" : "reviews"}.
      </span>
    </div>
  );
}