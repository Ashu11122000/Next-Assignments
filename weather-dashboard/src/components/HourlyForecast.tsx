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
 * Displays today's hourly forecast using WeatherAPI data.
 *
 * Features:
 * - Horizontally scrollable
 * - Responsive
 * - Weather icons
 * - Temperature
 * - Condition
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
    <div className="flex min-w-[120px] flex-col items-center rounded-2xl border border-default bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="mb-3 flex items-center gap-1 text-sm text-muted">
        <Clock className="size-4" />

        <span>
          {format(new Date(hour.time), "ha")}
        </span>
      </div>

      <Image
        src={`https:${hour.condition.icon}`}
        alt={hour.condition.text}
        width={56}
        height={56}
      />

      <p className="mt-2 text-2xl font-bold">
        {Math.round(hour.temp_c)}°
      </p>

      <p className="mt-2 line-clamp-2 text-center text-xs text-muted">
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
        <div className="flex gap-4 overflow-x-auto pb-2">
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