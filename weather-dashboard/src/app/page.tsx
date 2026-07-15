import { redirect } from "next/navigation";

import { DEFAULT_CITY } from "@/lib/constants";

/**
 * ============================================================================
 * Home Page
 * ============================================================================
 *
 * Server Component
 *
 * Responsibilities:
 * - Redirect users to the default weather page
 * - Keep the home route clean
 * - Improve routing consistency
 *
 * Flow:
 * /  --->  /weather/London
 * ============================================================================
 */

export default function HomePage() {
  redirect(`/weather/${encodeURIComponent(DEFAULT_CITY)}`);
}