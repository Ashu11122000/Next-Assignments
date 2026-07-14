/**
 * ==========================================================
 * Category Data
 * ==========================================================
 *
 * Static category dataset used throughout the application.
 */

import type { Category } from "@/types/category";

export const categories: Category[] = [
  {
    id: 1,
    name: "Smartphones",
    slug: "smartphones",
    description:
      "Discover the latest smartphones from top global brands.",
    image: "/images/categories/smartphones.webp",
    productCount: 24,
    featured: true,
  },
  {
    id: 2,
    name: "Laptops",
    slug: "laptops",
    description:
      "Powerful laptops for work, gaming, and everyday use.",
    image: "/images/categories/laptops.webp",
    productCount: 18,
    featured: true,
  },
  {
    id: 3,
    name: "Tablets",
    slug: "tablets",
    description:
      "Portable tablets for entertainment and productivity.",
    image: "/images/categories/tablets.webp",
    productCount: 12,
    featured: true,
  },
  {
    id: 4,
    name: "Smart Watches",
    slug: "smart-watches",
    description:
      "Track your fitness and stay connected with smart watches.",
    image: "/images/categories/smart-watches.webp",
    productCount: 15,
    featured: true,
  },
  {
    id: 5,
    name: "Headphones",
    slug: "headphones",
    description:
      "Premium wireless and wired headphones.",
    image: "/images/categories/headphones.webp",
    productCount: 20,
    featured: true,
  },
  {
    id: 6,
    name: "Cameras",
    slug: "cameras",
    description:
      "DSLR, mirrorless, action, and compact cameras for photography enthusiasts.",
    image: "/images/categories/cameras.webp",
    productCount: 14,
    featured: true,
  },

    {
    id: 7,
    name: "Monitors",
    slug: "monitors",
    description:
      "High-resolution monitors for gaming, content creation, and productivity.",
    image: "/images/categories/monitors.webp",
    productCount: 11,
    featured: false,
  },
  {
    id: 8,
    name: "Keyboards",
    slug: "keyboards",
    description:
      "Mechanical, wireless, and ergonomic keyboards for every workspace.",
    image: "/images/categories/keyboards.webp",
    productCount: 16,
    featured: false,
  },
  {
    id: 9,
    name: "Mice",
    slug: "mice",
    description:
      "Precision gaming and ergonomic wireless mice for everyday use.",
    image: "/images/categories/mice.webp",
    productCount: 13,
    featured: false,
  },
  {
    id: 10,
    name: "Printers",
    slug: "printers",
    description:
      "Reliable inkjet, laser, and all-in-one printers for home and office.",
    image: "/images/categories/printers.webp",
    productCount: 8,
    featured: false,
  },
  {
    id: 11,
    name: "Storage",
    slug: "storage",
    description:
      "Fast SSDs, HDDs, memory cards, and portable storage solutions.",
    image: "/images/categories/storage.webp",
    productCount: 19,
    featured: false,
  },
  {
    id: 12,
    name: "Gaming",
    slug: "gaming",
    description:
      "Gaming consoles, accessories, controllers, and high-performance gaming gear.",
    image: "/images/categories/gaming.webp",
    productCount: 14,
    featured: true,
  },
  {
    id: 13,
    name: "Televisions",
    slug: "televisions",
    description:
      "Smart TVs, OLED, QLED, Mini-LED, and 4K Ultra HD televisions from leading brands.",
    image: "/images/categories/televisions.webp",
    productCount: 10,
    featured: true,
  },

    {
    id: 14,
    name: "Speakers",
    slug: "speakers",
    description:
      "Bluetooth speakers, smart speakers, soundbars, and premium home audio systems.",
    image: "/images/categories/speakers.webp",
    productCount: 9,
    featured: false,
  },
  {
    id: 15,
    name: "Audio",
    slug: "audio",
    description:
      "Premium audio equipment including headphones, earbuds, DACs, amplifiers, microphones, and professional sound gear.",
    image: "/images/categories/audio.webp",
    productCount: 17,
    featured: false,
  },
  {
    id: 16,
    name: "Accessories",
    slug: "accessories",
    description:
      "Essential tech accessories including chargers, cables, adapters, power banks, cases, stands, and hubs.",
    image: "/images/categories/accessories.webp",
    productCount: 22,
    featured: false,
  },
];