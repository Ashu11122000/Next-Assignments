import Image from "next/image";
import { MapPin, Clock } from "lucide-react";
import { format } from "date-fns";

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

/**
 * ============================================================================
 * Weather Card
 * ============================================================================
 *
 * Server Component
 *
 * Displays the current weather for a selected city.
 *
 * Built with:
 * - React 19
 * - Next.js 16
 * - TypeScript
 * - Tailwind CSS v4
 * - Next/Image
 *
 * Features
 * --------
 * ✓ Responsive
 * ✓ Image Optimization
 * ✓ Accessible
 * ✓ Reusable
 * ✓ Premium layout
 * ============================================================================
 */

export interface WeatherCardProps {
  city: string;
  country: string;

  temperature: number;
  feelsLike: number;

  condition: string;
  icon: string;

  humidity: number;

  lastUpdated: string;
}

export default function WeatherCard({
  city,
  country,
  temperature,
  feelsLike,
  condition,
  icon,
  humidity,
  lastUpdated,
}: WeatherCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-4">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <MapPin className="size-4 text-muted" />

              <h2 className="text-3xl font-bold tracking-tight">
                {city}
              </h2>

              <Badge variant="secondary">
                {country}
              </Badge>
            </div>

            <div className="mt-3 flex items-center gap-2 text-sm text-muted">
              <Clock className="size-4" />

              <span>
                Updated{" "}
                {format(
                  new Date(lastUpdated),
                  "PPpp"
                )}
              </span>
            </div>
          </div>

          <Image
            src={`https:${icon}`}
            alt={condition}
            width={96}
            height={96}
            priority
          />
        </div>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-6xl font-bold tracking-tight">
              {Math.round(temperature)}°
            </p>

            <p className="mt-2 text-lg capitalize">
              {condition}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm">
            <div>
              <p className="text-muted">
                Feels Like
              </p>

              <p className="mt-1 font-semibold">
                {Math.round(feelsLike)}°
              </p>
            </div>

            <div>
              <p className="text-muted">
                Humidity
              </p>

              <p className="mt-1 font-semibold">
                {humidity}%
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}