import {
  Cloud,
  Compass,
  Droplets,
  Eye,
  Gauge,
  Sunrise,
  Sunset,
  Thermometer,
  Wind,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";

import type { WeatherResponse } from "@/types/weather";

/**
 * ============================================================================
 * Weather Details
 * ============================================================================
 *
 * Displays detailed weather metrics using the WeatherAPI response.
 *
 * ============================================================================
 */

interface WeatherDetailsProps {
  weather: WeatherResponse;
}

interface DetailItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function DetailItem({
  icon,
  label,
  value,
}: Readonly<DetailItemProps>) {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-default bg-muted/30 p-4 transition-colors hover:bg-muted/50">
      <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-sm text-muted">
          {label}
        </p>

        <p className="mt-1 text-lg font-semibold">
          {value}
        </p>
      </div>
    </div>
  );
}

export default function WeatherDetails({
  weather,
}: Readonly<WeatherDetailsProps>) {
  const {
    current,
    forecast,
  } = weather;

  const today = forecast.forecastday[0];

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Weather Details
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <DetailItem
            icon={<Thermometer className="size-5" />}
            label="Feels Like"
            value={`${Math.round(current.feelslike_c)}°C`}
          />

          <DetailItem
            icon={<Droplets className="size-5" />}
            label="Humidity"
            value={`${current.humidity}%`}
          />

          <DetailItem
            icon={<Wind className="size-5" />}
            label="Wind Speed"
            value={`${current.wind_kph} km/h`}
          />

          <DetailItem
            icon={<Compass className="size-5" />}
            label="Wind Direction"
            value={current.wind_dir}
          />

          <DetailItem
            icon={<Gauge className="size-5" />}
            label="Pressure"
            value={`${current.pressure_mb} mb`}
          />

          <DetailItem
            icon={<Eye className="size-5" />}
            label="Visibility"
            value={`${current.vis_km} km`}
          />

          <DetailItem
            icon={<Sunrise className="size-5" />}
            label="Sunrise"
            value={today.astro.sunrise}
          />

          <DetailItem
            icon={<Sunset className="size-5" />}
            label="Sunset"
            value={today.astro.sunset}
          />

          <DetailItem
            icon={<Cloud className="size-5" />}
            label="Cloud Cover"
            value={`${current.cloud}%`}
          />

          <DetailItem
            icon={<Gauge className="size-5" />}
            label="UV Index"
            value={current.uv.toFixed(1)}
          />
        </div>
      </CardContent>
    </Card>
  );
}