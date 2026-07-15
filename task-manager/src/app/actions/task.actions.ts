"use server";

/**
 * ============================================================================
 * Task Server Actions
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
/* Action State                                                               */
/* -------------------------------------------------------------------------- */

export interface FormState {
  success: boolean;
  message?: string;
  errors?: Record<string, string[]>;
}

/* -------------------------------------------------------------------------- */
/* Create Task                                                                */
/* -------------------------------------------------------------------------- */

export async function createTask(
  _previousState: FormState,
  formData: FormData
): Promise<FormState> {
  const rawData = {
    title: formData.get("title"),
    description: formData.get("description"),
  };

  const validatedData = createTaskSchema.safeParse({
    title: rawData.title,
    description:
      typeof rawData.description === "string" &&
      rawData.description.trim() !== ""
        ? rawData.description
        : undefined,
  });

  if (!validatedData.success) {
    return {
      success: false,
      message: "Please correct the highlighted fields.",
      errors: validatedData.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.task.create({
      data: validatedData.data,
    });

    revalidatePath("/");

    return {
      success: true,
      message: "Task created successfully.",
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Failed to create task.",
    };
  }
}

/* -------------------------------------------------------------------------- */
/* Update Task                                                                */
/* -------------------------------------------------------------------------- */

export async function updateTask(
  _previousState: FormState,
  formData: FormData
): Promise<FormState> {
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

  const validatedData = updateTaskSchema.safeParse({
    id: rawData.id,
    title: rawData.title,
    description:
      typeof rawData.description === "string" &&
      rawData.description.trim() !== ""
        ? rawData.description
        : undefined,
    completed: rawData.completed,
  });

  if (!validatedData.success) {
    return {
      success: false,
      message: "Please correct the highlighted fields.",
      errors: validatedData.error.flatten().fieldErrors,
    };
  }

  /* ------------------------------------------------------------------------ */
  /* Update Task                                                              */
  /* ------------------------------------------------------------------------ */

  try {
    await prisma.task.update({
      where: {
        id: validatedData.data.id,
      },
      data: {
        title: validatedData.data.title,
        description: validatedData.data.description,
        completed: validatedData.data.completed,
      },
    });

    revalidatePath("/");

    revalidatePath(`/edit/${validatedData.data.id}`);

    return {
      success: true,
      message: "Task updated successfully.",
    };
  } catch (error) {
    console.error("Failed to update task:", error);

    return {
      success: false,
      message: "Failed to update task.",
    };
  }
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

  const validatedData = deleteTaskSchema.safeParse({
    id,
  });

  if (!validatedData.success) {
    throw new Error("Invalid task ID.");
  }

  /* ------------------------------------------------------------------------ */
  /* Delete Task                                                              */
  /* ------------------------------------------------------------------------ */

  try {
    await prisma.task.delete({
      where: {
        id: validatedData.data.id,
      },
    });

    /* ---------------------------------------------------------------------- */
    /* Refresh Cached Pages                                                   */
    /* ---------------------------------------------------------------------- */

    revalidatePath("/");
  } catch (error) {
    console.error("Failed to delete task:", error);

    throw new Error("Unable to delete task.");
  }
}

/* -------------------------------------------------------------------------- */
/* Get All Tasks                                                              */
/* -------------------------------------------------------------------------- */

export async function getTasks() {
  try {
    return await prisma.task.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  } catch (error) {
    console.error("Failed to fetch tasks:", error);
    throw new Error("Unable to retrieve tasks.");
  }
}

/* -------------------------------------------------------------------------- */
/* Get Single Task                                                            */
/* -------------------------------------------------------------------------- */

export async function getTask(id: number) {
  if (!Number.isInteger(id) || id <= 0) {
    throw new Error("Invalid task ID.");
  }

  try {
    return await prisma.task.findUnique({
      where: {
        id,
      },
    });
  } catch (error) {
    console.error(`Failed to fetch task with ID ${id}:`, error);
    throw new Error("Unable to retrieve task.");
  }
}