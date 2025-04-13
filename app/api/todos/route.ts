import { db } from "@/lib/db";
import { getTodos } from "@/lib/db/actions";
import { TodosInsert, TodosTable } from "@/lib/db/schema";
import { NextRequest, NextResponse } from "next/server";
import * as yup from "yup";
export async function GET(request: NextRequest) {
  const page = request.nextUrl.searchParams.get("page");
  const pageSize = request.nextUrl.searchParams.get("pageSize");

  const pageNumber = page ? parseInt(page, 10) : 1;
  const pageSizeNumber = pageSize ? parseInt(pageSize, 10) : 5;

  if (isNaN(pageNumber) || isNaN(pageSizeNumber)) {
    return NextResponse.json(
      { error: "Invalid page or pageSize" },
      { status: 400 }
    );
  }

  const todos = await getTodos({ page: pageNumber, pageSize: pageSizeNumber });

  return NextResponse.json({
    todos,
  });
}

const postSchema = yup.object({
  description: yup.string().required(),
  complete: yup.boolean().optional().default(false),
});

export async function POST(request: Request) {
  try {
    const jsonBody = await request.json();
    const body: TodosInsert = await postSchema.validate(jsonBody);

    await db.insert(TodosTable).values(body);
    console.log(body);

    return NextResponse.json({
      status: 201,
    });
  } catch (error) {
    return NextResponse.json({
      status: 400,
      message:
        error instanceof Error ? error.message : "An unknown error occurred",
    });
  }
}

