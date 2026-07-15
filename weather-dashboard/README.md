# Weather Dashboard

A modern, responsive Weather Dashboard built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS v4**. This project demonstrates the use of **Server Components**, **Client Components**, dynamic routing, and real-time weather data fetching from a public weather API.

---

## Project Overview

The Weather Dashboard allows users to search for cities and view current weather conditions along with detailed weather information and multi-day forecasts. It is designed as a production-ready project that follows modern Next.js App Router best practices.

---

## Objectives

- Learn Server Components and Client Components
- Fetch real-time weather data from an external API
- Build reusable UI components
- Implement responsive layouts
- Practice TypeScript with API responses
- Understand loading and error handling
- Create a modern weather application

---

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- OpenWeatherMap API (or WeatherAPI)
- Next.js Route Handlers
- Lucide React
- React Hook Form
- Zod
- next-themes
- Axios (Optional)
- date-fns
- Motion

---

## Features

### Weather

- Current weather
- Search weather by city
- Current temperature
- Feels like temperature
- Weather condition
- Weather icon
- Humidity
- Wind speed
- Atmospheric pressure
- Visibility
- Sunrise time
- Sunset time

---

### Forecast

- 5-Day Forecast
- Hourly Forecast
- Weather summary
- Dynamic weather icons

---

### User Interface

- Fully responsive design
- Mobile-first layout
- Dark mode
- Light mode
- Glassmorphism UI
- Smooth animations
- Beautiful gradients
- Loading skeletons
- Empty states
- Error pages

---

### Next.js Features

- App Router
- Server Components
- Client Components
- Dynamic Routes
- Route Handlers
- Loading UI
- Error UI
- Metadata
- Image Optimization

---

### TypeScript

- Strongly typed API responses
- Custom interfaces
- Utility types
- Reusable models

---

## Folder Structure

```text
weather-dashboard/
│
├── public/
│   ├── icons/
│   └── images/
│
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── weather/
│   │   │       └── route.ts
│   │   │
│   │   ├── weather/
│   │   │   └── [city]/
│   │   │       ├── page.tsx
│   │   │       ├── loading.tsx
│   │   │       └── error.tsx
│   │   │
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── loading.tsx
│   │   ├── error.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │
│   │   ├── ui/
│   │   │   ├── Badge.tsx
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   └── Spinner.tsx
│   │   │
│   │   ├── EmptyState.tsx
│   │   ├── ForecastCard.tsx
│   │   ├── HourlyForecast.tsx
│   │   ├── Navbar.tsx
│   │   ├── SearchBar.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── WeatherCard.tsx
│   │   ├── WeatherDetails.tsx
│   │   └── WeatherSkeleton.tsx
│   │
│   ├── hooks/
│   │   └── useDebounce.ts
│   │
│   ├── lib/
│   │   ├── constants.ts
│   │   ├── utils.ts
│   │   └── weather.ts
│   │
│   ├── styles/
│   │
│   └── types/
│       └── weather.ts
│
├── .env.local
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

# Project Setup

## Clone Repository

```bash
git clone <repository-url>
```

---

## Navigate to Project

```bash
cd weather-dashboard
```

---

## Install Dependencies

```bash
npm install
```

---

## Install Additional Packages

```bash
npm install clsx tailwind-merge class-variance-authority
```

```bash
npm install lucide-react
```

```bash
npm install next-themes
```

```bash
npm install react-hook-form
```

```bash
npm install zod
```

```bash
npm install @hookform/resolvers
```

```bash
npm install date-fns
```

```bash
npm install motion
```

Optional:

```bash
npm install axios
```

---

## Development Dependencies

```bash
npm install -D prettier prettier-plugin-tailwindcss
```

---

## Environment Variables

Create a `.env.local` file.

```env
WEATHER_API_KEY=your_api_key_here
```

---

## Run Development Server

```bash
npm run dev
```

Open

```
http://localhost:3000
```

---

# Scripts

```bash
npm run dev
```

Starts development server.

---

```bash
npm run build
```

Creates production build.

---

```bash
npm run start
```

Starts production server.

---

```bash
npm run lint
```

Runs ESLint.

---

# Project Phases

## Phase 1

Project Setup

- Next.js installation
- TypeScript
- Tailwind CSS
- Folder structure
- Dependencies

---

## Phase 2

Core Foundation

- Environment variables
- Weather types
- Utility functions
- API helpers

---

## Phase 3

Weather API

- Current weather
- Fetch utilities
- Server Components

---

## Phase 4

User Interface

- Navbar
- Search bar
- Weather card
- Weather details
- Theme toggle

---

## Phase 5

Forecast

- Hourly forecast
- Five-day forecast
- Weather cards
- Dynamic icons

---

## Phase 6

Polish

- Loading UI
- Error pages
- Empty states
- Responsive improvements
- Animations

---

## Phase 7

Finalization

- Performance optimization
- SEO
- README
- Deployment

---

# Concepts Covered

- Next.js App Router
- React Server Components
- React Client Components
- Dynamic Routing
- Route Handlers
- Fetch API
- TypeScript
- Tailwind CSS
- Responsive Design
- Dark Mode
- Loading UI
- Error Handling
- Environment Variables
- Component Architecture
- API Integration
- Reusable Components
- Modern UI Design

---

# Future Improvements

- Current location support
- Air Quality Index
- UV Index
- Weather alerts
- Interactive weather maps
- Favorite cities
- Recent searches
- Multiple unit support (°C / °F)
- Multi-language support
- PWA support
- Offline mode
- Charts and analytics

---

# Learning Outcomes

After completing this project, you will understand:

- Building applications with Next.js App Router
- Using Server and Client Components together
- Fetching data from external APIs
- Managing TypeScript models
- Structuring scalable Next.js applications
- Creating reusable UI components
- Implementing responsive layouts
- Handling loading and error states
- Building production-ready React applications

---

# Author

**Ashish Sharma**

Software Developer

GitHub: https://github.com/Ashu11122000

LinkedIn: https://www.linkedin.com/in/ashish-sharma-383439191/

---

# License

This project is created for educational and assignment purposes.