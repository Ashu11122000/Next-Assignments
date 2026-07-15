This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or# Static Blog & Documentation Site

A simple assignment project built with **Next.js App Router**, **TypeScript**, **Tailwind CSS**, and **Markdown**. The project demonstrates how to create a static blog using **Static Site Generation (SSG)** and a documentation website using **nested layouts** and a **persistent sidebar**.

## Project Objectives

This project fulfills the following assignment requirements:

* Create a Static Blog using Markdown files.
* Use Static Site Generation (SSG) for fast page loading.
* Build a Documentation Site using nested layouts.
* Organize documentation with a persistent sidebar.
* Keep the application simple while following modern Next.js best practices.

---

# Tech Stack

* Next.js (Latest)
* React
* TypeScript
* Tailwind CSS
* App Router
* Markdown
* gray-matter
* remark
* remark-html

---

# Features

## Blog

* Static blog posts
* Markdown content
* Dynamic routes
* Static Site Generation (SSG)
* Blog listing page
* Individual blog pages

## Documentation

* Documentation homepage
* Nested layouts
* Persistent sidebar navigation
* Markdown documentation pages
* Organized documentation structure

## UI

* Responsive navigation bar
* Responsive footer
* Sidebar navigation
* Blog cards
* Clean and minimal design
* Mobile-friendly layout

---

# Folder Structure

```text
static-blog-docs/
│
├── content/
│   ├── blog/
│   │   ├── first-post.md
│   │   ├── second-post.md
│   │   └── third-post.md
|   |   └── fourth-post.md
|   |   └── fifth-post.md   
|   |
│   │
│   └── docs/
│       ├── getting-started.md
│       ├── installation.md
│       └── project-structure.md
│
├── public/
│
├── src/
│   ├── app/
│   │   ├── blog/
│   │   │   ├── [slug]/
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   │
│   │   ├── docs/
│   │   │   ├── [slug]/
│   │   │   │   └── page.tsx
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   │
│   │   ├── about/
│   │   │   └── page.tsx
│   │   │
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Sidebar.tsx
│   │   ├── BlogCard.tsx
│   │   └── Markdown.tsx
│   │
│   ├── lib/
│   │   ├── blog.ts
│   │   ├── docs.ts
│   │   └── markdown.ts
│   │
│   ├── types/
│   │   └── post.ts
│   │
│   └── utils/
│
├── .gitignore
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

# Project Pages

| Route        | Description          |
| ------------ | -------------------- |
| /            | Home Page            |
| /blog        | Blog Listing         |
| /blog/[slug] | Individual Blog Post |
| /docs        | Documentation Home   |
| /docs/[slug] | Documentation Page   |
| /about       | About Page           |

---

# Installation

## Clone the Repository

```bash
git clone <repository-url>
```

## Navigate to the Project

```bash
cd static-blog-docs
```

## Install Dependencies

```bash
npm install
```

## Start Development Server

```bash
npm run dev
```

Visit:

```
http://localhost:3000
```

---

# Project Dependencies

```json
{
  "gray-matter": "latest",
  "remark": "latest",
  "remark-html": "latest"
}
```

---

# Development Phases

## Phase 1 — Project Setup

### Objectives

* Create Next.js project
* Configure TypeScript
* Configure Tailwind CSS
* Configure ESLint
* Enable App Router
* Install Markdown dependencies
* Create project folder structure

### Deliverables

* Working Next.js application
* Initial project configuration
* Organized folder structure

---

## Phase 2 — Markdown Integration

### Objectives

* Create Markdown content folders
* Read Markdown files
* Parse frontmatter
* Convert Markdown to HTML
* Define TypeScript types
* Create utility functions

### Deliverables

* Markdown parser
* Blog utilities
* Documentation utilities
* Shared data types

---

## Phase 3 — Shared Components

### Objectives

* Build Navbar
* Build Footer
* Build Sidebar
* Build Blog Card
* Build Markdown Renderer
* Improve responsive layout

### Deliverables

* Reusable UI components
* Responsive navigation
* Shared layout components

---

## Phase 4 — Static Blog

### Objectives

* Display all blog posts
* Generate blog pages using SSG
* Implement dynamic routes
* Read Markdown blog files
* Display blog metadata
* Render Markdown content

### Deliverables

* Blog listing page
* Individual blog pages
* Static Site Generation
* Dynamic blog routing

---

## Phase 5 — Documentation Site

### Objectives

* Create documentation pages
* Use nested layouts
* Add persistent sidebar
* Organize documentation
* Render Markdown documentation
* Improve navigation

### Deliverables

* Documentation homepage
* Sidebar navigation
* Nested layout implementation
* Static documentation pages

---

## Phase 6 — Final Polish

### Objectives

* Improve responsive design
* Add metadata
* Improve accessibility
* Optimize project structure
* Clean codebase
* Final testing
* Update README

### Deliverables

* Responsive application
* Accessible interface
* Production-ready structure
* Completed documentation

---

# Static Site Generation (SSG)

The project uses Static Site Generation for:

* Blog posts
* Documentation pages

Benefits include:

* Faster page loading
* Better SEO
* Improved performance
* Static HTML generation at build time

---

# Markdown Content

## Blog

```text
content/blog/
```

Example files:

* first-post.md
* second-post.md
* third-post.md

## Documentation

```text
content/docs/
```

Example files:

* getting-started.md
* installation.md
* project-structure.md

---

# Learning Outcomes

This project demonstrates:

* Next.js App Router
* Static Site Generation
* Dynamic Routing
* Nested Layouts
* Markdown Rendering
* TypeScript
* Tailwind CSS
* Component-Based Architecture
* File-Based Routing
* Responsive Design

---

# Future Improvements

Potential enhancements include:

* MDX support
* Search functionality
* Syntax highlighting
* Dark mode
* Categories
* Tags
* Pagination
* Table of contents
* Reading time estimation
* Previous and next navigation
* RSS feed
* Sitemap generation
* Blog filtering

---

# License

This project is created for educational and assignment purposes.

pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
