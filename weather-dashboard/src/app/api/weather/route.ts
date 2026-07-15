import { NextRequest, NextResponse } from "next/server";

import { DEFAULT_CITY } from "@/lib/constants";

/**
 * ============================================================================
 * Weather API Route
 * ============================================================================
 *
 * Route:
 * GET /api/weather?city=London
 *
 * Uses:
 * WeatherAPI.com
 *
 * Returns:
 * - Current Weather
 * - 5-Day Forecast
 * - Air Quality
 * - Weather Alerts
 * ============================================================================
 */

const API_KEY = process.env.WEATHER_API_KEY;
const BASE_URL = process.env.WEATHER_API_URL;

export async function GET(request: NextRequest) {
  if (!API_KEY || !BASE_URL) {
    return NextResponse.json(
      {
        success: false,
        message: "Weather API is not configured.",
      },
      {
        status: 500,
      }
    );
  }

  const city =
    request.nextUrl.searchParams.get("city") ??
    DEFAULT_CITY;

  try {
    const response = await fetch(
      `${BASE_URL}/forecast.json` +
        `?key=${API_KEY}` +
        `&q=${encodeURIComponent(city)}` +
        `&days=5` +
        `&aqi=yes` +
        `&alerts=yes`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      const error = await response.json();

      return NextResponse.json(
        {
          success: false,
          message:
            error.error?.message ??
            "Unable to fetch weather data.",
        },
        {
          status: response.status,
        }
      );
    }

    const weather = await response.json();

    return NextResponse.json(
      {
        success: true,
        data: weather,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Weather API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}