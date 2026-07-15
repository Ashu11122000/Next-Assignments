/**
 * ============================================================================
 * Weather Types
 * ============================================================================
 *
 * Type definitions for WeatherAPI.com
 *
 * API:
 * https://api.weatherapi.com/v1/forecast.json
 *
 * Covers:
 * - Location
 * - Current Weather
 * - Condition
 * - Forecast
 * - Forecast Day
 * - Astro
 * - Hourly Forecast
 * ============================================================================
 */

export interface Condition {
  text: string;
  icon: string;
  code: number;
}

export interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

export interface CurrentWeather {
  last_updated_epoch: number;
  last_updated: string;

  temp_c: number;
  temp_f: number;

  is_day: number;

  condition: Condition;

  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;

  pressure_mb: number;
  pressure_in: number;

  precip_mm: number;
  precip_in: number;

  humidity: number;
  cloud: number;

  feelslike_c: number;
  feelslike_f: number;

  vis_km: number;
  vis_miles: number;

  uv: number;

  gust_mph: number;
  gust_kph: number;
}

export interface Astro {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  moon_phase: string;
  moon_illumination: string;
}

export interface HourForecast {
  time_epoch: number;
  time: string;

  temp_c: number;
  temp_f: number;

  is_day: number;

  condition: Condition;

  wind_kph: number;
  wind_degree: number;
  wind_dir: string;

  pressure_mb: number;

  precip_mm: number;

  humidity: number;
  cloud: number;

  feelslike_c: number;

  windchill_c: number;
  heatindex_c: number;

  dewpoint_c: number;

  will_it_rain: number;
  chance_of_rain: number;

  will_it_snow: number;
  chance_of_snow: number;

  vis_km: number;

  uv: number;
}

export interface ForecastDay {
  date: string;
  date_epoch: number;

  day: {
    maxtemp_c: number;
    mintemp_c: number;
    avgtemp_c: number;

    maxwind_kph: number;

    totalprecip_mm: number;

    avghumidity: number;

    daily_will_it_rain: number;
    daily_chance_of_rain: number;

    daily_will_it_snow: number;
    daily_chance_of_snow: number;

    uv: number;

    condition: Condition;
  };

  astro: Astro;

  hour: HourForecast[];
}

export interface Forecast {
  forecastday: ForecastDay[];
}

export interface WeatherResponse {
  location: Location;
  current: CurrentWeather;
  forecast: Forecast;
}

export interface Alert {
  headline: string;
  msgtype: string;
  severity: string;
  urgency: string;
  areas: string;
  category: string;
  certainty: string;
  event: string;
  note: string;
  effective: string;
  expires: string;
  desc: string;
  instruction: string;
}

export interface Alerts {
  alert: Alert[];
}

export interface WeatherResponse {
  location: Location;
  current: CurrentWeather;
  forecast: Forecast;
  alerts?: Alerts;
}