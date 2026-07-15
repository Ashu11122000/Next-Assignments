/**
 * ============================================================================
 * Home Page
 * ============================================================================
 *
 * Displays all tasks in the application.
 *
 * Features:
 * - Server Component
 * - Fetches tasks from the database
 * - Displays task list
 * - Empty state support
 * - Create Task CTA
 * - Responsive layout
 * ============================================================================
 */

import type { Metadata } from "next";
import Link from "next/link";
import { PlusCircle } from "lucide-react";

import { getTasks } from "@/app/actions/task.actions";
import { TaskList } from "@/components/TaskList";
import { Button } from "@/components/ui/Button";

/* -------------------------------------------------------------------------- */
/* Metadata                                                                   */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Task Manager",
  description:
    "Manage your tasks with a modern Next.js, Prisma, and Server Actions application.",
};

/* -------------------------------------------------------------------------- */
/* Home Page                                                                  */
/* -------------------------------------------------------------------------- */

export default async function HomePage() {
  const tasks = await getTasks();

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-10">
      {/* ------------------------------------------------------------------ */}
      {/* Header                                                             */}
      {/* ------------------------------------------------------------------ */}

      <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Task Manager
          </h1>

          <p className="max-w-2xl text-slate-600 dark:text-slate-400">
            Organize your work, keep track of progress, and manage tasks with a
            clean and modern interface.
          </p>
        </div>

        <Button asChild>
          <Link href="/create">
            <PlusCircle className="mr-2 h-5 w-5" />
            Create Task
          </Link>
        </Button>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Task List                                                          */}
      {/* ------------------------------------------------------------------ */}

      <TaskList tasks={tasks} />
    </main>
  );
}