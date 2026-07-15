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
 * Premium Weather Dashboard
 *
 * Server Component
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

      <Navbar />

      <div className="relative">

        {/* Background Glow */}
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-gradient-to-b from-sky-500/10 via-cyan-500/5 to-transparent" />

        <div className="container mx-auto max-w-7xl px-4 py-10 lg:px-6">

          {/* ============================================================ */}
          {/* Hero */}
          {/* ============================================================ */}

          <section className="mb-14">

            <div className="flex flex-col gap-10 xl:flex-row xl:items-end xl:justify-between">

              {/* Left */}
              <div>

                <span className="inline-flex items-center rounded-full border border-sky-500/20 bg-sky-500/10 px-5 py-2 text-sm font-semibold text-sky-600 dark:text-sky-400 backdrop-blur-xl">
                  🌤️ Live Weather
                </span>

                <h1 className="mt-6 text-5xl font-black tracking-tight md:text-6xl">
                  {weather.location.name}
                </h1>

                <p className="mt-4 text-xl text-muted-foreground">
                  {weather.location.region},{" "}
                  {weather.location.country}
                </p>

                <p className="mt-2 text-sm text-muted-foreground">
                  Local Time • {weather.location.localtime}
                </p>

              </div>

              {/* Search */}
              <div className="w-full max-w-xl">
                <SearchBar />
              </div>

            </div>

          </section>

          {/* ============================================================ */}
          {/* Current Weather + Details */}
          {/* ============================================================ */}

          <section className="mb-12 grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">

            <WeatherCard weather={weather} />

            <WeatherDetails weather={weather} />

          </section>

          {/* ============================================================ */}
          {/* Hourly Forecast */}
          {/* ============================================================ */}

          <section className="mb-12 space-y-6">

            <div className="space-y-2">

              <h2 className="text-3xl font-bold tracking-tight">
                Hourly Forecast
              </h2>

              <p className="text-muted-foreground">
                Weather conditions throughout today.
              </p>

            </div>

            <HourlyForecast weather={weather} />

          </section>

          {/* ============================================================ */}
          {/* 5-Day Forecast */}
          {/* ============================================================ */}

          <section className="space-y-6">

            <div className="space-y-2">

              <h2 className="text-3xl font-bold tracking-tight">
                5-Day Forecast
              </h2>

              <p className="text-muted-foreground">
                Weather outlook for the upcoming days.
              </p>

            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">

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