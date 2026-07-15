import type { WeatherResponse } from "@/types/weather";

import { DEFAULT_CITY } from "./constants";

/**
 * ============================================================================
 * Weather Service
 * ============================================================================
 */

async function fetchWeather(
  city: string
): Promise<WeatherResponse> {
  const API_KEY = process.env.WEATHER_API_KEY;
  const BASE_URL = process.env.WEATHER_API_URL;

  if (!API_KEY) {
    throw new Error(
      "Missing WEATHER_API_KEY in .env.local"
    );
  }

  if (!BASE_URL) {
    throw new Error(
      "Missing WEATHER_API_URL in .env.local"
    );
  }

  const url = new URL(`${BASE_URL}/forecast.json`);

  url.searchParams.set("key", API_KEY);
  url.searchParams.set("q", city.trim());
  url.searchParams.set("days", "5");
  url.searchParams.set("aqi", "yes");
  url.searchParams.set("alerts", "yes");

  const response = await fetch(url.toString(), {
    next: {
      revalidate: 600,
    },
  });

  if (!response.ok) {
    let message = "Unable to fetch weather.";

    try {
      const error = await response.json();
      message = error.error?.message ?? message;
    } catch {}

    throw new Error(
      `Weather API Error (${response.status}): ${message}`
    );
  }

  return response.json();
}

export async function getWeather(
  city: string = DEFAULT_CITY
): Promise<WeatherResponse> {
  return fetchWeather(city);
}