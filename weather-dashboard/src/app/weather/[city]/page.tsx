import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getWeather } from "@/lib/weather";
import type { WeatherResponse } from "@/types/weather";

/**
 * ============================================================================
 * Weather Page
 * ============================================================================
 *
 * Server Component
 *
 * Uses WeatherAPI.com
 * ============================================================================
 */

interface WeatherPageProps {
  params: Promise<{
    city: string;
  }>;
}

export async function generateMetadata({
  params,
}: WeatherPageProps): Promise<Metadata> {
  const { city } = await params;

  const decodedCity = decodeURIComponent(city);

  return {
    title: `${decodedCity} Weather`,
    description: `Current weather and 5-day forecast for ${decodedCity}.`,
  };
}

export default async function WeatherPage({
  params,
}: WeatherPageProps) {
  const { city } = await params;

  const decodedCity = decodeURIComponent(city);

  let weather: WeatherResponse;

  try {
    weather = await getWeather(decodedCity);
  } catch (error) {
    console.error("Weather Fetch Error");
    console.error(error);

    // Uncomment after debugging
    // notFound();

    throw error;
  }

  return (
    <main className="container mx-auto min-h-screen px-4 py-10">
      <div className="mx-auto max-w-6xl space-y-8">
        <header>
          <h1 className="text-4xl font-bold">
            Weather Dashboard
          </h1>

          <p className="mt-2 text-muted">
            Weather data powered by WeatherAPI.com
          </p>
        </header>

        {/* Current Weather */}

        <section className="rounded-xl border border-default bg-card p-6 shadow-sm">
          <h2 className="mb-6 text-2xl font-semibold">
            Current Weather
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-sm text-muted">City</p>
              <p className="font-medium">
                {weather.location.name}
              </p>
            </div>

            <div>
              <p className="text-sm text-muted">Region</p>
              <p className="font-medium">
                {weather.location.region}
              </p>
            </div>

            <div>
              <p className="text-sm text-muted">Country</p>
              <p className="font-medium">
                {weather.location.country}
              </p>
            </div>

            <div>
              <p className="text-sm text-muted">
                Temperature
              </p>
              <p className="font-medium">
                {weather.current.temp_c}°C
              </p>
            </div>

            <div>
              <p className="text-sm text-muted">
                Feels Like
              </p>
              <p className="font-medium">
                {weather.current.feelslike_c}°C
              </p>
            </div>

            <div>
              <p className="text-sm text-muted">
                Condition
              </p>
              <p className="font-medium">
                {weather.current.condition.text}
              </p>
            </div>

            <div>
              <p className="text-sm text-muted">
                Humidity
              </p>
              <p className="font-medium">
                {weather.current.humidity}%
              </p>
            </div>

            <div>
              <p className="text-sm text-muted">
                Wind
              </p>
              <p className="font-medium">
                {weather.current.wind_kph} km/h
              </p>
            </div>

            <div>
              <p className="text-sm text-muted">
                Pressure
              </p>
              <p className="font-medium">
                {weather.current.pressure_mb} mb
              </p>
            </div>

            <div>
              <p className="text-sm text-muted">
                Visibility
              </p>
              <p className="font-medium">
                {weather.current.vis_km} km
              </p>
            </div>

            <div>
              <p className="text-sm text-muted">
                UV Index
              </p>
              <p className="font-medium">
                {weather.current.uv}
              </p>
            </div>

            <div>
              <p className="text-sm text-muted">
                Local Time
              </p>
              <p className="font-medium">
                {weather.location.localtime}
              </p>
            </div>

            <div className="flex items-center">
              <Image
                src={`https:${weather.current.condition.icon}`}
                alt={weather.current.condition.text}
                width={64}
                height={64}
                priority
              />
            </div>
          </div>
        </section>

        {/* Forecast */}

        <section className="rounded-xl border border-default bg-card p-6 shadow-sm">
          <h2 className="mb-6 text-2xl font-semibold">
            5-Day Forecast
          </h2>

          <div className="space-y-4">
            {weather.forecast.forecastday.map((day) => (
              <div
                key={day.date_epoch}
                className="flex items-center justify-between rounded-lg border border-default p-4"
              >
                <div>
                  <p className="font-medium">
                    {day.date}
                  </p>

                  <p className="text-sm text-muted">
                    {day.day.condition.text}
                  </p>
                </div>

                <Image
                  src={`https:${day.day.condition.icon}`}
                  alt={day.day.condition.text}
                  width={48}
                  height={48}
                />

                <div className="text-right">
                  <p className="font-semibold">
                    {day.day.maxtemp_c}°C
                  </p>

                  <p className="text-sm text-muted">
                    {day.day.mintemp_c}°C
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}