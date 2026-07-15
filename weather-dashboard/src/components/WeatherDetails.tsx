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

/**
 * ============================================================================
 * Weather Details
 * ============================================================================
 *
 * Server Component
 *
 * Displays detailed weather metrics for the selected city.
 *
 * Built with:
 * - Next.js 16
 * - React 19
 * - TypeScript
 * - Tailwind CSS v4
 * - Lucide React
 *
 * Features
 * --------
 * ✓ Responsive grid
 * ✓ Accessible
 * ✓ Reusable
 * ✓ Premium layout
 * ✓ Fully typed
 * ============================================================================
 */

export interface WeatherDetailsProps {
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  windDirection: string;
  pressure: number;
  visibility: number;
  uvIndex: number;
  cloudCover: number;
  sunrise: string;
  sunset: string;
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
}: DetailItemProps) {
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
  feelsLike,
  humidity,
  windSpeed,
  windDirection,
  pressure,
  visibility,
  uvIndex,
  cloudCover,
  sunrise,
  sunset,
}: WeatherDetailsProps) {
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
            value={`${Math.round(feelsLike)}°C`}
          />

          <DetailItem
            icon={<Droplets className="size-5" />}
            label="Humidity"
            value={`${humidity}%`}
          />

          <DetailItem
            icon={<Wind className="size-5" />}
            label="Wind Speed"
            value={`${windSpeed} km/h`}
          />

          <DetailItem
            icon={<Compass className="size-5" />}
            label="Wind Direction"
            value={windDirection}
          />

          <DetailItem
            icon={<Gauge className="size-5" />}
            label="Pressure"
            value={`${pressure} hPa`}
          />

          <DetailItem
            icon={<Eye className="size-5" />}
            label="Visibility"
            value={`${visibility} km`}
          />

          <DetailItem
            icon={<Sunrise className="size-5" />}
            label="Sunrise"
            value={sunrise}
          />

          <DetailItem
            icon={<Sunset className="size-5" />}
            label="Sunset"
            value={sunset}
          />

          <DetailItem
            icon={<Cloud className="size-5" />}
            label="Cloud Cover"
            value={`${cloudCover}%`}
          />

          <DetailItem
            icon={<Gauge className="size-5" />}
            label="UV Index"
            value={uvIndex.toFixed(1)}
          />
        </div>
      </CardContent>
    </Card>
  );
}