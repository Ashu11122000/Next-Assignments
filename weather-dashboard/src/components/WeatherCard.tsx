import Image from "next/image";
import {
  Clock,
  MapPin,
 Thermometer,
  Droplets,
  Wind,
  Eye,
} from "lucide-react";
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
 * Premium hero weather card.
 *
 * Features
 * --------
 * ✓ Current temperature
 * ✓ Weather condition
 * ✓ Last updated
 * ✓ Location
 * ✓ Premium metric cards
 * ✓ Responsive
 * ============================================================================
 */

interface WeatherCardProps {
  weather: WeatherResponse;
}

function WeatherStat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border/50 bg-background/60 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-3 flex items-center gap-2 text-muted-foreground">
        {icon}
        <span className="text-sm font-medium">
          {label}
        </span>
      </div>

      <p className="text-xl font-bold">
        {value}
      </p>
    </div>
  );
}

export default function WeatherCard({
  weather,
}: Readonly<WeatherCardProps>) {
  const {
    location,
    current,
  } = weather;

  return (
    <Card className="relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-500/10 via-cyan-500/5 to-blue-500/10" />

      <CardHeader className="pb-8">

        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

          {/* Left */}
          <div className="space-y-5">

            <div className="flex flex-wrap items-center gap-3">

              <MapPin className="size-5 text-sky-500" />

              <h2 className="text-4xl font-extrabold tracking-tight">
                {location.name}
              </h2>

              <Badge variant="secondary">
                {location.country}
              </Badge>

            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">

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

          {/* Weather Icon */}
          <div className="flex justify-center">
            <Image
              src={`https:${current.condition.icon}`}
              alt={current.condition.text}
              width={150}
              height={150}
              priority
              className="transition-transform duration-300 hover:scale-110 drop-shadow-2xl"
            />
          </div>

        </div>

      </CardHeader>

      <CardContent>

        <div className="flex flex-col gap-10 xl:flex-row xl:items-end xl:justify-between">

          {/* Temperature */}
          <div>

            <div className="flex items-center gap-4">

              <Thermometer className="size-10 text-sky-500" />

              <h3 className="text-7xl font-black tracking-tight">
                {Math.round(current.temp_c)}°
              </h3>

            </div>

            <p className="mt-4 text-2xl font-semibold capitalize text-muted-foreground">
              {current.condition.text}
            </p>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 lg:min-w-[420px]">

            <WeatherStat
              icon={<Thermometer className="size-4 text-red-500" />}
              label="Feels Like"
              value={`${Math.round(current.feelslike_c)}°`}
            />

            <WeatherStat
              icon={<Droplets className="size-4 text-sky-500" />}
              label="Humidity"
              value={`${current.humidity}%`}
            />

            <WeatherStat
              icon={<Wind className="size-4 text-emerald-500" />}
              label="Wind Speed"
              value={`${current.wind_kph} km/h`}
            />

            <WeatherStat
              icon={<Eye className="size-4 text-violet-500" />}
              label="Visibility"
              value={`${current.vis_km} km`}
            />

          </div>

        </div>

      </CardContent>

    </Card>
  );
}