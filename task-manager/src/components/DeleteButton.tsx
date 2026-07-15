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
 * - Server Actions
 * - Accessible
 * - Lucide icon
 * - React 19 compatible
 * ============================================================================
 */

import { useTransition } from "react";
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

  const handleDelete = () => {
    const confirmed = window.confirm(confirmMessage);

    if (!confirmed) {
      return;
    }

    startTransition(async () => {
      await deleteTask(taskId);
    });
  };

  return (
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
  );
}