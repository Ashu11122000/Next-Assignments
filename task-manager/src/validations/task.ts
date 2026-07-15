/**
 * ============================================================================
 * Task Validation Schemas
 * ============================================================================
 *
 * Zod schemas used to validate task data throughout the application.
 *
 * These schemas provide:
 * - Runtime validation
 * - Type inference
 * - Shared validation rules
 * - Consistent error messages
 *
 * Used by:
 * - Server Actions
 * - Forms
 * - API validation
 * ============================================================================
 */

import { z } from "zod";

/* -------------------------------------------------------------------------- */
/* Shared Field Schemas                                                       */
/* -------------------------------------------------------------------------- */

/**
 * Task title validation.
 */
const titleSchema = z
  .string()
  .trim()
  .min(1, "Title is required.")
  .max(100, "Title must not exceed 100 characters.");

/**
 * Task description validation.
 */
const descriptionSchema = z
  .string()
  .trim()
  .max(500, "Description must not exceed 500 characters.")
  .optional();

/* -------------------------------------------------------------------------- */
/* Create Task Schema                                                         */
/* -------------------------------------------------------------------------- */

/**
 * Validation schema for creating a task.
 */
export const createTaskSchema = z.object({
  title: titleSchema,
  description: descriptionSchema,
});

/* -------------------------------------------------------------------------- */
/* Update Task Schema                                                         */
/* -------------------------------------------------------------------------- */

/**
 * Validation schema for updating a task.
 */
export const updateTaskSchema = z.object({
  id: z.number().int().positive("Invalid task ID."),
  title: titleSchema,
  description: descriptionSchema,
  completed: z.boolean(),
});

/* -------------------------------------------------------------------------- */
/* Toggle Task Status Schema                                                  */
/* -------------------------------------------------------------------------- */

/**
 * Validation schema for toggling a task's completion status.
 */
export const toggleTaskSchema = z.object({
  id: z.number().int().positive("Invalid task ID."),
  completed: z.boolean(),
});

/* -------------------------------------------------------------------------- */
/* Delete Task Schema                                                         */
/* -------------------------------------------------------------------------- */

/**
 * Validation schema for deleting a task.
 */
export const deleteTaskSchema = z.object({
  id: z.number().int().positive("Invalid task ID."),
});

/* -------------------------------------------------------------------------- */
/* Inferred Types                                                             */
/* -------------------------------------------------------------------------- */

/**
 * Type inferred from createTaskSchema.
 */
export type CreateTaskSchema = z.infer<typeof createTaskSchema>;

/**
 * Type inferred from updateTaskSchema.
 */
export type UpdateTaskSchema = z.infer<typeof updateTaskSchema>;

/**
 * Type inferred from toggleTaskSchema.
 */
export type ToggleTaskSchema = z.infer<typeof toggleTaskSchema>;

/**
 * Type inferred from deleteTaskSchema.
 */
export type DeleteTaskSchema = z.infer<typeof deleteTaskSchema>;