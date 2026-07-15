import Image from "next/image";
import { Clock, MapPin, Thermometer } from "lucide-react";
import { format } from "date-fns";

import { Badge } from "@/components/ui/Badge";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/Card";

import type { WeatherResponse } from "@/types/weather";

/**
 * ============================================================================
 * Weather Card
 * ============================================================================
 *
 * Displays the current weather overview.
 *
 * Features:
 * - Current temperature
 * - Weather condition
 * - Last updated time
 * - City & country
 * - Weather icon
 * - Feels like temperature
 * - Humidity
 * ============================================================================
 */

interface WeatherCardProps {
  weather: WeatherResponse;
}

export default function WeatherCard({
  weather,
}: Readonly<WeatherCardProps>) {
  const {
    location,
    current,
  } = weather;

  return (
    <Card className="overflow-hidden border-default shadow-lg">
      <CardHeader className="pb-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <MapPin className="size-5 text-primary" />

              <h2 className="text-3xl font-bold tracking-tight">
                {location.name}
              </h2>

              <Badge variant="secondary">
                {location.country}
              </Badge>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted">
              <Clock className="size-4" />

              <span>
                Updated{" "}
                {format(
                  new Date(current.last_updated),
                  "PPpp"
                )}
              </span>
            </div>
          </div>

          <Image
            src={`https:${current.condition.icon}`}
            alt={current.condition.text}
            width={110}
            height={110}
            priority
            className="drop-shadow-xl"
          />
        </div>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <Thermometer className="size-8 text-primary" />

              <h3 className="text-6xl font-bold tracking-tight">
                {Math.round(current.temp_c)}°
              </h3>
            </div>

            <p className="mt-3 text-xl font-medium capitalize">
              {current.condition.text}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-6 text-sm">
            <div>
              <p className="text-muted">
                Feels Like
              </p>

              <p className="mt-1 text-lg font-semibold">
                {Math.round(current.feelslike_c)}°
              </p>
            </div>

            <div>
              <p className="text-muted">
                Humidity
              </p>

              <p className="mt-1 text-lg font-semibold">
                {current.humidity}%
              </p>
            </div>

            <div>
              <p className="text-muted">
                Wind Speed
              </p>

              <p className="mt-1 text-lg font-semibold">
                {current.wind_kph} km/h
              </p>
            </div>

            <div>
              <p className="text-muted">
                Visibility
              </p>

              <p className="mt-1 text-lg font-semibold">
                {current.vis_km} km
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}