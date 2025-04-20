"use server";
import { db } from "@/lib/db";
import { TodosTable } from "@/lib/db/schema";
import { eq, sql } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export const getTodos = async ({
  page = 1,
  pageSize = 15,
}: {
  page?: number;
  pageSize?: number;
}) => {
  return await db
    .select()
    .from(TodosTable)
    .orderBy(TodosTable.createdAt)
    .limit(pageSize)
    .offset((page - 1) * pageSize);
};

export const createTodo = async ({
  description,
  complete,
}: {
  description: string;
  complete?: boolean;
}): Promise<void> => {
  await db.insert(TodosTable).values({
    description,
    complete,
  });
  revalidatePath("/dashboard/server-actions");
};

export const updateTodo = async ({
  id,
  description,
  complete,
}: {
  id: number;
  description: string;
  complete?: boolean;
}) => {
  await db
    .update(TodosTable)
    .set({
      description,
      complete,
    })
    .where(eq(TodosTable.id, id));
  revalidatePath("/dashboard/server-actions");
};

export const updateTodoCompletion = async ({
  id,
  complete,
}: {
  id: number;
  complete?: boolean;
}) => {
  await db
    .update(TodosTable)
    .set({
      complete,
    })
    .where(eq(TodosTable.id, id));
  revalidatePath("/dashboard/server-actions");
};
export const deleteTodo = async ({ id }: { id: number }) => {
  await db.delete(TodosTable).where(eq(TodosTable.id, id));
};

export const deleteCompletedTodos = async (): Promise<{
  success: boolean;
  message: string;
}> => {
  try {
    await db.delete(TodosTable).where(eq(TodosTable.complete, true));
    revalidatePath("/dashboard/server-actions");
    return {
      success: true,
      message: "Se eliminaron ${count} tareas completadas",
    };
  } catch (error) {
    console.error("Error al eliminar tareas completadas:", error);
    return {
      success: false,
      message: "Error al intentar eliminar tareas completadas",
    };
  }
};

export const getTodoById = async ({ id }: { id: number }) => {
  const td = await db
    .select({
      description: TodosTable.description,
      complete: TodosTable.complete,
    })
    .from(TodosTable)
    .where(eq(TodosTable.id, id));
  revalidatePath("/dashboard/server-actions");
  return td;
};
