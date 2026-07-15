# Task Manager

A modern Task Manager application built with **Next.js**, **TypeScript**, **Tailwind CSS**, **Prisma**, and **Server Actions**. The application demonstrates full CRUD (Create, Read, Update, Delete) functionality while persisting data in a database using Prisma ORM.

This project is designed as a learning-focused assignment that follows modern Next.js App Router best practices and clean project architecture.

---

## Project Objective

Develop a Task Manager application that allows users to:

* Create new tasks
* View all tasks
* Update existing tasks
* Delete tasks
* Persist data using a database
* Perform all CRUD operations through Next.js Server Actions

---

## Tech Stack

### Frontend

* Next.js (App Router)
* React
* TypeScript
* Tailwind CSS

### Backend

* Next.js Server Actions
* Prisma ORM
* SQLite Database

### Validation

* Zod

### Utilities

* Lucide React
* clsx
* tailwind-merge
* class-variance-authority

### Development Tools

* ESLint
* Prettier
* Turbopack

---

## Project Structure

```text
task-manager/
│
├── prisma/
│   └── schema.prisma
│
├── public/
│
├── src/
│   ├── app/
│   │   ├── actions/
│   │   │   └── task.actions.ts
│   │   │
│   │   ├── create/
│   │   │   └── page.tsx
│   │   │
│   │   ├── edit/
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   │
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Badge.tsx
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── Input.tsx
│   │   │
│   │   ├── DeleteButton.tsx
│   │   ├── EmptyState.tsx
│   │   ├── TaskCard.tsx
│   │   ├── TaskForm.tsx
│   │   └── TaskList.tsx
│   │
│   ├── lib/
│   │   ├── prisma.ts
│   │   └── utils.ts
│   │
│   ├── types/
│   │   └── task.ts
│   │
│   └── validations/
│       └── task.ts
│
├── prisma/
├── public/
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

---

# Features

## Current

* Next.js App Router
* TypeScript support
* Tailwind CSS
* ESLint configuration
* Prisma setup
* Modern folder architecture
* Server Action structure
* Reusable component structure
* Utility and validation folders

---

## Planned

* Create Task
* View Tasks
* Edit Task
* Delete Task
* Persistent database
* Form validation
* Responsive UI
* Loading states
* Empty states
* Error handling

---

# Application Workflow

```text
User

↓

Create Task

↓

Server Action

↓

Prisma ORM

↓

SQLite Database

↓

Revalidate Page

↓

Updated Task List
```

---

# Development Phases

## Phase 1 — Project Setup

Status: Completed

### Objectives

* Create Next.js project
* Configure TypeScript
* Configure Tailwind CSS
* Configure ESLint
* Install dependencies
* Initialize Prisma
* Create project structure

### Deliverables

* Next.js project initialized
* Tailwind CSS configured
* TypeScript configured
* Prisma initialized
* Folder structure created

---

## Phase 2 — Database Setup

Status: Pending

### Objectives

* Configure SQLite
* Create Prisma schema
* Define Task model
* Generate Prisma Client
* Create database
* Run migrations

### Deliverables

* Database connected
* Prisma Client generated
* Task model created
* Database migration completed

---

## Phase 3 — Shared Utilities

Status: Pending

### Objectives

* Configure Prisma singleton
* Create reusable utility functions
* Create TypeScript task types
* Create Zod validation schema

### Deliverables

* prisma.ts
* utils.ts
* task.ts
* validation schema

---

## Phase 4 — Server Actions

Status: Pending

### Objectives

Implement CRUD operations using Server Actions.

### Functions

* createTask()
* updateTask()
* deleteTask()
* getTask()
* getTasks()

### Deliverables

* CRUD Server Actions
* Cache revalidation
* Redirect handling

---

## Phase 5 — UI Components

Status: Pending

### Components

* Button
* Card
* Input
* Badge
* DeleteButton
* EmptyState

### Deliverables

Reusable UI components with consistent styling.

---

## Phase 6 — Task Components

Status: Pending

### Components

* TaskForm
* TaskCard
* TaskList

### Deliverables

Task-specific reusable components.

---

## Phase 7 — Pages

Status: Pending

### Pages

* Home
* Create Task
* Edit Task

### Deliverables

Complete routing using the App Router.

---

## Phase 8 — Validation and User Experience

Status: Pending

### Objectives

* Client-side validation
* Server-side validation
* Loading states
* Empty states
* Error handling
* Success feedback

### Deliverables

Improved usability and robust form handling.

---

## Phase 9 — Responsive Design

Status: Pending

### Objectives

* Mobile-first layout
* Tablet optimization
* Desktop optimization
* Responsive navigation
* Accessible forms

### Deliverables

Responsive application across all screen sizes.

---

## Phase 10 — Final Polish

Status: Pending

### Objectives

* Code cleanup
* Performance optimization
* Accessibility improvements
* Metadata
* Final testing
* Production build verification

### Deliverables

Production-ready Task Manager application.

---

# CRUD Operations

| Operation | Description           |
| --------- | --------------------- |
| Create    | Add a new task        |
| Read      | Display all tasks     |
| Update    | Edit an existing task |
| Delete    | Remove a task         |

---

# Database Flow

```text
Next.js

↓

Server Actions

↓

Prisma ORM

↓

SQLite Database
```

---

# Upcoming Components

## UI Components

* Button
* Card
* Input
* Badge

## Feature Components

* TaskForm
* TaskCard
* TaskList
* DeleteButton
* EmptyState

---

# Dependencies

```json
{
  "@prisma/client": "latest",
  "prisma": "latest",
  "zod": "latest",
  "lucide-react": "latest",
  "clsx": "latest",
  "tailwind-merge": "latest",
  "class-variance-authority": "latest"
}
```

---

# Development Commands

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

Initialize Prisma

```bash
npx prisma init
```

Create a migration

```bash
npx prisma migrate dev
```

Generate Prisma Client

```bash
npx prisma generate
```

Open Prisma Studio

```bash
npx prisma studio
```

Create a production build

```bash
npm run build
```

Start the production server

```bash
npm start
```

---

# Learning Outcomes

By completing this project you will gain practical experience with:

* Next.js App Router
* TypeScript
* Tailwind CSS
* Prisma ORM
* SQLite
* Server Actions
* CRUD operations
* Form validation with Zod
* Component-based architecture
* Responsive design
* Modern React development practices

---

# Project Status

Current Phase: **Phase 1 — Project Setup**

Overall Progress:

* Phase 1: Completed
* Phase 2: Pending
* Phase 3: Pending
* Phase 4: Pending
* Phase 5: Pending
* Phase 6: Pending
* Phase 7: Pending
* Phase 8: Pending
* Phase 9: Pending
* Phase 10: Pending

The project foundation has been established successfully. The next phase focuses on configuring the database, defining the Task model with Prisma, and enabling persistent data storage.
