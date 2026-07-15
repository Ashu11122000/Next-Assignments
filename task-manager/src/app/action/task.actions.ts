"use server";

/**
 * ============================================================================
 * Task Server Actions
 * ============================================================================
 *
 * Server Actions responsible for all CRUD operations on tasks.
 *
 * Features:
 * - Create tasks
 * - Read tasks
 * - Update tasks
 * - Delete tasks
 * - Zod validation
 * - Prisma ORM
 * - Cache revalidation
 *
 * Compatible with:
 * - Next.js 16
 * - Prisma 7
 * - Server Actions
 * ============================================================================
 */

import { revalidatePath } from "next/cache";

import prisma from "@/lib/prisma";
import {
  createTaskSchema,
  deleteTaskSchema,
  updateTaskSchema,
} from "@/validations/task";

/* -------------------------------------------------------------------------- */
/* Create Task                                                                */
/* -------------------------------------------------------------------------- */

/**
 * Creates a new task.
 *
 * @param formData - Incoming form data from the client.
 */
export async function createTask(formData: FormData): Promise<void> {
  /* ------------------------------------------------------------------------ */
  /* Extract Form Values                                                      */
  /* ------------------------------------------------------------------------ */

  const rawData = {
    title: formData.get("title"),
    description: formData.get("description"),
  };

  /* ------------------------------------------------------------------------ */
  /* Validate Input                                                           */
  /* ------------------------------------------------------------------------ */

  const validatedData = createTaskSchema.parse({
    title: rawData.title,
    description:
      typeof rawData.description === "string" &&
      rawData.description.trim() !== ""
        ? rawData.description
        : undefined,
  });

  /* ------------------------------------------------------------------------ */
  /* Create Task                                                              */
  /* ------------------------------------------------------------------------ */

  await prisma.task.create({
    data: {
      title: validatedData.title,
      description: validatedData.description,
    },
  });

  /* ------------------------------------------------------------------------ */
  /* Refresh Cached Pages                                                     */
  /* ------------------------------------------------------------------------ */

  revalidatePath("/");
}

/* -------------------------------------------------------------------------- */
/* Get All Tasks                                                              */
/* -------------------------------------------------------------------------- */

/**
 * Retrieves all tasks ordered by newest first.
 *
 * @returns An array of tasks.
 */
export async function getTasks() {
  try {
    const tasks = await prisma.task.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return tasks;
  } catch (error) {
    console.error("Failed to fetch tasks:", error);
    throw new Error("Unable to retrieve tasks.");
  }
}

/* -------------------------------------------------------------------------- */
/* Get Single Task                                                            */
/* -------------------------------------------------------------------------- */

/**
 * Retrieves a single task by its ID.
 *
 * @param id - Task ID.
 * @returns The matching task or null if not found.
 */
export async function getTask(id: number) {
  if (!Number.isInteger(id) || id <= 0) {
    throw new Error("Invalid task ID.");
  }

  try {
    const task = await prisma.task.findUnique({
      where: {
        id,
      },
    });

    return task;
  } catch (error) {
    console.error(`Failed to fetch task with ID ${id}:`, error);
    throw new Error("Unable to retrieve task.");
  }
}

/* -------------------------------------------------------------------------- */
/* Update Task                                                                */
/* -------------------------------------------------------------------------- */

/**
 * Updates an existing task.
 *
 * @param formData - Incoming form data from the client.
 */
export async function updateTask(formData: FormData): Promise<void> {
  /* ------------------------------------------------------------------------ */
  /* Extract Form Values                                                      */
  /* ------------------------------------------------------------------------ */

  const rawData = {
    id: Number(formData.get("id")),
    title: formData.get("title"),
    description: formData.get("description"),
    completed: formData.get("completed") === "true",
  };

  /* ------------------------------------------------------------------------ */
  /* Validate Input                                                           */
  /* ------------------------------------------------------------------------ */

  const validatedData = updateTaskSchema.parse({
    id: rawData.id,
    title: rawData.title,
    description:
      typeof rawData.description === "string" &&
      rawData.description.trim() !== ""
        ? rawData.description
        : undefined,
    completed: rawData.completed,
  });

  /* ------------------------------------------------------------------------ */
  /* Update Task                                                              */
  /* ------------------------------------------------------------------------ */

  await prisma.task.update({
    where: {
      id: validatedData.id,
    },
    data: {
      title: validatedData.title,
      description: validatedData.description,
      completed: validatedData.completed,
    },
  });

  /* ------------------------------------------------------------------------ */
  /* Refresh Cached Pages                                                     */
  /* ------------------------------------------------------------------------ */

  revalidatePath("/");
}

/* -------------------------------------------------------------------------- */
/* Delete Task                                                                */
/* -------------------------------------------------------------------------- */

/**
 * Deletes a task by its ID.
 *
 * @param id - The ID of the task to delete.
 */
export async function deleteTask(id: number): Promise<void> {
  /* ------------------------------------------------------------------------ */
  /* Validate Input                                                           */
  /* ------------------------------------------------------------------------ */

  const validatedData = deleteTaskSchema.parse({
    id,
  });

  /* ------------------------------------------------------------------------ */
  /* Delete Task                                                              */
  /* ------------------------------------------------------------------------ */

  await prisma.task.delete({
    where: {
      id: validatedData.id,
    },
  });

  /* ------------------------------------------------------------------------ */
  /* Refresh Cached Pages                                                     */
  /* ------------------------------------------------------------------------ */

  revalidatePath("/");
}