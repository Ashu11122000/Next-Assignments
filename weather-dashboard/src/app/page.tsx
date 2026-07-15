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
 * Main application dashboard.
 *
 * ============================================================================
 */

export default async function HomePage() {
  const weather = await getWeather(DEFAULT_CITY);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto max-w-7xl space-y-8 px-4 py-8">
        {/* Hero */}

        <section className="space-y-8">
          <div className="space-y-4 text-center">
            <span className="inline-flex rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              Live Weather Dashboard
            </span>

            <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
              {weather.location.name}
            </h1>

            <p className="text-lg text-muted-foreground">
              {weather.location.region},{" "}
              {weather.location.country}
            </p>

            <p className="text-sm text-muted-foreground">
              Local Time • {weather.location.localtime}
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <SearchBar />
          </div>
        </section>

        {/* Overview */}

        <section className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
          <WeatherCard weather={weather} />

          <WeatherDetails weather={weather} />
        </section>

        {/* Hourly */}

        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold">
              Hourly Forecast
            </h2>

            <p className="text-muted-foreground">
              Weather conditions throughout today.
            </p>
          </div>

          <HourlyForecast weather={weather} />
        </section>

        {/* Forecast */}

        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold">
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
    </main>
  );
}