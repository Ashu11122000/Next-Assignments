"use client";

/**
 * ============================================================================
 * Task Form Component
 * ============================================================================
 *
 * Reusable form for creating and updating tasks.
 *
 * Features:
 * - Create mode
 * - Edit mode
 * - React useActionState
 * - Next.js Server Actions
 * - Validation-ready
 * - Accessible
 * - Responsive
 * ============================================================================
 */

import { useActionState } from "react";

import {
  createTask,
  updateTask,
} from "@/app/actions/task.actions";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

import type { Task } from "@/types/task";

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

interface TaskFormProps {
  /**
   * Existing task when editing.
   */
  task?: Task;
}

interface FormState {
  success: boolean;
  message?: string | null;
  errors?: Record<string, string[]>;
}

/* -------------------------------------------------------------------------- */
/* Initial State                                                              */
/* -------------------------------------------------------------------------- */

const initialState: FormState = {
  success: false,
};

/* -------------------------------------------------------------------------- */
/* Task Form                                                                  */
/* -------------------------------------------------------------------------- */

export function TaskForm({ task }: TaskFormProps) {
  const action = async (
    previousState: FormState,
    formData: FormData
  ): Promise<FormState> => {
    try {
      if (task) {
        return await updateTask(previousState, formData);
      }

      return await createTask(previousState, formData);
    } catch (error) {
      console.error(error);

      return {
        success: false,
        message: "Something went wrong. Please try again.",
      };
    }
  };

  const [state, formAction, isPending] =
    useActionState<FormState, FormData>(
      action,
      initialState
    );

  return (
    <form
      action={formAction}
      className="space-y-6"
      noValidate
    >
      {/* ------------------------------------------------------------------ */}
      {/* Hidden ID (Edit Mode)                                              */}
      {/* ------------------------------------------------------------------ */}

      {task && (
        <input
          type="hidden"
          name="id"
          value={task.id}
        />
      )}

      {/* ------------------------------------------------------------------ */}
      {/* Title                                                              */}
      {/* ------------------------------------------------------------------ */}

      <Input
        id="title"
        name="title"
        label="Title"
        placeholder="Enter task title"
        defaultValue={task?.title}
        required
      />

      {state.errors?.title && (
        <p className="text-sm text-red-600 dark:text-red-400">
          {state.errors.title[0]}
        </p>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* Description                                                        */}
      {/* ------------------------------------------------------------------ */}

      <div className="space-y-2">
        <label
          htmlFor="description"
          className="text-sm font-medium text-slate-900 dark:text-slate-100"
        >
          Description
        </label>

        <textarea
          id="description"
          name="description"
          rows={5}
          defaultValue={task?.description ?? ""}
          placeholder="Enter task description (optional)"
          className="flex w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm transition-colors placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500"
        />
      </div>

      {state.errors?.description && (
        <p className="text-sm text-red-600 dark:text-red-400">
          {state.errors.description[0]}
        </p>
      )}

            {/* ------------------------------------------------------------------ */}
      {/* Completed (Edit Mode Only)                                         */}
      {/* ------------------------------------------------------------------ */}

      {task && (
        <label className="flex items-center gap-3 rounded-lg border border-slate-200 p-4 dark:border-slate-700">
          <input
            type="checkbox"
            name="completed"
            value="true"
            defaultChecked={task.completed}
            className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
          />

          <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
            Mark this task as completed
          </span>
        </label>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* Form Message                                                       */}
      {/* ------------------------------------------------------------------ */}

      {state.message && (
        <div
          className={`rounded-lg border px-4 py-3 text-sm ${
            state.success
              ? "border-green-200 bg-green-50 text-green-700 dark:border-green-800 dark:bg-green-950/30 dark:text-green-300"
              : "border-red-200 bg-red-50 text-red-700 dark:border-red-800 dark:bg-red-950/30 dark:text-red-300"
          }`}
          role="alert"
          aria-live="polite"
        >
          {state.message}
        </div>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* Submit Button                                                      */}
      {/* ------------------------------------------------------------------ */}

      <Button
        type="submit"
        className="w-full sm:w-auto"
        loading={isPending}
        disabled={isPending}
      >
        {isPending
          ? task
            ? "Updating..."
            : "Creating..."
          : task
            ? "Update Task"
            : "Create Task"}
      </Button>
    </form>
  );
}