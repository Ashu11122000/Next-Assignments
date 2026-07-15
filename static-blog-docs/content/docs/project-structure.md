---
title: "Project Structure"
description: "An overview of the project's folder organization and the purpose of each directory."
---

# Project Structure

A well-organized project structure makes an application easier to understand, maintain, and extend. This project follows the **Next.js App Router** convention, where folders inside the `app` directory represent application routes. Content is stored separately from the application logic, making it simple to update blog posts and documentation without modifying React components.

The project is divided into multiple sections, each with a specific responsibility. Markdown files are stored in the `content` directory, reusable UI components are placed in the `components` folder, and helper functions for reading Markdown files are located inside the `lib` directory. This separation of concerns keeps the codebase clean and scalable while following modern development practices.

The documentation section also demonstrates the use of **nested layouts**. A shared layout provides a persistent sidebar for all documentation pages, allowing users to navigate between topics while maintaining a consistent interface. This approach is commonly used in documentation websites built with Next.js.

The following directory structure represents the organization of this project.

```text
static-blog-docs/
│
├── content/
│   ├── blog/
│   │   ├── first-post.md
│   │   ├── second-post.md
│   │   ├── third-post.md
│   │   ├── fourth-post.md
│   │   └── fifth-post.md
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

## Directory Overview

### `content/`

The `content` directory stores all Markdown files used by the application. Keeping content outside the source code makes it easy to add, update, or remove blog posts and documentation pages without changing any React components.

### `content/blog/`

This folder contains all blog posts. Each post is written as an individual Markdown file with frontmatter metadata such as the title, description, publication date, and author.

### `content/docs/`

This folder contains the documentation pages. Each Markdown file represents a documentation topic that will be displayed within the shared documentation layout.

### `public/`

The `public` directory stores static assets such as images, icons, and other files that can be accessed directly by the application.

### `src/app/`

This directory contains the application's routes using the Next.js App Router. Every folder represents a route, while files such as `page.tsx` and `layout.tsx` define the page content and shared layouts.

### `src/components/`

Reusable user interface components are placed in this folder. Components such as the navigation bar, footer, sidebar, and blog cards can be shared across multiple pages to avoid code duplication.

### `src/lib/`

The `lib` directory contains helper functions responsible for reading Markdown files, parsing frontmatter, converting Markdown into HTML, and retrieving blog or documentation content.

### `src/types/`

This folder contains shared TypeScript interfaces and types that provide consistent data structures throughout the project.

### `src/utils/`

General-purpose utility functions can be placed here as the project grows. Keeping helper functions separate improves code organization and maintainability.

## Project Highlights

This project demonstrates the following Next.js concepts:

- App Router
- File-based routing
- Dynamic routes
- Nested layouts
- Static Site Generation (SSG)
- Markdown-based content management
- TypeScript
- Tailwind CSS
- Reusable component architecture

## Conclusion

A clear and organized folder structure is essential for building maintainable applications. By separating content, components, utilities, and application routes into dedicated directories, this project remains easy to understand, extend, and manage. The structure also provides a solid foundation for adding new blog posts, documentation pages, or features as the project grows.