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
 * Premium weather metrics dashboard.
 *
 * Features
 * --------
 * ✓ Responsive
 * ✓ Premium glass cards
 * ✓ Better spacing
 * ✓ Hover animations
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
    <div className="group rounded-3xl border border-border/50 bg-background/70 p-5 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>

      <div className="space-y-1">

        <p className="text-sm font-medium text-muted-foreground">
          {label}
        </p>

        <p className="text-2xl font-bold tracking-tight">
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
        <CardTitle className="text-2xl">
          Weather Details
        </CardTitle>
      </CardHeader>

      <CardContent>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">

          <DetailItem
            icon={<Thermometer className="size-5 text-red-500" />}
            label="Feels Like"
            value={`${Math.round(current.feelslike_c)}°C`}
          />

          <DetailItem
            icon={<Droplets className="size-5 text-sky-500" />}
            label="Humidity"
            value={`${current.humidity}%`}
          />

          <DetailItem
            icon={<Wind className="size-5 text-emerald-500" />}
            label="Wind Speed"
            value={`${current.wind_kph} km/h`}
          />

          <DetailItem
            icon={<Compass className="size-5 text-violet-500" />}
            label="Wind Direction"
            value={current.wind_dir}
          />

          <DetailItem
            icon={<Gauge className="size-5 text-orange-500" />}
            label="Pressure"
            value={`${current.pressure_mb} mb`}
          />

          <DetailItem
            icon={<Eye className="size-5 text-cyan-500" />}
            label="Visibility"
            value={`${current.vis_km} km`}
          />

          <DetailItem
            icon={<Sunrise className="size-5 text-amber-500" />}
            label="Sunrise"
            value={today.astro.sunrise}
          />

          <DetailItem
            icon={<Sunset className="size-5 text-pink-500" />}
            label="Sunset"
            value={today.astro.sunset}
          />

          <DetailItem
            icon={<Cloud className="size-5 text-slate-500" />}
            label="Cloud Cover"
            value={`${current.cloud}%`}
          />

          <DetailItem
            icon={<Gauge className="size-5 text-yellow-500" />}
            label="UV Index"
            value={current.uv.toFixed(1)}
          />

        </div>

      </CardContent>

    </Card>
  );
}