import { getWeather } from "@/lib/weather";
import { DEFAULT_CITY } from "@/lib/constants";

import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import WeatherCard from "@/components/WeatherCard";
import WeatherDetails from "@/components/WeatherDetails";
import HourlyForecast from "@/components/HourlyForecast";
import ForecastCard from "@/components/ForecastCard";

/**
 * ============================================================================
 * Home Dashboard
 * ============================================================================
 *
 * Premium weather dashboard.
 *
 * ============================================================================
 */

export default async function HomePage() {
  const weather = await getWeather(DEFAULT_CITY);

  return (
    <main className="min-h-screen bg-background">

      <Navbar />

      <div className="relative">

        {/* Background Glow */}
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-gradient-to-b from-sky-500/10 via-cyan-500/5 to-transparent" />

        <div className="container mx-auto max-w-[1600px] px-5 py-12 lg:px-8 2xl:px-10">

          {/* ============================================================ */}
          {/* Hero */}
          {/* ============================================================ */}

          <section className="mb-20">

            <div className="mx-auto max-w-5xl text-center">

              <span className="inline-flex items-center rounded-full border border-sky-500/20 bg-sky-500/10 px-5 py-2 text-sm font-semibold text-sky-600 dark:text-sky-400 backdrop-blur-xl">
                🌤️ Live Weather Dashboard
              </span>

              <h1 className="mt-8 text-6xl font-black tracking-tight leading-none md:text-8xl">
                {weather.location.name}
              </h1>

              <p className="mt-4 text-xl text-muted-foreground">
                {weather.location.region},{" "}
                {weather.location.country}
              </p>

              <p className="mt-2 text-sm text-muted-foreground">
                Local Time • {weather.location.localtime}
              </p>

              <div className="mx-auto mt-14 max-w-4xl">
                <SearchBar />
              </div>

            </div>

          </section>

          {/* ============================================================ */}
          {/* Overview */}
          {/* ============================================================ */}

          <section className="mb-12 grid gap-8 xl:grid-cols-12">

            <div className="xl:col-span-8">
  <WeatherCard weather={weather} />
</div>

<div className="xl:col-span-4">
  <WeatherDetails weather={weather} />
</div>

          </section>

          {/* ============================================================ */}
          {/* Hourly Forecast */}
          {/* ============================================================ */}

          <section className="mb-20 space-y-6">

            <div className="space-y-3">

              <h2 className="text-4xl font-bold tracking-tight">
                Hourly Forecast
              </h2>

              <p className="text-lg text-muted-foreground">
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

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4 ">

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