import type { Metadata } from "next";

import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";
import Newsletter from "@/components/home/Newsletter";
import TrendingProducts from "@/components/home/TrendingProducts";
import { SITE_CONFIG } from "@/constants/site";

/* -------------------------------------------------------------------------- */
/* Metadata                                                                   */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Home",
  description: SITE_CONFIG.description,
};

/* -------------------------------------------------------------------------- */
/* Home Page                                                                  */
/* -------------------------------------------------------------------------- */

export default function HomePage() {
  return (
    <main className="flex flex-col">

            {/* -------------------------------------------------------------------- */}
      {/* Hero Banner                                                          */}
      {/* -------------------------------------------------------------------- */}
      <Hero />

      {/* -------------------------------------------------------------------- */}
      {/* Shop by Category                                                     */}
      {/* -------------------------------------------------------------------- */}
      <Categories />

      {/* -------------------------------------------------------------------- */}
      {/* Featured Products                                                    */}
      {/* -------------------------------------------------------------------- */}
      <FeaturedProducts />

      {/* -------------------------------------------------------------------- */}
      {/* Trending Products                                                    */}
      {/* -------------------------------------------------------------------- */}
      <TrendingProducts />

      {/* -------------------------------------------------------------------- */}
      {/* Newsletter                                                           */}
      {/* -------------------------------------------------------------------- */}
      <Newsletter />
    </main>
  );
}