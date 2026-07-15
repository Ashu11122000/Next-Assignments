import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ForecastCard from "@/components/ForecastCard";
import HourlyForecast from "@/components/HourlyForecast";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import WeatherCard from "@/components/WeatherCard";
import WeatherDetails from "@/components/WeatherDetails";

import { getWeather } from "@/lib/weather";
import type { WeatherResponse } from "@/types/weather";

/**
 * ============================================================================
 * Weather Page
 * ============================================================================
 *
 * Server Component
 *
 * Responsibilities:
 * - Fetch weather data from WeatherAPI.com
 * - Generate dynamic metadata
 * - Handle invalid cities
 * - Compose reusable UI components
 *
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
}: Readonly<WeatherPageProps>) {
  const { city } = await params;

  const decodedCity = decodeURIComponent(city);

  let weather: WeatherResponse;

  try {
    weather = await getWeather(decodedCity);
  } catch (error) {
    console.error("Weather Fetch Error:", error);
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8">
          {/* Hero Section */}
          <section className="space-y-6">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="space-y-3">
                <span className="inline-flex w-fit rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                  Live Weather
                </span>

                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                    {weather.location.name}
                  </h1>

                  <p className="text-lg text-muted">
                    {weather.location.region},{" "}
                    {weather.location.country}
                  </p>

                  <p className="text-sm text-muted">
                    Local Time • {weather.location.localtime}
                  </p>
                </div>
              </div>

              <div className="w-full max-w-xl">
                <SearchBar />
              </div>
            </div>
          </section>

          {/* Current Weather */}
          <section>
            <WeatherCard weather={weather} />
          </section>

          {/* Weather Details */}
          <section>
            <WeatherDetails weather={weather} />
          </section>

          {/* Hourly Forecast */}
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold">
                Hourly Forecast
              </h2>

              <p className="mt-2 text-muted">
                Weather conditions throughout the day.
              </p>
            </div>

            <HourlyForecast weather={weather} />
          </section>

          {/* Five-Day Forecast */}
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold">
                5-Day Forecast
              </h2>

              <p className="mt-2 text-muted">
                Weather outlook for the upcoming days.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {weather.forecast.forecastday.map((day) => (
                <ForecastCard
                  key={day.date_epoch}
                  forecast={day}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}