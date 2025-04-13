import { db } from "@/lib/db";
import { getTodoById } from "@/lib/db/actions";
import { TodosInsert, TodosTable } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import * as yup from "yup";
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;

  const todo = await getTodoById({ id: Number(id) });
  return NextResponse.json({
    todo,
  });
}

const putSchema = yup.object({
  description: yup.string().required(),
  complete: yup.boolean().optional().default(false),
});
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;

    const bodyJson = await request.json();
    const body: TodosInsert = await putSchema.validate(bodyJson);
    const todo = await db
      .update(TodosTable)
      .set(body)
      .where(eq(TodosTable.id, Number(id)))
      .returning();
    return NextResponse.json({
      status: 200,
      todo,
    });
  } catch (error) {
    return NextResponse.json({
      status: 400,
      message:
        error instanceof Error ? error.message : "An unknown error occurred",
    });
  }
}
