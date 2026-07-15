/**
 * ============================================================================
 * Task List Component
 * ============================================================================
 *
 * Displays a collection of tasks in a responsive grid.
 *
 * Features:
 * - Responsive grid layout
 * - Empty state handling
 * - Uses TaskCard
 * - Fully reusable
 * - Accessible
 * ============================================================================
 */

import { EmptyState } from "@/components/EmptyState";
import { TaskCard } from "@/components/TaskCard";
import type { Task } from "@/types/task";

interface TaskListProps {
  /**
   * List of tasks to display.
   */
  tasks: Task[];
}

/* -------------------------------------------------------------------------- */
/* Task List                                                                  */
/* -------------------------------------------------------------------------- */

export function TaskList({ tasks }: TaskListProps) {
  /* ------------------------------------------------------------------------ */
  /* Empty State                                                              */
  /* ------------------------------------------------------------------------ */

  if (tasks.length === 0) {
    return (
      <EmptyState
        title="No tasks found"
        description="Create your first task to start organizing your work."
      />
    );
  }

  /* ------------------------------------------------------------------------ */
  /* Task Grid                                                                */
  /* ------------------------------------------------------------------------ */

  return (
    <section
      aria-label="Task List"
      className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
    >
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
        />
      ))}
    </section>
  );
}