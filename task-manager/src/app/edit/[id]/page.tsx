/**
 * ============================================================================
 * Edit Task Page
 * ============================================================================
 *
 * Page for editing an existing task.
 *
 * Features:
 * - Server Component
 * - Dynamic route
 * - Fetches task from the database
 * - Displays reusable TaskForm in edit mode
 * - Handles missing tasks
 * - Responsive layout
 * ============================================================================
 */

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { getTask } from "@/app/actions/task.actions";
import { TaskForm } from "@/components/TaskForm";
import { Button } from "@/components/ui/Button";

/* -------------------------------------------------------------------------- */
/* Metadata                                                                   */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Edit Task",
  description: "Update an existing task in your Task Manager application.",
};

/* -------------------------------------------------------------------------- */
/* Props                                                                      */
/* -------------------------------------------------------------------------- */

interface EditTaskPageProps {
  params: Promise<{
    id: string;
  }>;
}

/* -------------------------------------------------------------------------- */
/* Edit Task Page                                                             */
/* -------------------------------------------------------------------------- */

export default async function EditTaskPage({
  params,
}: EditTaskPageProps) {
  const { id } = await params;

  const task = await getTask(Number(id));

  if (!task) {
    notFound();
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col px-6 py-10">

      {/* ------------------------------------------------------------------ */}
      {/* Header */}
      {/* ------------------------------------------------------------------ */}

      <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Edit Task
          </h1>

          <p className="text-slate-600 dark:text-slate-400">
            Update your task details, description, or completion status.
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
      {/* Task Form                                                          */}
      {/* ------------------------------------------------------------------ */}

      <TaskForm task={task} />
      </main>
  );
}