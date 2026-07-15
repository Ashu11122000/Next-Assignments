import Image from "next/image";
import { Clock } from "lucide-react";
import { format } from "date-fns";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";

import type { WeatherResponse } from "@/types/weather";

/**
 * ============================================================================
 * Hourly Forecast
 * ============================================================================
 *
 * Premium horizontally scrollable hourly forecast.
 *
 * Features
 * --------
 * ✓ Responsive
 * ✓ Smooth scrolling
 * ✓ Glass cards
 * ✓ Premium spacing
 * ✓ Hover animations
 * ============================================================================
 */

interface HourlyForecastProps {
  weather: WeatherResponse;
}

interface ForecastItemProps {
  hour: WeatherResponse["forecast"]["forecastday"][0]["hour"][number];
}

function ForecastItem({
  hour,
}: Readonly<ForecastItemProps>) {
  return (
    <div className="group flex min-w-[132px] flex-col items-center rounded-3xl border border-border/50 bg-background/70 p-5 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* Time */}
      <div className="flex items-center gap-2 rounded-full bg-muted/40 px-3 py-1 text-sm font-medium text-muted-foreground">
        <Clock className="size-4 text-primary" />

        <span>
          {format(new Date(hour.time), "ha")}
        </span>
      </div>

      {/* Weather Icon */}
      <div className="my-5 transition-transform duration-300 group-hover:scale-110">
        <Image
          src={`https:${hour.condition.icon}`}
          alt={hour.condition.text}
          width={72}
          height={72}
        />
      </div>

      {/* Temperature */}
      <p className="text-3xl font-bold tracking-tight">
        {Math.round(hour.temp_c)}°
      </p>

      {/* Condition */}
      <p className="mt-3 line-clamp-2 text-center text-xs leading-5 text-muted-foreground">
        {hour.condition.text}
      </p>

    </div>
  );
}

export default function HourlyForecast({
  weather,
}: Readonly<HourlyForecastProps>) {
  const hourlyForecast =
    weather.forecast.forecastday[0]?.hour ?? [];

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Hourly Forecast
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex gap-5 overflow-x-auto pb-3 pr-1 scrollbar-none">
          {hourlyForecast.map((hour) => (
            <ForecastItem
              key={hour.time_epoch}
              hour={hour}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}