/**
 * ============================================================================
 * Create Task Page
 * ============================================================================
 *
 * Page for creating a new task.
 *
 * Features:
 * - Server Component
 * - Uses reusable TaskForm
 * - Responsive layout
 * - Navigation back to Home
 * - SEO metadata
 * ============================================================================
 */

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { TaskForm } from "@/components/TaskForm";
import { Button } from "@/components/ui/Button";

/* -------------------------------------------------------------------------- */
/* Metadata                                                                   */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Create Task",
  description: "Create a new task in your Task Manager application.",
};

/* -------------------------------------------------------------------------- */
/* Create Task Page                                                           */
/* -------------------------------------------------------------------------- */

export default function CreateTaskPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col px-6 py-10">

      {/* ------------------------------------------------------------------ */}
      {/* Header */}
      {/* ------------------------------------------------------------------ */}

      <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Create Task
          </h1>

          <p className="text-slate-600 dark:text-slate-400">
            Add a new task to your task list. You can include an optional
            description to provide more details.
          </p>
        </div>

        <Button asChild variant="outline">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Task Form */}
      {/* ------------------------------------------------------------------ */}

      <TaskForm />
          </main>
  );
}