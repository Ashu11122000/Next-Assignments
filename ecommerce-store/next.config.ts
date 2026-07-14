import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  images: {
    remotePatterns: [
      // Picsum Photos
      {
        protocol: "https",
        hostname: "picsum.photos",
      },

      // jsDelivr (Brand Logos)
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
      },

      // Unsplash (Keep for any remaining images during migration)
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;