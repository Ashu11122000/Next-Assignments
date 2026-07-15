---
title: "Installation"
description: "Step-by-step guide to install, configure, and run the Static Blog & Documentation Site locally."
---

# Installation

This guide explains how to set up and run the **Static Blog & Documentation Site** on your local machine. The project is built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Markdown**, making the setup process straightforward. Before you begin, ensure that you have **Node.js** and **npm** installed on your system.

The project uses a small number of dependencies to process Markdown files. Blog posts and documentation pages are stored inside the `content` directory, while the application logic resides in the `src` directory. After installing the required packages, the development server can be started to view the website in the browser.

Once the development server is running, any changes made to the source code or Markdown files will automatically refresh in the browser. This provides a smooth development experience and allows content to be updated without manually rebuilding the application.

Follow the steps below to install and run the project.

## Prerequisites

Before installing the project, make sure the following software is available:

- Node.js (Latest LTS version recommended)
- npm (Included with Node.js)
- A code editor such as Visual Studio Code

## Clone the Repository

Clone the project repository to your local machine.

```bash
git clone https://github.com/Ashu11122000/Next-Assignments.git
```

Navigate to the project directory.

```bash
cd static-blog-docs
```

## Install Dependencies

Install all required project dependencies.

```bash
npm install
```

The project also uses the following Markdown-related packages:

```bash
npm install gray-matter remark remark-html
```

## Run the Development Server

Start the local development server.

```bash
npm run dev
```

After the server starts successfully, open the following address in your browser:

```text
http://localhost:3000
```

## Build for Production

To generate an optimized production build, run:

```bash
npm run build
```

To preview the production build locally, use:

```bash
npm start
```

## Troubleshooting

If you encounter any issues during installation, try the following:

- Verify that Node.js and npm are installed correctly.
- Delete the `node_modules` folder and reinstall dependencies.
- Ensure all required packages are installed.
- Restart the development server after making configuration changes.
- Check the terminal for any build or runtime errors.

## Conclusion

After completing these steps, the project will be running locally and ready for development. You can begin creating blog posts, updating documentation, and exploring the features of Next.js, Markdown, and Static Site Generation while working on the assignment.