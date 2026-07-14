/**
 * ==========================================================
 * Product Data
 * ==========================================================
 *
 * Static product dataset used throughout the application.
 *
 * Products:
 * - Featured Products
 * - Trending Products
 * - Related Products
 * - Product Details
 * - Search
 * - Categories
 */

import { brands } from "./brands";
import { categories } from "./categories";

import type { Product } from "@/types/product";

/* -------------------------------------------------------------------------- */
/* Reusable Lookups                                                           */
/* -------------------------------------------------------------------------- */

const getBrand = (name: string) => {
  const brand = brands.find((item) => item.name === name);

  if (!brand) {
    throw new Error(`Brand "${name}" not found.`);
  }

  return brand;
};

const getCategory = (slug: string) => {
  const category = categories.find((item) => item.slug === slug);

  if (!category) {
    throw new Error(`Category "${slug}" not found.`);
  }

  return category;
};

/* -------------------------------------------------------------------------- */
/* Products                                                                   */
/* -------------------------------------------------------------------------- */

export const products: Product[] = [
  {
    id: 1,

    name: "Apple iPhone 16 Pro Max",

    slug: "apple-iphone-16-pro-max",

    description:
      "Experience Apple's most advanced smartphone featuring the A18 Pro chip, titanium design, stunning Super Retina XDR display, advanced camera system, and exceptional all-day battery life.",

    shortDescription:
      "Apple flagship smartphone with A18 Pro chip and titanium design.",

    category: getCategory("smartphones"),

    brand: getBrand("Apple"),

    price: 149900,

    originalPrice: 159900,

    discountPercentage: 6,

    rating: {
      rate: 4.9,
      count: 2845,
    },

    stock: 25,

    sku: "APL-IP16PM-256",

    thumbnail:
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&q=80",

    images: [
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=1200&q=80",
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=1200&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200&q=80",
    ],

    specifications: [
      {
        label: "Display",
        value: '6.9" Super Retina XDR OLED',
      },
      {
        label: "Processor",
        value: "Apple A18 Pro",
      },
      {
        label: "Storage",
        value: "256GB",
      },
      {
        label: "RAM",
        value: "8GB",
      },
      {
        label: "Battery",
        value: "4685mAh",
      },
      {
        label: "Camera",
        value: "48MP + 48MP + 12MP",
      },
    ],

    featured: true,

    trending: true,

    isNew: true,

    onSale: true,
  },

  {
    id: 2,

    name: "Samsung Galaxy S25 Ultra",

    slug: "samsung-galaxy-s25-ultra",

    description:
      "Samsung's premium flagship smartphone featuring Galaxy AI, Snapdragon processor, titanium frame, S Pen support, and a professional-grade quad camera system.",

    shortDescription:
      "Premium Galaxy flagship with AI-powered performance.",

    category: getCategory("smartphones"),

    brand: getBrand("Samsung"),

    price: 129999,

    originalPrice: 139999,

    discountPercentage: 7,

    rating: {
      rate: 4.8,
      count: 1987,
    },

    stock: 32,

    sku: "SMS-S25U-512",

    thumbnail:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800&q=80",

    images: [
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=1200&q=80",
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=1200&q=80",
      "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=1200&q=80",
    ],

    specifications: [
      {
        label: "Display",
        value: '6.9" Dynamic AMOLED 2X',
      },
      {
        label: "Processor",
        value: "Snapdragon 8 Elite",
      },
      {
        label: "Storage",
        value: "512GB",
      },
      {
        label: "RAM",
        value: "12GB",
      },
      {
        label: "Battery",
        value: "5000mAh",
      },
      {
        label: "Camera",
        value: "200MP Quad Camera",
      },
    ],

    featured: true,

    trending: true,

    isNew: true,

    onSale: true,
  },

  {
    id: 3,

    name: "Apple MacBook Pro 16 M4 Pro",

    slug: "apple-macbook-pro-16-m4-pro",

    description:
      "A professional laptop powered by Apple's M4 Pro chip with an incredible Liquid Retina XDR display, long battery life, and exceptional performance for developers and creators.",

    shortDescription:
      "Professional laptop powered by Apple M4 Pro.",

    category: getCategory("laptops"),

    brand: getBrand("Apple"),

    price: 249900,

    originalPrice: 259900,

    discountPercentage: 4,

    rating: {
      rate: 4.9,
      count: 1348,
    },

    stock: 15,

    sku: "APL-MBP16-M4",

    thumbnail:
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=800&q=80",

    images: [
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=1200&q=80",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1200&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=1200&q=80",
    ],

    specifications: [
      {
        label: "Display",
        value: '16.2" Liquid Retina XDR',
      },
      {
        label: "Processor",
        value: "Apple M4 Pro",
      },
      {
        label: "Memory",
        value: "24GB Unified",
      },
      {
        label: "Storage",
        value: "1TB SSD",
      },
      {
        label: "Battery",
        value: "Up to 24 Hours",
      },
      {
        label: "Operating System",
        value: "macOS",
      },
    ],

    featured: true,

    trending: true,

    isNew: true,

    onSale: false,
  },

  {
    id: 4,

    name: "Dell XPS 15 OLED",

    slug: "dell-xps-15-oled",

    description:
      "Premium Windows laptop with Intel Core Ultra processor, NVIDIA RTX graphics, OLED display, and premium aluminum construction.",

    shortDescription:
      "Dell flagship laptop with OLED display.",

    category: getCategory("laptops"),

    brand: getBrand("Dell"),

    price: 189999,

    originalPrice: 199999,

    discountPercentage: 5,

    rating: {
      rate: 4.7,
      count: 968,
    },

    stock: 20,

    sku: "DLL-XPS15-OLED",

    thumbnail:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80",

    images: [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1200&q=80",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80",
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&q=80",
    ],

    specifications: [
      {
        label: "Display",
        value: '15.6" OLED',
      },
      {
        label: "Processor",
        value: "Intel Core Ultra 9",
      },
      {
        label: "Graphics",
        value: "NVIDIA RTX 4070",
      },
      {
        label: "Memory",
        value: "32GB DDR5",
      },
      {
        label: "Storage",
        value: "1TB SSD",
      },
      {
        label: "Operating System",
        value: "Windows 11 Pro",
      },
    ],

    featured: true,

    trending: false,

    isNew: false,

    onSale: true,
  },

  {
    id: 5,

    name: "Sony WH-1000XM5 Wireless Headphones",

    slug: "sony-wh-1000xm5",

    description:
      "Industry-leading noise-canceling wireless headphones delivering exceptional sound quality, crystal-clear calls, and up to 30 hours of battery life.",

    shortDescription:
      "Premium wireless noise-canceling headphones.",

    category: getCategory("headphones"),

    brand: getBrand("Sony"),

    price: 29999,

    originalPrice: 34999,

    discountPercentage: 14,

    rating: {
      rate: 4.8,
      count: 3258,
    },

    stock: 45,

    sku: "SNY-WH1000XM5",

    thumbnail:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",

    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=1200&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=1200&q=80",
    ],

    specifications: [
      {
        label: "Type",
        value: "Over-Ear",
      },
      {
        label: "Connectivity",
        value: "Bluetooth 5.3",
      },
      {
        label: "Battery",
        value: "30 Hours",
      },
      {
        label: "Noise Cancellation",
        value: "Active",
      },
      {
        label: "Charging",
        value: "USB-C Fast Charging",
      },
      {
        label: "Weight",
        value: "250g",
      },
    ],

    featured: true,

    trending: true,

    isNew: false,

    onSale: true,
  },

    {
    id: 6,

    name: "Apple iPad Pro 13 M4",

    slug: "apple-ipad-pro-13-m4",

    description:
      "The most powerful iPad ever built with the Apple M4 chip, Ultra Retina XDR display, Apple Pencil Pro support, and exceptional performance for professionals and creatives.",

    shortDescription:
      "Apple's flagship tablet powered by the M4 chip.",

    category: getCategory("tablets"),

    brand: getBrand("Apple"),

    price: 129900,

    originalPrice: 139900,

    discountPercentage: 7,

    rating: {
      rate: 4.9,
      count: 1645,
    },

    stock: 22,

    sku: "APL-IPAD-M4-13",

    thumbnail:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80",

    images: [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=1200&q=80",
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=1200&q=80",
      "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=1200&q=80",
    ],

    specifications: [
      {
        label: "Display",
        value: '13" Ultra Retina XDR',
      },
      {
        label: "Processor",
        value: "Apple M4",
      },
      {
        label: "Storage",
        value: "512GB",
      },
      {
        label: "Memory",
        value: "16GB",
      },
      {
        label: "Battery",
        value: "Up to 10 Hours",
      },
      {
        label: "Operating System",
        value: "iPadOS",
      },
    ],

    featured: true,

    trending: true,

    isNew: true,

    onSale: true,
  },

  {
    id: 7,

    name: "Samsung Galaxy Tab S10 Ultra",

    slug: "samsung-galaxy-tab-s10-ultra",

    description:
      "Premium Android tablet with an immersive AMOLED display, S Pen support, Galaxy AI features, and desktop-class multitasking capabilities.",

    shortDescription:
      "Samsung flagship Android tablet with S Pen.",

    category: getCategory("tablets"),

    brand: getBrand("Samsung"),

    price: 114999,

    originalPrice: 124999,

    discountPercentage: 8,

    rating: {
      rate: 4.8,
      count: 1325,
    },

    stock: 26,

    sku: "SMS-TABS10U",

    thumbnail:
      "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=800&q=80",

    images: [
      "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=1200&q=80",
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=1200&q=80",
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=1200&q=80",
    ],

    specifications: [
      {
        label: "Display",
        value: '14.6" Dynamic AMOLED 2X',
      },
      {
        label: "Processor",
        value: "Snapdragon 8 Gen 4",
      },
      {
        label: "Storage",
        value: "512GB",
      },
      {
        label: "Memory",
        value: "12GB",
      },
      {
        label: "Battery",
        value: "11200mAh",
      },
      {
        label: "Operating System",
        value: "Android 15",
      },
    ],

    featured: true,

    trending: true,

    isNew: true,

    onSale: true,
  },

  {
    id: 8,

    name: "Apple Watch Ultra 2",

    slug: "apple-watch-ultra-2",

    description:
      "The ultimate smartwatch for athletes and adventurers featuring advanced health tracking, precision GPS, titanium construction, and up to 72 hours of battery life.",

    shortDescription:
      "Apple's premium rugged smartwatch.",

    category: getCategory("smart-watches"),

    brand: getBrand("Apple"),

    price: 89999,

    originalPrice: 94999,

    discountPercentage: 5,

    rating: {
      rate: 4.8,
      count: 2142,
    },

    stock: 34,

    sku: "APL-WATCH-U2",

    thumbnail:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",

    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=80",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=1200&q=80",
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=1200&q=80",
    ],

    specifications: [
      {
        label: "Display",
        value: '1.92" Retina OLED',
      },
      {
        label: "Case",
        value: "Titanium",
      },
      {
        label: "Battery",
        value: "72 Hours",
      },
      {
        label: "GPS",
        value: "Dual Frequency",
      },
      {
        label: "Water Resistance",
        value: "100m",
      },
      {
        label: "Connectivity",
        value: "Bluetooth + LTE",
      },
    ],

    featured: true,

    trending: true,

    isNew: false,

    onSale: false,
  },

  {
    id: 9,

    name: "Canon EOS R6 Mark II",

    slug: "canon-eos-r6-mark-ii",

    description:
      "Professional full-frame mirrorless camera featuring a 24.2MP sensor, advanced autofocus, 4K video recording, and outstanding low-light performance.",

    shortDescription:
      "Professional Canon full-frame mirrorless camera.",

    category: getCategory("cameras"),

    brand: getBrand("Canon"),

    price: 219999,

    originalPrice: 229999,

    discountPercentage: 4,

    rating: {
      rate: 4.9,
      count: 925,
    },

    stock: 12,

    sku: "CAN-R6M2",

    thumbnail:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80",

    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&q=80",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1200&q=80",
      "https://images.unsplash.com/photo-1495707902641-75cac588d2e9?w=1200&q=80",
    ],

    specifications: [
      {
        label: "Sensor",
        value: "24.2MP Full Frame",
      },
      {
        label: "Video",
        value: "4K 60fps",
      },
      {
        label: "Autofocus",
        value: "Dual Pixel CMOS AF II",
      },
      {
        label: "Stabilization",
        value: "8-Stop IBIS",
      },
      {
        label: "Burst Shooting",
        value: "40 fps",
      },
      {
        label: "Mount",
        value: "Canon RF",
      },
    ],

    featured: true,

    trending: false,

    isNew: false,

    onSale: true,
  },

  {
    id: 10,

    name: "Sony PlayStation 5 Slim",

    slug: "sony-playstation-5-slim",

    description:
      "Next-generation gaming console delivering breathtaking graphics, lightning-fast SSD storage, immersive DualSense controller features, and an extensive library of exclusive games.",

    shortDescription:
      "Sony PlayStation 5 Slim gaming console.",

    category: getCategory("gaming"),

    brand: getBrand("Sony"),

    price: 54990,

    originalPrice: 59990,

    discountPercentage: 8,

    rating: {
      rate: 4.9,
      count: 4128,
    },

    stock: 38,

    sku: "SNY-PS5-SLIM",

    thumbnail:
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&q=80",

    images: [
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=1200&q=80",
      "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=1200&q=80",
      "https://images.unsplash.com/photo-1622297845775-5ff3fef71d13?w=1200&q=80",
    ],

    specifications: [
      {
        label: "Storage",
        value: "1TB SSD",
      },
      {
        label: "Resolution",
        value: "Up to 8K",
      },
      {
        label: "Frame Rate",
        value: "120 FPS",
      },
      {
        label: "Ray Tracing",
        value: "Supported",
      },
      {
        label: "Controller",
        value: "DualSense Wireless",
      },
      {
        label: "Connectivity",
        value: "Wi-Fi 6 + Bluetooth 5.1",
      },
    ],

    featured: true,

    trending: true,

    isNew: false,

    onSale: true,
  },

    {
    id: 11,

    name: "LG OLED evo C4 65-inch Smart TV",

    slug: "lg-oled-evo-c4-65",

    description:
      "Experience cinematic entertainment with the LG OLED evo C4 featuring self-lit OLED pixels, Dolby Vision, Dolby Atmos, webOS, and an ultra-slim premium design.",

    shortDescription:
      "65-inch 4K OLED Smart TV with Dolby Vision.",

    category: getCategory("televisions"),

    brand: getBrand("LG"),

    price: 179990,

    originalPrice: 194990,

    discountPercentage: 8,

    rating: {
      rate: 4.8,
      count: 1846,
    },

    stock: 16,

    sku: "LG-C4-65",

    thumbnail:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80",

    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=1200&q=80",
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?w=1200&q=80",
      "https://images.unsplash.com/photo-1577979749830-f1d742b96791?w=1200&q=80",
    ],

    specifications: [
      {
        label: "Display",
        value: '65" OLED evo',
      },
      {
        label: "Resolution",
        value: "4K UHD",
      },
      {
        label: "Refresh Rate",
        value: "120Hz",
      },
      {
        label: "HDR",
        value: "Dolby Vision",
      },
      {
        label: "Audio",
        value: "Dolby Atmos",
      },
      {
        label: "Operating System",
        value: "webOS",
      },
    ],

    featured: true,

    trending: true,

    isNew: false,

    onSale: true,
  },

  {
    id: 12,

    name: "JBL Charge 5 Portable Bluetooth Speaker",

    slug: "jbl-charge-5",

    description:
      "Powerful portable Bluetooth speaker with JBL Pro Sound, IP67 waterproof design, up to 20 hours of battery life, and built-in power bank functionality.",

    shortDescription:
      "Portable waterproof Bluetooth speaker.",

    category: getCategory("speakers"),

    brand: getBrand("JBL"),

    price: 14999,

    originalPrice: 16999,

    discountPercentage: 12,

    rating: {
      rate: 4.7,
      count: 2635,
    },

    stock: 42,

    sku: "JBL-CHARGE5",

    thumbnail:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&q=80",

    images: [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=1200&q=80",
      "https://images.unsplash.com/photo-1507878866276-a947ef722fee?w=1200&q=80",
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=1200&q=80",
    ],

    specifications: [
      {
        label: "Output Power",
        value: "40W",
      },
      {
        label: "Battery",
        value: "20 Hours",
      },
      {
        label: "Connectivity",
        value: "Bluetooth 5.1",
      },
      {
        label: "Water Resistance",
        value: "IP67",
      },
      {
        label: "Charging",
        value: "USB-C",
      },
      {
        label: "Weight",
        value: "960g",
      },
    ],

    featured: false,

    trending: true,

    isNew: false,

    onSale: true,
  },

  {
    id: 13,

    name: "Logitech MX Master 3S",

    slug: "logitech-mx-master-3s",

    description:
      "Advanced wireless productivity mouse featuring an 8K DPI sensor, MagSpeed scrolling, silent clicks, and multi-device connectivity.",

    shortDescription:
      "Premium wireless productivity mouse.",

    category: getCategory("mice"),

    brand: getBrand("Logitech"),

    price: 9995,

    originalPrice: 11995,

    discountPercentage: 17,

    rating: {
      rate: 4.9,
      count: 3912,
    },

    stock: 54,

    sku: "LOG-MX3S",

    thumbnail:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80",

    images: [
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=1200&q=80",
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=1200&q=80",
      "https://images.unsplash.com/photo-1629429407756-31d2f84c3301?w=1200&q=80",
    ],

    specifications: [
      {
        label: "Sensor",
        value: "8000 DPI",
      },
      {
        label: "Connectivity",
        value: "Bluetooth + USB Receiver",
      },
      {
        label: "Battery",
        value: "70 Days",
      },
      {
        label: "Buttons",
        value: "7 Programmable",
      },
      {
        label: "Charging",
        value: "USB-C",
      },
      {
        label: "Compatibility",
        value: "Windows / macOS / Linux",
      },
    ],

    featured: false,

    trending: true,

    isNew: false,

    onSale: true,
  },

  {
    id: 14,

    name: "Asus ROG Strix G18 Gaming Laptop",

    slug: "asus-rog-strix-g18",

    description:
      "High-performance gaming laptop equipped with Intel Core i9 processor, NVIDIA RTX 4080 graphics, fast refresh display, and advanced cooling technology.",

    shortDescription:
      "Premium gaming laptop with RTX graphics.",

    category: getCategory("laptops"),

    brand: getBrand("Asus"),

    price: 259990,

    originalPrice: 279990,

    discountPercentage: 7,

    rating: {
      rate: 4.8,
      count: 1287,
    },

    stock: 11,

    sku: "ASUS-ROG-G18",

    thumbnail:
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&q=80",

    images: [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=1200&q=80",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1200&q=80",
    ],

    specifications: [
      {
        label: "Display",
        value: '18" QHD 240Hz',
      },
      {
        label: "Processor",
        value: "Intel Core i9",
      },
      {
        label: "Graphics",
        value: "RTX 4080 12GB",
      },
      {
        label: "Memory",
        value: "32GB DDR5",
      },
      {
        label: "Storage",
        value: "2TB SSD",
      },
      {
        label: "Operating System",
        value: "Windows 11",
      },
    ],

    featured: true,

    trending: true,

    isNew: true,

    onSale: true,
  },

  {
    id: 15,

    name: "HP LaserJet Pro MFP 4104fdw",

    slug: "hp-laserjet-pro-mfp-4104fdw",

    description:
      "Business-class multifunction laser printer offering high-speed printing, scanning, copying, duplex printing, Wi-Fi, and enterprise-grade security.",

    shortDescription:
      "Professional multifunction laser printer.",

    category: getCategory("printers"),

    brand: getBrand("HP"),

    price: 38999,

    originalPrice: 42999,

    discountPercentage: 9,

    rating: {
      rate: 4.6,
      count: 812,
    },

    stock: 23,

    sku: "HP-LJ-4104FDW",

    thumbnail:
      "https://images.unsplash.com/photo-1612810806695-30f7a8258391?w=800&q=80",

    images: [
      "https://images.unsplash.com/photo-1612810806695-30f7a8258391?w=1200&q=80",
      "https://images.unsplash.com/photo-1580894908361-967195033215?w=1200&q=80",
      "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=1200&q=80",
    ],

    specifications: [
      {
        label: "Print Speed",
        value: "40 ppm",
      },
      {
        label: "Functions",
        value: "Print / Scan / Copy / Fax",
      },
      {
        label: "Connectivity",
        value: "Wi-Fi, Ethernet, USB",
      },
      {
        label: "Duplex",
        value: "Automatic",
      },
      {
        label: "Paper Size",
        value: "A4",
      },
      {
        label: "Technology",
        value: "Laser",
      },
    ],

    featured: false,

    trending: false,

    isNew: false,

    onSale: true,
  },

    {
    id: 16,

    name: "Lenovo ThinkPad X1 Carbon Gen 12",

    slug: "lenovo-thinkpad-x1-carbon-gen-12",

    description:
      "An ultra-light premium business laptop featuring Intel Core Ultra processors, a stunning OLED display, military-grade durability, and all-day battery life.",

    shortDescription:
      "Premium ultrabook designed for business professionals.",

    category: getCategory("laptops"),

    brand: getBrand("Lenovo"),

    price: 189990,

    originalPrice: 204990,

    discountPercentage: 7,

    rating: {
      rate: 4.8,
      count: 1042,
    },

    stock: 18,

    sku: "LEN-X1C-G12",

    thumbnail:
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=800&q=80",

    images: [
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=1200&q=80",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1200&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=1200&q=80",
    ],

    specifications: [
      {
        label: "Display",
        value: '14" OLED',
      },
      {
        label: "Processor",
        value: "Intel Core Ultra 7",
      },
      {
        label: "Memory",
        value: "32GB LPDDR5X",
      },
      {
        label: "Storage",
        value: "1TB SSD",
      },
      {
        label: "Battery",
        value: "Up to 18 Hours",
      },
      {
        label: "Operating System",
        value: "Windows 11 Pro",
      },
    ],

    featured: false,

    trending: true,

    isNew: true,

    onSale: true,
  },

  {
    id: 17,

    name: "Xiaomi 14 Ultra",

    slug: "xiaomi-14-ultra",

    description:
      "Flagship Android smartphone co-engineered with Leica, offering exceptional camera performance, Snapdragon processor, and a brilliant AMOLED display.",

    shortDescription:
      "Leica-powered premium flagship smartphone.",

    category: getCategory("smartphones"),

    brand: getBrand("Xiaomi"),

    price: 99999,

    originalPrice: 109999,

    discountPercentage: 9,

    rating: {
      rate: 4.7,
      count: 1763,
    },

    stock: 29,

    sku: "XM-14ULTRA",

    thumbnail:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&q=80",

    images: [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=1200&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200&q=80",
      "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=1200&q=80",
    ],

    specifications: [
      {
        label: "Display",
        value: '6.73" AMOLED',
      },
      {
        label: "Processor",
        value: "Snapdragon 8 Gen 3",
      },
      {
        label: "Storage",
        value: "512GB",
      },
      {
        label: "Memory",
        value: "16GB",
      },
      {
        label: "Battery",
        value: "5300mAh",
      },
      {
        label: "Camera",
        value: "50MP Leica Quad Camera",
      },
    ],

    featured: true,

    trending: true,

    isNew: true,

    onSale: true,
  },

  {
    id: 18,

    name: "OnePlus Buds Pro 3",

    slug: "oneplus-buds-pro-3",

    description:
      "Premium true wireless earbuds with adaptive noise cancellation, Hi-Res audio, spatial sound, and long-lasting battery life.",

    shortDescription:
      "Premium ANC true wireless earbuds.",

    category: getCategory("audio"),

    brand: getBrand("OnePlus"),

    price: 11999,

    originalPrice: 13999,

    discountPercentage: 14,

    rating: {
      rate: 4.7,
      count: 2098,
    },

    stock: 61,

    sku: "OP-BUDS-PRO3",

    thumbnail:
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=800&q=80",

    images: [
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=1200&q=80",
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=1200&q=80",
      "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=1200&q=80",
    ],

    specifications: [
      {
        label: "Driver",
        value: "Dual Dynamic Drivers",
      },
      {
        label: "Noise Cancellation",
        value: "Adaptive ANC",
      },
      {
        label: "Battery",
        value: "43 Hours",
      },
      {
        label: "Charging",
        value: "USB-C + Wireless",
      },
      {
        label: "Connectivity",
        value: "Bluetooth 5.4",
      },
      {
        label: "Water Resistance",
        value: "IP55",
      },
    ],

    featured: false,

    trending: true,

    isNew: true,

    onSale: true,
  },

  {
    id: 19,

    name: "Intel Core Ultra 9 285K Processor",

    slug: "intel-core-ultra-9-285k",

    description:
      "Next-generation desktop processor engineered for gaming, AI workloads, professional content creation, and high-performance computing.",

    shortDescription:
      "Flagship desktop processor for enthusiasts.",

    category: getCategory("accessories"),

    brand: getBrand("Intel"),

    price: 64999,

    originalPrice: 69999,

    discountPercentage: 7,

    rating: {
      rate: 4.9,
      count: 947,
    },

    stock: 31,

    sku: "INT-U9-285K",

    thumbnail:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",

    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
      "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=1200&q=80",
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=1200&q=80",
    ],

    specifications: [
      {
        label: "Cores",
        value: "24",
      },
      {
        label: "Threads",
        value: "32",
      },
      {
        label: "Boost Clock",
        value: "5.7GHz",
      },
      {
        label: "Socket",
        value: "LGA1851",
      },
      {
        label: "Cache",
        value: "36MB",
      },
      {
        label: "TDP",
        value: "125W",
      },
    ],

    featured: false,

    trending: false,

    isNew: true,

    onSale: true,
  },

  {
    id: 20,

    name: "AMD Radeon RX 7900 XTX Graphics Card",

    slug: "amd-radeon-rx-7900-xtx",

    description:
      "High-end graphics card delivering exceptional 4K gaming, ray tracing performance, AI acceleration, and next-generation display technologies.",

    shortDescription:
      "Premium graphics card built for 4K gaming.",

    category: getCategory("accessories"),

    brand: getBrand("AMD"),

    price: 104999,

    originalPrice: 114999,

    discountPercentage: 9,

    rating: {
      rate: 4.8,
      count: 1136,
    },

    stock: 14,

    sku: "AMD-RX7900XTX",

    thumbnail:
      "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=800&q=80",

    images: [
      "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=1200&q=80",
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=1200&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
    ],

    specifications: [
      {
        label: "Memory",
        value: "24GB GDDR6",
      },
      {
        label: "Architecture",
        value: "RDNA 3",
      },
      {
        label: "Ray Tracing",
        value: "Supported",
      },
      {
        label: "Power",
        value: "355W",
      },
      {
        label: "Outputs",
        value: "HDMI 2.1 + DisplayPort 2.1",
      },
      {
        label: "PCI Express",
        value: "PCIe 4.0 x16",
      },
    ],

    featured: true,

    trending: true,

    isNew: true,

    onSale: true,
  },
];