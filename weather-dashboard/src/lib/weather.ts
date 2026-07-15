import { WeatherResponse } from "@/types/weather";

import { DEFAULT_CITY } from "./constants";

/**
 * ============================================================================
 * Weather API Service
 * ============================================================================
 *
 * Handles communication with WeatherAPI.com.
 *
 * API:
 * https://api.weatherapi.com/v1/forecast.json
 *
 * Features:
 * - Current weather
 * - 5-day forecast
 * - Air Quality Index
 * - Weather alerts
 * ============================================================================
 */

const API_KEY = process.env.WEATHER_API_KEY;
const BASE_URL = process.env.WEATHER_API_URL;

async function fetchWeather<T>(
  city: string
): Promise<T> {
  if (!API_KEY) {
    throw new Error(
      "WEATHER_API_KEY is missing from .env.local"
    );
  }

  if (!BASE_URL) {
    throw new Error(
      "WEATHER_API_URL is missing from .env.local"
    );
  }

  const url =
    `${BASE_URL}/forecast.json` +
    `?key=${API_KEY}` +
    `&q=${encodeURIComponent(city)}` +
    `&days=5` +
    `&aqi=yes` +
    `&alerts=yes`;

  const response = await fetch(url, {
    next: {
      revalidate: 600,
    },
  });

  if (!response.ok) {
    const message = await response.text();

    throw new Error(
      `Weather API Error (${response.status}): ${message}`
    );
  }

  return response.json();
}

/**
 * ============================================================================
 * Get Weather
 * ============================================================================
 */

export async function getWeather(
  city: string = DEFAULT_CITY
): Promise<WeatherResponse> {
  return fetchWeather<WeatherResponse>(city);
}