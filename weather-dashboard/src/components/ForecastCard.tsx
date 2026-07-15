import Image from "next/image";
import {
  CalendarDays,
  Droplets,
  Thermometer,
} from "lucide-react";
import { format } from "date-fns";

import {
  Card,
  CardContent,
} from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

import type { ForecastDay } from "@/types/weather";

/**
 * ============================================================================
 * Forecast Card
 * ============================================================================
 *
 * Displays a premium weather forecast card.
 *
 * Features
 * --------
 * ✓ Day of week
 * ✓ Weather icon
 * ✓ Weather condition
 * ✓ Max / Min temperature
 * ✓ Chance of rain
 * ============================================================================
 */

interface ForecastCardProps {
  forecast: ForecastDay;
}

export default function ForecastCard({
  forecast,
}: Readonly<ForecastCardProps>) {
  const {
    date,
    day,
  } = forecast;

  return (
    <Card className="group h-full overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <CardContent className="flex h-full flex-col items-center justify-between p-7 text-center">

        {/* Day */}
        <div className="flex items-center gap-2 rounded-full bg-muted/40 px-3 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur-md">
          <CalendarDays className="size-4 text-primary" />
          <span>{format(new Date(date), "EEEE")}</span>
        </div>

        {/* Weather Icon */}
        <div className="my-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          <Image
            src={`https:${day.condition.icon}`}
            alt={day.condition.text}
            width={90}
            height={90}
            priority={false}
          />
        </div>

        {/* Weather Condition */}
        <Badge
          variant="secondary"
          className="mb-6"
        >
          {day.condition.text}
        </Badge>

        {/* Temperature */}
        <div className="mb-6 flex items-center justify-center gap-5">
          <div className="flex items-center gap-2">
            <Thermometer className="size-5 text-red-500" />

            <span className="text-xl font-bold">
              {Math.round(day.maxtemp_c)}°
            </span>
          </div>

          <div className="h-7 w-px bg-border" />

          <div className="text-lg font-medium text-muted-foreground">
            {Math.round(day.mintemp_c)}°
          </div>
        </div>

        {/* Rain */}
        <div className="flex items-center gap-2 rounded-full bg-sky-500/10 px-4 py-2 text-sm font-medium text-sky-600 dark:text-sky-400">
          <Droplets className="size-4" />

          <span>
            {day.daily_chance_of_rain}% Rain
          </span>
        </div>

      </CardContent>
    </Card>
  );
}