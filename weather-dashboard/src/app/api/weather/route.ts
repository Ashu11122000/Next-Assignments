import { NextRequest, NextResponse } from "next/server";

import { DEFAULT_CITY } from "@/lib/constants";

/**
 * ============================================================================
 * Weather API Route
 * ============================================================================
 *
 * Endpoint:
 * GET /api/weather?city=London
 *
 * Fetches weather data from WeatherAPI.com including:
 * - Current weather
 * - 5-day forecast
 * - Air quality
 * - Weather alerts
 *
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
    request.nextUrl.searchParams
      .get("city")
      ?.trim() || DEFAULT_CITY;

  try {
    const url = new URL(`${BASE_URL}/forecast.json`);

    url.searchParams.set("key", API_KEY);
    url.searchParams.set("q", city);
    url.searchParams.set("days", "5");
    url.searchParams.set("aqi", "yes");
    url.searchParams.set("alerts", "yes");

    const response = await fetch(url.toString(), {
      cache: "no-store",
    });

    if (!response.ok) {
      const error = await response.json();

      return NextResponse.json(
        {
          success: false,
          message:
            error?.error?.message ??
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
    console.error("Weather API Route Error:", error);

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