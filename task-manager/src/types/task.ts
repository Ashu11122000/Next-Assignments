/**
 * ============================================================================
 * Task Types
 * ============================================================================
 *
 * Shared TypeScript types used throughout the Task Manager application.
 *
 * These types provide a single source of truth for:
 * - Database task objects
 * - Form input data
 * - Update payloads
 * - Task status
 *
 * Keeping these definitions centralized improves type safety,
 * consistency, and maintainability across the project.
 * ============================================================================
 */

/* -------------------------------------------------------------------------- */
/* Task Status                                                                */
/* -------------------------------------------------------------------------- */

/**
 * Represents the completion state of a task.
 */
export type TaskStatus = "pending" | "completed";

/* -------------------------------------------------------------------------- */
/* Task                                                                       */
/* -------------------------------------------------------------------------- */

/**
 * Represents a complete task returned from the database.
 */
export interface Task {
  id: number;
  title: string;
  description: string | null;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

/* -------------------------------------------------------------------------- */
/* Create Task Input                                                          */
/* -------------------------------------------------------------------------- */

/**
 * Payload used when creating a new task.
 */
export interface CreateTaskInput {
  title: string;
  description?: string;
}

/* -------------------------------------------------------------------------- */
/* Update Task Input                                                          */
/* -------------------------------------------------------------------------- */

/**
 * Payload used when updating an existing task.
 */
export interface UpdateTaskInput {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
}

/* -------------------------------------------------------------------------- */
/* Task Form Data                                                             */
/* -------------------------------------------------------------------------- */

/**
 * Shared form values used by the task form component.
 */
export interface TaskFormData {
  title: string;
  description: string;
  completed: boolean;
}

/* -------------------------------------------------------------------------- */
/* Task Filters                                                               */
/* -------------------------------------------------------------------------- */

/**
 * Available filters for displaying tasks.
 */
export type TaskFilter = "all" | "completed" | "pending";