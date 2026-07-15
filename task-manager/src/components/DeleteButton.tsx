"use client";

/**
 * ============================================================================
 * Delete Button Component
 * ============================================================================
 *
 * A reusable delete button for removing tasks.
 *
 * Features:
 * - Confirmation dialog
 * - Loading state
 * - Error handling
 * - Server Actions
 * - Accessible
 * - React 19 compatible
 * ============================================================================
 */

import { useState, useTransition } from "react";
import { Loader2, Trash2 } from "lucide-react";

import { deleteTask } from "@/app/actions/task.actions";
import { Button } from "@/components/ui/Button";

interface DeleteButtonProps {
  /**
   * ID of the task to delete.
   */
  taskId: number;

  /**
   * Optional confirmation message.
   */
  confirmMessage?: string;
}

export function DeleteButton({
  taskId,
  confirmMessage = "Are you sure you want to delete this task?",
}: DeleteButtonProps) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const handleDelete = () => {
    setError(null);

    const confirmed = window.confirm(confirmMessage);

    if (!confirmed) {
      return;
    }

    startTransition(async () => {
      try {
        await deleteTask(taskId);
      } catch (err) {
        console.error(err);

        setError("Failed to delete the task. Please try again.");
      }
    });
  };

  return (
    <div className="flex flex-col items-end gap-2">
      <Button
        type="button"
        variant="destructive"
        size="icon"
        loading={isPending}
        disabled={isPending}
        onClick={handleDelete}
        aria-label="Delete task"
      >
        {isPending ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Trash2 className="h-4 w-4" />
        )}
      </Button>

      {error && (
        <p
          role="alert"
          className="max-w-48 text-right text-xs text-red-600 dark:text-red-400"
        >
          {error}
        </p>
      )}
    </div>
  );
}