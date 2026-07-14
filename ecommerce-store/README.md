# E-commerce Store

A modern, responsive, and high-performance E-commerce web application built with **Next.js App Router**, **TypeScript**, and **Tailwind CSS**. This project demonstrates modern Next.js development practices while focusing on performance, scalability, and clean architecture.

The application allows users to browse products, explore categories, search products with instant filtering, and view detailed product information through dynamic routes. It is designed as a frontend-focused e-commerce experience using local datasets, making it lightweight and fast without requiring a backend or database.

The primary goal of this project is to implement essential Next.js App Router concepts in a real-world application while maintaining production-level code quality and an organized project structure.

---

# Project Goals

- Build a modern E-commerce Store using Next.js App Router.
- Demonstrate Dynamic Routing for individual product pages.
- Implement responsive layouts for desktop, tablet, and mobile devices.
- Optimize images using the Next.js Image component.
- Create a fast and intuitive product search experience.
- Organize products into categories with dedicated category pages.
- Follow scalable folder architecture and reusable component design.
- Keep rendering performance as fast as possible using Server Components whenever possible.
- Write clean, maintainable, and strongly typed TypeScript code.

---

# Features

## General

- Modern and responsive UI
- Mobile-first design
- Fully responsive navigation
- Clean and reusable component architecture
- Optimized layouts using App Router
- Fast page rendering
- Type-safe development using TypeScript

---

## Home Page

- Hero Banner
- Featured Products
- Product Categories
- Trending Products
- Newsletter Section
- Responsive Product Grid

---

## Products

- View all available products
- Responsive product grid
- Product cards
- Product badges
- Product ratings
- Product pricing
- Optimized product images

---

## Product Details

- Dynamic Product Pages
- Product Image Gallery
- Product Information
- Product Description
- Product Specifications
- Product Ratings
- Related Products
- Category Information

---

## Categories

- Browse all categories
- Dynamic Category Pages
- Products filtered by category
- Category cards

---

## Search

- Search directly from the navigation bar
- Debounced search input
- Instant search filtering
- URL Query Parameters
- Responsive search interface
- Search filters

---

## User Experience

- Loading UI
- Error UI
- Custom 404 Page
- Empty State Components
- Skeleton Loaders
- Responsive Layout
- Optimized Images
- Accessibility Friendly

---

# Assignment Requirements Covered

| Assignment Requirement | Implementation |
|------------------------|----------------|
| Build an E-commerce Product Page | Dynamic Product Pages using App Router |
| Dynamic Routing | `/products/[id]` |
| Product Details | Individual product pages |
| Create a Search Interface | Search bar with debounced input |
| URL Query Parameters | Search state managed using URL parameters |
| Image Optimization | Next.js `next/image` component |
| Responsive Design | Mobile, Tablet, Desktop layouts |
| Server Components | Default rendering strategy |
| Client Components | Search functionality and interactive UI |
| Error Handling | Error boundaries and custom error pages |
| Loading States | Route loading components |

---

# Tech Stack

## Framework

- Next.js 16 (App Router)

## Language

- TypeScript

## Styling

- Tailwind CSS

## UI

- Lucide React
- CSS Modules (where required)

## Utilities

- clsx
- tailwind-merge
- class-variance-authority

## Forms & Validation

- React Hook Form
- Zod
- @hookform/resolvers

## Animations

- Framer Motion

## Notifications

- React Hot Toast

## Development Tools

- ESLint
- Prettier
- Turbopack

---

# Performance Strategy

The project is designed with performance as the highest priority.

### Server Components by Default

Most pages are rendered as Server Components to minimize JavaScript sent to the browser.

### Client Components Only Where Needed

Interactive features such as:

- Search
- Search Filters
- Mobile Navigation

are implemented as Client Components.

### Image Optimization

All images are rendered using the Next.js Image component with:

- Lazy Loading
- Responsive Images
- Optimized Formats
- Automatic Sizing

### Static Data

Products and categories are stored locally to achieve fast page rendering without database requests.

### Code Splitting

Next.js automatically splits JavaScript bundles to improve loading performance.

---

# Project Structure Overview

```text
ecommerce-store/
│
├── public/
│   ├── images/
│   │   ├── products/
│   │   ├── categories/
│   │   ├── banners/
│   │   ├── brands/
│   │   └── logo/
│   │
│   ├── icons/
│   ├── favicon.ico
│   ├── manifest.json
│   └── robots.txt
│
├── src/
│
│   ├── app/
│   │
│   │   ├── (shop)/
│   │   │
│   │   │── layout.tsx
│   │   │── page.tsx                 // Home
│   │   │
│   │   │── products/
│   │   │   ├── page.tsx
│   │   │   ├── loading.tsx
│   │   │   ├── error.tsx
│   │   │   │
│   │   │   └── [id]/
│   │   │       ├── page.tsx
│   │   │       ├── loading.tsx
│   │   │       └── not-found.tsx
│   │   │
│   │   │── categories/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │
│   │   ├── api/
│   │   │   └── products/
│   │   │       └── route.ts
│   │
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── loading.tsx
│   │   ├── error.tsx
│   │   └── not-found.tsx
│
│   ├── components/
│   │
│   │   ├── common/
│   │   │   ├── Badge.tsx
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Container.tsx
│   │   │   ├── EmptyState.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── SearchInput.tsx
│   │   │   ├── SectionHeading.tsx
│   │   │   ├── Skeleton.tsx
│   │   │   └── Spinner.tsx
│   │
│   │   ├── layout/
│   │   │   ├── Footer.tsx
│   │   │   ├── Logo.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   └── Navbar.tsx
│   │
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── FeaturedProducts.tsx
│   │   │   ├── Categories.tsx
│   │   │   ├── TrendingProducts.tsx
│   │   │   └── Newsletter.tsx
│   │
│   │   ├── product/
│   │   │   ├── CategoryCard.tsx
│   │   │   ├── ProductCard.tsx
│   │   │   ├── ProductGrid.tsx
│   │   │   ├── ProductGallery.tsx
│   │   │   ├── ProductInfo.tsx
│   │   │   ├── ProductDescription.tsx
│   │   │   ├── ProductPrice.tsx
│   │   │   ├── ProductRating.tsx
│   │   │   ├── ProductSpecifications.tsx
│   │   │   └── RelatedProducts.tsx
│   │
│   │   └── search/
│   │       ├── SearchBar.tsx
│   │       ├── SearchResults.tsx
│   │       └── SearchFilters.tsx
│
│   ├── constants/
│   │   ├── routes.ts
│   │   ├── site.ts
│   │   └── theme.ts
│
│   ├── data/
│   │   ├── brands.ts
│   │   ├── categories.ts
│   │   ├── navigation.ts
│   │   └── products.ts
│
│   ├── hooks/
│   │   ├── useDebounce.ts
│   │   ├── useLocalStorage.ts
│   │   └── useSearch.ts
│
│   ├── lib/
│   │   ├── constants.ts
│   │   ├── metadata.ts
│   │   └── utils.ts
│
│   ├── styles/
│   │   └── animations.css
│
│   └── types/
│       ├── category.ts
│       ├── common.ts
│       └── product.ts
│
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

---

# Architecture Overview

The project follows a modular architecture where each feature is isolated into its own directory.

- **App Router** manages routing and layouts.
- **Components** contain reusable UI elements.
- **Data** stores local product and category datasets.
- **Hooks** manage reusable client-side logic.
- **Types** provide shared TypeScript interfaces.
- **Constants** centralize application configuration.
- **Utilities** contain helper functions.
- **Styles** store global animations and custom styles.

This structure keeps the codebase scalable, maintainable, and easy to extend as new features are added throughout the development phases.

---

# Installation

## Prerequisites

Before running this project, make sure the following software is installed on your machine.

### Required

- Node.js (v20 or later)
- npm (v10 or later)
- Git
- Visual Studio Code (Recommended)

---

## Clone the Repository

```bash
git clone https://github.com/your-username/ecommerce-store.git
```

Move into the project directory.

```bash
cd ecommerce-store
```

---

## Install Dependencies

```bash
npm install
```

---

## Start Development Server

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:3000
```

---

## Build for Production

```bash
npm run build
```

---

## Start Production Server

```bash
npm run start
```

---

## Lint Project

```bash
npm run lint
```

---

# Dependencies

## Core Dependencies

| Package | Purpose |
|----------|----------|
| next | React Framework |
| react | User Interface Library |
| react-dom | React DOM Rendering |
| typescript | Static Type Checking |
| tailwindcss | Utility-first CSS Framework |

---

## UI Components

| Package | Purpose |
|----------|----------|
| lucide-react | Icons |
| clsx | Conditional Class Names |
| tailwind-merge | Merge Tailwind Classes |
| class-variance-authority | Component Variants |

---

## Forms & Validation

| Package | Purpose |
|----------|----------|
| react-hook-form | Form Management |
| zod | Schema Validation |
| @hookform/resolvers | React Hook Form + Zod Integration |

---

## Animation

| Package | Purpose |
|----------|----------|
| framer-motion | Animations |

---

## Notifications

| Package | Purpose |
|----------|----------|
| react-hot-toast | Toast Notifications |

---

## Development Dependencies

| Package | Purpose |
|----------|----------|
| eslint | Code Linting |
| prettier | Code Formatting |
| prettier-plugin-tailwindcss | Tailwind Class Sorting |

---

# Installation Commands

## Create Next.js Project

```bash
npx create-next-app@latest ecommerce-store
```

Select the following options:

```text
✔ TypeScript → Yes
✔ ESLint → Yes
✔ Tailwind CSS → Yes
✔ src/ Directory → Yes
✔ App Router → Yes
✔ Turbopack → Yes
✔ Import Alias → @/*
```

---

## Install Required Packages

```bash
npm install \
lucide-react \
clsx \
tailwind-merge \
class-variance-authority \
react-hook-form \
zod \
@hookform/resolvers \
framer-motion \
react-hot-toast
```

---

## Install Development Packages

```bash
npm install -D prettier prettier-plugin-tailwindcss
```

---

# Available Scripts

| Script | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Run production build |
| `npm run lint` | Check code quality |

---

# Project Configuration

## TypeScript

The project uses strict TypeScript configuration to improve code quality and maintainability.

Configuration file:

```text
tsconfig.json
```

---

## Tailwind CSS

Tailwind CSS is used for styling throughout the application.

Configuration:

```text
tailwind.config.ts
```

---

## ESLint

ESLint is configured to maintain consistent coding standards.

Configuration:

```text
eslint.config.mjs
```

---

## Next.js

The project uses the latest Next.js App Router architecture.

Configuration:

```text
next.config.ts
```

---

# Environment Variables

This project currently does not require any environment variables because it uses local datasets for products and categories.

If you later integrate an external API or backend service, create a `.env.local` file in the project root.

Example:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

> This file should never be committed to version control.

---

# Folder Structure

```text
ecommerce-store/
│
├── public/
│   ├── images/
│   │   ├── products/          # Product Images
│   │   ├── categories/        # Category Images
│   │   ├── banners/           # Hero Banners
│   │   ├── brands/            # Brand Logos
│   │   └── logo/              # Website Logo
│   │
│   ├── icons/                 # Custom Icons
│   ├── favicon.ico
│   ├── manifest.json
│   └── robots.txt
│
├── src/
│
│   ├── app/                   # App Router
│   ├── components/            # Reusable Components
│   ├── constants/             # Application Constants
│   ├── data/                  # Static Data
│   ├── hooks/                 # Custom Hooks
│   ├── lib/                   # Utilities
│   ├── styles/                # Global Styles
│   └── types/                 # TypeScript Types
│
├── package.json
├── tsconfig.json
├── next.config.ts
├── eslint.config.mjs
├── postcss.config.mjs
└── README.md
```

---

# Folder Responsibilities

## `public/`

Contains all static assets served directly by Next.js.

Examples:

- Product Images
- Category Images
- Brand Logos
- Hero Banners
- Icons

---

## `src/app/`

Contains all pages, layouts, loading states, error pages, API routes, and routing logic using the App Router.

---

## `src/components/`

Contains reusable UI components organized by feature.

Examples:

- Layout Components
- Product Components
- Home Components
- Common Components
- Search Components

---

## `src/constants/`

Stores application-wide constants.

Examples:

- Routes
- Theme Settings
- Site Configuration

---

## `src/data/`

Stores static datasets.

Examples:

- Products
- Categories
- Brands
- Navigation

---

## `src/hooks/`

Contains reusable custom React hooks.

Examples:

- Search Logic
- Debounce
- Local Storage

---

## `src/lib/`

Contains shared utility functions.

Examples:

- Helper Functions
- Metadata
- Constants

---

## `src/styles/`

Stores additional global CSS and custom animations.

---

## `src/types/`

Contains shared TypeScript interfaces and types used across the application.

---

# Coding Standards

The project follows the following conventions:

- TypeScript for type safety.
- Functional React Components.
- Server Components by default.
- Client Components only for interactive features.
- Reusable and modular component architecture.
- Feature-based folder organization.
- Consistent naming conventions.
- Responsive-first UI development.
- Performance-focused implementation.
- Clean and maintainable code structure.

---

# App Router Structure

The project is built using the **Next.js App Router**, which provides a modern file-based routing system. Each folder inside the `app` directory automatically becomes a route, while special files such as `layout.tsx`, `loading.tsx`, and `error.tsx` define shared layouts and route behavior.

The application uses a **route group** named `(shop)` to organize all customer-facing pages without affecting the URL structure.

---

# App Directory Structure

```text
app/
│
├── (shop)/
│   ├── layout.tsx
│   ├── page.tsx
│   │
│   ├── products/
│   │   ├── page.tsx
│   │   ├── loading.tsx
│   │   ├── error.tsx
│   │   └── [id]/
│   │       ├── page.tsx
│   │       ├── loading.tsx
│   │       └── not-found.tsx
│   │
│   └── categories/
│       ├── page.tsx
│       └── [slug]/
│           └── page.tsx
│
├── api/
│   └── products/
│       └── route.ts
│
├── favicon.ico
├── globals.css
├── layout.tsx
├── loading.tsx
├── error.tsx
└── not-found.tsx
```

---

# Routing Overview

| Route | Description |
|--------|-------------|
| `/` | Home Page |
| `/products` | Displays all available products |
| `/products/[id]` | Displays a single product using a dynamic route |
| `/categories` | Displays all product categories |
| `/categories/[slug]` | Displays products belonging to a selected category |

---

# Root Layout

**File**

```text
src/app/layout.tsx
```

## Responsibility

The root layout wraps the entire application.

It is responsible for:

- HTML document structure
- Global metadata
- Global styles
- Fonts
- Theme initialization
- Shared providers (if added later)

Every page inside the application inherits this layout.

---

# Shop Layout

**File**

```text
src/app/(shop)/layout.tsx
```

## Responsibility

The shop layout is shared by all customer-facing pages.

It renders:

- Navbar
- Main Content
- Footer

This avoids repeating the layout on every page.

Example hierarchy:

```text
Root Layout
      │
      ▼
Shop Layout
      │
      ▼
Current Page
```

---

# Home Page

**File**

```text
src/app/(shop)/page.tsx
```

**URL**

```text
/
```

## Responsibility

Acts as the landing page of the store.

Contains:

- Hero Banner
- Featured Products
- Categories
- Trending Products
- Newsletter
- Footer

Rendering Strategy:

- Server Component

---

# Products Page

**File**

```text
src/app/(shop)/products/page.tsx
```

**URL**

```text
/products
```

## Responsibility

Displays every product available in the store.

Contains:

- Search Input
- Search Results
- Product Grid
- Category Filter
- Product Cards

Rendering Strategy:

- Server Component

---

# Product Details

**Directory**

```text
products/[id]
```

Example URL

```text
/products/1

/products/15

/products/102
```

The `[id]` folder represents a **dynamic route**.

Each product page is generated automatically based on the product ID.

---

## Product Details Page

**File**

```text
products/[id]/page.tsx
```

Displays:

- Product Gallery
- Product Information
- Product Description
- Product Specifications
- Rating
- Related Products

Rendering Strategy:

- Server Component

---

## Product Loading

**File**

```text
products/[id]/loading.tsx
```

Displays:

- Skeleton UI
- Placeholder Components

while the product page loads.

---

## Product Not Found

**File**

```text
products/[id]/not-found.tsx
```

Displayed when:

- Product ID does not exist
- Invalid route is accessed

Example

```text
/products/99999
```

---

# Categories Page

**File**

```text
categories/page.tsx
```

**URL**

```text
/categories
```

Displays

- All Categories
- Category Cards

Rendering Strategy

- Server Component

---

# Dynamic Category Route

**Directory**

```text
categories/[slug]
```

Example URLs

```text
/categories/electronics

/categories/shoes

/categories/laptops

/categories/accessories
```

Each slug represents a category.

The page filters products according to the selected category.

Rendering Strategy

- Server Component

---

# API Routes

The application also contains API Routes using the App Router.

Directory

```text
app/api/products
```

---

## Products API

**File**

```text
api/products/route.ts
```

Example endpoint

```text
/api/products
```

Purpose

- Return all products
- Simulate backend responses
- Useful for client-side fetching examples
- Keeps frontend architecture close to a real production project

---

# Loading UI

## Root Loading

**File**

```text
src/app/loading.tsx
```

Displayed while the application is loading.

Typical usage:

- Spinner
- Skeleton
- Logo Animation

---

## Products Loading

**File**

```text
products/loading.tsx
```

Displays:

- Product Grid Skeleton
- Placeholder Cards

during page transitions.

---

# Error Handling

## Root Error

**File**

```text
src/app/error.tsx
```

Handles unexpected runtime errors.

Displays:

- Friendly error message
- Retry Button
- Navigation back to Home

---

## Products Error

**File**

```text
products/error.tsx
```

Handles product-related rendering errors.

Examples:

- Failed data loading
- Invalid product state
- Rendering exceptions

---

# Custom 404 Page

**File**

```text
src/app/not-found.tsx
```

Shown whenever the requested route does not exist.

Example

```text
/abc

/products/xyz

/categories/random-category
```

Displays

- 404 Illustration
- Error Message
- Return Home Button

---

# Rendering Strategy

| Route | Rendering |
|--------|-----------|
| Home | Server Component |
| Products | Server Component |
| Product Details | Server Component |
| Categories | Server Component |
| Category Details | Server Component |

---

# Client Components

Only interactive features are implemented as Client Components.

Examples include:

- Search Bar
- Search Filters
- Mobile Menu
- Product Image Gallery (if interactive)

Keeping the majority of pages as **Server Components** reduces client-side JavaScript and improves initial page load performance.

---

# Navigation Flow

```text
Home
│
├── Products
│      │
│      ├── Product Details
│      │
│      └── Search Products
│
└── Categories
       │
       └── Category Details
```

This routing structure keeps the application simple, scalable, and optimized while showcasing the key Next.js App Router concepts required for the assignment.

---

````md
# Components Structure

The application follows a feature-based component architecture where reusable UI elements are grouped according to their responsibility. This keeps the project organized, scalable, and easy to maintain as new features are added.

---

# Components Directory

```text
components/
│
├── common/
├── layout/
├── home/
├── product/
└── search/
```

Each directory contains components related to a specific feature.

---

# Common Components

Directory

```text
components/common/
```

These components are reusable throughout the entire application.

```text
common/
│
├── Badge.tsx
├── Button.tsx
├── Card.tsx
├── Container.tsx
├── EmptyState.tsx
├── Input.tsx
├── SearchInput.tsx
├── SectionHeading.tsx
├── Skeleton.tsx
└── Spinner.tsx
```

---

## Badge

```text
Badge.tsx
```

Displays reusable badges.

Examples

- New
- Sale
- Trending
- Best Seller
- Out of Stock

---

## Button

```text
Button.tsx
```

Reusable button component.

Supports different variants such as

- Primary
- Secondary
- Outline
- Ghost
- Icon Button

---

## Card

```text
Card.tsx
```

Reusable container used for

- Product Cards
- Category Cards
- Feature Sections

---

## Container

```text
Container.tsx
```

Provides consistent page width and spacing.

Used on almost every page.

---

## EmptyState

```text
EmptyState.tsx
```

Displayed whenever data is unavailable.

Examples

- No Products Found
- No Search Results
- Empty Category

---

## Input

```text
Input.tsx
```

Reusable input component.

Used in

- Search
- Forms
- Filters

---

## SearchInput

```text
SearchInput.tsx
```

Specialized input component for searching products.

Supports

- Debounced Input
- Clear Button
- Search Icon

---

## SectionHeading

```text
SectionHeading.tsx
```

Reusable section title component.

Examples

- Featured Products
- Categories
- Trending Products

---

## Skeleton

```text
Skeleton.tsx
```

Reusable loading placeholder.

Used during

- Product Loading
- Category Loading
- Page Loading

---

## Spinner

```text
Spinner.tsx
```

Displays loading spinner during asynchronous operations.

---

# Layout Components

Directory

```text
components/layout/
```

```text
layout/
│
├── Footer.tsx
├── Logo.tsx
├── MobileMenu.tsx
└── Navbar.tsx
```

---

## Navbar

```text
Navbar.tsx
```

Primary navigation component.

Contains

- Logo
- Navigation Links
- Search Bar
- Mobile Menu Toggle

---

## Logo

```text
Logo.tsx
```

Displays the application logo.

Used inside

- Navbar
- Footer

---

## Mobile Menu

```text
MobileMenu.tsx
```

Responsive navigation for smaller devices.

---

## Footer

```text
Footer.tsx
```

Displays

- Store Information
- Quick Links
- Copyright
- Social Links

---

# Home Components

Directory

```text
components/home/
```

```text
home/
│
├── Categories.tsx
├── FeaturedProducts.tsx
├── Hero.tsx
├── Newsletter.tsx
└── TrendingProducts.tsx
```

---

## Hero

```text
Hero.tsx
```

Top section of the home page.

Contains

- Promotional Banner
- CTA Button
- Featured Image

---

## Categories

```text
Categories.tsx
```

Displays featured product categories.

---

## Featured Products

```text
FeaturedProducts.tsx
```

Displays highlighted products.

Examples

- Popular
- New Arrivals
- Best Sellers

---

## Trending Products

```text
TrendingProducts.tsx
```

Displays trending products based on predefined data.

---

## Newsletter

```text
Newsletter.tsx
```

Displays a newsletter subscription section.

Used as a UI section only.

---

# Product Components

Directory

```text
components/product/
```

```text
product/
│
├── CategoryCard.tsx
├── ProductCard.tsx
├── ProductDescription.tsx
├── ProductGallery.tsx
├── ProductGrid.tsx
├── ProductInfo.tsx
├── ProductPrice.tsx
├── ProductRating.tsx
├── ProductSpecifications.tsx
└── RelatedProducts.tsx
```

---

## ProductCard

Displays a single product.

Contains

- Product Image
- Product Name
- Rating
- Price
- Badge

---

## ProductGrid

Displays all products using a responsive CSS Grid layout.

---

## ProductGallery

Displays product images.

Supports

- Thumbnail Images
- Main Preview
- Responsive Images

---

## ProductInfo

Displays

- Product Title
- Brand
- Availability
- Category

---

## ProductPrice

Displays

- Original Price
- Discount
- Final Price

---

## ProductRating

Displays

- Average Rating
- Review Count
- Star Icons

---

## ProductDescription

Displays detailed product information.

Examples

- Features
- Materials
- Warranty
- Product Overview

---

## ProductSpecifications

Displays technical specifications.

Example

| Property | Value |
|----------|-------|
| Brand | Apple |
| Display | OLED |
| Battery | 5000mAh |

---

## RelatedProducts

Displays products from the same category.

---

## CategoryCard

Displays category information.

Contains

- Category Image
- Category Name
- Product Count

---

# Search Components

Directory

```text
components/search/
```

```text
search/
│
├── SearchBar.tsx
├── SearchFilters.tsx
└── SearchResults.tsx
```

---

## SearchBar

Handles product searching.

Features

- Debounced Input
- Search Icon
- Clear Search
- URL Query Parameters

---

## SearchFilters

Provides filtering options.

Examples

- Category
- Brand
- Price Range

---

## SearchResults

Displays filtered products based on the user's search query.

---

# Data Layer

Directory

```text
data/
```

```text
data/
│
├── brands.ts
├── categories.ts
├── navigation.ts
└── products.ts
```

The project currently uses static datasets to keep rendering fast and eliminate the need for a backend.

---

## products.ts

Stores all product information.

Examples

- Product Name
- Price
- Images
- Description
- Category
- Rating

---

## categories.ts

Stores available product categories.

---

## brands.ts

Stores available product brands.

---

## navigation.ts

Stores navigation links displayed in the Navbar and Footer.

---

# Hooks

Directory

```text
hooks/
```

```text
hooks/
│
├── useDebounce.ts
├── useLocalStorage.ts
└── useSearch.ts
```

---

## useDebounce

Delays search execution while the user is typing to improve performance and reduce unnecessary filtering.

---

## useSearch

Contains reusable product search logic.

Responsibilities include

- Filtering Products
- Search by Name
- Search by Category
- Search by Brand
- URL Query Synchronization

---

## useLocalStorage

Provides helper functions for storing and retrieving local data.

Can be extended later for

- Theme
- Wishlist
- Recently Viewed Products

---

# Constants

Directory

```text
constants/
```

```text
constants/
│
├── routes.ts
├── site.ts
└── theme.ts
```

---

## routes.ts

Stores all application routes.

---

## site.ts

Stores application configuration.

Examples

- Website Name
- Description
- Default Metadata
- Navigation Title

---

## theme.ts

Stores reusable design constants.

Examples

- Colors
- Border Radius
- Shadows
- Animation Durations

---

# Types

Directory

```text
types/
```

```text
types/
│
├── category.ts
├── common.ts
└── product.ts
```

---

## product.ts

Defines the Product interface used throughout the application.

---

## category.ts

Defines the Category interface.

---

## common.ts

Contains reusable shared types.

Examples

- API Response
- Navigation Item
- Select Option

---

# Utilities

Directory

```text
lib/
```

```text
lib/
│
├── constants.ts
├── metadata.ts
└── utils.ts
```

---

## utils.ts

Contains reusable helper functions.

Examples

- Class Name Merge
- Price Formatting
- Rating Formatting
- Slug Generation

---

## metadata.ts

Centralizes page metadata generation for SEO.

Includes

- Title
- Description
- Open Graph
- Twitter Metadata

---

## constants.ts

Stores shared utility constants.

Examples

- Pagination Size
- Maximum Search Results
- Default Currency
- Image Placeholder

---

# Component Design Principles

The application follows these principles:

- Small and focused components
- Feature-based organization
- Reusable UI elements
- Strong TypeScript typing
- Server Components by default
- Client Components only for interactive features
- Consistent naming conventions
- Easy scalability and maintainability
````

---

````md
# Development Phases

The project is divided into multiple development phases to ensure a structured, maintainable, and scalable implementation. Each phase builds upon the previous one while keeping the application functional throughout development.

---

# Phase 1 — Project Setup

## Objective

Initialize the project with the required technologies, configure the development environment, and establish the project architecture.

---

## Tasks

### Create the Project

- Initialize a Next.js project using the App Router.
- Configure TypeScript.
- Enable Tailwind CSS.
- Configure ESLint.
- Enable Turbopack.
- Configure import aliases.

---

### Install Dependencies

Install all required packages.

Core Packages

- Next.js
- React
- TypeScript
- Tailwind CSS

UI Packages

- Lucide React
- clsx
- tailwind-merge
- class-variance-authority

Forms

- React Hook Form
- Zod
- @hookform/resolvers

Animations

- Framer Motion

Notifications

- React Hot Toast

Development

- ESLint
- Prettier
- prettier-plugin-tailwindcss

---

### Configure Project

Set up

- Fonts
- Global CSS
- Theme Colors
- Utility Functions
- Metadata
- Folder Structure
- Routing Constants

---

### Create Directory Structure

Create all project folders.

```text
app/
components/
constants/
data/
hooks/
lib/
styles/
types/
public/images/
```

---

### Prepare Static Data

Create

```text
products.ts

categories.ts

brands.ts

navigation.ts
```

---

### Define TypeScript Types

Create

```text
product.ts

category.ts

common.ts
```

---

### Configure Utilities

Create

```text
utils.ts

metadata.ts

constants.ts
```

---

### Expected Outcome

At the end of Phase 1:

- Project setup is complete.
- Folder structure is established.
- Dependencies are installed.
- Static datasets are ready.
- Utilities and types are configured.
- Development environment is fully configured.

---

# Phase 2 — Reusable Components

## Objective

Develop reusable UI components that will be shared across the application.

---

## Components

### Common Components

Create

```text
Badge

Button

Card

Container

EmptyState

Input

SearchInput

SectionHeading

Skeleton

Spinner
```

---

### Component Responsibilities

#### Button

Reusable button component supporting multiple variants.

Examples

- Primary
- Secondary
- Outline
- Ghost

---

#### Card

Reusable card container used by

- Product Cards
- Category Cards
- Featured Sections

---

#### Badge

Reusable badge component.

Examples

- New
- Sale
- Trending
- Best Seller

---

#### Input

Reusable input field.

---

#### SearchInput

Reusable search component supporting

- Search Icon
- Debounced Input
- Clear Button

---

#### Container

Provides consistent page width and spacing.

---

#### SectionHeading

Reusable section titles.

Examples

- Featured Products
- Categories
- Trending Products

---

#### Spinner

Loading indicator.

---

#### Skeleton

Placeholder loading UI.

---

#### EmptyState

Displayed when no content is available.

Examples

- No Products
- No Categories
- No Search Results

---

### Expected Outcome

At the end of Phase 2:

- Every reusable component is complete.
- Components are responsive.
- Components are reusable.
- Components are fully typed.

---

# Phase 3 — Shared Layout

## Objective

Build the shared application layout that will be used across all pages.

---

## Root Layout

Create

```text
layout.tsx
```

Responsibilities

- HTML Structure
- Metadata
- Global CSS
- Fonts

---

## Shop Layout

Create

```text
(shop)/layout.tsx
```

Responsibilities

- Navbar
- Footer
- Main Layout
- Responsive Structure

---

## Navbar

Create

```text
Navbar.tsx
```

Features

- Logo
- Navigation Links
- Search Bar
- Mobile Menu

---

## Logo

Reusable website logo.

---

## Mobile Menu

Responsive navigation drawer for smaller devices.

---

## Footer

Contains

- Quick Links
- Copyright
- Social Links
- Store Information

---

## Global Pages

Create

```text
loading.tsx

error.tsx

not-found.tsx
```

---

### Loading

Displays loading state during navigation.

---

### Error

Handles unexpected runtime errors.

---

### Not Found

Displays custom 404 page.

---

### Expected Outcome

At the end of Phase 3:

- Shared layout is complete.
- Navigation is fully functional.
- Footer is responsive.
- Global loading and error handling are implemented.

---

# Phase 4 — Home Page

## Objective

Develop the landing page that showcases products, categories, and featured content.

---

## Home Route

```text
/
```

---

## Home Components

Create

```text
Hero

Categories

FeaturedProducts

TrendingProducts

Newsletter
```

---

## Hero Section

Displays

- Promotional Banner
- Heading
- Description
- Call-to-Action Button
- Hero Image

---

## Categories Section

Displays

- Category Cards
- Category Images
- Product Counts

---

## Featured Products

Displays selected products.

Each product card includes

- Product Image
- Product Name
- Category
- Price
- Rating
- Badge

---

## Trending Products

Displays trending or popular products.

---

## Newsletter

Displays

- Newsletter Heading
- Email Input
- Subscribe Button

Used as a UI section for demonstration purposes.

---

## Home Page Flow

```text
Navbar

↓

Hero Banner

↓

Categories

↓

Featured Products

↓

Trending Products

↓

Newsletter

↓

Footer
```

---

## Expected Outcome

At the end of Phase 4:

- Home page is fully responsive.
- Hero section is complete.
- Categories are displayed.
- Featured products are visible.
- Trending products are displayed.
- Newsletter section is implemented.
- Navigation and footer integrate seamlessly with the page.

---

# Phase 1–4 Completion Checklist

## Phase 1

- Project initialized
- Dependencies installed
- Folder structure created
- Types defined
- Static data prepared
- Utilities configured

---

## Phase 2

- Common components completed
- Fully reusable UI components
- Responsive design implemented

---

## Phase 3

- Root layout completed
- Shop layout completed
- Navbar completed
- Footer completed
- Mobile menu completed
- Loading page completed
- Error page completed
- Not Found page completed

---

## Phase 4

- Home page completed
- Hero section completed
- Categories section completed
- Featured products completed
- Trending products completed
- Newsletter section completed
- Responsive layout verified
````

---