import Image from "next/image";
import { CalendarDays, Droplets, Thermometer } from "lucide-react";
import { format } from "date-fns";

import {
  Card,
  CardContent,
} from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

/**
 * ============================================================================
 * Forecast Card
 * ============================================================================
 *
 * Server Component
 *
 * Displays a single day's weather forecast.
 *
 * Built with:
 * - React 19
 * - Next.js 16
 * - TypeScript
 * - Tailwind CSS v4
 * - Next/Image
 * - date-fns
 *
 * Features
 * --------
 * ✓ Responsive
 * ✓ Image Optimization
 * ✓ Accessible
 * ✓ Reusable
 * ✓ Premium UI
 * ============================================================================
 */

export interface ForecastCardProps {
  date: string;

  icon: string;

  condition: string;

  maxTemperature: number;

  minTemperature: number;

  rainChance: number;
}

export default function ForecastCard({
  date,
  icon,
  condition,
  maxTemperature,
  minTemperature,
  rainChance,
}: ForecastCardProps) {
  return (
    <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
        <div className="flex items-center gap-2 text-sm text-muted">
          <CalendarDays className="size-4" />

          <span>
            {format(new Date(date), "EEE")}
          </span>
        </div>

        <Image
          src={`https:${icon}`}
          alt={condition}
          width={72}
          height={72}
        />

        <Badge variant="secondary">
          {condition}
        </Badge>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Thermometer className="size-4 text-red-500" />

            <span className="font-semibold">
              {Math.round(maxTemperature)}°
            </span>
          </div>

          <div className="text-muted">
            /
          </div>

          <div className="font-medium text-muted">
            {Math.round(minTemperature)}°
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted">
          <Droplets className="size-4 text-blue-500" />

          <span>{rainChance}% Rain</span>
        </div>
      </CardContent>
    </Card>
  );
}