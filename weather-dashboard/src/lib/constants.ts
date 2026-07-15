/**
 * ============================================================================
 * Weather Constants
 * ============================================================================
 *
 * Centralized application constants for the Weather Dashboard.
 *
 * Uses:
 * - WeatherAPI.com
 * - Next.js App Router
 * - TypeScript
 * ============================================================================
 */

/**
 * Default city displayed on first load.
 */
export const DEFAULT_CITY = "London";

/**
 * Number of forecast days to request from WeatherAPI.
 *
 * Free plan supports up to 14 days.
 */
export const FORECAST_DAYS = 5;

/**
 * Search
 */
export const SEARCH_PLACEHOLDER =
  "Search for a city...";

/**
 * Application
 */
export const APP_NAME = "Weather Dashboard";

export const APP_DESCRIPTION =
  "Modern Weather Dashboard built with Next.js, TypeScript and Tailwind CSS.";

/**
 * Weather Units
 *
 * WeatherAPI already returns values in these units.
 */
export const TEMPERATURE_UNIT = "°C";

export const WIND_SPEED_UNIT = "km/h";

export const PRESSURE_UNIT = "mb";

export const VISIBILITY_UNIT = "km";

export const HUMIDITY_UNIT = "%";

export const PRECIPITATION_UNIT = "mm";

export const UV_INDEX_LABEL = "UV";

/**
 * Weather API Configuration
 */
export const WEATHER_ENDPOINT = "/forecast.json";

/**
 * Cache revalidation time (seconds)
 *
 * Used by Next.js fetch().
 */
export const WEATHER_CACHE_TIME = 600;

/**
 * WeatherAPI request options
 */
export const INCLUDE_AIR_QUALITY = "yes";

export const INCLUDE_ALERTS = "yes";