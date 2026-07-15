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
 * Displays a single day's weather forecast using WeatherAPI data.
 *
 * Features:
 * - Day of week
 * - Weather icon
 * - Condition
 * - Max / Min temperature
 * - Chance of rain
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
    <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <CardContent className="flex flex-col items-center gap-5 p-6 text-center">
        <div className="flex items-center gap-2 text-sm text-muted">
          <CalendarDays className="size-4" />

          <span>
            {format(new Date(date), "EEEE")}
          </span>
        </div>

        <Image
          src={`https:${day.condition.icon}`}
          alt={day.condition.text}
          width={72}
          height={72}
        />

        <Badge variant="secondary">
          {day.condition.text}
        </Badge>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <Thermometer className="size-4 text-red-500" />

            <span className="font-semibold">
              {Math.round(day.maxtemp_c)}°
            </span>
          </div>

          <span className="text-muted">
            /
          </span>

          <span className="font-medium text-muted">
            {Math.round(day.mintemp_c)}°
          </span>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted">
          <Droplets className="size-4 text-blue-500" />

          <span>
            {day.daily_chance_of_rain}% Rain
          </span>
        </div>
      </CardContent>
    </Card>
  );
}