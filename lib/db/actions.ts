import { eq } from "drizzle-orm";
import { db } from ".";
import { TodosTable } from "./schema";

export const getTodos = async ({
  page = 1,
  pageSize = 5,
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
};

export const deleteTodo = async ({ id }: { id: number }) => {
  await db.delete(TodosTable).where(eq(TodosTable.id, id));
};

export const getTodoById = async ({ id }: { id: number }) => {
  const td = await db
    .select({
      description: TodosTable.description,
      complete: TodosTable.complete,
    })
    .from(TodosTable)
    .where(eq(TodosTable.id, id));
  return td;
};
