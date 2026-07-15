import Image from "next/image";
import { Clock } from "lucide-react";
import { format } from "date-fns";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";

/**
 * ============================================================================
 * Hourly Forecast
 * ============================================================================
 *
 * Server Component
 *
 * Displays the hourly weather forecast in a horizontally
 * scrollable layout.
 *
 * Built with:
 * - Next.js 16
 * - React 19
 * - TypeScript
 * - Tailwind CSS v4
 * - Next/Image
 * - date-fns
 *
 * Features
 * --------
 * ✓ Responsive
 * ✓ Horizontal scrolling
 * ✓ Premium UI
 * ✓ Image optimization
 * ✓ Accessible
 * ============================================================================
 */

export interface HourlyForecastItem {
  time: string;
  temperature: number;
  condition: string;
  icon: string;
}

interface HourlyForecastProps {
  forecast: HourlyForecastItem[];
}

interface ForecastItemProps {
  item: HourlyForecastItem;
}

function ForecastItem({
  item,
}: ForecastItemProps) {
  return (
    <div className="flex min-w-[120px] flex-col items-center rounded-2xl border border-default bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="mb-3 flex items-center gap-1 text-sm text-muted">
        <Clock className="size-4" />

        <span>
          {format(new Date(item.time), "ha")}
        </span>
      </div>

      <Image
        src={`https:${item.icon}`}
        alt={item.condition}
        width={56}
        height={56}
      />

      <p className="mt-2 text-2xl font-bold">
        {Math.round(item.temperature)}°
      </p>

      <p className="mt-2 text-center text-xs text-muted line-clamp-2">
        {item.condition}
      </p>
    </div>
  );
}

export default function HourlyForecast({
  forecast,
}: HourlyForecastProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Hourly Forecast
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {forecast.map((hour) => (
            <ForecastItem
              key={hour.time}
              item={hour}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}