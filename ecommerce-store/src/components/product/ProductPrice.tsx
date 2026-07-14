import { cn } from "@/lib/utils";
import type { ProductPriceProps } from "@/types/product";

/* -------------------------------------------------------------------------- */
/* Product Price                                                              */
/* -------------------------------------------------------------------------- */

export default function ProductPrice({
  price,
  originalPrice,
  discountPercentage,
}: ProductPriceProps) {
  const discount =
    discountPercentage ??
    (originalPrice && originalPrice > price
      ? Math.round(((originalPrice - price) / originalPrice) * 100)
      : 0);

  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* ------------------------------------------------------------------ */}
      {/* Current Price */}
      {/* ------------------------------------------------------------------ */}

      <span className="text-2xl font-bold tracking-tight text-foreground">
        ₹{price.toLocaleString("en-IN")}
      </span>

      {/* ------------------------------------------------------------------ */}
      {/* Original Price */}
      {/* ------------------------------------------------------------------ */}

      {originalPrice && originalPrice > price && (
        <span className="text-base text-muted-foreground line-through">
          ₹{originalPrice.toLocaleString("en-IN")}
        </span>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* Discount */}
      {/* ------------------------------------------------------------------ */}

      {discount > 0 && (
        <span
          className={cn(
            "rounded-full bg-emerald-100 px-2.5 py-1",
            "text-xs font-semibold text-emerald-700",
            "dark:bg-emerald-500/15 dark:text-emerald-400",
          )}
        >
          {discount}% OFF
        </span>
      )}
    </div>
  );
}